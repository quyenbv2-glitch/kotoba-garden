/**
 * JLPT N3 - Ngữ pháp N3
 * Các mẫu ngữ pháp quan trọng cấp độ N3 với giải thích tiếng Việt
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_GRAMMAR: Word[] = [
  // Mẫu câu điều kiện & giả định
  { id: "n3-grammar-1", courseId: "jlpt-n3", kanji: "〜ば", kana: "〜ば", romaji: "~ba", hanViet: "Nhược", meaning: "Nếu... thì (điều kiện giả định)", textMnemonic: "〜ば: Nếu... thì (diễn tả điều kiện chung chung) 📝" },
  { id: "n3-grammar-2", courseId: "jlpt-n3", kanji: "〜なら", kana: "〜なら", romaji: "~nara", hanViet: "Nhược", meaning: "Nếu là... thì (dựa trên thông tin đã biết)", textMnemonic: "〜なら: Nếu là... thì (sau khi nghe thông tin) 💭" },
  { id: "n3-grammar-3", courseId: "jlpt-n3", kanji: "〜と", kana: "〜と", romaji: "~to", hanViet: "Tương", meaning: "Nếu... thì / Mỗi khi...", textMnemonic: "〜と: Diễn tả điều kiện tự nhiên hoặc thói quen 🔄" },
  { id: "n3-grammar-4", courseId: "jlpt-n3", kanji: "〜たら", kana: "〜たら", romaji: "~tara", hanViet: "Đương", meaning: "Nếu... thì / Sau khi...", textMnemonic: "〜たら: Nếu... thì (khi hoàn thành hành động) ✅" },
  { id: "n3-grammar-5", courseId: "jlpt-n3", kanji: "〜のに", kana: "〜のに", romaji: "~noni", hanViet: "Chi nhĩ", meaning: "Mặc dù... (trái với kỳ vọng)", textMnemonic: "〜のに: Mặc dù... (thường có cảm xúc tiếc nuối) 😔" },
  { id: "n3-grammar-6", courseId: "jlpt-n3", kanji: "〜ので", kana: "〜ので", romaji: "~node", hanViet: "Sở dĩ", meaning: "Vì... nên...", textMnemonic: "〜ので: Vì... nên (lý do khách quan) 📋" },
  { id: "n3-grammar-7", courseId: "jlpt-n3", kanji: "〜から", kana: "〜から", romaji: "~kara", hanViet: "Cố", meaning: "Vì... nên... (chủ quan)", textMnemonic: "〜から: Vì... nên (lý do chủ quan) 💬" },

  // Mẫu câu thể TE
  { id: "n3-grammar-8", courseId: "jlpt-n3", kanji: "〜てしまう", kana: "〜てしまう", romaji: "~te shimau", hanViet: "Chung thủ", meaning: "Lỡ... / Đã... xong (hối tiếc/bất ngờ)", textMnemonic: "〜てしまう: Lỡ làm / không thể hủy (nhiều khi hối tiếc) 😅" },
  { id: "n3-grammar-9", courseId: "jlpt-n3", kanji: "〜ておく", kana: "〜ておく", romaji: "~te oku", hanViet: "Thủ ức", meaning: "Làm trước / để dành", textMnemonic: "〜ておく: Làm trước để chuẩn bị 📦" },
  { id: "n3-grammar-10", courseId: "jlpt-n3", kanji: "〜てみる", kana: "〜てみる", romaji: "~te miru", hanViet: "Thủ quan", meaning: "Thử làm gì", textMnemonic: "〜てみる: Thử xem sao 🤔" },
  { id: "n3-grammar-11", courseId: "jlpt-n3", kanji: "〜てくる", kana: "〜てくる", romaji: "~te kuru", hanViet: "Thủ lai", meaning: "Bắt đầu / Đã làm và mang đến", textMnemonic: "〜てくる: Hành động diễn ra từ quá khứ đến hiện tại ⏮️" },
  { id: "n3-grammar-12", courseId: "jlpt-n3", kanji: "〜ていく", kana: "〜ていく", romaji: "~te iku", hanViet: "Thủ khứ", meaning: "Tiếp tục / Hành động từ hiện tại đến tương lai", textMnemonic: "〜ていく: Hành động từ hiện tại tiếp diễn ⏭️" },
  { id: "n3-grammar-13", courseId: "jlpt-n3", kanji: "〜てあげる", kana: "〜てあげる", romaji: "~te ageru", hanViet: "Thủ cấp", meaning: "Làm cho ai (giúp đỡ)", textMnemonic: "〜てあげる: Làm gì giúp người khác 🤝" },
  { id: "n3-grammar-14", courseId: "jlpt-n3", kanji: "〜てもらう", kana: "〜てもらう", romaji: "~te morau", hanViet: "Thủ thâu", meaning: "Được ai làm cho", textMnemonic: "〜てもらう: Nhờ người khác làm cho 🙇" },
  { id: "n3-grammar-15", courseId: "jlpt-n3", kanji: "〜てくれる", kana: "〜てくれる", romaji: "~te kureru", hanViet: "Thủ khứ giả", meaning: "Ai đó làm cho mình (biết ơn)", textMnemonic: "〜てくれる: Người khác làm cho mình (cảm kích) 💝" },

  // Mẫu danh từ hóa
  { id: "n3-grammar-16", courseId: "jlpt-n3", kanji: "〜こと", kana: "〜こと", romaji: "~koto", hanViet: "Sự việc", meaning: "Việc... (danh từ hóa)", textMnemonic: "〜こと: biến động từ/tính từ thành danh từ 'việc' 📌" },
  { id: "n3-grammar-17", courseId: "jlpt-n3", kanji: "〜もの", kana: "〜もの", romaji: "~mono", hanViet: "Vật", meaning: "Cái/vật... (danh từ hóa)", textMnemonic: "〜もの: 'cái/vật' - thường cho đồ vật cụ thể 🎁" },
  { id: "n3-grammar-18", courseId: "jlpt-n3", kanji: "〜ところ", kana: "〜ところ", romaji: "~tokoro", hanViet: "Xứ sở", meaning: "Nơi... / Chỗ... / Lúc...", textMnemonic: "〜ところ: nơi chốn, thời điểm 📍" },
  { id: "n3-grammar-19", courseId: "jlpt-n3", kanji: "〜ため", kana: "〜ため", romaji: "~tame", hanViet: "Vi", meaning: "Vì... / Để... / Cho mục đích", textMnemonic: "〜ため: vì lý do / cho mục đích 🎯" },
  { id: "n3-grammar-20", courseId: "jlpt-n3", kanji: "〜ように", kana: "〜ように", romaji: "~you ni", hanViet: "Dạng", meaning: "Để... / Theo cách...", textMnemonic: "〜ように: để cho / sao cho (mục đích hoặc cách thức) 🎯" },

  // Trợ từ & liên từ
  { id: "n3-grammar-21", courseId: "jlpt-n3", kanji: "〜について", kana: "〜について", romaji: "~ni tsuite", hanViet: "Quan ư", meaning: "Về... / Liên quan đến...", textMnemonic: "〜について: nói về chủ đề gì 📚" },
  { id: "n3-grammar-22", courseId: "jlpt-n3", kanji: "〜によると", kana: "〜によると", romaji: "~ni yoru to", hanViet: "Dĩ", meaning: "Theo... (nguồn thông tin)", textMnemonic: "〜によると: theo (nguồn) nói rằng... 📰" },
  { id: "n3-grammar-23", courseId: "jlpt-n3", kanji: "〜を通して", kana: "〜を通して", romaji: "~wo toushite", hanViet: "Thông qua", meaning: "Thông qua...", textMnemonic: "〜を通して: thông qua phương tiện gì 🌐" },
  { id: "n3-grammar-24", courseId: "jlpt-n3", kanji: "〜に対して", kana: "〜に対して", romaji: "~ni taishite", hanViet: "Đối xử", meaning: "Đối với...", textMnemonic: "〜に対して: đối với / so với (đối tượng) 👤" },
  { id: "n3-grammar-25", courseId: "jlpt-n3", kanji: "〜によって", kana: "〜によって", romaji: "~ni yotte", hanViet: "Dĩ", meaning: "Tùy theo... / Bởi...", textMnemonic: "〜によって: tùy theo / do (phương pháp, nguyên nhân) ⚙️" },

  // Mẫu tiếp diễn
  { id: "n3-grammar-26", courseId: "jlpt-n3", kanji: "〜ている", kana: "〜ている", romaji: "~te iru", hanViet: "Thủ ư", meaning: "Đang làm... (tiếp diễn/trạng thái)", textMnemonic: "〜ている: đang làm gì hoặc trạng thái ⏳" },
  { id: "n3-grammar-27", courseId: "jlpt-n3", kanji: "〜てしまう", kana: "〜てしまう", romaji: "~te shimau", hanViet: "Chung thủ", meaning: "Lỡ làm... (hối tiếc)", textMnemonic: "〜てしまう: lỡ làm / đã xong (tiếc nuối) 😩" },
  { id: "n3-grammar-28", courseId: "jlpt-n3", kanji: "〜ばよかった", kana: "〜ばよかった", romaji: "~ba yokatta", hanViet: "Nhược thiện hảo", meaning: "Giá mà... đã làm", textMnemonic: "〜ばよかった: giá như đã làm (tiếc nuối) 😢" },
  { id: "n3-grammar-29", courseId: "jlpt-n3", kanji: "〜たらどう", kana: "〜たらどう", romaji: "~tara dou", hanViet: "Đương đồ", meaning: "Nếu... thì sao? (gợi ý)", textMnemonic: "〜たらどう: thử làm thì sao (khuyên nhủ) 💡" },
  { id: "n3-grammar-30", courseId: "jlpt-n3", kanji: "〜ようにする", kana: "〜ようにする", romaji: "~you ni suru", hanViet: "Dạng vi", meaning: "Cố gắng làm gì (thói quen)", textMnemonic: "〜ようにする: cố gắng để làm thường xuyên 💪" },

  // Mẫu nâng cao
  { id: "n3-grammar-31", courseId: "jlpt-n3", kanji: "〜ことになる", kana: "〜ことになる", romaji: "~koto ni naru", hanViet: "Sự việc hóa", meaning: "Được quyết định là... / Sẽ...", textMnemonic: "〜ことになる: đã quyết định (không phải ý mình) 📋" },
  { id: "n3-grammar-32", courseId: "jlpt-n3", kanji: "〜ようにする", kana: "〜ようにする", romaji: "~you ni suru", hanViet: "Dạng vi", meaning: "Cố ý làm / Tập làm", textMnemonic: "〜ようにする: tự mình cố gắng làm 💪" },
  { id: "n3-grammar-33", courseId: "jlpt-n3", kanji: "〜ことができる", kana: "〜ことができる", romaji: "~koto ga dekiru", hanViet: "Sự việc năng", meaning: "Có thể làm gì", textMnemonic: "〜ことができる: có khả năng / có thể (lịch sự hơn 'できる') ✨" },
  { id: "n3-grammar-34", courseId: "jlpt-n3", kanji: "〜かもしれない", kana: "〜かもしれない", romaji: "~kamo shirenai", hanViet: "Khả năng", meaning: "Có thể... / Biết đâu...", textMnemonic: "〜かもしれない: có lẽ / biết đâu (suy đoán) 🤔" },
  { id: "n3-grammar-35", courseId: "jlpt-n3", kanji: "〜に違いない", kana: "〜に違いない", romaji: "~ni chigai nai", hanViet: "Dị sai bất", meaning: "Chắc chắn là...", textMnemonic: "〜に違いない: chắc chắn 100% là vậy 💯" },
  { id: "n3-grammar-36", courseId: "jlpt-n3", kanji: "〜はずだ", kana: "〜はずだ", romaji: "~hazu da", hanViet: "Phân tự", meaning: "Lẽ ra phải... / Chắc là...", textMnemonic: "〜はずだ: lẽ ra phải như vậy (kỳ vọng) ✅" },
  { id: "n3-grammar-37", courseId: "jlpt-n3", kanji: "〜つもりだ", kana: "〜つもりだ", romaji: "~tsumori da", hanViet: "Dự định", meaning: "Định làm... / Có ý định", textMnemonic: "〜つもりだ: tôi định làm / có ý định 💭" },
  { id: "n3-grammar-38", courseId: "jlpt-n3", kanji: "〜予定だ", kana: "〜予定だ", romaji: "~yotei da", hanViet: "Dự định", meaning: "Có kế hoạch / Dự định", textMnemonic: "〜予定だ: đã lên kế hoạch sẵn 📅" },
  { id: "n3-grammar-39", courseId: "jlpt-n3", kanji: "〜ようにする", kana: "〜ようにする", romaji: "~you ni suru", hanViet: "Dạng vi", meaning: "Cố gắng làm (thường xuyên)", textMnemonic: "〜ようにする: cố ý tạo thói quen 🔄" },
  { id: "n3-grammar-40", courseId: "jlpt-n3", kanji: "〜ことにする", kana: "〜ことにする", romaji: "~koto ni suru", hanViet: "Sự việc thủ", meaning: "Quyết định sẽ làm", textMnemonic: "〜ことにする: tự mình quyết định làm ✋" },

  // Mẫu năng ngữ & bị động
  { id: "n3-grammar-41", courseId: "jlpt-n3", kanji: "〜させる", kana: "〜させる", romaji: "~saseru", hanViet: "Sử chi", meaning: "Bắt/cho ai làm gì (cưỡng ép)", textMnemonic: "〜させる: bắt ai làm gì (cho phép/bắt buộc) 👊" },
  { id: "n3-grammar-42", courseId: "jlpt-n3", kanji: "〜られる", kana: "〜られる", romaji: "~rareru", hanViet: "Lợi chi", meaning: "Bị... / Có thể...", textMnemonic: "〜られる: bị động / khả năng 🎭" },
  { id: "n3-grammar-43", courseId: "jlpt-n3", kanji: "〜てくれる", kana: "〜てくれる", romaji: "~te kureru", hanViet: "Thủ giả", meaning: "Ai đó giúp mình", textMnemonic: "〜てくれる: người khác làm cho mình 💝" },
  { id: "n3-grammar-44", courseId: "jlpt-n3", kanji: "〜てもらう", kana: "〜てもらう", romaji: "~te morau", hanViet: "Thủ thâu", meaning: "Được ai đó làm cho", textMnemonic: "〜てもらう: mình nhận được sự giúp đỡ 🙇" },
  { id: "n3-grammar-45", courseId: "jlpt-n3", kanji: "〜てあげる", kana: "〜てあげる", romaji: "~te ageru", hanViet: "Thủ cấp", meaning: "Mình làm cho ai", textMnemonic: "〜てあげる: mình giúp người khác 🤝" },

  // Mẫu giả định nâng cao
  { id: "n3-grammar-46", courseId: "jlpt-n3", kanji: "〜としたら", kana: "〜としたら", romaji: "~to shitara", hanViet: "Tương thị", meaning: "Nếu giả sử...", textMnemonic: "〜としたら: nếu giả sử là vậy 🤔" },
  { id: "n3-grammar-47", courseId: "jlpt-n3", kanji: "〜とすれば", kana: "〜とすれば", romaji: "~to sureba", hanViet: "Tương thị", meaning: "Nếu giả sử...", textMnemonic: "〜とすれば: nếu giả định rằng 🧠" },
  { id: "n3-grammar-48", courseId: "jlpt-n3", kanji: "〜ても", kana: "〜ても", romaji: "~temo", hanViet: "Chung diệc", meaning: "Dù có... cũng...", textMnemonic: "〜ても: dù có làm gì cũng... 🛡️" },
  { id: "n3-grammar-49", courseId: "jlpt-n3", kanji: "〜なくても", kana: "〜なくても", romaji: "~nakutemo", hanViet: "Bất diệc", meaning: "Ngay cả khi không...", textMnemonic: "〜なくても: thậm chí không cần làm ✨" },
  { id: "n3-grammar-50", courseId: "jlpt-n3", kanji: "〜だけでなく", kana: "〜だけでなく", romaji: "~dake de naku", hanViet: "Độc bất", meaning: "Không chỉ... mà còn...", textMnemonic: "〜だけでなく: không chỉ A mà còn B ➕" },

  // Mẫu câu phức tạp
  { id: "n3-grammar-51", courseId: "jlpt-n3", kanji: "〜か〜か", kana: "〜か〜か", romaji: "~ka~ka", hanViet: "Hoặc", meaning: "... hay là... / Hoặc... hoặc...", textMnemonic: "〜か〜か: lựa chọn A hay B ❓" },
  { id: "n3-grammar-52", courseId: "jlpt-n3", kanji: "〜かどうか", kana: "〜かどうか", romaji: "~ka dou ka", hanViet: "Hợp bất hợp", meaning: "Có... hay không", textMnemonic: "〜かどうか: nghi vấn có/không ❓" },
  { id: "n3-grammar-53", courseId: "jlpt-n3", kanji: "〜ようだ", kana: "〜ようだ", romaji: "~you da", hanViet: "Dạng", meaning: "Có vẻ như... / Giống như...", textMnemonic: "〜ようだ: dường như / giống (suy đoán) 👀" },
  { id: "n3-grammar-54", courseId: "jlpt-n3", kanji: "〜そうだ", kana: "〜そうだ", romaji: "~sou da", hanViet: "Tướng", meaning: "Có vẻ... / Hình như... / Nghe nói...", textMnemonic: "〜そうだ: hình như / có vẻ (dựa trên quan sát) 👀" },
  { id: "n3-grammar-55", courseId: "jlpt-n3", kanji: "〜らしい", kana: "〜らしい", romaji: "~rashii", hanViet: "Lợi tự", meaning: "Có vẻ như... (nghe nói)", textMnemonic: "〜らしい: hình như (nghe từ nguồn khác) 📢" },
  { id: "n3-grammar-56", courseId: "jlpt-n3", kanji: "〜べき", kana: "〜べき", romaji: "~beki", hanViet: "Bỉ", meaning: "Nên... / Phải...", textMnemonic: "〜べき: nên làm / phải làm (nghĩa vụ) ⚖️" },
  { id: "n3-grammar-57", courseId: "jlpt-n3", kanji: "〜のに", kana: "〜のに", romaji: "~noni", hanViet: "Chi nhĩ", meaning: "Trong khi... (mâu thuẫn)", textMnemonic: "〜のに: trong khi đáng lẽ (ngạc nhiên) 😲" },
  { id: "n3-grammar-58", courseId: "jlpt-n3", kanji: "〜のに", kana: "〜のに", romaji: "~noni", hanViet: "Chi nhĩ", meaning: "Để... (mục đích)", textMnemonic: "〜のに: để làm gì (mục đích rõ ràng) 🎯" },
  { id: "n3-grammar-59", courseId: "jlpt-n3", kanji: "〜おかげで", kana: "〜おかげで", romaji: "~okage de", hanViet: "Âm huệ", meaning: "Nhờ có... / Nhờ ơn...", textMnemonic: "〜おかげで: nhờ ơn ai đó (tích cực) 🙏" },
  { id: "n3-grammar-60", courseId: "jlpt-n3", kanji: "〜せいで", kana: "〜せいで", romaji: "~sei de", hanViet: "Tội dĩ", meaning: "Tại... / Vì... (tiêu cực)", textMnemonic: "〜せいで: tại ai đó (tiêu cực) 😞" },

  // Trợ từ cuối câu
  { id: "n3-grammar-61", courseId: "jlpt-n3", kanji: "〜よ", kana: "〜よ", romaji: "~yo", hanViet: "Dã", meaning: "Nhé / Đấy (nhấn mạnh, nữ nói)", textMnemonic: "〜よ: nhé (nữ giới hay dùng, nhấn mạnh) 👧" },
  { id: "n3-grammar-62", courseId: "jlpt-n3", kanji: "〜ね", kana: "〜ね", romaji: "~ne", hanViet: "Nhi", meaning: "Nhỉ? (tìm sự đồng tình)", textMnemonic: "〜ね: nhỉ? (tìm kiếm sự đồng ý) 🤔" },
  { id: "n3-grammar-63", courseId: "jlpt-n3", kanji: "〜な", kana: "〜な", romaji: "~na", hanViet: "Nại", meaning: "Nhé (nam giới, giống 'よ')", textMnemonic: "〜な: nam giới nói thay 'よ' 👨" },
  { id: "n3-grammar-64", courseId: "jlpt-n3", kanji: "〜さ", kana: "〜さ", romaji: "~sa", hanViet: "Tá", meaning: "Đấy / Nha (thân mật, nam)", textMnemonic: "〜さ: thân mật (nam giới hay dùng) 🤙" },
  { id: "n3-grammar-65", courseId: "jlpt-n3", kanji: "〜か", kana: "〜か", romaji: "~ka", hanViet: "Hợp", meaning: "... à? / ... sao? (nghi vấn)", textMnemonic: "〜か: nghi vấn nhẹ ❓" },
  { id: "n3-grammar-66", courseId: "jlpt-n3", kanji: "〜のだ", kana: "〜のだ", romaji: "~noda", hanViet: "Chỉ", meaning: "... đấy (giải thích, nhấn mạnh)", textMnemonic: "〜のだ: giải thích lý do / nhấn mạnh 💡" },
  { id: "n3-grammar-67", courseId: "jlpt-n3", kanji: "〜のに", kana: "〜のに", romaji: "~noni", hanViet: "Chi nhĩ", meaning: "Đáng lẽ... (tiếc nuối)", textMnemonic: "〜のに: đáng lẽ phải (tiếc nuối) 😔" },
  { id: "n3-grammar-68", courseId: "jlpt-n3", kanji: "〜ものだ", kana: "〜ものだ", romaji: "~mono da", hanViet: "Vật", meaning: "Đáng lẽ... / Lẽ ra...", textMnemonic: "〜ものだ: lẽ ra nên (mang tính phổ quát) 🌍" },
  { id: "n3-grammar-69", courseId: "jlpt-n3", kanji: "〜ようにする", kana: "〜ようにする", romaji: "~you ni suru", hanViet: "Dạng vi", meaning: "Cố gắng làm (tạo thói quen)", textMnemonic: "〜ようにする: cố ý hình thành thói quen 🔄" },
  { id: "n3-grammar-70", courseId: "jlpt-n3", kanji: "〜ことにする", kana: "〜ことにする", romaji: "~koto ni suru", hanViet: "Sự việc thủ", meaning: "Quyết định sẽ làm (ý chí)", textMnemonic: "〜ことにする: tự quyết định ✋" },

  // Mẫu nâng cao khác
  { id: "n3-grammar-71", courseId: "jlpt-n3", kanji: "〜一方だ", kana: "〜一方だ", romaji: "~ippou da", hanViet: "Nhất phương", meaning: "Ngày càng... (xu hướng)", textMnemonic: "〜一方だ: ngày càng có xu hướng tăng 📈" },
  { id: "n3-grammar-72", courseId: "jlpt-n3", kanji: "〜がちだ", kana: "〜がちだ", romaji: "~gachi da", hanViet: "Tật chỉ", meaning: "Hay... / Dễ...", textMnemonic: "〜がちだ: thường hay / dễ bị (tiêu cực) 😓" },
  { id: "n3-grammar-73", courseId: "jlpt-n3", kanji: "〜にくい", kana: "〜にくい", romaji: "~nikui", hanViet: "Nan khả", meaning: "Khó... (làm gì)", textMnemonic: "〜にくい: khó làm / bất tiện 🚧" },
  { id: "n3-grammar-74", courseId: "jlpt-n3", kanji: "〜やすい", kana: "〜やすい", romaji: "~yasui", hanViet: "Dị", meaning: "Dễ... (làm gì)", textMnemonic: "〜やすい: dễ dàng / dễ chịu 😊" },
  { id: "n3-grammar-75", courseId: "jlpt-n3", kanji: "〜すぎる", kana: "〜すぎる", romaji: "~sugiru", hanViet: "Quá", meaning: "Quá... / Làm quá mức", textMnemonic: "〜すぎる: quá mức / quá đà ⚠️" },
  { id: "n3-grammar-76", courseId: "jlpt-n3", kanji: "〜始める", kana: "〜始める", romaji: "~hajimeru", hanViet: "Thỉ thủ", meaning: "Bắt đầu làm...", textMnemonic: "〜始める: bắt đầu làm gì 🚀" },
  { id: "n3-grammar-77", courseId: "jlpt-n3", kanji: "〜続ける", kana: "〜続ける", romaji: "~tsuzukeru", hanViet: "Trì tiếp", meaning: "Tiếp tục làm...", textMnemonic: "〜続ける: tiếp tục làm liên tục ➡️" },
  { id: "n3-grammar-78", courseId: "jlpt-n3", kanji: "〜終わる", kana: "〜終わる", romaji: "~owaru", hanViet: "Chung liễu", meaning: "Làm xong...", textMnemonic: "〜終わる: hoàn thành xong 🏁" },
  { id: "n3-grammar-79", courseId: "jlpt-n3", kanji: "〜出す", kana: "〜出す", romaji: "~dasu", hanViet: "Xuất", meaning: "Bắt đầu... / Làm ra ngoài", textMnemonic: "〜出す: bắt đầu đột ngột / đưa ra 📤" },
  { id: "n3-grammar-80", courseId: "jlpt-n3", kanji: "〜直す", kana: "〜直す", romaji: "~naosu", hanViet: "Trực", meaning: "Làm lại / Sửa", textMnemonic: "〜直す: làm lại từ đầu / sửa chữa 🔄" },

  // Mẫu từ nối & liên kết
  { id: "n3-grammar-81", courseId: "jlpt-n3", kanji: "〜し〜し", kana: "〜し〜し", romaji: "~shi ~shi", hanViet: "Thị thị", meaning: "Vừa... vừa... / Lại... lại...", textMnemonic: "〜し〜し: liệt kê nhiều lý do 📝" },
  { id: "n3-grammar-82", courseId: "jlpt-n3", kanji: "〜たり〜たり", kana: "〜たり〜たり", romaji: "~tari ~tari", hanViet: "Đương", meaning: "Khi... khi... / Làm gì đó rồi...", textMnemonic: "〜たり〜たり: khi A khi B (không theo thứ tự) 🔀" },
  { id: "n3-grammar-83", courseId: "jlpt-n3", kanji: "〜のに", kana: "〜のに", romaji: "~noni", hanViet: "Chi nhĩ", meaning: "Tuy... (trái với mong đợi)", textMnemonic: "〜のに: tuy nhiên / đáng tiếc 😞" },
  { id: "n3-grammar-84", courseId: "jlpt-n3", kanji: "〜ながら", kana: "〜ながら", romaji: "~nagara", hanViet: "Nhiên lai", meaning: "Trong khi... / Vừa... vừa...", textMnemonic: "〜ながら: vừa làm A vừa làm B 🤹" },
  { id: "n3-grammar-85", courseId: "jlpt-n3", kanji: "〜つつ", kana: "〜つつ", romaji: "~tsutsu", hanViet: "Tư", meaning: "Trong khi... (văn viết)", textMnemonic: "〜つつ: trong khi (văn viết) 📚" },
  { id: "n3-grammar-86", courseId: "jlpt-n3", kanji: "〜にもかかわらず", kana: "〜にもかかわらず", romaji: "~nimokakawarazu", hanViet: "Bất cảo", meaning: "Mặc dù... (văn viết)", textMnemonic: "〜にもかかわらず: mặc kệ / dù sao đi nữa (văn viết) 📜" },
  { id: "n3-grammar-87", courseId: "jlpt-n3", kanji: "〜ものの", kana: "〜ものの", romaji: "~mono no", hanViet: "Vật chỉ", meaning: "Mặc dù... nhưng...", textMnemonic: "〜ものの: tuy... nhưng (văn viết) 📜" },
  { id: "n3-grammar-88", courseId: "jlpt-n3", kanji: "〜くせに", kana: "〜くせに", romaji: "~kuse ni", hanViet: "Quái", meaning: "Mặc dù... (phê bình)", textMnemonic: "〜くせに: đáng lẽ không nên (phê bình) 😠" },
  { id: "n3-grammar-89", courseId: "jlpt-n3", kanji: "〜わりに", kana: "〜わりに", romaji: "~wari ni", hanViet: "Cách lệ", meaning: "So với... thì...", textMnemonic: "〜わりに: so với mức đó thì... ⚖️" },
  { id: "n3-grammar-90", courseId: "jlpt-n3", kanji: "〜にしては", kana: "〜にしては", romaji: "~ni shite wa", hanViet: "Vi thị", meaning: "Với mức... đó thì...", textMnemonic: "〜にしては: xét về mức đó thì... 🤔" },

  // Mẫu trang trọng
  { id: "n3-grammar-91", courseId: "jlpt-n3", kanji: "〜ております", kana: "〜ております", romaji: "~te orimasu", hanViet: "Thủ ư", meaning: "Đang làm... (kính ngữ)", textMnemonic: "〜ております: đang (kính ngữ) 🙏" },
  { id: "n3-grammar-92", courseId: "jlpt-n3", kanji: "〜ていただく", kana: "〜ていただく", romaji: "~te itadaku", hanViet: "Thủ thủ", meaning: "Được ai làm cho (khiêm nhường)", textMnemonic: "〜ていただく: nhờ vả (khiêm nhường) 🙏" },
  { id: "n3-grammar-93", courseId: "jlpt-n3", kanji: "〜てさしあげる", kana: "〜てさしあげる", romaji: "~te sashiageru", hanViet: "Thủ chỉ thượng", meaning: "Làm cho ai (khiêm nhường)", textMnemonic: "〜てさしあげる: mình làm cho (khiêm nhường) 🤝" },
  { id: "n3-grammar-94", courseId: "jlpt-n3", kanji: "〜てくださる", kana: "〜てくださる", romaji: "~te kudasaru", hanViet: "Thủ cố", meaning: "Ai làm cho mình (kính ngữ)", textMnemonic: "〜てくださる: người trên làm cho (kính ngữ) 💝" },
  { id: "n3-grammar-95", courseId: "jlpt-n3", kanji: "〜てまいりますが", kana: "〜てまいりますが", romaji: "~te mairimasu ga", hanViet: "Thủ lai", meaning: "Xin phép... (cực kỳ lịch sự)", textMnemonic: "〜てまいりますが: xin phép làm (cực lịch sự) 🙏" },
  { id: "n3-grammar-96", courseId: "jlpt-n3", kanji: "お〜する", kana: "お〜する", romaji: "o~suru", hanViet: "Ô thủ", meaning: "Làm... (khiêm nhường)", textMnemonic: "お〜する: làm (khiêm nhường với từ kính ngữ) 🙏" },
  { id: "n3-grammar-97", courseId: "jlpt-n3", kanji: "お〜いたす", kana: "お〜いたす", romaji: "o~itasu", hanViet: "Ô chí", meaning: "Làm... (khiêm nhường cao)", textMnemonic: "お〜いたす: làm (khiêm nhường rất cao) 🙏" },
  { id: "n3-grammar-98", courseId: "jlpt-n3", kanji: "お〜になる", kana: "お〜になる", romaji: "o~ni naru", hanViet: "Ô hóa", meaning: "... đi (kính ngữ)", textMnemonic: "お〜になる: thực hiện hành động (kính ngữ người trên) 👑" },
  { id: "n3-grammar-99", courseId: "jlpt-n3", kanji: "〜られる", kana: "〜られる", romaji: "~rareru", hanViet: "Lợi", meaning: "Bị động / Kính ngữ", textMnemonic: "〜られる: bị động hoặc kính ngữ thể 🌸" },
  { id: "n3-grammar-100", courseId: "jlpt-n3", kanji: "〜ございます", kana: "〜ございます", romaji: "~gozaimasu", hanViet: "Hữu", meaning: "... ạ (siêu lịch sự)", textMnemonic: "〜ございます: có (siêu lịch sự) 🙏" },

  // Mẫu nâng cao cuối
  { id: "n3-grammar-101", courseId: "jlpt-n3", kanji: "〜上で", kana: "〜上で", romaji: "~ue de", hanViet: "Thượng", meaning: "Sau khi... / Trên cơ sở...", textMnemonic: "〜上で: sau khi làm xong / dựa trên cơ sở 📚" },
  { id: "n3-grammar-102", courseId: "jlpt-n3", kanji: "〜たびに", kana: "〜たびに", romaji: "~tabi ni", hanViet: "Biển", meaning: "Mỗi khi... / Mỗi lần...", textMnemonic: "〜たびに: mỗi lần / mỗi khi 🔁" },
  { id: "n3-grammar-103", courseId: "jlpt-n3", kanji: "〜たびに", kana: "〜たびに", romaji: "~tabi ni", hanViet: "Biển", meaning: "Nhân dịp... / Trong dịp...", textMnemonic: "〜たびに: dịp nào cũng / nhân lúc 🎉" },
  { id: "n3-grammar-104", courseId: "jlpt-n3", kanji: "〜としたら", kana: "〜としたら", romaji: "~to shitara", hanViet: "Tương", meaning: "Nếu giả sử là...", textMnemonic: "〜としたら: nếu như giả sử 🤔" },
  { id: "n3-grammar-105", courseId: "jlpt-n3", kanji: "〜次第", kana: "〜次第", romaji: "~shidai", hanViet: "Tự thệ", meaning: "Ngay khi... / Tùy theo...", textMnemonic: "〜次第: ngay khi / tùy thuộc vào ⏰" },
  { id: "n3-grammar-106", courseId: "jlpt-n3", kanji: "〜うちに", kana: "〜うちに", romaji: "~uchi ni", hanViet: "Trung", meaning: "Trong khi... / Trước khi quá muộn", textMnemonic: "〜うちに: trong lúc / trước khi hết ⏳" },
  { id: "n3-grammar-107", courseId: "jlpt-n3", kanji: "〜最中に", kana: "〜最中に", romaji: "~saichuu ni", hanViet: "Tối trung", meaning: "Đang... lúc...", textMnemonic: "〜最中に: đang lúc / giữa chừng ⏸️" },
  { id: "n3-grammar-108", courseId: "jlpt-n3", kanji: "〜たとたんに", kana: "〜たとたんに", romaji: "~ta totan ni", hanViet: "Đã độ", meaning: "Vừa mới... thì...", textMnemonic: "〜たとたんに: vừa mới làm thì ngay lập tức ⚡" },
  { id: "n3-grammar-109", courseId: "jlpt-n3", kanji: "〜かと思うと", kana: "〜かと思うと", romaji: "~ka to omou to", hanViet: "Tư vi", meaning: "Vừa mới... thì đã...", textMnemonic: "〜かと思うと: vừa nghĩ thì đã xảy ra 💭" },
  { id: "n3-grammar-110", courseId: "jlpt-n3", kanji: "〜てからでないと", kana: "〜てからでないと", romaji: "~te kara de nai to", hanViet: "Chung lai bất", meaning: "Phải làm... rồi mới...", textMnemonic: "〜てからでないと: phải làm X rồi mới được Y ⏳" },

  // Mẫu cuối
  { id: "n3-grammar-111", courseId: "jlpt-n3", kanji: "〜ことなく", kana: "〜ことなく", romaji: "~koto naku", hanViet: "Sự việc bất", meaning: "Không làm... mà...", textMnemonic: "〜ことなく: không cần làm mà vẫn được ✨" },
  { id: "n3-grammar-112", courseId: "jlpt-n3", kanji: "〜ずに", kana: "〜ずに", romaji: "~zu ni", hanViet: "Bất dĩ", meaning: "Không làm... mà...", textMnemonic: "〜ずに: không làm mà... (văn viết) 📜" },
  { id: "n3-grammar-113", courseId: "jlpt-n3", kanji: "〜ないうちに", kana: "〜ないうちに", romaji: "~nai uchi ni", hanViet: "Bất trung", meaning: "Trước khi... / Trong khi chưa...", textMnemonic: "〜ないうちに: trong khi chưa kịp thì ⏰" },
  { id: "n3-grammar-114", courseId: "jlpt-n3", kanji: "〜たことがある", kana: "〜たことがある", romaji: "~ta koto ga aru", hanViet: "Đã sự việc hữu", meaning: "Đã từng làm gì", textMnemonic: "〜たことがある: từng có kinh nghiệm 📅" },
  { id: "n3-grammar-115", courseId: "jlpt-n3", kanji: "〜たまま", kana: "〜たまま", romaji: "~ta mama", hanViet: "Đã bình thường", meaning: "... mà không thay đổi", textMnemonic: "〜たまま: trong trạng thái đó (không đổi) ⏸️" },
  { id: "n3-grammar-116", courseId: "jlpt-n3", kanji: "〜ときたら", kana: "〜ときたら", romaji: "~to kitara", hanViet: "Thời lai", meaning: "Cái... thì (phàn nàn)", textMnemonic: "〜ときたら: nhắc đến A thì... (phàn nàn) 😤" },
  { id: "n3-grammar-117", courseId: "jlpt-n3", kanji: "〜つつある", kana: "〜つつある", romaji: "~tsutsu aru", hanViet: "Tư hữu", meaning: "Đang dần... (văn viết)", textMnemonic: "〜つつある: đang trong quá trình (văn viết) 📈" },
  { id: "n3-grammar-118", courseId: "jlpt-n3", kanji: "〜に限って", kana: "〜に限って", romaji: "~ni kagitte", hanViet: "Hạn cảo", meaning: "Riêng... thì / Chỉ trong trường hợp...", textMnemonic: "〜に限って: chỉ riêng / chính là lúc... 🎯" },
  { id: "n3-grammar-119", courseId: "jlpt-n3", kanji: "〜としても", kana: "〜としても", romaji: "~toshitemo", hanViet: "Vi diệc", meaning: "Cho dù... / Giả sử...", textMnemonic: "〜としても: giả sử / cho dù... 🧠" },
  { id: "n3-grammar-120", courseId: "jlpt-n3", kanji: "〜というより", kana: "〜というより", romaji: "~to iu yori", hanViet: "Vi ngôn", meaning: "Không phải... mà là...", textMnemonic: "〜というより: nói đúng hơn là... 💭" },
];
