/**
 * JLPT N3 - Từ vựng Văn hóa
 * 120 words covering traditions, festivals, arts, food, ceremonies, greetings
 */
import { Word } from "../types/kotoba";

export const JLPT_N3_CULTURE: Word[] = [
  // Lễ hội & Tết
  { id: "n3-culture-1", courseId: "jlpt-n3", kanji: "正月", kana: "しょうがつ", romaji: "shougatsu", hanViet: "Chính nguyệt", meaning: "Tết Nguyên Đán", textMnemonic: "正月 = Tết truyền thống 🎍" },
  { id: "n3-culture-2", courseId: "jlpt-n3", kanji: "お盆", kana: "おぼん", romaji: "obon", hanViet: "Thế bụng", meaning: "Lễ hội người chết", textMnemonic: "お盆 = lễ hội truyền thống 🕯️" },
  { id: "n3-culture-3", courseId: "jlpt-n3", kanji: "花見", kana: "はなみ", romaji: "hanami", hanViet: "Hoa quan", meaning: "Thăm hoa", textMnemonic: "花見 = ngắm hoa 🌸" },
  { id: "n3-culture-4", courseId: "jlpt-n3", kanji: "紅葉", kana: "こうぼう", romaji: "koubou", hanViet: "Đỏ hoa", meaning: "Lá vàng", textMnemonic: "紅葉 = lá đổ vàng 🍁" },
  { id: "n3-culture-5", courseId: "jlpt-n3", kanji: "祭り", kana: "まつり", romaji: "matsuri", hanViet: "Tế lễ", meaning: "Lễ hội", textMnemonic: "祭り = lễ hội 🎏" },
  { id: "n3-culture-6", courseId: "jlpt-n3", kanji: "お祭り", kana: "おまつり", romaji: "omatsuri", hanViet: "Thế lễ", meaning: "Lễ hội", textMnemonic: "お祭り = lễ hội truyền thống 🎎" },
  { id: "n3-culture-7", courseId: "jlpt-n3", kanji: "年末年始", kana: "ねんまつねんし", romaji: "nenmatsu nenshi", hanViet: "Niên mật niên thân", meaning: "Năm mới", textMnemonic: "年末年始 = thời gian mới 🥂" },
  { id: "n3-culture-8", courseId: "jlpt-n3", kanji: "お正月", kana: "おしょうがつ", romaji: "oshougatsu", hanViet: "Thế chính nguyệt", meaning: "Tết truyền thống", textMnemonic: "お正月 = Tết truyền thống 🎎" },
  { id: "n3-culture-9", courseId: "jlpt-n3", kanji: "初詣", kana: "はつもうじ", romaji: "hatsumouji", hanViet: "Thất mục giác", meaning: "Lên chùa đầu năm", textMnemonic: "初詣 = lên chùa đầu năm 🙏" },
  { id: "n3-culture-10", courseId: "jlpt-n3", kanji: "お宮参り", kana: "おみやまみち", romaji: "omiyamimichi", hanViet: "Thế miệt mạ", meaning: "Lên chùa", textMnemonic: "お宮参り = lên chùa thờ 🏯" },

  // Ẩm thực & Nhà hàng
  { id: "n3-culture-11", courseId: "jlpt-n3", kanji: "寿司", kana: "すし", romaji: "sushi", hanViet: "Thủ ý", meaning: "Sushi", textMnemonic: "寿司 = món ăn truyền thống 🍣" },
  { id: "n3-culture-12", courseId: "jlpt-n3", kanji: "ラーメン", kana: "らーめん", romaji: "raamenn", hanViet: "(ngoại lai)", meaning: "Mì", textMnemonic: "Ramen = mì Nhật 🍜" },
  { id: "n3-culture-13", courseId: "jlpt-n3", kanji: "お茶", kana: "おちゃ", romaji: "ocha", hanViet: "Thá trà", meaning: "Trà", textMnemonic: "お茶 = trà truyền thống 🍵" },
  { id: "n3-culture-14", courseId: "jlpt-n3", kanji: "味噌汁", kana: "みそしゅう", romaji: "miso shuu", hanViet: "Diêm tương trà", meaning: "Súp miso", textMnemonic: "味噌汁 = súp truyền thống 🍲" },
  { id: "n3-culture-15", courseId: "jlpt-n3", kanji: "天丼", kana: "てんどん", romaji: "tendon", hanViet: "Thiên đồ", meaning: "Cơm trứng", textMnemonic: "天丼 = cơm với trứng 🍚" },
  { id: "n3-culture-16", courseId: "jlpt-n3", kanji: "お好み焼き", kana: "おこのみやき", romaji: "okonomiyaki", hanViet: "Thế kỷ niệm", meaning: "Bánh kẹo", textMnemonic: "お好み焼き = bánh kẹo yêu thích 🥞" },
  { id: "n3-culture-17", courseId: "jlpt-n3", kanji: "たこ焼き", kana: "たこやき", romaji: "takoyaki", hanViet: "Đèn đào", meaning: "Bánh mực", textMnemonic: "たこ焼き = bánh mực 🦑" },
  { id: "n3-culture-18", courseId: "jlpt-n3", kanji: "焼き鳥", kana: "やきとり", romaji: "yakitori", hanViet: "Sắc nhục", meaning: "Gà nướng", textMnemonic: "焼き鳥 = gà nướng 🍢" },
  { id: "n3-culture-19", courseId: "jlpt-n3", kanji: "おでん", kana: "おでん", romaji: "oden", hanViet: "Thế điên", meaning: "Cà nê", textMnemonic: "おでん = cà nê nóng ấm 🍲" },
  { id: "n3-culture-20", courseId: "jlpt-n3", kanji: "和食", kana: "わしょく", romaji: "washoku", hanViet: "Thức ăn Nhật", meaning: "Ăn Nhật", textMnemonic: "和食 = ẩm thực Nhật 🍱" },

  // Nghệ thuật & Văn hóa
  { id: "n3-culture-21", courseId: "jlpt-n3", kanji: "歌舞伎", kana: "かぶき", romaji: "kabuki", hanViet: "Ca múa kỳ", meaning: "Kaubuki", textMnemonic: "歌舞伎 = nghệ thuật truyền thống 🎭" },
  { id: "n3-culture-22", courseId: "jlpt-n3", kanji: "能", kana: "のう", romaji: "nou", hanViet: "Năng", meaning: "Noh", textMnemonic: "能 = nghệ thuật truyền thống 🎭" },
  { id: "n3-culture-23", courseId: "jlpt-n3", kanji: "茶道", kana: "ちゃどう", romaji: "chadou", hanViet: "Thá trà đạo", meaning: "Đạo trà", textMnemonic: "茶道 = đạo trà 🍵" },
  { id: "n3-culture-24", courseId: "jlpt-n3", kanji: "華道", kana: "かどう", romaji: "kadou", hanViet: "Hoa đạo", meaning: "Đạo hoa", textMnemonic: "華道 = đạo hoa 🌸" },
  { id: "n3-culture-25", courseId: "jlpt-n3", kanji: "書道", kana: "しょどう", romaji: "shodou", hanViet: "Thư đạo", meaning: "Đạo viết", textMnemonic: "書道 = đạo viết ✍️" },
  { id: "n3-culture-26", courseId: "jlpt-n3", kanji: "江戸時代", kana: "えどじだい", romaji: "edojidai", hanViet: "Thời Edo", meaning: "Thời Edo", textMnemonic: "江戸時代 = thời kỳ Edo 🏯" },
  { id: "n3-culture-27", courseId: "jlpt-n3", kanji: "浮世絵", kana: "うきょうえ", romaji: "ukiyoe", hanViet: "Hồi thế", meaning: "Tranh truyền thống", textMnemonic: "浮世絵 = tranh truyền thống 🎨" },
  { id: "n3-culture-28", courseId: "jlpt-n3", kanji: "俳句", kana: "はいく", romaji: "haiku", hanViet: "Hiếm khúc", meaning: "Hiếm khúc", textMnemonic: "俳句 = thơ ngắn 🍃" },
  { id: "n3-culture-29", courseId: "jlpt-n3", kanji: "和歌", kana: "わか", romaji: "waka", hanViet: "Thá trà", meaning: "Thá trà", textMnemonic: "和歌 = thơ truyền thống 📜" },
  { id: "n3-culture-30", courseId: "jlpt-n3", kanji: "俳優", kana: "はいゆう", romaji: "haiyuu", hanViet: "Diễn viên", meaning: "Diễn viên", textMnemonic: "俳優 = ngôi sao giải trí 🎬" },

  // Nhạc & Điện ảnh
  { id: "n3-culture-31", courseId: "jlpt-n3", kanji: "音楽", kana: "おんがく", romaji: "ongaku", hanViet: "Âm nhạc", meaning: "Âm nhạc", textMnemonic: "音楽 = âm nhạc 🎵" },
  { id: "n3-culture-32", courseId: "jlpt-n3", kanji: "ジャズ", kana: "ジャズ", romaji: "jazu", hanViet: "(ngoại lai)", meaning: "Nhạc jazz", textMnemonic: "Jazz = nhạc jazz 🎷" },
  { id: "n3-culture-33", courseId: "jlpt-n3", kanji: "ロック", kana: "ロック", romaji: "rokku", hanViet: "(ngoại lai)", meaning: "Nhạc rock", textMnemonic: "Rock = nhạc rock 🎸" },
  { id: "n3-culture-34", courseId: "jlpt-n3", kanji: "映画", kana: "えいが", romaji: "eiga", hanViet: "Diễn ảnh", meaning: "Phim", textMnemonic: "映画 = phim ảnh 🎬" },
  { id: "n3-culture-35", courseId: "jlpt-n3", kanji: "映画館", kana: "えいがかん", romaji: "eigakan", hanViet: "Xưởng chiếu phim", meaning: "Rạp chiếu phim", textMnemonic: "映画館 = rạp chiếu phim 🎥" },
  { id: "n3-culture-36", courseId: "jlpt-n3", kanji: "映画祭", kana: "えいがさい", romaji: "eigasai", hanViet: "Diễn ảnh tế", meaning: "Lễ hội phim", textMnemonic: "映画祭 = lễ hội phim 🎬" },
  { id: "n3-culture-37", courseId: "jlpt-n3", kanji: "テレビ", kana: "テレビ", romaji: "terebi", hanViet: "(ngoại lai)", meaning: "TV", textMnemonic: "Television = TV 📺" },
  { id: "n3-culture-38", courseId: "jlpt-n3", kanji: "ラジオ", kana: "ラジオ", romaji: "rajio", hanViet: "(ngoại lai)", meaning: "Radio", textMnemonic: "Radio = radio 📻" },
  { id: "n3-culture-39", courseId: "jlpt-n3", kanji: "ニュース", kana: "ニュース", romaji: "nyuusu", hanViet: "(ngoại lai)", meaning: "Tin tức", textMnemonic: "News = tin tức 📰" },
  { id: "n3-culture-40", courseId: "jlpt-n3", kanji: "スポーツ", kana: "スポーツ", romaji: "supootsu", hanViet: "(ngoại lai)", meaning: "Thể thao", textMnemonic: "Sports = thể thao ⚽" },

  // Nghi lễ & Tín ngưỡng
  { id: "n3-culture-41", courseId: "jlpt-n3", kanji: "お祭り", kana: "おまつり", romaji: "omatsuri", hanViet: "Thế lễ", meaning: "Lễ hội", textMnemonic: "お祭り = lễ hội truyền thống 🎎" },
  { id: "n3-culture-42", courseId: "jlpt-n3", kanji: "神社", kana: "じんじゃ", romaji: "jinja", hanViet: "Thần xã", meaning: "Đền thờ", textMnemonic: "神社 = đền thờ Thần đạo ⛩️" },
  { id: "n3-culture-43", courseId: "jlpt-n3", kanji: "寺", kana: "てら", romaji: "tera", hanViet: "Tự", meaning: "Chùa", textMnemonic: "寺 = chùa Phật giáo 🏯" },
  { id: "n3-culture-44", courseId: "jlpt-n3", kanji: "お坂", kana: "おさか", romaji: "osaka", hanViet: "Thế sà", meaning: "Đền thờ", textMnemonic: "お坂 = đền thờ truyền thống 🏯" },
  { id: "n3-culture-45", courseId: "jlpt-n3", kanji: "御神輿", kana: "みこし", romaji: "mikoshi", hanViet: "Thế thần xuất", meaning: "Thánh diệu", textMnemonic: "御神輿 = thánh diệu trong lễ hội 🎏" },
  { id: "n3-culture-46", courseId: "jlpt-n3", kanji: "お宮", kana: "おみやま", romaji: "omiyama", hanViet: "Thế nương", meaning: "Đền thờ", textMnemonic: "お宮 = đền thờ truyền thống 🏯" },
  { id: "n3-culture-47", courseId: "jlpt-n3", kanji: "拝観", kana: "はいかん", romaji: "haikan", hanViet: "Phái quan", meaning: "Tham quan", textMnemonic: "拝観 = tham quan chùa 🏯" },
  { id: "n3-culture-48", courseId: "jlpt-n3", kanji: "お参り", kana: "おみり", romaji: "omiri", hanViet: "Thế mỗi", meaning: "Lên chùa", textMnemonic: "お参り = lên chùa thờ 🙏" },
  { id: "n3-culture-49", courseId: "jlpt-n3", kanji: "お供", kana: "おみやま", romaji: "omiyama", hanViet: "Thế cung", meaning: "Đền thờ", textMnemonic: "お供 = đền thờ truyền thống 🏯" },
  { id: "n3-culture-50", courseId: "jlpt-n3", kanji: "御朱印", kana: "みほし", romaji: "mihoshi", hanViet: "Thế trùng in", meaning: "ấn đỏ chùa", textMnemonic: "御朱印 = ấn đỏ chùa 🏯" },

  // Giao tiếp & Lễ phát
  { id: "n3-culture-51", courseId: "jlpt-n3", kanji: "お辞儀", kana: "おじぎ", romaji: "ojigi", hanViet: "Thế kỉ", meaning: "Lạ", textMnemonic: "お辞儀 = lạ trang trọng 🙇" },
  { id: "n3-culture-52", courseId: "jlpt-n3", kanji: "会釈", kana: "かいしゃ", romaji: "kaisha", hanViet: "Hán xuất", meaning: "Lạ ngắn", textMnemonic: "会釈 = lạ ngắn 👋" },
  { id: "n3-culture-53", courseId: "jlpt-n3", kanji: " bow", kana: "ぼう", romaji: "bou", hanViet: "Bố", meaning: "Lạ", textMnemonic: "Bow = lạ trang trọng 🙇" },
  { id: "n3-culture-54", courseId: "jlpt-n3", kanji: "お見舞い", kana: "おみまい", romaji: "omimai", hanViet: "Thế quan", meaning: "Thăm viếng", textMnemonic: "お見舞い = thăm viếng 🏠" },
  { id: "n3-culture-55", courseId: "jlpt-n3", kanji: "お返し", kana: "おかえし", romaji: "okaeshi", hanViet: "Thế hoàn", meaning: "Lời xin lỗi", textMnemonic: "お返し = lời xin lỗi 🙏" },
  { id: "n3-culture-56", courseId: "jlpt-n3", kanji: "お土産", kana: "おみやげ", romaji: "omiyage", hanViet: "Thổ sản", meaning: "Quà lưu niệm", textMnemonic: "お土産 = quà lưu niệm 🎁" },
  { id: "n3-culture-57", courseId: "jlpt-n3", kanji: "お菓子", kana: "おかし", romaji: "okashi", hanViet: "Thế kẹo", meaning: "Bánh kẹo", textMnemonic: "お菓子 = bánh kẹo 🍡" },
  { id: "n3-culture-58", courseId: "jlpt-n3", kanji: "お酒", kana: "おさけ", romaji: "osake", hanViet: "Thế rượu", meaning: "Rượu", textMnemonic: "お酒 = rượu truyền thống 🍶" },
  { id: "n3-culture-59", courseId: "jlpt-n3", kanji: "乾杯", kana: "かんぱい", romaji: "kanpai", hanViet: "Khao phí", meaning: "Lời chúc xây", textMnemonic: "乾杯 = chúc xây 🍷" },
  { id: "n3-culture-60", courseId: "jlpt-n3", kanji: "お口", kana: "おくち", romaji: "okuchi", hanViet: "Thế miệng", meaning: "Miệng", textMnemonic: "お口 = miệng 👄" },

  // Nhà ở & Kiến trúc
  { id: "n3-culture-61", courseId: "jlpt-n3", kanji: "家", kana: "いえ", romaji: "ie", hanViet: "Gia", meaning: "Nhà", textMnemonic: "家 = ngôi nhà 🏠" },
  { id: "n3-culture-62", courseId: "jlpt-n3", kanji: "戸", kana: "ほ", romaji: "ho", hanViet: "Hộ", meaning: "Cửa", textMnemonic: "戸 = cửa sổ 🚪" },
  { id: "n3-culture-63", courseId: "jlpt-n3", kanji: "畳", kana: "たたみ", romaji: "tatami", hanViet: "Đệm tấu", meaning: "Đệm tấu", textMnemonic: "畳 = đệm tấu 🪑" },
  { id: "n3-culture-64", courseId: "jlpt-n3", kanji: "畳屋", kana: "たたみや", romaji: "tatamiyaka", hanViet: "Đệm tấu nhà", meaning: "Nhà tatami", textMnemonic: "畳屋 = nhà tatami 🏯" },
  { id: "n3-culture-65", courseId: "jlpt-n3", kanji: "和風", kana: "わふう", romaji: "wafuu", hanViet: "Thiên phong Nhật", meaning: "Phong cách Nhật", textMnemonic: "和風 = phong cách Nhật Bản 🏯" },
  { id: "n3-culture-66", courseId: "jlpt-n3", kanji: "洋風", kana: "ようふう", romaji: "yoofuu", hanViet: "Thiên phong Tây", meaning: "Phong cách Tây", textMnemonic: "洋風 = phong cách Tây Occident 🏠" },
  { id: "n3-culture-67", courseId: "jlpt-n3", kanji: "町屋", kana: "まちや", romaji: "machiyaka", hanViet: "Thị trấ", meaning: "Nhà khang", textMnemonic: "町屋 = nhà khang truyền thống 🏘️" },
  { id: "n3-culture-68", courseId: "jlpt-n3", kanji: "柵", kana: "かく", romaji: "kaku", hanViet: "Vòng", meaning: "Vòng tre", textMnemonic: "柵 = vòng tre xung quanh 🏘️" },
  { id: "n3-culture-69", courseId: "jlpt-n3", kanji: "提灯", kana: "とうひょう", romaji: "touhyou", hanViet: "Đèn lồng", meaning: "Đèn lồng", textMnemonic: "提灯 = đèn lồng truyền thống 🏮" },
  { id: "n3-culture-70", courseId: "jlpt-n3", kanji: "土蔵", kana: "ぬぞう", romaji: "nuzou", hanViet: "Đất tàng", meaning: "Xưởng lạnh", textMnemonic: "土蔵 = xưởng lạnh truyền thống 🏯" },

  // Nghệ thuật truyền thống
  { id: "n3-culture-71", courseId: "jlpt-n3", kanji: "浮世絵", kana: "うきょうえ", romaji: "ukiyoe", hanViet: "Hồi thế", meaning: "Tranh truyền thống", textMnemonic: "浮世絵 = tranh truyền thống 🎨" },
  { id: "n3-culture-72", courseId: "jlpt-n3", kanji: "墨絵", kana: "すりえ", romaji: "surie", hanViet: "Mực tranh", meaning: "Tranh mực", textMnemonic: "墨絵 = tranh mực 🎨" },
  { id: "n3-culture-73", courseId: "jlpt-n3", kanji: "書道", kana: "しょどう", romaji: "shodou", hanViet: "Thư đạo", meaning: "Đạo viết", textMnemonic: "書道 = đạo viết ✍️" },
  { id: "n3-culture-74", courseId: "jlpt-n3", kanji: "和紙", kana: "わしゃ", romaji: "washa", hanViet: "Thức ẩn", meaning: "Giấy Nhật", textMnemonic: "和紙 = giấy Nhật 📜" },
  { id: "n3-culture-75", courseId: "jlpt-n3", kanji: "墨", kana: "すみ", romaji: "sumi", hanViet: "Mực", meaning: "Mực", textMnemonic: "墨 = mực viết 🎨" },
  { id: "n3-culture-76", courseId: "jlpt-n3", kanji: "刀", kana: "つるぎ", romaji: "tsurugi", hanViet: "Kiếm", meaning: "Kiếm truyền thống", textMnemonic: "刀 = kiếm truyền thống ⚔️" },
  { id: "n3-culture-77", courseId: "jlpt-n3", kanji: "刀工", kana: "つるぎく", romaji: "tsurugikku", hanViet: "Kiếm công", meaning: "Nghề kiếm", textMnemonic: "刀工 = nghề làm kiếm 🔨" },
  { id: "n3-culture-78", courseId: "jlpt-n3", kanji: "掛け軸", kana: "かけじく", romaji: "kakejiku", hanViet: "Hình tranh treo", meaning: "Tranh treo", textMnemonic: "掛け軸 = tranh treo tường 🎨" },
  { id: "n3-culture-79", courseId: "jlpt-n3", kanji: "屏風", kana: "びょうふ", romaji: "byoufu", hanViet: "Thiên phong", meaning: "Bức tường", textMnemonic: "屏風 = bức tường treo 🖼️" },
  { id: "n3-culture-80", courseId: "jlpt-n3", kanji: "茶碗", kana: "ちゃわん", romaji: "chawan", hanViet: "Thá quan", meaning: "Cốc trà", textMnemonic: "茶碗 = cốc trà 🍵" },

  // Thời gian & Lịch
  { id: "n3-culture-81", courseId: "jlpt-n3", kanji: "季節", kana: "きせつ", romaji: "kisetsu", hanViet: "Quan niên", meaning: "Mùa", textMnemonic: "季節 = các mùa trong năm 🍂" },
  { id: "n3-culture-82", courseId: "jlpt-n3", kanji: "春", kana: "はる", romaji: "haru", hanViet: "Hân", meaning: "Xuân", textMnemonic: "春 = mùa xuân 🌸" },
  { id: "n3-culture-83", courseId: "jlpt-n3", kanji: "夏", kana: "なつ", romaji: "natsu", hanViet: "Hạ", meaning: "Mùa hè", textMnemonic: "夏 = mùa hè ☀️" },
  { id: "n3-culture-84", courseId: "jlpt-n3", kanji: "秋", kana: "あき", romaji: "aki", hanViet: "Thu", meaning: "Mùa thu", textMnemonic: "秋 = mùa thu 🍁" },
  { id: "n3-culture-85", courseId: "jlpt-n3", kanji: "冬", kana: "ふゆ", romaji: "fuyu", hanViet: "Đông", meaning: "Mùa đông", textMnemonic: "冬 = mùa đông ❄️" },
  { id: "n3-culture-86", courseId: "jlpt-n3", kanji: "立春", kana: "りっしゅん", romaji: "rashun", hanViet: "Thập hân", meaning: "Bắt đầu xuân", textMnemonic: "立春 = đầu xuân 🌱" },
  { id: "n3-culture-87", courseId: "jlpt-n3", kanji: "立夏", kana: "りっか", romaji: "rikka", hanViet: "Thập hạ", meaning: "Bắt đầu hè", textMnemonic: "立夏 = đầu hè ☀️" },
  { id: "n3-culture-88", courseId: "jlpt-n3", kanji: "立秋", kana: "りっしゅう", romaji: "rashuu", hanViet: "Thập thu", meaning: "Bắt đầu thu", textMnemonic: "立秋 = đầu thu 🍂" },
  { id: "n3-culture-89", courseId: "jlpt-n3", kanji: "立冬", kana: "りっとう", romaji: "ritou", hanViet: "Thập đông", meaning: "Bắt đầu đông", textMnemonic: "立冬 = đầu đông ❄️" },
  { id: "n3-culture-90", courseId: "jlpt-n3", kanji: "節分", kana: "せっぷん", romaji: "seppun", hanViet: "Biên niên", meaning: "Xuan hán", textMnemonic: "節分 = xuân hán 🌸" },

  // Năm mới & Tết
  { id: "n3-culture-91", courseId: "jlpt-n3", kanji: "お正月", kana: "おしょうがつ", romaji: "oshougatsu", hanViet: "Thế chính nguyệt", meaning: "Tết truyền thống", textMnemonic: "お正月 = Tết truyền thống 🎎" },
  { id: "n3-culture-92", courseId: "jlpt-n3", kanji: "初日の出", kana: "はつひので", romaji: "hatsuhinode", hanViet: "Thất nhật của", meaning: "Mặt trời lên đầu năm", textMnemonic: "初日の出 = mặt trời lên đầu năm ☀️" },
  { id: "n3-culture-93", courseId: "jlpt-n3", kanji: "七五三", kana: "しちごさん", romaji: "shichigosan", hanViet: "Thất ngọ sáu", meaning: "Lễ hội trẻ em", textMnemonic: "七五三 = lễ hội trẻ em 🎏" },
  { id: "n3-culture-94", courseId: "jlpt-n3", kanji: "お盆", kana: "おぼん", romaji: "obon", hanViet: "Thế bụng", meaning: "Lễ hội người chết", textMnemonic: "お盆 = lễ hội truyền thống 🕯️" },
  { id: "n3-culture-95", courseId: "jlpt-n3", kanji: "盂蘭盆", kana: "うらんぼん", romaji: "uranbon", hanViet: "U lan bụng", meaning: "Lễ hội người chết", textMnemonic: "盂蘭盆 = lễ hội truyền thống 🕯️" },
  { id: "n3-culture-96", courseId: "jlpt-n3", kanji: "お祭り", kana: "おまつり", romaji: "omatsuri", hanViet: "Thế lễ", meaning: "Lễ hội", textMnemonic: "お祭り = lễ hội truyền thống 🎎" },
  { id: "n3-culture-97", courseId: "jlpt-n3", kanji: "祭り", kana: "まつり", romaji: "matsuri", hanViet: "Tế lễ", meaning: "Lễ hội", textMnemonic: "祭り = lễ hội 🎏" },
  { id: "n3-culture-98", courseId: "jlpt-n3", kanji: "神輿", kana: "みこし", romaji: "mikoshi", hanViet: "Thần xuất", meaning: "Thánh diệu", textMnemonic: "神輿 = thánh diệu 🎏" },
  { id: "n3-culture-99", courseId: "jlpt-n3", kanji: "神前祭", kana: "かんぜんさい", romaji: "kansensai", hanViet: "Thần xuất tế", meaning: "Lễ hội trước đền", textMnemonic: "神前祭 = lễ hội trước đền 🏯" },
  { id: "n3-culture-100", courseId: "jlpt-n3", kanji: "山祭", kana: "やままつり", romaji: "yamamatsuri", hanViet: "Thị trấ tế", meaning: "Lễ hội núi", textMnemonic: "山祭 = lễ hội núi 🏔️" },

  // Văn hóa đô thị
  { id: "n3-culture-101", courseId: "jlpt-n3", kanji: "下町", kana: "したまち", romaji: "shitamachi", hanViet: "Thế thị", meaning: "Khu phố cổ", textMnemonic: "下町 = khu phố cổ 🏘️" },
  { id: "n3-culture-102", courseId: "jlpt-n3", kanji: "町並み", kana: "まちなみ", romaji: "machinami", hanViet: "Thị trấ", meaning: "Sắp xếp phố", textMnemonic: "町並み = sắp xếp phố 🏘️" },
  { id: "n3-culture-103", courseId: "jlpt-n3", kanji: "路地裏", kana: "ろじり", romaji: "rojuri", hanViet: "Đường ngõ", meaning: "Con ngõ", textMnemonic: "路地裏 = con ngõ 🏘️" },
  { id: "n3-culture-104", courseId: "jlpt-n3", kanji: "商店街", kana: "しょうてんがい", romaji: "shoutengai", hanViet: "Chương trường", meaning: "Khu chợ", textMnemonic: "商店街 = khu chợ 🏪" },
  { id: "n3-culture-105", courseId: "jlpt-n3", kanji: "屋台", kana: "やたい", romaji: "yatai", hanViet: "Xưởng", meaning: "Kệ hàng di động", textMnemonic: "屋台 = kệ hàng di động 🍢" },
  { id: "n3-culture-106", courseId: "jlpt-n3", kanji: "居酒屋", kana: "いきゅうや", romaji: "ikyuuya", hanViet: "Kỵu ya", meaning: "Quán nướng", textMnemonic: "居酒屋 = quán nướng 🍢" },
  { id: "n3-culture-107", courseId: "jlpt-n3", kanji: "喫茶店", kana: "きっさてん", romaji: "kissaten", hanViet: "Thất sát tiên", meaning: "Quán cà phê", textMnemonic: "喫茶店 = quán cà phê ☕" },
  { id: "n3-culture-108", courseId: "jlpt-n3", kanji: "カフェ", kana: "カフェ", romaji: "kafe", hanViet: "(ngoại lai)", meaning: "Café", textMnemonic: "Cafe = quán cà phê ☕" },
  { id: "n3-culture-109", courseId: "jlpt-n3", kanji: "バー", kana: "バー", romaji: "baaw", hanViet: "(ngoại lai)", meaning: "Quán bar", textMnemonic: "Bar = quán bar 🍸" },
  { id: "n3-culture-110", courseId: "jlpt-n3", kanji: "レストラン", kana: "レストラン", romaji: "resutoran", hanViet: "(ngoại lai)", meaning: "Nhà hàng", textMnemonic: "Restaurant = nhà hàng 🍽️" },

  // Văn hóa hiện đại
  { id: "n3-culture-111", courseId: "jlpt-n3", kanji: "ポップカルチャー", kana: "ポップカルチャー", romaji: "poppu karuchaa", hanViet: "(ngoại lai)", meaning: "Văn hóa pop", textMnemonic: "Pop culture = văn hóa hiện đại 🎵" },
  { id: "n3-culture-112", courseId: "jlpt-n3", kanji: "アニメ", kana: "アニメ", romaji: "anime", hanViet: "(ngoại lai)", meaning: "Hoạt hình anime", textMnemonic: "Anime = hoạt hình anime 🎨" },
  { id: "n3-culture-113", courseId: "jlpt-n3", kanji: "マンガ", kana: "まんが", romaji: "manga", hanViet: "(ngoại lai)", meaning: "Truyện tranh", textMnemonic: "Manga = truyện tranh 📚" },
  { id: "n3-culture-114", courseId: "jlpt-n3", kanji: "ゲーム", kana: "ゲーム", romaji: "geemu", hanViet: "(ngoại lai)", meaning: "Game", textMnemonic: "Game = trò chơi 🎮" },
  { id: "n3-culture-115", courseId: "jlpt-n3", kanji: "ゲームセンター", kana: "ゲームセンター", romaji: "geemu sentaa", hanViet: "(ngoại lai)", meaning: "Xưởng game", textMnemonic: "Game center = xưởng game 🎮" },
  { id: "n3-culture-116", courseId: "jlpt-n3", kanji: "アイドル", kana: "アイドル", romaji: "aidoru", hanViet: "(ngoại lai)", meaning: " idol", textMnemonic: "Idol = ngôi sao idol 🎤" },
  { id: "n3-culture-117", courseId: "jlpt-n3", kanji: "歌手", kana: "かじゅ", romaji: "kajyu", hanViet: "Ca sĩ", meaning: "Ca sĩ", textMnemonic: "歌手 = ca sĩ 🎤" },
  { id: "n3-culture-118", courseId: "jlpt-n3", kanji: "俳優", kana: "はいゆう", romaji: "haiyuu", hanViet: "Diễn viên", textMnemonic: "俳優 = diễn viên 🎬" },
  { id: "n3-culture-119", courseId: "jlpt-n3", kanji: "映画", kana: "えいが", romaji: "eiga", hanViet: "Diễn ảnh", meaning: "Phim", textMnemonic: "映画 = phim ảnh 🎬" },
  { id: "n3-culture-120", courseId: "jlpt-n3", kanji: "音楽番組", kana: "おんがくばんぐ", romaji: "ongakubanggu", hanViet: "Âm nhạc bản gia", meaning: "Chương trình nhạc", textMnemonic: "音楽番組 = chương trình nhạc 🎵" },
];