/**
 * JLPT N3 - Từ vựng Nâng cao
 * Từ vựng N3 mở rộng về các chủ đề phức tạp
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_ADVANCED: Word[] = [
  // Chính trị & Xã hội
  { id: "n3-adv-1", courseId: "jlpt-n3", kanji: "政治", kana: "せいじ", romaji: "seiji", hanViet: "Chính trị", meaning: "Chính trị", textMnemonic: "政治 = chính trị / việc nước 🏛️" },
  { id: "n3-adv-2", courseId: "jlpt-n3", kanji: "政府", kana: "せいふ", romaji: "seifu", hanViet: "Chính phủ", meaning: "Chính phủ", textMnemonic: "政府 = chính phủ / cơ quan lãnh đạo 🏛️" },
  { id: "n3-adv-3", courseId: "jlpt-n3", kanji: "国会", kana: "こっかい", romaji: "kokkai", hanViet: "Quốc hội", meaning: "Quốc hội", textMnemonic: "国会 = quốc hội / nghị viện 📜" },
  { id: "n3-adv-4", courseId: "jlpt-n3", kanji: "首相", kana: "しゅしょう", romaji: "shushou", hanViet: "Thủ tướng", meaning: "Thủ tướng", textMnemonic: "首相 = thủ tướng / người đứng đầu chính phủ 👔" },
  { id: "n3-adv-5", courseId: "jlpt-n3", kanji: "大臣", kana: "だいじん", romaji: "daijin", hanViet: "Đại trí", meaning: "Bộ trưởng", textMnemonic: "大臣 = bộ trưởng / quan lớn trong chính phủ 👔" },
  { id: "n3-adv-6", courseId: "jlpt-n3", kanji: "選挙", kana: "せんきょ", romaji: "senkyo", hanViet: "Tuyển cử", meaning: "Bầu cử", textMnemonic: "選挙 = bầu cử / cuộc bầu chọn 🗳️" },
  { id: "n3-adv-7", courseId: "jlpt-n3", kanji: "投票", kana: "とうひょう", romaji: "touhyou", hanViet: "Đầu phiếu", meaning: "Bỏ phiếu", textMnemonic: "投票 = bỏ phiếu / gửi phiếu bầu 🗳️" },
  { id: "n3-adv-8", courseId: "jlpt-n3", kanji: "政党", kana: "せいとう", romaji: "seitou", hanViet: "Chính đảng", meaning: "Đảng phái", textMnemonic: "政党 = đảng phái / tổ chức chính trị 🏛️" },
  { id: "n3-adv-9", courseId: "jlpt-n3", kanji: "政策", kana: "せいさく", romaji: "seisaku", hanViet: "Chính sách", meaning: "Chính sách", textMnemonic: "政策 = chính sách / biện pháp 📋" },
  { id: "n3-adv-10", courseId: "jlpt-n3", kanji: "法案", kana: "ほうあん", romaji: "houan", hanViet: "Pháp án", meaning: "Dự luật", textMnemonic: "法案 = dự luật / đề xuất luật 📜" },

  // Pháp luật & Tư pháp
  { id: "n3-adv-11", courseId: "jlpt-n3", kanji: "法律", kana: "ほうりつ", romaji: "houritsu", hanViet: "Pháp luật", meaning: "Luật pháp", textMnemonic: "法律 = luật pháp / quy tắc ⚖️" },
  { id: "n3-adv-12", courseId: "jlpt-n3", kanji: "裁判所", kana: "さいばんしょ", romaji: "saibansho", hanViet: "Tư pháp sở", meaning: "Tòa án", textMnemonic: "裁判所 = tòa án / nơi xét xử ⚖️" },
  { id: "n3-adv-13", courseId: "jlpt-n3", kanji: "裁判", kana: "さいばん", romaji: "saiban", hanViet: "Tư pháp", meaning: "Xét xử", textMnemonic: "裁判 = xét xử / phiên tòa ⚖️" },
  { id: "n3-adv-14", courseId: "jlpt-n3", kanji: "罪", kana: "つみ", romaji: "tsumi", hanViet: "Tội", meaning: "Tội lỗi", textMnemonic: "罪 = tội lỗi / phạm tội 🚨" },
  { id: "n3-adv-15", courseId: "jlpt-n3", kanji: "犯人", kana: "はんにん", romaji: "hannin", hanViet: "Phạm nhân", meaning: "Kẻ phạm tội", textMnemonic: "犯人 = thủ phạm / người phạm tội 🚨" },
  { id: "n3-adv-16", courseId: "jlpt-n3", kanji: "逮捕", kana: "たいほ", romaji: "taiho", hanViet: "Đỗ bắt", meaning: "Bắt giữ", textMnemonic: "逮捕 = bắt giữ / tạm giam 🚔" },
  { id: "n3-adv-17", courseId: "jlpt-n3", kanji: "刑務所", kana: "けいむしょ", romaji: "keimusho", hanViet: "Hình vụ sở", meaning: "Nhà tù", textMnemonic: "刑務所 = nhà tù / trại giam 🏢" },
  { id: "n3-adv-18", courseId: "jlpt-n3", kanji: "弁護士", kana: "べんごし", romaji: "bengoshi", hanViet: "Biện lý sĩ", meaning: "Luật sư", textMnemonic: "弁護士 = luật sư / người bào chữa 👔" },
  { id: "n3-adv-19", courseId: "jlpt-n3", kanji: "契約", kana: "けいやく", romaji: "keiyaku", hanViet: "Ký ước", meaning: "Hợp đồng", textMnemonic: "契約 = hợp đồng / thỏa thuận 📝" },
  { id: "n3-adv-20", courseId: "jlpt-n3", kanji: "権利", kana: "けんり", romaji: "kenri", hanViet: "Quyền lợi", meaning: "Quyền lợi", textMnemonic: "権利 = quyền lợi / quyền của mình ⚖️" },

  // Kinh tế & Tài chính
  { id: "n3-adv-21", courseId: "jlpt-n3", kanji: "経済", kana: "けいざい", romaji: "keizai", hanViet: "Kinh tế", meaning: "Kinh tế", textMnemonic: "経済 = kinh tế / tiền bạc 💰" },
  { id: "n3-adv-22", courseId: "jlpt-n3", kanji: "金融", kana: "きんゆう", romaji: "kinyuu", hanViet: "Kim dung", meaning: "Tài chính", textMnemonic: "金融 = tài chính / ngân hàng 🏦" },
  { id: "n3-adv-23", courseId: "jlpt-n3", kanji: "投資", kana: "とうし", romaji: "toushi", hanViet: "Đầu tư", meaning: "Đầu tư", textMnemonic: "投資 = đầu tư / bỏ tiền vào 📈" },
  { id: "n3-adv-24", courseId: "jlpt-n3", kanji: "株", kana: "かぶ", romaji: "kabu", hanViet: "Cổ", meaning: "Cổ phiếu", textMnemonic: "株 = cổ phiếu / cổ phần 📈" },
  { id: "n3-adv-25", courseId: "jlpt-n3", kanji: "株式", kana: "かぶしき", romaji: "kabushiki", hanViet: "Cổ thị", meaning: "Cổ phần", textMnemonic: "株式 = cổ phần / cổ phiếu 📈" },
  { id: "n3-adv-26", courseId: "jlpt-n3", kanji: "保険", kana: "ほけん", romaji: "hoken", hanViet: "Bảo hiểm", meaning: "Bảo hiểm", textMnemonic: "保険 = bảo hiểm / phòng ngừa rủi ro 🛡️" },
  { id: "n3-adv-27", courseId: "jlpt-n3", kanji: "税金", kana: "ぜいきん", romaji: "zeikin", hanViet: "Thuế kim", meaning: "Thuế", textMnemonic: "税金 = thuế / tiền nộp cho nhà nước 💸" },
  { id: "n3-adv-28", courseId: "jlpt-n3", kanji: "予算", kana: "よさん", romaji: "yosan", hanViet: "Dự toán", meaning: "Ngân sách", textMnemonic: "予算 = ngân sách / kế hoạch tài chính 💰" },
  { id: "n3-adv-29", courseId: "jlpt-n3", kanji: "赤字", kana: "あかじ", romaji: "akaji", hanViet: "Xích tự", meaning: "Thâm hụt", textMnemonic: "赤字 = thâm hụt / nợ 📉" },
  { id: "n3-adv-30", courseId: "jlpt-n3", kanji: "黑字", kana: "くろじ", romaji: "kuroji", hanViet: "Hắc tự", meaning: "Lãi", textMnemonic: "黒字 = lãi / có lời 📈" },

  // Kinh doanh & Công việc
  { id: "n3-adv-31", courseId: "jlpt-n3", kanji: "企業", kana: "きぎょう", romaji: "kigyou", hanViet: "Nghiệp vụ", meaning: "Doanh nghiệp", textMnemonic: "企業 = doanh nghiệp / công ty 🏢" },
  { id: "n3-adv-32", courseId: "jlpt-n3", kanji: "会社", kana: "かいしゃ", romaji: "kaisha", hanViet: "Hội xã", meaning: "Công ty", textMnemonic: "会社 = công ty / nơi làm việc 🏢" },
  { id: "n3-adv-33", courseId: "jlpt-n3", kanji: "社員", kana: "しゃいん", romaji: "shain", hanViet: "Xã viên", meaning: "Nhân viên công ty", textMnemonic: "社員 = nhân viên công ty (không phải chủ) 👔" },
  { id: "n3-adv-34", courseId: "jlpt-n3", kanji: "新入社員", kana: "しんにゅうしゃいん", romaji: "shinnyuusha in", hanViet: "Tân nhập xã viên", meaning: "Nhân viên mới", textMnemonic: "新入社員 = nhân viên mới vào công ty 🆕" },
  { id: "n3-adv-35", courseId: "jlpt-n3", kanji: "採用", kana: "さいよう", romaji: "saiyou", hanViet: "Tái dụng", meaning: "Tuyển dụng", textMnemonic: "採用 = tuyển dụng / nhận vào làm 👔" },
  { id: "n3-adv-36", courseId: "jlpt-n3", kanji: "解雇", kana: "かいこ", romaji: "kaiko", hanViet: "Giải khể", meaning: "Sa thải", textMnemonic: "解雇 = sa thải / đuổi việc 🚫" },
  { id: "n3-adv-37", courseId: "jlpt-n3", kanji: "辞職", kana: "しょく", romaji: "shokushoku", hanViet: "Từ chức", meaning: "Nghỉ việc", textMnemonic: "辞職 = nghỉ việc / từ chức 👋" },
  { id: "n3-adv-38", courseId: "jlpt-n3", kanji: "昇進", kana: "しょうしん", romaji: "shoushin", hanViet: "Thăng tiến", meaning: "Thăng chức", textMnemonic: "昇進 = thăng chức / lên chức ⬆️" },
  { id: "n3-adv-39", courseId: "jlpt-n3", kanji: "減給", kana: "げんきゅう", romaji: "genkyuu", hanViet: "Giảm cung", meaning: "Giảm lương", textMnemonic: "減給 = giảm lương / bớt tiền lương 💸" },
  { id: "n3-adv-40", courseId: "jlpt-n3", kanji: "ボーナス", kana: "ボーナス", romaji: "bonasu", hanViet: "(ngoại lai)", meaning: "Tiền thưởng", textMnemonic: "ボーナス = tiền thưởng / lương tháng 13 💰" },

  // Khoa học & Nghiên cứu
  { id: "n3-adv-41", courseId: "jlpt-n3", kanji: "科学", kana: "かがく", romaji: "kagaku", hanViet: "Khoa học", meaning: "Khoa học", textMnemonic: "科学 = khoa học / nghiên cứu 🔬" },
  { id: "n3-adv-42", courseId: "jlpt-n3", kanji: "研究", kana: "けんきゅう", romaji: "kenkyuu", hanViet: "Nghiên cứu", meaning: "Nghiên cứu", textMnemonic: "研究 = nghiên cứu / tìm hiểu 🔬" },
  { id: "n3-adv-43", courseId: "jlpt-n3", kanji: "実験", kana: "じっけん", romaji: "jikken", hanViet: "Thực nghiệm", meaning: "Thí nghiệm", textMnemonic: "実験 = thí nghiệm / thử nghiệm 🧪" },
  { id: "n3-adv-44", courseId: "jlpt-n3", kanji: "仮説", kana: "かせつ", romaji: "kasetsu", hanViet: "Giả thuyết", meaning: "Giả thuyết", textMnemonic: "仮説 = giả thuyết / đề xuất 🤔" },
  { id: "n3-adv-45", courseId: "jlpt-n3", kanji: "結論", kana: "けつろん", romaji: "ketsuron", hanViet: "Kết luận", meaning: "Kết luận", textMnemonic: "結論 = kết luận / kết quả cuối cùng ✅" },
  { id: "n3-adv-46", courseId: "jlpt-n3", kanji: "理論", kana: "りろん", romaji: "riron", hanViet: "Lý luận", meaning: "Lý thuyết", textMnemonic: "理論 = lý thuyết / học thuyết 📚" },
  { id: "n3-adv-47", courseId: "jlpt-n3", kanji: "分析", kana: "ぶんせき", romaji: "bunseki", hanViet: "Phân tích", meaning: "Phân tích", textMnemonic: "分析 = phân tích / chia nhỏ ra nghiên cứu 🔍" },
  { id: "n3-adv-48", courseId: "jlpt-n3", kanji: "調査", kana: "ちょうさ", romaji: "chousa", hanViet: "Điều tra", meaning: "Khảo sát", textMnemonic: "調査 = khảo sát / điều tra 📊" },
  { id: "n3-adv-49", courseId: "jlpt-n3", kanji: "統計", kana: "とうけい", romaji: "toukei", hanViet: "Thống kế", meaning: "Thống kê", textMnemonic: "統計 = thống kê / số liệu 📊" },
  { id: "n3-adv-50", courseId: "jlpt-n3", kanji: "証拠", kana: "しょうこ", romaji: "shouko", hanViet: "Chứng cứ", meaning: "Bằng chứng", textMnemonic: "証拠 = bằng chứng / chứng cứ 🔍" },

  // Y tế & Sức khỏe
  { id: "n3-adv-51", courseId: "jlpt-n3", kanji: "病院", kana: "びょういん", romaji: "byouin", hanViet: "Bệnh viện", meaning: "Bệnh viện", textMnemonic: "病院 = bệnh viện / nơi chữa bệnh 🏥" },
  { id: "n3-adv-52", courseId: "jlpt-n3", kanji: "医者", kana: "いしゃ", romaji: "isha", hanViet: "Y sĩ", meaning: "Bác sĩ", textMnemonic: "医者 = bác sĩ / người chữa bệnh 👨‍⚕️" },
  { id: "n3-adv-53", courseId: "jlpt-n3", kanji: "护士", kana: "かんごし", romaji: "kangoshi", hanViet: "Hộ sinh", meaning: "Y tá", textMnemonic: "看護師 = y tá / người chăm sóc bệnh nhân 👩‍⚕️" },
  { id: "n3-adv-54", courseId: "jlpt-n3", kanji: "診察", kana: "しんさつ", romaji: "shinsatsu", hanViet: "Chẩn trắc", meaning: "Khám bệnh", textMnemonic: "診察 = khám bệnh / kiểm tra sức khỏe stethoscope 👨‍⚕️" },
  { id: "n3-adv-55", courseId: "jlpt-n3", kanji: "診断", kana: "しんだん", romaji: "shindan", hanViet: "Chẩn đoán", meaning: "Chẩn đoán", textMnemonic: "診断 = chẩn đoán / kết luận bệnh 📋" },
  { id: "n3-adv-56", courseId: "jlpt-n3", kanji: "手術", kana: "しゅじゅつ", romaji: "shujutsu", hanViet: "Thủ thuật", meaning: "Phẫu thuật", textMnemonic: "手術 = phẫu thuật / mổ xẻ 🏥" },
  { id: "n3-adv-57", courseId: "jlpt-n3", kanji: "入院", kana: "にゅういん", romaji: "nyuuin", hanViet: "Nhập viện", meaning: "Nhập viện", textMnemonic: "入院 = nhập viện / nằm viện 🏥" },
  { id: "n3-adv-58", courseId: "jlpt-n3", kanji: "退院", kana: "たいいん", romaji: "taiin", hanViet: "Thoát viện", meaning: "Xuất viện", textMnemonic: "退院 = xuất viện / ra viện 🏠" },
  { id: "n3-adv-59", courseId: "jlpt-n3", kanji: "薬", kana: "くすり", romaji: "kusuri", hanViet: "Dược", meaning: "Thuốc", textMnemonic: "薬 = thuốc / dược phẩm 💊" },
  { id: "n3-adv-60", courseId: "jlpt-n3", kanji: "副作用", kana: "ふくさよう", romaji: "fukusayou", hanViet: "Phục tác dụng", meaning: "Tác dụng phụ", textMnemonic: "副作用 = tác dụng phụ / ảnh hưởng xấu 💊" },

  // Môi trường & Thiên nhiên
  { id: "n3-adv-61", courseId: "jlpt-n3", kanji: "環境", kana: "かんきょう", romaji: "kankyou", hanViet: "Hoàn cảnh", meaning: "Môi trường", textMnemonic: "環境 = môi trường / hoàn cảnh 🌍" },
  { id: "n3-adv-62", courseId: "jlpt-n3", kanji: "污染", kana: "おせん", romaji: "osen", hanViet: "Ô nhiễm", meaning: "Ô nhiễm", textMnemonic: "污染 = ô nhiễm / bẩn ☢️" },
  { id: "n3-adv-63", courseId: "jlpt-n3", kanji: "環境問題", kana: "かんきょうもんだい", romaji: "kankyou mondai", hanViet: "Hoàn cảnh vấn đề", meaning: "Vấn đề môi trường", textMnemonic: "環境問題 = vấn đề môi trường 🌍" },
  { id: "n3-adv-64", courseId: "jlpt-n3", kanji: "資源", kana: "しげん", romaji: "shigen", hanViet: "Tài nguyên", meaning: "Tài nguyên", textMnemonic: "資源 = tài nguyên / vật có ích 🌿" },
  { id: "n3-adv-65", courseId: "jlpt-n3", kanji: "エネルギー", kana: "エネルギー", romaji: "enerugii", hanViet: "(ngoại lai)", meaning: "Năng lượng", textMnemonic: "エネルギー = năng lượng / nguồn sức mạnh ⚡" },
  { id: "n3-adv-66", courseId: "jlpt-n3", kanji: "地球", kana: "ちきゅう", romaji: "chikyuu", hanViet: "Địa cầu", meaning: "Trái đất", textMnemonic: "地球 = trái đất / hành tinh xanh 🌍" },
  { id: "n3-adv-67", courseId: "jlpt-n3", kanji: "気候変動", kana: "きこうへんどう", romaji: "kikou hendou", hanViet: "Khí hậu biến động", meaning: "Biến đổi khí hậu", textMnemonic: "気候変動 = biến đổi khí hậu / nóng lên toàn cầu 🌡️" },
  { id: "n3-adv-68", courseId: "jlpt-n3", kanji: "台風", kana: "たいふう", romaji: "taifuu", hanViet: "Đài phong", meaning: "Bão", textMnemonic: "台風 = bão / cuồng phong 🌀" },
  { id: "n3-adv-69", courseId: "jlpt-n3", kanji: "地震", kana: "じしん", romaji: "jishin", hanViet: "Địa chấn", meaning: "Động đất", textMnemonic: "地震 = động đất / ranh lửa earthquake 🌋" },
  { id: "n3-adv-70", courseId: "jlpt-n3", kanji: "火山", kana: "かざん", romaji: "kazan", hanViet: "Hỏa sơn", meaning: "Núi lửa", textMnemonic: "火山 = núi lửa / núi phun 🌋" },

  // Tự nhiên & Vũ trụ
  { id: "n3-adv-71", courseId: "jlpt-n3", kanji: "宇宙", kana: "うちゅう", romaji: "uchuu", hanViet: "Vũ trụ", meaning: "Vũ trụ", textMnemonic: "宇宙 = vũ trụ / không gian 🌌" },
  { id: "n3-adv-72", courseId: "jlpt-n3", kanji: "星", kana: "ほし", romaji: "hoshi", hanViet: "Tinh", meaning: "Sao / Ngôi sao", textMnemonic: "星 = ngôi sao / hành tinh ⭐" },
  { id: "n3-adv-73", courseId: "jlpt-n3", kanji: "太陽", kana: "たいよう", romaji: "taiyou", hanViet: "Thái dương", meaning: "Mặt trời", textMnemonic: "太陽 = mặt trời ☀️" },
  { id: "n3-adv-74", courseId: "jlpt-n3", kanji: "月", kana: "つき", romaji: "tsuki", hanViet: "Nguyệt", meaning: "Mặt trăng", textMnemonic: "月 = mặt trăng / ánh trăng 🌙" },
  { id: "n3-adv-75", courseId: "jlpt-n3", kanji: "自然", kana: "しぜん", romaji: "shizen", hanViet: "Tự nhiên", meaning: "Tự nhiên", textMnemonic: "自然 = tự nhiên / thiên nhiên 🌳" },
  { id: "n3-adv-76", courseId: "jlpt-n3", kanji: "森林", kana: "しんりん", romaji: "shinrin", hanViet: "Sâm lâm", meaning: "Rừng", textMnemonic: "森林 = rừng / cây cối rậm rạp 🌲" },
  { id: "n3-adv-77", courseId: "jlpt-n3", kanji: "川", kana: "かわ", romaji: "kawa", hanViet: "Xuyên", meaning: "Sông", textMnemonic: "川 = sông / dòng nước chảy 🌊" },
  { id: "n3-adv-78", courseId: "jlpt-n3", kanji: "海", kana: "うみ", romaji: "umi", hanViet: "Hải", meaning: "Biển", textMnemonic: "海 = biển / đại dương 🌊" },
  { id: "n3-adv-79", courseId: "jlpt-n3", kanji: "山", kana: "やま", romaji: "yama", hanViet: "Sơn", meaning: "Núi", textMnemonic: "山 = núi / đỉnh núi 🏔️" },
  { id: "n3-adv-80", courseId: "jlpt-n3", kanji: "岛", kana: "しま", romaji: "shima", hanViet: "Đảo", meaning: "Đảo / Hòn đảo", textMnemonic: "島 = đảo / hòn đảo 🏝️" },

  // Công nghệ & Internet
  { id: "n3-adv-81", courseId: "jlpt-n3", kanji: "技術", kana: "ぎじゅつ", romaji: "gijutsu", hanViet: "Kỹ thuật", meaning: "Kỹ thuật", textMnemonic: "技術 = kỹ thuật / công nghệ 💻" },
  { id: "n3-adv-82", courseId: "jlpt-n3", kanji: "情報", kana: "じょうほう", romaji: "jouhou", hanViet: "Tình báo", meaning: "Thông tin", textMnemonic: "情報 = thông tin / dữ liệu 📰" },
  { id: "n3-adv-83", courseId: "jlpt-n3", kanji: "ネットワーク", kana: "ネットワーク", romaji: "nettowaaku", hanViet: "(ngoại lai)", meaning: "Mạng lưới", textMnemonic: "ネットワーク = mạng lưới / kết nối 🌐" },
  { id: "n3-adv-84", courseId: "jlpt-n3", kanji: "セキュリティ", kana: "セキュリティ", romaji: "sekyuriti", hanViet: "(ngoại lai)", meaning: "Bảo mật", textMnemonic: "セキュリティ = bảo mật / an toàn 🔒" },
  { id: "n3-adv-85", courseId: "jlpt-n3", kanji: "人工智能", kana: "じんこうちのう", romaji: "jinkou chinou", hanViet: "Nhân công trí năng", meaning: "Trí tuệ nhân tạo", textMnemonic: "人工智能 = AI / trí tuệ nhân tạo 🤖" },
  { id: "n3-adv-86", courseId: "jlpt-n3", kanji: "ロボット", kana: "ロボット", romaji: "robotto", hanViet: "(ngoại lai)", meaning: "Robot", textMnemonic: "ロボット = robot / máy móc tự động 🤖" },
  { id: "n3-adv-87", courseId: "jlpt-n3", kanji: "自动化", kana: "じどうか", romaji: "jidouka", hanViet: "Tự động hóa", meaning: "Tự động hóa", textMnemonic: "自動化 = tự động hóa / máy móc làm việc ⚙️" },
  { id: "n3-adv-88", courseId: "jlpt-n3", kanji: "イノベーション", kana: "イノベーション", romaji: "inobeeshon", hanViet: "(ngoại lai)", meaning: "Đổi mới sáng tạo", textMnemonic: "イノベーション = đổi mới / sáng tạo 💡" },
  { id: "n3-adv-89", courseId: "jlpt-n3", kanji: "专利", kana: "とつきょ", romaji: "tokkyo", hanViet: "Chuyên lợi", meaning: "Bằng sáng chế", textMnemonic: "特許 = bằng sáng chế / quyền sở hữu trí tuệ 📜" },
  { id: "n3-adv-90", courseId: "jlpt-n3", kanji: "发明", kana: "はつめい", romaji: "hatsumei", hanViet: "Phát minh", meaning: "Phát minh", textMnemonic: "発明 = phát minh / sáng chế 💡" },

  // Giáo dục & Học tập
  { id: "n3-adv-91", courseId: "jlpt-n3", kanji: "教育", kana: "きょういく", romaji: "kyouiku", hanViet: "Giáo dục", meaning: "Giáo dục", textMnemonic: "教育 = giáo dục / dạy dỗ 🎓" },
  { id: "n3-adv-92", courseId: "jlpt-n3", kanji: "大学", kana: "だいがく", romaji: "daigaku", hanViet: "Đại học", meaning: "Đại học", textMnemonic: "大学 = đại học / trường đại học 🎓" },
  { id: "n3-adv-93", courseId: "jlpt-n3", kanji: "教授", kana: "きょうじゅ", romaji: "kyouju", hanViet: "Giáo thụ", meaning: "Giáo sư", textMnemonic: "教授 = giáo sư / người dạy đại học 👨‍🏫" },
  { id: "n3-adv-94", courseId: "jlpt-n3", kanji: "教官", kana: "きょうかん", romaji: "kyoukan", hanViet: "Giáo quan", meaning: "Giảng viên", textMnemonic: "教官 = giảng viên / người hướng dẫn 👨‍🏫" },
  { id: "n3-adv-95", courseId: "jlpt-n3", kanji: "学生", kana: "がくせい", romaji: "gakusei", hanViet: "Học sinh", meaning: "Sinh viên", textMnemonic: "学生 = sinh viên / người học ở đại học 🎓" },
  { id: "n3-adv-96", courseId: "jlpt-n3", kanji: "学位", kana: "がくい", romaji: "gakui", hanViet: "Học vị", meaning: "Bằng cấp", textMnemonic: "学位 = bằng cấp / học vị 🎓" },
  { id: "n3-adv-97", courseId: "jlpt-n3", kanji: "博士", kana: "はかせ", romaji: "hakase", hanViet: "Bác sĩ", meaning: "Tiến sĩ", textMnemonic: "博士 = tiến sĩ / bằng cấp cao nhất 🎓" },
  { id: "n3-adv-98", courseId: "jlpt-n3", kanji: "論文", kana: "ろんぶん", romaji: "ronbun", hanViet: "Luận văn", meaning: "Luận văn", textMnemonic: "論文 = luận văn / bài nghiên cứu 📄" },
  { id: "n3-adv-99", courseId: "jlpt-n3", kanji: "研究費", kana: "けんきゅうひ", romaji: "kenkyuuhi", hanViet: "Nghiên cứu phí", meaning: "Ngân sách nghiên cứu", textMnemonic: "研究費 = kinh phí nghiên cứu / tiền làm nghiên cứu 💰" },
  { id: "n3-adv-100", courseId: "jlpt-n3", kanji: "奖学金", kana: "しょうがくきん", romaji: "shougakukin", hanViet: "Tưởng học kim", meaning: "Học bổng", textMnemonic: "奖学金 = học bổng / tiền hỗ trợ học tập 🎓" },

  // Xã hội & Cộng đồng
  { id: "n3-adv-101", courseId: "jlpt-n3", kanji: "社会", kana: "しゃかい", romaji: "shakai", hanViet: "Xã hội", meaning: "Xã hội", textMnemonic: "社会 = xã hội / cộng đồng 🌍" },
  { id: "n3-adv-102", courseId: "jlpt-n3", kanji: "人口", kana: "じんこう", romaji: "jinkou", hanViet: "Nhân khẩu", meaning: "Dân số", textMnemonic: "人口 = dân số / số người trong vùng 👥" },
  { id: "n3-adv-103", courseId: "jlpt-n3", kanji: "高龄者", kana: "こうれいしゃ", romaji: "koureisha", hanViet: "Cao lệnh giả", meaning: "Người cao tuổi", textMnemonic: "高龄者 = người cao tuổi / người già 👴" },
  { id: "n3-adv-104", courseId: "jlpt-n3", kanji: "少子化", kana: "しょうしか", romaji: "shoushika", hanViet: "Thiếu tử hóa", meaning: "Tỷ lệ sinh giảm", textMnemonic: "少子化 = tỷ lệ sinh giảm / ít trẻ em 👶" },
  { id: "n3-adv-105", courseId: "jlpt-n3", kanji: "格差", kana: "かくさ", romaji: "kakusa", hanViet: "Cách trắc", meaning: "Chênh lệch xã hội", textMnemonic: "格差 = chênh lệch / khoảng cách giàu nghèo 📊" },
  { id: "n3-adv-106", courseId: "jlpt-n3", kanji: "贫困", kana: "ひんこん", romaji: "hinkon", hanViet: "Tân cùng", meaning: "Nghèo đói", textMnemonic: "貧困 = nghèo đói / khó khăn tiền bạc 💸" },
  { id: "n3-adv-107", courseId: "jlpt-n3", kanji: "差别", kana: "さべつ", romaji: "sabetsu", hanViet: "Thiên biệt", meaning: "Phân biệt đối xử", textMnemonic: "差別 = phân biệt đối xử / đối xử không công bằng ⚖️" },
  { id: "n3-adv-108", courseId: "jlpt-n3", kanji: "ボランティア", kana: "ボランティア", romaji: "borantia", hanViet: "(ngoại lai)", meaning: "Tình nguyện viên", textMnemonic: "ボランティア = tình nguyện viên / người làm việc không lương ❤️" },
  { id: "n3-adv-109", courseId: "jlpt-n3", kanji: "捐款", kana: "かきん", romaji: "kakin", hanViet: "Quyên tiền", meaning: "Quyên góp", textMnemonic: "捐款 = quyên góp / đóng góp tiền 💰" },
  { id: "n3-adv-110", courseId: "jlpt-n3", kanji: "elfare", kana: "ふくし", romaji: "fukushi", hanViet: "Phúc lợi", meaning: "Phúc lợi xã hội", textMnemonic: "福祉 = phúc lợi xã hội / phúc lợi ❤️" },

  // Văn hóa & Truyền thông
  { id: "n3-adv-111", courseId: "jlpt-n3", kanji: "文化", kana: "ぶんか", romaji: "bunka", hanViet: "Văn hóa", meaning: "Văn hóa", textMnemonic: "文化 = văn hóa / nền văn minh 🎭" },
  { id: "n3-adv-112", courseId: "jlpt-n3", kanji: "伝統", kana: "でんとう", romaji: "dentou", hanViet: "Truyền thống", meaning: "Truyền thống", textMnemonic: "伝統 = truyền thống / tập quán 📜" },
  { id: "n3-adv-113", courseId: "jlpt-n3", kanji: "歴史", kana: "れきし", romaji: "rekishi", hanViet: "Lịch sử", meaning: "Lịch sử", textMnemonic: "歴史 = lịch sử / quá khứ 📜" },
  { id: "n3-adv-114", courseId: "jlpt-n3", kanji: "新聞", kana: "しんぶん", romaji: "shinbun", hanViet: "Tân văn", meaning: "Báo chí", textMnemonic: "新聞 = báo / tin tức 📰" },
  { id: "n3-adv-115", courseId: "jlpt-n3", kanji: "マスコミ", kana: "マスコミ", romaji: "asukomi", hanViet: "(ngoại lai)", meaning: "Truyền thông đại chúng", textMnemonic: "マスコミ = truyền thông / báo chí 📺" },
  { id: "n3-adv-116", courseId: "jlpt-n3", kanji: "広告", kana: "こうこく", romaji: "koukoku", hanViet: "Quảng cáo", meaning: "Quảng cáo", textMnemonic: "広告 = quảng cáo / rao vặt 📣" },
  { id: "n3-adv-117", courseId: "jlpt-n3", kanji: "宣伝", kana: "せんでん", romaji: "senden", hanViet: "Tuyên truyền", meaning: "Tuyên truyền", textMnemonic: "宣伝 = tuyên truyền / pr 📢" },
  { id: "n3-adv-118", courseId: "jlpt-n3", kanji: "メディア", kana: "メディア", romaji: "media", hanViet: "(ngoại lai)", meaning: "Phương tiện truyền thông", textMnemonic: "メディア = phương tiện truyền thông / mạng 📺" },
  { id: "n3-adv-119", courseId: "jlpt-n3", kanji: "出版物", kana: "しゅっぱんぶつ", romaji: "shuppanbutsu", hanViet: "Xuất bản vật", meaning: "Ấn phẩm", textMnemonic: "出版物 = ấn phẩm / sách báo 📚" },
  { id: "n3-adv-120", courseId: "jlpt-n3", kanji: "コンテンツ", kana: "コンテンツ", romaji: "kontentsu", hanViet: "(ngoại lai)", meaning: "Nội dung", textMnemonic: "コンテンツ = nội dung / bài viết 📝" },
];
