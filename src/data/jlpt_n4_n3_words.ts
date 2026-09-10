/**
 * Bổ sung từ vựng JLPT N4, N3 và Kanji N5 cho KotobaGarden
 * Tập trung vào các từ vựng phổ biến, có mẹo nhớ thuần text
 */

import { Word } from "../types/kotoba";
import { JLPT_N3_EMOTIONS } from "./jlpt_n3_emotions";
import { JLPT_N3_DAILY } from "./jlpt_n3_daily";
import { JLPT_N3_BUSINESS } from "./jlpt_n3_business";
import { JLPT_N3_SOCIETY } from "./jlpt_n3_society";
import { JLPT_N3_EDUCATION } from "./jlpt_n3_education";
import { JLPT_N3_TRAVEL } from "./jlpt_n3_travel";
import { JLPT_N3_HEALTH } from "./jlpt_n3_health";
import { JLPT_N3_TECHNOLOGY } from "./jlpt_n3_technology";
import { JLPT_N3_CULTURE } from "./jlpt_n3_culture";
import { JLPT_N3_GRAMMAR } from "./jlpt_n3_grammar";
import { JLPT_N3_ADVANCED } from "./jlpt_n3_advanced";
import { JLPT_N3_KEIGO } from "./jlpt_n3_keigo";
import { JLPT_N3_IDIOMS } from "./jlpt_n3_idioms";
import { JLPT_N3_ABSTRACT } from "./jlpt_n3_abstract";

// ============ JLPT N4 VOCABULARY ============
export const JLPT_N4_WORDS: Word[] = [
  // Gia đình
  { id: "n4-1", courseId: "jlpt-n4", kanji: "家族", kana: "かぞく", romaji: "kazoku", hanViet: "Gia tộc", meaning: "Gia đình", textMnemonic: "家 (nhà) + 族 (tộc) = cả nhà tộc 👨‍👩‍👧‍👦" },
  { id: "n4-2", courseId: "jlpt-n4", kanji: "両親", kana: "りょうしん", romaji: "ryoushin", hanViet: "Lưỡng thân", meaning: "Bố mẹ", textMnemonic: "両 (hai) + 親 (thân) = hai người thân = bố mẹ 👨‍👩" },
  { id: "n4-3", courseId: "jlpt-n4", kanji: "兄弟", kana: "きょうだい", romaji: "kyoudai", hanViet: "Huynh đệ", meaning: "Anh em", textMnemonic: "兄 (anh) + 弟 (em) = anh em 👦👦" },
  { id: "n4-4", courseId: "jlpt-n4", kanji: "姉妹", kana: "しまい", romaji: "shimai", hanViet: "Tỷ muội", meaning: "Chị em", textMnemonic: "姉 (chị) + 妹 (em gái) = chị em 👧👧" },
  { id: "n4-5", courseId: "jlpt-n4", kanji: "子供", kana: "こども", romaji: "kodomo", hanViet: "Tử môn", meaning: "Trẻ con/Con cái", textMnemonic: "子 (con) + 供 (cung cấp) = con được cung cấp yêu thương 👶" },

  // Thời gian
  { id: "n4-6", courseId: "jlpt-n4", kanji: "先週", kana: "せんしゅう", romaji: "senshuu", hanViet: "Tiên tuần", meaning: "Tuần trước", textMnemonic: "先 (trước) + 週 (tuần) = tuần trước 📅" },
  { id: "n4-7", courseId: "jlpt-n4", kanji: "来週", kana: "らいしゅう", romaji: "raishuu", hanViet: "Lai tuần", meaning: "Tuần sau", textMnemonic: "来 (đến) + 週 (tuần) = tuần sắp tới 📅" },
  { id: "n4-8", courseId: "jlpt-n4", kanji: "今月", kana: "こんげつ", romaji: "kongetsu", hanViet: "Kim nguyệt", meaning: "Tháng này", textMnemonic: "今 (bây giờ) + 月 (tháng) = tháng hiện tại 📆" },
  { id: "n4-9", courseId: "jlpt-n4", kanji: "来月", kana: "らいげつ", romaji: "raigetsu", hanViet: "Lai nguyệt", meaning: "Tháng sau", textMnemonic: "来 (đến) + 月 (tháng) = tháng sắp tới 📆" },
  { id: "n4-10", courseId: "jlpt-n4", kanji: "去年", kana: "きょねん", romaji: "kyonen", hanViet: "Khứ niên", meaning: "Năm ngoái", textMnemonic: "去 (qua) + 年 (năm) = năm đã qua 📆" },

  // Công việc
  { id: "n4-11", courseId: "jlpt-n4", kanji: "仕事", kana: "しごと", romaji: "shigoto", hanViet: "Sự nghiệp", meaning: "Công việc", textMnemonic: "仕 (phục vụ) + 事 (việc) = việc cần làm 💼" },
  { id: "n4-12", courseId: "jlpt-n4", kanji: "会社", kana: "かいしゃ", romaji: "kaisha", hanViet: "Hội xã", meaning: "Công ty", textMnemonic: "会 (hội) + 社 (xã) = nơi hội họp kinh doanh 🏢" },
  { id: "n4-13", courseId: "jlpt-n4", kanji: "病院", kana: "びょういん", romaji: "byouin", hanViet: "Bệnh viện", meaning: "Bệnh viện", textMnemonic: "病 (bệnh) + 院 (viện) = nơi chữa bệnh 🏥" },
  { id: "n4-14", courseId: "jlpt-n4", kanji: "郵便局", kana: "ゆうびんきょく", romaji: "yuubinkyoku", hanViet: "Bưu chính cục", meaning: "Bưu điện", textMnemonic: "郵 (bưu) + 便 (tiện) + 局 (cục) = cục bưu chính 📮" },
  { id: "n4-15", courseId: "jlpt-n4", kanji: "銀行", kana: "ぎんこう", romaji: "ginkou", hanViet: "Ngân hàng", meaning: "Ngân hàng", textMnemonic: "銀 (bạc) + 行 (hàng) = nơi giữ tiền bạc 🏦" },

  // Tính từ
  { id: "n4-16", courseId: "jlpt-n4", kanji: "新しい", kana: "あたらしい", romaji: "atarashii", hanViet: "Tân", meaning: "Mới", textMnemonic: "新 (tân) = mới mẻ, tươi mới ✨" },
  { id: "n4-17", courseId: "jlpt-n4", kanji: "古い", kana: "ふるい", romaji: "furui", hanViet: "Cựu", meaning: "Cũ", textMnemonic: "古 (cũ) = đã qua thời gian, cũ kỹ 📜" },
  { id: "n4-18", courseId: "jlpt-n4", kanji: "高い", kana: "たかい", romaji: "takai", hanViet: "Cao", meaning: "Cao/Đắt", textMnemonic: "高 (cao) = cao vút lên trời hoặc giá cao 💰" },
  { id: "n4-19", courseId: "jlpt-n4", kanji: "安い", kana: "やすい", romaji: "yasui", hanViet: "An", meaning: "Rẻ", textMnemonic: "安 (an/bình) = giá bình ổn, rẻ tiền 💵" },
  { id: "n4-20", courseId: "jlpt-n4", kanji: "難しい", kana: "むずかしい", romaji: "muzukashii", hanViet: "Nan nan", meaning: "Khó", textMnemonic: "難 (khó) = việc nan giải, phức tạp 🧩" },
  { id: "n4-21", courseId: "jlpt-n4", kanji: "易しい", kana: "やさしい", romaji: "yasashii", hanViet: "Dị", meaning: "Dễ", textMnemonic: "易 (dễ) = dễ dàng, không khó khăn 🌱" },
  { id: "n4-22", courseId: "jlpt-n4", kanji: "忙しい", kana: "いそがしい", romaji: "isogashii", hanViet: "Mang vụ", meaning: "Bận rộn", textMnemonic: "忙 (bận) = bận tối mặt tối mũi ⏰" },

  // Động từ
  { id: "n4-23", courseId: "jlpt-n4", kanji: "始める", kana: "はじめる", romaji: "hajimeru", hanViet: "Thỉ", meaning: "Bắt đầu", textMnemonic: "始 (bắt đầu) + める = bắt đầu công việc 🚀" },
  { id: "n4-24", courseId: "jlpt-n4", kanji: "終わる", kana: "おわる", romaji: "owaru", hanViet: "Chung", meaning: "Kết thúc", textMnemonic: "終 (kết thúc) = mọi thứ đã kết thúc 🏁" },
  { id: "n4-25", courseId: "jlpt-n4", kanji: "続ける", kana: "つづける", romaji: "tsuzukeru", hanViet: "Trì", meaning: "Tiếp tục", textMnemonic: "続 (tiếp tục) = không ngừng nghỉ, kiên trì 💪" },
  { id: "n4-26", courseId: "jlpt-n4", kanji: "考える", kana: "かんがえる", romaji: "kangaeru", hanViet: "Tư lương", meaning: "Suy nghĩ", textMnemonic: "考 (suy nghĩ) = đầu óc đang suy tư 🤔" },
  { id: "n4-27", courseId: "jlpt-n4", kanji: "忘れる", kana: "わすれる", romaji: "wasureru", hanViet: "Vong", meaning: "Quên", textMnemonic: "忘 (quên) = trí nhớ bay mất, quên rồi 😅" },
  { id: "n4-28", courseId: "jlpt-n4", kanji: "覚える", kana: "おぼえる", romaji: "oboeru", hanViet: "Giác", meaning: "Nhớ/Học", textMnemonic: "覚 (nhớ) = ghi vào não bộ 🧠" },

  // Phương hướng
  { id: "n4-29", courseId: "jlpt-n4", kanji: "右", kana: "みぎ", romaji: "migi", hanViet: "Hữu", meaning: "Bên phải", textMnemonic: "右 (phải) = bên phải 👉" },
  { id: "n4-30", courseId: "jlpt-n4", kanji: "左", kana: "ひだり", romaji: "hidari", hanViet: "Tả", meaning: "Bên trái", textMnemonic: "左 (trái) = bên trái 👈" },
  { id: "n4-31", courseId: "jlpt-n4", kanji: "前", kana: "まえ", romaji: "mae", hanViet: "Tiền", meaning: "Phía trước", textMnemonic: "前 (trước) = ở phía trước mặt ⏩" },
  { id: "n4-32", courseId: "jlpt-n4", kanji: "後ろ", kana: "うしろ", romaji: "ushiro", hanViet: "Hậu", meaning: "Phía sau", textMnemonic: "後 (sau) = ở phía sau lưng ⏪" },
  { id: "n4-33", courseId: "jlpt-n4", kanji: "中", kana: "なか", romaji: "naka", hanViet: "Trung", meaning: "Bên trong/Trung", textMnemonic: "中 (giữa) = bên trong, ở giữa 🎯" },
  { id: "n4-34", courseId: "jlpt-n4", kanji: "外", kana: "そと", romaji: "soto", hanViet: "Ngoại", meaning: "Bên ngoài", textMnemonic: "外 (ngoài) = ra khỏi nhà, bên ngoài 🚪" },
  { id: "n4-35", courseId: "jlpt-n4", kanji: "上", kana: "うえ", romaji: "ue", hanViet: "Thượng", meaning: "Phía trên", textMnemonic: "上 (trên) = bên trên, ở phía trên ⬆️" },
  { id: "n4-36", courseId: "jlpt-n4", kanji: "下", kana: "した", romaji: "shita", hanViet: "Hạ", meaning: "Phía dưới", textMnemonic: "下 (dưới) = bên dưới, ở phía dưới ⬇️" },
];

// ============ JLPT N3 VOCABULARY ============
export const JLPT_N3_WORDS: Word[] = [
  // Cuộc sống
  { id: "n3-1", courseId: "jlpt-n3", kanji: "生活", kana: "せいかつ", romaji: "seikatsu", hanViet: "Sinh hoạt", meaning: "Cuộc sống/Sinh hoạt", textMnemonic: "生 (sống) + 活 (hoạt động) = sống và hoạt động 🌱" },
  { id: "n3-2", courseId: "jlpt-n3", kanji: "社会", kana: "しゃかい", romaji: "shakai", hanViet: "Xã hội", meaning: "Xã hội", textMnemonic: "社 (xã) + 会 (hội) = xã hội loài người 🌐" },
  { id: "n3-3", courseId: "jlpt-n3", kanji: "文化", kana: "ぶんか", romaji: "bunka", hanViet: "Văn hóa", meaning: "Văn hóa", textMnemonic: "文 (văn) + 化 (hóa) = văn hóa 🎭" },
  { id: "n3-4", courseId: "jlpt-n3", kanji: "歴史", kana: "れきし", romaji: "rekishi", hanViet: "Lịch sử", meaning: "Lịch sử", textMnemonic: "歴 (qua) + 史 (sử) = dòng thời gian đã qua 📜" },
  { id: "n3-5", courseId: "jlpt-n3", kanji: "政治", kana: "せいじ", romaji: "seiji", hanViet: "Chính trị", meaning: "Chính trị", textMnemonic: "政 (chính) + 治 (trị) = việc trị nước 🏛️" },

  // Giáo dục
  { id: "n3-6", courseId: "jlpt-n3", kanji: "教育", kana: "きょういく", romaji: "kyouiku", hanViet: "Giáo dục", meaning: "Giáo dục", textMnemonic: "教 (dạy) + 育 (nuôi dưỡng) = dạy dỗ con người 🎓" },
  { id: "n3-7", courseId: "jlpt-n3", kanji: "大学", kana: "だいがく", romaji: "daigaku", hanViet: "Đại học", meaning: "Đại học", textMnemonic: "大 (lớn) + 学 (học) = nơi học lớn nhất 🎓" },
  { id: "n3-8", courseId: "jlpt-n3", kanji: "研究", kana: "けんきゅう", romaji: "kenkyuu", hanViet: "Nghiên cứu", meaning: "Nghiên cứu", textMnemonic: "研 (mài) + 究 (tìm hiểu) = mài giũa kiến thức 🔬" },
  { id: "n3-9", courseId: "jlpt-n3", kanji: "勉強", kana: "べんきょう", romaji: "benkyou", hanViet: "Miễn cường", meaning: "Học tập", textMnemonic: "勉 (miễn/cố gắng) + 強 (mạnh) = cố gắng học cho mạnh mẽ 📚" },
  { id: "n3-10", courseId: "jlpt-n3", kanji: "試験", kana: "しけん", romaji: "shiken", hanViet: "Thí nghiệm", meaning: "Kỳ thi/Thử nghiệm", textMnemonic: "試 (thử) + 験 (nghiệm) = thử thách bằng bài thi 📝" },

  // Công nghệ
  { id: "n3-11", courseId: "jlpt-n3", kanji: "技術", kana: "ぎじゅつ", romaji: "gijutsu", hanViet: "Kỹ thuật", meaning: "Kỹ thuật", textMnemonic: "技 (kỹ năng) + 術 (thuật) = kỹ thuật công nghệ 💻" },
  { id: "n3-12", courseId: "jlpt-n3", kanji: "情報", kana: "じょうほう", romaji: "jouhou", hanViet: "Tình báo", meaning: "Thông tin", textMnemonic: "情 (tình) + 報 (báo cáo) = thông tin được báo cáo 📰" },
  { id: "n3-13", courseId: "jlpt-n3", kanji: "経済", kana: "けいざい", romaji: "keizai", hanViet: "Kinh tế", meaning: "Kinh tế", textMnemonic: "経 (qua) + 済 (xong) = nền kinh tế vận hành 💰" },
  { id: "n3-14", courseId: "jlpt-n3", kanji: "産業", kana: "さんぎょう", romaji: "sangyou", hanViet: "Sản nghiệp", meaning: "Công nghiệp", textMnemonic: "産 (sinh ra) + 業 (nghiệp) = ngành công nghiệp 🏭" },
  { id: "n3-15", courseId: "jlpt-n3", kanji: "工業", kana: "こうぎょう", romaji: "kougyou", hanViet: "Công nghiệp", meaning: "Công nghiệp", textMnemonic: "工 (công) + 業 (nghiệp) = ngành thủ công nghiệp 🔧" },

  // Môi trường
  { id: "n3-16", courseId: "jlpt-n3", kanji: "環境", kana: "かんきょう", romaji: "kankyō", hanViet: "Hoàn cảnh", meaning: "Môi trường", textMnemonic: "環 (vòng) + 境 (biên giới) = môi trường xung quanh 🌍" },
  { id: "n3-17", courseId: "jlpt-n3", kanji: "自然", kana: "しぜん", romaji: "shizen", hanViet: "Tự nhiên", meaning: "Tự nhiên", textMnemonic: "自 (tự) + 然 (vậy) = vốn dĩ tự nhiên như vậy 🌳" },
  { id: "n3-18", courseId: "jlpt-n3", kanji: "動物", kana: "どうぶつ", romaji: "doubutsu", hanViet: "Động vật", meaning: "Động vật", textMnemonic: "動 (động) + 物 (vật) = vật có thể di chuyển 🐾" },
  { id: "n3-19", courseId: "jlpt-n3", kanji: "植物", kana: "しょくぶつ", romaji: "shokubutsu", hanViet: "Thực vật", meaning: "Thực vật", textMnemonic: "植 (trồng) + 物 (vật) = vật được trồng trọt 🌿" },
  { id: "n3-20", courseId: "jlpt-n3", kanji: "気候", kana: "きこう", romaji: "kikou", hanViet: "Khí hậu", meaning: "Khí hậu", textMnemonic: "気 (khí) + 候 (chờ đợi) = khí hậu thay đổi theo mùa 🌤️" },

  // Cảm xúc
  { id: "n3-21", courseId: "jlpt-n3", kanji: "感情", kana: "かんじょう", romaji: "kanjou", hanViet: "Cảm tình", meaning: "Cảm xúc", textMnemonic: "感 (cảm) + 情 (tình) = tình cảm, cảm xúc ❤️" },
  { id: "n3-22", courseId: "jlpt-n3", kanji: "心配", kana: "しんぱい", romaji: "shinpai", hanViet: "Tâm phối", meaning: "Lo lắng", textMnemonic: "心 (tâm) + 配 (phân phát) = tâm trạng lo lắng 😟" },
  { id: "n3-23", courseId: "jlpt-n3", kanji: "安心", kana: "あんしん", romaji: "anshin", hanViet: "An tâm", meaning: "Yên tâm", textMnemonic: "安 (bình an) + 心 (tâm) = tâm hồn bình an 😌" },
  { id: "n3-24", courseId: "jlpt-n3", kanji: "緊張", kana: "きんちょう", romaji: "kinchou", hanViet: "Khẩn trương", meaning: "Căng thẳng", textMnemonic: "緊 (căng) + 張 (căng) = tinh thần căng thẳng 😰" },
  { id: "n3-25", courseId: "jlpt-n3", kanji: "満足", kana: "まんぞく", romaji: "manzoku", hanViet: "Mãn túc", meaning: "Hài lòng", textMnemonic: "満 (đầy) + 足 (đủ) = vừa lòng, hài lòng 😊" },

  // Trạng từ quan trọng
  { id: "n3-26", courseId: "jlpt-n3", kanji: "多分", kana: "たぶん", romaji: "tabun", hanViet: "Đa phân", meaning: "Có lẽ", textMnemonic: "多 (nhiều) + 分 (phần) = nhiều phần, có lẽ 🤔" },
  { id: "n3-27", courseId: "jlpt-n3", kanji: "必ず", kana: "かならず", romaji: "kanarazu", hanViet: "Tất nhiên", meaning: "Nhất định", textMnemonic: "必 (tất) + ず (chắc chắn) = chắc chắn sẽ xảy ra ✅" },
  { id: "n3-28", courseId: "jlpt-n3", kanji: "全然", kana: "ぜんぜん", romaji: "zenzen", hanViet: "Toàn nhiên", meaning: "Hoàn toàn không", textMnemonic: "全 (toàn) + 然 (vậy) = hoàn toàn không phải ❌" },
  { id: "n3-29", courseId: "jlpt-n3", kanji: "特に", kana: "とくに", romaji: "tokuni", hanViet: "Đặc biệt", meaning: "Đặc biệt", textMnemonic: "特 (đặc) + に (thì) = rất đặc biệt ⭐" },
    { id: "n3-30", courseId: "jlpt-n3", kanji: "例えば", kana: "たとえば", romaji: "tatoeba", hanViet: "Như lệ", meaning: "Ví dụ", textMnemonic: "例 (ví dụ) + えば = ví dụ như 📋" },
  
    // === SPREAD ALL IMPORTED CATEGORY ARRAYS ===
    ...JLPT_N3_EMOTIONS,
    ...JLPT_N3_DAILY,
    ...JLPT_N3_BUSINESS,
    ...JLPT_N3_SOCIETY,
    ...JLPT_N3_EDUCATION,
    ...JLPT_N3_TRAVEL,
    ...JLPT_N3_HEALTH,
    ...JLPT_N3_TECHNOLOGY,
    ...JLPT_N3_CULTURE,
    ...JLPT_N3_GRAMMAR,
    ...JLPT_N3_ADVANCED,
    ...JLPT_N3_KEIGO,
    ...JLPT_N3_IDIOMS,
    ...JLPT_N3_ABSTRACT,
  ];

// ============ KANJI N5 ============
export const KANJI_N5_WORDS: Word[] = [
  { id: "kn-1", courseId: "kanji-n5", kanji: "一", kana: "いち", romaji: "ichi", hanViet: "Nhất", meaning: "Một", textMnemonic: "Một đường thẳng 一, đơn giản như số 1 ➖" },
  { id: "kn-2", courseId: "kanji-n5", kanji: "二", kana: "に", romaji: "ni", hanViet: "Nhị", meaning: "Hai", textMnemonic: "Hai đường ngang 二, như đường tàu hỏa 🚂" },
  { id: "kn-3", courseId: "kanji-n5", kanji: "三", kana: "さん", romaji: "san", hanViet: "Tam", meaning: "Ba", textMnemonic: "Ba đường ngang 三, đếm 1-2-3 ☝️" },
  { id: "kn-4", courseId: "kanji-n5", kanji: "四", kana: "し/よん", romaji: "shi/yon", hanViet: "Tứ", meaning: "Bốn", textMnemonic: "Bốn mảnh ghép 四 như hình vuông 📐" },
  { id: "kn-5", courseId: "kanji-n5", kanji: "五", kana: "ご", romaji: "go", hanViet: "Ngũ", meaning: "Năm", textMnemonic: "Năm ở giữa 4 nét dọc, bên trong 2 nét ngang 🖐️" },
  { id: "kn-6", courseId: "kanji-n5", kanji: "六", kana: "ろく", romaji: "roku", hanViet: "Lục", meaning: "Sáu", textMnemonic: "Sáu nét tạo thành chữ 六, phức tạp nhưng đẹp 6️⃣" },
  { id: "kn-7", courseId: "kanji-n5", kanji: "七", kana: "しち/なな", romaji: "shichi/nana", hanViet: "Thất", meaning: "Bảy", textMnemonic: "Bảy nét 七 như cái bảy ngược, thêm nét nhỏ 7️⃣" },
  { id: "kn-8", courseId: "kanji-n5", kanji: "八", kana: "はち", romaji: "hachi", hanViet: "Bát", meaning: "Tám", textMnemonic: "Tám tám nét 八 như cánh quạt, xòe ra 2 bên 8️⃣" },
  { id: "kn-9", courseId: "kanji-n5", kanji: "九", kana: "きゅう/く", romaji: "kyuu/ku", hanViet: "Cửu", meaning: "Chín", textMnemonic: "Chín nét 九 như số 9 kéo dài, móc xuống 9️⃣" },
  { id: "kn-10", courseId: "kanji-n5", kanji: "十", kana: "じゅう", romaji: "juu", hanViet: "Thập", meaning: "Mười", textMnemonic: "Mười 十 = dấu cộng + dọc, thập toàn thập mỹ 🔟" },
  
  { id: "kn-11", courseId: "kanji-n5", kanji: "百", kana: "ひゃく", romaji: "hyaku", hanViet: "Bách", meaning: "Trăm", textMnemonic: "Trăm 百 = một trăm, từ 一百 (1 trăm) 💯" },
  { id: "kn-12", courseId: "kanji-n5", kanji: "千", kana: "せん", romaji: "sen", hanViet: "Thiên", meaning: "Nghìn", textMnemonic: "Nghìn 千 = một nghìn, từ 三千 (3 nghìn) 🆙" },
  { id: "kn-13", courseId: "kanji-n5", kanji: "万", kana: "まん", romaji: "man", hanViet: "Vạn", meaning: "Mười nghìn/Vạn", textMnemonic: "Vạn 万 = 10 nghìn, hình như bàn tay xòe ra 🖐️" },
  { id: "kn-14", courseId: "kanji-n5", kanji: "円", kana: "えん", romaji: "en", hanViet: "Viên", meaning: "Yên (tiền)/Tròn", textMnemonic: "円 = tiền yên Nhật 💴 và hình tròn ⭕" },
  { id: "kn-15", courseId: "kanji-n5", kanji: "日", kana: "にち/じつ", romaji: "nichi/jitsu", hanViet: "Nhật", meaning: "Mặt trời/Ngày", textMnemonic: "日 = mặt trời ☀️ và ngày, vuông có chấm giữa" },
  { id: "kn-16", courseId: "kanji-n5", kanji: "月", kana: "げつ/がつ", romaji: "getsu/gatsu", hanViet: "Nguyệt", meaning: "Trăng/Tháng", textMnemonic: "月 = trăng 🌙 và tháng, hình lưỡi liềm" },
  { id: "kn-17", courseId: "kanji-n5", kanji: "火", kana: "か/ひ", romaji: "ka/hi", hanViet: "Hỏa", meaning: "Lửa", textMnemonic: "火 = lửa 🔥, 3 nét như ngọn lửa nhảy" },
  { id: "kn-18", courseId: "kanji-n5", kanji: "水", kana: "すい/みず", romaji: "sui/mizu", hanViet: "Thủy", meaning: "Nước", textMnemonic: "水 = nước 💧, 3 giọt nước chảy xuống" },
  { id: "kn-19", courseId: "kanji-n5", kanji: "木", kana: "もく/き", romaji: "moku/ki", hanViet: "Mộc", meaning: "Cây/Gỗ", textMnemonic: "木 = cây 🌳, thân cây với cành lá xòe" },
  { id: "kn-20", courseId: "kanji-n5", kanji: "金", kana: "きん/かね", romaji: "kin/kane", hanViet: "Kim", meaning: "Vàng/Tiền", textMnemonic: "金 = vàng/tiền 💰, có 2 dấu chấm như đồng xu" },
  { id: "kn-21", courseId: "kanji-n5", kanji: "土", kana: "ど/つち", romaji: "do/tsuchi", hanViet: "Thổ", meaning: "Đất", textMnemonic: "土 = đất 🌍, gạch đầu dòng và đất bên dưới" },
  { id: "kn-22", courseId: "kanji-n5", kanji: "人", kana: "じん/ひと", romaji: "jin/hito", hanViet: "Nhân", meaning: "Người", textMnemonic: "人 = người 🧍, hai chân đang đứng" },
  { id: "kn-23", courseId: "kanji-n5", kanji: "口", kana: "こう/くち", romaji: "kou/kuchi", hanViet: "Khẩu", meaning: "Miệng", textMnemonic: "口 = miệng 👄, hình vuông như cái miệng mở" },
  { id: "kn-24", courseId: "kanji-n5", kanji: "目", kana: "もく/め", romaji: "moku/me", hanViet: "Mục", meaning: "Mắt", textMnemonic: "目 = mắt 👁️, hình con mắt với con ngươi" },
  { id: "kn-25", courseId: "kanji-n5", kanji: "耳", kana: "じ/みみ", romaji: "ji/mimi", hanViet: "Nhĩ", meaning: "Tai", textMnemonic: "耳 = tai 👂, hình vành tai lớn" },
  { id: "kn-26", courseId: "kanji-n5", kanji: "手", kana: "しゅ/て", romaji: "shu/te", hanViet: "Thủ", meaning: "Tay", textMnemonic: "手 = tay ✋, bàn tay xòe ra" },
  { id: "kn-27", courseId: "kanji-n5", kanji: "足", kana: "そく/あし", romaji: "soku/ashi", hanViet: "Túc", meaning: "Chân", textMnemonic: "足 = chân 🦵, đầu gối + bàn chân" },
  { id: "kn-28", courseId: "kanji-n5", kanji: "心", kana: "しん/こころ", romaji: "shin/kokoro", hanViet: "Tâm", meaning: "Tâm/Trái tim", textMnemonic: "心 = tâm ❤️, trái tim với 4 nét" },
  { id: "kn-29", courseId: "kanji-n5", kanji: "大", kana: "だい/おお", romaji: "dai/oo", hanViet: "Đại", meaning: "Lớn", textMnemonic: "大 = lớn, hình người dang tay ra" },
  { id: "kn-30", courseId: "kanji-n5", kanji: "小", kana: "しょう/ちい", romaji: "shou/chii", hanViet: "Tiểu", meaning: "Nhỏ", textMnemonic: "小 = nhỏ, 3 nét nhỏ xíu 🤏" },
  { id: "kn-31", courseId: "kanji-n5", kanji: "山", kana: "さん/やま", romaji: "san/yama", hanViet: "Sơn", meaning: "Núi", textMnemonic: "山 = núi 🏔️, 3 đỉnh núi liên tiếp" },
  { id: "kn-32", courseId: "kanji-n5", kanji: "川", kana: "せん/かわ", romaji: "sen/kawa", hanViet: "Xuyên", meaning: "Sông", textMnemonic: "川 = sông 🌊, 3 nét dọc như dòng chảy" },
  { id: "kn-33", courseId: "kanji-n5", kanji: "田", kana: "でん/た", romaji: "den/ta", hanViet: "Điền", meaning: "Ruộng", textMnemonic: "田 = ruộng lúa 🌾, 4 ô vuông như ruộng" },
  { id: "kn-34", courseId: "kanji-n5", kanji: "中", kana: "ちゅう/なか", romaji: "chuu/naka", hanViet: "Trung", meaning: "Giữa/Trong", textMnemonic: "中 = ở giữa 🎯, 1 nét dọc xuyên qua" },
  { id: "kn-35", courseId: "kanji-n5", kanji: "外", kana: "がい/そと", romaji: "gai/soto", hanViet: "Ngoại", meaning: "Ngoài", textMnemonic: "外 = ngoài 🚪, 月 bên trong và夕 bên ngoài" },
  { id: "kn-36", courseId: "kanji-n5", kanji: "上", kana: "じょう/うえ", romaji: "jou/ue", hanViet: "Thượng", meaning: "Trên", textMnemonic: "上 = trên ⬆️, 1 nét dọc nối 1 nét ngang" },
  { id: "kn-37", courseId: "kanji-n5", kanji: "下", kana: "か/した", romaji: "ka/shita", hanViet: "Hạ", meaning: "Dưới", textMnemonic: "下 = dưới ⬇️, 1 nét ngang trên 1 nét dọc" },
  { id: "kn-38", courseId: "kanji-n5", kanji: "左", kana: "さ/ひだり", romaji: "sa/hidari", hanViet: "Tả", meaning: "Trái", textMnemonic: "左 = trái 👈, 工 + ⼿ (bàn tay)" },
  { id: "kn-39", courseId: "kanji-n5", kanji: "右", kana: "う/みぎ", romaji: "u/migi", hanViet: "Hữu", meaning: "Phải", textMnemonic: "右 = phải 👉, ⼝ + ⼿ (miệng và tay)" },
  { id: "kn-40", courseId: "kanji-n5", kanji: "本", kana: "ほん/もと", romaji: "hon/moto", hanViet: "Bản", meaning: "Sách/Gốc", textMnemonic: "本 = sách 📖, 木 có gạch ngang ở dưới (gốc cây)" },
  { id: "kn-41", courseId: "kanji-n5", kanji: "休", kana: "きゅう/やす", romaji: "kyuu/yasu", hanViet: "Hưu", meaning: "Nghỉ ngơi", textMnemonic: "休 = nghỉ 🌴, 亻 (người) + 木 (cây) = người dựa cây nghỉ" },
  { id: "kn-42", courseId: "kanji-n5", kanji: "先", kana: "せん/さき", romaji: "sen/saki", hanViet: "Tiên", meaning: "Trước/Đầu", textMnemonic: "先 = trước, 儿 (chân) + ⺧ (nhỏ trước)" },
  { id: "kn-43", courseId: "kanji-n5", kanji: "生", kana: "せい/い/なま", romaji: "sei/i/nama", hanViet: "Sinh", meaning: "Sinh/Sống", textMnemonic: "生 = sinh ra 🌱, 1 đường dọc nối nhiều nét ngang" },
  { id: "kn-44", courseId: "kanji-n5", kanji: "車", kana: "しゃ/くるま", romaji: "sha/kuruma", hanViet: "Xa", meaning: "Xe", textMnemonic: "車 = xe 🚗, hình bánh xe cổ đại" },
  { id: "kn-45", courseId: "kanji-n5", kanji: "駅", kana: "えき", romaji: "eki", hanViet: "Dịch", meaning: "Ga/Nhà ga", textMnemonic: "駅 = nhà ga 🚉, 馬 (ngựa) + 尺 (đo) = nơi đo ngựa chạy" },
  { id: "kn-46", courseId: "kanji-n5", kanji: "店", kana: "てん/みせ", romaji: "ten/mise", hanViet: "Điếm", meaning: "Cửa hàng", textMnemonic: "店 = cửa hàng 🏪, 广 (mái nhà) + 宀 (mái)" },
  { id: "kn-47", courseId: "kanji-n5", kanji: "道", kana: "どう/みち", romaji: "dou/michi", hanViet: "Đạo", meaning: "Đường/Đạo", textMnemonic: "道 = đường 🛣️, 首 (đầu) + 辶 (đi) = đi đầu" },
  { id: "kn-48", courseId: "kanji-n5", kanji: "国", kana: "こく/くに", romaji: "koku/kuni", hanViet: "Quốc", meaning: "Nước/Quốc gia", textMnemonic: "国 = nước 🏴, 玉 (ngọc) bên trong 囗 (vùng)" },
  { id: "kn-49", courseId: "kanji-n5", kanji: "語", kana: "ご/かた", romaji: "go/kata", hanViet: "Ngữ", meaning: "Ngôn ngữ", textMnemonic: "語 = ngôn ngữ 🗣️, 言 (nói) + 吾 (tôi)" },
  { id: "kn-50", courseId: "kanji-n5", kanji: "学", kana: "がく/まな", romaji: "gaku/mana", hanViet: "Học", meaning: "Học", textMnemonic: "学 = học 📚, 子 (con) + 冖 (mái) = con dưới mái học" },
];
