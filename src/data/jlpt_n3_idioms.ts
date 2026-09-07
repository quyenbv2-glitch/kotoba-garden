/**
 * JLPT N3 - Thành ngữ & Tục ngữ (Kanyouku & Kotowaza)
 * Các thành ngữ và tục ngữ Nhật Bản phổ biến
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_IDIOMS: Word[] = [
  // Thành ngữ về cuộc sống
  { id: "n3-idiom-1", courseId: "jlpt-n3", kanji: "一石二鳥", kana: "いっせきにちょう", romaji: "issekinichou", hanViet: "Nhất thạch nhị điểu", meaning: "Một công đôi việc", textMnemonic: "一石二鳥 = một viên đá bắn hai con chim 🐦" },
  { id: "n3-idiom-2", courseId: "jlpt-n3", kanji: "花より団子", kana: "はなよりだんご", romaji: "hanayori dango", hanViet: "Hoa lệ đoàn tử", meaning: "Thực tế hơn lãng mạn", textMnemonic: "花より団子 = thích ăn bánh hơn ngắm hoa 🍡" },
  { id: "n3-idiom-3", courseId: "jlpt-n3", kanji: "猿も木から落ちる", kana: "さるもきからおちる", romaji: "saru mo ki kara ochiru", hanViet: "Viên mộc xuất", meaning: "Khổng tước cũng có lúc rơi", textMnemonic: "猿も木から落ちる = khỉ cũng có lúc rơi khỏi cây 🐒" },
  { id: "n3-idiom-4", courseId: "jlpt-n3", kanji: "石の上にも三年", kana: "いしのうえにもさんねん", romaji: "ishi no ue ni mo san nen", hanViet: "Thạch thượng tam niên", meaning: "Kiên trì 3 năm", textMnemonic: "石の上にも三年 = ngồi trên đá 3 năm cũng ấm 🪨" },
  { id: "n3-idiom-5", courseId: "jlpt-n3", kanji: "七転び八起き", kana: "ななころびやおき", romaji: "nanakorobi yaoki", hanViet: "Thất chuyển bát khởi", meaning: "Ngã 7 lần đứng 8 lần", textMnemonic: "七転び八起き = ngã 7 lần đứng 8 lần 💪" },
  { id: "n3-idiom-6", courseId: "jlpt-n3", kanji: "雨降って地固まる", kana: "あめふってちかたまる", romaji: "ame futte chi katamaru", hanViet: "Vũ giáng địa cố", meaning: "Mưa xong đất cứng", textMnemonic: "雨降って地固まる = mưa xong đất cứng hơn 🌧️" },
  { id: "n3-idiom-7", courseId: "jlpt-n3", kanji: "井の中の蛙大海を知らず", kana: "いのなかのかわずたいかいをしらず", romaji: "i no naka no kawazu taikai wo shirazu", hanViet: "Tỉnh trung uyế", meaning: "Ếch trong giếng không biết biển", textMnemonic: "井の中の蛙大海を知らず = ếch trong giếng 🐸" },
  { id: "n3-idiom-8", courseId: "jlpt-n3", kanji: "嘘つきは泥棒の始まり", kana: "うそつきはどろぼうのはじまり", romaji: "usotsuki wa dorobou no hajimari", hanViet: "Vọng thị trộm thủy", meaning: "Nói dối là khởi đầu ăn cắp", textMnemonic: "嘘つきは泥棒の始まり = nói dối = ăn cắp 🤥" },
  { id: "n3-idiom-9", courseId: "jlpt-n3", kanji: "口は災いの元", kana: "くちはわざわいのもと", romaji: "kuchi wa wazawai no moto", hanViet: "Khẩu tai họa nguyên", meaning: "Miệng là gốc tai họa", textMnemonic: "口は災いの元 = miệng gây tai họa 👄" },
  { id: "n3-idiom-10", courseId: "jlpt-n3", kanji: "知らぬが仏", kana: "しらぬがほとけ", romaji: "shiranu ga hotoke", hanViet: "Tri bất Phật", meaning: "Không biết là phúc", textMnemonic: "知らぬが仏 = không biết là phật 🛕" },

  // Thành ngữ về kiên trì
  { id: "n3-idiom-11", courseId: "jlpt-n3", kanji: "急がば回れ", kana: "いそがばまわれ", romaji: "isogaba maware", hanViet: "Cấp quy hồi", meaning: "Muốn nhanh phải đi vòng", textMnemonic: "急がば回れ = nhanh thì đi vòng 🏃" },
  { id: "n3-idiom-12", courseId: "jlpt-n3", kanji: "馬の耳に念仏", kana: "うまのみみにねんぶつ", romaji: "uma no mimi ni nenbutsu", hanViet: "Mã nhĩ niệm Phật", meaning: "Niệm Phật vào tai ngựa", textMnemonic: "馬の耳に念仏 = vô ích 🐴" },
  { id: "n3-idiom-13", courseId: "jlpt-n3", kanji: "猫に小判", kana: "ねこにこばん", romaji: "neko ni koban", hanViet: "Miêu tiểu phiến", meaning: "Đưa vàng cho mèo", textMnemonic: "猫に小判 = vàng cho mèo 🐱" },
  { id: "n3-idiom-14", courseId: "jlpt-n3", kanji: "火のないところに煙は立たない", kana: "ひのないところにけむりはたたない", romaji: "hi no nai tokoro ni kemuri wa tatanai", hanViet: "Hỏa vô yên", meaning: "Không có lửa không có khói", textMnemonic: "火のないところに煙は立たない = không lửa không khói 🔥" },
  { id: "n3-idiom-15", courseId: "jlpt-n3", kanji: "花鳥風月", kana: "かちょうふうげつ", romaji: "kachou fuugetsu", hanViet: "Hoa điểu phong nguyệt", meaning: "Hoa chim gió trăng", textMnemonic: "花鳥風月 = vẻ đẹp thiên nhiên 🌸" },

  // Thành ngữ về duyên phận
  { id: "n3-idiom-16", courseId: "jlpt-n3", kanji: "一期一会", kana: "いちごいちえ", romaji: "ichigo ichie", hanViet: "Nhất kỳ nhất hội", meaning: "Một lần gặp một lần duyên", textMnemonic: "一期一会 = gặp nhau là duyên 🍵" },
  { id: "n3-idiom-17", courseId: "jlpt-n3", kanji: "初心忘るべからず", kana: "しょしんわするべからず", romaji: "shoshin wasuru bekarazu", hanViet: "Sơ tâm vong", meaning: "Không được quên lòng ban đầu", textMnemonic: "初心忘るべからず = đừng quên tâm đầu ❤️" },
  { id: "n3-idiom-18", courseId: "jlpt-n3", kanji: "縁は異なもの味なもの", kana: "えんはいのものあじのもの", romaji: "en wa ino mono aji no mono", hanViet: "Duyên dị vật", meaning: "Duyên trời lạ lùng", textMnemonic: "縁は異なもの味なもの = duyên lạ 🍃" },
  { id: "n3-idiom-19", courseId: "jlpt-n3", kanji: "情けは人のためならず", kana: "なさけはひとのためならず", romaji: "nasake wa hito no tame narazu", hanViet: "Tình nhân vi", meaning: "Nhân từ không phải cho người", textMnemonic: "情けは人のためならず = tốt bụng được đền đáp 💝" },
  { id: "n3-idiom-20", courseId: "jlpt-n3", kanji: "身から出た錆", kana: "みからでたさび", romaji: "mi kara deta sabi", hanViet: "Thân xuất hoa", meaning: "Gỉ từ thân mình", textMnemonic: "身から出た錆 = tự làm tự chịu ⚙️" },

  // Thành ngữ về thận trọng
  { id: "n3-idiom-21", courseId: "jlpt-n3", kanji: "見ざる聞かざる言わざる", kana: "みざるきかざるいわざる", romaji: "mizaru kikazaru iwazaru", hanViet: "Kiến vật", meaning: "Không thấy không nghe không nói", textMnemonic: "見ざる聞かざる言わざる = 3 con khỉ 🐵" },
  { id: "n3-idiom-22", courseId: "jlpt-n3", kanji: "能ある鷹は爪を隠す", kana: "のうあるたかはつめをかくす", romaji: "nou aru taka wa tsume wo kakusu", hanViet: "Năng ưng trảo ẩn", meaning: "Diều có năng lực giấu móng", textMnemonic: "能ある鷹は爪を隠す = giấu tài năng 🦅" },
  { id: "n3-idiom-23", courseId: "jlpt-n3", kanji: "笑う門には福来たる", kana: "わらうかどにはふくきたる", romaji: "warau kado ni wa fuku kitaru", hanViet: "Tiếu môn phúc lai", meaning: "Cửa cười có phúc", textMnemonic: "笑う門には福来たる = cười đón phúc 😊" },
  { id: "n3-idiom-24", courseId: "jlpt-n3", kanji: "花は桜木人は武士", kana: "はなはさくらぎひとはぶし", romaji: "hana wa sakuragi hito wa bushi", hanViet: "Hoa anh đào nhân vũ sĩ", meaning: "Hoa thì hoa anh đào, người thì võ sĩ", textMnemonic: "花は桜木人は武士 = vẻ đẹp Nhật Bản 🌸" },
  { id: "n3-idiom-25", courseId: "jlpt-n3", kanji: "かわいい子には旅をさせよ", kana: "かわいいこにはたびをさせよ", romaji: "kawaii ko ni wa tabi wo saseyo", hanViet: "Lữ hành", meaning: "Con yêu hãy cho đi du lịch", textMnemonic: "かわいい子には旅をさせよ = yêu thì cho đi ✈️" },

  // Thành ngữ về sự lựa chọn
  { id: "n3-idiom-26", courseId: "jlpt-n3", kanji: "二兎を追う者は一兎をも得ず", kana: "にとをおうものはいっとをもえず", romaji: "ni wo ou mono wa itto wo mo ezu", hanViet: "Nhị thỏ truy", meaning: "Đuổi hai thỏ không được thỏ nào", textMnemonic: "二兎を追う者は一兎をも得ず = tham thì thâm 🐇" },
  { id: "n3-idiom-27", courseId: "jlpt-n3", kanji: "備えあれば憂いなし", kana: "そなえあればうれいなし", romaji: "sonae areba urei nashi", hanViet: "Bị ưu vô", meaning: "Có chuẩn bị không lo", textMnemonic: "備えあれば憂いなし = chuẩn bị trước 🛡️" },
  { id: "n3-idiom-28", courseId: "jlpt-n3", kanji: "千里の道も一歩から", kana: "せんりのみちもいっぽから", romaji: "senri no michi mo ippo kara", hanViet: "Thiên lý đạo", meaning: "Ngàn dặm cũng từ một bước", textMnemonic: "千里の道も一歩から = bước đầu tiên 🚶" },
  { id: "n3-idiom-29", courseId: "jlpt-n3", kanji: "郷に入っては郷に従え", kana: "ごうにいってはごうにしたがえ", romaji: "gou ni itte wa gou ni shitagae", hanViet: "Hương nhập hương tòng", meaning: "Vào làng theo phong tục làng", textMnemonic: "郷に入っては郷に従え = nhập gia tùy tục 🏘️" },
  { id: "n3-idiom-30", courseId: "jlpt-n3", kanji: "会うは別れの始め", kana: "あうはわかれのはじめ", romaji: "au wa wakare no hajime", hanViet: "Hội biệt khai", meaning: "Gặp gỡ là khởi đầu chia ly", textMnemonic: "会うは別れの始め = gặp là bắt đầu chia ly 👋" },

  // Thành ngữ về thực tế
  { id: "n3-idiom-31", courseId: "jlpt-n3", kanji: "取らぬ狸の皮算用", kana: "とらぬたぬきのかわざんよう", romaji: "toranu tanuki no kawa zan'you", hanViet: "Thủ cáo bì", meaning: "Tính da chồn chưa bắt", textMnemonic: "取らぬ狸の皮算用 = đếm gà trước khi nở 🦊" },
  { id: "n3-idiom-32", courseId: "jlpt-n3", kanji: "豆腐にかすがい", kana: "とうふにかすがい", romaji: "toufu ni kasugai", hanViet: "Đậu phụ", meaning: "Đinh cài lên đậu phụ", textMnemonic: "豆腐にかすがい = vô ích (đậu mềm đinh không giữ) 🧱" },
  { id: "n3-idiom-33", courseId: "jlpt-n3", kanji: "壁に耳あり障子に目あり", kana: "かべにみみありしょうじにめあり", romaji: "kabe ni mimi ari shouji ni me ari", hanViet: "Tường nhĩ", meaning: "Tường có tai, cửa có mắt", textMnemonic: "壁に耳あり障子に目あり = cẩn thận lời nói 👂" },
  { id: "n3-idiom-34", courseId: "jlpt-n3", kanji: "覆水盆に返らず", kana: "ふくすいぼんにかえらず", romaji: "fukusui bon ni kaerazu", hanViet: "Phú thủy bôi phản", meaning: "Nước đổ không trở lại", textMnemonic: "覆水盆に返らず = nước đã đổ 💧" },
  { id: "n3-idiom-35", courseId: "jlpt-n3", kanji: "貧乏暇なし", kana: "びんぼうひまなし", romaji: "binbou hima nashi", hanViet: "Bần phú nhàn vô", meaning: "Nghèo không có lúc rảnh", textMnemonic: "貧乏暇なし = nghèo bận túi bụi 💸" },

  // Thành ngữ về sự tương quan
  { id: "n3-idiom-36", courseId: "jlpt-n3", kanji: "蒔かぬ種は生えぬ", kana: "まかぬたねははえぬ", romaji: "makanu tane wa haenu", hanViet: "Già chủng", meaning: "Không gieo thì không mọc", textMnemonic: "蒔かぬ種は生えぬ = gieo gì gặt nấy 🌱" },
  { id: "n3-idiom-37", courseId: "jlpt-n3", kanji: "親しき仲にも礼儀あり", kana: "したしきなかにもれいぎあり", romaji: "shitashiki naka ni mo reigi ari", hanViet: "Thân trung lễ nghi", meaning: "Thân mấy cũng có lễ", textMnemonic: "親しき仲にも礼儀あり = thân nhau vẫn phải lễ 🤝" },
  { id: "n3-idiom-38", courseId: "jlpt-n3", kanji: "朱に交われば赤くなる", kana: "しゅにまじわればあかくなる", romaji: "shu ni majiwareba akaku naru", hanViet: "Chu giao", meaning: "Gần son thì đỏ", textMnemonic: "朱に交われば赤くなる = gần bùn lây bùn 🎨" },
  { id: "n3-idiom-39", courseId: "jlpt-n3", kanji: "青は藍より出でて藍より青し", kana: "あおはあいよりいでてあいよりあおし", romaji: "ao wa ai yori idete ai yori aoshi", hanViet: "Thanh lạm xuất", meaning: "Xanh ra từ chàm mà xanh hơn chàm", textMnemonic: "青は藍より出でて藍より青し = học trò hơn thầy 🌿" },
  { id: "n3-idiom-40", courseId: "jlpt-n3", kanji: "年寄りの冷や水", kana: "としよりのひやみず", romaji: "toshiyori no hiyamizu", hanViet: "Niên ký lương thủy", meaning: "Nước lạnh của người già", textMnemonic: "年寄りの冷や水 = già rồi đừng liều 👴" },

  // Thành ngữ về sai lầm
  { id: "n3-idiom-41", courseId: "jlpt-n3", kanji: "弘法も筆の誤り", kana: "こうぼうもふでのあやまり", romaji: "koubou mo fude no ayamari", hanViet: "Hoằng pháp bút ngộ", meaning: "Kobo cũng lỗi bút", textMnemonic: "弘法も筆の誤り = cao thủ cũng sai 🖌️" },
  { id: "n3-idiom-42", courseId: "jlpt-n3", kanji: "鬼の目にも涙", kana: "おにのめにもなみだ", romaji: "oni no me ni mo namida", hanViet: "Quỷ mục lệ", meaning: "Mắt quỷ cũng có nước mắt", textMnemonic: "鬼の目にも涙 = quỷ cũng có lúc thương 😢" },
  { id: "n3-idiom-43", courseId: "jlpt-n3", kanji: "渡る世間に鬼はなし", kana: "わたるせけんにおにはなし", romaji: "wataru seken ni oni wa nashi", hanViet: "Độ thế gian quỷ vô", meaning: "Trên đời không có quỷ", textMnemonic: "渡る世間に鬼はなし = đời không quỷ đâu 👹" },
  { id: "n3-idiom-44", courseId: "jlpt-n3", kanji: "良薬は口に苦し", kana: "りょうやくはくちににがし", romaji: "ryouyaku wa kuchi ni nigashi", hanViet: "Lương dược khẩu khổ", meaning: "Thuốc tốt đắng miệng", textMnemonic: "良薬は口に苦し = thuốc đắng miệng 💊" },
  { id: "n3-idiom-45", courseId: "jlpt-n3", kanji: "毒を食らわば皿まで", kana: "どくをくらわばさらまで", romaji: "doku wo kurawaba sara made", hanViet: "Độc thực", meaning: "Ăn độc thì ăn đến đĩa", textMnemonic: "毒を食らわば皿まで = đã làm thì làm đến cùng 🍽️" },

  // Thành ngữ về số phận
  { id: "n3-idiom-46", courseId: "jlpt-n3", kanji: "天は二物を与えず", kana: "てんはにぶつをあたえず", romaji: "ten wa nibutsu wo ataezu", hanViet: "Thiên nhị vật dữ bất", meaning: "Trời không cho hai vật", textMnemonic: "天は二物を与えず = không ai hoàn hảo ⚖️" },
  { id: "n3-idiom-47", courseId: "jlpt-n3", kanji: "魚と熊掌は得られない", kana: "ぎょとゆうしょうはえられない", romaji: "gyo to yuushou wa erarenai", hanViet: "Ngư hùng chưởng", meaning: "Không thể vừa cá vừa chân gấu", textMnemonic: "魚と熊掌は得られない = cá và gấu 🐟" },
  { id: "n3-idiom-48", courseId: "jlpt-n3", kanji: "弱肉強食", kana: "じゃくにくきょうしょく", romaji: "jakunikukyoushoku", hanViet: "Nhược nhục cường thực", meaning: "Mạnh được yếu thua", textMnemonic: "弱肉強食 = mạnh ăn yếu 🦁" },
  { id: "n3-idiom-49", courseId: "jlpt-n3", kanji: "十人十色", kana: "じゅうにんといろ", romaji: "juunin toiro", hanViet: "Thập nhân thập sắc", meaning: "Mười người mười sắc", textMnemonic: "十人十色 = mỗi người mỗi vẻ 🌈" },
  { id: "n3-idiom-50", courseId: "jlpt-n3", kanji: "切磋琢磨", kana: "せっさたくま", romaji: "sessa takuma", hanViet: "Tát ta trác ma", meaning: "Cùng nhau mài giũa", textMnemonic: "切磋琢磨 = mài giũa nhau 💎" },

  // Thành ngữ về văn hóa Nhật
  { id: "n3-idiom-51", courseId: "jlpt-n3", kanji: "日々是好日", kana: "にちにちこれこうじつ", romaji: "nichinichi kore koujitsu", hanViet: "Nhật nhật thị hảo nhật", meaning: "Mỗi ngày đều là ngày tốt", textMnemonic: "日々是好日 = mỗi ngày đều tốt ☀️" },
  { id: "n3-idiom-52", courseId: "jlpt-n3", kanji: "和顔愛語", kana: "わげんあいご", romaji: "wagen aigo", hanViet: "Hoà nhan ái ngữ", meaning: "Mặt hiền lời thương", textMnemonic: "和顔愛語 = hiền hòa nói năng thương yêu 😊" },
  { id: "n3-idiom-53", courseId: "jlpt-n3", kanji: "和気藹藹", kana: "わきあいいい", romaji: "waki aiai", hanViet: "Hoà khí ái ái", meaning: "Khí hòa thuận", textMnemonic: "和気藹藹 = hòa thuận đầm ấm 🌸" },
  { id: "n3-idiom-54", courseId: "jlpt-n3", kanji: "以心伝心", kana: "いしんでんしん", romaji: "ishin denshin", hanViet: "Dĩ tâm truyền tâm", meaning: "Tâm ý truyền tâm", textMnemonic: "以心伝心 = hiểu ý nhau không cần nói 💭" },
  { id: "n3-idiom-55", courseId: "jlpt-n3", kanji: "和して同ぜず", kana: "わしてどうぜず", romaji: "washite douzezu", hanViet: "Hoà đồng bất", meaning: "Hòa mà không đồng", textMnemonic: "和して同ぜず = hòa nhưng không hợp nhất 🤝" },

  // Thành ngữ về cuộc sống Phật giáo
  { id: "n3-idiom-56", courseId: "jlpt-n3", kanji: "諸行無常", kana: "しょぎょうむじょう", romaji: "shogyou mujou", hanViet: "Chư hành vô thường", meaning: "Vạn vật vô thường", textMnemonic: "諸行無常 = vạn vật vô thường 🕉️" },
  { id: "n3-idiom-57", courseId: "jlpt-n3", kanji: "因果応報", kana: "いんがおうほう", romaji: "inga ouhou", hanViet: "Nhân quả ứng báo", meaning: "Nhân quả ứng báo", textMnemonic: "因果応報 = nhân quả ⚖️" },
  { id: "n3-idiom-58", courseId: "jlpt-n3", kanji: "浮世のしがらみ", kana: "うきよのしがらみ", romaji: "ukiyo no shigarami", hanViet: "Phù thế", meaning: "Ràng buộc của thế gian", textMnemonic: "浮世のしがらみ = ràng buộc trần tục 🌊" },
  { id: "n3-idiom-59", courseId: "jlpt-n3", kanji: "枯れ木も山の賑わい", kana: "かれきもやまのにぎわい", romaji: "kareki mo yama no nigiwai", hanViet: "Khô mộc sơn", meaning: "Cây khô cũng làm đẹp núi", textMnemonic: "枯れ木も山の賑わい = tốt hơn không 🌳" },
  { id: "n3-idiom-60", courseId: "jlpt-n3", kanji: "鶴の一声", kana: "つるのひとこえ", romaji: "tsuru no hitokoe", hanViet: "Hạc nhất thanh", meaning: "Một tiếng hạc", textMnemonic: "鶴の一声 = một lời quyết định 🦢" },

  // Thành ngữ 4 ký tự khác
  { id: "n3-idiom-61", courseId: "jlpt-n3", kanji: "二束三文", kana: "にそくさんもん", romaji: "nisoku sanmon", hanViet: "Nhị thúc tam văn", meaning: "Hai bó ba xu", textMnemonic: "二束三文 = rẻ như cho 💰" },
  { id: "n3-idiom-62", courseId: "jlpt-n3", kanji: "一刀両断", kana: "いっとうりょうだん", romaji: "ittou ryoudan", hanViet: "Nhất đao lưỡng đoạn", meaning: "Một kiếm đứt đôi", textMnemonic: "一刀両断 = quyết đoán ⚔️" },
  { id: "n3-idiom-63", courseId: "jlpt-n3", kanji: "一網打尽", kana: "いちもうだじん", romaji: "ichimou dajin", hanViet: "Nhất vương đả tận", meaning: "Một lưới bắt hết", textMnemonic: "一網打尽 = bắt hết một lưới 🕸️" },
  { id: "n3-idiom-64", courseId: "jlpt-n3", kanji: "一目瞭然", kana: "いちもくりょうぜん", romaji: "ichimoku ryouzen", hanViet: "Nhất mục liễu nhiên", meaning: "Một mắt rõ ràng", textMnemonic: "一目瞭然 = rõ ràng ngay 👁️" },
  { id: "n3-idiom-65", courseId: "jlpt-n3", kanji: "一触即発", kana: "いっしょくそくはつ", romaji: "isshoku sokuhatsu", hanViet: "Nhất xúc tức phát", meaning: "Chạm một là nổ", textMnemonic: "一触即発 = nổ bất cứ lúc nào 💥" },

  // Thành ngữ về lợi ích
  { id: "n3-idiom-66", courseId: "jlpt-n3", kanji: "一挙両得", kana: "いっきょりょうとく", romaji: "ikkyo ryoutoku", hanViet: "Nhất cử lưỡng đắc", meaning: "Một việc lợi đôi", textMnemonic: "一挙両得 = hai lợi ích 💎" },
  { id: "n3-idiom-67", courseId: "jlpt-n3", kanji: "一刀切", kana: "いっとうきれ", romaji: "ittou kire", hanViet: "Nhất đao thiết", meaning: "Cắt một nhát", textMnemonic: "一刀切 = dứt khoát ⚔️" },
  { id: "n3-idiom-68", courseId: "jlpt-n3", kanji: "二兎追う", kana: "にとおう", romaji: "ni to ou", hanViet: "Nhị thỏ truy", meaning: "Đuổi hai thỏ", textMnemonic: "二兎追う = tham 🐰" },
  { id: "n3-idiom-69", courseId: "jlpt-n3", kanji: "三度", kana: "さんど", romaji: "sando", hanViet: "Tam độ", meaning: "Ba lần", textMnemonic: "三度 = ba lần lặp lại 3️⃣" },
  { id: "n3-idiom-70", courseId: "jlpt-n3", kanji: "四方八方", kana: "しほうはっぽう", romaji: "shihou happou", hanViet: "Tứ phương bát phương", meaning: "Bốn phương tám hướng", textMnemonic: "四方八方 = tất cả mọi hướng 🧭" },

  // Thành ngữ số đếm
  { id: "n3-idiom-71", courseId: "jlpt-n3", kanji: "四苦八苦", kana: "しくはっく", romaji: "shiku hakku", hanViet: "Tứ khổ bát khổ", meaning: "Bốn khổ tám khổ", textMnemonic: "四苦八苦 = khổ sở đủ điều 😖" },
  { id: "n3-idiom-72", courseId: "jlpt-n3", kanji: "五大", kana: "ごだい", romaji: "godai", hanViet: "Ngũ đại", meaning: "Năm đại", textMnemonic: "五大 = 5 yếu tố lớn 🖐️" },
  { id: "n3-idiom-73", courseId: "jlpt-n3", kanji: "六根清浄", kana: "ろっこんせいじょう", romaji: "rokkon seijou", hanViet: "Lục căn thanh tịnh", meaning: "Sáu căn trong sạch", textMnemonic: "六根清浄 = 6 giác quan thanh tịnh 🧘" },
  { id: "n3-idiom-74", courseId: "jlpt-n3", kanji: "七転八起", kana: "しちてんはっき", romaji: "shichiten hakki", hanViet: "Thất chuyển bát khởi", meaning: "Bảy lần ngã tám lần đứng", textMnemonic: "七転八起 = ngã 7 đứng 8 💪" },
  { id: "n3-idiom-75", courseId: "jlpt-n3", kanji: "八方美人", kana: "はっぽうびじん", romaji: "happou bijin", hanViet: "Bát phương mỹ nhân", meaning: "Người đẹp tám hướng", textMnemonic: "八方美人 = chiều ai cũng được 👧" },

  // Thành ngữ về trình độ
  { id: "n3-idiom-76", courseId: "jlpt-n3", kanji: "八面六臂", kana: "はちめんろっぴ", romaji: "hachimen roppi", hanViet: "Bát diện lục bì", meaning: "Tám mặt sáu tay", textMnemonic: "八面六臂 = đa năng, làm được nhiều việc 🦸" },
  { id: "n3-idiom-77", courseId: "jlpt-n3", kanji: "九死一生", kana: "きゅうしいっしょう", romaji: "kyuushi isshou", hanViet: "Cửu tử nhất sinh", meaning: "Chín lần chết một lần sống", textMnemonic: "九死一生 = suýt chết 💀" },
  { id: "n3-idiom-78", courseId: "jlpt-n3", kanji: "十全十美", kana: "じゅうぜんじゅうび", romaji: "juuzen juubi", hanViet: "Thập toàn thập mỹ", meaning: "Mười toàn mười đẹp", textMnemonic: "十全十美 = hoàn hảo 100% 💯" },
  { id: "n3-idiom-79", courseId: "jlpt-n3", kanji: "百発百中", kana: "ひゃっぱつひゃくちゅう", romaji: "hyappatsu hyakuchuu", hanViet: "Bách phát bách trúng", meaning: "Trăm phát trăm trúng", textMnemonic: "百発百中 = bách phát bách trúng 🎯" },
  { id: "n3-idiom-80", courseId: "jlpt-n3", kanji: "千差万別", kana: "せんさばんべつ", romaji: "sensa banbetsu", hanViet: "Thiên sai vạn biệt", meaning: "Ngàn khác vạn biệt", textMnemonic: "千差万別 = vô cùng đa dạng 🎨" },

  // Thành ngữ về quy mô
  { id: "n3-idiom-81", courseId: "jlpt-n3", kanji: "万象森羅", kana: "ばんしょうしんら", romaji: "banshou shinra", hanViet: "Vạn tượng sâm la", meaning: "Vạn tượng rừng la", textMnemonic: "万象森羅 = vạn vật trong vũ trụ 🌌" },
  { id: "n3-idiom-82", courseId: "jlpt-n3", kanji: "画竜点睛", kana: "がりょうてんせい", romaji: "garyou tensei", hanViet: "Họa long điểm tình", meaning: "Vẽ rồng chấm mắt", textMnemonic: "画竜点睛 = nét cuối cùng hoàn thiện 🐉" },
  { id: "n3-idiom-83", courseId: "jlpt-n3", kanji: "竜頭蛇尾", kana: "りょうとうだび", romaji: "ryoutou dabi", hanViet: "Long đầu xà vĩ", meaning: "Đầu rồng đuôi rắn", textMnemonic: "竜頭蛇尾 = khởi đầu tốt kết thúc tệ 🐍" },
  { id: "n3-idiom-84", courseId: "jlpt-n3", kanji: "朝令暮改", kana: "ちょうれいぼかい", romaji: "chourei bokai", hanViet: "Triêu lệnh mộ cải", meaning: "Sáng lệnh tối đổi", textMnemonic: "朝令暮改 = thay đổi liên tục 📜" },
  { id: "n3-idiom-85", courseId: "jlpt-n3", kanji: "三日坊主", kana: "みっかぼうず", romaji: "mikka bouzu", hanViet: "Tam nhật phương chủ", meaning: "Nhà sư ba ngày", textMnemonic: "三日坊主 = bỏ dở sau 3 ngày 📿" },

  // Thành ngữ Phật giáo & lịch sử
  { id: "n3-idiom-86", courseId: "jlpt-n3", kanji: "四天王", kana: "してんのう", romaji: "shitennou", hanViet: "Tứ thiên vương", meaning: "Tứ thiên vương", textMnemonic: "四天王 = 4 vị thần bảo vệ Phật 🛡️" },
  { id: "n3-idiom-87", courseId: "jlpt-n3", kanji: "五里霧中", kana: "ごりむちゅう", romaji: "gorimuchuu", hanViet: "Ngũ lý vụ trung", meaning: "Trong sương mù năm dặm", textMnemonic: "五里霧中 = mù mịt không rõ 🌫️" },
  { id: "n3-idiom-88", courseId: "jlpt-n3", kanji: "六道", kana: "ろくどう", romaji: "rokudou", hanViet: "Lục đạo", meaning: "Lục đạo (6 cõi)", textMnemonic: "六道 = 6 cõi trong Phật giáo 🛕" },
  { id: "n3-idiom-89", courseId: "jlpt-n3", kanji: "七日", kana: "なのか", romaji: "nanoka", hanViet: "Thất nhật", meaning: "Bảy ngày", textMnemonic: "七日 = 7 ngày (đọc là なのか) 📅" },
  { id: "n3-idiom-90", courseId: "jlpt-n3", kanji: "八面", kana: "はちめん", romaji: "hachimen", hanViet: "Bát diện", meaning: "Tám mặt", textMnemonic: "八面 = 8 mặt 🛑" },

  // Thành ngữ về kiến thức
  { id: "n3-idiom-91", courseId: "jlpt-n3", kanji: "九重", kana: "ここのえ", romaji: "kokonoe", hanViet: "Cửu trùng", meaning: "Chín lớp (hoàng cung)", textMnemonic: "九重 = 9 lớp (hoàng cung Nhật) 🏯" },
  { id: "n3-idiom-92", courseId: "jlpt-n3", kanji: "十重", kana: "とえ", romaji: "toe", hanViet: "Thập trùng", meaning: "Mười lớp", textMnemonic: "十重 = 10 lớp (kiên cố) 🛡️" },
  { id: "n3-idiom-93", courseId: "jlpt-n3", kanji: "百重", kana: "ひゃくえ", romaji: "hyakue", hanViet: "Bách trùng", meaning: "Trăm lớp", textMnemonic: "百重 = 100 lớp (vòng vèo) 🌀" },
  { id: "n3-idiom-94", courseId: "jlpt-n3", kanji: "千重", kana: "せんえ", romaji: "senne", hanViet: "Thiên trùng", meaning: "Ngàn lớp", textMnemonic: "千重 = ngàn lớp (kiên cố) 🏔️" },
  { id: "n3-idiom-95", courseId: "jlpt-n3", kanji: "万来", kana: "ばんらい", romaji: "banrai", hanViet: "Vạn lai", meaning: "Vạn lai (rất nhiều)", textMnemonic: "万来 = muôn ngàn (khách) 🏟️" },

  // Thành ngữ về sự giàu có
  { id: "n3-idiom-96", courseId: "jlpt-n3", kanji: "億万長者", kana: "おくまんちょうじゃ", romaji: "okumanchouja", hanViet: "Úc vạn trưởng giả", meaning: "Tỷ phú", textMnemonic: "億万長者 = người có triệu triệu 💎" },
  { id: "n3-idiom-97", courseId: "jlpt-n3", kanji: "一発逆転", kana: "いっぱつぎゃくてん", romaji: "ippatsu gyakuten", hanViet: "Nhất phát nghịch chuyển", meaning: "Một phát lật ngược", textMnemonic: "一発逆転 = lật kèo một phát 🔄" },
  { id: "n3-idiom-98", courseId: "jlpt-n3", kanji: "一進一退", kana: "いっしんいったい", romaji: "isshin ittai", hanViet: "Nhất tiến nhất thối", meaning: "Tiến một bước lùi một bước", textMnemonic: "一進一退 = tiến lùi bất ổn ↕️" },
  { id: "n3-idiom-99", courseId: "jlpt-n3", kanji: "右往左往", kana: "うおうさおう", romaji: "uou saou", hanViet: "Hữu vãng tả vãng", meaning: "Chạy phải chạy trái", textMnemonic: "右往左往 = lúng túng không biết đi đâu 🏃" },
  { id: "n3-idiom-100", courseId: "jlpt-n3", kanji: "右顧左眄", kana: "うこさべん", romaji: "uko saben", hanViet: "Hữu cố tả miện", meaning: "Nhìn phải nhìn trái", textMnemonic: "右顧左眄 = do dự không quyết 👀" },

  // Thành ngữ về học tập
  { id: "n3-idiom-101", courseId: "jlpt-n3", kanji: "温故知新", kana: "おんこちしん", romaji: "onko chishin", hanViet: "Ôn cố tri tân", meaning: "Ôn cố tri tân", textMnemonic: "温故知新 = học cũ biết mới 📚" },
  { id: "n3-idiom-102", courseId: "jlpt-n3", kanji: "切磋琢磨", kana: "せっさたくま", romaji: "sessa takuma", hanViet: "Tát ta trác ma", meaning: "Mài giũa nhau", textMnemonic: "切磋琢磨 = cùng nhau tiến bộ 💎" },
  { id: "n3-idiom-103", courseId: "jlpt-n3", kanji: "前代未聞", kana: "ぜんだいみもん", romaji: "zendai mimon", hanViet: "Tiền đại vị văn", meaning: "Chưa nghe thấy", textMnemonic: "前代未聞 = chưa từng có 🆕" },
  { id: "n3-idiom-104", courseId: "jlpt-n3", kanji: "破天荒", kana: "はてんこう", romaji: "hatenkou", hanViet: "Phá thiên hoang", meaning: "Phá thiên hoang (chưa từng có)", textMnemonic: "破天荒 = lần đầu tiên trong lịch sử 🌟" },
  { id: "n3-idiom-105", courseId: "jlpt-n3", kanji: "空前絶後", kana: "くうぜんぜつご", romaji: "kuuzen zetsugo", hanViet: "Không tiền tuyệt hậu", meaning: "Chưa có chưa sau", textMnemonic: "空前絶後 = chưa từng và sẽ không bao giờ có 🌟" },

  // Thành ngữ về tranh luận
  { id: "n3-idiom-106", courseId: "jlpt-n3", kanji: "言語道断", kana: "げんごどうだん", romaji: "gengo doudan", hanViet: "Ngôn ngữ đạo đoạn", meaning: "Không thể nói được", textMnemonic: "言語道断 = không thể chấp nhận 🚫" },
  { id: "n3-idiom-107", courseId: "jlpt-n3", kanji: "言語同断", kana: "げんごどうだん", romaji: "gengo doudan", hanViet: "Ngôn ngữ đồng đoạn", meaning: "Cũng như vậy", textMnemonic: "言語同断 = cũng tương tự như vậy ⚖️" },
  { id: "n3-idiom-108", courseId: "jlpt-n3", kanji: "議論百出", kana: "ぎろんひゃくしゅつ", romaji: "giron hyakushutsu", hanViet: "Nghị luận bách xuất", meaning: "Trăm luận điểm xuất hiện", textMnemonic: "議論百出 = nhiều ý kiến tranh cãi 🗣️" },
  { id: "n3-idiom-109", courseId: "jlpt-n3", kanji: "玉石混淆", kana: "ぎょくせきこんこう", romaji: "gyokuseki konkou", hanViet: "Ngọc thạch hỗn giao", meaning: "Ngọc đá lẫn lộn", textMnemonic: "玉石混淆 = tốt xấu lẫn lộn 💎" },
  { id: "n3-idiom-110", courseId: "jlpt-n3", kanji: "自業自得", kana: "じごうじとく", romaji: "jigou jitoku", hanViet: "Tự nghiệp tự đắc", meaning: "Tự gây tự chịu", textMnemonic: "自業自得 = tự làm tự chịu ⚖️" },

  // Thành ngữ về tự kiềm chế
  { id: "n3-idiom-111", courseId: "jlpt-n3", kanji: "自縄自縛", kana: "じじょうじばく", romaji: "jijou jibaku", hanViet: "Tự thằng tự phược", meaning: "Tự trói mình", textMnemonic: "自縄自縛 = tự trói buộc mình 🪢" },
  { id: "n3-idiom-112", courseId: "jlpt-n3", kanji: "自爆", kana: "じばく", romaji: "jibaku", hanViet: "Tự bạo", meaning: "Tự sát / Tự hủy", textMnemonic: "自爆 = tự hủy hoại 💥" },
  { id: "n3-idiom-113", courseId: "jlpt-n3", kanji: "自然消滅", kana: "しぜんしょうめつ", romaji: "shizen shoummetsu", hanViet: "Tự nhiên tiêu diệt", meaning: "Tự nhiên biến mất", textMnemonic: "自然消滅 = tự tan biến 💨" },
  { id: "n3-idiom-114", courseId: "jlpt-n3", kanji: "自業自得", kana: "じごうじとく", romaji: "jigou jitoku", hanViet: "Tự nghiệp tự đắc", meaning: "Tự mình làm tự mình chịu", textMnemonic: "自業自得 = gieo nhân gặt quả ⚖️" },
  { id: "n3-idiom-115", courseId: "jlpt-n3", kanji: "和気藹藹", kana: "わきあいあい", romaji: "waki aiai", hanViet: "Hoà khí ái ái", meaning: "Khí hòa thuận", textMnemonic: "和気藹藹 = hòa thuận vui vẻ 🌸" },
  { id: "n3-idiom-116", courseId: "jlpt-n3", kanji: "異体同心", kana: "いたいどうしん", romaji: "itai doushin", hanViet: "Dị thể đồng tâm", meaning: "Khác thể cùng tâm", textMnemonic: "異体同心 = cùng chí hướng 🤝" },
  { id: "n3-idiom-117", courseId: "jlpt-n3", kanji: "一期一会", kana: "いちごいちえ", romaji: "ichigo ichie", hanViet: "Nhất kỳ nhất hội", meaning: "Một lần gặp mặt", textMnemonic: "一期一会 = trân trọng mỗi lần gặp 🍵" },
  { id: "n3-idiom-118", courseId: "jlpt-n3", kanji: "起死回生", kana: "きしかいせい", romaji: "kishi kaisei", hanViet: "Khởi tử hồi sinh", meaning: "Hồi sinh từ cõi chết", textMnemonic: "起死回生 = từ chết cứu sống ❤️‍🩹" },
  { id: "n3-idiom-119", courseId: "jlpt-n3", kanji: "一生懸命", kana: "いっしょうけんめい", romaji: "isshou kenmei", hanViet: "Nhất sinh tinh khí", meaning: "Cố gắng hết mình", textMnemonic: "一生懸命 = hết lòng 💪" },
  { id: "n3-idiom-120", courseId: "jlpt-n3", kanji: "一期一", kana: "いちごいち", romaji: "ichigo ichi", hanViet: "Nhất kỳ nhất", meaning: "Một lần gặp", textMnemonic: "一期一 = trân trọng từng lần 🍵" },
];
