export type Chapter =
  | "open"
  | "origins"
  | "religion"
  | "golden"
  | "delhi"
  | "buddhist"
  | "mughal"
  | "compare"
  | "quiz"
  | "end";

export type Fact = { label: string; value: string };

export type Slide =
  | {
      id: string;
      type: "members";
      chapter: Chapter;
      image: string;
      members: { name: string; task: string }[];
    }
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
  phat: "/images/phatgiao.jpg",
  da: "/images/da.jpg",
  ando: "/images/ando.jpg",
  // Backgrounds bổ sung, đúng chủ đề của các slide tương ứng.
  harappa: "https://upload.wikimedia.org/wikipedia/commons/3/37/Archaeological_site_of_Harappa.jpg",
  ashokaPillar: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Asoka%27s_Pillar.png",
  sanchiWide: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stupa_of_Sanchi.jpg",
  ajantaPainting: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Inside_of_Ajanta_caves.jpg/1280px-Inside_of_Ajanta_caves.jpg",
  mahabodhiWide: "https://upload.wikimedia.org/wikipedia/commons/6/63/Mahabodhi_Temple%2C_Bodh_Gaya%2C_Bihar%2C_India.jpg",
  redFortWide: "https://upload.wikimedia.org/wikipedia/commons/8/37/Red_fort_delhi_india.jpg",
  aryabhata: "https://upload.wikimedia.org/wikipedia/commons/a/af/2064_aryabhata-crp.jpg",
  hinduTemple: "https://upload.wikimedia.org/wikipedia/commons/8/82/Temple_of_Trivikrama_at_Ter.jpg",
  india: "https://images.pexels.com/photos/36832404/pexels-photo-36832404.jpeg",
  ajanta1: "https://images.pexels.com/photos/32491309/pexels-photo-32491309.jpeg",
} as const;

export const slides: Slide[] = [
  {
    id: "members",
    type: "members",
    chapter: "open",
    image: IMG.da,
    members: [
      { name: "Bảo Châu", task: "Giới thiệu điều kiện tự nhiên lưu vực sông Ấn – sông Hằng và thành cổ Harappa." },
      { name: "Thảo Uyên", task: "Giới thiệu giai đoạn Vê-đê và sự hình thành xã hội phân hóa đẳng cấp." },
      { name: "Bích Hà", task: "Giới thiệu sự ra đời của Hindu giáo và Phật giáo ban đầu." },
      { name: "Tấn Phúc", task: "Giới thiệu thời kỳ hoàng kim, thịnh trị về toán học, thiên văn học, nghệ thuật." },
      { name: "Vĩnh An", task: "Giới thiệu bước chuyển khi vương triều Hồi giáo đặt nền móng tại Đê-li." },
      { name: "Minh Khôi", task: "Giới thiệu đế quốc Mô-gôn và thời kỳ đỉnh cao thứ hai với các di sản kiến trúc." },
      { name: "Mỹ Huỳnh", task: "Giới thiệu các công trình kiến trúc tiêu biểu gắn liền với Phật giáo và Hồi giáo." },
      { name: "Bảo Khang", task: "Giới thiệu hệ thống chữ Phạn (Sanskrit) và đóng góp về khoa học (chữ số 0)." },
      { name: "Gia Phát", task: "Xâu chuỗi lời thoại, kiểm tra bám sát nội dung SGK và khớp kịch bản với Slide." },
      { name: "Hoàng Phúc", task: "Thiết kế Presentation cùng với AI." },
    ],
  },
  {
    id: "title",
    type: "title",
    chapter: "open",
    image: IMG.phat,
    kicker: "Thuyết trình lịch sử nhóm 2 · 10A09",
    title: "Ấn Độ",
    subtitle: "Hành trình lịch sử Ấn Độ: từ sông Ấn – sông Hằng đến Phật giáo, Đê-li và di sản Mô-gôn,Hoàng kim",
  },
  {
    id: "quote",
    type: "quote",
    chapter: "open",
    image: IMG.da,
    quote:
      "Từ những thành phố bên sông đến những mái vòm cẩm thạch, lịch sử Ấn Độ được nối bằng đất, chữ viết, đức tin, khoa học và kiến trúc.",
    attribution: "Hành trình mở đầu",
  },
  {
    id: "toc",
    type: "toc",
    chapter: "open",
    image: IMG.india,
    items: [
      { n: "I", title: "Khởi nguồn", hint: "Sông Ấn – sông Hằng · Harappa · Vê-đê" },
      { n: "II", title: "Tôn giáo", hint: "Hindu giáo · Phật giáo ban đầu" },
      { n: "III", title: "Thời kỳ hoàng kim", hint: "Gupta · khoa học · nghệ thuật · Sanskrit" },
      { n: "IV", title: "Đê-li → Mô-gôn", hint: "Vương triều Hồi giáo · 1526–1857" },
      { n: "V", title: "Kiến trúc & di sản", hint: "Sanchi · Ajanta · Taj Mahal · Red Fort" },
      { n: "VI", title: "Ôn tập tương tác", hint: "Điền từ · trắc nghiệm · nối cột" },
    ],
  },
  { id: "map", type: "map", chapter: "open", image: IMG.harappa },
  {
    id: "ch-origins",
    type: "chapter",
    chapter: "origins",
    image: IMG.ando,
    roman: "Chương I",
    title: "Khởi nguồn văn minh Ấn Độ",
    subtitle: "Từ lưu vực sông Ấn – sông Hằng, Harappa đến thời kỳ Vê-đê và xã hội phân hóa đẳng cấp",
  },
  {
    id: "indus-ganges",
    type: "split",
    chapter: "origins",
    image: IMG.harappa,
    kicker: "Bảo Châu · nền tảng địa lý",
    title: "Sông Ấn – sông Hằng và thành cổ Harappa",
    facts: [
      { label: "Không gian", value: "Lưu vực sông Ấn và sông Hằng" },
      { label: "Harappa", value: "Một trung tâm lớn của văn minh sông Ấn" },
      { label: "Điều kiện", value: "Đồng bằng phù sa · nguồn nước · nông nghiệp" },
      { label: "Dấu ấn", value: "Đô thị, thủ công nghiệp và trao đổi" },
    ],
    body: [
      "Các đồng bằng sông tạo điều kiện cho cư dân định cư, trồng trọt và hình thành những cộng đồng đông đúc. Lưu vực sông Ấn gắn với nền văn minh đô thị cổ, trong đó Harappa là một địa điểm tiêu biểu.",
      "Về sau, cư dân mở rộng hoạt động về phía lưu vực sông Hằng. Không gian sông ngòi tiếp tục giữ vai trò quan trọng trong sự phát triển của xã hội và các nhà nước ở Ấn Độ cổ đại.",
    ],
    tags: ["sông Ấn", "sông Hằng", "Harappa", "đô thị cổ"],
  },
  {
    id: "vedic",
    type: "split",
    chapter: "origins",
    image: IMG.harappa,
    kicker: "Thảo Uyên · thời kỳ Vê-đê",
    title: "Từ Vê-đê đến xã hội phân hóa đẳng cấp",
    facts: [
      { label: "Thời kỳ", value: "Khoảng thiên niên kỉ II–I TCN" },
      { label: "Nguồn tư liệu", value: "Các kinh Vê-đê" },
      { label: "Xã hội", value: "Phân hóa thành các varna" },
      { label: "Đặc điểm", value: "Vai trò nổi bật của nghi lễ và tầng lớp tăng lữ" },
    ],
    body: [
      "Thời kỳ Vê-đê là giai đoạn quan trọng trong quá trình hình thành xã hội Ấn Độ cổ đại. Các bộ kinh Vê-đê vừa là tư liệu tôn giáo, vừa phản ánh đời sống và quan niệm xã hội của thời kỳ này.",
      "Xã hội dần phân hóa thành các varna, tạo nên hệ thống đẳng cấp có ảnh hưởng lâu dài trong lịch sử Ấn Độ. Sự phân hóa này gắn với nghề nghiệp, địa vị xã hội và các quy định tôn giáo.",
    ],
    tags: ["Vê-đê", "varna", "đẳng cấp", "xã hội cổ đại"],
  },
  {
    id: "ch-religion",
    type: "chapter",
    chapter: "religion",
    image: IMG.hinduTemple,
    roman: "Chương II",
    title: "Hindu giáo & Phật giáo",
    subtitle: "Những hệ tư tưởng và tôn giáo định hình đời sống tinh thần Ấn Độ",
  },
  {
    id: "religions",
    type: "split",
    chapter: "religion",
    image: IMG.hinduTemple,
    kicker: "Bích Hà · đời sống tinh thần",
    title: "Hindu giáo và Phật giáo ban đầu",
    facts: [
      { label: "Hindu giáo", value: "Phát triển từ truyền thống Vê-đê" },
      { label: "Phật giáo", value: "Ra đời khoảng thế kỉ VI–V TCN" },
      { label: "Người sáng lập", value: "Siddhartha Gautama (Đức Phật)" },
      { label: "Điểm nhấn", value: "Nghiệp, luân hồi, giải thoát và con đường tu tập" },
    ],
    body: [
      "Hindu giáo hình thành dần trên nền các truyền thống Vê-đê, phát triển nhiều quan niệm về thần linh, nghiệp, luân hồi và bổn phận của con người trong xã hội.",
      "Phật giáo xuất hiện như một con đường tu tập hướng tới chấm dứt khổ đau. Giáo lý ban đầu nhấn mạnh Tứ diệu đế, con đường tu tập và khả năng đạt giải thoát.",
    ],
    tags: ["Hindu giáo", "Phật giáo", "Vê-đê", "giải thoát"],
  },
  {
    id: "ch-golden",
    type: "chapter",
    chapter: "golden",
    image: IMG.aryabhata,
    roman: "Chương III",
    title: "Thời kỳ hoàng kim",
    subtitle: "Khoa học, toán học, thiên văn học, nghệ thuật và văn hóa Sanskrit",
  },
  {
    id: "golden-age",
    type: "split",
    chapter: "golden",
    image: IMG.aryabhata,
    kicker: "Tấn Phúc · thời Gupta",
    title: "Một thời kỳ rực rỡ của khoa học và nghệ thuật",
    facts: [
      { label: "Thời kỳ", value: "Đặc biệt nổi bật dưới vương triều Gupta" },
      { label: "Toán học", value: "Phát triển hệ số và phương pháp tính toán" },
      { label: "Thiên văn", value: "Aryabhata có những đóng góp quan trọng" },
      { label: "Nghệ thuật", value: "Điêu khắc, hội họa và văn học phát triển" },
    ],
    body: [
      "Thời Gupta thường được xem là một giai đoạn phát triển mạnh của văn hóa Ấn Độ cổ điển. Toán học, thiên văn học, văn học và nghệ thuật cùng đạt nhiều thành tựu đáng chú ý.",
      "Aryabhata nghiên cứu các vấn đề toán học và thiên văn; nghệ thuật thời kỳ này cũng để lại nhiều tượng, phù điêu và tác phẩm thể hiện phong cách Ấn Độ cổ điển.",
    ],
    tags: ["Gupta", "Aryabhata", "toán học", "thiên văn", "nghệ thuật"],
  },
  {
    id: "sanskrit-zero",
    type: "cards",
    chapter: "golden",
    image: IMG.aryabhata,
    kicker: "Bảo Khang · chữ viết & khoa học",
    title: "Sanskrit và những đóng góp khoa học",
    cards: [
      {
        title: "Chữ Phạn (Sanskrit)",
        meta: "Ngôn ngữ kinh điển",
        body: "Sanskrit giữ vai trò quan trọng trong kinh điển, văn học, triết học và các trước tác khoa học của Ấn Độ cổ đại.",
      },
      {
        title: "Chữ số 0",
        meta: "Một bước ngoặt của toán học",
        body: "Truyền thống toán học Ấn Độ góp phần hình thành cách sử dụng số 0 như một con số và trong hệ thống giá trị theo vị trí.",
      },
      {
        title: "Toán học",
        meta: "Tính toán · đại số",
        body: "Các học giả Ấn Độ phát triển nhiều phương pháp tính toán, góp phần truyền bá tri thức toán học sang các khu vực khác.",
      },
      {
        title: "Thiên văn học",
        meta: "Quan sát · tính toán",
        body: "Các học giả nghiên cứu chuyển động của thiên thể và xây dựng những phương pháp tính toán thiên văn đáng chú ý.",
      },
    ],
  },
  {
    id: "ch-delhi",
    type: "chapter",
    chapter: "delhi",
    image: IMG.red,
    roman: "Chương IV",
    title: "Bước chuyển tại Đê-li",
    subtitle: "Các vương triều Hồi giáo hình thành quyền lực ở Bắc Ấn trước khi Mô-gôn xuất hiện",
  },
  {
    id: "delhi-sultanate",
    type: "timeline",
    chapter: "delhi",
    image: IMG.red,
    kicker: "Vĩnh An · bước chuyển lịch sử",
    title: "Từ các vương triều Hồi giáo đến Đê-li",
    events: [
      { year: "1206", title: "Vương triều Đê-li", body: "Qutb al-Din Aibak mở đầu giai đoạn các vương triều Hồi giáo cai trị từ Đê-li." },
      { year: "TK XIII–XIV", title: "Mở rộng quyền lực", body: "Đê-li trở thành trung tâm chính trị lớn ở Bắc Ấn; các vương triều kế tiếp củng cố và mở rộng lãnh thổ." },
      { year: "TK XIV–XV", title: "Biến động", body: "Các vương triều thay đổi, quyền lực trung ương có lúc suy yếu và nhiều khu vực trở nên tự chủ hơn." },
      { year: "1526", title: "Panipat lần thứ nhất", body: "Babur đánh bại Ibrahim Lodi, mở đầu đế quốc Mô-gôn tại Ấn Độ." },
    ],
  },
  {
    id: "ch-bud",
    type: "chapter",
    chapter: "buddhist",
    image: IMG.ashokaPillar,
    roman: "Chương V",
    title: "Kiến trúc thiêng liêng",
    subtitle: "Từ Sanchi, Ajanta, Mahabodhi đến những di sản kiến trúc Hồi giáo và Mô-gôn",
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
    image: IMG.ajanta1,
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
    id: "sanchi-hero",
    type: "hero",
    chapter: "buddhist",
    image: IMG.sanchiWide,
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
    id: "maha-hero",
    type: "hero",
    chapter: "buddhist",
    image: IMG.mahabodhiWide,
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
    roman: "Chương VI",
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
      { year: "TK III–II TCN", title: "Ấn Độ cổ đại", body: "Các trung tâm đô thị và nông nghiệp phát triển; di sản Harappa nối với quá trình hình thành xã hội cổ đại." },
      { year: "TK II–I TCN", title: "Vê-đê & xã hội phân hóa", body: "Truyền thống Vê-đê phát triển; các varna trở thành một đặc điểm quan trọng của xã hội." },
      { year: "TK VI–V TCN", title: "Hindu giáo & Phật giáo", body: "Các truyền thống tôn giáo định hình đời sống tinh thần và tư tưởng Ấn Độ." },
      { year: "TK IV–VI", title: "Thời Gupta", body: "Toán học, thiên văn học, Sanskrit, văn học và nghệ thuật đạt nhiều thành tựu." },
      { year: "1206", title: "Vương triều Đê-li", body: "Các vương triều Hồi giáo đặt trung tâm quyền lực tại Đê-li." },
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
    title: "Ôn tập toàn bài",
    subtitle: "Từ Harappa đến Mô-gôn · điền từ · trắc nghiệm ABCD · nối cột",
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
    prompt: "Thành cổ ______ là một trung tâm tiêu biểu của văn minh sông Ấn.",
    answer: "Harappa",
    accept: ["harappa"],
    hint: "Tên bắt đầu bằng H, nằm ở lưu vực sông Ấn.",
  },
  {
    prompt: "Thời kỳ ______ gắn với các bộ kinh cùng tên và sự phân hóa xã hội thành các varna.",
    answer: "Vê-đê",
    accept: ["vê-đê", "ve-de", "vedic", "vê đê"],
    hint: "Tên của một giai đoạn quan trọng trong Ấn Độ cổ đại.",
  },
  {
    prompt: "Nhà thiên văn học và toán học nổi tiếng của Ấn Độ cổ đại là ______.",
    answer: "Aryabhata",
    accept: ["aryabhata", "arya bhata"],
    hint: "Tên bắt đầu bằng Arya.",
  },
  {
    prompt: "Các vương triều Hồi giáo cai trị từ ______ từ năm 1206 được gọi chung là Vương triều Đê-li.",
    answer: "Đê-li",
    accept: ["đê-li", "de-li", "delhi", "đê li"],
    hint: "Tên thủ đô nổi tiếng của Ấn Độ.",
  },
  {
    prompt: "Hệ thống chữ viết/ngôn ngữ kinh điển nổi bật của Ấn Độ cổ đại là ______.",
    answer: "Sanskrit",
    accept: ["sanskrit", "chữ phạn", "phan"],
    hint: "Còn gọi là chữ Phạn trong tiếng Việt.",
  },
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
    q: "Harappa gắn với nền văn minh nào?",
    choices: ["Văn minh sông Ấn", "Đế quốc Mô-gôn", "Vương triều Đê-li", "Thời Gupta"],
    correct: 0,
    explain: "Harappa là một trung tâm tiêu biểu của nền văn minh sông Ấn.",
  },
  {
    q: "Đặc điểm nào gắn với xã hội thời Vê-đê?",
    choices: ["Phân hóa thành các varna", "Chỉ có một tầng lớp", "Không có nghi lễ", "Chỉ sống ở vùng ven biển"],
    correct: 0,
    explain: "Xã hội dần phân hóa thành các varna, một đặc điểm quan trọng của xã hội Ấn Độ cổ đại.",
  },
  {
    q: "Thời kỳ nào nổi bật với sự phát triển của toán học, thiên văn học và nghệ thuật cổ điển?",
    choices: ["Thời Gupta", "Chỉ sau năm 1857", "Thời Harappa", "Chỉ thời Đê-li"],
    correct: 0,
    explain: "Thời Gupta thường được xem là giai đoạn phát triển mạnh của văn hóa Ấn Độ cổ điển.",
  },
  {
    q: "Vương triều Đê-li bắt đầu giai đoạn cai trị từ Đê-li vào năm nào?",
    choices: ["1206", "1526", "1632", "1857"],
    correct: 0,
    explain: "Năm 1206 thường được dùng làm mốc mở đầu Vương triều Đê-li.",
  },
  {
    q: "Đóng góp nào thường được nhắc đến khi học về toán học Ấn Độ?",
    choices: ["Số 0 và hệ giá trị theo vị trí", "Phát minh máy hơi nước", "La bàn từ tính", "Chữ tượng hình Ai Cập"],
    correct: 0,
    explain: "Truyền thống toán học Ấn Độ góp phần quan trọng vào sự phát triển của số 0 và hệ ghi số theo vị trí.",
  },
  {
    q: "Ai cho xây Đại tháp Sanchi?",
    choices: ["Phuc Magnus", "A-dục (Ashoka)", "Shah Jahan", "Harishena"],
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
    choices: ["Babur", "Aurangzeb", "Shah Jahan (1628–1658)", "PhucMagnus 2011"],
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
  { left: "Harappa", right: "Văn minh sông Ấn" },
  { left: "Vê-đê", right: "Kinh điển & xã hội varna" },
  { left: "Aryabhata", right: "Toán học · thiên văn học" },
  { left: "Vương triều Đê-li", right: "1206" },
  { left: "Sanskrit", right: "Chữ Phạn · văn học & tri thức" },
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
  { id: "origins", label: "Khởi nguồn", slideId: "ch-origins" },
  { id: "religion", label: "Tôn giáo", slideId: "ch-religion" },
  { id: "golden", label: "Hoàng kim", slideId: "ch-golden" },
  { id: "delhi", label: "Đê-li", slideId: "ch-delhi" },
  { id: "mughal", label: "Mô-gôn", slideId: "ch-mughal" },
  { id: "buddhist", label: "Kiến trúc", slideId: "ch-bud" },
  { id: "compare", label: "Đối chiếu", slideId: "compare" },
  { id: "quiz", label: "Ôn tập", slideId: "quiz-open" },
];
