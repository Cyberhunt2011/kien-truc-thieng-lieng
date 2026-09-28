export type Chapter = "open" | "buddhist" | "mughal" | "compare" | "quiz" | "end";

export type Fact = { label: string; value: string };

export type Slide =
  | {
      id: string;
      type: "title";
      chapter: Chapter;
      image: string;
      kicker: string;
      title: string;
      subtitle: string;
    }
  | {
      id: string;
      type: "quote";
      chapter: Chapter;
      image: string;
      quote: string;
      attribution: string;
    }
  | {
      id: string;
      type: "toc";
      chapter: Chapter;
      image: string;
      items: { n: string; title: string; hint: string }[];
    }
  | { id: string; type: "map"; chapter: Chapter; image: string }
  | {
      id: string;
      type: "chapter";
      chapter: Chapter;
      image: string;
      roman: string;
      title: string;
      subtitle: string;
    }
  | {
      id: string;
      type: "hero";
      chapter: Chapter;
      image: string;
      kicker: string;
      title: string;
      subtitle: string;
      year: string;
      location: string;
    }
  | {
      id: string;
      type: "split";
      chapter: Chapter;
      image: string;
      kicker: string;
      title: string;
      facts: Fact[];
      body: string[];
      tags?: string[];
    }
  | {
      id: string;
      type: "cards";
      chapter: Chapter;
      image: string;
      kicker: string;
      title: string;
      cards: { title: string; meta?: string; body: string }[];
    }
  | {
      id: string;
      type: "timeline";
      chapter: Chapter;
      image: string;
      kicker: string;
      title: string;
      events: { year: string; title: string; body: string }[];
    }
  | {
      id: string;
      type: "compare";
      chapter: Chapter;
      left: { image: string; title: string; points: string[] };
      right: { image: string; title: string; points: string[] };
    }
  | { id: string; type: "fill"; chapter: Chapter; image: string }
  | { id: string; type: "mcq"; chapter: Chapter; image: string }
  | { id: string; type: "key"; chapter: Chapter; image: string }
  | { id: string; type: "match"; chapter: Chapter; image: string }
  | { id: string; type: "credits"; chapter: Chapter; image: string };

export const IMG = {
  taj: "/images/taj-dawn.jpg",
  sanchi: "/images/sanchi.jpg",
  torana: "/images/sanchi-torana.jpg",
  ajanta: "/images/ajanta-gorge.jpg",
  ajantaIn: "/images/ajanta-interior.jpg",
  mahabodhi: "/images/mahabodhi.jpg",
  pietra: "/images/pietra-dura.jpg",
  red: "/images/red-fort.jpg",
  jama: "/images/jama-masjid.jpg",
  agra: "/images/agra-fort.jpg",
} as const;

export const slides: Slide[] = [
  {
    id: "title",
    type: "title",
    chapter: "open",
    image: IMG.taj,
    kicker: "Thuyết trình lịch sử nhóm 2 · Sử 10",
    title: "Kiến Trúc Thiêng Liêng",
    subtitle: "Những công trình Phật giáo và Hồi giáo tiêu biểu trên tiểu lục địa Ấn Độ",
  },
  {
    id: "quote",
    type: "quote",
    chapter: "open",
    image: IMG.sanchi,
    quote:
      "Đá không biết nói, nhưng nó nhớ. Từ tháp Sanchi đến Taj Mahal, mỗi viên gạch là một câu chuyện về đức tin, quyền lực và vẻ đẹp.",
    attribution: "Hành trình mở đầu",
  },
  {
    id: "toc",
    type: "toc",
    chapter: "open",
    image: IMG.ajanta,
    items: [
      { n: "I", title: "Phật giáo", hint: "Sanchi · Ajanta · Mahabodhi" },
      { n: "II", title: "Đế quốc Mô-gôn", hint: "1526–1857 · đỉnh cao Shah Jahan" },
      { n: "III", title: "Thánh đường Hồi giáo", hint: "Taj Mahal · Red Fort · Jama Masjid · Agra · Sikri" },
      { n: "IV", title: "Đối chiếu & giá trị", hint: "Giao thoa · di sản Nam Á" },
      { n: "V", title: "Ôn tập tương tác", hint: "Điền từ · trắc nghiệm · nối cột" },
    ],
  },
  { id: "map", type: "map", chapter: "open", image: IMG.taj },
  {
    id: "ch-bud",
    type: "chapter",
    chapter: "buddhist",
    image: IMG.sanchi,
    roman: "Chương I",
    title: "Phật giáo",
    subtitle: "Từ gò đất chứa xá lợi đến những hang động được vẽ như một thế giới khác",
  },
  {
    id: "bud-lang",
    type: "cards",
    chapter: "buddhist",
    image: IMG.torana,
    kicker: "Ngôn ngữ kiến trúc",
    title: "Ba hình thức cốt lõi",
    cards: [
      {
        title: "Stupa — bảo tháp",
        meta: "Anda · harmika · chhatra",
        body: "Gò bán cầu đặc, không có không gian bên trong. Tín đồ đi nhiễu (pradakshina) theo chiều kim đồng hồ. Bản thân công trình chính là nghi lễ.",
      },
      {
        title: "Chaitya — điện thờ",
        meta: "Hang cầu nguyện",
        body: "Hành lang hình thuyền, trần vòm, cuối hậu cung đặt stupa. Mặt tiền có cửa sổ móng ngựa — chaitya window — để ánh sáng rơi đúng lên bảo tháp.",
      },
      {
        title: "Vihara — tu viện",
        meta: "Nơi ở của tăng đoàn",
        body: "Sảnh trung tâm, xung quanh là các phòng nhỏ của tăng sĩ. Giai đoạn Đại thừa, vihara thêm điện thờ Phật ở tường sau.",
      },
    ],
  },
  {
    id: "sanchi-hero",
    type: "hero",
    chapter: "buddhist",
    image: IMG.sanchi,
    kicker: "Madhya Pradesh · UNESCO 1989",
    title: "Đại tháp Sanchi",
    subtitle: "Công trình đá đứng độc lập cổ nhất còn nguyên vẹn của Phật giáo Ấn Độ",
    year: "TK III TCN",
    location: "Sanchi, gần Bhopal",
  },
  {
    id: "sanchi-split",
    type: "split",
    chapter: "buddhist",
    image: IMG.sanchi,
    kicker: "Hoàng đế A-dục · triều Maurya",
    title: "Một gò gạch được khoác áo đá",
    facts: [
      { label: "Khởi công", value: "khoảng thế kỉ III TCN" },
      { label: "Người cho xây", value: "Hoàng đế A-dục (Ashoka)" },
      { label: "Mở rộng", value: "Shunga & Satavahana, TK II–I TCN" },
      { label: "UNESCO", value: "1989 — Buddhist Monuments at Sanchi" },
    ],
    body: [
      "A-dục xây lõi gạch nhỏ phủ xá lợi. Triều Shunga bọc đá, nhân đôi đường kính, thêm sân nhiễu và lan can vedika. Bốn cổng torana — kiệt tác điêu khắc — được dựng khoảng thế kỉ I TCN–I SCN.",
      "Đức Phật không bao giờ xuất hiện dưới dạng người trên các phù điêu sớm: hoa sen là đản sinh, cây Bồ-đề là giác ngộ, bánh xe là giáo pháp, dấu chân là sự hiện diện.",
    ],
    tags: ["anda", "harmika", "chhatra", "torana", "aniconic"],
  },
  {
    id: "sanchi-torana",
    type: "split",
    chapter: "buddhist",
    image: IMG.torana,
    kicker: "Bốn cửa phương vị",
    title: "Torana — thư viện bằng đá",
    facts: [
      { label: "Số cổng", value: "4, đúng bốn hướng" },
      { label: "Cấu tạo", value: "Hai trụ + ba xà cong" },
      { label: "Chiều cao", value: "khoảng 10 mét" },
      { label: "Đề tài", value: "Jataka & cuộc đời Phật" },
    ],
    body: [
      "Mỗi mặt được chạm kín: voi, sư tử, dạ-xoa, hoa sen, và các tấm truyện kể. Thợ vốn làm ngà và gỗ — họ chuyển kỹ năng ấy sang đá, nên đường nét mỏng như chạm ngà.",
      "Cổng Nam, cổ nhất, có đôi sư tử lưng tựa nhau — hình ảnh sau này trở thành quốc huy Ấn Độ. Toàn bộ kể chuyện mà không cần chữ.",
    ],
    tags: ["Jataka", "voi", "sư tử", "hoa sen"],
  },
  {
    id: "ajanta-hero",
    type: "hero",
    chapter: "buddhist",
    image: IMG.ajanta,
    kicker: "Maharashtra · UNESCO 1983",
    title: "Chùa hang Ajanta",
    subtitle: "Ba mươi hang khoét vào vách basalt hình móng ngựa bên sông Waghora",
    year: "TK II TCN",
    location: "Hẻm núi Ajanta",
  },
  {
    id: "ajanta-split",
    type: "split",
    chapter: "buddhist",
    image: IMG.ajanta,
    kicker: "Hai nhịp cách nhau bốn thế kỉ",
    title: "Không phải một triều, mà nhiều đời đục đá",
    facts: [
      { label: "Giai đoạn 1", value: "TK II–I TCN, Satavahana" },
      { label: "Giai đoạn 2", value: "TK V–VI, Vakataka (Harishena)" },
      { label: "Số hang", value: "30, gồm cả hang dở" },
      { label: "Phân loại", value: "5 chaitya · còn lại vihara" },
    ],
    body: [
      "Nhịp sớm (hang 9, 10, 12, 13, 15A) theo Theravada: thờ Phật bằng biểu tượng, hang giản dị. Sau bốn trăm năm im lặng, triều Vakataka khoét đại đa số hang còn lại — lúc này Đức Phật đã hiện hình.",
      "Hang 1 gắn với vua Harishena; hang 16 do đại thần Varahadeva cúng. Hang 5, 24, 29 bỏ dở — ta nhìn thấy chính nhát đục.",
    ],
    tags: ["Satavahana", "Vakataka", "chaitya", "vihara"],
  },
  {
    id: "ajanta-art",
    type: "split",
    chapter: "buddhist",
    image: IMG.ajantaIn,
    kicker: "Bích họa còn sống",
    title: "Padmapani, sắc tố khoáng và ánh đèn dầu",
    facts: [
      { label: "Kỹ thuật", value: "Vẽ trên vữa vôi, không phải fresco ướt" },
      { label: "Sắc tố", value: "thổ hoàng, lưu ly, chu sa, đen đèn" },
      { label: "Hang nổi tiếng", value: "1 · 2 · 16 · 17 · 26" },
      { label: "Tái phát hiện", value: "1819" },
    ],
    body: [
      "Hang 1 giữ Bồ-tát Padmapani cầm hoa sen xanh — một trong những khuôn mặt được yêu nhất của nghệ thuật Ấn Độ. Hang 17 còn chương trình tranh gần như nguyên vẹn: cung đình, voi, nhạc công.",
      "Hang 26 có tượng Phật nhập niết-bàn nằm dài, khối điêu khắc lớn nhất khu hang. Ajanta ghi lại bước ngoặt từ aniconic sang iconic — từ biểu tượng sang hình người.",
    ],
    tags: ["Padmapani", "Jataka", "Mahayana"],
  },
  {
    id: "maha-hero",
    type: "hero",
    chapter: "buddhist",
    image: IMG.mahabodhi,
    kicker: "Bodh Gaya, Bihar · UNESCO 2002",
    title: "Đại bảo tháp Mahabodhi",
    subtitle: "Ngôi tháp đứng trên mặt đất nơi Thái tử Siddhartha thành Phật",
    year: "TK III TCN",
    location: "Bodh Gaya",
  },
  {
    id: "maha-split",
    type: "split",
    chapter: "buddhist",
    image: IMG.mahabodhi,
    kicker: "Từ A-dục đến tháp Gupta",
    title: "Hai lần ra đời của một thánh địa",
    facts: [
      { label: "Công trình đầu", value: "A-dục, thế kỉ III TCN" },
      { label: "Ngôi đền hiện nay", value: "chủ yếu thế kỉ V–VI" },
      { label: "Dạng tháp", value: "Shikhara gạch cao, tháp con vây quanh" },
      { label: "Cây Bồ-đề", value: "dòng dõi cây gốc nơi Phật thành đạo" },
    ],
    body: [
      "A-dục dựng kim cương tòa (vajrasana) và một bảo tháp sớm. Ngôi đền gạch vút cao ta thấy hôm nay mang dấu ấn thời Gupta: thân tháp nhiều tầng, mỗi mặt chạm nghìn Phật.",
      "Khác Sanchi (gò đặc) và Ajanta (khoét núi), Mahabodhi là tháp-đền đứng, có không gian bên trong — mô hình ảnh hưởng ra Myanmar, Thái Lan, Tây Tạng.",
    ],
    tags: ["Bodh Gaya", "shikhara", "vajrasana", "Gupta"],
  },
  {
    id: "bud-sum",
    type: "cards",
    chapter: "buddhist",
    image: IMG.sanchi,
    kicker: "Ba nhịp một đức tin",
    title: "Phật giáo, ba cách xây thiêng",
    cards: [
      {
        title: "Sanchi",
        meta: "Gò xá lợi · ngoài trời",
        body: "Kiến trúc aniconic sớm nhất còn đủ bộ. Đi nhiễu quanh một khối đặc. Cổng kể chuyện thay cho tượng.",
      },
      {
        title: "Ajanta",
        meta: "Hang động · hai nhịp",
        body: "Từ hang mộc mạc Theravada đến vihara Đại thừa đầy bích họa. Đá basalt biến thành cung điện dưới lòng núi.",
      },
      {
        title: "Mahabodhi",
        meta: "Tháp-đền · thánh địa gốc",
        body: "Đánh dấu đúng chỗ thành đạo. Tháp gạch vút trời, cây Bồ-đề, hành hương xuyên châu Á.",
      },
    ],
  },
  {
    id: "ch-mughal",
    type: "chapter",
    chapter: "mughal",
    image: IMG.red,
    roman: "Chương II",
    title: "Đế quốc Mô-gôn",
    subtitle: "1526–1857 · từ chiến trường Panipat đến những mái vòm cẩm thạch",
  },
  {
    id: "empire",
    type: "split",
    chapter: "mughal",
    image: IMG.red,
    kicker: "Mughal Empire",
    title: "Một đế quốc Hồi giáo trên đất Ấn",
    facts: [
      { label: "Thành lập", value: "1526, trận Panipat lần thứ nhất" },
      { label: "Người lập", value: "Babur, hậu duệ Timur" },
      { label: "Hoàng đế cuối", value: "Bahadur Shah II, 1857" },
      { label: "Phạm vi", value: "phần lớn tiểu lục địa Ấn Độ" },
    ],
    body: [
      "Babur, dòng dõi Timur và có quan hệ với Thành Cát Tư Hãn, đánh bại Ibrahim Lodi năm 1526. Hơn ba thế kỉ sau, Mô-gôn để lại dấu ấn chính trị, văn hóa, nghệ thuật, tôn giáo và — rõ nhất — kiến trúc.",
      "Đây không phải bản sao Ba Tư đem sang. Đó là giao thoa: Hồi giáo Ba Tư + Trung Á + truyền thống Ấn Độ bản địa.",
    ],
    tags: ["Babur", "Panipat", "Timur", "1857"],
  },
  {
    id: "emperors",
    type: "timeline",
    chapter: "mughal",
    image: IMG.agra,
    kicker: "Sáu nhịp lớn",
    title: "Những hoàng đế định hình đế quốc",
    events: [
      { year: "1526", title: "Babur", body: "Thắng Panipat, mở triều Mô-gôn tại Ấn Độ." },
      { year: "1530", title: "Humayun", body: "Mất rồi lấy lại ngai vàng. Lăng ông ở Delhi là bản lề kiến trúc." },
      { year: "1556–1605", title: "Akbar Đại đế", body: "Mở rộng lãnh thổ, hành chính tập trung, dung hợp Hồi giáo–Ấn Độ. Xây Fatehpur Sikri và Thành Agra bằng đá đỏ." },
      { year: "1605–1627", title: "Jahangir", body: "Cung đình hội họa nở rộ, nghệ thuật tinh xảo." },
      { year: "1628–1658", title: "Shah Jahan", body: "Đỉnh cao kiến trúc: Taj Mahal, Red Fort, Jama Masjid, cung điện cẩm thạch." },
      { year: "1658–1707", title: "Aurangzeb", body: "Lãnh thổ lớn nhất, rồi suy vì chiến tranh và tài chính. 1857 khép lại." },
    ],
  },
  {
    id: "peak",
    type: "split",
    chapter: "mughal",
    image: IMG.taj,
    kicker: "Đỉnh cao thứ hai",
    title: "Thời Shah Jahan: kiến trúc đạt tới cực điểm",
    facts: [
      { label: "Tại vị", value: "1628–1658" },
      { label: "Đỉnh lãnh thổ", value: "thường gắn với Aurangzeb" },
      { label: "Đỉnh kiến trúc", value: "gắn với Shah Jahan" },
      { label: "Chất liệu", value: "cẩm thạch Makrana + sa thạch đỏ" },
    ],
    body: [
      "Nếu chia lịch sử Mô-gôn theo nhịp lớn, Shah Jahan là đỉnh đặc biệt về kiến trúc, nghệ thuật và văn hóa cung đình. Aurangzeb đưa đế quốc rộng nhất, nhưng những công trình ta nhớ đều mang dấu Shah Jahan.",
      "Ông chuyển kinh đô từ Agra sang Shahjahanabad (Delhi). Cùng một tay, ông dựng lăng, pháo đài, nhà thờ — một kinh đô mới bằng đá.",
    ],
    tags: ["Shah Jahan", "Makrana", "Shahjahanabad"],
  },
  {
    id: "mughal-lang",
    type: "cards",
    chapter: "mughal",
    image: IMG.pietra,
    kicker: "Từ điển hình khối",
    title: "Kiến trúc Mô-gôn nói bằng gì?",
    cards: [
      {
        title: "Đối xứng tuyệt đối",
        meta: "Trục · phản chiếu · bốn hướng",
        body: "Mọi mặt tiền gần như giống nhau. Hồ nước nhân đôi công trình. Cổng, lăng, nhà thờ xếp trên một trục duy nhất.",
      },
      {
        title: "Mái vòm & minaret",
        meta: "Vòm hành tỏi · tháp gọi lễ",
        body: "Vòm lớn trung tâm, vòm phụ, chhatri. Bốn minaret ở góc vừa là tháp, vừa là thước đo tỉ lệ.",
      },
      {
        title: "Charbagh",
        meta: "Bốn khu vườn",
        body: "Kênh chữ thập chia vườn thành bốn. Nước chảy, cây bách, hoa quả — hình ảnh thiên đàng trong Kinh Qur’an, đã Ấn Độ hóa.",
      },
      {
        title: "Pietra dura",
        meta: "Khảm đá quý",
        body: "Cắt lưu ly, ngọc bích, mã não, cẩm thạch màu cẩn vào cẩm thạch trắng thành hoa iris, cúc, tulip — lạnh và chính xác.",
      },
    ],
  },
  {
    id: "taj-hero",
    type: "hero",
    chapter: "mughal",
    image: IMG.taj,
    kicker: "Agra · UNESCO 1983",
    title: "Taj Mahal",
    subtitle: "Lăng cẩm thạch trắng cho Mumtaz Mahal — biểu tượng rực rỡ nhất thời Shah Jahan",
    year: "1632",
    location: "Bờ sông Yamuna, Agra",
  },
  {
    id: "taj-split",
    type: "split",
    chapter: "mughal",
    image: IMG.taj,
    kicker: "Tình yêu biến thành tỉ lệ",
    title: "Mộ của hoàng hậu, gương của một đế quốc",
    facts: [
      { label: "Khởi công", value: "1631/1632" },
      { label: "Công trình chính", value: "hoàn thành 1648" },
      { label: "Hạng mục phụ", value: "đến 1653" },
      { label: "Người cho xây", value: "Hoàng đế Shah Jahan" },
    ],
    body: [
      "Mumtaz Mahal mất khi sinh con. Shah Jahan dựng lăng trên 17 hecta: lăng trắng, nhà thờ và nhà khách đối xứng hai bên, cổng lớn phía nam, vườn charbagh, hồ phản chiếu.",
      "Vòm trung tâm cao khoảng 73 m tới đỉnh quả cầu. Bốn minaret hơi nghiêng ra ngoài — nếu đổ, đổ ra xa lăng. Cẩm thạch đổi màu theo giờ: hồng bình minh, bạc trưa, hổ phách chiều.",
    ],
    tags: ["Mumtaz Mahal", "Ustad Ahmad Lahori", "đối xứng"],
  },
  {
    id: "taj-pietra",
    type: "split",
    chapter: "mughal",
    image: IMG.pietra,
    kicker: "Pietra dura",
    title: "Hoa mọc từ đá",
    facts: [
      { label: "Kỹ thuật", value: "khảm đá cứng trên cẩm thạch" },
      { label: "Đá", value: "lưu ly, ngọc bích, mã não, san hô" },
      { label: "Hoa văn", value: "iris, cúc, tulip, lá uốn" },
      { label: "Chỗ thấy", value: "cửa lăng, cenotaph, tấm dado" },
    ],
    body: [
      "Pietra dura (tiếng Ý, ‘đá cứng’) đến Ấn Độ rồi biến thành ngôn ngữ riêng của Shah Jahan. Từng cánh hoa được cắt vừa khít, không keo lộ, bề mặt phẳng như sơn.",
      "Cùng với jali — tấm đá đục lỗ hình sao — kỹ thuật này biến tường thành ánh sáng. Taj Mahal nổi tiếng vì tỉ lệ, nhưng nó sống vì những centimet này.",
    ],
    tags: ["jali", "khảm", "Makrana"],
  },
  {
    id: "red-hero",
    type: "hero",
    chapter: "mughal",
    image: IMG.red,
    kicker: "Delhi · UNESCO 2007",
    title: "Pháo đài Đỏ",
    subtitle: "Kinh đô mới Shahjahanabad: quân sự bên ngoài, cung đình bên trong",
    year: "1638",
    location: "Bờ Yamuna, Delhi",
  },
  {
    id: "red-split",
    type: "split",
    chapter: "mughal",
    image: IMG.red,
    kicker: "Red Fort · Lal Qila",
    title: "Tường đỏ, cung điện trắng",
    facts: [
      { label: "Khởi công", value: "12 tháng 5 năm 1638" },
      { label: "Hoàn thành", value: "1648" },
      { label: "Người xây", value: "Shah Jahan" },
      { label: "Tường", value: "sa thạch đỏ, cao khoảng 23 m" },
    ],
    body: [
      "Khi dời đô từ Agra, Shah Jahan dựng pháo đài này làm trái tim Shahjahanabad. Bên trong: Diwan-i-Am, Diwan-i-Khas, cung điện, nhà thờ Moti Masjid, vườn hình học, kênh nước.",
      "Công trình vừa là thành, vừa là cung. Ngày độc lập Ấn Độ, Thủ tướng vẫn đọc thông điệp từ thành này — đá quân sự trở thành biểu tượng quốc gia.",
    ],
    tags: ["Shahjahanabad", "Diwan-i-Khas", "Lahori Gate"],
  },
  {
    id: "jama-hero",
    type: "hero",
    chapter: "mughal",
    image: IMG.jama,
    kicker: "Old Delhi",
    title: "Jama Masjid",
    subtitle: "Nhà thờ Hồi giáo lớn và nổi tiếng của Delhi — ba vòm, hai minaret",
    year: "1656",
    location: "Đối diện Pháo đài Đỏ",
  },
  {
    id: "jama-split",
    type: "split",
    chapter: "mughal",
    image: IMG.jama,
    kicker: "Nhà thờ thứ Sáu",
    title: "Sa thạch đỏ kết cẩm thạch trắng",
    facts: [
      { label: "Khởi công", value: "1644" },
      { label: "Hoàn thành", value: "khoảng 1656" },
      { label: "Người cho xây", value: "Shah Jahan" },
      { label: "Hình khối", value: "3 vòm lớn · 2 minaret cao" },
    ],
    body: [
      "Jama Masjid là nhà thờ cộng đồng: sân rộng chứa hàng nghìn người lễ ngày thứ Sáu. Ba vòm cẩm thạch trắng ngồi trên khối sa thạch đỏ — cùng bảng màu với Pháo đài Đỏ ngay bên cạnh.",
      "Cặp minaret vừa gọi lễ, vừa đóng khung bầu trời. Cùng với Red Fort, Jama Masjid hoàn tất bộ mặt tâm linh–quyền lực của kinh đô mới.",
    ],
    tags: ["masjid", "minaret", "sân trong"],
  },
  {
    id: "agra-hero",
    type: "hero",
    chapter: "mughal",
    image: IMG.agra,
    kicker: "Agra · UNESCO 1983",
    title: "Thành Agra",
    subtitle: "Từ thành đá đỏ của Akbar đến cung cẩm thạch của Shah Jahan",
    year: "1565",
    location: "Bờ Yamuna, Agra",
  },
  {
    id: "agra-split",
    type: "split",
    chapter: "mughal",
    image: IMG.agra,
    kicker: "Pháo đài, cung điện, trung tâm quyền lực",
    title: "Nơi đá đỏ học cách trở nên tinh tế",
    facts: [
      { label: "Nguồn gốc", value: "trước Shah Jahan, trên nền thành Lodi" },
      { label: "Akbar", value: "xây lại bằng sa thạch đỏ từ 1565" },
      { label: "Shah Jahan", value: "thêm cung cẩm thạch trắng" },
      { label: "Chu vi", value: "khoảng 2,5 km, tường cao ~22 m" },
    ],
    body: [
      "Jahangiri Mahal còn hơi thở Akbar: đồ sộ, đỏ, nặng. Khas Mahal và Musamman Burj là hơi thở Shah Jahan: trắng, mỏng, khảm. Từ tháp bát giác ấy, ông bị Aurangzeb giam những năm cuối, nhìn về Taj Mahal phía bên kia sông.",
      "Thành Agra cho thấy bước chuyển của cả một phong cách: quân sự → cung đình, đá đỏ → cẩm thạch.",
    ],
    tags: ["Akbar", "Musamman Burj", "Yamuna"],
  },
  {
    id: "sikri-hero",
    type: "hero",
    chapter: "mughal",
    image: IMG.red,
    kicker: "Uttar Pradesh · UNESCO 1986",
    title: "Fatehpur Sikri",
    subtitle: "Kinh đô đá đỏ của Akbar — rực rỡ rồi bị bỏ, như một thành phố trong phim",
    year: "TK XVI",
    location: "Gần Agra",
  },
  {
    id: "sikri-split",
    type: "split",
    chapter: "mughal",
    image: IMG.agra,
    kicker: "Kinh đô ngắn ngày",
    title: "Buland Darwaza, Panch Mahal, và giấc mơ dung hợp",
    facts: [
      { label: "Người xây", value: "Akbar, thế kỉ XVI" },
      { label: "Vai trò", value: "kinh đô trong một thời gian ngắn" },
      { label: "Cổng chiến thắng", value: "Buland Darwaza, cao ~54 m" },
      { label: "Công trình khác", value: "Jama Masjid · Panch Mahal" },
    ],
    body: [
      "Akbar dựng Sikri sau khi có người kế vị, rồi dời đi vì nước và chính trị. Thành còn lại như phim trường: cổng chiến thắng lớn nhất châu Á, cung năm tầng Panch Mahal, nhà thờ, lăng Salim Chishti bằng cẩm thạch trắng.",
      "Quan trọng hơn kích thước: đây là chỗ Hồi giáo, Ba Tư và kiến trúc bản địa Ấn Độ (Gujarati, Rajput) ngồi cùng một sân.",
    ],
    tags: ["Akbar", "Buland Darwaza", "Panch Mahal", "dung hợp"],
  },
  {
    id: "heritage",
    type: "split",
    chapter: "mughal",
    image: IMG.taj,
    kicker: "Giá trị di sản",
    title: "Không phải một tòa nhà — một phong cách",
    facts: [
      { label: "Công thức", value: "Ba Tư + Trung Á + Ấn Độ" },
      { label: "Hình khối", value: "đối xứng · vòm · minaret · charbagh" },
      { label: "Trang trí", value: "pietra dura · jali · hoa hình học" },
      { label: "Ảnh hưởng", value: "Ấn Độ · Pakistan · Bangladesh" },
    ],
    body: [
      "Di sản Mô-gôn không nằm ở từng công trình riêng lẻ. Nó nằm ở việc sinh ra một ngôn ngữ kiến trúc sống lâu hơn chính đế quốc. Khi Mô-gôn suy, phong cách ấy vẫn dạy Nam Á cách dựng vòm, kéo trục, khảm đá.",
      "Taj Mahal là biểu tượng sáng nhất của nhịp Shah Jahan — nhưng đứng sau nó là cả một hệ thống: thành, nhà thờ, vườn, kinh đô.",
    ],
    tags: ["di sản Nam Á", "giao thoa"],
  },
  {
    id: "compare",
    type: "compare",
    chapter: "compare",
    left: {
      image: IMG.sanchi,
      title: "Phật giáo",
      points: [
        "Thiêng nằm ở xá lợi, cây, hang, tháp",
        "Đi nhiễu quanh tâm (stupa) hoặc vào lòng núi",
        "Giai đoạn sớm: không tạc Phật người",
        "Vật liệu: gạch, đá sa thạch, basalt",
        "Thời: TK III TCN → TK VI",
        "A-dục là người gieo hạt lớn nhất",
      ],
    },
    right: {
      image: IMG.taj,
      title: "Hồi giáo Mô-gôn",
      points: [
        "Thiêng nằm ở hướng qibla, vòm, sân lễ",
        "Trục đối xứng, vườn thiên đàng, phản chiếu",
        "Cấm hình Đức Chúa — hoa, hình học, chữ",
        "Vật liệu: sa thạch đỏ, cẩm thạch trắng, đá quý",
        "Thời: TK XVI–XVII là đỉnh",
        "Shah Jahan là người kết tinh rực rỡ nhất",
      ],
    },
  },
  {
    id: "grand-time",
    type: "timeline",
    chapter: "compare",
    image: IMG.mahabodhi,
    kicker: "Một đường thời gian",
    title: "Hai nghìn năm, hai đức tin, một dải đất",
    events: [
      { year: "TK III TCN", title: "A-dục", body: "Sanchi lõi gạch · Mahabodhi khởi đầu · Phật giáo thành ngôn ngữ đế quốc." },
      { year: "TK II–I TCN", title: "Ajanta nhịp 1 · torana Sanchi", body: "Hang Theravada và cổng chạm truyện. Đức Phật vẫn là biểu tượng." },
      { year: "TK V–VI", title: "Ajanta nhịp 2 · Mahabodhi hiện nay", body: "Đại thừa, bích họa, tháp gạch Gupta. Phật hiện hình." },
      { year: "1526", title: "Babur", body: "Panipat. Mô-gôn đặt chân lên tiểu lục địa." },
      { year: "1556–1605", title: "Akbar", body: "Agra Fort đá đỏ, Fatehpur Sikri, dung hợp." },
      { year: "1628–1658", title: "Shah Jahan", body: "Taj Mahal, Red Fort, Jama Masjid — kiến trúc thành điện ảnh." },
      { year: "1857", title: "Kết thúc", body: "Bahadur Shah II. Đế quốc tắt, phong cách còn." },
    ],
  },
  {
    id: "quiz-open",
    type: "chapter",
    chapter: "quiz",
    image: IMG.pietra,
    roman: "Chương V",
    title: "Ôn tập",
    subtitle: "Điền từ · trắc nghiệm ABCD · nối cột — chơi cùng nhóm, không phải thi",
  },
  { id: "fill", type: "fill", chapter: "quiz", image: IMG.sanchi },
  { id: "mcq", type: "mcq", chapter: "quiz", image: IMG.taj },
  { id: "key", type: "key", chapter: "quiz", image: IMG.pietra },
  { id: "match", type: "match", chapter: "quiz", image: IMG.jama },
  {
    id: "credits",
    type: "credits",
    chapter: "end",
    image: IMG.taj,
  },
];

export const fillQuestions = [
  {
    prompt: "Hoàng đế ______ cho xây Đại tháp Sanchi vào thế kỉ III TCN.",
    answer: "A-dục",
    accept: ["a-dục", "aduc", "ashoka", "a duc", "a dục"],
    hint: "Còn gọi là Ashoka, triều Maurya.",
  },
  {
    prompt: "Chùa hang Ajanta được khoét vào vách đá basalt bên sông ______.",
    answer: "Waghora",
    accept: ["waghora", "waghorā", "waghor"],
    hint: "Con sông nhỏ dưới hẻm móng ngựa.",
  },
  {
    prompt: "Đại bảo tháp Mahabodhi nằm tại ______, nơi Đức Phật thành đạo.",
    answer: "Bodh Gaya",
    accept: ["bodh gaya", "bodhgaya", "bồ đề đạo tràng", "bo de dao trang"],
    hint: "Bihar, dưới cây Bồ-đề.",
  },
  {
    prompt: "Taj Mahal được Shah Jahan xây để tưởng niệm hoàng hậu ______.",
    answer: "Mumtaz Mahal",
    accept: ["mumtaz mahal", "mumtaz", "mum taj mahal"],
    hint: "Arjumand Banu Begum.",
  },
  {
    prompt: "Đế quốc Mô-gôn được Babur thành lập năm ______ sau trận Panipat lần thứ nhất.",
    answer: "1526",
    accept: ["1526"],
    hint: "Thế kỉ XVI, bốn chữ số.",
  },
  {
    prompt: "Fatehpur Sikri do hoàng đế ______ xây làm kinh đô trong một thời gian ngắn.",
    answer: "Akbar",
    accept: ["akbar", "akbar đại đế", "akbar dai de"],
    hint: "Cha của Jahangir, ông nội Shah Jahan.",
  },
  {
    prompt: "Nghệ thuật khảm đá quý trên cẩm thạch trắng gọi là ______.",
    answer: "pietra dura",
    accept: ["pietra dura", "pietra-dura"],
    hint: "Hai từ tiếng Ý, nghĩa ‘đá cứng’.",
  },
  {
    prompt: "Jama Masjid hoàn thành khoảng năm ______.",
    answer: "1656",
    accept: ["1656"],
    hint: "Sau Taj Mahal một nhịp, thời Shah Jahan.",
  },
  {
    prompt: "Khu vườn bốn phần đối xứng của kiến trúc Mô-gôn gọi là ______.",
    answer: "charbagh",
    accept: ["charbagh", "char bagh", "chahar bagh", "chaharbagh"],
    hint: "‘Bốn khu vườn’.",
  },
  {
    prompt: "Pháo đài Đỏ được xây khi Shah Jahan chuyển kinh đô tới ______.",
    answer: "Shahjahanabad",
    accept: ["shahjahanabad", "delhi", "old delhi", "đê-li", "de li"],
    hint: "Delhi ngày nay / thành phố mang tên ông.",
  },
];

export const mcqQuestions = [
  {
    q: "Ai cho xây Đại tháp Sanchi?",
    choices: ["Akbar", "A-dục (Ashoka)", "Shah Jahan", "Harishena"],
    correct: 1,
    explain: "A-dục khởi công lõi gạch thế kỉ III TCN; Shunga–Satavahana mới bọc đá và dựng torana.",
  },
  {
    q: "Đặc điểm nào đúng với các phù điêu torana sớm ở Sanchi?",
    choices: [
      "Phật được tạc như một vị vua",
      "Phật không hiện hình người, chỉ qua biểu tượng",
      "Toàn bộ chữ Phạn khắc dày đặc",
      "Không có voi hay hoa sen",
    ],
    correct: 1,
    explain: "Aniconic: sen, cây Bồ-đề, bánh xe, dấu chân, ngựa không người cưỡi.",
  },
  {
    q: "Ajanta được hình thành chủ yếu trong mấy giai đoạn lớn?",
    choices: ["Một nhịp liên tục", "Hai nhịp, cách nhau khoảng bốn thế kỉ", "Ba nhịp đều đặn", "Chỉ thời A-dục"],
    correct: 1,
    explain: "TK II–I TCN (Satavahana) rồi TK V–VI (Vakataka).",
  },
  {
    q: "Hang Ajanta thuộc loại nào?",
    choices: ["Chỉ stupa ngoài trời", "Chaitya và vihara khoét đá", "Chỉ nhà thờ Hồi giáo", "Chỉ cung điện cẩm thạch"],
    correct: 1,
    explain: "5 chaitya (hang 9, 10, 19, 26, 29) và các vihara còn lại.",
  },
  {
    q: "Ngôi đền Mahabodhi hiện nay chủ yếu thuộc niên đại nào?",
    choices: ["Thế kỉ III TCN nguyên vẹn", "Thế kỉ V–VI", "Năm 1632", "Năm 1857"],
    correct: 1,
    explain: "A-dục dựng công trình đầu; tháp gạch ta thấy chủ yếu thời Gupta, TK V–VI.",
  },
  {
    q: "Đế quốc Mô-gôn bắt đầu khi nào?",
    choices: ["1632", "1526", "1857", "Thế kỉ III TCN"],
    correct: 1,
    explain: "Babur thắng Ibrahim Lodi ở Panipat năm 1526.",
  },
  {
    q: "Thời kì nào được xem là đỉnh cao kiến trúc Mô-gôn?",
    choices: ["Babur", "Aurangzeb", "Shah Jahan (1628–1658)", "Bahadur Shah II"],
    correct: 2,
    explain: "Aurangzeb rộng đất nhất; Shah Jahan là đỉnh của đá, vòm và cẩm thạch.",
  },
  {
    q: "Taj Mahal chủ yếu được xây bằng gì?",
    choices: ["Basalt đen", "Gạch nung không ốp", "Cẩm thạch trắng Makrana", "Chỉ gỗ quý"],
    correct: 2,
    explain: "Cẩm thạch trắng, khảm pietra dura, bốn minaret, vườn charbagh.",
  },
  {
    q: "Pháo đài Đỏ khởi công ngày nào?",
    choices: ["12/5/1638", "1/1/1526", "Năm 1565", "Năm 1819"],
    correct: 0,
    explain: "12 tháng 5 năm 1638, hoàn thành 1648, khi dời đô sang Shahjahanabad.",
  },
  {
    q: "Công thức di sản Mô-gôn nào đúng?",
    choices: [
      "Chỉ sao chép đền Hindu",
      "Ba Tư + Trung Á + Ấn Độ → đối xứng, vòm, minaret, charbagh, khảm đá",
      "Chỉ hang động basalt",
      "Không dùng cẩm thạch",
    ],
    correct: 1,
    explain: "Giao thoa sinh ra phong cách sống lâu hơn chính đế quốc, lan ra Nam Á.",
  },
];

export const matchPairs = [
  { left: "Đại tháp Sanchi", right: "A-dục / Ashoka" },
  { left: "Ajanta — nhịp 2", right: "Vakataka / Harishena" },
  { left: "Mahabodhi", right: "Bodh Gaya" },
  { left: "Taj Mahal", right: "Mumtaz Mahal" },
  { left: "Pháo đài Đỏ", right: "Shah Jahan · Delhi" },
  { left: "Fatehpur Sikri", right: "Akbar" },
  { left: "Thành Agra", right: "Akbar rồi Shah Jahan" },
  { left: "Pietra dura", right: "Khảm đá quý" },
];

export const mapPins = [
  { id: "delhi", name: "Delhi", sub: "Red Fort · Jama Masjid", x: 42, y: 26, slide: "red-hero" },
  { id: "agra", name: "Agra", sub: "Taj Mahal · Thành Agra", x: 48, y: 34, slide: "taj-hero" },
  { id: "sikri", name: "Fatehpur Sikri", sub: "Kinh đô Akbar", x: 44, y: 38, slide: "sikri-hero" },
  { id: "sanchi", name: "Sanchi", sub: "Đại tháp", x: 50, y: 52, slide: "sanchi-hero" },
  { id: "ajanta", name: "Ajanta", sub: "Hang động", x: 38, y: 60, slide: "ajanta-hero" },
  { id: "gaya", name: "Bodh Gaya", sub: "Mahabodhi", x: 66, y: 46, slide: "maha-hero" },
];

export const chapters: { id: Chapter; label: string; slideId: string }[] = [
  { id: "open", label: "Mở", slideId: "title" },
  { id: "buddhist", label: "Phật giáo", slideId: "ch-bud" },
  { id: "mughal", label: "Mô-gôn", slideId: "ch-mughal" },
  { id: "compare", label: "Đối chiếu", slideId: "compare" },
  { id: "quiz", label: "Ôn tập", slideId: "quiz-open" },
];
