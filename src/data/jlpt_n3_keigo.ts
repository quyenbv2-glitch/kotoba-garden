/**
 * JLPT N3 - Kính ngữ (Keigo)
 * Từ vựng và mẫu câu kính ngữ trong tiếng Nhật
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_KEIGO: Word[] = [
  // Tiền tố kính ngữ cơ bản
  { id: "n3-keigo-1", courseId: "jlpt-n3", kanji: "お", kana: "お", romaji: "o", hanViet: "Ô", meaning: "Tiền tố kính ngữ (お)", textMnemonic: "お〜 = tiền tố kính ngữ cho danh từ Nhật 📿" },
  { id: "n3-keigo-2", courseId: "jlpt-n3", kanji: "ご", kana: "ご", romaji: "go", hanViet: "Ngô", meaning: "Tiền tố kính ngữ (ご)", textMnemonic: "ご〜 = tiền tố kính ngữ cho danh từ Hán 📿" },

  // Kính ngữ cho người nghe
  { id: "n3-keigo-3", courseId: "jlpt-n3", kanji: "お客様", kana: "おきゃくさま", romaji: "okyakusama", hanViet: "Ngô khách tôn", meaning: "Quý khách", textMnemonic: "お客様 = quý khách (gọi khách hàng) 👔" },
  { id: "n3-keigo-4", courseId: "jlpt-n3", kanji: "お客様", kana: "おきゃくさま", romaji: "okyakusama", hanViet: "Ngô khách tôn", meaning: "Khách hàng quý", textMnemonic: "お客様 = khách hàng quý (rất lịch sự) 🙏" },
  { id: "n3-keigo-5", courseId: "jlpt-n3", kanji: "一覧", kana: "いちらん", romaji: "ichiran", hanViet: "Nhất lãm", meaning: "Danh sách (kính ngữ)", textMnemonic: "一覧 = danh sách (kính ngữ hơn リスト) 📋" },
  { id: "n3-keigo-6", courseId: "jlpt-n3", kanji: "案内", kana: "あんない", romaji: "annai", hanViet: "Dẫn hướng", meaning: "Hướng dẫn", textMnemonic: "案内 = hướng dẫn / chỉ đường 🗺️" },
  { id: "n3-keigo-7", courseId: "jlpt-n3", kanji: "説明", kana: "せつめい", romaji: "setsumei", hanViet: "Thuyết minh", meaning: "Giải thích", textMnemonic: "説明 = giải thích (trình bày thông tin) 📝" },
  { id: "n3-keigo-8", courseId: "jlpt-n3", kanji: "請求", kana: "せいきゅう", romaji: "seikyuu", hanViet: "Thỉnh cầu", meaning: "Yêu cầu thanh toán", textMnemonic: "請求 = yêu cầu thanh toán (trong hóa đơn) 💰" },
  { id: "n3-keigo-9", courseId: "jlpt-n3", kanji: "了承", kana: "りょうしょう", romaji: "ryoushou", hanViet: "Thừa tri", meaning: "Xác nhận đã biết", textMnemonic: "了承 = đã hiểu / đã nắm được (lịch sự) ✅" },
  { id: "n3-keigo-10", courseId: "jlpt-n3", kanji: "了承願う", kana: "りょうしょうねが", romaji: "ryoushou negau", hanViet: "Thừa tri nguyện", meaning: "Xin hãy xác nhận", textMnemonic: "了承願う = xin vui lòng xác nhận 🙏" },

  // Kính ngữ trong thư tín
  { id: "n3-keigo-11", courseId: "jlpt-n3", kanji: "呈上", kana: "ていじょう", romaji: "teijou", hanViet: "Trình thượng", meaning: "Gửi tới (trong thư tín)", textMnemonic: "呈上 = gửi tới (kính ngữ trong thư tín) 📧" },
  { id: "n3-keigo-12", courseId: "jlpt-n3", kanji: "拝啓", kana: "はいけい", romaji: "haikei", hanViet: "Bái khải", meaning: "Kính thưa (cách bắt đầu thư)", textMnemonic: "拝啓 = kính thưa (mở đầu thư lịch sự) 💌" },
  { id: "n3-keigo-13", courseId: "jlpt-n3", kanji: "敬具", kana: "けいぐ", romaji: "keigu", hanViet: "Kính cụ", meaning: "Kính gửi (cách kết thúc thư)", textMnemonic: "敬具 = kính gửi (kết thúc thư lịch sự) 💌" },
  { id: "n3-keigo-14", courseId: "jlpt-n3", kanji: "各位", kana: "かくい", romaji: "kakui", hanViet: "Các vị", meaning: "Các quý vị / Thưa quý vị", textMnemonic: "各位 = các quý vị (gọi nhiều người) 👥" },
  { id: "n3-keigo-15", courseId: "jlpt-n3", kanji: "御中", kana: "おんちゅう", romaji: "onchuu", hanViet: "Ngự trung", meaning: "Ngài / Phòng (trên phong bì)", textMnemonic: "御中 = ngài / phòng (viết trên phong bì) 📮" },

  // Kính ngữ cho sự bận rộn
  { id: "n3-keigo-16", courseId: "jlpt-n3", kanji: "ご多忙", kana: "ごたぼう", romaji: "gotabou", hanViet: "Ngô đa mang", meaning: "Bận rộn", textMnemonic: "ご多忙 = bận rộn (nói về người khác) ⏰" },
  { id: "n3-keigo-17", courseId: "jlpt-n3", kanji: "お忙しい", kana: "おいそがしい", romaji: "oisogashii", hanViet: "Ngô diệc bận", meaning: "Bận rộn (kính ngữ)", textMnemonic: "お忙しい = bận rộn (kính ngữ) ⏰" },
  { id: "n3-keigo-18", courseId: "jlpt-n3", kanji: "ご面倒", kana: "ごめんど", romaji: "gomen do", hanViet: "Ngô diện đạo", meaning: "Phiền toái (kính ngữ)", textMnemonic: "ご面倒 = phiền toái / bất tiện (kính ngữ) 😔" },
  { id: "n3-keigo-19", courseId: "jlpt-n3", kanji: "ご都合", kana: "ごつごう", romaji: "gotsugou", hanViet: "Ngô tùng cố", meaning: "Tình hình cá nhân", textMnemonic: "ご都合 = tình hình / sự tiện lợi của bạn 📅" },
  { id: "n3-keigo-20", courseId: "jlpt-n3", kanji: "差し支え", kana: "さしつかえ", romaji: "sashitsukae", hanViet: "Thí trở ngại", meaning: "Bất tiện / Không tiện", textMnemonic: "差し支え = gây bất tiện / không tiện 🚫" },

  // Kính ngữ cho sự vô lễ
  { id: "n3-keigo-21", courseId: "jlpt-n3", kanji: "ご無礼", kana: "ごぶれい", romaji: "goburei", hanViet: "Ngô vô lễ", meaning: "Vô lễ / Thiếu lễ phép", textMnemonic: "ご無礼 = vô lễ (tự xưng khi làm điều bất lịch sự) 🙇" },
  { id: "n3-keigo-22", courseId: "jlpt-n3", kanji: "恐れ入りますが", kana: "おそれいりますが", romaji: "osoreirimasu ga", hanViet: "Tộc nhập", meaning: "Xin lỗi đã phiền", textMnemonic: "恐れ入りますが = xin lỗi đã làm phiền (rất lịch sự) 🙏" },
  { id: "n3-keigo-23", courseId: "jlpt-n3", kanji: "失礼いたします", kana: "しつれいいたします", romaji: "shitsurei itashimasu", hanViet: "Thất lễ hạ thủ", meaning: "Xin phép cáo từ / tạm biệt", textMnemonic: "失礼いたします = xin phép cáo từ (khi rời đi) 🙇" },
  { id: "n3-keigo-24", courseId: "jlpt-n3", kanji: "お忙しい中", kana: "おいそがしいなか", romaji: "oisogashii naka", hanViet: "Ngô diệc bận trung", meaning: "Trong lúc bận rộn", textMnemonic: "お忙しい中 = trong lúc bạn bận rộn (cảm ơn) ⏰" },
  { id: "n3-keigo-25", courseId: "jlpt-n3", kanji: "ご配慮", kana: "ごはいりょ", romaji: "gohairyo", hanViet: "Ngô phụ lưỡng", meaning: "Sự quan tâm / chú ý", textMnemonic: "ご配慮 = sự quan tâm chu đáo (lịch sự) 🙏" },

  // Kính ngữ khiêm nhường (humble)
  { id: "n3-keigo-26", courseId: "jlpt-n3", kanji: "赐る", kana: "たまわる", romaji: "tamawaru", hanViet: "Tứ hoàn", meaning: "Được nhận (khiêm nhường)", textMnemonic: "賜る = được nhận (khiêm nhường, dùng khi nhận từ người trên) 🙏" },
  { id: "n3-keigo-27", courseId: "jlpt-n3", kanji: "顶く", kana: "いただく", romaji: "itadaku", hanViet: "Ẩm thụ", meaning: "Nhận / Ăn (khiêm nhường)", textMnemonic: "いただく = nhận / ăn / uống (khiêm nhường hơn 食べる) 🍽️" },
  { id: "n3-keigo-28", courseId: "jlpt-n3", kanji: "差し上げる", kana: "さしあげる", romaji: "sashiageru", hanViet: "Thí thượng", meaning: "Tặng cho (khiêm nhường)", textMnemonic: "差し上げる = tặng cho (khiêm nhường, dùng khi tặng cho người trên) 🎁" },
  { id: "n3-keigo-29", courseId: "jlpt-n3", kanji: "申し上げる", kana: "もうしあげる", romaji: "moushiageru", hanViet: "Mạo thượng", meaning: "Nói / Báo cáo (khiêm nhường)", textMnemonic: "申し上げる = nói / báo cáo (khiêm nhường) 💬" },
  { id: "n3-keigo-30", courseId: "jlpt-n3", kanji: "拜见", kana: "はいけん", romaji: "haiken", hanViet: "Bái kiến", meaning: "Gặp mặt (khiêm nhường)", textMnemonic: "拜見 = được xem / gặp mặt (khiêm nhường) 👀" },

  // Kính ngữ gửi đến
  { id: "n3-keigo-31", courseId: "jlpt-n3", kanji: "届ける", kana: "とどける", romaji: "todokeru", hanViet: "Đắc đắc", meaning: "Gửi tới / Mang tới", textMnemonic: "届ける = gửi đến / mang tới (humble của 送る) 📦" },
  { id: "n3-keigo-32", courseId: "jlpt-n3", kanji: "お届けする", kana: "おとどけする", romaji: "otodoke suru", hanViet: "Ngô tố đắc thủ", meaning: "Gửi đến (kính ngữ)", textMnemonic: "お届けする = gửi đến (khi mình gửi cho khách) 📦" },
  { id: "n3-keigo-33", courseId: "jlpt-n3", kanji: "お届け", kana: "おとどけ", romaji: "otodoke", hanViet: "Ngô tố đắc", meaning: "Việc giao hàng", textMnemonic: "お届け = giao hàng / gửi đến (dùng trong dịch vụ) 📦" },

  // Kính ngữ khiêm nhường khác
  { id: "n3-keigo-34", courseId: "jlpt-n3", kanji: "致す", kana: "いたす", romaji: "itasu", hanViet: "Trí thủ", meaning: "Làm (khiêm nhường)", textMnemonic: "致す = làm (khiêm nhường của する) 🙏" },
  { id: "n3-keigo-35", courseId: "jlpt-n3", kanji: "存じる", kana: "ぞんじる", romaji: "zonjiru", hanViet: "Tồn tri", meaning: "Biết (khiêm nhường)", textMnemonic: "存じる = biết / nghĩ (khiêm nhường của 知る) 🧠" },
  { id: "n3-keigo-36", courseId: "jlpt-n3", kanji: "存ずる", kana: "ぞんずる", romaji: "zonzuru", hanViet: "Tồn triết", meaning: "Biết (khiêm nhường)", textMnemonic: "存ずる = biết (khiêm nhường cổ điển) 📚" },
  { id: "n3-keigo-37", courseId: "jlpt-n3", kanji: "参る", kana: "まいる", romaji: "mairu", hanViet: "Tây lai", meaning: "Đi / Đến (khiêm nhường)", textMnemonic: "参る = đi / đến / về (khiêm nhường của 来る/行く) 🚶" },
  { id: "n3-keigo-38", courseId: "jlpt-n3", kanji: "上がる", kana: "あがる", romaji: "agaru", hanViet: "Thượng thăng", meaning: "Lên / Ăn uống (khiêm nhường)", textMnemonic: "上がる = lên / ăn uống (khiêm nhường, dùng cho người trên) ⬆️" },

  // Kính ngữ trong ăn uống
  { id: "n3-keigo-39", courseId: "jlpt-n3", kanji: "お腹", kana: "おなか", romaji: "onaka", hanViet: "Ngô nội", meaning: "Bụng (dùng thay 肚子)", textMnemonic: "お腹 = bụng (dùng trong ăn uống) 🍽️" },
  { id: "n3-keigo-40", courseId: "jlpt-n3", kanji: "顶く", kana: "いただく", romaji: "itadaku", hanViet: "Ẩm thụ", meaning: "Ăn / Uống (khiêm nhường)", textMnemonic: "いただく = ăn / uống (khiêm nhường trước/sau bữa ăn) 🍽️" },

  // Kính ngữ trang trọng
  { id: "n3-keigo-41", courseId: "jlpt-n3", kanji: "召す", kana: "めす", romaji: "mesu", hanViet: "Chiếu thỉnh", meaning: "Ăn mặc / Uống (kính ngữ)", textMnemonic: "召す = mặc / uống / gọi (kính ngữ, dùng với người trên) 👔" },
  { id: "n3-keigo-42", courseId: "jlpt-n3", kanji: "休む", kana: "やすむ", romaji: "yasumu", hanViet: "Hưu vật", meaning: "Nghỉ ngơi (khiêm nhường)", textMnemonic: "休む = nghỉ ngơi (thường dùng khi xin nghỉ làm) 😴" },
  { id: "n3-keigo-43", courseId: "jlpt-n3", kanji: "呼ばれる", kana: "よばれる", romaji: "yobareru", hanViet: "Hô chiếu", meaning: "Được gọi / Đi thăm", textMnemonic: "呼ばれる = được gọi / được mời đến (khi người khác mời) 📞" },

  // Kính ngữ cho sự hiểu/biết
  { id: "n3-keigo-44", courseId: "jlpt-n3", kanji: "承知", kana: "しょうち", romaji: "shouchi", hanViet: "Thừa tri", meaning: "Hiểu rồi / Vâng ạ", textMnemonic: "承知 = hiểu rồi / đã rõ (lịch sự) ✅" },
  { id: "n3-keigo-45", courseId: "jlpt-n3", kanji: "理解", kana: "りかい", romaji: "rikai", hanViet: "Lý giải", meaning: "Hiểu / Thông hiểu", textMnemonic: "理解 = hiểu / thông hiểu (học thuật hơn わかる) 📚" },
  { id: "n3-keigo-46", courseId: "jlpt-n3", kanji: "了解", kana: "りょうかい", romaji: "ryoukai", hanViet: "Liêu giải", meaning: "Hiểu rồi (thân mật)", textMnemonic: "了解 = hiểu rồi (thân mật hơn, dùng trong công việc) 👍" },
  { id: "n3-keigo-47", courseId: "jlpt-n3", kanji: "承諾", kana: "しょうたく", romaji: "shoutaku", hanViet: "Thừa thự", meaning: "Đồng ý / Chấp nhận", textMnemonic: "承諾 = đồng ý / chấp nhận (chính thức) ✅" },
  { id: "n3-keigo-48", courseId: "jlpt-n3", kanji: "同意", kana: "どうい", romaji: "doui", hanViet: "Đồng ý", meaning: "Đồng ý / Nhất trí", textMnemonic: "同意 = đồng ý / tán thành ⚖️" },

  // Kính ngữ cho sự cho phép
  { id: "n3-keigo-49", courseId: "jlpt-n3", kanji: "許可", kana: "きょか", romaji: "kyoka", hanViet: "Hứa khả", meaning: "Cho phép", textMnemonic: "許可 = cho phép / giấy phép ✅" },
  { id: "n3-keigo-50", courseId: "jlpt-n3", kanji: "承認", kana: "しょうにん", romaji: "shounin", hanViet: "Thừa nhận", meaning: "Phê duyệt", textMnemonic: "承認 = phê duyệt / công nhận (chính thức) 📝" },
  { id: "n3-keigo-51", courseId: "jlpt-n3", kanji: "允诺", kana: "じょうたく", romaji: "joutaku", hanViet: "Duỡng nạc", meaning: "Đồng ý / Chấp thuận", textMnemonic: "允諾 = đồng ý / chấp thuận (văn viết, trang trọng) ✅" },
  { id: "n3-keigo-52", courseId: "jlpt-n3", kanji: "否决", kana: "ふしゅくだい", romaji: "fushukudai", hanViet: "Phủ quyết", meaning: "Bác bỏ / Từ chối", textMnemonic: "否决 = phủ quyết / bác bỏ (chính thức) ❌" },
  { id: "n3-keigo-53", courseId: "jlpt-n3", kanji: "拒绝", kana: "きょぜつ", romaji: "kyozetsu", hanViet: "Cự tuyệt", meaning: "Từ chối", textMnemonic: "拒绝 = từ chối / cự tuyệt (văn viết) 🚫" },

  // Kính ngữ cho sự phàn nàn
  { id: "n3-keigo-54", courseId: "jlpt-n3", kanji: "苦情", kana: "くじょう", romaji: "kujou", hanViet: "Khổ tình", meaning: "Phàn nàn / Khiếu nại", textMnemonic: "苦情 = phàn nàn / khiếu nại (trong dịch vụ) 😤" },
  { id: "n3-keigo-55", courseId: "jlpt-n3", kanji: "抗议", kana: "こうぎ", romaji: "kougi", hanViet: "Kháng nghị", meaning: "Phản đối / Khiếu nại", textMnemonic: "抗议 = phản đối / khiếu nại (mạnh mẽ hơn) 📢" },
  { id: "n3-keigo-56", courseId: "jlpt-n3", kanji: "不平", kana: "ふへい", romaji: "fuhei", hanViet: "Bất bình", meaning: "Bất mãn / Phàn nàn", textMnemonic: "不平 = bất mãn / than phiền 😠" },
  { id: "n3-keigo-57", courseId: "jlpt-n3", kanji: "不满", kana: "ふまん", romaji: "fuman", hanViet: "Bất mãn", meaning: "Không hài lòng", textMnemonic: "不满 = không hài lòng / bất mãn 😞" },
  { id: "n3-keigo-58", courseId: "jlpt-n3", kanji: "文句", kana: "もんく", romaji: "monku", hanViet: "Văn khúc", meaning: "Phàn nàn / Khiếu nại", textMnemonic: "文句 = phàn nàn / than vãn (thường dùng 文句を言う) 😤" },
  { id: "n3-keigo-59", courseId: "jlpt-n3", kanji: "文句を言う", kana: "もんくをいう", romaji: "monku wo iu", hanViet: "Văn khúc ngôn", meaning: "Phàn nàn", textMnemonic: "文句を言う = phàn nàn / kêu ca 😤" },
  { id: "n3-keigo-60", courseId: "jlpt-n3", kanji: "抗议の余地", kana: "こうぎのよち", romaji: "kougi no yochi", hanViet: "Kháng nghị dư địa", meaning: "Có thể phản đối", textMnemonic: "抗议の余地 = có chỗ để phản đối 📢" },

  // Kính ngữ trong điện thoại
  { id: "n3-keigo-61", courseId: "jlpt-n3", kanji: "お世話になっております", kana: "おせわになっております", romaji: "osewa natte orimasu", hanViet: "Ngô thế oảnh hữu", meaning: "Cảm ơn đã giúp đỡ", textMnemonic: "お世話になっております = cảm ơn đã giúp đỡ (cực kính) 🙏" },
  { id: "n3-keigo-62", courseId: "jlpt-n3", kanji: "いたしました", kana: "いたしました", romaji: "itashimashita", hanViet: "Hạ thủ", meaning: "Đã làm (khiêm nhường quá khứ)", textMnemonic: "いたしました = đã làm (khiêm nhường) 🙏" },
  { id: "n3-keigo-63", courseId: "jlpt-n3", kanji: "いたしました", kana: "いたしました", romaji: "itashimashita", hanViet: "Hạ thủ", meaning: "Đã làm (khiêm nhường cao)", textMnemonic: "いたしました = đã làm xong (khiêm nhường cực) 🙏" },
  { id: "n3-keigo-64", courseId: "jlpt-n3", kanji: "いたしました", kana: "いたしました", romaji: "itashimashita", hanViet: "Hạ thủ", meaning: "Đã làm (lịch sự)", textMnemonic: "いたしました = đã hoàn thành (lịch sự) ✅" },
  { id: "n3-keigo-65", courseId: "jlpt-n3", kanji: "いたします", kana: "いたします", romaji: "itashimasu", hanViet: "Hạ thủ", meaning: "Sẽ làm (khiêm nhường)", textMnemonic: "いたします = tôi sẽ làm (khiêm nhường) 🙏" },

  // Kính ngữ cực kỳ lịch sự
  { id: "n3-keigo-66", courseId: "jlpt-n3", kanji: "参ります", kana: "まいる", romaji: "mairu", hanViet: "Tây lai", meaning: "Đến / Đi (siêu khiêm nhường)", textMnemonic: "参ります = đến / đi (siêu khiêm nhường) 🙏" },
  { id: "n3-keigo-67", courseId: "jlpt-n3", kanji: "存じております", kana: "ぞんじております", romaji: "zonjite orimasu", hanViet: "Tồn tri hữu", meaning: "Tôi biết (cực kính ngữ)", textMnemonic: "存じております = tôi biết (cực kính ngữ của 知っている) 📚" },
  { id: "n3-keigo-68", courseId: "jlpt-n3", kanji: "伺う", kana: "うかがう", romaji: "ukagau", hanViet: "Hầu quá", meaning: "Hỏi / Lắng nghe (khiêm nhường)", textMnemonic: "伺う = hỏi / thăm / lắng nghe (khiêm nhường cực) ❓" },
  { id: "n3-keigo-69", courseId: "jlpt-n3", kanji: "頂戴いたします", kana: "ちょうだいいいたします", romaji: "choudai itashimasu", hanViet: "Triệu đệ hạ thủ", meaning: "Tôi sẽ nhận (cực khiêm nhường)", textMnemonic: "頂戴いたします = tôi sẽ nhận (cực khiêm nhường) 🙏" },
  { id: "n3-keigo-70", courseId: "jlpt-n3", kanji: "頂戴謙遜", kana: "ちょうだいけんそん", romaji: "choudai kenson", hanViet: "Triệu đệ khiêm tốn", meaning: "Nhận (khiêm nhường)", textMnemonic: "頂戴謙遜 = nhận (khiêm nhường, dùng nhiều trong ăn uống) 🍽️" },

  // Kính ngữ trong làm việc
  { id: "n3-keigo-71", courseId: "jlpt-n3", kanji: "お待たせしました", kana: "おまたせしました", romaji: "omatesa shimashita", hanViet: "Ngô đãi tác", meaning: "Đã để quý vị chờ (xin lỗi)", textMnemonic: "お待たせしました = xin lỗi đã để quý vị chờ ⏰" },
  { id: "n3-keigo-72", courseId: "jlpt-n3", kanji: "少々お待ちください", kana: "しょうしょうおまちください", romaji: "shoushou omachi kudasai", hanViet: "Thiểu thiểu ngô mẫu", meaning: "Xin đợi một chút", textMnemonic: "少々お待ちください = xin đợi một chút (lịch sự) ⏳" },
  { id: "n3-keigo-73", courseId: "jlpt-n3", kanji: "かしこまりました", kana: "かしこまりました", romaji: "kashikomarimashita", hanViet: "Hự tư tu hoạt", meaning: "Vâng, tôi hiểu (cực lịch sự)", textMnemonic: "かしこまりました = vâng ạ / đã rõ (cực lịch sự) ✅" },
  { id: "n3-keigo-74", courseId: "jlpt-n3", kanji: "承知いたしました", kana: "しょうちいたしました", romaji: "shouchi itashimashita", hanViet: "Thừa tri hạ thủ", meaning: "Tôi đã hiểu (lịch sự)", textMnemonic: "承知いたしました = tôi đã hiểu rồi (lịch sự) ✅" },
  { id: "n3-keigo-75", courseId: "jlpt-n3", kanji: "そのようなことはございません", kana: "そのようなことはございません", romaji: "sono you na koto wa gozaimasen", hanViet: "Như thị ngôn sự vật", meaning: "Không có chuyện đó (cực lịch sự)", textMnemonic: "そのようなことはございません = không có chuyện đó (cực lịch sự) 🙅" },

  // Kính ngữ trong chào hỏi
  { id: "n3-keigo-76", courseId: "jlpt-n3", kanji: "お元気ですか", kana: "おげんきですか", romaji: "ogenki desu ka", hanViet: "Ngô nguyên khả hự", meaning: "Bạn có khỏe không? (kính ngữ)", textMnemonic: "お元気ですか = bạn có khỏe không? (kính ngữ) 💪" },
  { id: "n3-keigo-77", courseId: "jlpt-n3", kanji: "お忙しいですか", kana: "おいそがしいですか", romaji: "oisogashii desu ka", hanViet: "Ngô diệc bận hự", meaning: "Bạn có bận không? (kính ngữ)", textMnemonic: "お忙しいですか = bạn có bận không? (kính ngữ) 📚" },
  { id: "n3-keigo-78", courseId: "jlpt-n3", kanji: "ありがとうございます", kana: "ありがとうございます", romaji: "arigatou gozaimasu", hanViet: "Hữu lễ tạ", meaning: "Cảm ơn rất nhiều (lịch sự)", textMnemonic: "ありがとうございます = cảm ơn trang trọng 🙏" },
  { id: "n3-keigo-79", courseId: "jlpt-n3", kanji: "恐れ入りますが", kana: "おそれいりますが", romaji: "osore irimasu ga", hanViet: "Tộc nhập", meaning: "Xin lỗi đã phiền (rất lịch sự)", textMnemonic: "恐れ入りますが = xin lỗi đã phiền (cực lịch sự) 🙇" },
  { id: "n3-keigo-80", courseId: "jlpt-n3", kanji: "失礼いたします", kana: "しつれいいたします", romaji: "shitsurei itashimasu", hanViet: "Thất lễ hạ thủ", meaning: "Xin phép (cực lịch sự)", textMnemonic: "失礼いたします = xin phép cáo từ (khi rời đi) 🙇" },

  // Kính ngữ cho đi lại
  { id: "n3-keigo-81", courseId: "jlpt-n3", kanji: "おいでになる", kana: "おいでになる", romaji: "oide ni naru", hanViet: "Ngô di lai", meaning: "Đến / Ở (kính ngữ)", textMnemonic: "おいでになる = đến / ở (kính ngữ của 来る/いる) 👤" },
  { id: "n3-keigo-82", courseId: "jlpt-n3", kanji: "お帰りになる", kana: "おかえりになる", romaji: "okaeri ni naru", hanViet: "Ngô quy nhân", meaning: "Về (kính ngữ)", textMnemonic: "お帰りになる = về nhà (kính ngữ) 🏠" },
  { id: "n3-keigo-83", courseId: "jlpt-n3", kanji: "お上がりになる", kana: "おあがりになる", romaji: "oagari ni naru", hanViet: "Ngô thăng nhân", meaning: "Lên (kính ngữ)", textMnemonic: "お上がりになる = lên (kính ngữ của 上がる) ⬆️" },
  { id: "n3-keigo-84", courseId: "jlpt-n3", kanji: "お降りになる", kana: "おおりになる", romaji: "ori ni naru", hanViet: "Ngô giáng nhân", meaning: "Xuống (kính ngữ)", textMnemonic: "お降りになる = xuống (kính ngữ của 降りる) ⬇️" },
  { id: "n3-keigo-85", courseId: "jlpt-n3", kanji: "お乘车になる", kana: "おじょしゃになる", romaji: "ojousha ni naru", hanViet: "Ngô thừa xa nhân", meaning: "Lên xe (kính ngữ)", textMnemonic: "お乘车になる = lên xe (kính ngữ) 🚗" },

  // Kính ngữ cho việc giúp đỡ
  { id: "n3-keigo-86", courseId: "jlpt-n3", kanji: "お会いする", kana: "おあいする", romaji: "oai suru", hanViet: "Ngô hội thủ", meaning: "Gặp gỡ (kính ngữ)", textMnemonic: "お会いする = gặp (kính ngữ của 会う) 🤝" },
  { id: "n3-keigo-87", courseId: "jlpt-n3", kanji: "お見せする", kana: "おみせする", romaji: "omise suru", hanViet: "Ngô hiện thủ", meaning: "Cho xem (kính ngữ)", textMnemonic: "お見せする = cho xem (kính ngữ của 見せる) 👀" },
  { id: "n3-keigo-88", courseId: "jlpt-n3", kanji: "お教えする", kana: "おおしえする", romaji: "ooshie suru", hanViet: "Ngô giáo thụ thủ", meaning: "Dạy cho (kính ngữ)", textMnemonic: "お教えする = dạy cho (kính ngữ của 教える) 📚" },
  { id: "n3-keigo-89", courseId: "jlpt-n3", kanji: "お選びする", kana: "おえらびする", romaji: "oerabi suru", hanViet: "Ngô tuyển thủ", meaning: "Chọn cho (kính ngữ)", textMnemonic: "お選びする = chọn cho (kính ngữ của 選ぶ) ✅" },
  { id: "n3-keigo-90", courseId: "jlpt-n3", kanji: "お手伝いする", kana: "おてつだいする", romaji: "otetsudai suru", hanViet: "Ngô thủ diệt thủ", meaning: "Giúp đỡ (kính ngữ)", textMnemonic: "お手伝いする = giúp đỡ (kính ngữ của 手伝う) 🤝" },

  // Kính ngữ cho giao tiếp công việc
  { id: "n3-keigo-91", courseId: "jlpt-n3", kanji: "ご連絡する", kana: "ごれんらくする", romaji: "gorenraku suru", hanViet: "Ngô liên lạc thủ", meaning: "Liên hệ (kính ngữ)", textMnemonic: "ご連絡する = liên hệ (kính ngữ) 📞" },
  { id: "n3-keigo-92", courseId: "jlpt-n3", kanji: "お待ちする", kana: "おまちする", romaji: "omachi suru", hanViet: "Ngô mẫu thủ", meaning: "Đợi (kính ngữ)", textMnemonic: "お待ちする = đợi (kính ngữ) ⏳" },
  { id: "n3-keigo-93", courseId: "jlpt-n3", kanji: "お返しする", kana: "おかえしする", romaji: "okaeshi suru", hanViet: "Ngô hoàn hồi thủ", meaning: "Trả lại (kính ngữ)", textMnemonic: "お返しする = trả lại (kính ngữ của 返す) 🔄" },
  { id: "n3-keigo-94", courseId: "jlpt-n3", kanji: "お話しする", kana: "おはなしする", romaji: "ohanashi suru", hanViet: "Ngô thoại ngữ thủ", meaning: "Nói chuyện (kính ngữ)", textMnemonic: "お話しする = nói chuyện (kính ngữ của 話す) 💬" },
  { id: "n3-keigo-95", courseId: "jlpt-n3", kanji: "お伝えする", kana: "おつたえる", romaji: "otsutaeru", hanViet: "Ngô truyền thụ thủ", meaning: "Truyền đạt (kính ngữ)", textMnemonic: "お伝えする = truyền đạt (kính ngữ của 伝える) 📢" },

  // Kính ngữ cho người đi trước
  { id: "n3-keigo-96", courseId: "jlpt-n3", kanji: "社长", kana: "しゃちょう", romaji: "shachou", hanViet: "Xã trưởng", meaning: "Giám đốc công ty", textMnemonic: "社長 = giám đốc (công ty) 👔" },
  { id: "n3-keigo-97", courseId: "jlpt-n3", kanji: "部长", kana: "ぶちょう", romaji: "buchou", hanViet: "Bộ trưởng", meaning: "Trưởng phòng", textMnemonic: "部長 = trưởng phòng 👔" },
  { id: "n3-keigo-98", courseId: "jlpt-n3", kanji: "课长", kana: "かちょう", romaji: "kachou", hanViet: "Khóa trưởng", meaning: "Trưởng nhóm", textMnemonic: "課長 = trưởng nhóm 👔" },
  { id: "n3-keigo-99", courseId: "jlpt-n3", kanji: "お伟い方", kana: "おえらいかた", romaji: "oerai kata", hanViet: "Ngô vĩ đại phương", meaning: "Người có chức vị cao (kính ngữ)", textMnemonic: "お偉い方 = người có chức vị cao (kính ngữ) 👔" },
  { id: "n3-keigo-100", courseId: "jlpt-n3", kanji: "秘书", kana: "ひしょ", romaji: "hisho", hanViet: "Mật thư", meaning: "Thư ký", textMnemonic: "秘书 = thư ký 📋" },

  // Kính ngữ cho lời chào hỏi
  { id: "n3-keigo-101", courseId: "jlpt-n3", kanji: "新年", kana: "しんねん", romaji: "shinnen", hanViet: "Tân niên", meaning: "Năm mới", textMnemonic: "新年 = năm mới (lịch sự) 🎍" },
  { id: "n3-keigo-102", courseId: "jlpt-n3", kanji: "明けましておめでとう", kana: "あけましておめでとうございます", romaji: "akemashite omedetou gozaimasu", hanViet: "Khai minh tân niên lạc", meaning: "Chúc mừng năm mới (lịch sự)", textMnemonic: "明けましておめでとう = chúc mừng năm mới (lịch sự) 🎍" },
  { id: "n3-keigo-103", courseId: "jlpt-n3", kanji: "生日快乐", kana: "おたんじょうび", romaji: "otanjoubi", hanViet: "Ngô tân sinh nhật", meaning: "Sinh nhật (kính ngữ)", textMnemonic: "お生日快乐 = sinh nhật (kính ngữ) 🎂" },
  { id: "n3-keigo-104", courseId: "jlpt-n3", kanji: "长寿", kana: "ちょうじゅ", romaji: "chouju", hanViet: "Trường thọ", meaning: "Trường thọ / Sống lâu", textMnemonic: "长寿 = trường thọ (lời chúc) 🧓" },
  { id: "n3-keigo-105", courseId: "jlpt-n3", kanji: "ご健闘を", kana: "ごけんとうを", romaji: "gkentou wo", hanViet: "Ngô kiện đấu", meaning: "Chúc thành công (kính ngữ)", textMnemonic: "ご健闘を = chúc thành công (kính ngữ) 💪" },

  // Kính ngữ trong ăn uống
  { id: "n3-keigo-106", courseId: "jlpt-n3", kanji: "いただきます", kana: "いただきます", romaji: "itadakimasu", hanViet: "Ẩm thực thủ", meaning: "Cảm ơn vì đã được ăn (trước khi ăn)", textMnemonic: "いただきます = cảm ơn trước khi ăn 🍽️" },
  { id: "n3-keigo-107", courseId: "jlpt-n3", kanji: "ごちそうさまでした", kana: "ごちそうさまでした", romaji: "gochisousama deshita", hanViet: "Cực tự tiễn tối dã", meaning: "Cảm ơn vì đã được ăn (sau khi ăn)", textMnemonic: "ごちそうさまでした = cảm ơn sau khi ăn 🍽️" },
  { id: "n3-keigo-108", courseId: "jlpt-n3", kanji: "お食事", kana: "おしょくじ", romaji: "oshokuji", hanViet: "Ngô thực sự", meaning: "Bữa ăn (kính ngữ)", textMnemonic: "お食事 = bữa ăn (kính ngữ) 🍽️" },
  { id: "n3-keigo-109", courseId: "jlpt-n3", kanji: "お饮み物", kana: "おのみもの", romaji: "onomimono", hanViet: "Ngô ẩm vật", meaning: "Đồ uống (kính ngữ)", textMnemonic: "お飲み物 = đồ uống (kính ngữ) 🥤" },
  { id: "n3-keigo-110", courseId: "jlpt-n3", kanji: "お风吕", kana: "おふろ", romaji: "ofuro", hanViet: "Ngô phong lũ", meaning: "Bồn tắm (kính ngữ)", textMnemonic: "お风吕 = bồn tắm (kính ngữ) 🛁" },

  // Kính ngữ cho việc đưa tin
  { id: "n3-keigo-111", courseId: "jlpt-n3", kanji: "ご案内する", kana: "ごあんないする", romaji: "goannai suru", hanViet: "Ngô dẫn hướng thủ", meaning: "Hướng dẫn (kính ngữ)", textMnemonic: "ご案内する = hướng dẫn (kính ngữ) 🗺️" },
  { id: "n3-keigo-112", courseId: "jlpt-n3", kanji: "お出しする", kana: "おだしする", romaji: "odashi suru", hanViet: "Ngô xuất thủ", meaning: "Mang ra (kính ngữ)", textMnemonic: "お出しする = mang ra (kính ngữ) 🍵" },
  { id: "n3-keigo-113", courseId: "jlpt-n3", kanji: "お呼びする", kana: "およびする", romaji: "oyobi suru", hanViet: "Ngô hiệu thủ", meaning: "Gọi (kính ngữ)", textMnemonic: "お呼びする = gọi (kính ngữ) 📢" },
  { id: "n3-keigo-114", courseId: "jlpt-n3", kanji: "お気に入", kana: "おとくい", romaji: "otokui", hanViet: "Ngô đắc ý", meaning: "Sự ưa thích (kính ngữ)", textMnemonic: "お気に入 = sự ưa thích / thích (kính ngữ) ❤️" },
  { id: "n3-keigo-115", courseId: "jlpt-n3", kanji: "お気に入", kana: "おきにいり", romaji: "okiniiri", hanViet: "Ngô cận ý lợi", meaning: "Yêu thích (kính ngữ)", textMnemonic: "お気に入 = yêu thích / thích (kính ngữ) ❤️" },

  // Kính ngữ cho gia đình người khác
  { id: "n3-keigo-116", courseId: "jlpt-n3", kanji: "お包み", kana: "おかみ", romaji: "okami", hanViet: "Ngô bao", meaning: "Vợ (kính ngữ - vợ người khác)", textMnemonic: "おかみ = vợ (kính ngữ) 👩" },
  { id: "n3-keigo-117", courseId: "jlpt-n3", kanji: "ご主人", kana: "ごしゅじん", romaji: "goshujin", hanViet: "Ngô chủ nhân", meaning: "Chồng (kính ngữ - chồng người khác)", textMnemonic: "ご主人 = chồng (kính ngữ) 👨" },
  { id: "n3-keigo-118", courseId: "jlpt-n3", kanji: "お作り方", kana: "おつくりのカタ", romaji: "otsukuri no kata", hanViet: "Ngô tạo phương", meaning: "Người làm (kính ngữ)", textMnemonic: "お作り方 = người làm ra (kính ngữ) 👨‍🍳" },
  { id: "n3-keigo-119", courseId: "jlpt-n3", kanji: "お気に入", kana: "おhasa", romaji: "okuchi", hanViet: "Ngô khẩu", meaning: "Miệng / Lời nói (kính ngữ)", textMnemonic: "お気に入 = miệng / lời nói (kính ngữ) 💬" },
  { id: "n3-keigo-120", courseId: "jlpt-n3", kanji: "お気に入", kana: "おhasa", romaji: "ohou", hanViet: "Ngô phương", meaning: "Lời nói / Cách nói (kính ngữ)", textMnemonic: "お気に入 = lời nói / cách nói (kính ngữ) 💬" },
];
