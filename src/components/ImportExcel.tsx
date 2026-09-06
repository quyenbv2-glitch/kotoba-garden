import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { parseExcelFile, createTemplateFile, downloadFile } from "../utils/excelHandler";
import { addDoc, collection, getDoc, doc, writeBatch, updateDoc } from "../lib/firebase";
import { db } from "../lib/firebase";

interface ImportExcelProps {
  uid: string;
  onSuccess: (courseId: string) => void;
}

export function ImportExcel({ uid, onSuccess }: ImportExcelProps) {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setLoading(true);

    try {
      // Parse file
      const { words, errors } = await parseExcelFile(file);
      
      if (errors.length > 0) {
        setError(errors.join("\n"));
        setLoading(false);
        return;
      }

      if (words.length === 0) {
        setError("File không chứa dữ liệu từ vựng hợp lệ");
        setLoading(false);
        return;
      }

      // Tạo course mới
      const courseRef = await addDoc(collection(db, "courses"), {
        title: courseTitle || "Custom Deck",
        description: courseDescription,
        level: "Custom",
        creatorId: uid,
        creatorName: "", // Sẽ được điền sau
        isCustom: true,
        isPublic,
        wordCount: words.length,
        createdAt: new Date().toISOString(),
        tags: ["custom"],
      });

      // Lưu từ vựng vào subcollection
      const wordsRef = collection(db, "courses", courseRef.id, "words");
      const batch = writeBatch(db);
      
      words.forEach((word) => {
        const wordRef = doc(wordsRef);
        batch.set(wordRef, {
          ...word,
          courseId: courseRef.id,
        });
      });

      await batch.commit();

      // Cập nhật course với creatorName
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        await updateDoc(courseRef, {
          creatorName: userDoc.data().displayName,
        });
      }

      setSuccess(`Đã tạo thành công khóa học "${courseTitle || "Custom Deck"}" với ${words.length} từ vựng!`);
      setLoading(false);
      e.target.value = ""; // Reset file input
      
      // Gọi callback sau 2 giây
      setTimeout(() => {
        onSuccess(courseRef.id);
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Lỗi khi xử lý file");
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader className="text-center">
        <div className="text-5xl mb-4">📤</div>
        <CardTitle className="text-2xl">Nhập bộ từ vựng</CardTitle>
        <CardDescription>
          Tải lên file Excel/CSV để tạo bộ từ vựng cá nhân
          <br />
          <span className="text-xs text-gray-400">
            Hỗ trợ .xlsx và .csv
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="success" className="mb-4">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="course-title">Tên khóa học</Label>
            <Input
              id="course-title"
              type="text"
              placeholder="Ví dụ: Từ vựng N5 chủ đề gia đình"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course-description">Mô tả (tùy chọn)</Label>
            <Input
              id="course-description"
              type="textarea"
              placeholder="Mô tả ngắn về khóa học..."
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
              Khóa học công khai (ai cũng có thể xem)
            </Label>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              onClick={() => {
                const template = createTemplateFile("xlsx");
                downloadFile(template, "kotobagarden-template.xlsx");
              }}
              className="w-full"
            >
              Tải mẫu file Excel
            </Button>

            <Button
              variant="outline"
              asChild
            >
              <label className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-600 border border-dashed rounded-lg hover:border-emerald-300 hover:bg-emerald-50 cursor-pointer">
                <span>Kéo thả file hoặc</span>
                <input
                  type="file"
                  accept=".xlsx,.csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                Chọn file để tải lên
              </label>
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            <div className="flex items-center gap-2 mb-1">
              <div className="text-xl">📋</div>
              <div>
                <strong>Định dạng file:</strong>
              </div>
            </div>
            <div className="ml-8 space-y-1 text-xs">
              <div>• Kanji: 漢字 (bắt buộc)</div>
              <div>• Kana: かな (bắt buộc)</div>
              <div>• Romaji: kana (bắt buộc)</div>
              <div>• HanViet: Hán Việt (tùy chọn)</div>
              <div>• Meaning: Nghĩa tiếng Việt (bắt buộc)</div>
              <div>• TextMnemonic: Mẹo nhớ (tùy chọn)</div>
              <div>• LessonGroup: Nhóm bài học (tùy chọn)</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}