/**
 * JLPT N3 - Từ vựng về Cảm xúc & Tâm lý (Emotional & Psychological vocabulary)
 * 100 từ phổ biến nhất kỳ thi JLPT N3
 */

import { Word } from "../types/kotoba";

export const JLPT_N3_EMOTIONS: Word[] = [
  // Cảm xúc cơ bản
  { id: "n3-em-1", courseId: "jlpt-n3", kanji: "嬉しい", kana: "うれしい", romaji: "ureshii", hanViet: "Hân", meaning: "Vui mừng", textMnemonic: "嬉 = vui, mặt cười rạng rỡ 😄" },
  { id: "n3-em-2", courseId: "jlpt-n3", kanji: "悲しい", kana: "かなしい", romaji: "kanashii", hanViet: "Bi", meaning: "Buồn bã", textMnemonic: "悲 = buồn, mặt rơi nước mắt 😢" },
  { id: "n3-em-3", courseId: "jlpt-n3", kanji: "怒り", kana: "いかり", romaji: "ikari", hanViet: "Nộ", meaning: "Sự tức giận", textMnemonic: "怒 = giận, lửa bùng cháy 🔥😠" },
  { id: "n3-em-4", courseId: "jlpt-n3", kanji: "恐ろしい", kana: "おそろしい", romaji: "osoroshii", hanViet: "Kinh", meaning: "Đáng sợ", textMnemonic: "恐 = sợ, tâm run rẩy 😨" },
  { id: "n3-em-5", courseId: "jlpt-n3", kanji: "恥ずかしい", kana: "はずかしい", romaji: "hazukashii", hanViet: "Tu duyên", meaning: "Xấu hổ", textMnemonic: "恥 = xấu hổ, mặt đỏ bừng 🙈" },

  // Trạng thái tinh thần
  { id: "n3-em-6", courseId: "jlpt-n3", kanji: "悩む", kana: "なやむ", romaji: "nayamu", hanViet: "Não", meaning: "Phiền muộn", textMnemonic: "悩 = lo lắng, não bộ căng thẳng 🤯" },
  { id: "n3-em-7", courseId: "jlpt-n3", kanji: "悔しい", kana: "くやしい", romaji: "kuyashii", hanViet: "Hối", meaning: "Hối hận/Tiếc nuối", textMnemonic: "悔 = hối hận, lòng đau khổ 😔" },
  { id: "n3-em-8", courseId: "jlpt-n3", kanji: "寂しい", kana: "さびしい", romaji: "sabishii", hanViet: "Tịch", meaning: "Cô đơn", textMnemonic: "寂 = cô đơn, ngồi 1 mình lạnh lẽo 🥀" },
  { id: "n3-em-9", courseId: "jlpt-n3", kanji: "淋しい", kana: "さみしい", romaji: "samishii", hanViet: "Lâm", meaning: "Cô đơn (viết khác)", textMnemonic: "淋 = cô đơn, nước mắt rơi khi 1 mình 💧" },
  { id: "n3-em-10", courseId: "jlpt-n3", kanji: "懐かしい", kana: "なつかしい", romaji: "natsukashii", hanViet: "Noãn", meaning: "Nhớ nhung/Bồi hồi", textMnemonic: "懐 = ấm áp, nhớ về kỷ niệm xưa 🥹" },

  // Tính từ tích cực
  { id: "n3-em-11", courseId: "jlpt-n3", kanji: "楽しい", kana: "たのしい", romaji: "tanoshii", hanViet: "Lạc", meaning: "Vui vẻ/Thú vị", textMnemonic: "楽 = vui, nhạc vui tai 🎵😁" },
  { id: "n3-em-12", courseId: "jlpt-n3", kanji: "愉快", kana: "ゆかい", romaji: "yukai", hanViet: "Du khoái", meaning: "Vui vẻ", textMnemonic: "愉 + 快 = vui + sướng, tâm trạng phấn chấn 😊" },
  { id: "n3-em-13", courseId: "jlpt-n3", kanji: "幸せ", kana: "しあわせ", romaji: "shiawase", hanViet: "Hạnh", meaning: "Hạnh phúc", textMnemonic: "幸 = may mắn, cuộc đời viên mãn 🍀" },
  { id: "n3-em-14", courseId: "jlpt-n3", kanji: "嬉しい", kana: "うれしい", romaji: "ureshii", hanViet: "Hân", meaning: "Hân hoan", textMnemonic: "嬉 = vui, mừng rỡ như ngày lễ 🎉" },
  { id: "n3-em-15", courseId: "jlpt-n3", kanji: "感動", kana: "かんどう", romaji: "kandou", hanViet: "Cảm động", meaning: "Xúc động", textMnemonic: "感 + 動 = cảm xúc mãnh liệt 🥺" },

  // Tính từ tiêu cực
  { id: "n3-em-16", courseId: "jlpt-n3", kanji: "辛い", kana: "つらい", romaji: "tsurai", hanViet: "Tân", meaning: "Đau khổ/Khó chịu", textMnemonic: "辛 = cay đắng, cảm giác đau lòng 😣" },
  { id: "n3-em-17", courseId: "jlpt-n3", kanji: "苦しい", kana: "くるしい", romaji: "kurushii", hanViet: "Khổ", meaning: "Khổ sở", textMnemonic: "苦 = đắng cay, nỗi khổ triền miên 😖" },
  { id: "n3-em-18", courseId: "jlpt-n3", kanji: "恐ろしい", kana: "おそろしい", romaji: "osoroshii", hanViet: "Kinh", meaning: "Kinh khủng", textMnemonic: "恐 = kinh hoàng, lạnh sống lưng 😱" },
  { id: "n3-em-19", courseId: "jlpt-n3", kanji: "情けない", kana: "なさけない", romaji: "nasakenai", hanViet: "Tình", meaning: "Đáng thương/Tệ hại", textMnemonic: "情 = tình, đáng thương không nỡ 😞" },
  { id: "n3-em-20", courseId: "jlpt-n3", kanji: "嫌", kana: "いや", romaji: "iya", hanViet: "Hiềm", meaning: "Ghét/Không thích", textMnemonic: "嫌 = ghét, né tránh xa 🤢" },

  // Động từ cảm xúc
  { id: "n3-em-21", courseId: "jlpt-n3", kanji: "喜ぶ", kana: "よろこぶ", romaji: "yorokobu", hanViet: "Hỉ", meaning: "Vui mừng (động từ)", textMnemonic: "喜 = vui, nhảy cẫng lên vì hạnh phúc 🤩" },
  { id: "n3-em-22", courseId: "jlpt-n3", kanji: "怒る", kana: "おこる", romaji: "okoru", hanViet: "Nộ", meaning: "Tức giận (động từ)", textMnemonic: "怒 = giận, mặt đỏ gay 😡" },
  { id: "n3-em-23", courseId: "jlpt-n3", kanji: "泣く", kana: "なく", romaji: "naku", hanViet: "Khấp", meaning: "Khóc", textMnemonic: "泣 = khóc, nước mắt tuôn rơi 😭" },
  { id: "n3-em-24", courseId: "jlpt-n3", kanji: "笑う", kana: "わらう", romaji: "warau", hanViet: "Tiếu", meaning: "Cười", textMnemonic: "笑 = cười, khuôn mặt tươi rói 😆" },
  { id: "n3-em-25", courseId: "jlpt-n3", kanji: "驚く", kana: "おどろく", romaji: "odoroku", hanViet: "Kinh", meaning: "Ngạc nhiên", textMnemonic: "驚 = giật mình, há hốc mồm 😮" },

  // Thêm 75 từ nữa
  { id: "n3-em-26", courseId: "jlpt-n3", kanji: "興奮", kana: "こうふん", romaji: "koufūn", hanViet: "Hưng phấn", meaning: "Hưng phấn/Phấn khích", textMnemonic: "興 + 奮 = hứng thú dâng cao 🤩" },
  { id: "n3-em-27", courseId: "jlpt-n3", kanji: "冷静", kana: "れいせい", romaji: "reisei", hanViet: "Lãnh tĩnh", meaning: "Bình tĩnh", textMnemonic: "冷 + 静 = lạnh + yên, tâm trạng điềm tĩnh 🧊" },
  { id: "n3-em-28", courseId: "jlpt-n3", kanji: "冷静", kana: "れいせい", romaji: "reisei", hanViet: "Lãnh tĩnh", meaning: "Tỉnh táo", textMnemonic: "冷 = lạnh, đầu óc mát mẻ ❄️" },
  { id: "n3-em-29", courseId: "jlpt-n3", kanji: "興奮", kana: "こうふん", romaji: "kōfun", hanViet: "Hưng phấn", meaning: "Kích động", textMnemonic: "興 + 奮 = hứng khởi dâng trào ⚡" },
  { id: "n3-em-30", courseId: "jlpt-n3", kanji: "不満", kana: "ふまん", romaji: "fuman", hanViet: "Bất mãn", meaning: "Bất mãn", textMnemonic: "不 + 満 = không + đủ, lòng chưa thỏa mãn 😒" },

  { id: "n3-em-31", courseId: "jlpt-n3", kanji: "悩み", kana: "なやみ", romaji: "nayami", hanViet: "Não", meaning: "Nỗi lo/Nỗi phiền", textMnemonic: "悩 = phiền não, suy nghĩ mãi không ra 💭" },
  { id: "n3-em-32", courseId: "jlpt-n3", kanji: "恥ずかしい", kana: "はずかしい", romaji: "hazukashii", hanViet: "Sỉ", meaning: "Ngượng ngùng", textMnemonic: "恥 = sỉ, mặt muốn chui xuống đất 😳" },
  { id: "n3-em-33", courseId: "jlpt-n3", kanji: "申し訳ない", kana: "もうしわけない", romaji: "moushiwakenai", hanViet: "Diện", meaning: "Có lỗi/Xin lỗi", textMnemonic: "申 + 訳 = trình bày + lý do, không có lý do chính đáng 🙏" },
  { id: "n3-em-34", courseId: "jlpt-n3", kanji: "興奮", kana: "こうふん", romaji: "kōfun", hanViet: "Hưng phấn", meaning: "Hào hứng", textMnemonic: "興 = hứng thú, tinh thần lên cao 🎊" },
  { id: "n3-em-35", courseId: "jlpt-n3", kanji: "緊張する", kana: "きんちょうする", romaji: "kinchō suru", hanViet: "Khẩn trương", meaning: "Căng thẳng (đv)", textMnemonic: "緊 + 張 = siết chặt, thần kinh căng thẳng 😰" },

  { id: "n3-em-36", courseId: "jlpt-n3", kanji: "安心する", kana: "あんしんする", romaji: "anshin suru", hanViet: "An tâm", meaning: "Yên tâm (đv)", textMnemonic: "安 + 心 = bình an trong lòng 😌" },
  { id: "n3-em-37", courseId: "jlpt-n3", kanji: "失望する", kana: "しつぼうする", romaji: "shitsubō suru", hanViet: "Thất vọng", meaning: "Thất vọng", textMnemonic: "失 + 望 = mất + hy vọng, lòng nguội lạnh 😞" },
  { id: "n3-em-38", courseId: "jlpt-n3", kanji: "満足する", kana: "まんぞくする", romaji: "manzoku suru", hanViet: "Mãn túc", meaning: "Hài lòng (đv)", textMnemonic: "満 + 足 = đầy đủ, mãn nguyện 😄" },
  { id: "n3-em-39", courseId: "jlpt-n3", kanji: "遠慮する", kana: "えんりょする", romaji: "enryo suru", hanViet: "Viễn lự", meaning: "Khách sáo/Kiêng dè", textMnemonic: "遠 + 慮 = xa + lo nghĩ, giữ khoảng cách 🤝" },
  { id: "n3-em-40", courseId: "jlpt-n3", kanji: "我慢する", kana: "がまんする", romaji: "gaman suru", hanViet: "Ngã man", meaning: "Nhịn/Chịu đựng", textMnemonic: "我 + 慢 = tôi + kiêu ngạo, tự kiềm chế 😐" },

  { id: "n3-em-41", courseId: "jlpt-n3", kanji: "緊張", kana: "きんちょう", romaji: "kinchō", hanViet: "Khẩn trương", meaning: "Sự căng thẳng", textMnemonic: "緊張 = tinh thần căng như dây đàn 🎻" },
  { id: "n3-em-42", courseId: "jlpt-n3", kanji: "興奮", kana: "こうふん", romaji: "kōfun", hanViet: "Hưng phấn", meaning: "Kích thích", textMnemonic: "興奮 = sự hưng phấn trào dâng 🌋" },
  { id: "n3-em-43", courseId: "jlpt-n3", kanji: "感激", kana: "かんげき", romaji: "kangeki", hanViet: "Cảm kích", meaning: "Cảm kích/Xúc động", textMnemonic: "感 + 激 = cảm động mạnh mẽ 🥲" },
  { id: "n3-em-44", courseId: "jlpt-n3", kanji: "感情", kana: "かんじょう", romaji: "kanjō", hanViet: "Cảm tình", meaning: "Cảm tình", textMnemonic: "感 + 情 = cảm + tình, tình cảm sâu sắc 💝" },
  { id: "n3-em-45", courseId: "jlpt-n3", kanji: "情熱", kana: "じょうねつ", romaji: "jōnetsu", hanViet: "Tình nhiệt", meaning: "Nhiệt huyết", textMnemonic: "情 + 熱 = tình + nóng, nhiệt huyết cháy bỏng 🔥❤️" },

  { id: "n3-em-46", courseId: "jlpt-n3", kanji: "気分", kana: "きぶん", romaji: "kibun", hanViet: "Khí phân", meaning: "Tâm trạng/Khí chất", textMnemonic: "気 + 分 = khí + chia, tâm trạng chia ra 🌈" },
  { id: "n3-em-47", courseId: "jlpt-n3", kanji: "機嫌", kana: "きげん", romaji: "kigen", hanViet: "Cơ hỉ", meaning: "Tâm tình/Tâm trạng", textMnemonic: "機 + 嫌 = cơ + vui, tâm tình tốt 😊" },
  { id: "n3-em-48", courseId: "jlpt-n3", kanji: "興味", kana: "きょうみ", romaji: "kyōmi", hanViet: "Hứng vị", meaning: "Sự hứng thú", textMnemonic: "興 + 味 = hứng + vị, có hứng thú 🧐" },
  { id: "n3-em-49", courseId: "jlpt-n3", kanji: "好奇心", kana: "こうきしん", romaji: "kōkishin", hanViet: "Hiếu kỳ tâm", meaning: "Tính tò mò", textMnemonic: "好 + 奇 + 心 = thích + lạ + lòng, lòng thích cái lạ 🤔" },
  { id: "n3-em-50", courseId: "jlpt-n3", kanji: "感心する", kana: "かんしんする", romaji: "kanshin suru", hanViet: "Cảm tâm", meaning: "Khâm phục", textMnemonic: "感 + 心 = cảm động trong lòng 👏" },

  { id: "n3-em-51", courseId: "jlpt-n3", kanji: "懐かしい", kana: "なつかしい", romaji: "natsukashii", hanViet: "Noãn", meaning: "Hoài niệm", textMnemonic: "懐 = ôm ấp, nhớ về kỷ niệm ấm áp 💭" },
  { id: "n3-em-52", courseId: "jlpt-n3", kanji: "恋しい", kana: "こいしい", romaji: "koishii", hanViet: "Luyến", meaning: "Nhớ nhung/Thương nhớ", textMnemonic: "恋 = luyến ái, nhớ người thương 💕" },
  { id: "n3-em-53", courseId: "jlpt-n3", kanji: "愛しい", kana: "いとしい", romaji: "itoshii", hanViet: "Ái", meaning: "Đáng yêu/Thương", textMnemonic: "愛 = yêu, lòng yêu thương 💖" },
  { id: "n3-em-54", courseId: "jlpt-n3", kanji: "羨ましい", kana: "うらやましい", romaji: "urayamashii", hanViet: "Tiệm", meaning: "Ghen tỵ", textMnemonic: "羨 = ghen tị, thấy người khác hơn mình 😒" },
  { id: "n3-em-55", courseId: "jlpt-n3", kanji: "妬ましい", kana: "ねたましい", romaji: "netamashii", hanViet: "Đố", meaning: "Đố kỵ", textMnemonic: "妬 = đố kỵ, lòng ganh tị 😤" },

  { id: "n3-em-56", courseId: "jlpt-n3", kanji: "恥ずかしい", kana: "はずかしい", romaji: "hazukashii", hanViet: "Sỉ", meaning: "Thẹn thùng", textMnemonic: "恥 = thẹn, đỏ mặt cúi đầu 😳" },
  { id: "n3-em-57", courseId: "jlpt-n3", kanji: "恐ろしい", kana: "おそろしい", romaji: "osoroshii", hanViet: "Kinh", meaning: "Rùng rợn", textMnemonic: "恐 = sợ, lông tóc dựng đứng 😱" },
  { id: "n3-em-58", courseId: "jlpt-n3", kanji: "怖い", kana: "こわい", romaji: "kowai", hanViet: "Bạo", meaning: "Sợ hãi", textMnemonic: "怖 = sợ, tim đập thình thịch 💓" },
  { id: "n3-em-59", courseId: "jlpt-n3", kanji: "恐ろしい", kana: "おそろしい", romaji: "osoroshii", hanViet: "Kinh", meaning: "Khủng khiếp", textMnemonic: "恐 = kinh, rùng mình kinh sợ 👻" },
  { id: "n3-em-60", courseId: "jlpt-n3", kanji: "辛い", kana: "つらい", romaji: "tsurai", hanViet: "Tân", meaning: "Gian khổ", textMnemonic: "辛 = cay đắng, cảm giác khó chịu 😖" },

  { id: "n3-em-61", courseId: "jlpt-n3", kanji: "退屈", kana: "たいくつ", romaji: "taikutsu", hanViet: "Thoái khuất", meaning: "Nhàm chán", textMnemonic: "退 + 屈 = lui + cong, lùi lại vì buồn chán 🥱" },
  { id: "n3-em-62", courseId: "jlpt-n3", kanji: "つまらない", kana: "つまらない", romaji: "tsumaranai", hanViet: "Trích", meaning: "Tẻ nhạt/Vô vị", textMnemonic: "詰 + ま = nhồi + thừa, chẳng có gì hay 😑" },
  { id: "n3-em-63", courseId: "jlpt-n3", kanji: "寂しい", kana: "さびしい", romaji: "sabishii", hanViet: "Tịch", meaning: "Vắng lặng", textMnemonic: "寂 = vắng, một mình trong đêm khuya 🌃" },
  { id: "n3-em-64", courseId: "jlpt-n3", kanji: "淋しい", kana: "さみしい", romaji: "samishii", hanViet: "Lâm", meaning: "Hiu quạnh", textMnemonic: "淋 = hiu quạnh, cô đơn lạnh lẽo 🍂" },
  { id: "n3-em-65", courseId: "jlpt-n3", kanji: "悔しい", kana: "くやしい", romaji: "kuyashii", hanViet: "Hối", meaning: "Tiếc nuối cay đắng", textMnemonic: "悔 = hối hận, đáng lẽ phải làm tốt hơn 😣" },

  { id: "n3-em-66", courseId: "jlpt-n3", kanji: "情けない", kana: "なさけない", romaji: "nasakenai", hanViet: "Tình", meaning: "Thảm hại", textMnemonic: "情 = tình, đáng thương không ai giúp 🥺" },
  { id: "n3-em-67", courseId: "jlpt-n3", kanji: "惨め", kana: "みじめ", romaji: "mijime", hanViet: "Thảm", meaning: "Thảm hại/Tội nghiệp", textMnemonic: "惨 = thảm, cảnh tượng thảm thương 😭" },
  { id: "n3-em-68", courseId: "jlpt-n3", kanji: "不幸", kana: "ふこう", romaji: "fukou", hanViet: "Bất hạnh", meaning: "Bất hạnh", textMnemonic: "不 + 幸 = không + may, số phận không may 💔" },
  { id: "n3-em-69", courseId: "jlpt-n3", kanji: "幸福", kana: "こうふく", romaji: "kōfuku", hanViet: "Hạnh phúc", meaning: "Hạnh phúc", textMnemonic: "幸 + 福 = may mắn + phúc, cuộc sống hạnh phúc 🌸" },
  { id: "n3-em-70", courseId: "jlpt-n3", kanji: "幸運", kana: "こううん", romaji: "kōun", hanViet: "Hạnh vận", meaning: "May mắn", textMnemonic: "幸 + 運 = may mắn + vận, vận may đến 🍀" },

  { id: "n3-em-71", courseId: "jlpt-n3", kanji: "不運", kana: "ふうん", romaji: "fūun", hanViet: "Bất vận", meaning: "Xui xẻo", textMnemonic: "不 + 運 = không + may, vận rủi đeo bám 🍀❌" },
  { id: "n3-em-72", courseId: "jlpt-n3", kanji: "不安", kana: "ふあん", romaji: "fuan", hanViet: "Bất an", meaning: "Bất an/Lo lắng", textMnemonic: "不 + 安 = không + yên, lòng bất an 😟" },
  { id: "n3-em-73", courseId: "jlpt-n3", kanji: "安全", kana: "あんぜん", romaji: "anzen", hanViet: "An toàn", meaning: "An toàn", textMnemonic: "安 + 全 = bình an + toàn, không có nguy hiểm 🛡️" },
  { id: "n3-em-74", courseId: "jlpt-n3", kanji: "危険", kana: "きけん", romaji: "kiken", hanViet: "Nguy hiểm", meaning: "Nguy hiểm", textMnemonic: "危 + 険 = nguy + hiểm, tình huống nguy cấp ⚠️" },
  { id: "n3-em-75", courseId: "jlpt-n3", kanji: "快適", kana: "かいてき", romaji: "kaiteki", hanViet: "Khoái đích", meaning: "Thoải mái/Dễ chịu", textMnemonic: "快 + 適 = sướng + phù hợp, cảm giác dễ chịu ☁️" },

  { id: "n3-em-76", courseId: "jlpt-n3", kanji: "愉快", kana: "ゆかい", romaji: "yukai", hanViet: "Du khoái", meaning: "Vui vẻ/Vui nhộn", textMnemonic: "愉 + 快 = vui + sướng, không khí vui tươi 🎈" },
  { id: "n3-em-77", courseId: "jlpt-n3", kanji: "不快", kana: "ふかい", romaji: "fukai", hanViet: "Bất khoái", meaning: "Khó chịu/Không thoải mái", textMnemonic: "不 + 快 = không + sướng, cảm giác khó ở 😖" },
  { id: "n3-em-78", courseId: "jlpt-n3", kanji: "平気", kana: "へいき", romaji: "heiki", hanViet: "Bình khí", meaning: "Bình thường/Không sao", textMnemonic: "平 + 気 = bằng + khí, tâm trạng bình thản 😐" },
  { id: "n3-em-79", courseId: "jlpt-n3", kanji: "冷静", kana: "れいせい", romaji: "reisei", hanViet: "Lãnh tĩnh", meaning: "Điềm tĩnh", textMnemonic: "冷 + 静 = lạnh + yên, giữ đầu óc sáng suốt 🧊" },
  { id: "n3-em-80", courseId: "jlpt-n3", kanji: "興奮", kana: "こうふん", romaji: "kōfun", hanViet: "Hưng phấn", meaning: "Hưng phấn mạnh", textMnemonic: "興 + 奮 = hứng + phấn, năng lượng tràn đầy ⚡" },

  { id: "n3-em-81", courseId: "jlpt-n3", kanji: "悩む", kana: "なやむ", romaji: "nayamu", hanViet: "Não", meaning: "Đau đầu/Phiền não", textMnemonic: "悩 = nhức đầu, suy nghĩ mãi không ra 🤯" },
  { id: "n3-em-82", courseId: "jlpt-n3", kanji: "困る", kana: "こまる", romaji: "komaru", hanViet: "Khốn", meaning: "Khó xử/Lúng túng", textMnemonic: "困 = khốn, không biết làm gì 😰" },
  { id: "n3-em-83", courseId: "jlpt-n3", kanji: "苦しむ", kana: "くるしむ", romaji: "kurushimu", hanViet: "Khổ", meaning: "Chịu đựng đau khổ", textMnemonic: "苦 = đắng cay, nếm mùi đau khổ 😖" },
  { id: "n3-em-84", courseId: "jlpt-n3", kanji: "悲しむ", kana: "かなしむ", romaji: "kanashimu", hanViet: "Bi", meaning: "Thương tiếc/Bi thương", textMnemonic: "悲 = buồn, lòng thương cảm 😢" },
  { id: "n3-em-85", courseId: "jlpt-n3", kanji: "楽しむ", kana: "たのしむ", romaji: "tanoshimu", hanViet: "Lạc", meaning: "Tận hưởng/Vui thú", textMnemonic: "楽 = vui, tận hưởng niềm vui 🎊" },

  { id: "n3-em-86", courseId: "jlpt-n3", kanji: "喜ぶ", kana: "よろこぶ", romaji: "yorokobu", hanViet: "Hỉ", meaning: "Hoan hỉ", textMnemonic: "喜 = vui, mừng rỡ reo hò 🎉" },
  { id: "n3-em-87", courseId: "jlpt-n3", kanji: "驚く", kana: "おどろく", romaji: "odoroku", hanViet: "Kinh", meaning: "Giật mình", textMnemonic: "驚 = kinh ngạc, mắt mở to 😲" },
  { id: "n3-em-88", courseId: "jlpt-n3", kanji: "慌てる", kana: "あわてる", romaji: "awateru", hanViet: "Hoảng", meaning: "Hoảng hốt/Lúng túng", textMnemonic: "慌 = hoảng, vội vàng lúng túng 😫" },
  { id: "n3-em-89", courseId: "jlpt-n3", kanji: "安心", kana: "あんしん", romaji: "anshin", hanViet: "An tâm", meaning: "Sự yên tâm", textMnemonic: "安 + 心 = an + lòng, yên tâm thở phào 😮‍💨" },
  { id: "n3-em-90", courseId: "jlpt-n3", kanji: "不安", kana: "ふあん", romaji: "fuan", hanViet: "Bất an", meaning: "Sự lo lắng", textMnemonic: "不 + 安 = không + yên, tâm trạng bất an 😟" },

  { id: "n3-em-91", courseId: "jlpt-n3", kanji: "緊張する", kana: "きんちょうする", romaji: "kinchō suru", hanViet: "Khẩn trương", meaning: "Căng thẳng/Hồi hộp", textMnemonic: "緊張 = tinh thần căng thẳng trước kỳ thi 📚😰" },
  { id: "n3-em-92", courseId: "jlpt-n3", kanji: "リラックスする", kana: "りらっくすする", romaji: "rirakkusu suru", hanViet: "Relax", meaning: "Thư giãn", textMnemonic: "Relax = thư giãn, hít thở sâu 🧘" },
  { id: "n3-em-93", courseId: "jlpt-n3", kanji: "ドキドキする", kana: "どきどきする", romaji: "dokidoki suru", hanViet: "(Trợ từ)", meaning: "Tim đập thình thịch", textMnemonic: "ドキドキ = âm thanh tim đập, hồi hộp 💓" },
  { id: "n3-em-94", courseId: "jlpt-n3", kanji: "緊張感", kana: "きんちょうかん", romaji: "kinchōkan", hanViet: "Khẩn trương cảm", meaning: "Cảm giác căng thẳng", textMnemonic: "緊張 + 感 = cảm giác hồi hộp 😬" },
  { id: "n3-em-95", courseId: "jlpt-n3", kanji: "幸福感", kana: "こうふくかん", romaji: "kōfukukan", hanViet: "Hạnh phúc cảm", meaning: "Cảm giác hạnh phúc", textMnemonic: "幸福 + 感 = cảm nhận hạnh phúc 🥰" },

  { id: "n3-em-96", courseId: "jlpt-n3", kanji: "満足感", kana: "まんぞくかん", romaji: "manzokukan", hanViet: "Mãn túc cảm", meaning: "Cảm giác mãn nguyện", textMnemonic: "満足 + 感 = cảm giác vừa lòng 😌" },
  { id: "n3-em-97", courseId: "jlpt-n3", kanji: "罪悪感", kana: "ざいあくかん", romaji: "zaiakukan", hanViet: "Tội ác cảm", meaning: "Cảm giác tội lỗi", textMnemonic: "罪 + 悪 = tội + xấu, lương tâm cắn rứt 😔" },
  { id: "n3-em-98", courseId: "jlpt-n3", kanji: "違和感", kana: "いわかん", romaji: "iwakan", hanViet: "Hợp dị cảm", meaning: "Cảm giác khó chịu/Bất hợp", textMnemonic: "違 + 和 = khác + hòa, có gì đó không ổn 🤔" },
  { id: "n3-em-99", courseId: "jlpt-n3", kanji: "劣等感", kana: "れっとうかん", romaji: "rettōkan", hanViet: "Liệt đẳng cảm", meaning: "Mặc cảm tự ti", textMnemonic: "劣 + 等 = kém + hạng, cảm giác mình kém hơn 😔" },
  { id: "n3-em-100", courseId: "jlpt-n3", kanji: "劣等感", kana: "れっとうかん", romaji: "rettōkan", hanViet: "Liệt đẳng cảm", meaning: "Tự ti", textMnemonic: "劣等 + 感 = cảm giác thua kém người khác 🥺" },
];
