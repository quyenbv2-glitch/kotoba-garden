/**
 * JLPT N3 - Từ vựng Du lịch & Di chuyển
 * 120 từ vựng thường gặp trong kỳ thi JLPT N3
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_TRAVEL: Word[] = [
  // Phương tiện di chuyển
  { id: "n3-travel-1", courseId: "jlpt-n3", kanji: "飛行機", kana: "ひこうき", romaji: "hikouki", hanViet: "Phi cơ gi", meaning: "Máy bay", textMnemonic: "飛(bay) + 行(đi) + 機(máy) = máy bay ✈️" },
  { id: "n3-travel-2", courseId: "jlpt-n3", kanji: "新幹線", kana: "しんかんせん", romaji: "shinkansen", hanViet: "Tân can tuyến", meaning: "Tàu cao tốc Shinkansen", textMnemonic: "新(mới) + 幹線(tuyến chính) = tuyến đường sắt mới 🚄" },
  { id: "n3-travel-3", courseId: "jlpt-n3", kanji: "電車", kana: "でんしゃ", romaji: "densha", hanViet: "Điện xa", meaning: "Tàu điện", textMnemonic: "電(điện) + 車(xe) = xe chạy bằng điện 🚃" },
  { id: "n3-travel-4", courseId: "jlpt-n3", kanji: "汽車", kana: "きしゃ", romaji: "kisha", hanViet: "Cơ xa", meaning: "Tàu hỏa", textMnemonic: "汽(hơi nước) + 車(xe) = xe chạy bằng hơi nước 🚂" },
  { id: "n3-travel-5", courseId: "jlpt-n3", kanji: "地下鉄", kana: "ちかてつ", romaji: "chikatetsu", hanViet: "Địa hàm thiết", meaning: "Tàu điện ngầm", textMnemonic: "地下(dưới đất) + 鉄(sắt) = tàu sắt dưới lòng đất 🚇" },
  { id: "n3-travel-6", courseId: "jlpt-n3", kanji: "バス", kana: "バス", romaji: "basu", hanViet: "(ngoại lai)", meaning: "Xe buýt", textMnemonic: "Bus = xe buýt từ tiếng Anh 🚌" },
  { id: "n3-travel-7", courseId: "jlpt-n3", kanji: "タクシー", kana: "タクシー", romaji: "takushii", hanViet: "(ngoại lai)", meaning: "Taxi", textMnemonic: "Taxi = taxi từ tiếng Anh 🚕" },
  { id: "n3-travel-8", courseId: "jlpt-n3", kanji: "自転車", kana: "じてんしゃ", romaji: "jitensha", hanViet: "Tự chuyển xa", meaning: "Xe đạp", textMnemonic: "自(tự) + 転(xoay) + 車(xe) = xe tự xoay 🚲" },
  { id: "n3-travel-9", courseId: "jlpt-n3", kanji: "車", kana: "くるま", romaji: "kuruma", hanViet: "Xa", meaning: "Xe ô tô", textMnemonic: "車 = xe, phương tiện 🚗" },
  { id: "n3-travel-10", courseId: "jlpt-n3", kanji: "船", kana: "ふね", romaji: "fune", hanViet: "Thuyền", meaning: "Con tàu/Thuyền", textMnemonic: "船 = thuyền lớn, tàu biển 🚢" },

  // Điểm đến & địa điểm
  { id: "n3-travel-11", courseId: "jlpt-n3", kanji: "空港", kana: "くうこう", romaji: "kuukou", hanViet: "Không cảng", meaning: "Sân bay", textMnemonic: "空(trời) + 港(cảng) = cảng trên trời 🛫" },
  { id: "n3-travel-12", courseId: "jlpt-n3", kanji: "駅", kana: "えき", romaji: "eki", hanViet: "Dịch", meaning: "Nhà ga/Trạm", textMnemonic: "駅 = nơi dừng của tàu xe 🚉" },
  { id: "n3-travel-13", courseId: "jlpt-n3", kanji: "港", kana: "みなと", romaji: "minato", hanViet: "Cảng", meaning: "Cảng/Bến cảng", textMnemonic: "港 = nơi tàu dừng ⚓" },
  { id: "n3-travel-14", courseId: "jlpt-n3", kanji: "ホテル", kana: "ホテル", romaji: "hoteru", hanViet: "(ngoại lai)", meaning: "Khách sạn", textMnemonic: "Hotel = khách sạn từ tiếng Anh 🏨" },
  { id: "n3-travel-15", courseId: "jlpt-n3", kanji: "旅館", kana: "りょかん", romaji: "ryokan", hanViet: "Lữ quán", meaning: "Nhà trọ truyền thống", textMnemonic: "旅(du lịch) + 館(nhà) = nhà cho khách du lịch 🏯" },
  { id: "n3-travel-16", courseId: "jlpt-n3", kanji: "民宿", kana: "みんしゅく", romaji: "minshuku", hanViet: "Dân thục", meaning: "Nhà trọ dân gian", textMnemonic: "民(dân) + 宿(trọ) = nhà trọ của dân thường 🏠" },
  { id: "n3-travel-17", courseId: "jlpt-n3", kanji: "観光地", kana: "かんこうち", romaji: "kankouchi", hanViet: "Quan quang địa", meaning: "Điểm du lịch", textMnemonic: "観光(tham quan) + 地(địa điểm) = nơi để tham quan 🗺️" },
  { id: "n3-travel-18", courseId: "jlpt-n3", kanji: "旅行", kana: "りょこう", romaji: "ryokou", hanViet: "Lữ hành", meaning: "Du lịch", textMnemonic: "旅(đi) + 行(đi) = đi xa, du lịch 🧳" },
  { id: "n3-travel-19", courseId: "jlpt-n3", kanji: "海外", kana: "かいがい", romaji: "kaigai", hanViet: "Hải ngoại", meaning: "Nước ngoài", textMnemonic: "海(biển) + 外(ngoài) = bên ngoài biển, nước ngoài 🌏" },
  { id: "n3-travel-20", courseId: "jlpt-n3", kanji: "国内", kana: "こくない", romaji: "kokunai", hanViet: "Quốc nội", meaning: "Trong nước", textMnemonic: "国(nước) + 内(trong) = bên trong nước 🇯🇵" },

  // Hành động du lịch
  { id: "n3-travel-21", courseId: "jlpt-n3", kanji: "旅行する", kana: "りょこうする", romaji: "ryokou suru", hanViet: "Lữ hành", meaning: "Đi du lịch", textMnemonic: "旅行(du lịch) + する = đi du lịch 🧳" },
  { id: "n3-travel-22", courseId: "jlpt-n3", kanji: "出発", kana: "しゅっぱつ", romaji: "shuppatsu", hanViet: "Xuất phát", meaning: "Khởi hành", textMnemonic: "出(ra) + 発(xuất phát) = bắt đầu ra đi 🛫" },
  { id: "n3-travel-23", courseId: "jlpt-n3", kanji: "到着", kana: "とうちゃく", romaji: "touchaku", hanViet: "Đáo trứ", meaning: "Đến nơi", textMnemonic: "到(đến) + 着(mặc/về) = đến được nơi 🛬" },
  { id: "n3-travel-24", courseId: "jlpt-n3", kanji: "予約", kana: "よやく", romaji: "yoyaku", hanViet: "Dự ước", meaning: "Đặt trước", textMnemonic: "予(trước) + 約(hẹn) = hẹn trước, đặt chỗ 📅" },
  { id: "n3-travel-25", courseId: "jlpt-n3", kanji: "確認", kana: "かくにん", romaji: "kakunin", hanViet: "Xác nhận", meaning: "Xác nhận", textMnemonic: "確(chắc chắn) + 認(thừa nhận) = xác nhận rõ ràng ✅" },
  { id: "n3-travel-26", courseId: "jlpt-n3", kanji: "観光", kana: "かんこう", romaji: "kankou", hanViet: "Quan quang", meaning: "Tham quan", textMnemonic: "観(xem) + 光(quang) = xem cảnh đẹp 👀" },
  { id: "n3-travel-27", courseId: "jlpt-n3", kanji: "見学", kana: "けんがく", romaji: "kengaku", hanViet: "Kiến học", meaning: "Tham quan học tập", textMnemonic: "見(thấy) + 学(học) = học bằng cách xem 🏛️" },
  { id: "n3-travel-28", courseId: "jlpt-n3", kanji: "宿泊", kana: "しゅくはく", romaji: "shukuhaku", hanViet: "Trú bạch", meaning: "Lưu trú", textMnemonic: "宿(trọ) + 泊(đậu) = đậu lại trọ qua đêm 🛏️" },
  { id: "n3-travel-29", courseId: "jlpt-n3", kanji: "滞在", kana: "たいざい", romaji: "taizai", hanViet: "Trãi tại", meaning: "Cư trú/Lưu lại", textMnemonic: "滞(treo) + 在(ở) = ở lại một nơi 🏨" },
  { id: "n3-travel-30", courseId: "jlpt-n3", kanji: "帰宅", kana: "きたく", romaji: "kitaku", hanViet: "Quy gia", meaning: "Về nhà", textMnemonic: "帰(về) + 宅(nhà) = trở về nhà 🏠" },

  // Giấy tờ & thủ tục
  { id: "n3-travel-31", courseId: "jlpt-n3", kanji: "パスポート", kana: "パスポート", romaji: "pasupooto", hanViet: "(ngoại lai)", meaning: "Hộ chiếu", textMnemonic: "Passport = hộ chiếu từ tiếng Anh 📕" },
  { id: "n3-travel-32", courseId: "jlpt-n3", kanji: "ビザ", kana: "ビザ", romaji: "biza", hanViet: "(ngoại lai)", meaning: "Visa", textMnemonic: "Visa = thị thực từ tiếng Anh 📄" },
  { id: "n3-travel-33", courseId: "jlpt-n3", kanji: "チケット", kana: "チケット", romaji: "chiketto", hanViet: "(ngoại lai)", meaning: "Vé", textMnemonic: "Ticket = vé từ tiếng Anh 🎫" },
  { id: "n3-travel-34", courseId: "jlpt-n3", kanji: "切符", kana: "きっぷ", romaji: "kippu", hanViet: "Tiết phù", meaning: "Vé (tàu xe)", textMnemonic: "切(cắt) + 符(phù hiệu) = vé được cắt ra 🎫" },
  { id: "n3-travel-35", courseId: "jlpt-n3", kanji: "荷物", kana: "にもつ", romaji: "nimotsu", hanViet: "Hà vật", meaning: "Hành lý", textMnemonic: "荷(hàng) + 物(đồ) = đồ hành, hành lý 🧳" },
  { id: "n3-travel-36", courseId: "jlpt-n3", kanji: "手続", kana: "てつづき", romaji: "tetsuzuki", hanViet: "Thủ trình tục", meaning: "Thủ tục", textMnemonic: "手(tay) + 続(tiếp tục) = tiến trình thủ tục 📋" },
  { id: "n3-travel-37", courseId: "jlpt-n3", kanji: "入国", kana: "にゅうこく", romaji: "nyuukoku", hanViet: "Nhập quốc", meaning: "Nhập cảnh", textMnemonic: "入(vào) + 国(nước) = vào một nước 🛂" },
  { id: "n3-travel-38", courseId: "jlpt-n3", kanji: "出国", kana: "しゅっこく", romaji: "shukkoku", hanViet: "Xuất quốc", meaning: "Xuất cảnh", textMnemonic: "出(ra) + 国(nước) = ra khỏi nước 🛂" },
  { id: "n3-travel-39", courseId: "jlpt-n3", kanji: "観光案内", kana: "かんこうあんない", romaji: "kankou annai", hanViet: "Quan quang án nại", meaning: "Hướng dẫn du lịch", textMnemonic: "観光(du lịch) + 案内(hướng dẫn) = hướng dẫn viên du lịch ℹ️" },
  { id: "n3-travel-40", courseId: "jlpt-n3", kanji: "両替", kana: "りょうがえ", romaji: "ryougae", hanViet: "Lượng thế", meaning: "Đổi tiền", textMnemonic: "両(hai bên) + 替(đổi) = đổi qua lại hai bên 💱" },

  // Danh thắng & hoạt động
  { id: "n3-travel-41", courseId: "jlpt-n3", kanji: "神社", kana: "じんじゃ", romaji: "jinja", hanViet: "Thần xã", meaning: "Đền thờ Thần đạo", textMnemonic: "神(thần) + 社(đền) = nơi thờ thần ⛩️" },
  { id: "n3-travel-42", courseId: "jlpt-n3", kanji: "寺", kana: "てら", romaji: "tera", hanViet: "Tự", meaning: "Chùa", textMnemonic: "寺 = nơi thờ Phật 🏯" },
  { id: "n3-travel-43", courseId: "jlpt-n3", kanji: "城", kana: "しろ", romaji: "shiro", hanViet: "Thành", meaning: "Lâu đài/Thành", textMnemonic: "城 = nơi vua ở 🏯" },
  { id: "n3-travel-44", courseId: "jlpt-n3", kanji: "博物館", kana: "はくぶつかん", romaji: "hakubutsukan", hanViet: "Bác vật quán", meaning: "Bảo tàng", textMnemonic: "博物(bách vật) + 館(nhà) = nhà trưng bày mọi thứ 🏛️" },
  { id: "n3-travel-45", courseId: "jlpt-n3", kanji: "美術館", kana: "びじゅつかん", romaji: "bijutsukan", hanViet: "Mỹ thuật quán", meaning: "Bảo tàng nghệ thuật", textMnemonic: "美術(mỹ thuật) + 館(nhà) = nhà trưng bày nghệ thuật 🎨" },
  { id: "n3-travel-46", courseId: "jlpt-n3", kanji: "水族館", kana: "すいぞくかん", romaji: "suizokukan", hanViet: "Thủy tộc quán", meaning: "Thủy cung", textMnemonic: "水族(loài nước) + 館(nhà) = nhà cho cá 🐠" },
  { id: "n3-travel-47", courseId: "jlpt-n3", kanji: "動物園", kana: "どうぶつえん", romaji: "doubutsuen", hanViet: "Động vật viên", meaning: "Sở thú", textMnemonic: "動物(động vật) + 園(vườn) = vườn động vật 🦁" },
  { id: "n3-travel-48", courseId: "jlpt-n3", kanji: "公園", kana: "こうえん", romaji: "kouen", hanViet: "Công viên", meaning: "Công viên", textMnemonic: "公(công) + 園(vườn) = vườn công 🌳" },
  { id: "n3-travel-49", courseId: "jlpt-n3", kanji: "温泉", kana: "おんせん", romaji: "onsen", hanViet: "Ôn tuyền", meaning: "Suối nước nóng", textMnemonic: "温(ấm) + 泉(suối) = suối nước ấm ♨️" },
  { id: "n3-travel-50", courseId: "jlpt-n3", kanji: "山", kana: "やま", romaji: "yama", hanViet: "Sơn", meaning: "Núi", textMnemonic: "山 = núi cao 🏔️" },

  // Hành động cụ thể
  { id: "n3-travel-51", courseId: "jlpt-n3", kanji: "登る", kana: "のぼる", romaji: "noboru", hanViet: "Đăng", meaning: "Leo (núi)", textMnemonic: "登(trèo) + る = trèo lên cao ⛰️" },
  { id: "n3-travel-52", courseId: "jlpt-n3", kanji: "降りる", kana: "おりる", romaji: "oriru", hanViet: "Giáng", meaning: "Xuống (xe/núi)", textMnemonic: "降(xuống) + りる = đi xuống 🚶" },
  { id: "n3-travel-53", courseId: "jlpt-n3", kanji: "乗る", kana: "のる", romaji: "noru", hanViet: "Thừa", meaning: "Lên (xe)", textMnemonic: "乗(cưỡi) + る = cưỡi lên phương tiện 🚌" },
  { id: "n3-travel-54", courseId: "jlpt-n3", kanji: "泊まる", kana: "とまる", romaji: "tomaru", hanViet: "Bạc", meaning: "Nghỉ qua đêm", textMnemonic: "泊(đậu) + まる = đậu lại qua đêm 🛏️" },
  { id: "n3-travel-55", courseId: "jlpt-n3", kanji: "寄る", kana: "よる", romaji: "yoru", hanViet: "Ký", meaning: "Ghé qua", textMnemonic: "寄(gửi) + る = ghé qua một chỗ 🚏" },
  { id: "n3-travel-56", courseId: "jlpt-n3", kanji: "迷う", kana: "まよう", romaji: "mayou", hanViet: "Mê", meaning: "Lạc đường", textMnemonic: "迷(mê) + う = bị mê, lạc đường 🧭" },
  { id: "n3-travel-57", courseId: "jlpt-n3", kanji: "探す", kana: "さがす", romaji: "sagasu", hanViet: "Tầm", meaning: "Tìm kiếm", textMnemonic: "探(thăm) + す = đi tìm kiếm 🔍" },
  { id: "n3-travel-58", courseId: "jlpt-n3", kanji: "写真を撮る", kana: "しゃしんをとる", romaji: "shashin wo toru", hanViet: "Chiêm chân độc", meaning: "Chụp ảnh", textMnemonic: "写真(ảnh) + 撮(chụp) + る = chụp ảnh 📷" },
  { id: "n3-travel-59", courseId: "jlpt-n3", kanji: "観光する", kana: "かんこうする", romaji: "kankou suru", hanViet: "Quan quang", meaning: "Tham quan du lịch", textMnemonic: "観光(tham quan) + する = đi tham quan 🗺️" },
  { id: "n3-travel-60", courseId: "jlpt-n3", kanji: "散歩する", kana: "さんぽする", romaji: "sanpo suru", hanViet: "Tán bộ", meaning: "Đi dạo", textMnemonic: "散歩(tản bộ) + する = đi dạo bộ 🚶" },

  // Hướng & vị trí
  { id: "n3-travel-61", courseId: "jlpt-n3", kanji: "東", kana: "ひがし", romaji: "higashi", hanViet: "Đông", meaning: "Hướng đông", textMnemonic: "東 = hướng mặt trời mọc ➡️" },
  { id: "n3-travel-62", courseId: "jlpt-n3", kanji: "西", kana: "にし", romaji: "nishi", hanViet: "Tây", meaning: "Hướng tây", textMnemonic: "西 = hướng mặt trời lặn ⬅️" },
  { id: "n3-travel-63", courseId: "jlpt-n3", kanji: "南", kana: "みなみ", romaji: "minami", hanViet: "Nam", meaning: "Hướng nam", textMnemonic: "南 = hướng phía dưới ⬇️" },
  { id: "n3-travel-64", courseId: "jlpt-n3", kanji: "北", kana: "きた", romaji: "kita", hanViet: "Bắc", meaning: "Hướng bắc", textMnemonic: "北 = hướng phía trên ⬆️" },
  { id: "n3-travel-65", courseId: "jlpt-n3", kanji: "右", kana: "みぎ", romaji: "migi", hanViet: "Hữu", meaning: "Bên phải", textMnemonic: "右 = bên phải ➡️" },
  { id: "n3-travel-66", courseId: "jlpt-n3", kanji: "左", kana: "ひだり", romaji: "hidari", hanViet: "Tả", meaning: "Bên trái", textMnemonic: "左 = bên trái ⬅️" },
  { id: "n3-travel-67", courseId: "jlpt-n3", kanji: "前", kana: "まえ", romaji: "mae", hanViet: "Tiền", meaning: "Phía trước", textMnemonic: "前 = phía trước mặt ⬆️" },
  { id: "n3-travel-68", courseId: "jlpt-n3", kanji: "後ろ", kana: "うしろ", romaji: "ushiro", hanViet: "Hậu lộ", meaning: "Phía sau", textMnemonic: "後(sau) + ろ = phía sau lưng ⬇️" },
  { id: "n3-travel-69", courseId: "jlpt-n3", kanji: "間", kana: "あいだ", romaji: "aida", hanViet: "Gian", meaning: "Giữa/Khoảng", textMnemonic: "間 = khoảng giữa hai bên ↔️" },
  { id: "n3-travel-70", courseId: "jlpt-n3", kanji: "隣", kana: "となり", romaji: "tonari", hanViet: "Lân", meaning: "Bên cạnh", textMnemonic: "隣 = bên cạnh sát vách 🏘️" },

  // Từ vựng bổ sung
  { id: "n3-travel-71", courseId: "jlpt-n3", kanji: "地図", kana: "ちず", romaji: "chizu", hanViet: "Địa đồ", meaning: "Bản đồ", textMnemonic: "地(đất) + 図(bản vẽ) = bản vẽ đất đai 🗺️" },
  { id: "n3-travel-72", courseId: "jlpt-n3", kanji: "道", kana: "みち", romaji: "michi", hanViet: "Đạo", meaning: "Đường/Con đường", textMnemonic: "道 = đường đi 🚶" },
  { id: "n3-travel-73", courseId: "jlpt-n3", kanji: "橋", kana: "はし", romaji: "hashi", hanViet: "Kiều", meaning: "Cầu", textMnemonic: "橋 = cầu bắc qua sông 🌉" },
  { id: "n3-travel-74", courseId: "jlpt-n3", kanji: "海", kana: "うみ", romaji: "umi", hanViet: "Hải", meaning: "Biển", textMnemonic: "海 = biển rộng mênh mông 🌊" },
  { id: "n3-travel-75", courseId: "jlpt-n3", kanji: "川", kana: "かわ", romaji: "kawa", hanViet: "Xuyên", meaning: "Sông", textMnemonic: "川 = dòng sông chảy 🏞️" },
  { id: "n3-travel-76", courseId: "jlpt-n3", kanji: "湖", kana: "みずうみ", romaji: "mizuumi", hanViet: "Hồ", meaning: "Hồ nước", textMnemonic: "湖 = hồ nước lớn 🏞️" },
  { id: "n3-travel-77", courseId: "jlpt-n3", kanji: "島", kana: "しま", romaji: "shima", hanViet: "Đảo", meaning: "Hòn đảo", textMnemonic: "島 = hòn đảo giữa biển 🏝️" },
  { id: "n3-travel-78", courseId: "jlpt-n3", kanji: "砂浜", kana: "すなはま", romaji: "sunahama", hanViet: "Sa biên", meaning: "Bãi cát", textMnemonic: "砂(cát) + 浜(bãi biển) = bãi cát biển 🏖️" },
  { id: "n3-travel-79", courseId: "jlpt-n3", kanji: "景色", kana: "けしき", romaji: "keshiki", hanViet: "Cảnh sắc", meaning: "Phong cảnh", textMnemonic: "景(cảnh) + 色(sắc) = màu sắc của cảnh 🏞️" },
  { id: "n3-travel-80", courseId: "jlpt-n3", kanji: "眺め", kana: "ながめ", romaji: "nagame", hanViet: "Trĩ", meaning: "Tầm nhìn/Quang cảnh", textMnemonic: "眺(nhìn xa) + め = nhìn ra xa 👀" },

  // Thời gian du lịch
  { id: "n3-travel-81", courseId: "jlpt-n3", kanji: "夏休み", kana: "なつやすみ", romaji: "natsuyasumi", hanViet: "Hạ hưu", meaning: "Kỳ nghỉ hè", textMnemonic: "夏(hè) + 休み(nghỉ) = nghỉ hè ☀️" },
  { id: "n3-travel-82", courseId: "jlpt-n3", kanji: "冬休み", kana: "ふゆやすみ", romaji: "fuyuyasumi", hanViet: "Đông hưu", meaning: "Kỳ nghỉ đông", textMnemonic: "冬(đông) + 休み(nghỉ) = nghỉ đông ❄️" },
  { id: "n3-travel-83", courseId: "jlpt-n3", kanji: "正月", kana: "しょうがつ", romaji: "shougatsu", hanViet: "Chính nguyệt", meaning: "Tết Nguyên Đán", textMnemonic: "正(chính) + 月(tháng) = tháng đầu tiên của năm 🎍" },
  { id: "n3-travel-84", courseId: "jlpt-n3", kanji: "連休", kana: "れんきゅう", romaji: "renkyuu", hanViet: "Liên hưu", meaning: "Kỳ nghỉ dài", textMnemonic: "連(nối) + 休(nghỉ) = nghỉ nối tiếp nhiều ngày 🌴" },
  { id: "n3-travel-85", courseId: "jlpt-n3", kanji: "週末", kana: "しゅうまつ", romaji: "shuumatsu", hanViet: "Chu mạt", meaning: "Cuối tuần", textMnemonic: "週(tuần) + 末(cuối) = cuối tuần 📅" },
  { id: "n3-travel-86", courseId: "jlpt-n3", kanji: "お土産", kana: "おみやげ", romaji: "omiyage", hanViet: "Thổ sản", meaning: "Quà lưu niệm", textMnemonic: "お(kính ngữ) + 土産(sản vật đất) = sản vật từ vùng đất 🎁" },
  { id: "n3-travel-87", courseId: "jlpt-n3", kanji: "記念品", kana: "きねんひん", romaji: "kinenhin", hanViet: "Kỷ niệm phẩm", meaning: "Quà kỷ niệm", textMnemonic: "記念(kỷ niệm) + 品(vật) = vật kỷ niệm 🎁" },
  { id: "n3-travel-88", courseId: "jlpt-n3", kanji: "記念写真", kana: "きねんしゃしん", romaji: "kinen shashin", hanViet: "Kỷ niệm chiêm chân", meaning: "Ảnh kỷ niệm", textMnemonic: "記念(kỷ niệm) + 写真(ảnh) = ảnh lưu niệm 📸" },
  { id: "n3-travel-89", courseId: "jlpt-n3", kanji: "予約する", kana: "よやくする", romaji: "yoyaku suru", hanViet: "Dự ước", meaning: "Đặt trước", textMnemonic: "予約(đặt trước) + する = đặt vé, phòng 📅" },
  { id: "n3-travel-90", courseId: "jlpt-n3", kanji: "入国審査", kana: "にゅうこくしんさ", romaji: "nyuukoku shinsa", hanViet: "Nhập quốc thẩm tra", meaning: "Kiểm tra nhập cảnh", textMnemonic: "入国(nhập cảnh) + 審査(kiểm tra) = kiểm tra khi vào nước 🛂" },

  // Từ vựng du lịch nâng cao
  { id: "n3-travel-91", courseId: "jlpt-n3", kanji: "ガイドブック", kana: "ガイドブック", romaji: "gaido bukku", hanViet: "(ngoại lai)", meaning: "Sách hướng dẫn", textMnemonic: "Guide + book = sách hướng dẫn 📖" },
  { id: "n3-travel-92", courseId: "jlpt-n3", kanji: "ガイド", kana: "ガイド", romaji: "gaido", hanViet: "(ngoại lai)", meaning: "Hướng dẫn viên", textMnemonic: "Guide = hướng dẫn viên 👨‍🏫" },
  { id: "n3-travel-93", courseId: "jlpt-n3", kanji: "ツアー", kana: "ツアー", romaji: "tsuaa", hanViet: "(ngoại lai)", meaning: "Tour du lịch", textMnemonic: "Tour = chuyến đi theo nhóm 🚌" },
  { id: "n3-travel-94", courseId: "jlpt-n3", kanji: "バックパック", kana: "バックパック", romaji: "bakkupakku", hanViet: "(ngoại lai)", meaning: "Ba lô du lịch", textMnemonic: "Backpack = ba lô 🎒" },
  { id: "n3-travel-95", courseId: "jlpt-n3", kanji: "クレジットカード", kana: "クレジットカード", romaji: "kurejitto kaado", hanViet: "(ngoại lai)", meaning: "Thẻ tín dụng", textMnemonic: "Credit card = thẻ tín dụng 💳" },
  { id: "n3-travel-96", courseId: "jlpt-n3", kanji: "現金", kana: "げんきん", romaji: "genkin", hanViet: "Hiện kim", meaning: "Tiền mặt", textMnemonic: "現(bây giờ) + 金(tiền) = tiền có sẵn 💴" },
  { id: "n3-travel-97", courseId: "jlpt-n3", kanji: "小遣い", kana: "こづかい", romaji: "kozukai", hanViet: "Tiểu sai", meaning: "Tiền tiêu vặt", textMnemonic: "小(nhỏ) + 遣い(dùng) = tiền dùng nhỏ 💰" },
  { id: "n3-travel-98", courseId: "jlpt-n3", kanji: "旅行会社", kana: "りょこうがいしゃ", romaji: "ryokou gaisha", hanViet: "Lữ hành hội xã", meaning: "Công ty du lịch", textMnemonic: "旅行(du lịch) + 会社(công ty) = công ty du lịch 🏢" },
  { id: "n3-travel-99", courseId: "jlpt-n3", kanji: "旅館に泊まる", kana: "りょかんにとまる", romaji: "ryokan ni tomaru", hanViet: "Lữ quán bạc", meaning: "Nghỉ ở nhà trọ", textMnemonic: "旅館(nhà trọ) + に(ở) + 泊まる(nghỉ) = nghỉ ở ryokan 🏯" },
  { id: "n3-travel-100", courseId: "jlpt-n3", kanji: "観光バス", kana: "かんこうバス", romaji: "kankou basu", hanViet: "Quan quang", meaning: "Xe buýt tham quan", textMnemonic: "観光(du lịch) + バス(xe buýt) = xe buýt tham quan 🚌" },

  // Câu cuối
  { id: "n3-travel-101", courseId: "jlpt-n3", kanji: "行きたい", kana: "いきたい", romaji: "ikitai", hanViet: "Hành khứ", meaning: "Muốn đi", textMnemonic: "行(đi) + きたい = muốn đi 💭" },
  { id: "n3-travel-102", courseId: "jlpt-n3", kanji: "行こう", kana: "いこう", romaji: "ikou", meaning: "Hãy đi nào", textMnemonic: "行(đi) + こう = hãy đi nào 🚶" },
  { id: "n3-travel-103", courseId: "jlpt-n3", kanji: "行きます", kana: "いきます", romaji: "ikimasu", hanViet: "Hành", meaning: "Tôi đi", textMnemonic: "行(đi) + きます = đang đi 🚶" },
  { id: "n3-travel-104", courseId: "jlpt-n3", kanji: "楽しかった", kana: "たのしかった", romaji: "tanoshikatta", hanViet: "Lạc thủ", meaning: "Đã vui", textMnemonic: "楽(vui) + しかった = đã vui 😊" },
  { id: "n3-travel-105", courseId: "jlpt-n3", kanji: "素晴らしい", kana: "すばらしい", romaji: "subarashii", hanViet: "Tuyệt", meaning: "Tuyệt vời", textMnemonic: "素晴(tuyệt vời) + らしい = tuyệt vời ✨" },
  { id: "n3-travel-106", courseId: "jlpt-n3", kanji: "美しい", kana: "うつくしい", romaji: "utsukushii", hanViet: "Mỹ", meaning: "Đẹp đẽ", textMnemonic: "美(đẹp) + しい = rất đẹp 🌸" },
  { id: "n3-travel-107", courseId: "jlpt-n3", kanji: "驚いた", kana: "おどろいた", romaji: "odoroita", hanViet: "Kinh kinh", meaning: "Đã ngạc nhiên", textMnemonic: "驚(giật mình) + いた = đã ngạc nhiên 😮" },
  { id: "n3-travel-108", courseId: "jlpt-n3", kanji: "感動した", kana: "かんどうした", romaji: "kandou shita", hanViet: "Cảm động", meaning: "Đã xúc động", textMnemonic: "感 động(xúc động) + した = đã xúc động 😢" },
  { id: "n3-travel-109", courseId: "jlpt-n3", kanji: "疲れた", kana: "つかれた", romaji: "tsukareta", hanViet: "Bì lao", meaning: "Đã mệt", textMnemonic: "疲(mệt) + れた = đã mệt 😓" },
  { id: "n3-travel-110", courseId: "jlpt-n3", kanji: "また行きたい", kana: "またいきたい", romaji: "mata ikitai", hanViet: "Phục hành", meaning: "Muốn đi lại", textMnemonic: "また(lại) + 行きたい(muốn đi) = muốn đi lần nữa 💭" },

  // Mở rộng
  { id: "n3-travel-111", courseId: "jlpt-n3", kanji: "エレベーター", kana: "エレベーター", romaji: "erebeetaa", hanViet: "(ngoại lai)", meaning: "Thang máy", textMnemonic: "Elevator = thang máy 🛗" },
  { id: "n3-travel-112", courseId: "jlpt-n3", kanji: "階段", kana: "かいだん", romaji: "kaidan", hanViet: "Giai đoạn", meaning: "Cầu thang", textMnemonic: "階(tầng) + 段(bậc) = bậc lên tầng 🪜" },
  { id: "n3-travel-113", courseId: "jlpt-n3", kanji: "出口", kana: "でぐち", romaji: "deguchi", hanViet: "Xuất khẩu", meaning: "Lối ra", textMnemonic: "出(ra) + 口(cửa) = cửa đi ra 🚪" },
  { id: "n3-travel-114", courseId: "jlpt-n3", kanji: "入口", kana: "いりぐち", romaji: "iriguchi", hanViet: "Nhập khẩu", meaning: "Lối vào", textMnemonic: "入(vào) + 口(cửa) = cửa đi vào 🚪" },
  { id: "n3-travel-115", courseId: "jlpt-n3", kanji: "非常口", kana: "ひじょうぐち", romaji: "hijouguchi", hanViet: "Phi thường khẩu", meaning: "Cửa thoát hiểm", textMnemonic: "非常(khẩn cấp) + 口(cửa) = cửa khẩn cấp 🚪" },
  { id: "n3-travel-116", courseId: "jlpt-n3", kanji: "トイレ", kana: "トイレ", romaji: "toire", hanViet: "(ngoại lai)", meaning: "Nhà vệ sinh", textMnemonic: "Toilet = nhà vệ sinh 🚻" },
  { id: "n3-travel-117", courseId: "jlpt-n3", kanji: "お手洗い", kana: "おてあらい", romaji: "otearai", hanViet: "Thủ tẩy", meaning: "Nhà vệ sinh (kính ngữ)", textMnemonic: "お(kính ngữ) + 手洗い(rửa tay) = nơi rửa tay 🚻" },
  { id: "n3-travel-118", courseId: "jlpt-n3", kanji: "WiFi", kana: "ワイファイ", romaji: "waifai", hanViet: "(ngoại lai)", meaning: "WiFi", textMnemonic: "WiFi = mạng không dây 📶" },
  { id: "n3-travel-119", courseId: "jlpt-n3", kanji: "充電", kana: "じゅうでん", romaji: "juuden", hanViet: "Trữ điện", meaning: "Sạc (điện)", textMnemonic: "充(đầy) + 電(điện) = nạp điện đầy 🔌" },
  { id: "n3-travel-120", courseId: "jlpt-n3", kanji: "忘れ物", kana: "わすれもの", romaji: "wasuremono", hanViet: "Vong trí vật", meaning: "Đồ bỏ quên", textMnemonic: "忘れ(quên) + 物(đồ) = đồ bị quên 🎒" },
];
