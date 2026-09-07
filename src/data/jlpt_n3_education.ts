/**
 * JLPT N3 - Giáo dục & Học tập (Education)
 * 120 từ vựng thường gặp trong kỳ thi
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_EDUCATION: Word[] = [
  // Trường học
  { id: "n3-edu-1", courseId: "jlpt-n3", kanji: "学校", kana: "がっこう", romaji: "gakkou", hanViet: "Học hiệu", meaning: "Trường học", textMnemonic: "学(học) + 校(trường) = nơi học 🏫" },
  { id: "n3-edu-2", courseId: "jlpt-n3", kanji: "小学校", kana: "しょうがっこう", romaji: "shougakkou", hanViet: "Tiểu học hiệu", meaning: "Trường tiểu học", textMnemonic: "小(nhỏ) + 学校(trường) = trường nhỏ cho trẻ nhỏ 🎒" },
  { id: "n3-edu-3", courseId: "jlpt-n3", kanji: "中学校", kana: "ちゅうがっこう", romaji: "chuugakkou", hanViet: "Trung học hiệu", meaning: "Trường trung học cơ sở", textMnemonic: "中(giữa) + 学校(trường) = trường cấp hai 🏫" },
  { id: "n3-edu-4", courseId: "jlpt-n3", kanji: "高校", kana: "こうこう", romaji: "koukou", hanViet: "Cao hiệu", meaning: "Trường trung học phổ thông", textMnemonic: "高(cao) + 校(trường) = trường cấp ba 🎓" },
  { id: "n3-edu-5", courseId: "jlpt-n3", kanji: "大学", kana: "だいがく", romaji: "daigaku", hanViet: "Đại học", meaning: "Đại học", textMnemonic: "大(lớn) + 学(học) = học lớn nhất 🎓" },
  { id: "n3-edu-6", courseId: "jlpt-n3", kanji: "大学院", kana: "だいがくいん", romaji: "daigakuin", hanViet: "Đại học viện", meaning: "Cao học", textMnemonic: "大学(đại học) + 院(viện) = học sau đại học 📚" },
  { id: "n3-edu-7", courseId: "jlpt-n3", kanji: "留学", kana: "りゅうがく", romaji: "ryuugaku", hanViet: "Lưu học", meaning: "Du học", textMnemonic: "留(lưu) + 学(học) = lưu lại nước khác học ✈️" },
  { id: "n3-edu-8", courseId: "jlpt-n3", kanji: "塾", kana: "じゅく", romaji: "juku", hanViet: "Thục", meaning: "Lò luyện thi", textMnemonic: "塾 = lớp học thêm, lò đào tạo 📝" },
  { id: "n3-edu-9", courseId: "jlpt-n3", kanji: "幼稚園", kana: "ようちえん", romaji: "youchien", hanViet: "Dũ trĩ viên", meaning: "Trường mẫu giáo", textMnemonic: "幼(nhỏ) + 稚(non) + 園(vườn) = vườn trẻ nhỏ 👶" },
  { id: "n3-edu-10", courseId: "jlpt-n3", kanji: "保育園", kana: "ほいくえん", romaji: "hoikuen", hanViet: "Bảo dưỡng viên", meaning: "Nhà trẻ", textMnemonic: "保(bảo) + 育(dạy) + 園(vườn) = nơi bảo dạy trẻ 👶" },

  // Môn học
  { id: "n3-edu-11", courseId: "jlpt-n3", kanji: "数学", kana: "すうがく", romaji: "suugaku", hanViet: "Số học", meaning: "Toán học", textMnemonic: "数(số) + 学(học) = học về số 🔢" },
  { id: "n3-edu-12", courseId: "jlpt-n3", kanji: "理科", kana: "りか", romaji: "rika", hanViet: "Lý khoa", meaning: "Khoa học tự nhiên", textMnemonic: "理(lý) + 科(khoa) = môn khoa học 🔬" },
  { id: "n3-edu-13", courseId: "jlpt-n3", kanji: "社会", kana: "しゃかい", romaji: "shakai", hanViet: "Xã hội", meaning: "Xã hội học", textMnemonic: "社(xã) + 会(hội) = môn xã hội 🌏" },
  { id: "n3-edu-14", courseId: "jlpt-n3", kanji: "国語", kana: "こくご", romaji: "kokugo", hanViet: "Quốc ngữ", meaning: "Tiếng Nhật (môn học)", textMnemonic: "国(nước) + 語(ngôn ngữ) = tiếng nước Nhật 📖" },
  { id: "n3-edu-15", courseId: "jlpt-n3", kanji: "英語", kana: "えいご", romaji: "eigo", hanViet: "Anh ngữ", meaning: "Tiếng Anh", textMnemonic: "英(Anh) + 語(ngôn ngữ) = tiếng Anh 🇬🇧" },
  { id: "n3-edu-16", courseId: "jlpt-n3", kanji: "歴史", kana: "れきし", romaji: "rekishi", hanViet: "Lịch sử", meaning: "Lịch sử", textMnemonic: "歴(trải qua) + 史(sử) = môn sử ký 📜" },
  { id: "n3-edu-17", courseId: "jlpt-n3", kanji: "地理", kana: "ちり", romaji: "chiri", hanViet: "Địa lý", meaning: "Địa lý", textMnemonic: "地(đất) + 理(lý) = lý về đất đai 🗺️" },
  { id: "n3-edu-18", courseId: "jlpt-n3", kanji: "体育", kana: "たいいく", romaji: "taiiku", hanViet: "Thể dục", meaning: "Thể dục", textMnemonic: "体(thể) + 育(dạy) = dạy thể chất ⚽" },
  { id: "n3-edu-19", courseId: "jlpt-n3", kanji: "音楽", kana: "おんがく", romaji: "ongaku", hanViet: "Âm nhạc", meaning: "Âm nhạc", textMnemonic: "音(âm thanh) + 楽(vui) = niềm vui âm thanh 🎵" },
  { id: "n3-edu-20", courseId: "jlpt-n3", kanji: "美術", kana: "びじゅつ", romaji: "bijutsu", hanViet: "Mỹ thuật", meaning: "Mỹ thuật", textMnemonic: "美(đẹp) + 術(thuật) = thuật làm đẹp 🎨" },

  // Hoạt động học
  { id: "n3-edu-21", courseId: "jlpt-n3", kanji: "勉強", kana: "べんきょう", romaji: "benkyou", hanViet: "Miễn cường", meaning: "Học hành", textMnemonic: "勉(cố gắng) + 強(mạnh) = cố gắng mạnh mẽ 📚" },
  { id: "n3-edu-22", courseId: "jlpt-n3", kanji: "予習", kana: "よしゅう", romaji: "yoshuu", hanViet: "Dự tập", meaning: "Học trước", textMnemonic: "予(trước) + 習(học) = học trước bài 📖" },
  { id: "n3-edu-23", courseId: "jlpt-n3", kanji: "復習", kana: "ふくしゅう", romaji: "fukushuu", hanViet: "Phục tập", meaning: "Ôn tập", textMnemonic: "復(lại) + 習(học) = học lại bài 🔄" },
  { id: "n3-edu-24", courseId: "jlpt-n3", kanji: "宿題", kana: "しゅくだい", romaji: "shukudai", hanViet: "Chú đề", meaning: "Bài tập về nhà", textMnemonic: "宿(trọ) + 題(bài) = bài ở nhà 📝" },
  { id: "n3-edu-25", courseId: "jlpt-n3", kanji: "授業", kana: "じゅぎょう", romaji: "jugyou", hanViet: "Thụ nghiệp", meaning: "Giờ học", textMnemonic: "授(truyền) + 業(nghiệp) = truyền nghề trên lớp 🎓" },
  { id: "n3-edu-26", courseId: "jlpt-n3", kanji: "講義", kana: "こうぎ", romaji: "kougi", hanViet: "Giảng nghĩa", meaning: "Bài giảng", textMnemonic: "講(giảng) + 義(nghĩa) = giảng nghĩa cho sinh viên 🎤" },
  { id: "n3-edu-27", courseId: "jlpt-n3", kanji: "教科書", kana: "きょうかしょ", romaji: "kyoukasho", hanViet: "Giáo khoa thư", meaning: "Giáo trình", textMnemonic: "教科(môn học) + 書(sách) = sách giáo khoa 📕" },
  { id: "n3-edu-28", courseId: "jlpt-n3", kanji: "辞書", kana: "じしょ", romaji: "jisho", hanViet: "Tự điển", meaning: "Từ điển", textMnemonic: "辞(từ) + 書(sách) = sách tra từ 📖" },
  { id: "n3-edu-29", courseId: "jlpt-n3", kanji: "辞典", kana: "じてん", romaji: "jiten", hanViet: "Tự điển", meaning: "Từ điển", textMnemonic: "辞(từ) + 典(kinh điển) = sách từ kinh điển 📚" },
  { id: "n3-edu-30", courseId: "jlpt-n3", kanji: "図書館", kana: "としょかん", romaji: "toshokan", hanViet: "Thư đồ quán", meaning: "Thư viện", textMnemonic: "図書(sách) + 館(nhà) = nhà sách 🏛️" },

  // Thi cử
  { id: "n3-edu-31", courseId: "jlpt-n3", kanji: "試験", kana: "しけん", romaji: "shiken", hanViet: "Thí nghiệm", meaning: "Kỳ thi", textMnemonic: "試(thử) + 験(nghiệm) = thử nghiệm 📝" },
  { id: "n3-edu-32", courseId: "jlpt-n3", kanji: "テスト", kana: "テスト", romaji: "tesuto", hanViet: "(ngoại lai)", meaning: "Bài kiểm tra", textMnemonic: "Test = kiểm tra từ tiếng Anh 📋" },
  { id: "n3-edu-33", courseId: "jlpt-n3", kanji: "受験", kana: "じゅけん", romaji: "juken", hanViet: "Thụ nghiệm", meaning: "Tham gia thi", textMnemonic: "受(nhận) + 験(thi) = nhận thi 🎯" },
  { id: "n3-edu-34", courseId: "jlpt-n3", kanji: "合格", kana: "ごうかく", romaji: "goukaku", hanViet: "Hợp cách", meaning: "Đậu/Đỗ", textMnemonic: "合(hợp) + 格(cách) = hợp cách, đỗ rồi! 🎉" },
  { id: "n3-edu-35", courseId: "jlpt-n3", kanji: "不合格", kana: "ふごうかく", romaji: "fugoukaku", hanViet: "Bất hợp cách", meaning: "Trượt/Rớt", textMnemonic: "不(không) + 合格(đỗ) = không đỗ 😢" },
  { id: "n3-edu-36", courseId: "jlpt-n3", kanji: "成績", kana: "せいせき", romaji: "seiseki", hanViet: "Thành tích", meaning: "Thành tích", textMnemonic: "成(thành) + 績(kết quả) = kết quả thành công 📊" },
  { id: "n3-edu-37", courseId: "jlpt-n3", kanji: "点数", kana: "てんすう", romaji: "tensuu", hanViet: "Điểm số", meaning: "Điểm số", textMnemonic: "点(điểm) + 数(số) = số điểm 🔢" },
  { id: "n3-edu-38", courseId: "jlpt-n3", kanji: "満点", kana: "まんてん", romaji: "manten", hanViet: "Mãn điểm", meaning: "Điểm tuyệt đối", textMnemonic: "満(đầy) + 点(điểm) = đầy điểm 💯" },
  { id: "n3-edu-39", courseId: "jlpt-n3", kanji: "零点", kana: "れいてん", romaji: "reiten", hanViet: "Linh điểm", meaning: "Không điểm", textMnemonic: "零(không) + 点(điểm) = không có điểm nào 0️⃣" },
  { id: "n3-edu-40", courseId: "jlpt-n3", kanji: "平均", kana: "へいきん", romaji: "heikin", hanViet: "Bình quân", meaning: "Trung bình", textMnemonic: "平(bằng) + 均(đều) = bằng đều, trung bình 📈" },

  // Bằng cấp
  { id: "n3-edu-41", courseId: "jlpt-n3", kanji: "卒業", kana: "そつぎょう", romaji: "sotsugyou", hanViet: "Tốt nghiệp", meaning: "Tốt nghiệp", textMnemonic: "卒業 = tốt nghiệp, ra trường 🎓" },
  { id: "n3-edu-42", courseId: "jlpt-n3", kanji: "入学", kana: "にゅうがく", romaji: "nyuugaku", hanViet: "Nhập học", meaning: "Nhập học", textMnemonic: "入(vào) + 学(học) = vào học 🎒" },
  { id: "n3-edu-43", courseId: "jlpt-n3", kanji: "新入生", kana: "しんにゅうせい", romaji: "shinnyuusei", hanViet: "Tân nhập sinh", meaning: "Học sinh mới", textMnemonic: "新(mới) + 入学(nhập học) + 生(học sinh) = học sinh mới 👶" },
  { id: "n3-edu-44", courseId: "jlpt-n3", kanji: "卒業生", kana: "そつぎょうせい", romaji: "sotsugyousei", hanViet: "Tốt nghiệp sinh", meaning: "Cựu học sinh", textMnemonic: "卒業(tốt nghiệp) + 生(học sinh) = người đã ra trường 🎓" },
  { id: "n3-edu-45", courseId: "jlpt-n3", kanji: "在学", kana: "ざいがく", romaji: "zaigaku", hanViet: "Tại học", meaning: "Đang học", textMnemonic: "在(ở) + 学(học) = đang ở trong trường 🏫" },
  { id: "n3-edu-46", courseId: "jlpt-n3", kanji: "休学", kana: "きゅうがく", romaji: "kyuugaku", hanViet: "Hưu học", meaning: "Nghỉ học tạm", textMnemonic: "休(nghỉ) + 学(học) = nghỉ học tạm thời 😴" },
  { id: "n3-edu-47", courseId: "jlpt-n3", kanji: "退学", kana: "たいがく", romaji: "taigaku", hanViet: "Thoái học", meaning: "Thôi học", textMnemonic: "退(lùi) + 学(học) = lùi khỏi trường 🚪" },
  { id: "n3-edu-48", courseId: "jlpt-n3", kanji: "編入", kana: "へんにゅう", romaji: "hennyuu", hanViet: "Biên nhập", meaning: "Chuyển trường", textMnemonic: "編(biên) + 入(vào) = vào trường mới 🔄" },
  { id: "n3-edu-49", courseId: "jlpt-n3", kanji: "転校", kana: "てんこう", romaji: "tenkou", hanViet: "Chuyển hiệu", meaning: "Chuyển trường", textMnemonic: "転(chuyển) + 校(trường) = chuyển trường 🏫" },
  { id: "n3-edu-50", courseId: "jlpt-n3", kanji: "単位", kana: "たんい", romaji: "tan'i", hanViet: "Đơn vị", meaning: "Tín chỉ", textMnemonic: "単(đơn) + 位(vị trí) = đơn vị tín chỉ 🎫" },

  // Giáo viên & lớp học
  { id: "n3-edu-51", courseId: "jlpt-n3", kanji: "先生", kana: "せんせい", romaji: "sensei", hanViet: "Tiên sinh", meaning: "Giáo viên", textMnemonic: "先(trước) + 生(sinh) = người đi trước, thầy cô 👨‍🏫" },
  { id: "n3-edu-52", courseId: "jlpt-n3", kanji: "教師", kana: "きょうし", romaji: "kyoushi", hanViet: "Giáo sư", meaning: "Giáo viên", textMnemonic: "教(dạy) + 師(sư phụ) = người dạy học 👨‍🏫" },
  { id: "n3-edu-53", courseId: "jlpt-n3", kanji: "生徒", kana: "せいと", romaji: "seito", hanViet: "Sinh đệ", meaning: "Học sinh", textMnemonic: "生(sinh) + 徒(đồ đệ) = đệ tử đi học 👨‍🎓" },
  { id: "n3-edu-54", courseId: "jlpt-n3", kanji: "学生", kana: "がくせい", romaji: "gakusei", hanViet: "Học sinh", meaning: "Sinh viên", textMnemonic: "学(học) + 生(sinh) = người sinh ra để học 👨‍🎓" },
  { id: "n3-edu-55", courseId: "jlpt-n3", kanji: "留学生", kana: "りゅうがくせい", romaji: "ryuugakusei", hanViet: "Lưu học sinh", meaning: "Du học sinh", textMnemonic: "留学(du học) + 生(sinh viên) = người đi du học 🌍" },
  { id: "n3-edu-56", courseId: "jlpt-n3", kanji: "教授", kana: "きょうじゅ", romaji: "kyouju", hanViet: "Giáo thụ", meaning: "Giáo sư", textMnemonic: "教(dạy) + 授(truyền) = truyền dạy ở đại học 👨‍🏫" },
  { id: "n3-edu-57", courseId: "jlpt-n3", kanji: "講師", kana: "こうし", romaji: "koushi", hanViet: "Giảng sư", meaning: "Giảng viên", textMnemonic: "講(giảng) + 師(sư) = người giảng bài 👨‍🏫" },
  { id: "n3-edu-58", courseId: "jlpt-n3", kanji: "学生証", kana: "がくせいしょう", romaji: "gakuseishou", hanViet: "Học sinh chứng", meaning: "Thẻ sinh viên", textMnemonic: "学生(sinh viên) + 証(thẻ) = thẻ SV 🎫" },
  { id: "n3-edu-59", courseId: "jlpt-n3", kanji: "担任", kana: "たんにん", romaji: "tannin", hanViet: "Thêm nhậm", meaning: "Giáo viên chủ nhiệm", textMnemonic: "担(gánh) + 任(nhận) = người gánh trách nhiệm lớp 👨‍🏫" },
  { id: "n3-edu-60", courseId: "jlpt-n3", kanji: "クラスメート", kana: "クラスメート", romaji: "kurasumeeto", hanViet: "(ngoại lai)", meaning: "Bạn cùng lớp", textMnemonic: "Class + mate = bạn cùng lớp 👫" },

  // Hành động học
  { id: "n3-edu-61", courseId: "jlpt-n3", kanji: "教える", kana: "おしえる", romaji: "oshieru", hanViet: "Giáo thức", meaning: "Dạy", textMnemonic: "教(dạy) + える = dạy cho ai 👨‍🏫" },
  { id: "n3-edu-62", courseId: "jlpt-n3", kanji: "学ぶ", kana: "まなぶ", romaji: "manabu", hanViet: "Học võ", meaning: "Học", textMnemonic: "学(học) + ぶ = học hỏi 📚" },
  { id: "n3-edu-63", courseId: "jlpt-n3", kanji: "習う", kana: "ならう", romaji: "narau", hanViet: "Tập", meaning: "Học (kỹ năng)", textMnemonic: "習(tập) + う = tập luyện kỹ năng 🎯" },
  { id: "n3-edu-64", courseId: "jlpt-n3", kanji: "練習", kana: "れんしゅう", romaji: "renshuu", hanViet: "Luyện tập", meaning: "Luyện tập", textMnemonic: "練(luyện) + 習(tập) = luyện tập đi luyện tập lại 💪" },
  { id: "n3-edu-65", courseId: "jlpt-n3", kanji: "努力", kana: "どりょく", romaji: "doryoku", hanViet: "Nỗ lực", meaning: "Cố gắng/Nỗ lực", textMnemonic: "努(cố) + 力(sức) = cố hết sức 💪" },
  { id: "n3-edu-66", courseId: "jlpt-n3", kanji: "頑張る", kana: "がんばる", romaji: "ganbaru", hanViet: "Cương bạo", meaning: "Cố gắng hết mình", textMnemonic: "頑張 = cố lên, đừng bỏ cuộc! 💪" },
  { id: "n3-edu-67", courseId: "jlpt-n3", kanji: "研究", kana: "けんきゅう", romaji: "kenkyuu", hanViet: "Nghiên cứu", meaning: "Nghiên cứu", textMnemonic: "研(mài) + 究(thăm) = mài sâu tìm hiểu 🔬" },
  { id: "n3-edu-68", courseId: "jlpt-n3", kanji: "論文", kana: "ろんぶん", romaji: "ronbun", hanViet: "Luận văn", meaning: "Luận văn", textMnemonic: "論(bàn) + 文(văn) = bài văn luận 📄" },
  { id: "n3-edu-69", courseId: "jlpt-n3", kanji: "発表", kana: "はっぴょう", romaji: "happyou", hanViet: "Phát biểu", meaning: "Thuyết trình", textMnemonic: "発(phát) + 表(biểu) = phát biểu trước lớp 🎤" },
  { id: "n3-edu-70", courseId: "jlpt-n3", kanji: "質問", kana: "しつもん", romaji: "shitsumon", hanViet: "Chất vấn", meaning: "Câu hỏi", textMnemonic: "質(chất) + 問(hỏi) = đặt câu hỏi ❓" },

  // Kỳ thi năng lực
  { id: "n3-edu-71", courseId: "jlpt-n3", kanji: "資格", kana: "しかく", romaji: "shikaku", hanViet: "Tư cách", meaning: "Bằng cấp/Tư cách", textMnemonic: "資(tư) + 格(cách) = tư cách, bằng cấp 🎓" },
  { id: "n3-edu-72", courseId: "jlpt-n3", kanji: "免許", kana: "めんきょ", romaji: "menkyo", hanViet: "Miễn khửa", meaning: "Giấy phép/Bằng", textMnemonic: "免(miễn) + 許(cho phép) = cho phép làm gì 📜" },
  { id: "n3-edu-73", courseId: "jlpt-n3", kanji: "履歴書", kana: "りれきしょ", romaji: "rirekisho", hanViet: "Lịch sử thư", meaning: "Sơ yếu lý lịch", textMnemonic: "履歴(lịch sử) + 書(sách) = sách ghi lịch sử bản thân 📋" },
  { id: "n3-edu-74", courseId: "jlpt-n3", kanji: "面接", kana: "めんせつ", romaji: "mensetsu", hanViet: "Diện tiếp", meaning: "Phỏng vấn", textMnemonic: "面(mặt) + 接(gặp) = gặp mặt trực tiếp 🤝" },
  { id: "n3-edu-75", courseId: "jlpt-n3", kanji: "求人", kana: "きゅうじん", romaji: "kyuujin", hanViet: "Cầu nhân", meaning: "Tuyển dụng", textMnemonic: "求(cầu) + 人(người) = cầu người làm việc 💼" },
  { id: "n3-edu-76", courseId: "jlpt-n3", kanji: "採用", kana: "さいよう", romaji: "saiyou", hanViet: "Tuyển dụng", meaning: "Tuyển dụng", textMnemonic: "採(thu) + 用(dùng) = thu nhận người ✅" },
  { id: "n3-edu-77", courseId: "jlpt-n3", kanji: "就職", kana: "しゅうしょく", romaji: "shuushoku", hanViet: "Tục chức", meaning: "Xin việc", textMnemonic: "就(theo) + 職(việc) = theo việc, đi làm 💼" },
  { id: "n3-edu-78", courseId: "jlpt-n3", kanji: "面接試験", kana: "めんせつしけん", romaji: "mensetsushiken", hanViet: "Diện tiếp thí nghiệm", meaning: "Phỏng vấn thi", textMnemonic: "面接(phỏng vấn) + 試験(thi) = thi phỏng vấn 🎤" },
  { id: "n3-edu-79", courseId: "jlpt-n3", kanji: "入社", kana: "にゅうしゃ", romaji: "nyuusha", hanViet: "Nhập xã", meaning: "Vào công ty", textMnemonic: "入(vào) + 社(công ty) = vào làm ở công ty 🏢" },
  { id: "n3-edu-80", courseId: "jlpt-n3", kanji: "研修", kana: "けんしゅう", romaji: "kenshuu", hanViet: "Nghiên tu", meaning: "Đào tạo", textMnemonic: "研(mài) + 修(tu) = mài giũa tu luyện 📚" },

  // Kỳ nghỉ học
  { id: "n3-edu-81", courseId: "jlpt-n3", kanji: "夏休み", kana: "なつやすみ", romaji: "natsuyasumi", hanViet: "Hạ hưu", meaning: "Nghỉ hè", textMnemonic: "夏(mùa hè) + 休み(nghỉ) = nghỉ hè ☀️" },
  { id: "n3-edu-82", courseId: "jlpt-n3", kanji: "冬休み", kana: "ふゆやすみ", romaji: "fuyuyasumi", hanViet: "Đông hưu", meaning: "Nghỉ đông", textMnemonic: "冬(mùa đông) + 休み(nghỉ) = nghỉ đông ❄️" },
  { id: "n3-edu-83", courseId: "jlpt-n3", kanji: "春休み", kana: "はるやすみ", romaji: "haruyasumi", hanViet: "Xuân hưu", meaning: "Nghỉ xuân", textMnemonic: "春(mùa xuân) + 休み(nghỉ) = nghỉ xuân 🌸" },
  { id: "n3-edu-84", courseId: "jlpt-n3", kanji: "休み時間", kana: "やすみじかん", romaji: "yasumijikan", hanViet: "Hưu thời gian", meaning: "Giờ nghỉ", textMnemonic: "休み(nghỉ) + 時間(giờ) = giờ nghỉ giải lao ⏰" },
  { id: "n3-edu-85", courseId: "jlpt-n3", kanji: "放課後", kana: "ほうかご", romaji: "houkago", hanViet: "Phóng khoá hậu", meaning: "Sau tan học", textMnemonic: "放(phóng) + 課(khóa) + 後(sau) = sau khi tan lớp 🌆" },
  { id: "n3-edu-86", courseId: "jlpt-n3", kanji: "通学", kana: "つうがく", romaji: "tsuugaku", hanViet: "Thông học", meaning: "Đi học (hàng ngày)", textMnemonic: "通(qua) + 学(học) = đi qua đường đến trường 🏫" },
  { id: "n3-edu-87", courseId: "jlpt-n3", kanji: "登校", kana: "とうこう", romaji: "toukou", hanViet: "Đăng hiệu", meaning: "Đến trường", textMnemonic: "登(lên) + 校(trường) = lên trường học 🏫" },
  { id: "n3-edu-88", courseId: "jlpt-n3", kanji: "下校", kana: "げこう", romaji: "gekou", hanViet: "Hạ hiệu", meaning: "Tan học", textMnemonic: "下(xuống) + 校(trường) = xuống trường, tan học 🏠" },
  { id: "n3-edu-89", courseId: "jlpt-n3", kanji: "欠席", kana: "けっせき", romaji: "kesseki", hanViet: "Khiết tịch", meaning: "Vắng mặt", textMnemonic: "欠(thiếu) + 席(chỗ ngồi) = thiếu mặt ở chỗ ngồi ❌" },
  { id: "n3-edu-90", courseId: "jlpt-n3", kanji: "出席", kana: "しゅっせき", romaji: "shusseki", hanViet: "Xuất tịch", meaning: "Có mặt", textMnemonic: "出(ra) + 席(chỗ) = ra chỗ ngồi, có mặt ✅" },

  // Học phí
  { id: "n3-edu-91", courseId: "jlpt-n3", kanji: "学費", kana: "がくひ", romaji: "gakuhi", hanViet: "Học phí", meaning: "Học phí", textMnemonic: "学(học) + 費(phí) = phí cho việc học 💰" },
  { id: "n3-edu-92", courseId: "jlpt-n3", kanji: "授業料", kana: "じゅぎょうりょう", romaji: "jugyouryou", hanViet: "Thụ nghiệp liệu", meaning: "Học phí", textMnemonic: "授業(giờ học) + 料(phí) = phí giờ học 💰" },
  { id: "n3-edu-93", courseId: "jlpt-n3", kanji: "奨学金", kana: "しょうがくきん", romaji: "shougakukin", hanViet: "Tiếu học kim", meaning: "Học bổng", textMnemonic: "奨(khuyến khích) + 学(học) + 金(tiền) = tiền khuyến khích học 🎓" },
  { id: "n3-edu-94", courseId: "jlpt-n3", kanji: "給付", kana: "きゅうふ", romaji: "kyuufu", hanViet: "Cấp phụ", meaning: "Trợ cấp", textMnemonic: "給(cấp) + 付(phát) = phát cấp tiền 💵" },
  { id: "n3-edu-95", courseId: "jlpt-n3", kanji: "入学金", kana: "にゅうがくきん", romaji: "nyuugakukin", hanViet: "Nhập học kim", meaning: "Phí nhập học", textMnemonic: "入学(nhập học) + 金(tiền) = tiền vào học 💰" },
  { id: "n3-edu-96", courseId: "jlpt-n3", kanji: "教科書", kana: "きょうかしょ", romaji: "kyoukasho", hanViet: "Giáo khoa thư", meaning: "Sách giáo khoa", textMnemonic: "教科(môn học) + 書(sách) = sách dạy học 📕" },
  { id: "n3-edu-97", courseId: "jlpt-n3", kanji: "ノート", kana: "ノート", romaji: "nooto", hanViet: "(ngoại lai)", meaning: "Vở/Sổ tay", textMnemonic: "Note = ghi chú từ tiếng Anh 📓" },
  { id: "n3-edu-98", courseId: "jlpt-n3", kanji: "筆箱", kana: "ふでばこ", romaji: "hude bako", hanViet: "Bút hộp", meaning: "Hộp bút", textMnemonic: "筆(bút) + 箱(hộp) = hộp đựng bút ✏️" },
  { id: "n3-edu-99", courseId: "jlpt-n3", kanji: "鉛筆", kana: "えんぴつ", romaji: "enpitsu", hanViet: "Duẫn bút", meaning: "Bút chì", textMnemonic: "鉛(chì) + 筆(bút) = bút làm bằng chì ✏️" },
  { id: "n3-edu-100", courseId: "jlpt-n3", kanji: "消しゴム", kana: "けしゴム", romaji: "keshigomu", hanViet: "Tiêu cao su", meaning: "Cục tẩy", textMnemonic: "消(xóa) + ゴム(cao su) = cao su xóa 🧹" },

  // Hành vi & quá trình
  { id: "n3-edu-101", courseId: "jlpt-n3", kanji: "通る", kana: "とおる", romaji: "tooru", hanViet: "Thông", meaning: "Đậu (thi)", textMnemonic: "通(qua) + る = vượt qua kỳ thi ✅" },
  { id: "n3-edu-102", courseId: "jlpt-n3", kanji: "落ちる", kana: "おちる", romaji: "ochiru", hanViet: "Lạc", meaning: "Trượt (thi)", textMnemonic: "落(rơi) + ちる = rơi, không qua được ❌" },
  { id: "n3-edu-103", courseId: "jlpt-n3", kanji: "上がる", kana: "あがる", romaji: "agaru", hanViet: "Thượng", meaning: "Được lên (lớp)", textMnemonic: "上(lên) + がる = lên cấp, lên lớp 📈" },
  { id: "n3-edu-104", courseId: "jlpt-n3", kanji: "下げる", kana: "さげる", romaji: "sageru", hanViet: "Hạ", meaning: "Hạ xuống", textMnemonic: "下(xuống) + げる = hạ xuống cấp 📉" },
  { id: "n3-edu-105", courseId: "jlpt-n3", kanji: "選ぶ", kana: "えらぶ", romaji: "erabu", hanViet: "Tuyển", meaning: "Chọn", textMnemonic: "選(chọn) + ぶ = chọn lựa ✅" },
  { id: "n3-edu-106", courseId: "jlpt-n3", kanji: "決める", kana: "きめる", romaji: "kimeru", hanViet: "Quyết", meaning: "Quyết định", textMnemonic: "決(quyết) + める = quyết định ✨" },
  { id: "n3-edu-107", courseId: "jlpt-n3", kanji: "探す", kana: "さがす", romaji: "sagasu", hanViet: "Tầm", meaning: "Tìm kiếm", textMnemonic: "探(thăm) + す = đi tìm 🔍" },
  { id: "n3-edu-108", courseId: "jlpt-n3", kanji: "見つける", kana: "みつける", romaji: "mitsukeru", hanViet: "Kiến", meaning: "Tìm thấy", textMnemonic: "見(thấy) + つける = tìm thấy được 🎯" },
  { id: "n3-edu-109", courseId: "jlpt-n3", kanji: "調べる", kana: "しらべる", romaji: "shiraberu", hanViet: "Tra", meaning: "Tra cứu", textMnemonic: "調(điều) + べる = tra cứu, tìm hiểu 🔍" },
  { id: "n3-edu-110", courseId: "jlpt-n3", kanji: "考える", kana: "かんがえる", romaji: "kangaeru", hanViet: "Tư khả", meaning: "Suy nghĩ", textMnemonic: "考(nghĩ) + える = suy nghĩ kỹ 🤔" },

  // Hoạt động ngoại khóa
  { id: "n3-edu-111", courseId: "jlpt-n3", kanji: "部活", kana: "ぶかつ", romaji: "bukatsu", hanViet: "Bộ hoạt", meaning: "CLB thể thao", textMnemonic: "部(bộ phận) + 活(hoạt động) = hoạt động câu lạc bộ ⚽" },
  { id: "n3-edu-112", courseId: "jlpt-n3", kanji: "サークル", kana: "サークル", romaji: "saakuru", hanViet: "(ngoại lai)", meaning: "Câu lạc bộ", textMnemonic: "Circle = vòng tròn, CLB từ tiếng Anh 🎭" },
  { id: "n3-edu-113", courseId: "jlpt-n3", kanji: "運動会", kana: "うんどうかい", romaji: "undoukai", hanViet: "Vận động hội", meaning: "Hội thao", textMnemonic: "運動(vận động) + 会(hội) = hội vận động 🏃" },
  { id: "n3-edu-114", courseId: "jlpt-n3", kanji: "文化祭", kana: "ぶんかさい", romaji: "bunkasai", hanViet: "Văn hóa tế", meaning: "Lễ hội văn hóa", textMnemonic: "文化(văn hóa) + 祭(lễ hội) = lễ hội văn hóa 🎪" },
  { id: "n3-edu-115", courseId: "jlpt-n3", kanji: "修学旅行", kana: "しゅうがくりょこう", romaji: "shuugaku ryokou", hanViet: "Tu học lữ hành", meaning: "Chuyến đi học tập", textMnemonic: "修学(học tập) + 旅行(du lịch) = du lịch học tập 🚌" },
  { id: "n3-edu-116", courseId: "jlpt-n3", kanji: "遠足", kana: "えんそく", romaji: "ensoku", hanViet: "Viễn túc", meaning: "Dã ngoại", textMnemonic: "遠(xa) + 足(chân) = đi chân xa 🏞️" },
  { id: "n3-edu-117", courseId: "jlpt-n3", kanji: "校外", kana: "こうがい", romaji: "kougai", hanViet: "Hiệu ngoại", meaning: "Ngoài trường", textMnemonic: "校(trường) + 外(ngoài) = bên ngoài trường 🏫" },
  { id: "n3-edu-118", courseId: "jlpt-n3", kanji: "校内", kana: "こうない", romaji: "kounai", hanViet: "Hiệu nội", meaning: "Trong trường", textMnemonic: "校(trường) + 内(trong) = bên trong trường 🏫" },
  { id: "n3-edu-119", courseId: "jlpt-n3", kanji: "教室", kana: "きょうしつ", romaji: "kyoushitsu", hanViet: "Giáo thất", meaning: "Lớp học/Phòng học", textMnemonic: "教(dạy) + 室(phòng) = phòng dạy học 🏫" },
  { id: "n3-edu-120", courseId: "jlpt-n3", kanji: "廊下", kana: "ろうか", romaji: "rouka", hanViet: "Lang hạ", meaning: "Hành lang", textMnemonic: "廊(hành lang) + 下(dưới) = lối đi dưới mái nhà 🚶" },
];
