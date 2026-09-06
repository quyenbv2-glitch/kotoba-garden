/**
 * Xử lý file Excel/CSV cho KotobaGarden
 * Sử dụng thư viện xlsx (SheetJS) để đọc/ghi file
 * Hỗ trợ validation và batch saving vào Firestore
 */

import { Word, Course } from "../types/kotoba";
import * as XLSX from "xlsx";

/**
 * Định dạng file Excel/CSV chuẩn cho KotobaGarden
 */
export interface ExcelImportTemplate {
  Kanji: string;
  Kana: string;
  Romaji: string;
  HanViet: string;
  Meaning: string;
  TextMnemonic?: string;
  LessonGroup?: string;
}

/**
 * Kiểm tra tính hợp lệ của dữ liệu từ vựng
 */
export function validateWordData(data: ExcelImportTemplate): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Kiểm tra trường bắt buộc
  if (!data.Kanji?.trim()) {
    errors.push("Kanji không được để trống");
  }
  if (!data.Kana?.trim()) {
    errors.push("Kana không được để trống");
  }
  if (!data.Romaji?.trim()) {
    errors.push("Romaji không được để trống");
  }
  if (!data.Meaning?.trim()) {
    errors.push("Meaning không được để trống");
  }

  // Kiểm tra độ dài
  if (data.Kanji?.length > 10) {
    errors.push("Kanji không được vượt quá 10 ký tự");
  }
  if (data.Kana?.length > 20) {
    errors.push("Kana không được vượt quá 20 ký tự");
  }
  if (data.Romaji?.length > 20) {
    errors.push("Romaji không được vượt quá 20 ký tự");
  }
  if (data.Meaning?.length > 100) {
    errors.push("Meaning không được vượt quá 100 ký tự");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Đọc file Excel/CSV và chuyển đổi thành mảng từ vựng
 */
export function parseExcelFile(file: File): Promise<{ words: Word[]; errors: string[] }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        if (!data) {
          reject(new Error("Không thể đọc file"));
          return;
        }

        // Đọc workbook
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Chuyển đổi thành JSON
        const jsonData = XLSX.utils.sheet_to_json<ExcelImportTemplate>(worksheet, {
          header: 1,
          defval: "",
        });

        // Xử lý header
        if (jsonData.length === 0) {
          resolve({ words: [], errors: ["File trống"] });
          return;
        }

        const headers = jsonData[0] as string[];
        const expectedHeaders = ["Kanji", "Kana", "Romaji", "HanViet", "Meaning", "TextMnemonic", "LessonGroup"];

        // Kiểm tra header có khớp không (cho phép thiếu một số trường tùy chọn)
        const hasRequiredHeaders =
          headers.includes("Kanji") &&
          headers.includes("Kana") &&
          headers.includes("Romaji") &&
          headers.includes("HanViet") &&
          headers.includes("Meaning");

        if (!hasRequiredHeaders) {
          resolve({
            words: [],
            errors: [
              `File không đúng định dạng. Cần có các cột: ${expectedHeaders.join(", ")}`,
              `Các cột tìm thấy: ${headers.join(", ")}`,
            ],
          });
          return;
        }

        // Xử lý dữ liệu
        const words: Word[] = [];
        const errors: string[] = [];

        // Bắt đầu từ hàng 2 (sau header)
        for (let rowIndex = 1; rowIndex < jsonData.length; rowIndex++) {
          const row = jsonData[rowIndex];
          if (!row || typeof row !== "object") continue;

          // Tạo object từ row dựa trên header
          const rowData: ExcelImportTemplate = {
            Kanji: (row[headers.indexOf("Kanji")] || "").toString(),
            Kana: (row[headers.indexOf("Kana")] || "").toString(),
            Romaji: (row[headers.indexOf("Romaji")] || "").toString(),
            HanViet: (row[headers.indexOf("HanViet")] || "").toString(),
            Meaning: (row[headers.indexOf("Meaning")] || "").toString(),
            TextMnemonic: (row[headers.indexOf("TextMnemonic")] || "").toString() || undefined,
            LessonGroup: (row[headers.indexOf("LessonGroup")] || "").toString() || undefined,
          };

          // Kiểm tra tính hợp lệ
          const validation = validateWordData(rowData);
          if (!validation.isValid) {
            errors.push(`Hàng ${rowIndex + 1}: ${validation.errors.join(", ")}`);
            continue;
          }

          // Tạo từ vựng
          const word: Word = {
            id: `${Date.now()}-${rowIndex}-${Math.random().toString(36).substr(2, 9)}`,
            kanji: rowData.Kanji.trim(),
            kana: rowData.Kana.trim(),
            romaji: rowData.Romaji.trim(),
            hanViet: rowData.HanViet.trim(),
            meaning: rowData.Meaning.trim(),
            textMnemonic: rowData.TextMnemonic?.trim(),
            lessonGroup: rowData.LessonGroup?.trim(),
            courseId: "", // Sẽ được điền sau khi tạo course
          };

          words.push(word);
        }

        resolve({ words, errors });
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Lỗi khi đọc file"));
    };

    reader.readAsArrayBuffer(file);
  });
}

/**
 * Tạo file Excel từ mảng từ vựng
 */
export function createExcelFile(words: Word[], courseTitle: string = "KotobaGarden Custom Deck"): Blob {
  // Chuyển đổi từ Word sang ExcelImportTemplate
  const excelData: ExcelImportTemplate[] = words.map((word) => ({
    Kanji: word.kanji,
    Kana: word.kana,
    Romaji: word.romaji,
    HanViet: word.hanViet,
    Meaning: word.meaning,
    TextMnemonic: word.textMnemonic || "",
    LessonGroup: word.lessonGroup || "",
  }));

  // Tạo worksheet
  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Thêm header đẹp
  const range = XLSX.utils.decode_range(worksheet["!ref"] || "");
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const address = XLSX.utils.encode_cell({ r: 0, c: C });
    if (!worksheet[address]) continue;
    const cell = worksheet[address];
    if (cell.t === "s") {
      switch (cell.v) {
        case "Kanji":
          cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
          break;
        case "Kana":
          cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
          break;
        case "Romaji":
          cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
          break;
        case "HanViet":
          cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
          break;
        case "Meaning":
          cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
          break;
        case "TextMnemonic":
          cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
          break;
        case "LessonGroup":
          cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
          break;
      }
    }
  }

  // Tạo workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Từ Vựng");

  // Thêm metadata sheet
  const metadata: { [key: string]: string }[] = [
    { Property: "Course Title", Value: courseTitle },
    { Property: "Word Count", Value: words.length.toString() },
    { Property: "Created At", Value: new Date().toISOString() },
    { Property: "Created By", Value: "KotobaGarden" },
  ];
  const metadataSheet = XLSX.utils.json_to_sheet(metadata);
  XLSX.utils.book_append_sheet(workbook, metadataSheet, "Thông Tin");

  // Tạo file Excel
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  return new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

/**
 * Tạo file CSV từ mảng từ vựng
 */
export function createCSVFile(words: Word[]): Blob {
  const headers = ["Kanji", "Kana", "Romaji", "HanViet", "Meaning", "TextMnemonic", "LessonGroup"];
  const rows = words.map((word) => [
    `"${word.kanji.replace(/"/g, '""')}"`,
    `"${word.kana.replace(/"/g, '""')}"`,
    `"${word.romaji.replace(/"/g, '""')}"`,
    `"${word.hanViet.replace(/"/g, '""')}"`,
    `"${word.meaning.replace(/"/g, '""')}"`,
    `"${(word.textMnemonic || "").replace(/"/g, '""')}"`,
    `"${(word.lessonGroup || "").replace(/"/g, '""')}"`,
  ].join(","));

  const csvContent = [headers.join(","), ...rows].join("\n");
  return new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
}

/**
 * Tải xuống file
 */
export function downloadFile(blob: Blob, filename: string): void {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

/**
 * Tạo template file Excel/CSV để người dùng download
 */
export function createTemplateFile(format: "xlsx" | "csv" = "xlsx"): Blob {
  const { headers, exampleRows } = getExcelTemplate();

  if (format === "csv") {
    const csvContent = [
      headers.join(","),
      ...exampleRows.map((row) =>
        row
          .map((cell) => `"${(cell || "").replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\n");
    return new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  } else {
    // Tạo Excel template
    const worksheetData = [headers, ...exampleRows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Định dạng header
    const range = XLSX.utils.decode_range(worksheet["!ref"] || "");
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const address = XLSX.utils.encode_cell({ r: 0, c: C });
      if (!worksheet[address]) continue;
      const cell = worksheet[address];
      if (cell.t === "s") {
        cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "FFFACD" } } };
      }
    }

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Mẫu Từ Vựng");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    return new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }
}

/**
 * Hàm helper để tạo ID duy nhất
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}