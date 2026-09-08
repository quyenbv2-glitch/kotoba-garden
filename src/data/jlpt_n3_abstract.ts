/**
 * JLPT N3 - Từ vựng Trừu tượng
 * Từ vựng về khái niệm trừu tượng, cảm xúc, suy nghĩ
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_ABSTRACT: Word[] = [
  // Tình cảm & cảm xúc
  { id: "n3-abs-1", courseId: "jlpt-n3", kanji: "愛", kana: "あい", romaji: "ai", hanViet: "Ái", meaning: "Tình yêu", textMnemonic: "愛 = tình yêu (yêu thương) ❤️" },
  { id: "n3-abs-2", courseId: "jlpt-n3", kanji: "友情", kana: "ゆうじょう", romaji: "yuujou", hanViet: "Hữu tình", meaning: "Tình bạn", textMnemonic: "友情 = tình bạn chân thành 🤝" },
  { id: "n3-abs-3", courseId: "jlpt-n3", kanji: "信頼", kana: "しんらい", romaji: "shinrai", hanViet: "Tân lập", meaning: "Sự tin tưởng", textMnemonic: "信頼 = tin tưởng / đáng tin cậy 💚" },
  { id: "n3-abs-4", courseId: "jlpt-n3", kanji: "尊敬", kana: "そんけい", romaji: "sonkei", hanViet: "Tôn kính", meaning: "Sự tôn kính", textMnemonic: "尊敬 = kính trọng ai đó 🙏" },
  { id: "n3-abs-5", courseId: "jlpt-n3", kanji: "希望", kana: "きぼう", romaji: "kibou", hanViet: "Hy vọng", meaning: "Hy vọng", textMnemonic: "希望 = hy vọng / ước mơ ✨" },
  { id: "n3-abs-6", courseId: "jlpt-n3", kanji: "夢", kana: "ゆめ", romaji: "yume", hanViet: "Mộng", meaning: "Giấc mơ / Ước mơ", textMnemonic: "夢 = giấc mơ / ước mơ 💭" },
  { id: "n3-abs-7", courseId: "jlpt-n3", kanji: "目標", kana: "もくひょう", romaji: "mokuhyou", hanViet: "Mục tiêu", meaning: "Mục tiêu", textMnemonic: "目標 = mục tiêu cần đạt được 🎯" },
  { id: "n3-abs-8", courseId: "jlpt-n3", kanji: "理想", kana: "りそう", romaji: "risou", hanViet: "Lý tưởng", meaning: "Lý tưởng", textMnemonic: "理想 = lý tưởng / điều lý tưởng ⭐" },
  { id: "n3-abs-9", courseId: "jlpt-n3", kanji: "現実", kana: "げんじつ", romaji: "genjitsu", hanViet: "Hiện thực", meaning: "Thực tế", textMnemonic: "現実 = thực tế (đối lập với lý tưởng) 📍" },
  { id: "n3-abs-10", courseId: "jlpt-n3", kanji: "真実", kana: "しんじつ", romaji: "shinjitsu", hanViet: "Chân thực", meaning: "Sự thật", textMnemonic: "真実 = sự thật / chân lý ✅" },

  // Khái niệm đạo đức
  { id: "n3-abs-11", courseId: "jlpt-n3", kanji: "正義", kana: "せいぎ", romaji: "seigi", hanViet: "Chính nghĩa", meaning: "Công lý", textMnemonic: "正義 = công lý / lẽ phải ⚖️" },
  { id: "n3-abs-12", courseId: "jlpt-n3", kanji: "自由", kana: "じゆう", romaji: "jiyuu", hanViet: "Tự do", meaning: "Tự do", textMnemonic: "自由 = tự do / tự trị 🕊️" },
  { id: "n3-abs-13", courseId: "jlpt-n3", kanji: "平和", kana: "へいわ", romaji: "heiwa", hanViet: "Hòa bình", meaning: "Hòa bình", textMnemonic: "平和 = hòa bình / yên bình ☮️" },
  { id: "n3-abs-14", courseId: "jlpt-n3", kanji: "幸福", kana: "こうふく", romaji: "koufuku", hanViet: "Hạnh phúc", meaning: "Hạnh phúc", textMnemonic: "幸福 = hạnh phúc / may mắn 😊" },
  { id: "n3-abs-15", courseId: "jlpt-n3", kanji: "悲しみ", kana: "かなしみ", romaji: "kanashimi", hanViet: "Bi", meaning: "Nỗi buồn", textMnemonic: "悲しみ = nỗi buồn / sầu thương 😢" },
  { id: "n3-abs-16", courseId: "jlpt-n3", kanji: "喜び", kana: "よろこび", romaji: "yorokobi", hanViet: "Hỉ", meaning: "Niềm vui", textMnemonic: "喜び = niềm vui / hân phúc 🎉" },
  { id: "n3-abs-17", courseId: "jlpt-n3", kanji: "怒り", kana: "いかり", romaji: "ikari", hanViet: "Nộ", meaning: "Sự tức giận", textMnemonic: "怒り = sự giận dữ / tức giận 😠" },
  { id: "n3-abs-18", courseId: "jlpt-n3", kanji: "恐れ", kana: "おそれ", romaji: "osore", hanViet: "Khủng", meaning: "Nỗi sợ", textMnemonic: "恐れ = nỗi sợ / lo âu 😨" },
  { id: "n3-abs-19", courseId: "jlpt-n3", kanji: "勇気", kana: "ゆうき", romaji: "yuuki", hanViet: "Dũng khí", meaning: "Dũng cảm", textMnemonic: "勇気 = dũng cảm / gan dạ 💪" },
  { id: "n3-abs-20", courseId: "jlpt-n3", kanji: "知恵", kana: "ちえ", romaji: "chie", hanViet: "Trí tuệ", meaning: "Trí tuệ", textMnemonic: "知恵 = trí tuệ / mẹo hay 🧠" },

  // Tri thức & tư tưởng
  { id: "n3-abs-21", courseId: "jlpt-n3", kanji: "知識", kana: "ちしき", romaji: "chishiki", hanViet: "Tri thức", meaning: "Kiến thức", textMnemonic: "知識 = kiến thức / học thức 📚" },
  { id: "n3-abs-22", courseId: "jlpt-n3", kanji: "思想", kana: "しそう", romaji: "shisou", hanViet: "Tư tưởng", meaning: "Tư tưởng", textMnemonic: "思想 = tư tưởng / ý thức hệ 💭" },
  { id: "n3-abs-23", courseId: "jlpt-n3", kanji: "宗教", kana: "しゅうきょう", romaji: "shuukyou", hanViet: "Tôn giáo", meaning: "Tôn giáo", textMnemonic: "宗教 = tôn giáo / đức tin 🛕" },
  { id: "n3-abs-24", courseId: "jlpt-n3", kanji: "信仰", kana: "しんこう", romaji: "shinkou", hanViet: "Tín ngưỡng", meaning: "Đức tin", textMnemonic: "信仰 = đức tin / tín ngưỡng 🙏" },
  { id: "n3-abs-25", courseId: "jlpt-n3", kanji: "哲学", kana: "てつがく", romaji: "tetsugaku", hanViet: "Triết học", meaning: "Triết học", textMnemonic: "哲学 = triết học / suy ngẫm về cuộc sống 🤔" },

  // Văn hóa & nghệ thuật
  { id: "n3-abs-26", courseId: "jlpt-n3", kanji: "文化", kana: "ぶんか", romaji: "bunka", hanViet: "Văn hóa", meaning: "Văn hóa", textMnemonic: "文化 = văn hóa / nền văn minh 🎭" },
  { id: "n3-abs-27", courseId: "jlpt-n3", kanji: "伝統", kana: "でんとう", romaji: "dentou", hanViet: "Truyền thống", meaning: "Truyền thống", textMnemonic: "伝統 = truyền thống / tập quán 📜" },
  { id: "n3-abs-28", courseId: "jlpt-n3", kanji: "芸術", kana: "げいじゅつ", romaji: "geijutsu", hanViet: "Nghệ thuật", meaning: "Nghệ thuật", textMnemonic: "芸術 = nghệ thuật / tác phẩm 🎨" },
  { id: "n3-abs-29", courseId: "jlpt-n3", kanji: "文学", kana: "ぶんがく", romaji: "bungaku", hanViet: "Văn học", meaning: "Văn học", textMnemonic: "文学 = văn học / thơ văn 📚" },
  { id: "n3-abs-30", courseId: "jlpt-n3", kanji: "音楽", kana: "おんがく", romaji: "ongaku", hanViet: "Âm nhạc", meaning: "Âm nhạc", textMnemonic: "音楽 = âm nhạc / giai điệu 🎵" },
  { id: "n3-abs-31", courseId: "jlpt-n3", kanji: "美", kana: "び", romaji: "bi", hanViet: "Mỹ", meaning: "Vẻ đẹp", textMnemonic: "美 = cái đẹp / thẩm mỹ ✨" },
  { id: "n3-abs-32", courseId: "jlpt-n3", kanji: "感動", kana: "かんどう", romaji: "kandou", hanViet: "Cảm động", meaning: "Xúc động", textMnemonic: "感動 = xúc động / cảm động 💖" },
  { id: "n3-abs-33", courseId: "jlpt-n3", kanji: "印象", kana: "いんしょう", romaji: "inshou", hanViet: "Ấn tượng", meaning: "Ấn tượng", textMnemonic: "印象 = ấn tượng / hình ảnh trong tâm trí 👁️" },
  { id: "n3-abs-34", courseId: "jlpt-n3", kanji: "表現", kana: "ひょうげん", romaji: "hyouken", hanViet: "Biểu hiện", meaning: "Biểu hiện", textMnemonic: "表現 = biểu hiện / cách diễn đạt 📝" },
  { id: "n3-abs-35", courseId: "jlpt-n3", kanji: "想像", kana: "そうぞう", romaji: "souzou", hanViet: "Tưởng tượng", meaning: "Tưởng tượng", textMnemonic: "想像 = tưởng tượng / bay bổng 💭" },

  // Sáng tạo & tư duy
  { id: "n3-abs-36", courseId: "jlpt-n3", kanji: "創造", kana: "そうぞう", romaji: "souzou", hanViet: "Sáng tạo", meaning: "Sáng tạo", textMnemonic: "創造 = sáng tạo / tạo ra cái mới 🌟" },
  { id: "n3-abs-37", courseId: "jlpt-n3", kanji: "発想", kana: "はっそう", romaji: "hassou", hanViet: "Phát tưởng", meaning: "Ý tưởng", textMnemonic: "発想 = ý tưởng / cách nghĩ 💡" },
  { id: "n3-abs-38", courseId: "jlpt-n3", kanji: "好奇心", kana: "こうきしん", romaji: "koukishin", hanViet: "Hào kỳ tâm", meaning: "Sự tò mò", textMnemonic: "好奇心 = tò mò / ham học hỏi ❓" },
  { id: "n3-abs-39", courseId: "jlpt-n3", kanji: "努力", kana: "どりょく", romaji: "doryoku", hanViet: "Nỗ lực", meaning: "Nỗ lực", textMnemonic: "努力 = nỗ lực / cố gắng 💪" },
  { id: "n3-abs-40", courseId: "jlpt-n3", kanji: "成功", kana: "せいこう", romaji: "seikou", hanViet: "Thành công", meaning: "Thành công", textMnemonic: "成功 = thành công / đạt được mục đích 🏆" },
  { id: "n3-abs-41", courseId: "jlpt-n3", kanji: "失敗", kana: "しっぱい", romaji: "shippai", hanViet: "Thất bại", meaning: "Thất bại", textMnemonic: "失敗 = thất bại / sai lầm ❌" },
  { id: "n3-abs-42", courseId: "jlpt-n3", kanji: "経験", kana: "けいけん", romaji: "keiken", hanViet: "Kinh nghiệm", meaning: "Kinh nghiệm", textMnemonic: "経験 = kinh nghiệm / đã trải qua 📈" },
  { id: "n3-abs-43", courseId: "jlpt-n3", kanji: "責任", kana: "せきにん", romaji: "sekinin", hanViet: "Trách nhiệm", meaning: "Trách nhiệm", textMnemonic: "責任 = trách nhiệm / nghĩa vụ ⚖️" },
  { id: "n3-abs-44", courseId: "jlpt-n3", kanji: "義務", kana: "ぎむ", romaji: "gimu", hanViet: "Nghĩa vụ", meaning: "Nghĩa vụ", textMnemonic: "義務 = nghĩa vụ / bổn phận 📋" },
  { id: "n3-abs-45", courseId: "jlpt-n3", kanji: "権利", kana: "けんり", romaji: "kenri", hanViet: "Quyền lợi", meaning: "Quyền lợi", textMnemonic: "権利 = quyền lợi / quyền của mình ⚖️" },

  // Giá trị & ý nghĩa
  { id: "n3-abs-46", courseId: "jlpt-n3", kanji: "価値", kana: "かち", romaji: "kachi", hanViet: "Giá trị", meaning: "Giá trị", textMnemonic: "価値 = giá trị / giá trị kinh tế 💎" },
  { id: "n3-abs-47", courseId: "jlpt-n3", kanji: "意味", kana: "いみ", romaji: "imi", hanViet: "Ý nghĩa", meaning: "Ý nghĩa", textMnemonic: "意味 = ý nghĩa / nghĩa của từ 📖" },
  { id: "n3-abs-48", courseId: "jlpt-n3", kanji: "理由", kana: "りゆう", romaji: "riyuu", hanViet: "Lý do", meaning: "Lý do", textMnemonic: "理由 = lý do / nguyên nhân ❓" },
  { id: "n3-abs-49", courseId: "jlpt-n3", kanji: "原因", kana: "げんいん", romaji: "genin", hanViet: "Nguyên nhân", meaning: "Nguyên nhân", textMnemonic: "原因 = nguyên nhân / gốc rễ 🔍" },
  { id: "n3-abs-50", courseId: "jlpt-n3", kanji: "結果", kana: "けっか", romaji: "kekka", hanViet: "Kết quả", meaning: "Kết quả", textMnemonic: "結果 = kết quả / đầu ra 📊" },
  { id: "n3-abs-51", courseId: "jlpt-n3", kanji: "影響", kana: "えいきょう", romaji: "eikyou", hanViet: "Ảnh hưởng", meaning: "Ảnh hưởng", textMnemonic: "影響 = ảnh hưởng / tác động 💫" },
  { id: "n3-abs-52", courseId: "jlpt-n3", kanji: "効果", kana: "こうか", romaji: "kouka", hanViet: "Hiệu quả", meaning: "Hiệu quả", textMnemonic: "効果 = hiệu quả / công dụng ✅" },
  { id: "n3-abs-53", courseId: "jlpt-n3", kanji: "目的", kana: "もくてき", romaji: "mokuteki", hanViet: "Mục đích", meaning: "Mục đích", textMnemonic: "目的 = mục đích / ý đồ 🎯" },
  { id: "n3-abs-54", courseId: "jlpt-n3", kanji: "手段", kana: "しゅだん", romaji: "shudan", hanViet: "Thủ đoạn", meaning: "Phương tiện", textMnemonic: "手段 = phương tiện / cách thức 🔧" },
  { id: "n3-abs-55", courseId: "jlpt-n3", kanji: "方法", kana: "ほうほう", romaji: "houhou", hanViet: "Phương pháp", meaning: "Phương pháp", textMnemonic: "方法 = phương pháp / cách làm 📋" },

  // Hành vi & thái độ
  { id: "n3-abs-56", courseId: "jlpt-n3", kanji: "方針", kana: "ほうしん", romaji: "houshin", hanViet: "Phương châm", meaning: "Phương châm", textMnemonic: "方針 = phương châm / đường lối 🧭" },
  { id: "n3-abs-57", courseId: "jlpt-n3", kanji: "態度", kana: "たいど", romaji: "taido", hanViet: "Thái độ", meaning: "Thái độ", textMnemonic: "態度 = thái độ / cách cư xử 😊" },
  { id: "n3-abs-58", courseId: "jlpt-n3", kanji: "行動", kana: "こうどう", romaji: "koudou", hanViet: "Hành động", meaning: "Hành động", textMnemonic: "行動 = hành động / cách hành xử 🚶" },
  { id: "n3-abs-59", courseId: "jlpt-n3", kanji: "習慣", kana: "しゅうかん", romaji: "shuukan", hanViet: "Tập quán", meaning: "Thói quen", textMnemonic: "習慣 = thói quen / tập quán 🔄" },
  { id: "n3-abs-60", courseId: "jlpt-n3", kanji: "性格", kana: "せいかく", romaji: "seikaku", hanViet: "Tính cách", meaning: "Tính cách", textMnemonic: "性格 = tính cách / bản chất con người 🧑" },

  // Năng lực & khả năng
  { id: "n3-abs-61", courseId: "jlpt-n3", kanji: "能力", kana: "のうりょく", romaji: "nouryoku", hanViet: "Năng lực", meaning: "Năng lực", textMnemonic: "能力 = năng lực / khả năng 💪" },
  { id: "n3-abs-62", courseId: "jlpt-n3", kanji: "才能", kana: "さいのう", romaji: "sainou", hanViet: "Tài năng", meaning: "Tài năng", textMnemonic: "才能 = tài năng / thiên phú ⭐" },
  { id: "n3-abs-63", courseId: "jlpt-n3", kanji: "技術", kana: "ぎじゅつ", romaji: "gijutsu", hanViet: "Kỹ thuật", meaning: "Kỹ thuật", textMnemonic: "技術 = kỹ thuật / công nghệ 🔧" },
  { id: "n3-abs-64", courseId: "jlpt-n3", kanji: "科学", kana: "かがく", romaji: "kagaku", hanViet: "Khoa học", meaning: "Khoa học", textMnemonic: "科学 = khoa học / nghiên cứu 🔬" },
  { id: "n3-abs-65", courseId: "jlpt-n3", kanji: "経済", kana: "けいざい", romaji: "keizai", hanViet: "Kinh tế", meaning: "Kinh tế", textMnemonic: "経済 = kinh tế / tiền bạc 💰" },
  { id: "n3-abs-66", courseId: "jlpt-n3", kanji: "政治", kana: "せいじ", romaji: "seiji", hanViet: "Chính trị", meaning: "Chính trị", textMnemonic: "政治 = chính trị / quốc sự 🏛️" },
  { id: "n3-abs-67", courseId: "jlpt-n3", kanji: "法律", kana: "ほうりつ", romaji: "houritsu", hanViet: "Pháp luật", meaning: "Pháp luật", textMnemonic: "法律 = pháp luật / luật pháp ⚖️" },
  { id: "n3-abs-68", courseId: "jlpt-n3", kanji: "制度", kana: "せいど", romaji: "seido", hanViet: "Chế độ", meaning: "Chế độ", textMnemonic: "制度 = chế độ / hệ thống 📋" },
  { id: "n3-abs-69", courseId: "jlpt-n3", kanji: "社会", kana: "しゃかい", romaji: "shakai", hanViet: "Xã hội", meaning: "Xã hội", textMnemonic: "社会 = xã hội / cộng đồng 🌍" },
  { id: "n3-abs-70", courseId: "jlpt-n3", kanji: "国家", kana: "こっか", romaji: "kokka", hanViet: "Quốc gia", meaning: "Quốc gia", textMnemonic: "国家 = quốc gia / đất nước 🏴" },

  // Thời gian & không gian
  { id: "n3-abs-71", courseId: "jlpt-n3", kanji: "国際", kana: "こくさい", romaji: "kokusai", hanViet: "Quốc tế", meaning: "Quốc tế", textMnemonic: "国際 = quốc tế / toàn cầu 🌐" },
  { id: "n3-abs-72", courseId: "jlpt-n3", kanji: "世界", kana: "せかい", romaji: "sekai", hanViet: "Thế giới", meaning: "Thế giới", textMnemonic: "世界 = thế giới / vũ trụ 🌍" },
  { id: "n3-abs-73", courseId: "jlpt-n3", kanji: "歴史", kana: "れきし", romaji: "rekishi", hanViet: "Lịch sử", meaning: "Lịch sử", textMnemonic: "歴史 = lịch sử / quá khứ 📜" },
  { id: "n3-abs-74", courseId: "jlpt-n3", kanji: "未来", kana: "みらい", romaji: "mirai", hanViet: "Vị lai", meaning: "Tương lai", textMnemonic: "未来 = tương lai / mai sau 🚀" },
  { id: "n3-abs-75", courseId: "jlpt-n3", kanji: "過去", kana: "かこ", romaji: "kako", hanViet: "Quá khứ", meaning: "Quá khứ", textMnemonic: "過去 = quá khứ / ngày xưa ⏮️" },
  { id: "n3-abs-76", courseId: "jlpt-n3", kanji: "現在", kana: "げんざい", romaji: "genzai", hanViet: "Hiện tại", meaning: "Hiện tại", textMnemonic: "現在 = hiện tại / bây giờ ⏰" },
  { id: "n3-abs-77", courseId: "jlpt-n3", kanji: "時間", kana: "じかん", romaji: "jikan", hanViet: "Thời gian", meaning: "Thời gian", textMnemonic: "時間 = thời gian / giờ ⏳" },
  { id: "n3-abs-78", courseId: "jlpt-n3", kanji: "空間", kana: "くうかん", romaji: "kuukan", hanViet: "Không gian", meaning: "Không gian", textMnemonic: "空間 = không gian / khoảng trống 🏠" },
  { id: "n3-abs-79", courseId: "jlpt-n3", kanji: "場所", kana: "ばしょ", romaji: "basho", hanViet: "Trụ sở", meaning: "Nơi chốn", textMnemonic: "場所 = nơi chốn / địa điểm 📍" },
  { id: "n3-abs-80", courseId: "jlpt-n3", kanji: "状況", kana: "じょうきょう", romaji: "joukyou", hanViet: "Tình huống", meaning: "Tình huống", textMnemonic: "状況 = tình huống / hoàn cảnh 🎭" },

  // Trạng thái & tình trạng
  { id: "n3-abs-81", courseId: "jlpt-n3", kanji: "状態", kana: "じょうたい", romaji: "joutai", hanViet: "Trạng thái", meaning: "Trạng thái", textMnemonic: "状態 = trạng thái / tình trạng 📊" },
  { id: "n3-abs-82", courseId: "jlpt-n3", kanji: "環境", kana: "かんきょう", romaji: "kankyou", hanViet: "Hoàn cảnh", meaning: "Môi trường", textMnemonic: "環境 = môi trường / hoàn cảnh 🌍" },
  { id: "n3-abs-83", courseId: "jlpt-n3", kanji: "自然", kana: "しぜん", romaji: "shizen", hanViet: "Tự nhiên", meaning: "Tự nhiên", textMnemonic: "自然 = tự nhiên / thiên nhiên 🌳" },
  { id: "n3-abs-84", courseId: "jlpt-n3", kanji: "生命", kana: "せいめい", romaji: "seimei", hanViet: "Sinh mệnh", meaning: "Sự sống", textMnemonic: "生命 = sự sống / sinh mệnh ❤️" },
  { id: "n3-abs-85", courseId: "jlpt-n3", kanji: "運命", kana: "うんめい", romaji: "unmei", hanViet: "Vận mệnh", meaning: "Vận mệnh", textMnemonic: "運命 = vận mệnh / số phận 🌟" },
  { id: "n3-abs-86", courseId: "jlpt-n3", kanji: "偶然", kana: "ぐうぜん", romaji: "guuzen", hanViet: "Ngẫu nhiên", meaning: "Sự tình cờ", textMnemonic: "偶然 = ngẫu nhiên / tình cờ 🎲" },
  { id: "n3-abs-87", courseId: "jlpt-n3", kanji: "必然", kana: "ひつぜん", romaji: "hitsuzen", hanViet: "Tất nhiên", meaning: "Tất yếu", textMnemonic: "必然 = tất yếu / không thể tránh được ⚖️" },
  { id: "n3-abs-88", courseId: "jlpt-n3", kanji: "可能性", kana: "かのうせい", romaji: "kanousei", hanViet: "Khả năng", meaning: "Khả năng", textMnemonic: "可能性 = khả năng / tiềm năng 💡" },
  { id: "n3-abs-89", courseId: "jlpt-n3", kanji: "事実", kana: "じじつ", romaji: "jijitsu", hanViet: "Sự thực", meaning: "Sự thực", textMnemonic: "事実 = sự thực / thực tế ✅" },
  { id: "n3-abs-90", courseId: "jlpt-n3", kanji: "証拠", kana: "しょうこ", romaji: "shouko", hanViet: "Chứng cứ", meaning: "Bằng chứng", textMnemonic: "証拠 = bằng chứng / chứng cứ 🔍" },

  // Lý thuyết & nhận thức
  { id: "n3-abs-91", courseId: "jlpt-n3", kanji: "理論", kana: "り론", romaji: "riron", hanViet: "Lý luận", meaning: "Lý thuyết", textMnemonic: "理論 = lý thuyết / học thuyết 📚" },
  { id: "n3-abs-92", courseId: "jlpt-n3", kanji: "仮説", kana: "かせつ", romaji: "kasetsu", hanViet: "Giả thuyết", meaning: "Giả thuyết", textMnemonic: "仮説 = giả thuyết / giả định 🤔" },
  { id: "n3-abs-93", courseId: "jlpt-n3", kanji: "予想", kana: "よそう", romaji: "yosou", hanViet: "Dự liệu", meaning: "Dự đoán", textMnemonic: "予想 = dự đoán / mong đợi 🔮" },
  { id: "n3-abs-94", courseId: "jlpt-n3", kanji: "認識", kana: "にんしき", romaji: "ninshiki", hanViet: "Nhận thức", meaning: "Nhận thức", textMnemonic: "認識 = nhận thức / hiểu biết 🧠" },
  { id: "n3-abs-95", courseId: "jlpt-n3", kanji: "理解", kana: "りかい", romaji: "rikai", hanViet: "Lý giải", meaning: "Sự hiểu biết", textMnemonic: "理解 = sự hiểu biết / nắm bắt 💡" },
  { id: "n3-abs-96", courseId: "jlpt-n3", kanji: "判断", kana: "はんだん", romaji: "handan", hanViet: "Phán đoán", meaning: "Phán đoán", textMnemonic: "判断 = phán đoán / quyết định 🤔" },
  { id: "n3-abs-97", courseId: "jlpt-n3", kanji: "意識", kana: "いしき", romaji: "ishiki", hanViet: "Ý thức", meaning: "Ý thức", textMnemonic: "意識 = ý thức / nhận thức 🧠" },
  { id: "n3-abs-98", courseId: "jlpt-n3", kanji: "精神", kana: "せいしん", romaji: "seishin", hanViet: "Tinh thần", meaning: "Tinh thần", textMnemonic: "精神 = tinh thần / tâm trí 💭" },
  { id: "n3-abs-99", courseId: "jlpt-n3", kanji: "心理", kana: "しんり", romaji: "shinri", hanViet: "Tâm lý", meaning: "Tâm lý", textMnemonic: "心理 = tâm lý / tâm trí 🧠" },
  { id: "n3-abs-100", courseId: "jlpt-n3", kanji: "感情", kana: "かんじょう", romaji: "kanjou", hanViet: "Cảm tình", meaning: "Cảm xúc", textMnemonic: "感情 = cảm xúc / tình cảm ❤️" },

  // Cảm giác & trải nghiệm
  { id: "n3-abs-101", courseId: "jlpt-n3", kanji: "気持ち", kana: "きもち", romaji: "kimochi", hanViet: "Khí vị", meaning: "Cảm xúc", textMnemonic: "気持ち = cảm xúc / tâm trạng 😊" },
  { id: "n3-abs-102", courseId: "jlpt-n3", kanji: "記憶", kana: "きおく", romaji: "kioku", hanViet: "Ký ức", meaning: "Ký ức", textMnemonic: "記憶 = ký ức / trí nhớ 🧠" },
  { id: "n3-abs-103", courseId: "jlpt-n3", kanji: "思い出", kana: "おもいで", romaji: "omoide", hanViet: "Hồi ức", meaning: "Ký ức", textMnemonic: "思い出 = ký ức / kỷ niệm 💭" },
  { id: "n3-abs-104", courseId: "jlpt-n3", kanji: "体験", kana: "たいけん", romaji: "taiken", hanViet: "Đả thể", meaning: "Trải nghiệm", textMnemonic: "体験 = trải nghiệm / đã trải qua 🎯" },
  { id: "n3-abs-105", courseId: "jlpt-n3", kanji: "思考", kana: "しこう", romaji: "shikou", hanViet: "Tư lự", meaning: "Suy nghĩ", textMnemonic: "思考 = suy nghĩ / tư duy 🤔" },
  { id: "n3-abs-106", courseId: "jlpt-n3", kanji: "選択", kana: "せんたく", romaji: "sentaku", hanViet: "Tuyển tác", meaning: "Lựa chọn", textMnemonic: "選択 = lựa chọn / chọn lọc ✅" },
  { id: "n3-abs-107", courseId: "jlpt-n3", kanji: "決定", kana: "けってい", romaji: "kettei", hanViet: "Quyết định", meaning: "Quyết định", textMnemonic: "決定 = quyết định / xác định ✋" },
  { id: "n3-abs-108", courseId: "jlpt-n3", kanji: "変化", kana: "へんか", romaji: "henka", hanViet: "Biến hóa", meaning: "Sự thay đổi", textMnemonic: "変化 = thay đổi / biến hóa 🔄" },
  { id: "n3-abs-109", courseId: "jlpt-n3", kanji: "成長", kana: "せいちょう", romaji: "seichou", hanViet: "Trưởng thành", meaning: "Sự trưởng thành", textMnemonic: "成長 = trưởng thành / phát triển 🌱" },
  { id: "n3-abs-110", courseId: "jlpt-n3", kanji: "発展", kana: "はってん", romaji: "hatten", hanViet: "Phát triển", meaning: "Sự phát triển", textMnemonic: "発展 = phát triển / mở rộng 📈" },

  // Tiến bộ & cải cách
  { id: "n3-abs-111", courseId: "jlpt-n3", kanji: "進歩", kana: "しんぽ", romaji: "shinpo", hanViet: "Tiến bộ", meaning: "Tiến bộ", textMnemonic: "進歩 = tiến bộ / cải thiện ⬆️" },
  { id: "n3-abs-112", courseId: "jlpt-n3", kanji: "改革", kana: "かいかく", romaji: "kaikaku", hanViet: "Cải cách", meaning: "Cải cách", textMnemonic: "改革 = cải cách / đổi mới 🔧" },
  { id: "n3-abs-113", courseId: "jlpt-n3", kanji: "革命", kana: "かくめい", romaji: "kakumei", hanViet: "Cách mệnh", meaning: "Cách mạng", textMnemonic: "革命 = cách mạng / thay đổi lớn 🔥" },
  { id: "n3-abs-114", courseId: "jlpt-n3", kanji: "競争", kana: "きょうそう", romaji: "kyousou", hanViet: "Cạnh tranh", meaning: "Cạnh tranh", textMnemonic: "競争 = cạnh tranh / thi đua 🏃" },
  { id: "n3-abs-115", courseId: "jlpt-n3", kanji: "協力", kana: "きょうりょく", romaji: "kyouryoku", hanViet: "Hiệp lực", meaning: "Hợp tác", textMnemonic: "協力 = hợp tác / đồng lòng 🤝" },
  { id: "n3-abs-116", courseId: "jlpt-n3", kanji: "対立", kana: "たいりつ", romaji: "tairitsu", hanViet: "Đối lập", meaning: "Đối lập", textMnemonic: "対立 = đối lập / mâu thuẫn ⚔️" },
  { id: "n3-abs-117", courseId: "jlpt-n3", kanji: "矛盾", kana: "むじゅん", romaji: "mujun", hanViet: "Mâu thuẫn", meaning: "Mâu thuẫn", textMnemonic: "矛盾 = mâu thuẫn / không nhất quán ❌" },
  { id: "n3-abs-118", courseId: "jlpt-n3", kanji: "解決", kana: "かいけつ", romaji: "kaiketsu", hanViet: "Giải quyết", meaning: "Giải quyết", textMnemonic: "解決 = giải quyết / xử lý ✅" },
  { id: "n3-abs-119", courseId: "jlpt-n3", kanji: "問題", kana: "もんだい", romaji: "mondai", hanViet: "Vấn đề", meaning: "Vấn đề", textMnemonic: "問題 = vấn đề / câu hỏi ❓" },
  { id: "n3-abs-120", courseId: "jlpt-n3", kanji: "課題", kana: "かだい", romaji: "kadai", hanViet: "Nhiệm vụ", meaning: "Nhiệm vụ", textMnemonic: "課題 = nhiệm vụ / vấn đề cần giải quyết 📝" },
];
