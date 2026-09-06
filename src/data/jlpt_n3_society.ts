/**
 * JLPT N3 - Từ vựng Xã hội & Quan hệ (Society & Relationships)
 * 130 từ phổ biến
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_SOCIETY: Word[] = [
  { id: "n3-s-1", courseId: "jlpt-n3", kanji: "友達", kana: "ともだち", romaji: "tomodachi", hanViet: "Bằng hữu", meaning: "Bạn bè", textMnemonic: "友 (bạn) + 達 (đạt) = người đạt được tình bạn 👫" },
  { id: "n3-s-2", courseId: "jlpt-n3", kanji: "親友", kana: "しんゆう", romaji: "shinyū", hanViet: "Thân hữu", meaning: "Bạn thân", textMnemonic: "親 (thân) + 友 (bạn) = bạn thân thiết 💝" },
  { id: "n3-s-3", courseId: "jlpt-n3", kanji: "恋人", kana: "こいびと", romaji: "koibito", hanViet: "Luyến nhân", meaning: "Người yêu", textMnemonic: "恋 (yêu) + 人 (người) = người đang yêu 💕" },
  { id: "n3-s-4", courseId: "jlpt-n3", kanji: "彼氏", kana: "かれし", romaji: "kareshi", hanViet: "Bỉ thị", meaning: "Bạn trai", textMnemonic: "彼 (anh ấy) + 氏 (ông) = anh ấy là người yêu 👨" },
  { id: "n3-s-5", courseId: "jlpt-n3", kanji: "彼女", kana: "かのじょ", romaji: "kanojo", hanViet: "Bỉ nữ", meaning: "Bạn gái", textMnemonic: "彼 (anh ấy) + 女 (nữ) = nữ là người yêu của anh ấy 👩" },

  { id: "n3-s-6", courseId: "jlpt-n3", kanji: "夫婦", kana: "ふうふ", romaji: "fūfu", hanViet: "Phu phụ", meaning: "Vợ chồng", textMnemonic: "夫 (chồng) + 婦 (vợ) = cặp vợ chồng 👨‍👩" },
  { id: "n3-s-7", courseId: "jlpt-n3", kanji: "婚約", kana: "こんやく", romaji: "konyaku", hanViet: "Hôn ước", meaning: "Đính hôn", textMnemonic: "婚 (cưới) + 約 (hẹn) = hẹn cưới 💍" },
  { id: "n3-s-8", courseId: "jlpt-n3", kanji: "結婚式", kana: "けっこんしき", romaji: "kekkonshiki", hanViet: "Kết hôn thức", meaning: "Lễ cưới", textMnemonic: "結婚 (cưới) + 式 (lễ) = buổi lễ cưới 👰" },
  { id: "n3-s-9", courseId: "jlpt-n3", kanji: "新婚", kana: "しんこん", romaji: "shinkon", hanViet: "Tân hôn", meaning: "Mới cưới", textMnemonic: "新 (mới) + 婚 (cưới) = mới cưới xong 💒" },
  { id: "n3-s-10", courseId: "jlpt-n3", kanji: "離婚", kana: "りこん", romaji: "rikon", hanViet: "Ly hôn", meaning: "Ly hôn", textMnemonic: "離 (xa) + 婚 (cưới) = xa nhau sau cưới 💔" },

  { id: "n3-s-11", courseId: "jlpt-n3", kanji: "家族", kana: "かぞく", romaji: "kazoku", hanViet: "Gia tộc", meaning: "Gia đình", textMnemonic: "家 (nhà) + 族 (tộc) = tộc trong nhà 👨‍👩‍👧‍👦" },
  { id: "n3-s-12", courseId: "jlpt-n3", kanji: "親", kana: "おや", romaji: "oya", hanViet: "Thân", meaning: "Cha mẹ", textMnemonic: "親 = cha mẹ ruột 👨‍👩" },
  { id: "n3-s-13", courseId: "jlpt-n3", kanji: "兄弟", kana: "きょうだい", romaji: "kyōdai", hanViet: "Huynh đệ", meaning: "Anh em (trai)", textMnemonic: "兄 (anh) + 弟 (em) = anh em trai 👦" },
  { id: "n3-s-14", courseId: "jlpt-n3", kanji: "姉妹", kana: "しまい", romaji: "shimai", hanViet: "Tỷ muội", meaning: "Chị em (gái)", textMnemonic: "姉 (chị) + 妹 (em) = chị em gái 👧" },
  { id: "n3-s-15", courseId: "jlpt-n3", kanji: "おじいさん", kana: "おじいさん", romaji: "ojīsan", hanViet: "Ông ngoại/nội", meaning: "Ông", textMnemonic: "お + じいさん = ông già kính trọng 👴" },

  { id: "n3-s-16", courseId: "jlpt-n3", kanji: "おばあさん", kana: "おばあさん", romaji: "obāsan", hanViet: "Bà ngoại/nội", meaning: "Bà", textMnemonic: "お + ばあさん = bà già kính trọng 👵" },
  { id: "n3-s-17", courseId: "jlpt-n3", kanji: "甥", kana: "おい", romaji: "oi", hanViet: "Doanh", meaning: "Cháu trai (con anh chị)", textMnemonic: "甥 = con của anh chị ruột 👦" },
  { id: "n3-s-18", courseId: "jlpt-n3", kanji: "姪", kana: "めい", romaji: "mei", hanViet: "Đệt", meaning: "Cháu gái (con anh chị)", textMnemonic: "姪 = con gái của anh chị ruột 👧" },
  { id: "n3-s-19", courseId: "jlpt-n3", kanji: "いとこ", kana: "いとこ", romaji: "itoko", hanViet: "Biểu tổ", meaning: "Anh chị em họ", textMnemonic: "いとこ = con của bác, anh chị em họ 👫" },
  { id: "n3-s-20", courseId: "jlpt-n3", kanji: "親戚", kana: "しんせき", romaji: "shinseki", hanViet: "Thân thích", meaning: "Họ hàng", textMnemonic: "親 (thân) + 戚 (họ hàng) = họ hàng thân thuộc 👨‍👩‍👧" },

  { id: "n3-s-21", courseId: "jlpt-n3", kanji: "知り合い", kana: "しりあい", romaji: "shiriai", hanViet: "Thức nhân", meaning: "Người quen", textMnemonic: "知 (biết) + 合い (gặp) = người đã gặp 🤝" },
  { id: "n3-s-22", courseId: "jlpt-n3", kanji: "隣人", kana: "りんじん", romaji: "rinjin", hanViet: "Lân nhân", meaning: "Người hàng xóm", textMnemonic: "隣 (bên cạnh) + 人 (người) = người sống bên cạnh 🏘️" },
  { id: "n3-s-23", courseId: "jlpt-n3", kanji: "他人", kana: "たにん", romaji: "tanin", hanViet: "Tha nhân", meaning: "Người khác", textMnemonic: "他 (khác) + 人 (người) = người không quen 👤" },
  { id: "n3-s-24", courseId: "jlpt-n3", kanji: "自分", kana: "じぶん", romaji: "jibun", hanViet: "Tự bản", meaning: "Bản thân", textMnemonic: "自 (tự) + 分 (phân chia) = tự phân chia bản thân 🙋" },
  { id: "n3-s-25", courseId: "jlpt-n3", kanji: "一人", kana: "ひとり", romaji: "hitori", hanViet: "Nhất nhân", meaning: "Một mình", textMnemonic: "一 (một) + 人 (người) = một người đơn độc 🚶" },

  { id: "n3-s-26", courseId: "jlpt-n3", kanji: "一緒", kana: "いっしょ", romaji: "issho", hanViet: "Nhất tự", meaning: "Cùng nhau", textMnemonic: "一 (cùng) + 緒 (đầu mối) = cùng chung đầu mối 🤝" },
  { id: "n3-s-27", courseId: "jlpt-n3", kanji: "仲間", kana: "なかま", romaji: "nakama", hanViet: "Trung gian", meaning: "Đồng đội/Bạn bè", textMnemonic: "仲 (quan hệ) + 間 (giữa) = giữa quan hệ 👥" },
  { id: "n3-s-28", courseId: "jlpt-n3", kanji: "先輩", kana: "せんぱい", romaji: "senpai", hanViet: "Tiên bối", meaning: "Tiền bối/Đàn anh", textMnemonic: "先 (trước) + 輩 (đời) = người đời trước 👨‍🏫" },
  { id: "n3-s-29", courseId: "jlpt-n3", kanji: "後輩", kana: "こうはい", romaji: "kōhai", hanViet: "Hậu bối", meaning: "Hậu bối/Đàn em", textMnemonic: "後 (sau) + 輩 (đời) = người đời sau 👨‍🎓" },
  { id: "n3-s-30", courseId: "jlpt-n3", kanji: "同級生", kana: "どうきゅうせい", romaji: "dōkyūsei", hanViet: "Đồng cấp sinh", meaning: "Bạn cùng lớp", textMnemonic: "同 (cùng) + 級 (lớp) + 生 (học sinh) = cùng lớp học 🎓" },

  { id: "n3-s-31", courseId: "jlpt-n3", kanji: "クラスメイト", kana: "クラスメイト", romaji: "kurasumeito", hanViet: "(Ngoại lai)", meaning: "Bạn cùng lớp", textMnemonic: "Classmate = bạn cùng lớp từ tiếng Anh 🎒" },
  { id: "n3-s-32", courseId: "jlpt-n3", kanji: "生徒", kana: "せいと", romaji: "seito", hanViet: "Sinh đệ", meaning: "Học sinh", textMnemonic: "生 (sinh) + 徒 (đồ đệ) = đồ đệ đi học 👨‍🎓" },
  { id: "n3-s-33", courseId: "jlpt-n3", kanji: "先生", kana: "せんせい", romaji: "sensei", hanViet: "Tiên sinh", meaning: "Giáo viên", textMnemonic: "先 (trước) + 生 (sinh) = người sinh ra trước 👨‍🏫" },
  { id: "n3-s-34", courseId: "jlpt-n3", kanji: "教授", kana: "きょうじゅ", romaji: "kyōju", hanViet: "Giáo thụ", meaning: "Giáo sư", textMnemonic: "教 (dạy) + 授 (truyền) = truyền dạy học 👨‍🏫" },
  { id: "n3-s-35", courseId: "jlpt-n3", kanji: "学生", kana: "がくせい", romaji: "gakusei", hanViet: "Học sinh", meaning: "Sinh viên/Học sinh", textMnemonic: "学 (học) + 生 (sinh) = người đang học 📚" },

  { id: "n3-s-36", courseId: "jlpt-n3", kanji: "大人", kana: "おとな", romaji: "otona", hanViet: "Đại nhân", meaning: "Người lớn", textMnemonic: "大 (lớn) + 人 (người) = người đã lớn 👨" },
  { id: "n3-s-37", courseId: "jlpt-n3", kanji: "子供", kana: "こども", romaji: "kodomo", hanViet: "Tử môn", meaning: "Trẻ em", textMnemonic: "子 (con) + 供 (cung cấp) = trẻ được cung cấp yêu thương 👶" },
  { id: "n3-s-38", courseId: "jlpt-n3", kanji: "赤ちゃん", kana: "あかちゃん", romaji: "akachan", hanViet: "Bảo tử", meaning: "Em bé", textMnemonic: "赤 (đỏ) + ちゃん = em bé mặt đỏ hồng 👶" },
  { id: "n3-s-39", courseId: "jlpt-n3", kanji: "若者", kana: "わかもの", romaji: "wakamono", hanViet: "Nhược giả", meaning: "Thanh niên", textMnemonic: "若 (trẻ) + 者 (người) = người trẻ tuổi 🧑" },
  { id: "n3-s-40", courseId: "jlpt-n3", kanji: "老人", kana: "ろうじん", romaji: "rōjin", hanViet: "Lão nhân", meaning: "Người già", textMnemonic: "老 (già) + 人 (người) = người đã già 👴" },

  { id: "n3-s-41", courseId: "jlpt-n3", kanji: "男性", kana: "だんせい", romaji: "dansei", hanViet: "Nam tính", meaning: "Nam giới", textMnemonic: "男 (nam) + 性 (tính) = giới tính nam 👨" },
  { id: "n3-s-42", courseId: "jlpt-n3", kanji: "女性", kana: "じょせい", romaji: "josei", hanViet: "Nữ tính", meaning: "Nữ giới", textMnemonic: "女 (nữ) + 性 (tính) = giới tính nữ 👩" },
  { id: "n3-s-43", courseId: "jlpt-n3", kanji: "男の人", kana: "おとこのひと", romaji: "otoko no hito", hanViet: "Nam nhân", meaning: "Người đàn ông", textMnemonic: "男 (nam) + 人 (người) = người nam 👨" },
  { id: "n3-s-44", courseId: "jlpt-n3", kanji: "女の人", kana: "おんなのひと", romaji: "onna no hito", hanViet: "Nữ nhân", meaning: "Người phụ nữ", textMnemonic: "女 (nữ) + 人 (người) = người nữ 👩" },
  { id: "n3-s-45", courseId: "jlpt-n3", kanji: "子供たち", kana: "こどもたち", romaji: "kodomotachi", hanViet: "Tử môn", meaning: "Bọn trẻ/Lũ trẻ", textMnemonic: "子供 (trẻ) + たち (nhiều) = nhiều đứa trẻ 👶👶" },

  { id: "n3-s-46", courseId: "jlpt-n3", kanji: "国民", kana: "こくみん", romaji: "kokumin", hanViet: "Quốc dân", meaning: "Người dân", textMnemonic: "国 (nước) + 民 (dân) = dân của nước 👥" },
  { id: "n3-s-47", courseId: "jlpt-n3", kanji: "市民", kana: "しみん", romaji: "shimin", hanViet: "Thị dân", meaning: "Công dân thành phố", textMnemonic: "市 (thành phố) + 民 (dân) = dân thành phố 🏙️" },
  { id: "n3-s-48", courseId: "jlpt-n3", kanji: "住民", kana: "じゅうみん", romaji: "jūmin", hanViet: "Trú dân", meaning: "Cư dân", textMnemonic: "住 (ở) + 民 (dân) = dân cư trú ngụ 🏘️" },
  { id: "n3-s-49", courseId: "jlpt-n3", kanji: "大統領", kana: "だいとうりょう", romaji: "daitōryō", hanViet: "Đại tổng lãnh", meaning: "Tổng thống", textMnemonic: "大 (lớn) + 統領 (lãnh đạo) = lãnh đạo tối cao 🇺🇸" },
  { id: "n3-s-50", courseId: "jlpt-n3", kanji: "首相", kana: "しゅしょう", romaji: "shushō", hanViet: "Thủ tướng", meaning: "Thủ tướng", textMnemonic: "首 (đầu) + 相 (tướng) = tướng đứng đầu chính phủ 🇯🇵" },

  { id: "n3-s-51", courseId: "jlpt-n3", kanji: "市長", kana: "しちょう", romaji: "shichō", hanViet: "Thị trưởng", meaning: "Thị trưởng", textMnemonic: "市 (thành phố) + 長 (trưởng) = trưởng thành phố 🏙️" },
  { id: "n3-s-52", courseId: "jlpt-n3", kanji: "知事", kana: "ちじ", romaji: "chiji", hanViet: "Tri sự", meaning: "Thống đốc (tỉnh)", textMnemonic: "知 (biết) + 事 (việc) = người biết việc tỉnh 🏛️" },
  { id: "n3-s-53", courseId: "jlpt-n3", kanji: "議員", kana: "ぎいん", romaji: "giin", hanViet: "Nghị viên", meaning: "Nghị sĩ", textMnemonic: "議 (bàn) + 員 (viên) = người bàn việc nước 🏛️" },
  { id: "n3-s-54", courseId: "jlpt-n3", kanji: "政治家", kana: "せいじか", romaji: "seijika", hanViet: "Chính trị gia", meaning: "Chính trị gia", textMnemonic: "政治 (chính trị) + 家 (gia) = người làm chính trị 👔" },
  { id: "n3-s-55", courseId: "jlpt-n3", kanji: "公務員", kana: "こうむいん", romaji: "kōmuin", hanViet: "Công vụ viên", meaning: "Công chức", textMnemonic: "公 (công) + 務員 (viên) = viên chức nhà nước 👨‍💼" },

  { id: "n3-s-56", courseId: "jlpt-n3", kanji: "警察", kana: "けいさつ", romaji: "keisatsu", hanViet: "Cảnh sát", meaning: "Cảnh sát", textMnemonic: "警 (cảnh giác) + 察 (xem xét) = người cảnh giác xem xét 👮" },
  { id: "n3-s-57", courseId: "jlpt-n3", kanji: "消防", kana: "しょうぼう", romaji: "shōbō", hanViet: "Tiêu phòng", meaning: "Cứu hỏa", textMnemonic: "消 (dập) + 防 (phòng) = phòng dập lửa 🚒" },
  { id: "n3-s-58", courseId: "jlpt-n3", kanji: "救急車", kana: "きゅうきゅうしゃ", romaji: "kyūkyūsha", hanViet: "Cứu cấu xa", meaning: "Xe cấp cứu", textMnemonic: "救急 (cấp cứu) + 車 (xe) = xe chở người bệnh 🚑" },
  { id: "n3-s-59", courseId: "jlpt-n3", kanji: "看護師", kana: "かんごし", romaji: "kangoshi", hanViet: "Hộ lý sĩ", meaning: "Y tá", textMnemonic: "看護 (chăm sóc) + 師 (sư) = người chăm sóc bệnh nhân 👩‍⚕️" },
  { id: "n3-s-60", courseId: "jlpt-n3", kanji: "弁護士", kana: "べんごし", romaji: "bengoshi", hanViet: "Biện hộ sư", meaning: "Luật sư", textMnemonic: "弁護 (biện hộ) + 士 (sĩ) = người biện hộ ⚖️" },

  { id: "n3-s-61", courseId: "jlpt-n3", kanji: "裁判", kana: "さいばん", romaji: "saiban", hanViet: "Tài phán", meaning: "Xét xử", textMnemonic: "裁 (cắt) + 判 (phân) = cắt phân xử ⚖️" },
  { id: "n3-s-62", courseId: "jlpt-n3", kanji: "選挙", kana: "せんきょ", romaji: "senkyo", hanViet: "Tuyển cử", meaning: "Bầu cử", textMnemonic: "選 (chọn) + 挙 (giơ) = giơ tay chọn 🗳️" },
  { id: "n3-s-63", courseId: "jlpt-n3", kanji: "投票", kana: "とうひょう", romaji: "tōhyō", hanViet: "Đầu phiếu", meaning: "Bỏ phiếu", textMnemonic: "投 (ném) + 票 (phiếu) = ném phiếu vào hòm 🗳️" },
  { id: "n3-s-64", courseId: "jlpt-n3", kanji: "政党", kana: "せいとう", romaji: "seitō", hanViet: "Chính đảng", meaning: "Đảng phái", textMnemonic: "政 (chính trị) + 党 (đảng) = tổ chức chính trị 🏛️" },
  { id: "n3-s-65", courseId: "jlpt-n3", kanji: "国会", kana: "こっかい", romaji: "kokkai", hanViet: "Quốc hội", meaning: "Quốc hội", textMnemonic: "国 (nước) + 会 (hội) = hội nghị nước 🏛️" },

  { id: "n3-s-66", courseId: "jlpt-n3", kanji: "法律", kana: "ほうりつ", romaji: "hōritsu", hanViet: "Pháp luật", meaning: "Pháp luật", textMnemonic: "法 (pháp) + 律 (luật) = quy tắc pháp luật 📜" },
  { id: "n3-s-67", courseId: "jlpt-n3", kanji: "規則", kana: "きそく", romaji: "kisoku", hanViet: "Quy tắc", meaning: "Quy tắc", textMnemonic: "規 (quy) + 則 (tắc) = quy tắc cần tuân thủ 📋" },
  { id: "n3-s-68", courseId: "jlpt-n3", kanji: "制度", kana: "せいど", romaji: "seido", hanViet: "Chế độ", meaning: "Chế độ/Hệ thống", textMnemonic: "制 (chế) + 度 (độ) = hệ thống chế độ ⚙️" },
  { id: "n3-s-69", courseId: "jlpt-n3", kanji: "権利", kana: "けんり", romaji: "kenri", hanViet: "Quyền lợi", meaning: "Quyền lợi", textMnemonic: "権 (quyền) + 利 (lợi) = quyền có lợi cho mình ✅" },
  { id: "n3-s-70", courseId: "jlpt-n3", kanji: "義務", kana: "ぎむ", romaji: "gimu", hanViet: "Nghĩa vụ", meaning: "Nghĩa vụ", textMnemonic: "義 (nghĩa) + 務 (việc) = việc phải làm theo nghĩa 📝" },

  { id: "n3-s-71", courseId: "jlpt-n3", kanji: "責任", kana: "せきにん", romaji: "sekinin", hanViet: "Trách nhiệm", meaning: "Trách nhiệm", textMnemonic: "責 (trách) + 任 (giao) = được giao trách nhiệm 📋" },
  { id: "n3-s-72", courseId: "jlpt-n3", kanji: "自由", kana: "じゆう", romaji: "jiyū", hanViet: "Tự do", meaning: "Tự do", textMnemonic: "自 (tự) + 由 (do) = tự làm điều mình muốn 🕊️" },
  { id: "n3-s-73", courseId: "jlpt-n3", kanji: "平和", kana: "へいわ", romaji: "heiwa", hanViet: "Bình hòa", meaning: "Hòa bình", textMnemonic: "平 (bằng) + 和 (hòa) = bình yên hòa thuận ☮️" },
  { id: "n3-s-74", courseId: "jlpt-n3", kanji: "戦争", kana: "せんそう", romaji: "sensō", hanViet: "Chiến tranh", meaning: "Chiến tranh", textMnemonic: "戦 (đánh) + 争 (tranh) = đánh tranh giành ⚔️" },
  { id: "n3-s-75", courseId: "jlpt-n3", kanji: "平和主義", kana: "へいわしゅぎ", romaji: "heiwa shugi", hanViet: "Bình hòa chủ nghĩa", meaning: "Chủ nghĩa hòa bình", textMnemonic: "平和 (hòa bình) + 主義 (chủ nghĩa) = tư tưởng hòa bình 🕊️" },

  { id: "n3-s-76", courseId: "jlpt-n3", kanji: "デモ", kana: "デモ", romaji: "demo", hanViet: "(Ngoại lai)", meaning: "Biểu tình", textMnemonic: "Demonstration = biểu tình từ tiếng Anh ✊" },
  { id: "n3-s-77", courseId: "jlpt-n3", kanji: "ストライキ", kana: "ストライキ", romaji: "sutoraiki", hanViet: "(Ngoại lai)", meaning: "Đình công", textMnemonic: "Strike = đình công từ tiếng Anh ✊" },
  { id: "n3-s-78", courseId: "jlpt-n3", kanji: "組合", kana: "くみあい", romaji: "kumiai", hanViet: "Tổ hợp", meaning: "Công đoàn/Hợp tác xã", textMnemonic: "組 (kết hợp) + 合 (gặp) = tổ chức kết hợp 🤝" },
  { id: "n3-s-79", courseId: "jlpt-n3", kanji: "支持", kana: "しじ", romaji: "shiji", hanViet: "Chi trì", meaning: "Hỗ trợ/Ủng hộ", textMnemonic: "支 (chống) + 持 (giữ) = chống giữ ủng hộ 👍" },
  { id: "n3-s-80", courseId: "jlpt-n3", kanji: "反対", kana: "はんたい", romaji: "hantai", hanViet: "Phản đối", meaning: "Phản đối", textMnemonic: "反 (ngược) + 対 (đối) = ngược đối lại 👎" },

  { id: "n3-s-81", courseId: "jlpt-n3", kanji: "賛成", kana: "さんせい", romaji: "sansei", hanViet: "Tán thành", meaning: "Tán thành/Đồng ý", textMnemonic: "賛 (khen) + 成 (thành) = khen thành công 👍" },
  { id: "n3-s-82", courseId: "jlpt-n3", kanji: "反対運動", kana: "はんたいうんどう", romaji: "hantai undō", hanViet: "Phản đối vận động", meaning: "Phong trào phản đối", textMnemonic: "反対 (phản đối) + 運動 (vận động) = vận động phản đối ✊" },
  { id: "n3-s-83", courseId: "jlpt-n3", kanji: "活動", kana: "かつどう", romaji: "katsudō", hanViet: "Hoạt động", meaning: "Hoạt động", textMnemonic: "活 (sống) + 動 (động) = hành động sống 🏃" },
  { id: "n3-s-84", courseId: "jlpt-n3", kanji: "社会問題", kana: "しゃかいもんだい", romaji: "shakai mondai", hanViet: "Xã hội vấn đề", meaning: "Vấn đề xã hội", textMnemonic: "社会 (xã hội) + 問題 (vấn đề) = vấn đề của xã hội 🌐" },
  { id: "n3-s-85", courseId: "jlpt-n3", kanji: "環境問題", kana: "かんきょうもんだい", romaji: "kankyō mondai", hanViet: "Hoàn cảnh vấn đề", meaning: "Vấn đề môi trường", textMnemonic: "環境 (môi trường) + 問題 (vấn đề) = vấn đề môi sinh 🌍" },

  { id: "n3-s-86", courseId: "jlpt-n3", kanji: "ボランティア", kana: "ボランティア", romaji: "borantia", hanViet: "(Ngoại lai)", meaning: "Tình nguyện viên", textMnemonic: "Volunteer = tình nguyện viên từ tiếng Anh 🤝" },
  { id: "n3-s-87", courseId: "jlpt-n3", kanji: "寄付", kana: "きふ", romaji: "kifu", hanViet: "Cấp phụ", meaning: "Quyên góp", textMnemonic: "寄 (gửi) + 付 (giao) = gửi giao cho ai 💝" },
  { id: "n3-s-88", courseId: "jlpt-n3", kanji: "福祉", kana: "ふくし", romaji: "fukushi", hanViet: "Phúc chỉ", meaning: "Phúc lợi", textMnemonic: "福 (phúc) + 祉 (chỉ) = phúc chỉ cho mọi người 🤲" },
  { id: "n3-s-89", courseId: "jlpt-n3", kanji: "介護", kana: "かいご", romaji: "kaigo", hanViet: "Cải hộ", meaning: "Chăm sóc (người già/bệnh)", textMnemonic: "介 (giới thiệu) + 護 (bảo vệ) = giới thiệu bảo vệ 👵" },
  { id: "n3-s-90", courseId: "jlpt-n3", kanji: "年金", kana: "ねんきん", romaji: "nenkin", hanViet: "Niên kim", meaning: "Lương hưu", textMnemonic: "年 (năm) + 金 (tiền) = tiền theo năm 👴" },

  { id: "n3-s-91", courseId: "jlpt-n3", kanji: "税金", kana: "ぜいきん", romaji: "zeikin", hanViet: "Thuế kim", meaning: "Thuế", textMnemonic: "税 (thuế) + 金 (tiền) = tiền thuế phải nộp 💰" },
  { id: "n3-s-92", courseId: "jlpt-n3", kanji: "保険料", kana: "ほけんりょう", romaji: "hokenryō", hanViet: "Bảo hiểm liệu", meaning: "Phí bảo hiểm", textMnemonic: "保険 (bảo hiểm) + 料 (phí) = phí bảo hiểm 📋" },
  { id: "n3-s-93", courseId: "jlpt-n3", kanji: "公共", kana: "こうきょう", romaji: "kōkyō", hanViet: "Công cộng", meaning: "Công cộng", textMnemonic: "公 (công) + 共 (cùng) = dùng chung công cộng 🏛️" },
  { id: "n3-s-94", courseId: "jlpt-n3", kanji: "施設", kana: "しせつ", romaji: "shisetsu", hanViet: "Thiết xá", meaning: "Cơ sở/Thiết chế", textMnemonic: "施設 = cơ sở thiết lập 🏢" },
  { id: "n3-s-95", courseId: "jlpt-n3", kanji: "国際", kana: "こくさい", romaji: "kokusai", hanViet: "Quốc tế", meaning: "Quốc tế", textMnemonic: "国 (nước) + 際 (ranh giới) = giữa các nước 🌍" },

  { id: "n3-s-96", courseId: "jlpt-n3", kanji: "国際化", kana: "こくさいか", romaji: "kokusaika", hanViet: "Quốc tế hóa", meaning: "Quốc tế hóa", textMnemonic: "国際 (quốc tế) + 化 (hóa) = trở thành quốc tế 🌐" },
  { id: "n3-s-97", courseId: "jlpt-n3", kanji: "外国人", kana: "がいこくじん", romaji: "gaikokujin", hanViet: "Ngoại quốc nhân", meaning: "Người nước ngoài", textMnemonic: "外国 (nước ngoài) + 人 (người) = người nước khác 👤" },
  { id: "n3-s-98", courseId: "jlpt-n3", kanji: "観光客", kana: "かんこうきゃく", romaji: "kankōkyaku", hanViet: "Quan quang khách", meaning: "Khách du lịch", textMnemonic: "観光 (du lịch) + 客 (khách) = khách đi du lịch 🧳" },
  { id: "n3-s-99", courseId: "jlpt-n3", kanji: "大使館", kana: "たいしかん", romaji: "taishikan", hanViet: "Đại sứ quán", meaning: "Đại sứ quán", textMnemonic: "大使 (đại sứ) + 館 (quán) = tòa nhà đại sứ 🏛️" },
  { id: "n3-s-100", courseId: "jlpt-n3", kanji: "大使", kana: "たいし", romaji: "taishi", hanViet: "Đại sứ", meaning: "Đại sứ", textMnemonic: "大 (lớn) + 使 (sứ) = sứ giả lớn của nước 🏛️" },

  { id: "n3-s-101", courseId: "jlpt-n3", kanji: "貿易", kana: "ぼうえき", romaji: "bōeki", hanViet: "Mậu dịch", meaning: "Mậu dịch", textMnemonic: "貿 (trao đổi) + 易 (dễ) = trao đổi buôn bán 🚢" },
  { id: "n3-s-102", courseId: "jlpt-n3", kanji: "輸出", kana: "ゆしゅつ", romaji: "yushutsu", hanViet: "Xuất xuất", meaning: "Xuất khẩu", textMnemonic: "輸 (chuyển) + 出 (ra) = chuyển hàng ra nước ngoài 📦➡️" },
  { id: "n3-s-103", courseId: "jlpt-n3", kanji: "輸入", kana: "ゆにゅう", romaji: "yunyū", hanViet: "Nhập dữ", meaning: "Nhập khẩu", textMnemonic: "輸 (chuyển) + 入 (vào) = chuyển hàng vào trong nước 📥" },
  { id: "n3-s-104", courseId: "jlpt-n3", kanji: "経済成長", kana: "けいざいせいちょう", romaji: "keizai seichō", hanViet: "Kinh tế thành trưởng", meaning: "Tăng trưởng kinh tế", textMnemonic: "経済 (kinh tế) + 成長 (tăng trưởng) = kinh tế phát triển 📈" },
  { id: "n3-s-105", courseId: "jlpt-n3", kanji: "不景気", kana: "ふけいき", romaji: "fukeiki", hanViet: "Bất cảnh khí", meaning: "Suy thoái/Kinh tế xấu", textMnemonic: "不 (xấu) + 景気 (kinh tế) = kinh tế đi xuống 📉" },

  { id: "n3-s-106", courseId: "jlpt-n3", kanji: "人口", kana: "じんこう", romaji: "jinkō", hanViet: "Nhân khẩu", meaning: "Dân số", textMnemonic: "人 (người) + 口 (miệng) = đếm miệng ăn = dân số 👥" },
  { id: "n3-s-107", courseId: "jlpt-n3", kanji: "過疎", kana: "かそ", romaji: "kaso", hanViet: "Quá sơ", meaning: "Đô thị vắng vẻ", textMnemonic: "過 (quá) + 疎 (xa) = vắng quá mức 🏘️" },
  { id: "n3-s-108", courseId: "jlpt-n3", kanji: "過密", kana: "かみつ", romaji: "kamitsu", hanViet: "Quá mật", meaning: "Quá đông đúc", textMnemonic: "過 (quá) + 密 (mật) = dày đặc quá 🏙️" },
  { id: "n3-s-109", courseId: "jlpt-n3", kanji: "少子化", kana: "しょうしか", romaji: "shōshika", hanViet: "Thiếu tử hóa", meaning: "Giảm sinh", textMnemonic: "少 (ít) + 子 (con) + 化 (hóa) = ít con hóa 👶" },
  { id: "n3-s-110", courseId: "jlpt-n3", kanji: "高齢化", kana: "こうれいか", romaji: "kōreika", hanViet: "Cao niên hóa", meaning: "Già hóa dân số", textMnemonic: "高齢 (cao tuổi) + 化 (hóa) = dân số già đi 👴" },

  { id: "n3-s-111", courseId: "jlpt-n3", kanji: "地域", kana: "ちいき", romaji: "chiiki", hanViet: "Địa vực", meaning: "Khu vực", textMnemonic: "地 (đất) + 域 (vùng) = vùng đất 🗺️" },
  { id: "n3-s-112", courseId: "jlpt-n3", kanji: "地方", kana: "ちほう", romaji: "chihō", hanViet: "Địa phương", meaning: "Địa phương", textMnemonic: "地 (đất) + 方 (phương) = phương hướng đất 🏞️" },
  { id: "n3-s-113", courseId: "jlpt-n3", kanji: "都市", kana: "とし", romaji: "toshi", hanViet: "Đô thị", meaning: "Thành phố", textMnemonic: "都 (đô) + 市 (thị) = thành thị lớn 🏙️" },
  { id: "n3-s-114", courseId: "jlpt-n3", kanji: "田舎", kana: "いなか", romaji: "inaka", hanViet: "Điền hợp", meaning: "Nông thôn", textMnemonic: "田 (ruộng) + 含 (chứa) = vùng chứa ruộng 🌾" },
  { id: "n3-s-115", courseId: "jlpt-n3", kanji: "都会", kana: "とかい", romaji: "tokai", hanViet: "Đô hội", meaning: "Thành thị", textMnemonic: "都 (đô) + 会 (hội) = nơi hội họp lớn 🏙️" },

  { id: "n3-s-116", courseId: "jlpt-n3", kanji: "地域社会", kana: "ちいきしゃかい", romaji: "chiiki shakai", hanViet: "Địa vực xã hội", meaning: "Cộng đồng địa phương", textMnemonic: "地域 (khu vực) + 社会 (xã hội) = xã hội vùng 🏘️" },
  { id: "n3-s-117", courseId: "jlpt-n3", kanji: "お祭り", kana: "おまつり", romaji: "omatsuri", hanViet: "Tế", meaning: "Lễ hội", textMnemonic: "祭 = lễ cúng thần, lễ hội vui 🎆" },
  { id: "n3-s-118", courseId: "jlpt-n3", kanji: "行事", kana: "ぎょうじ", romaji: "gyōji", hanViet: "Hành sự", meaning: "Sự kiện", textMnemonic: "行 (làm) + 事 (việc) = việc cần làm theo lịch 📅" },
  { id: "n3-s-119", courseId: "jlpt-n3", kanji: "伝統", kana: "でんとう", romaji: "dentō", hanViet: "Truyền thống", meaning: "Truyền thống", textMnemonic: "伝 (truyền) + 統 (thống) = truyền thống qua thế hệ 🏮" },
  { id: "n3-s-120", courseId: "jlpt-n3", kanji: "習慣", kana: "しゅうかん", romaji: "shūkan", hanViet: "Tục quán", meaning: "Tập quán/Thói quen", textMnemonic: "習 (học) + 慣 (quen) = học cho quen thành thói quen 🔄" },

  { id: "n3-s-121", courseId: "jlpt-n3", kanji: "文化", kana: "ぶんか", romaji: "bunka", hanViet: "Văn hóa", meaning: "Văn hóa", textMnemonic: "文 (văn) + 化 (hóa) = văn hóa hóa bản sắc 🎭" },
  { id: "n3-s-122", courseId: "jlpt-n3", kanji: "宗教", kana: "しゅうきょう", romaji: "shūkyō", hanViet: "Tôn giáo", meaning: "Tôn giáo", textMnemonic: "宗 (tông) + 教 (giáo) = tông phái giáo dục tinh thần ⛩️" },
  { id: "n3-s-123", courseId: "jlpt-n3", kanji: "神社", kana: "じんじゃ", romaji: "jinja", hanViet: "Thần xã", meaning: "Đền thờ Thần đạo", textMnemonic: "神 (thần) + 社 (xã) = nơi thờ thần ⛩️" },
  { id: "n3-s-124", courseId: "jlpt-n3", kanji: "寺", kana: "てら", romaji: "tera", hanViet: "Tự", meaning: "Chùa", textMnemonic: "寺 = nơi thờ Phật 🏯" },
  { id: "n3-s-125", courseId: "jlpt-n3", kanji: "教会", kana: "きょうかい", romaji: "kyōkai", hanViet: "Giáo hội", meaning: "Nhà thờ", textMnemonic: "教 (giáo) + 会 (hội) = nơi hội giáo lý ⛪" },

  { id: "n3-s-126", courseId: "jlpt-n3", kanji: "価値観", kana: "かちかん", romaji: "kachikan", hanViet: "Giá trị quan", meaning: "Giá trị quan", textMnemonic: "価値 (giá trị) + 観 (nhìn) = cách nhìn giá trị 💎" },
  { id: "n3-s-127", courseId: "jlpt-n3", kanji: "常識", kana: "じょうしき", romaji: "jōshiki", hanViet: "Thường thức", meaning: "Thường thức/Lẽ thường", textMnemonic: "常 (thường) + 識 (biết) = biết thường lệ 🧠" },
  { id: "n3-s-128", courseId: "jlpt-n3", kanji: "礼儀", kana: "れいぎ", romaji: "reigi", hanViet: "Lễ nghĩa", meaning: "Lễ nghĩa", textMnemonic: "礼 (lễ) + 儀 (nghi thức) = nghi thức lễ 🎎" },
  { id: "n3-s-129", courseId: "jlpt-n3", kanji: "作法", kana: "さほう", romaji: "sahō", hanViet: "Tác pháp", meaning: "Phép tắc", textMnemonic: "作 (làm) + 法 (phép) = làm theo phép tắc 📜" },
  { id: "n3-s-130", courseId: "jlpt-n3", kanji: "エチケット", kana: "エチケット", romaji: "echiketto", hanViet: "(Ngoại lai)", meaning: "Phép lịch sự", textMnemonic: "Etiquette = phép tắc từ tiếng Pháp 🤝" },
];
