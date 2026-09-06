/**
 * Bộ dữ liệu mẫu KotobaGarden
 * Chứa từ vựng Hiragana, Katakana, JLPT N5, N4, N3 và Kanji thuần Text
 * Mỗi từ đều có mẹo nhớ (Text Mnemonic) theo phong cách Memrise
 */

import { Word, Course } from "../types/kotoba";
import { JLPT_N4_WORDS, JLPT_N3_WORDS, KANJI_N5_WORDS } from "./jlpt_n4_n3_words";

// ============ COURSES ============
export const SAMPLE_COURSES: Course[] = [
  {
    id: "hiragana-50",
    title: "Bảng Chữ Cái Hiragana",
    description: "46 chữ cái Hiragana cơ bản với bảng nguyên âm, hàng K, S, T, N, H, M, Y, R, W",
    level: "Hiragana",
    creatorId: "system",
    creatorName: "KotobaGarden",
    isCustom: false,
    isPublic: true,
    wordCount: 46,
    createdAt: new Date().toISOString(),
    tags: ["alphabet", "beginner", "hiragana"],
  },
  {
    id: "katakana-50",
    title: "Bảng Chữ Cái Katakana",
    description: "46 chữ cái Katakana cơ bản - dùng cho từ mượn, tên riêng nước ngoài",
    level: "Katakana",
    creatorId: "system",
    creatorName: "KotobaGarden",
    isCustom: false,
    isPublic: true,
    wordCount: 46,
    createdAt: new Date().toISOString(),
    tags: ["alphabet", "beginner", "katakana"],
  },
  {
    id: "jlpt-n5",
    title: "Từ Vựng JLPT N5",
    description: "Khoảng 800 từ vựng N5 phổ biến nhất - chuẩn bị cho kỳ thi JLPT N5",
    level: "N5",
    creatorId: "system",
    creatorName: "KotobaGarden",
    isCustom: false,
    isPublic: true,
    wordCount: 30,
    createdAt: new Date().toISOString(),
    tags: ["jlpt", "n5", "vocabulary", "beginner"],
  },
  {
    id: "jlpt-n4",
    title: "Từ Vựng JLPT N4",
    description: "Từ vựng JLPT N4 - cấp độ trung bình thấp",
    level: "N4",
    creatorId: "system",
    creatorName: "KotobaGarden",
    isCustom: false,
    isPublic: true,
    wordCount: 36,
    createdAt: new Date().toISOString(),
    tags: ["jlpt", "n4", "vocabulary", "intermediate"],
  },
  {
    id: "jlpt-n3",
    title: "Từ Vựng JLPT N3",
    description: "Từ vựng JLPT N3 - cấp độ trung bình",
    level: "N3",
    creatorId: "system",
    creatorName: "KotobaGarden",
    isCustom: false,
    isPublic: true,
    wordCount: 30,
    createdAt: new Date().toISOString(),
    tags: ["jlpt", "n3", "vocabulary", "intermediate"],
  },
  {
    id: "kanji-n5",
    title: "Kanji JLPT N5",
    description: "50 Kanji cơ bản cho JLPT N5 - bao gồm chữ Hán thường gặp",
    level: "N5",
    creatorId: "system",
    creatorName: "KotobaGarden",
    isCustom: false,
    isPublic: true,
    wordCount: 50,
    createdAt: new Date().toISOString(),
    tags: ["jlpt", "n5", "kanji", "beginner"],
  },
];

// ============ HIRAGANA WORDS ============
export const HIRAGANA_WORDS: Word[] = [
  // Nguyên âm
  { id: "h-a", courseId: "hiragana-50", kanji: "あ", kana: "あ", romaji: "a", hanViet: "Ưng", meaning: "Âm a", textMnemonic: "Bạn há miệng to như hình con cá 🐟 nói 'A' đi nào!" },
  { id: "h-i", courseId: "hiragana-50", kanji: "い", kana: "い", romaji: "i", hanViet: "Y", meaning: "Âm i", textMnemonic: "Hai người đứng cạnh nhau 👯 nói 'I-I' chào nhau" },
  { id: "h-u", courseId: "hiragana-50", kanji: "う", kana: "う", romaji: "u", hanViet: "Ô", meaning: "Âm u", textMnemonic: "Con cua 🦀 đi ngược lại nói 'U' một mình" },
  { id: "h-e", courseId: "hiragana-50", kanji: "え", kana: "え", romaji: "e", hanViet: "Đường", meaning: "Âm e", textMnemonic: "Cái nhà 🏠 nghiêng về bên phải, bên trong có gì đó 'E' thú vị" },
  { id: "h-o", courseId: "hiragana-50", kanji: "お", kana: "お", romaji: "o", hanViet: "Hồ", meaning: "Âm o", textMnemonic: "Người đàn ông đi bộ 👨‍🦱 kéo theo cây cối 'O' về phía trước" },

  // Hàng K
  { id: "h-ka", courseId: "hiragana-50", kanji: "か", kana: "か", romaji: "ka", hanViet: "Gia", meaning: "Ka (hàng K)", textMnemonic: "Con cá 🐟 đội mũ 'ka' đang bơi lội" },
  { id: "h-ki", courseId: "hiragana-50", kanji: "き", kana: "き", romaji: "ki", hanViet: "Kỳ", meaning: "Ki (hàng K)", textMnemonic: "Chìa khóa 🔑 phát âm 'ki' để mở cửa" },
  { id: "h-ku", courseId: "hiragana-50", kanji: "く", kana: "く", romaji: "ku", hanViet: "Cú", meaning: "Ku (hàng K)", textMnemonic: "Con chim 🐦 há miệng to phát âm 'ku ku'" },
  { id: "h-ke", courseId: "hiragana-50", kanji: "け", kana: "け", romaji: "ke", hanViet: "Kế", meaning: "Ke (hàng K)", textMnemonic: "Một người đang đứng với cái khiên 🛡️ 'ke' chắn phía trước" },
  { id: "h-ko", courseId: "hiragana-50", kanji: "こ", kana: "こ", romaji: "ko", hanViet: "Cổ", meaning: "Ko (hàng K)", textMnemonic: "Hai người đang nói chuyện 👥 với nhau 'ko ko'" },

  // Hàng S
  { id: "h-sa", courseId: "hiragana-50", kanji: "さ", kana: "さ", romaji: "sa", hanViet: "Tá", meaning: "Sa (hàng S)", textMnemonic: "Bà cụ ngồi xuống ghế 🪑 nói 'sa' chào" },
  { id: "h-shi", courseId: "hiragana-50", kanji: "し", kana: "し", romaji: "shi", hanViet: "Thì", meaning: "Shi (hàng S)", textMnemonic: "Một ngón tay 🤌 chỉ xuống nói 'shi'" },
  { id: "h-su", courseId: "hiragana-50", kanji: "す", kana: "す", romaji: "su", hanViet: "Tú", meaning: "Su (hàng S)", textMnemonic: "Người đàn ông mặc vest 👔 đang 'su' (sửa) lại cà vạt" },
  { id: "h-se", courseId: "hiragana-50", kanji: "せ", kana: "せ", romaji: "se", hanViet: "Thế", meaning: "Se (hàng S)", textMnemonic: "Con rắn 🐍 bò qua cây cối 'se se'" },
  { id: "h-so", courseId: "hiragana-50", kanji: "そ", kana: "そ", romaji: "so", hanViet: "Tự", meaning: "So (hàng S)", textMnemonic: "Con sóc 🐿️ nhảy qua cành cây nói 'so so'" },

  // Hàng T
  { id: "h-ta", courseId: "hiragana-50", kanji: "た", kana: "た", romaji: "ta", hanViet: "Đạt", meaning: "Ta (hàng T)", textMnemonic: "Hai người đang uống trà 🍵 cùng nhau nói 'ta'" },
  { id: "h-chi", courseId: "hiragana-50", kanji: "ち", kana: "ち", romaji: "chi", hanViet: "Trì", meaning: "Chi (hàng T)", textMnemonic: "Số 5 tròn trịa nằm ngang nói 'chi'" },
  { id: "h-tsu", courseId: "hiragana-50", kanji: "つ", kana: "つ", romaji: "tsu", hanViet: "Tú", meaning: "Tsu (hàng T)", textMnemonic: "Con tôm 🦐 cong lưng nhảy lên nói 'tsu'" },
  { id: "h-te", courseId: "hiragana-50", kanji: "て", kana: "て", romaji: "te", hanViet: "Đề", meaning: "Te (hàng T)", textMnemonic: "Bàn tay mở ra 🤲 nói 'te' chào" },
  { id: "h-to", courseId: "hiragana-50", kanji: "と", kana: "と", romaji: "to", hanViet: "Đồ", meaning: "To (hàng T)", textMnemonic: "Con cá 🐟 bị kéo đi nói 'to to'" },

  // Hàng N
  { id: "h-na", courseId: "hiragana-50", kanji: "な", kana: "な", romaji: "na", hanViet: "Na", meaning: "Na (hàng N)", textMnemonic: "Người phụ nữ 👩 quỳ gối ôm em bé nói 'na na'" },
  { id: "h-ni", courseId: "hiragana-50", kanji: "に", kana: "に", romaji: "ni", hanViet: "Nhị", meaning: "Ni (hàng N)", textMnemonic: "Đầu gối 🦵 gập lại nói 'ni' khi ngồi xuống" },
  { id: "h-nu", courseId: "hiragana-50", kanji: "ぬ", kana: "ぬ", romaji: "nu", hanViet: "Nô", meaning: "Nu (hàng N)", textMnemonic: "Con mèo 🐱 cuộn mình ngủ nói 'nu nu'" },
  { id: "h-ne", courseId: "hiragana-50", kanji: "ね", kana: "ね", romaji: "ne", hanViet: "Nê", meaning: "Ne (hàng N)", textMnemonic: "Mèo 🐱 kêu 'ne' khi muốn được vuốt ve" },
  { id: "h-no", courseId: "hiragana-50", kanji: "の", kana: "の", romaji: "no", hanViet: "Nô", meaning: "No (hàng N)", textMnemonic: "Bong bóng 🎈 bay lên trời nói 'no'" },

  // Hàng H
  { id: "h-ha", courseId: "hiragana-50", kanji: "は", kana: "は", romaji: "ha", hanViet: "Hoa", meaning: "Ha (hàng H)", textMnemonic: "Hai người đứng trước cửa 🚪 nói 'ha ha' vui vẻ" },
  { id: "h-hi", courseId: "hiragana-50", kanji: "ひ", kana: "ひ", romaji: "hi", hanViet: "Huy", meaning: "Hi (hàng H)", textMnemonic: "Con chim 🐦 nhìn sang trái nói 'hi' chào" },
  { id: "h-fu", courseId: "hiragana-50", kanji: "ふ", kana: "ふ", romaji: "fu", hanViet: "Phú", meaning: "Fu (hàng H)", textMnemonic: "Con gà 🐔 há mỏ nói 'fu fu' gáy" },
  { id: "h-he", courseId: "hiragana-50", kanji: "へ", kana: "へ", romaji: "he", hanViet: "Hề", meaning: "He (hàng H)", textMnemonic: "Đồi núi 🏔️ lượn sóng nói 'he he' êm dịu" },
  { id: "h-ho", courseId: "hiragana-50", kanji: "ほ", kana: "ほ", romaji: "ho", hanViet: "Hô", meaning: "Ho (hàng H)", textMnemonic: "Con hươu 🦌 có gạc nói 'ho' khi gặp bạn" },

  // Hàng M
  { id: "h-ma", courseId: "hiragana-50", kanji: "ま", kana: "ま", romaji: "ma", hanViet: "Ma", meaning: "Ma (hàng M)", textMnemonic: "Bà mẹ 👩 bế con đi nói 'ma ma'" },
  { id: "h-mi", courseId: "hiragana-50", kanji: "み", kana: "み", romaji: "mi", hanViet: "Mỹ", meaning: "Mi (hàng M)", textMnemonic: "Ba ngón tay 🤟 nhỏ xíu nói 'mi mi'" },
  { id: "h-mu", courseId: "hiragana-50", kanji: "む", kana: "む", romaji: "mu", hanViet: "Mô", meaning: "Mu (hàng M)", textMnemonic: "Con bò 🐮 nằm nhai cỏ nói 'mu mu'" },
  { id: "h-me", courseId: "hiragana-50", kanji: "め", kana: "め", romaji: "me", hanViet: "Mê", meaning: "Me (hàng M)", textMnemonic: "Đôi mắt 👁️ nhìn chằm chằm nói 'me me'" },
  { id: "h-mo", courseId: "hiragana-50", kanji: "も", kana: "も", romaji: "mo", hanViet: "Mô", meaning: "Mo (hàng M)", textMnemonic: "Nấm 🍄 mọc lên nói 'mo mo'" },

  // Hàng Y
  { id: "h-ya", courseId: "hiragana-50", kanji: "や", kana: "や", romaji: "ya", hanViet: "Da", meaning: "Ya (hàng Y)", textMnemonic: "Con cá 🐟 bơi qua cây cối nói 'ya ya'" },
  { id: "h-yu", courseId: "hiragana-50", kanji: "ゆ", kana: "ゆ", romaji: "yu", hanViet: "Hựu", meaning: "Yu (hàng Y)", textMnemonic: "Con sâu 🐛 bò uốn éo nói 'yu yu'" },
  { id: "h-yo", courseId: "hiragana-50", kanji: "よ", kana: "よ", romaji: "yo", hanViet: "Dũ", meaning: "Yo (hàng Y)", textMnemonic: "Con rồng bay lượn 🐉 nói 'yo yo'" },

  // Hàng R
  { id: "h-ra", courseId: "hiragana-50", kanji: "ら", kana: "ら", romaji: "ra", hanViet: "La", meaning: "Ra (hàng R)", textMnemonic: "Người đàn ông 🧑 chạy bước nói 'ra ra'" },
  { id: "h-ri", courseId: "hiragana-50", kanji: "り", kana: "り", romaji: "ri", hanViet: "Lợi", meaning: "Ri (hàng R)", textMnemonic: "Hai giọt nước 💧 rơi xuống nói 'ri ri'" },
  { id: "h-ru", courseId: "hiragana-50", kanji: "る", kana: "る", romaji: "ru", hanViet: "Lự", meaning: "Ru (hàng R)", textMnemonic: "Con đường 🛤️ dài thẳng nói 'ru'" },
  { id: "h-re", courseId: "hiragana-50", kanji: "れ", kana: "れ", romaji: "re", hanViet: "Lệ", meaning: "Re (hàng R)", textMnemonic: "Cây kem 🍦 tan chảy nói 're re'" },
  { id: "h-ro", courseId: "hiragana-50", kanji: "ろ", kana: "ろ", romaji: "ro", hanViet: "Lộ", meaning: "Ro (hàng R)", textMnemonic: "Con rùa 🐢 lội nước nói 'ro ro'" },

  // Hàng W
  { id: "h-wa", courseId: "hiragana-50", kanji: "わ", kana: "わ", romaji: "wa", hanViet: "Oa", meaning: "Wa (hàng W)", textMnemonic: "Người phụ nữ 👩 khóc nói 'wa wa'" },
  { id: "h-wo", courseId: "hiragana-50", kanji: "を", kana: "を", romaji: "wo", hanViet: "Vi", meaning: "Wo (trợ từ)", textMnemonic: "Cánh cửa 🚪 mở ra nói 'wo' mời vào" },

  // N
  { id: "h-n", courseId: "hiragana-50", kanji: "ん", kana: "ん", romaji: "n", hanViet: "N", meaning: "Âm n thuần túy", textMnemonic: "Thuyền ⛵ lướt sóng nói 'n n'" },
];

// ============ KATAKANA WORDS ============
export const KATAKANA_WORDS: Word[] = [
  // Nguyên âm
  { id: "k-a", courseId: "katakana-50", kanji: "ア", kana: "ア", romaji: "a", hanViet: "Ưng", meaning: "Âm a (Katakana)", textMnemonic: "Bạn hét lớn 'A' như muốn gọi ai đó! Múi bắp chân căng ra!" },
  { id: "k-i", courseId: "katakana-50", kanji: "イ", kana: "イ", romaji: "i", hanViet: "Y", meaning: "Âm i (Katakana)", textMnemonic: "Cột điện cao chót vót nói 'I' một mình" },
  { id: "k-u", courseId: "katakana-50", kanji: "ウ", kana: "ウ", romaji: "u", hanViet: "Ô", meaning: "Âm u (Katakana)", textMnemonic: "Cái thùng đứng thẳng đây này, 'U' nào uống nước đi!" },
  { id: "k-e", courseId: "katakana-50", kanji: "エ", kana: "エ", romaji: "e", hanViet: "Đường", meaning: "Âm e (Katakana)", textMnemonic: "Cái cửa sổ vuông vắn nói 'E' thật thanh lịch" },
  { id: "k-o", courseId: "katakana-50", kanji: "オ", kana: "オ", romaji: "o", hanViet: "Hồ", meaning: "Âm o (Katakana)", textMnemonic: "Người đàn ông lực lưỡng nói 'O' với giọng trầm" },

  // Hàng K
  { id: "k-ka", courseId: "katakana-50", kanji: "カ", kana: "カ", romaji: "ka", hanViet: "Gia", meaning: "Ka (Katakana)", textMnemonic: "Gậy karate nói 'KA' khi đập xuống sàn!" },
  { id: "k-ki", courseId: "katakana-50", kanji: "キ", kana: "キ", romaji: "ki", hanViet: "Kỳ", meaning: "Ki (Katakana)", textMnemonic: "Hai que củi nói 'ki' khi bị đốt cháy" },
  { id: "k-ku", courseId: "katakana-50", kanji: "ク", kana: "ク", romaji: "ku", hanViet: "Cú", meaning: "Ku (Katakana)", textMnemonic: "Mỏ chim nói 'KU KU' khi gõ mỏ" },
  { id: "k-ke", courseId: "katakana-50", kanji: "ケ", kana: "ケ", romaji: "ke", hanViet: "Kế", meaning: "Ke (Katakana)", textMnemonic: "Mũi tên bay nói 'KE' xuyên không trung" },
  { id: "k-ko", courseId: "katakana-50", kanji: "コ", kana: "コ", romaji: "ko", hanViet: "Cổ", meaning: "Ko (Katakana)", textMnemonic: "Khăn choàng cổ nói 'KO' thật thời trang" },

  // Hàng S
  { id: "k-sa", courseId: "katakana-50", kanji: "サ", kana: "サ", romaji: "sa", hanViet: "Tá", meaning: "Sa (Katakana)", textMnemonic: "Cái xà nói 'SA' khi lắc lư trên cao" },
  { id: "k-shi", courseId: "katakana-50", kanji: "シ", kana: "シ", romaji: "shi", hanViet: "Thì", meaning: "Shi (Katakana)", textMnemonic: "Cái kéo cắt tóc nói 'SHI SHI'" },
  { id: "k-su", courseId: "katakana-50", kanji: "ス", kana: "ス", romaji: "su", hanViet: "Tú", meaning: "Su (Katakana)", textMnemonic: "Nam châm hút nhau nói 'SU SU'" },
  { id: "k-se", courseId: "katakana-50", kanji: "セ", kana: "セ", romaji: "se", hanViet: "Thế", meaning: "Se (Katakana)", textMnemonic: "Đôi giày thể thao nói 'SE' khi chạy" },
  { id: "k-so", courseId: "katakana-50", kanji: "ソ", kana: "ソ", romaji: "so", hanViet: "Tự", meaning: "So (Katakana)", textMnemonic: "Đôi tất xếp chồng nói 'SO SO'" },

  // Hàng T
  { id: "k-ta", courseId: "katakana-50", kanji: "タ", kana: "タ", romaji: "ta", hanViet: "Đạt", meaning: "Ta (Katakana)", textMnemonic: "Cái mũ nói 'TA' khi đội đầu" },
  { id: "k-chi", courseId: "katakana-50", kanji: "チ", kana: "チ", romaji: "chi", hanViet: "Trì", meaning: "Chi (Katakana)", textMnemonic: "Cái khiên nói 'CHI' khi đỡ đòn" },
  { id: "k-tsu", courseId: "katakana-50", kanji: "ツ", kana: "ツ", romaji: "tsu", hanViet: "Tú", meaning: "Tsu (Katakana)", textMnemonic: "Ba giọt nước rơi nói 'TSU TSU TSU'" },
  { id: "k-te", courseId: "katakana-50", kanji: "テ", kana: "テ", romaji: "te", hanViet: "Đề", meaning: "Te (Katakana)", textMnemonic: "Bảng hiệu nói 'TE' khi chỉ đường" },
  { id: "k-to", courseId: "katakana-50", kanji: "ト", kana: "ト", romaji: "to", hanViet: "Đồ", meaning: "To (Katakana)", textMnemonic: "Cái xẻng đào đất nói 'TO TO'" },

  // Hàng N
  { id: "k-na", courseId: "katakana-50", kanji: "ナ", kana: "ナ", romaji: "na", hanViet: "Na", meaning: "Na (Katakana)", textMnemonic: "Cái nón nói 'NA' khi đội đầu" },
  { id: "k-ni", courseId: "katakana-50", kanji: "ニ", kana: "ニ", romaji: "ni", hanViet: "Nhị", meaning: "Ni (Katakana)", textMnemonic: "Hai vạch kẻ đường nói 'NI NI'" },
  { id: "k-nu", courseId: "katakana-50", kanji: "ヌ", kana: "ヌ", romaji: "nu", hanViet: "Nô", meaning: "Nu (Katakana)", textMnemonic: "Con cá nói 'NU NU' khi bơi" },
  { id: "k-ne", courseId: "katakana-50", kanji: "ネ", kana: "ネ", romaji: "ne", hanViet: "Nê", meaning: "Ne (Katakana)", textMnemonic: "Đèn lồng treo nói 'NE' lung linh" },
  { id: "k-no", courseId: "katakana-50", kanji: "ノ", kana: "ノ", romaji: "no", hanViet: "Nô", meaning: "No (Katakana)", textMnemonic: "Ngón tay chỉ lên nói 'NO' đây này!" },

  // Hàng H
  { id: "k-ha", courseId: "katakana-50", kanji: "ハ", kana: "ハ", romaji: "ha", hanViet: "Hoa", meaning: "Ha (Katakana)", textMnemonic: "Cây lau nhảy nói 'HA HA' trong gió" },
  { id: "k-hi", courseId: "katakana-50", kanji: "ヒ", kana: "ヒ", romaji: "hi", hanViet: "Huy", meaning: "Hi (Katakana)", textMnemonic: "Thước kẻ đo nói 'HI HI' chính xác" },
  { id: "k-fu", courseId: "katakana-50", kanji: "フ", kana: "フ", romaji: "fu", hanViet: "Phú", meaning: "Fu (Katakana)", textMnemonic: "Đôi giày cao gót nói 'FU FU' thanh lịch" },
  { id: "k-he", courseId: "katakana-50", kanji: "ヘ", kana: "ヘ", romaji: "he", hanViet: "Hề", meaning: "He (Katakana)", textMnemonic: "Cái lược chải tóc nói 'HE HE' mượt mà" },
  { id: "k-ho", courseId: "katakana-50", kanji: "ホ", kana: "ホ", romaji: "ho", hanViet: "Hô", meaning: "Ho (Katakana)", textMnemonic: "Lỗ khóa nói 'HO' mời bạn vào" },

  // Hàng M
  { id: "k-ma", courseId: "katakana-50", kanji: "マ", kana: "マ", romaji: "ma", hanViet: "Ma", meaning: "Ma (Katakana)", textMnemonic: "Nấm to nói 'MA MA' khổng lồ" },
  { id: "k-mi", courseId: "katakana-50", kanji: "ミ", kana: "ミ", romaji: "mi", hanViet: "Mỹ", meaning: "Mi (Katakana)", textMnemonic: "Ba giọt mưa rơi nói 'MI MI MI'" },
  { id: "k-mu", courseId: "katakana-50", kanji: "ム", kana: "ム", romaji: "mu", hanViet: "Mô", meaning: "Mu (Katakana)", textMnemonic: "Con sâu bướm bay nói 'MU MU'" },
  { id: "k-me", courseId: "katakana-50", kanji: "メ", kana: "メ", romaji: "me", hanViet: "Mê", meaning: "Me (Katakana)", textMnemonic: "Cái liềm gặt lúa nói 'ME ME' thu hoạch" },
  { id: "k-mo", courseId: "katakana-50", kanji: "モ", kana: "モ", romaji: "mo", hanViet: "Mô", meaning: "Mo (Katakana)", textMnemonic: "Cái nồi nấu cơm nói 'MO MO' sôi sùng sục" },

  // Hàng Y
  { id: "k-ya", courseId: "katakana-50", kanji: "ヤ", kana: "ヤ", romaji: "ya", hanViet: "Da", meaning: "Ya (Katakana)", textMnemonic: "Mũi tên bay nói 'YA' xuyên gió" },
  { id: "k-yu", courseId: "katakana-50", kanji: "ユ", kana: "ユ", romaji: "yu", hanViet: "Hựu", meaning: "Yu (Katakana)", textMnemonic: "Ống nhổ nói 'YU' khi khạc ra" },
  { id: "k-yo", courseId: "katakana-50", kanji: "ヨ", kana: "ヨ", romaji: "yo", hanViet: "Dũ", meaning: "Yo (Katakana)", textMnemonic: "Chiếc áo phông nói 'YO' thời trang" },

  // Hàng R
  { id: "k-ra", courseId: "katakana-50", kanji: "ラ", kana: "ラ", romaji: "ra", hanViet: "La", meaning: "Ra (Katakana)", textMnemonic: "Cái cưa máy nói 'RA RA' cắt gỗ" },
  { id: "k-ri", courseId: "katakana-50", kanji: "リ", kana: "リ", romaji: "ri", hanViet: "Lợi", meaning: "Ri (Katakana)", textMnemonic: "Mũi tên bay ngược nói 'RI RI'" },
  { id: "k-ru", courseId: "katakana-50", kanji: "ル", kana: "ル", romaji: "ru", hanViet: "Lự", meaning: "Ru (Katakana)", textMnemonic: "Con sáo nói 'RU RU' hót vang" },
  { id: "k-re", courseId: "katakana-50", kanji: "レ", kana: "レ", romaji: "re", hanViet: "Lệ", meaning: "Re (Katakana)", textMnemonic: "Thước kẻ nói 'RE' đo đạc chính xác" },
  { id: "k-ro", courseId: "katakana-50", kanji: "ロ", kana: "ロ", romaji: "ro", hanViet: "Lộ", meaning: "Ro (Katakana)", textMnemonic: "Hộp đựng cơm nói 'RO' ngon lành" },

  // Hàng W
  { id: "k-wa", courseId: "katakana-50", kanji: "ワ", kana: "ワ", romaji: "wa", hanViet: "Oa", meaning: "Wa (Katakana)", textMnemonic: "Cái cuốc nói 'WA WA' đào đất" },
  { id: "k-wo", courseId: "katakana-50", kanji: "ヲ", kana: "ヲ", romaji: "wo", hanViet: "Vi", meaning: "Wo (trợ từ Katakana)", textMnemonic: "Vòng tròn nói 'WO' bao quanh" },

  // N
  { id: "k-n", courseId: "katakana-50", kanji: "ン", kana: "ン", romaji: "n", hanViet: "N", meaning: "Âm n thuần túy (Katakana)", textMnemonic: "Đám mây bay nói 'N N' lơ lửng" },
];

// ============ JLPT N5 VOCABULARY ============
export const JLPT_N5_WORDS: Word[] = [
  // Số đếm
  { id: "n5-1", courseId: "jlpt-n5", kanji: "一", kana: "いち", romaji: "ichi", hanViet: "Nhất", meaning: "Một (1)", textMnemonic: "Một đường thẳng tắp 一 duy nhất, nhớ 'ichi' = 1" },
  { id: "n5-2", courseId: "jlpt-n5", kanji: "二", kana: "に", romaji: "ni", hanViet: "Nhị", meaning: "Hai (2)", textMnemonic: "Hai đường song song ニ như đôi bạn, nhớ 'ni' = 2" },
  { id: "n5-3", courseId: "jlpt-n5", kanji: "三", kana: "さん", romaji: "san", hanViet: "Tam", meaning: "Ba (3)", textMnemonic: "Ba đường 三 như ba ngón tay, nhớ 'san' = 3" },
  { id: "n5-4", courseId: "jlpt-n5", kanji: "四", kana: "よん/し", romaji: "yon/shi", hanViet: "Tứ", meaning: "Bốn (4)", textMnemonic: "Bốn cánh hoa 四 xòe ra, nhớ 'yon' hoặc 'shi' = 4" },
  { id: "n5-5", courseId: "jlpt-n5", kanji: "五", kana: "ご", romaji: "go", hanViet: "Ngũ", meaning: "Năm (5)", textMnemonic: "Năm ngón tay xòe ra ゴ, nhớ 'go' = 5" },
  { id: "n5-6", courseId: "jlpt-n5", kanji: "六", kana: "ろく", romaji: "roku", hanViet: "Lục", meaning: "Sáu (6)", textMnemonic: "Sáu quả ロック tròn xoe, nhớ 'roku' = 6" },
  { id: "n5-7", courseId: "jlpt-n5", kanji: "七", kana: "なな/しち", romaji: "nana/shichi", hanViet: "Thất", meaning: "Bảy (7)", textMnemonic: "Bảy ngày trong tuần なな, nhớ 'nana' hoặc 'shichi' = 7" },
  { id: "n5-8", courseId: "jlpt-n5", kanji: "八", kana: "はち", romaji: "hachi", hanViet: "Bát", meaning: "Tám (8)", textMnemonic: "Tám chân 蜂 (ong) bò, nhớ 'hachi' = 8" },
  { id: "n5-9", courseId: "jlpt-n5", kanji: "九", kana: "きゅう/く", romaji: "kyuu/ku", hanViet: "Cửu", meaning: "Chín (9)", textMnemonic: "Chín ９ quả trứng xếp chồng, nhớ 'kyuu/ku' = 9" },
  { id: "n5-10", courseId: "jlpt-n5", kanji: "十", kana: "じゅう", romaji: "juu", hanViet: "Thập", meaning: "Mười (10)", textMnemonic: "Mười ngón tay じゅう nắm lại, nhớ 'juu' = 10" },

  // Từ vựng cơ bản
  { id: "n5-v1", courseId: "jlpt-n5", kanji: "日本", kana: "にほん", romaji: "nihon/nippon", hanViet: "Nhật Bản", meaning: "Nước Nhật", textMnemonic: "Nhật (日) Bản (本) - xứ sở mặt trời mọc ☀️" },
  { id: "n5-v2", courseId: "jlpt-n5", kanji: "日本人", kana: "にほんじん", romaji: "nihonjin", hanViet: "Nhật Bản nhân", meaning: "Người Nhật", textMnemonic: "Nhật (日) + Bản (本) + Nhân (人) = người Nhật Bản 👤🇯🇵" },
  { id: "n5-v3", courseId: "jlpt-n5", kanji: "日本語", kana: "にほんご", romaji: "nihongo", hanViet: "Nhật Bản ngữ", meaning: "Tiếng Nhật", textMnemonic: "Nhật (日) + Bản (本) + Ngữ (語) = tiếng Nhật 🇯🇵🗣️" },
  { id: "n5-v4", courseId: "jlpt-n5", kanji: "学生", kana: "がくせい", romaji: "gakusei", hanViet: "Học sinh", meaning: "Học sinh/Sinh viên", textMnemonic: "Học (学) + Sinh (生) = người đang học tập 📚" },
  { id: "n5-v5", courseId: "jlpt-n5", kanji: "先生", kana: "せんせい", romaji: "sensei", hanViet: "Tiên sinh", meaning: "Giáo viên/Thầy cô", textMnemonic: "先 (trước) + 生 (sống) = người sống trước = thầy cô 👨‍🏫" },
  { id: "n5-v6", courseId: "jlpt-n5", kanji: "学校", kana: "がっこう", romaji: "gakkou", hanViet: "Học hiệu", meaning: "Trường học", textMnemonic: "Học (学) + Hiệu (校) = nơi học hành 🏫" },
  { id: "n5-v7", courseId: "jlpt-n5", kanji: "本", kana: "ほん", romaji: "hon", hanViet: "Bản", meaning: "Sách", textMnemonic: "本 = gốc/sách - hình cuốn sách 📖" },
  { id: "n5-v8", courseId: "jlpt-n5", kanji: "水", kana: "みず", romaji: "mizu", hanViet: "Thủy", meaning: "Nước", textMnemonic: "水 = nước - nhìn hình bên trái như làn sóng 💧" },
  { id: "n5-v9", courseId: "jlpt-n5", kanji: "火", kana: "ひ", romaji: "hi", hanViet: "Hỏa", meaning: "Lửa", textMnemonic: "火 = lửa - nhìn hình như ngọn lửa đang cháy 🔥" },
  { id: "n5-v10", courseId: "jlpt-n5", kanji: "山", kana: "やま", romaji: "yama", hanViet: "Sơn", meaning: "Núi", textMnemonic: "山 = núi - hình ba ngọn núi chồng lên nhau 🏔️" },
  { id: "n5-v11", courseId: "jlpt-n5", kanji: "川", kana: "かわ", romaji: "kawa", hanViet: "Xuyên", meaning: "Sông", textMnemonic: "川 = sông - nhìn hình như dòng sông uốn lượn 🌊" },
  { id: "n5-v12", courseId: "jlpt-n5", kanji: "木", kana: "き", romaji: "ki", hanViet: "Mộc", meaning: "Cây/Gỗ", textMnemonic: "木 = cây - hình thân cây với cành lá 🌳" },
  { id: "n5-v13", courseId: "jlpt-n5", kanji: "花", kana: "はな", romaji: "hana", hanViet: "Hoa", meaning: "Hoa", textMnemonic: "花 = hoa - hình bông hoa đang nở 🌸" },
  { id: "n5-v14", courseId: "jlpt-n5", kanji: "犬", kana: "いぬ", romaji: "inu", hanViet: "Khuyển", meaning: "Chó", textMnemonic: "犬 = chó - nhớ 'i' ngắn + 'nu' như tiếng chó sủa 🐕" },
  { id: "n5-v15", courseId: "jlpt-n5", kanji: "猫", kana: "ねこ", romaji: "neko", hanViet: "Miêu", meaning: "Mèo", textMnemonic: "猫 = mèo - 'ne' như tiếng mèo kêu 'meo meo' 🐱" },
  { id: "n5-v16", courseId: "jlpt-n5", kanji: "友達", kana: "ともだち", romaji: "tomodachi", hanViet: "Bằng hữu", meaning: "Bạn bè", textMnemonic: "友 (bạn) + 達 (đạt/đến) = những người bạn đến cùng nhau 👫" },
  { id: "n5-v17", courseId: "jlpt-n5", kanji: "朝", kana: "あさ", romaji: "asa", hanViet: "Triều", meaning: "Buổi sáng", textMnemonic: "朝 = sáng sớm - nhìn hình như mặt trời mọc 🌅" },
  { id: "n5-v18", courseId: "jlpt-n5", kanji: "昼", kana: "ひる", romaji: "hiru", hanViet: "Trú", meaning: "Buổi trưa", textMnemonic: "昼 = trưa - mặt trời ở giữa trời ☀️" },
  { id: "n5-v19", courseId: "jlpt-n5", kanji: "夜", kana: "よる", romaji: "yoru", hanViet: "Dạ", meaning: "Buổi tối/Đêm", textMnemonic: "夜 = đêm - có Mặt Trăng 🌙 và ngôi sao ⭐" },
  { id: "n5-v20", courseId: "jlpt-n5", kanji: "今日", kana: "きょう", romaji: "kyou", hanViet: "Kim nhật", meaning: "Hôm nay", textMnemonic: "今 (bây giờ) + 日 (mặt trời) = ngày hôm nay 📅" },
  { id: "n5-v21", courseId: "jlpt-n5", kanji: "明日", kana: "あした", romaji: "ashita", hanViet: "Minh nhật", meaning: "Ngày mai", textMnemonic: "明 (sáng) + 日 (mặt trời) = ngày mai sáng sủa 🌅" },
  { id: "n5-v22", courseId: "jlpt-n5", kanji: "昨日", kana: "きのう", romaji: "kinou", hanViet: "Túc nhật", meaning: "Ngày hôm qua", textMnemonic: "昨 = ngày trước + 日 = hôm qua - đã qua rồi ⏰" },
  { id: "n5-v23", courseId: "jlpt-n5", kanji: "食べる", kana: "たべる", romaji: "taberu", hanViet: "Thực", meaning: "Ăn (động từ)", textMnemonic: "食 = ăn + べる = động từ ăn, nhớ 'ta-be-ru' 🍽️" },
  { id: "n5-v24", courseId: "jlpt-n5", kanji: "飲む", kana: "のむ", romaji: "nomu", hanViet: "Ẩm", meaning: "Uống (động từ)", textMnemonic: "飲 = uống + む = động từ uống, nhớ 'no-mu' 🥤" },
  { id: "n5-v25", courseId: "jlpt-n5", kanji: "行く", kana: "いく", romaji: "iku", hanViet: "Hành", meaning: "Đi (động từ)", textMnemonic: "行 = đi + く = động từ đi, nhớ 'i-ku' đi đến nơi nào đó 🚶" },
  { id: "n5-v26", courseId: "jlpt-n5", kanji: "来る", kana: "くる", romaji: "kuru", hanViet: "Lai", meaning: "Đến (động từ)", textMnemonic: "来 = đến + る = động từ đến, nhớ 'ku-ru' đến nơi 🏃" },
  { id: "n5-v27", courseId: "jlpt-n5", kanji: "見る", kana: "みる", romaji: "miru", hanViet: "Kiến", meaning: "Nhìn/Xem (động từ)", textMnemonic: "見 = nhìn + る = động từ xem, nhớ 'mi-ru' 👀" },
  { id: "n5-v28", courseId: "jlpt-n5", kanji: "聞く", kana: "きく", romaji: "kiku", hanViet: "Văn", meaning: "Nghe/Hỏi (động từ)", textMnemonic: "聞 = nghe + く = động từ nghe, nhớ 'ki-ku' 👂" },
  { id: "n5-v29", courseId: "jlpt-n5", kanji: "書く", kana: "かく", romaji: "kaku", hanViet: "Hạ", meaning: "Viết (động từ)", textMnemonic: "書 = viết + く = động từ viết, nhớ 'ka-ku' ✍️" },
  { id: "n5-v30", courseId: "jlpt-n5", kanji: "読む", kana: "よむ", romaji: "yomu", hanViet: "Độc", meaning: "Đọc (động từ)", textMnemonic: "読 = đọc + む = động từ đọc, nhớ 'yo-mu' 📖" },
];

// ============ HELPER FUNCTIONS ============

/**
 * Lấy tất cả từ theo courseId
 */
export function getWordsByCourse(courseId: string): Word[] {
  switch (courseId) {
    case "hiragana-50":
      return HIRAGANA_WORDS;
    case "katakana-50":
      return KATAKANA_WORDS;
    case "jlpt-n5":
      return JLPT_N5_WORDS;
    case "jlpt-n4":
      return JLPT_N4_WORDS;
    case "jlpt-n3":
      return JLPT_N3_WORDS;
    case "kanji-n5":
      return KANJI_N5_WORDS;
    default:
      return [];
  }
}

/**
 * Lấy tất cả từ mẫu
 */
export function getAllSampleWords(): Word[] {
  return [...HIRAGANA_WORDS, ...KATAKANA_WORDS, ...JLPT_N5_WORDS, ...JLPT_N4_WORDS, ...JLPT_N3_WORDS, ...KANJI_N5_WORDS];
}

/**
 * Tạo template Excel/CSV
 */
export function getExcelTemplate(): { headers: string[]; exampleRows: string[][] } {
  return {
    headers: ["Kanji", "Kana", "Romaji", "HanViet", "Meaning", "TextMnemonic", "LessonGroup"],
    exampleRows: [
      ["愛", "あい", "ai", "Ái", "Yêu", "Trái tim đang đập nói 'ai' 💕", "Bài 1"],
      ["本", "ほん", "hon", "Bản", "Sách", "Hình cuốn sách đang mở 📚", "Bài 2"],
      ["水", "みず", "mizu", "Thủy", "Nước", "Nhìn hình bên trái như làn sóng 💧", "Bài 2"],
    ],
  };
}