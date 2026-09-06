/**
 * JLPT N3 - Từ vựng đời sống hàng ngày (Daily Life)
 * 130 từ phổ biến nhất
 */

import { Word } from "../types/kotoba";

export const JLPT_N3_DAILY: Word[] = [
  // Đồ dùng gia đình
  { id: "n3-d-1", courseId: "jlpt-n3", kanji: "布団", kana: "ふとん", romaji: "futon", hanViet: "Phu đản", meaning: "Chăn/Nệm", textMnemonic: "布 (vải) + 団 (cục) = cục vải lớn để nằm 🛏️" },
  { id: "n3-d-2", courseId: "jlpt-n3", kanji: "枕", kana: "まくら", romaji: "makura", hanViet: "Chẩm", meaning: "Gối", textMnemonic: "枕 = gối đầu, hình vuông mềm 💤" },
  { id: "n3-d-3", courseId: "jlpt-n3", kanji: "毛布", kana: "もうふ", romaji: "mōfu", hanViet: "Mao bố", meaning: "Chăn lông", textMnemonic: "毛 (lông) + 布 (vải) = chăn lông ấm áp 🛌" },
  { id: "n3-d-4", courseId: "jlpt-n3", kanji: "敷布団", kana: "しきぶとん", romaji: "shikibuton", hanViet: "Phu đản", meaning: "Nệm lót sàn", textMnemonic: "敷 (trải) + 布団 (nệm) = nệm trải sàn tatami 🟫" },
  { id: "n3-d-5", courseId: "jlpt-n3", kanji: "座布団", kana: "ざぶとん", romaji: "zabuton", hanViet: "Tọa phu đản", meaning: "Đệm ngồi", textMnemonic: "座 (ngồi) + 布団 = đệm ngồi lễ phép 🧘" },

  // Phòng
  { id: "n3-d-6", courseId: "jlpt-n3", kanji: "居間", kana: "いま", romaji: "ima", hanViet: "Cư gian", meaning: "Phòng khách", textMnemonic: "居 (ở) + 間 (phòng) = phòng ở chung 🛋️" },
  { id: "n3-d-7", courseId: "jlpt-n3", kanji: "台所", kana: "だいどころ", romaji: "daidokoro", hanViet: "Đài sở", meaning: "Nhà bếp", textMnemonic: "台 (bệ) + 所 (nơi) = nơi có bếp nấu ăn 🍳" },
  { id: "n3-d-8", courseId: "jlpt-n3", kanji: "寝室", kana: "しんしつ", romaji: "shinshitsu", hanViet: "Thân thất", meaning: "Phòng ngủ", textMnemonic: "寝 (ngủ) + 室 (phòng) = phòng để ngủ 😴" },
  { id: "n3-d-9", courseId: "jlpt-n3", kanji: "玄関", kana: "げんかん", romaji: "genkan", hanViet: "Huyền quan", meaning: "Lối vào/Sảnh", textMnemonic: "玄 (huyền) + 関 (cửa) = cửa vào chính 🚪" },
  { id: "n3-d-10", courseId: "jlpt-n3", kanji: "廊下", kana: "ろうか", romaji: "rōka", hanViet: "Lang hạ", meaning: "Hành lang", textMnemonic: "廊 (hành lang) + 下 (dưới) = lối đi dưới mái 🚶" },

  // Nấu ăn
  { id: "n3-d-11", courseId: "jlpt-n3", kanji: "料理", kana: "りょうり", romaji: "ryōri", hanViet: "Liệu lý", meaning: "Nấu ăn/Món ăn", textMnemonic: "料 (nguyên liệu) + 理 (quản lý) = quản lý nguyên liệu 👨‍🍳" },
  { id: "n3-d-12", courseId: "jlpt-n3", kanji: "炊く", kana: "たく", romaji: "taku", hanViet: "Thúy", meaning: "Nấu cơm", textMnemonic: "炊 = nấu cơm, hơi nước bốc lên 🍚" },
  { id: "n3-d-13", courseId: "jlpt-n3", kanji: "焼く", kana: "やく", romaji: "yaku", hanViet: "Thiêu", meaning: "Nướng", textMnemonic: "焼 = nướng, lửa cháy sém 🔥" },
  { id: "n3-d-14", courseId: "jlpt-n3", kanji: "煮る", kana: "にる", romaji: "niru", hanViet: "Chử", meaning: "Hầm/Nấu", textMnemonic: "煮 = nấu lâu, canh sôi sùng sục 🍲" },
  { id: "n3-d-15", courseId: "jlpt-n3", kanji: "炒める", kana: "いためる", romaji: "itameru", hanViet: "Sào", meaning: "Xào", textMnemonic: "炒 = xào, chảo xèo xèo 🥘" },

  // Vệ sinh
  { id: "n3-d-16", courseId: "jlpt-n3", kanji: "掃除", kana: "そうじ", romaji: "sōji", hanViet: "Tảo trừ", meaning: "Dọn dẹp", textMnemonic: "掃 (quét) + 除 (loại bỏ) = quét sạch bụi 🧹" },
  { id: "n3-d-17", courseId: "jlpt-n3", kanji: "洗濯", kana: "せんたく", romaji: "sentaku", hanViet: "Tẩy trạc", meaning: "Giặt giũ", textMnemonic: "洗 (rửa) + 濯 (giặt) = giặt sạch quần áo 🧺" },
  { id: "n3-d-18", courseId: "jlpt-n3", kanji: "洗面所", kana: "せんめんじょ", romaji: "senmenjo", hanViet: "Tẩy diện sở", meaning: "Nhà tắm (mặt)", textMnemonic: "洗 (rửa) + 面 (mặt) = chỗ rửa mặt 🚿" },
  { id: "n3-d-19", courseId: "jlpt-n3", kanji: "浴室", kana: "よくしつ", romaji: "yokushitsu", hanViet: "Dục thất", meaning: "Phòng tắm", textMnemonic: "浴 (tắm) + 室 (phòng) = phòng tắm 🛁" },
  { id: "n3-d-20", courseId: "jlpt-n3", kanji: "布団を干す", kana: "ふとんをほす", romaji: "futon o hosu", hanViet: "Phu đản can", meaning: "Phơi nệm", textMnemonic: "布団 + 干す = phơi nệm dưới nắng ☀️" },

  // Mua sắm
  { id: "n3-d-21", courseId: "jlpt-n3", kanji: "買い物", kana: "かいもの", romaji: "kaimono", hanViet: "Mãi vật", meaning: "Mua sắm", textMnemonic: "買 (mua) + 物 (đồ) = mua đồ về 🛍️" },
  { id: "n3-d-22", courseId: "jlpt-n3", kanji: "値段", kana: "ねだん", romaji: "nedan", hanViet: "Giá đoan", meaning: "Giá cả", textMnemonic: "値 (giá trị) + 段 (bậc) = bậc giá trị 💰" },
  { id: "n3-d-23", courseId: "jlpt-n3", kanji: "安い", kana: "やすい", romaji: "yasui", hanViet: "An", meaning: "Rẻ", textMnemonic: "安 = bình an, giá bình an cho túi tiền 💵" },
  { id: "n3-d-24", courseId: "jlpt-n3", kanji: "高い", kana: "たかい", romaji: "takai", hanViet: "Cao", meaning: "Cao/Đắt", textMnemonic: "高 = cao, giá cao thì đắt 💎" },
  { id: "n3-d-25", courseId: "jlpt-n3", kanji: "割引", kana: "わりびき", romaji: "waribiki", hanViet: "Chuyết lợi", meaning: "Giảm giá", textMnemonic: "割 (chia) + 引 (kéo) = kéo giá xuống 🏷️" },

  // Thời gian
  { id: "n3-d-26", courseId: "jlpt-n3", kanji: "最近", kana: "さいきん", romaji: "saikin", hanViet: "Tối cận", meaning: "Gần đây", textMnemonic: "最 (nhất) + 近 (gần) = gần đây nhất 📅" },
  { id: "n3-d-27", courseId: "jlpt-n3", kanji: "将来", kana: "しょうらい", romaji: "shōrai", hanViet: "Tương lai", meaning: "Tương lai", textMnemonic: "将 (sẽ) + 来 (đến) = thời gian sẽ đến ⏭️" },
  { id: "n3-d-28", courseId: "jlpt-n3", kanji: "以前", kana: "いぜん", romaji: "izen", hanViet: "Dĩ tiền", meaning: "Trước đây", textMnemonic: "以 (từ) + 前 (trước) = từ trước ⏮️" },
  { id: "n3-d-29", courseId: "jlpt-n3", kanji: "今後", kana: "こんご", romaji: "kongo", hanViet: "Kim hậu", meaning: "Từ nay về sau", textMnemonic: "今 (bây giờ) + 後 (sau) = sau thời điểm này ⏩" },
  { id: "n3-d-30", courseId: "jlpt-n3", kanji: "急に", kana: "きゅうに", romaji: "kyū ni", hanViet: "Cấp", meaning: "Đột ngột", textMnemonic: "急 = gấp, đột ngột không báo trước 💥" },

  // Hành động thường ngày
  { id: "n3-d-31", courseId: "jlpt-n3", kanji: "起きる", kana: "おきる", romaji: "okiru", hanViet: "Khởi", meaning: "Thức dậy", textMnemonic: "起 = dậy, mặt trời mọc báo thức 🌅" },
  { id: "n3-d-32", courseId: "jlpt-n3", kanji: "寝る", kana: "ねる", romaji: "neru", hanViet: "Tẩm", meaning: "Ngủ", textMnemonic: "寝 = nằm, nằm xuống để ngủ 😴" },
  { id: "n3-d-33", courseId: "jlpt-n3", kanji: "働く", kana: "はたらく", romaji: "hataraku", hanViet: "Lao động", meaning: "Làm việc", textMnemonic: "働 = làm việc, mồ hôi đổ ra 💼" },
  { id: "n3-d-34", courseId: "jlpt-n3", kanji: "遊ぶ", kana: "あそぶ", romaji: "asobu", hanViet: "Du", meaning: "Chơi", textMnemonic: "遊 = chơi đùa, niềm vui trẻ thơ 🎮" },
  { id: "n3-d-35", courseId: "jlpt-n3", kanji: "休む", kana: "やすむ", romaji: "yasumu", hanViet: "Hưu", meaning: "Nghỉ ngơi", textMnemonic: "休 = nghỉ, người + cây = tựa cây nghỉ ngơi 🌳" },

  // Thực phẩm
  { id: "n3-d-36", courseId: "jlpt-n3", kanji: "野菜", kana: "やさい", romaji: "yasai", hanViet: "Dã thái", meaning: "Rau", textMnemonic: "野 (hoang dã) + 菜 (rau) = rau dại 🥬" },
  { id: "n3-d-37", courseId: "jlpt-n3", kanji: "果物", kana: "くだもの", romaji: "kudamono", hanViet: "Quả vật", meaning: "Trái cây", textMnemonic: "果 (quả) + 物 (đồ) = đồ dạng quả 🍎" },
  { id: "n3-d-38", courseId: "jlpt-n3", kanji: "肉", kana: "にく", romaji: "niku", hanViet: "Nhục", meaning: "Thịt", textMnemonic: "肉 = thịt, hình miếng thịt 🥩" },
  { id: "n3-d-39", courseId: "jlpt-n3", kanji: "魚", kana: "さかな", romaji: "sakana", hanViet: "Ngư", meaning: "Cá", textMnemonic: "魚 = cá, bơi trong nước 🐟" },
  { id: "n3-d-40", courseId: "jlpt-n3", kanji: "卵", kana: "たまご", romaji: "tamago", hanViet: "Noãn", meaning: "Trứng", textMnemonic: "卵 = trứng, hình tròn 🥚" },

  // Đồ uống
  { id: "n3-d-41", courseId: "jlpt-n3", kanji: "お茶", kana: "おちゃ", romaji: "ocha", hanViet: "Trà", meaning: "Trà xanh", textMnemonic: "茶 = trà, lá trà xanh 🍵" },
  { id: "n3-d-42", courseId: "jlpt-n3", kanji: "紅茶", kana: "こうちゃ", romaji: "kōcha", hanViet: "Hồng trà", meaning: "Trà đen", textMnemonic: "紅 (đỏ) + 茶 (trà) = trà có màu đỏ ☕" },
  { id: "n3-d-43", courseId: "jlpt-n3", kanji: "牛乳", kana: "ぎゅうにゅう", romaji: "gyūnyū", hanViet: "Ngưu nhũ", meaning: "Sữa bò", textMnemonic: "牛 (bò) + 乳 (sữa) = sữa từ con bò 🐄" },
  { id: "n3-d-44", courseId: "jlpt-n3", kanji: "水道", kana: "すいどう", romaji: "suidō", hanViet: "Thủy đạo", meaning: "Nước máy", textMnemonic: "水 (nước) + 道 (đường) = đường ống nước 🚰" },
  { id: "n3-d-45", courseId: "jlpt-n3", kanji: "水道水", kana: "すいどうすい", romaji: "suidōsui", hanViet: "Thủy đạo thủy", meaning: "Nước máy", textMnemonic: "水道 + 水 = nước từ vòi 🚰" },

  // Nhà cửa
  { id: "n3-d-46", courseId: "jlpt-n3", kanji: "窓", kana: "まど", romaji: "mado", hanViet: "Song", meaning: "Cửa sổ", textMnemonic: "窓 = cửa sổ, ánh sáng xuyên qua 🪟" },
  { id: "n3-d-47", courseId: "jlpt-n3", kanji: "壁", kana: "かべ", romaji: "kabe", hanViet: "Bích", meaning: "Tường", textMnemonic: "壁 = tường, ngăn cách các phòng 🧱" },
  { id: "n3-d-48", courseId: "jlpt-n3", kanji: "床", kana: "ゆか", romaji: "yuka", hanViet: "Sàng", meaning: "Sàn nhà", textMnemonic: "床 = giường/sàn, bề mặt đi lại 👣" },
  { id: "n3-d-49", courseId: "jlpt-n3", kanji: "屋根", kana: "やね", romaji: "yane", hanViet: "Ngọc", meaning: "Mái nhà", textMnemonic: "屋 (nhà) + 根 (gốc) = phần trên cùng của nhà 🏠" },
  { id: "n3-d-50", courseId: "jlpt-n3", kanji: "庭", kana: "にわ", romaji: "niwa", hanViet: "Đình", meaning: "Sân vườn", textMnemonic: "庭 = sân có cây xanh 🌳" },

  // Đồ gia dụng
  { id: "n3-d-51", courseId: "jlpt-n3", kanji: "電気", kana: "でんき", romaji: "denki", hanViet: "Điện khí", meaning: "Điện", textMnemonic: "電 (sấm sét) + 気 (khí) = sức mạnh sấm sét ⚡" },
  { id: "n3-d-52", courseId: "jlpt-n3", kanji: "冷蔵庫", kana: "れいぞうこ", romaji: "reizōko", hanViet: "Lãnh tàng khố", meaning: "Tủ lạnh", textMnemonic: "冷 (lạnh) + 蔵 (kho) + 庫 (kho) = kho làm lạnh 🧊" },
  { id: "n3-d-53", courseId: "jlpt-n3", kanji: "電子レンジ", kana: "でんしレンジ", romaji: "denshi renji", hanViet: "Điện tử", meaning: "Lò vi sóng", textMnemonic: "電 (điện) + 子 (tử) = vi điện tử 📡" },
  { id: "n3-d-54", courseId: "jlpt-n3", kanji: "掃除機", kana: "そうじき", romaji: "sōjiki", hanViet: "Tảo trừ cơ", meaning: "Máy hút bụi", textMnemonic: "掃除 (dọn) + 機 (máy) = máy dọn dẹp 🧹" },
  { id: "n3-d-55", courseId: "jlpt-n3", kanji: "洗濯機", kana: "せんたくき", romaji: "sentakuki", hanViet: "Tẩy trạc cơ", meaning: "Máy giặt", textMnemonic: "洗濯 (giặt) + 機 (máy) = máy giặt 👕" },

  // Thời tiết
  { id: "n3-d-56", courseId: "jlpt-n3", kanji: "天気", kana: "てんき", romaji: "tenki", hanViet: "Thiên khí", meaning: "Thời tiết", textMnemonic: "天 (trời) + 気 (khí) = khí trời 🌤️" },
  { id: "n3-d-57", courseId: "jlpt-n3", kanji: "雨", kana: "あめ", romaji: "ame", hanViet: "Vũ", meaning: "Mưa", textMnemonic: "雨 = mưa, giọt nước rơi xuống 🌧️" },
  { id: "n3-d-58", courseId: "jlpt-n3", kanji: "雪", kana: "ゆき", romaji: "yuki", hanViet: "Tuyết", meaning: "Tuyết", textMnemonic: "雪 = tuyết trắng rơi ❄️" },
  { id: "n3-d-59", courseId: "jlpt-n3", kanji: "曇り", kana: "くもり", romaji: "kumor i", hanViet: "Đàm", meaning: "Có mây/U ám", textMnemonic: "曇 = u ám, mây che phủ ☁️" },
  { id: "n3-d-60", courseId: "jlpt-n3", kanji: "晴れ", kana: "はれ", romaji: "hare", hanViet: "Tình", meaning: "Nắng", textMnemonic: "晴 = trong sáng, trời quang ☀️" },

  // Phương tiện
  { id: "n3-d-61", courseId: "jlpt-n3", kanji: "自転車", kana: "じてんしゃ", romaji: "jitensha", hanViet: "Tự hành xa", meaning: "Xe đạp", textMnemonic: "自転 (tự quay) + 車 (xe) = xe tự chạy 🚲" },
  { id: "n3-d-62", courseId: "jlpt-n3", kanji: "自動車", kana: "じどうしゃ", romaji: "jidōsha", hanViet: "Tự động xa", meaning: "Ô tô", textMnemonic: "自動 (tự động) + 車 (xe) = xe tự động 🚗" },
  { id: "n3-d-63", courseId: "jlpt-n3", kanji: "飛行機", kana: "ひこうき", romaji: "hikōki", hanViet: "Phi hành cơ", meaning: "Máy bay", textMnemonic: "飛行 (bay) + 機 (máy) = máy bay ✈️" },
  { id: "n3-d-64", courseId: "jlpt-n3", kanji: "電車", kana: "でんしゃ", romaji: "densha", hanViet: "Điện xa", meaning: "Tàu điện", textMnemonic: "電 (điện) + 車 (xe) = xe chạy bằng điện 🚃" },
  { id: "n3-d-65", courseId: "jlpt-n3", kanji: "新幹線", kana: "しんかんせん", romaji: "shinkansen", hanViet: "Tân can tuyến", meaning: "Tàu cao tốc", textMnemonic: "新 (mới) + 幹線 (tuyến chính) = tuyến chính mới 🚄" },

  // Giao tiếp
  { id: "n3-d-66", courseId: "jlpt-n3", kanji: "約束", kana: "やくそく", romaji: "yakusoku", hanViet: "Ước thúc", meaning: "Hẹn/Lời hứa", textMnemonic: "約 (hẹn) + 束 (buộc) = buộc lời hẹn 🤝" },
  { id: "n3-d-67", courseId: "jlpt-n3", kanji: "連絡", kana: "れんらく", romaji: "renraku", hanViet: "Liên lạc", meaning: "Liên lạc", textMnemonic: "連 (nối) + 絡 (mắc) = nối dây liên lạc 📞" },
  { id: "n3-d-68", courseId: "jlpt-n3", kanji: "電話", kana: "でんわ", romaji: "denwa", hanViet: "Điện thoại", meaning: "Điện thoại", textMnemonic: "電 (điện) + 話 (nói) = nói qua dây điện 📱" },
  { id: "n3-d-69", courseId: "jlpt-n3", kanji: "手紙", kana: "てがみ", romaji: "tegami", hanViet: "Thủ tín", meaning: "Lá thư", textMnemonic: "手 (tay) + 紙 (giấy) = giấy viết tay ✉️" },
  { id: "n3-d-70", courseId: "jlpt-n3", kanji: "メール", kana: "メール", romaji: "mēru", hanViet: "(Ngoại lai)", meaning: "Email", textMnemonic: "Mail = thư điện tử, tin nhắn nhanh 📧" },

  // Quần áo
  { id: "n3-d-71", courseId: "jlpt-n3", kanji: "服", kana: "ふく", romaji: "fuku", hanViet: "Phục", meaning: "Quần áo", textMnemonic: "服 = quần áo, mặc lên người 👕" },
  { id: "n3-d-72", courseId: "jlpt-n3", kanji: "靴", kana: "くつ", romaji: "kutsu", hanViet: "Uyết", meaning: "Giày", textMnemonic: "靴 = giày, mang lên chân 👟" },
  { id: "n3-d-73", courseId: "jlpt-n3", kanji: "帽子", kana: "ぼうし", romaji: "bōshi", hanViet: "Mão tử", meaning: "Mũ/Nón", textMnemonic: "帽 (mũ) + 子 (cái) = cái mũ 🎩" },
  { id: "n3-d-74", courseId: "jlpt-n3", kanji: "靴下", kana: "くつした", romaji: "kutsushita", hanViet: "Uyết hạ", meaning: "Tất/Vớ", textMnemonic: "靴 (giày) + 下 (dưới) = vật mặc dưới giày 🧦" },
  { id: "n3-d-75", courseId: "jlpt-n3", kanji: "ズボン", kana: "ずぼん", romaji: "zubon", hanViet: "(Ngoại lai)", meaning: "Quần dài", textMnemonic: "Jupon = quần dài kiểu Pháp 👖" },

  // Cơ thể & sức khỏe cơ bản
  { id: "n3-d-76", courseId: "jlpt-n3", kanji: "体", kana: "からだ", romaji: "karada", hanViet: "Thể", meaning: "Cơ thể", textMnemonic: "体 = thân thể, hình người 🧍" },
  { id: "n3-d-77", courseId: "jlpt-n3", kanji: "頭", kana: "あたま", romaji: "atama", hanViet: "Đầu", meaning: "Đầu", textMnemonic: "頭 = đầu trên cùng cơ thể 🧠" },
  { id: "n3-d-78", courseId: "jlpt-n3", kanji: "顔", kana: "かお", romaji: "kao", hanViet: "Nhan", meaning: "Mặt", textMnemonic: "顔 = mặt, biểu cảm gương mặt 😊" },
  { id: "n3-d-79", courseId: "jlpt-n3", kanji: "首", kana: "くび", romaji: "kubi", hanViet: "Thủ", meaning: "Cổ", textMnemonic: "首 = cổ, nối đầu với thân 👔" },
  { id: "n3-d-80", courseId: "jlpt-n3", kanji: "肩", kana: "かた", romaji: "kata", hanViet: "Kiên", meaning: "Vai", textMnemonic: "肩 = vai, chỗ gánh đồ 💪" },

  // Hành động đi lại
  { id: "n3-d-81", courseId: "jlpt-n3", kanji: "歩く", kana: "あるく", romaji: "aruku", hanViet: "Bộ", meaning: "Đi bộ", textMnemonic: "歩 = bước, di chuyển bằng chân 🚶" },
  { id: "n3-d-82", courseId: "jlpt-n3", kanji: "走る", kana: "はしる", romaji: "hashiru", hanViet: "Tẩu", meaning: "Chạy", textMnemonic: "走 = chạy, chân di chuyển nhanh 🏃" },
  { id: "n3-d-83", courseId: "jlpt-n3", kanji: "止まる", kana: "とまる", romaji: "tomaru", hanViet: "Chỉ", meaning: "Dừng lại", textMnemonic: "止 = dừng, chân không bước ✋" },
  { id: "n3-d-84", courseId: "jlpt-n3", kanji: "待つ", kana: "まつ", romaji: "matsu", hanViet: "Đãi", meaning: "Chờ đợi", textMnemonic: "待 = chờ, kiên nhẫn đợi ⏰" },
  { id: "n3-d-85", courseId: "jlpt-n3", kanji: "渡す", kana: "わたす", romaji: "watasu", hanViet: "Độ", meaning: "Đưa/Giao", textMnemonic: "渡 = vượt qua, giao từ tay này sang tay kia 🤲" },

  // Hoạt động khác
  { id: "n3-d-86", courseId: "jlpt-n3", kanji: "始める", kana: "はじめる", romaji: "hajimeru", hanViet: "Khởi", meaning: "Bắt đầu", textMnemonic: "始 = bắt đầu, mở màn cho việc gì đó 🎬" },
  { id: "n3-d-87", courseId: "jlpt-n3", kanji: "終わる", kana: "おわる", romaji: "owaru", hanViet: "Cú", meaning: "Kết thúc", textMnemonic: "終 = kết thúc, dây buộc lại 🏁" },
  { id: "n3-d-88", courseId: "jlpt-n3", kanji: "続ける", kana: "つづける", romaji: "tsuzukeru", hanViet: "Tục", meaning: "Tiếp tục", textMnemonic: "続 = tiếp tục, không ngắt quãng ▶️" },
  { id: "n3-d-89", courseId: "jlpt-n3", kanji: "止める", kana: "やめる", romaji: "yameru", hanViet: "Chỉ", meaning: "Dừng/Bỏ", textMnemonic: "止 = dừng, ngừng làm việc gì đó ⏹️" },
  { id: "n3-d-90", courseId: "jlpt-n3", kanji: "繰り返す", kana: "くりかえす", romaji: "kurikaesu", hanViet: "Phản lặp", meaning: "Lặp lại", textMnemonic: "繰 (lặp) + 返 (trả về) = trả lại nhiều lần 🔁" },

  // Sức khỏe
  { id: "n3-d-91", courseId: "jlpt-n3", kanji: "風邪", kana: "かぜ", romaji: "kaze", hanViet: "Phong", meaning: "Cảm cúm", textMnemonic: "風 (gió) + 邪 (xấu) = gió xấu gây bệnh 🤧" },
  { id: "n3-d-92", courseId: "jlpt-n3", kanji: "熱", kana: "ねつ", romaji: "netsu", hanViet: "Nhiệt", meaning: "Nhiệt độ/Sốt", textMnemonic: "熱 = nóng, thân nhiệt cao 🌡️" },
  { id: "n3-d-93", courseId: "jlpt-n3", kanji: "薬", kana: "くすり", romaji: "kusuri", hanViet: "Dược", meaning: "Thuốc", textMnemonic: "薬 = thuốc, chữa bệnh 💊" },
  { id: "n3-d-94", courseId: "jlpt-n3", kanji: "病院", kana: "びょういん", romaji: "byōin", hanViet: "Bệnh viện", meaning: "Bệnh viện", textMnemonic: "病 (bệnh) + 院 (viện) = nơi chữa bệnh 🏥" },
  { id: "n3-d-95", courseId: "jlpt-n3", kanji: "医者", kana: "いしゃ", romaji: "isha", hanViet: "Y giả", meaning: "Bác sĩ", textMnemonic: "医 (y học) + 者 (người) = người chữa bệnh 👨‍⚕️" },

  // Các từ bổ sung
  { id: "n3-d-96", courseId: "jlpt-n3", kanji: "新聞", kana: "しんぶん", romaji: "shinbun", hanViet: "Tân văn", meaning: "Báo", textMnemonic: "新 (mới) + 聞 (nghe) = tin mới 📰" },
  { id: "n3-d-97", courseId: "jlpt-n3", kanji: "雑誌", kana: "ざっし", romaji: "zasshi", hanViet: "Tạp chí", meaning: "Tạp chí", textMnemonic: "雑 (lộn xộn) + 誌 (sách) = sách nhiều chủ đề 📚" },
  { id: "n3-d-98", courseId: "jlpt-n3", kanji: "番組", kana: "ばんぐみ", romaji: "bangumi", hanViet: "Phạm tổ", meaning: "Chương trình (TV)", textMnemonic: "番 (số) + 組 (nhóm) = nhóm số chương trình 📺" },
  { id: "n3-d-99", courseId: "jlpt-n3", kanji: "映画", kana: "えいが", romaji: "eiga", hanViet: "Ảnh", meaning: "Phim", textMnemonic: "映 (chiếu) + 画 (tranh) = tranh chiếu lên màn ảnh 🎬" },
  { id: "n3-d-100", courseId: "jlpt-n3", kanji: "音楽", kana: "おんがく", romaji: "ongaku", hanViet: "Âm nhạc", meaning: "Âm nhạc", textMnemonic: "音 (âm thanh) + 楽 (vui) = âm thanh vui tai 🎵" },

  // Tiếp tục thêm 30 từ
  { id: "n3-d-101", courseId: "jlpt-n3", kanji: "写真", kana: "しゃしん", romaji: "shashin", hanViet: "Tả chân", meaning: "Ảnh/Photograph", textMnemonic: "写 (sao chép) + 真 (thật) = ảnh sao chép thật 📷" },
  { id: "n3-d-102", courseId: "jlpt-n3", kanji: "趣味", kana: "しゅみ", romaji: "shumi", hanViet: "Thú vị", meaning: "Sở thích", textMnemonic: "趣 (hứng thú) + 味 (vị) = hứng vị riêng 🎨" },
  { id: "n3-d-103", courseId: "jlpt-n3", kanji: "予定", kana: "よてい", romaji: "yotei", hanViet: "Dự định", meaning: "Dự định/Kế hoạch", textMnemonic: "予 (trước) + 定 (định) = định trước 📝" },
  { id: "n3-d-104", courseId: "jlpt-n3", kanji: "計画", kana: "けいかく", romaji: "keikaku", hanViet: "Kế hoạch", meaning: "Kế hoạch", textMnemonic: "計 (tính) + 画 (vạch) = vạch tính trước 📊" },
  { id: "n3-d-105", courseId: "jlpt-n3", kanji: "目標", kana: "もくひょう", romaji: "mokuhyō", hanViet: "Mục tiêu", meaning: "Mục tiêu", textMnemonic: "目 (mắt) + 標 (bia) = bia nhắm mắt 🎯" },

  { id: "n3-d-106", courseId: "jlpt-n3", kanji: "経験", kana: "けいけん", romaji: "keiken", hanViet: "Kinh nghiệm", meaning: "Kinh nghiệm", textMnemonic: "経 (qua) + 験 (thử) = đã qua thử thách 📚" },
  { id: "n3-d-107", courseId: "jlpt-n3", kanji: "思い出", kana: "おもいで", romaji: "omoide", hanViet: "Tư xuất", meaning: "Kỷ niệm", textMnemonic: "思 (nghĩ) + 出 (ra) = kỷ niệm ùa ra 💭" },
  { id: "n3-d-108", courseId: "jlpt-n3", kanji: "夢", kana: "ゆめ", romaji: "yume", hanViet: "Mộng", meaning: "Giấc mơ", textMnemonic: "夢 = mơ, giấc mơ ban đêm 💫" },
  { id: "n3-d-109", courseId: "jlpt-n3", kanji: "希望", kana: "きぼう", romaji: "kibō", hanViet: "Hy vọng", meaning: "Hy vọng", textMnemonic: "希 (hiếm) + 望 (trông mong) = trông mong hiếm có 🌟" },
  { id: "n3-d-110", courseId: "jlpt-n3", kanji: "未来", kana: "みらい", romaji: "mirai", hanViet: "Vị lai", meaning: "Tương lai", textMnemonic: "未 (chưa) + 来 (đến) = chưa đến, tương lai ⏭️" },

  { id: "n3-d-111", courseId: "jlpt-n3", kanji: "過去", kana: "かこ", romaji: "kako", hanViet: "Quá khứ", meaning: "Quá khứ", textMnemonic: "過 (qua) + 去 (đi) = thời gian đã qua ⏮️" },
  { id: "n3-d-112", courseId: "jlpt-n3", kanji: "現在", kana: "げんざい", romaji: "genzai", hanViet: "Hiện tại", meaning: "Hiện tại", textMnemonic: "現 (hiện) + 在 (ở) = đang ở đây bây giờ ⏺️" },
  { id: "n3-d-113", courseId: "jlpt-n3", kanji: "時代", kana: "じだい", romaji: "jidai", hanViet: "Thời đại", meaning: "Thời đại", textMnemonic: "時 (thời gian) + 代 (thế hệ) = thế hệ thời gian ⏳" },
  { id: "n3-d-114", courseId: "jlpt-n3", kanji: "歴史", kana: "れきし", romaji: "rekishi", hanViet: "Lịch sử", meaning: "Lịch sử", textMnemonic: "歴 (qua) + 史 (sử) = sử đã qua 📜" },
  { id: "n3-d-115", courseId: "jlpt-n3", kanji: "文化", kana: "ぶんか", romaji: "bunka", hanViet: "Văn hóa", meaning: "Văn hóa", textMnemonic: "文 (văn) + 化 (hóa) = văn hóa xã hội 🎭" },

  { id: "n3-d-116", courseId: "jlpt-n3", kanji: "社会", kana: "しゃかい", romaji: "shakai", hanViet: "Xã hội", meaning: "Xã hội", textMnemonic: "社 (xã) + 会 (gặp) = nơi người gặp nhau 🏙️" },
  { id: "n3-d-117", courseId: "jlpt-n3", kanji: "世界", kana: "せかい", romaji: "sekai", hanViet: "Thế giới", meaning: "Thế giới", textMnemonic: "世 (thế) + 界 (giới) = giới thế gian 🌍" },
  { id: "n3-d-118", courseId: "jlpt-n3", kanji: "国", kana: "くに", romaji: "kuni", hanViet: "Quốc", meaning: "Đất nước", textMnemonic: "国 = nước, đất nước có biên giới 🏴" },
  { id: "n3-d-119", courseId: "jlpt-n3", kanji: "都", kana: "みやこ", romaji: "miyako", hanViet: "Đô", meaning: "Thủ đô", textMnemonic: "都 = thành phố lớn, kinh đô 🏛️" },
  { id: "n3-d-120", courseId: "jlpt-n3", kanji: "地方", kana: "ちほう", romaji: "chihō", hanViet: "Địa phương", meaning: "Vùng/Địa phương", textMnemonic: "地 (đất) + 方 (phương) = phương đất, vùng miền 🗺️" },

  { id: "n3-d-121", courseId: "jlpt-n3", kanji: "都会", kana: "とかい", romaji: "tokai", hanViet: "Đô hội", meaning: "Thành thị", textMnemonic: "都 (thủ đô) + 会 (gặp) = nơi đông đúc 🏙️" },
  { id: "n3-d-122", courseId: "jlpt-n3", kanji: "田舎", kana: "いなか", romaji: "inaka", hanViet: "Điền hợp", meaning: "Nông thôn", textMnemonic: "田 (ruộng) + 舎 (nhà) = nhà giữa ruộng 🌾" },
  { id: "n3-d-123", courseId: "jlpt-n3", kanji: "近所", kana: "きんじょ", romaji: "kinjo", hanViet: "Cận sở", meaning: "Hàng xóm/Lân cận", textMnemonic: "近 (gần) + 所 (nơi) = nơi ở gần 🏘️" },
  { id: "n3-d-124", courseId: "jlpt-n3", kanji: "隣", kana: "となり", romaji: "tonari", hanViet: "Lân", meaning: "Bên cạnh", textMnemonic: "隣 = bên cạnh, nhà hàng xóm 🤝" },
  { id: "n3-d-125", courseId: "jlpt-n3", kanji: "住所", kana: "じゅうしょ", romaji: "jūsho", hanViet: "Trú sở", meaning: "Địa chỉ", textMnemonic: "住 (ở) + 所 (nơi) = nơi ở có địa chỉ 📍" },

  { id: "n3-d-126", courseId: "jlpt-n3", kanji: "道", kana: "みち", romaji: "michi", hanViet: "Đạo", meaning: "Đường", textMnemonic: "道 = đường, lối đi 🛣️" },
  { id: "n3-d-127", courseId: "jlpt-n3", kanji: "橋", kana: "はし", romaji: "hashi", hanViet: "Kiều", meaning: "Cầu", textMnemonic: "橋 = cầu, bắc qua sông 🌉" },
  { id: "n3-d-128", courseId: "jlpt-n3", kanji: "駅", kana: "えき", romaji: "eki", hanViet: "Dịch", meaning: "Nhà ga/Trạm", textMnemonic: "駅 = trạm dừng xe 🚉" },
  { id: "n3-d-129", courseId: "jlpt-n3", kanji: "空港", kana: "くうこう", romaji: "kūkō", hanViet: "Không cảng", meaning: "Sân bay", textMnemonic: "空 (trời) + 港 (cảng) = cảng trên trời 🛫" },
  { id: "n3-d-130", courseId: "jlpt-n3", kanji: "港", kana: "みなと", romaji: "minato", hanViet: "Cảng", meaning: "Cảng biển", textMnemonic: "港 = cảng, nơi tàu neo đậu ⚓" },
];
