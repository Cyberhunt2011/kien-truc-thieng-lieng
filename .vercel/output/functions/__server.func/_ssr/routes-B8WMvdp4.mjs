import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Maximize2, c as ChevronLeft, i as Minimize2, l as Check, n as Sparkles, o as Eye, r as RotateCcw, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8WMvdp4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var IMG = {
	taj: "/images/taj-dawn.jpg",
	sanchi: "/images/sanchi.jpg",
	torana: "/images/sanchi-torana.jpg",
	ajanta: "/images/ajanta-gorge.jpg",
	ajantaIn: "/images/ajanta-interior.jpg",
	mahabodhi: "/images/mahabodhi.jpg",
	pietra: "/images/pietra-dura.jpg",
	red: "/images/red-fort.jpg",
	jama: "/images/jama-masjid.jpg",
	agra: "/images/agra-fort.jpg"
};
var slides = [
	{
		id: "title",
		type: "title",
		chapter: "open",
		image: IMG.taj,
		kicker: "Một bộ phim lịch sử · Sử 10",
		title: "Kiến Trúc Thiêng",
		subtitle: "Những công trình Phật giáo và Hồi giáo tiêu biểu trên tiểu lục địa Ấn Độ"
	},
	{
		id: "quote",
		type: "quote",
		chapter: "open",
		image: IMG.sanchi,
		quote: "Đá không biết nói, nhưng nó nhớ. Từ tháp Sanchi đến Taj Mahal, mỗi viên gạch là một câu chuyện về đức tin, quyền lực và vẻ đẹp.",
		attribution: "Hành trình mở đầu"
	},
	{
		id: "toc",
		type: "toc",
		chapter: "open",
		image: IMG.ajanta,
		items: [
			{
				n: "I",
				title: "Phật giáo",
				hint: "Sanchi · Ajanta · Mahabodhi"
			},
			{
				n: "II",
				title: "Đế quốc Mô-gôn",
				hint: "1526–1857 · đỉnh cao Shah Jahan"
			},
			{
				n: "III",
				title: "Thánh đường Hồi giáo",
				hint: "Taj Mahal · Red Fort · Jama Masjid · Agra · Sikri"
			},
			{
				n: "IV",
				title: "Đối chiếu & giá trị",
				hint: "Giao thoa · di sản Nam Á"
			},
			{
				n: "V",
				title: "Ôn tập tương tác",
				hint: "Điền từ · trắc nghiệm · nối cột"
			}
		]
	},
	{
		id: "map",
		type: "map",
		chapter: "open",
		image: IMG.taj
	},
	{
		id: "ch-bud",
		type: "chapter",
		chapter: "buddhist",
		image: IMG.sanchi,
		roman: "Chương I",
		title: "Phật giáo",
		subtitle: "Từ gò đất chứa xá lợi đến những hang động được vẽ như một thế giới khác"
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
				body: "Gò bán cầu đặc, không có không gian bên trong. Tín đồ đi nhiễu (pradakshina) theo chiều kim đồng hồ. Bản thân công trình chính là nghi lễ."
			},
			{
				title: "Chaitya — điện thờ",
				meta: "Hang cầu nguyện",
				body: "Hành lang hình thuyền, trần vòm, cuối hậu cung đặt stupa. Mặt tiền có cửa sổ móng ngựa — chaitya window — để ánh sáng rơi đúng lên bảo tháp."
			},
			{
				title: "Vihara — tu viện",
				meta: "Nơi ở của tăng đoàn",
				body: "Sảnh trung tâm, xung quanh là các phòng nhỏ của tăng sĩ. Giai đoạn Đại thừa, vihara thêm điện thờ Phật ở tường sau."
			}
		]
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
		location: "Sanchi, gần Bhopal"
	},
	{
		id: "sanchi-split",
		type: "split",
		chapter: "buddhist",
		image: IMG.sanchi,
		kicker: "Hoàng đế A-dục · triều Maurya",
		title: "Một gò gạch được khoác áo đá",
		facts: [
			{
				label: "Khởi công",
				value: "khoảng thế kỉ III TCN"
			},
			{
				label: "Người cho xây",
				value: "Hoàng đế A-dục (Ashoka)"
			},
			{
				label: "Mở rộng",
				value: "Shunga & Satavahana, TK II–I TCN"
			},
			{
				label: "UNESCO",
				value: "1989 — Buddhist Monuments at Sanchi"
			}
		],
		body: ["A-dục xây lõi gạch nhỏ phủ xá lợi. Triều Shunga bọc đá, nhân đôi đường kính, thêm sân nhiễu và lan can vedika. Bốn cổng torana — kiệt tác điêu khắc — được dựng khoảng thế kỉ I TCN–I SCN.", "Đức Phật không bao giờ xuất hiện dưới dạng người trên các phù điêu sớm: hoa sen là đản sinh, cây Bồ-đề là giác ngộ, bánh xe là giáo pháp, dấu chân là sự hiện diện."],
		tags: [
			"anda",
			"harmika",
			"chhatra",
			"torana",
			"aniconic"
		]
	},
	{
		id: "sanchi-torana",
		type: "split",
		chapter: "buddhist",
		image: IMG.torana,
		kicker: "Bốn cửa phương vị",
		title: "Torana — thư viện bằng đá",
		facts: [
			{
				label: "Số cổng",
				value: "4, đúng bốn hướng"
			},
			{
				label: "Cấu tạo",
				value: "Hai trụ + ba xà cong"
			},
			{
				label: "Chiều cao",
				value: "khoảng 10 mét"
			},
			{
				label: "Đề tài",
				value: "Jataka & cuộc đời Phật"
			}
		],
		body: ["Mỗi mặt được chạm kín: voi, sư tử, dạ-xoa, hoa sen, và các tấm truyện kể. Thợ vốn làm ngà và gỗ — họ chuyển kỹ năng ấy sang đá, nên đường nét mỏng như chạm ngà.", "Cổng Nam, cổ nhất, có đôi sư tử lưng tựa nhau — hình ảnh sau này trở thành quốc huy Ấn Độ. Toàn bộ kể chuyện mà không cần chữ."],
		tags: [
			"Jataka",
			"voi",
			"sư tử",
			"hoa sen"
		]
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
		location: "Hẻm núi Ajanta"
	},
	{
		id: "ajanta-split",
		type: "split",
		chapter: "buddhist",
		image: IMG.ajanta,
		kicker: "Hai nhịp cách nhau bốn thế kỉ",
		title: "Không phải một triều, mà nhiều đời đục đá",
		facts: [
			{
				label: "Giai đoạn 1",
				value: "TK II–I TCN, Satavahana"
			},
			{
				label: "Giai đoạn 2",
				value: "TK V–VI, Vakataka (Harishena)"
			},
			{
				label: "Số hang",
				value: "30, gồm cả hang dở"
			},
			{
				label: "Phân loại",
				value: "5 chaitya · còn lại vihara"
			}
		],
		body: ["Nhịp sớm (hang 9, 10, 12, 13, 15A) theo Theravada: thờ Phật bằng biểu tượng, hang giản dị. Sau bốn trăm năm im lặng, triều Vakataka khoét đại đa số hang còn lại — lúc này Đức Phật đã hiện hình.", "Hang 1 gắn với vua Harishena; hang 16 do đại thần Varahadeva cúng. Hang 5, 24, 29 bỏ dở — ta nhìn thấy chính nhát đục."],
		tags: [
			"Satavahana",
			"Vakataka",
			"chaitya",
			"vihara"
		]
	},
	{
		id: "ajanta-art",
		type: "split",
		chapter: "buddhist",
		image: IMG.ajantaIn,
		kicker: "Bích họa còn sống",
		title: "Padmapani, sắc tố khoáng và ánh đèn dầu",
		facts: [
			{
				label: "Kỹ thuật",
				value: "Vẽ trên vữa vôi, không phải fresco ướt"
			},
			{
				label: "Sắc tố",
				value: "thổ hoàng, lưu ly, chu sa, đen đèn"
			},
			{
				label: "Hang nổi tiếng",
				value: "1 · 2 · 16 · 17 · 26"
			},
			{
				label: "Tái phát hiện",
				value: "1819"
			}
		],
		body: ["Hang 1 giữ Bồ-tát Padmapani cầm hoa sen xanh — một trong những khuôn mặt được yêu nhất của nghệ thuật Ấn Độ. Hang 17 còn chương trình tranh gần như nguyên vẹn: cung đình, voi, nhạc công.", "Hang 26 có tượng Phật nhập niết-bàn nằm dài, khối điêu khắc lớn nhất khu hang. Ajanta ghi lại bước ngoặt từ aniconic sang iconic — từ biểu tượng sang hình người."],
		tags: [
			"Padmapani",
			"Jataka",
			"Mahayana"
		]
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
		location: "Bodh Gaya"
	},
	{
		id: "maha-split",
		type: "split",
		chapter: "buddhist",
		image: IMG.mahabodhi,
		kicker: "Từ A-dục đến tháp Gupta",
		title: "Hai lần ra đời của một thánh địa",
		facts: [
			{
				label: "Công trình đầu",
				value: "A-dục, thế kỉ III TCN"
			},
			{
				label: "Ngôi đền hiện nay",
				value: "chủ yếu thế kỉ V–VI"
			},
			{
				label: "Dạng tháp",
				value: "Shikhara gạch cao, tháp con vây quanh"
			},
			{
				label: "Cây Bồ-đề",
				value: "dòng dõi cây gốc nơi Phật thành đạo"
			}
		],
		body: ["A-dục dựng kim cương tòa (vajrasana) và một bảo tháp sớm. Ngôi đền gạch vút cao ta thấy hôm nay mang dấu ấn thời Gupta: thân tháp nhiều tầng, mỗi mặt chạm nghìn Phật.", "Khác Sanchi (gò đặc) và Ajanta (khoét núi), Mahabodhi là tháp-đền đứng, có không gian bên trong — mô hình ảnh hưởng ra Myanmar, Thái Lan, Tây Tạng."],
		tags: [
			"Bodh Gaya",
			"shikhara",
			"vajrasana",
			"Gupta"
		]
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
				body: "Kiến trúc aniconic sớm nhất còn đủ bộ. Đi nhiễu quanh một khối đặc. Cổng kể chuyện thay cho tượng."
			},
			{
				title: "Ajanta",
				meta: "Hang động · hai nhịp",
				body: "Từ hang mộc mạc Theravada đến vihara Đại thừa đầy bích họa. Đá basalt biến thành cung điện dưới lòng núi."
			},
			{
				title: "Mahabodhi",
				meta: "Tháp-đền · thánh địa gốc",
				body: "Đánh dấu đúng chỗ thành đạo. Tháp gạch vút trời, cây Bồ-đề, hành hương xuyên châu Á."
			}
		]
	},
	{
		id: "ch-mughal",
		type: "chapter",
		chapter: "mughal",
		image: IMG.red,
		roman: "Chương II",
		title: "Đế quốc Mô-gôn",
		subtitle: "1526–1857 · từ chiến trường Panipat đến những mái vòm cẩm thạch"
	},
	{
		id: "empire",
		type: "split",
		chapter: "mughal",
		image: IMG.red,
		kicker: "Mughal Empire",
		title: "Một đế quốc Hồi giáo trên đất Ấn",
		facts: [
			{
				label: "Thành lập",
				value: "1526, trận Panipat lần thứ nhất"
			},
			{
				label: "Người lập",
				value: "Babur, hậu duệ Timur"
			},
			{
				label: "Hoàng đế cuối",
				value: "Bahadur Shah II, 1857"
			},
			{
				label: "Phạm vi",
				value: "phần lớn tiểu lục địa Ấn Độ"
			}
		],
		body: ["Babur, dòng dõi Timur và có quan hệ với Thành Cát Tư Hãn, đánh bại Ibrahim Lodi năm 1526. Hơn ba thế kỉ sau, Mô-gôn để lại dấu ấn chính trị, văn hóa, nghệ thuật, tôn giáo và — rõ nhất — kiến trúc.", "Đây không phải bản sao Ba Tư đem sang. Đó là giao thoa: Hồi giáo Ba Tư + Trung Á + truyền thống Ấn Độ bản địa."],
		tags: [
			"Babur",
			"Panipat",
			"Timur",
			"1857"
		]
	},
	{
		id: "emperors",
		type: "timeline",
		chapter: "mughal",
		image: IMG.agra,
		kicker: "Sáu nhịp lớn",
		title: "Những hoàng đế định hình đế quốc",
		events: [
			{
				year: "1526",
				title: "Babur",
				body: "Thắng Panipat, mở triều Mô-gôn tại Ấn Độ."
			},
			{
				year: "1530",
				title: "Humayun",
				body: "Mất rồi lấy lại ngai vàng. Lăng ông ở Delhi là bản lề kiến trúc."
			},
			{
				year: "1556–1605",
				title: "Akbar Đại đế",
				body: "Mở rộng lãnh thổ, hành chính tập trung, dung hợp Hồi giáo–Ấn Độ. Xây Fatehpur Sikri và Thành Agra bằng đá đỏ."
			},
			{
				year: "1605–1627",
				title: "Jahangir",
				body: "Cung đình hội họa nở rộ, nghệ thuật tinh xảo."
			},
			{
				year: "1628–1658",
				title: "Shah Jahan",
				body: "Đỉnh cao kiến trúc: Taj Mahal, Red Fort, Jama Masjid, cung điện cẩm thạch."
			},
			{
				year: "1658–1707",
				title: "Aurangzeb",
				body: "Lãnh thổ lớn nhất, rồi suy vì chiến tranh và tài chính. 1857 khép lại."
			}
		]
	},
	{
		id: "peak",
		type: "split",
		chapter: "mughal",
		image: IMG.taj,
		kicker: "Đỉnh cao thứ hai",
		title: "Thời Shah Jahan: kiến trúc đạt tới cực điểm",
		facts: [
			{
				label: "Tại vị",
				value: "1628–1658"
			},
			{
				label: "Đỉnh lãnh thổ",
				value: "thường gắn với Aurangzeb"
			},
			{
				label: "Đỉnh kiến trúc",
				value: "gắn với Shah Jahan"
			},
			{
				label: "Chất liệu",
				value: "cẩm thạch Makrana + sa thạch đỏ"
			}
		],
		body: ["Nếu chia lịch sử Mô-gôn theo nhịp lớn, Shah Jahan là đỉnh đặc biệt về kiến trúc, nghệ thuật và văn hóa cung đình. Aurangzeb đưa đế quốc rộng nhất, nhưng những công trình ta nhớ đều mang dấu Shah Jahan.", "Ông chuyển kinh đô từ Agra sang Shahjahanabad (Delhi). Cùng một tay, ông dựng lăng, pháo đài, nhà thờ — một kinh đô mới bằng đá."],
		tags: [
			"Shah Jahan",
			"Makrana",
			"Shahjahanabad"
		]
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
				body: "Mọi mặt tiền gần như giống nhau. Hồ nước nhân đôi công trình. Cổng, lăng, nhà thờ xếp trên một trục duy nhất."
			},
			{
				title: "Mái vòm & minaret",
				meta: "Vòm hành tỏi · tháp gọi lễ",
				body: "Vòm lớn trung tâm, vòm phụ, chhatri. Bốn minaret ở góc vừa là tháp, vừa là thước đo tỉ lệ."
			},
			{
				title: "Charbagh",
				meta: "Bốn khu vườn",
				body: "Kênh chữ thập chia vườn thành bốn. Nước chảy, cây bách, hoa quả — hình ảnh thiên đàng trong Kinh Qur’an, đã Ấn Độ hóa."
			},
			{
				title: "Pietra dura",
				meta: "Khảm đá quý",
				body: "Cắt lưu ly, ngọc bích, mã não, cẩm thạch màu cẩn vào cẩm thạch trắng thành hoa iris, cúc, tulip — lạnh và chính xác."
			}
		]
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
		location: "Bờ sông Yamuna, Agra"
	},
	{
		id: "taj-split",
		type: "split",
		chapter: "mughal",
		image: IMG.taj,
		kicker: "Tình yêu biến thành tỉ lệ",
		title: "Mộ của hoàng hậu, gương của một đế quốc",
		facts: [
			{
				label: "Khởi công",
				value: "1631/1632"
			},
			{
				label: "Công trình chính",
				value: "hoàn thành 1648"
			},
			{
				label: "Hạng mục phụ",
				value: "đến 1653"
			},
			{
				label: "Người cho xây",
				value: "Hoàng đế Shah Jahan"
			}
		],
		body: ["Mumtaz Mahal mất khi sinh con. Shah Jahan dựng lăng trên 17 hecta: lăng trắng, nhà thờ và nhà khách đối xứng hai bên, cổng lớn phía nam, vườn charbagh, hồ phản chiếu.", "Vòm trung tâm cao khoảng 73 m tới đỉnh quả cầu. Bốn minaret hơi nghiêng ra ngoài — nếu đổ, đổ ra xa lăng. Cẩm thạch đổi màu theo giờ: hồng bình minh, bạc trưa, hổ phách chiều."],
		tags: [
			"Mumtaz Mahal",
			"Ustad Ahmad Lahori",
			"đối xứng"
		]
	},
	{
		id: "taj-pietra",
		type: "split",
		chapter: "mughal",
		image: IMG.pietra,
		kicker: "Pietra dura",
		title: "Hoa mọc từ đá",
		facts: [
			{
				label: "Kỹ thuật",
				value: "khảm đá cứng trên cẩm thạch"
			},
			{
				label: "Đá",
				value: "lưu ly, ngọc bích, mã não, san hô"
			},
			{
				label: "Hoa văn",
				value: "iris, cúc, tulip, lá uốn"
			},
			{
				label: "Chỗ thấy",
				value: "cửa lăng, cenotaph, tấm dado"
			}
		],
		body: ["Pietra dura (tiếng Ý, ‘đá cứng’) đến Ấn Độ rồi biến thành ngôn ngữ riêng của Shah Jahan. Từng cánh hoa được cắt vừa khít, không keo lộ, bề mặt phẳng như sơn.", "Cùng với jali — tấm đá đục lỗ hình sao — kỹ thuật này biến tường thành ánh sáng. Taj Mahal nổi tiếng vì tỉ lệ, nhưng nó sống vì những centimet này."],
		tags: [
			"jali",
			"khảm",
			"Makrana"
		]
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
		location: "Bờ Yamuna, Delhi"
	},
	{
		id: "red-split",
		type: "split",
		chapter: "mughal",
		image: IMG.red,
		kicker: "Red Fort · Lal Qila",
		title: "Tường đỏ, cung điện trắng",
		facts: [
			{
				label: "Khởi công",
				value: "12 tháng 5 năm 1638"
			},
			{
				label: "Hoàn thành",
				value: "1648"
			},
			{
				label: "Người xây",
				value: "Shah Jahan"
			},
			{
				label: "Tường",
				value: "sa thạch đỏ, cao khoảng 23 m"
			}
		],
		body: ["Khi dời đô từ Agra, Shah Jahan dựng pháo đài này làm trái tim Shahjahanabad. Bên trong: Diwan-i-Am, Diwan-i-Khas, cung điện, nhà thờ Moti Masjid, vườn hình học, kênh nước.", "Công trình vừa là thành, vừa là cung. Ngày độc lập Ấn Độ, Thủ tướng vẫn đọc thông điệp từ thành này — đá quân sự trở thành biểu tượng quốc gia."],
		tags: [
			"Shahjahanabad",
			"Diwan-i-Khas",
			"Lahori Gate"
		]
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
		location: "Đối diện Pháo đài Đỏ"
	},
	{
		id: "jama-split",
		type: "split",
		chapter: "mughal",
		image: IMG.jama,
		kicker: "Nhà thờ thứ Sáu",
		title: "Sa thạch đỏ kết cẩm thạch trắng",
		facts: [
			{
				label: "Khởi công",
				value: "1644"
			},
			{
				label: "Hoàn thành",
				value: "khoảng 1656"
			},
			{
				label: "Người cho xây",
				value: "Shah Jahan"
			},
			{
				label: "Hình khối",
				value: "3 vòm lớn · 2 minaret cao"
			}
		],
		body: ["Jama Masjid là nhà thờ cộng đồng: sân rộng chứa hàng nghìn người lễ ngày thứ Sáu. Ba vòm cẩm thạch trắng ngồi trên khối sa thạch đỏ — cùng bảng màu với Pháo đài Đỏ ngay bên cạnh.", "Cặp minaret vừa gọi lễ, vừa đóng khung bầu trời. Cùng với Red Fort, Jama Masjid hoàn tất bộ mặt tâm linh–quyền lực của kinh đô mới."],
		tags: [
			"masjid",
			"minaret",
			"sân trong"
		]
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
		location: "Bờ Yamuna, Agra"
	},
	{
		id: "agra-split",
		type: "split",
		chapter: "mughal",
		image: IMG.agra,
		kicker: "Pháo đài, cung điện, trung tâm quyền lực",
		title: "Nơi đá đỏ học cách trở nên tinh tế",
		facts: [
			{
				label: "Nguồn gốc",
				value: "trước Shah Jahan, trên nền thành Lodi"
			},
			{
				label: "Akbar",
				value: "xây lại bằng sa thạch đỏ từ 1565"
			},
			{
				label: "Shah Jahan",
				value: "thêm cung cẩm thạch trắng"
			},
			{
				label: "Chu vi",
				value: "khoảng 2,5 km, tường cao ~22 m"
			}
		],
		body: ["Jahangiri Mahal còn hơi thở Akbar: đồ sộ, đỏ, nặng. Khas Mahal và Musamman Burj là hơi thở Shah Jahan: trắng, mỏng, khảm. Từ tháp bát giác ấy, ông bị Aurangzeb giam những năm cuối, nhìn về Taj Mahal phía bên kia sông.", "Thành Agra cho thấy bước chuyển của cả một phong cách: quân sự → cung đình, đá đỏ → cẩm thạch."],
		tags: [
			"Akbar",
			"Musamman Burj",
			"Yamuna"
		]
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
		location: "Gần Agra"
	},
	{
		id: "sikri-split",
		type: "split",
		chapter: "mughal",
		image: IMG.agra,
		kicker: "Kinh đô ngắn ngày",
		title: "Buland Darwaza, Panch Mahal, và giấc mơ dung hợp",
		facts: [
			{
				label: "Người xây",
				value: "Akbar, thế kỉ XVI"
			},
			{
				label: "Vai trò",
				value: "kinh đô trong một thời gian ngắn"
			},
			{
				label: "Cổng chiến thắng",
				value: "Buland Darwaza, cao ~54 m"
			},
			{
				label: "Công trình khác",
				value: "Jama Masjid · Panch Mahal"
			}
		],
		body: ["Akbar dựng Sikri sau khi có người kế vị, rồi dời đi vì nước và chính trị. Thành còn lại như phim trường: cổng chiến thắng lớn nhất châu Á, cung năm tầng Panch Mahal, nhà thờ, lăng Salim Chishti bằng cẩm thạch trắng.", "Quan trọng hơn kích thước: đây là chỗ Hồi giáo, Ba Tư và kiến trúc bản địa Ấn Độ (Gujarati, Rajput) ngồi cùng một sân."],
		tags: [
			"Akbar",
			"Buland Darwaza",
			"Panch Mahal",
			"dung hợp"
		]
	},
	{
		id: "heritage",
		type: "split",
		chapter: "mughal",
		image: IMG.taj,
		kicker: "Giá trị di sản",
		title: "Không phải một tòa nhà — một phong cách",
		facts: [
			{
				label: "Công thức",
				value: "Ba Tư + Trung Á + Ấn Độ"
			},
			{
				label: "Hình khối",
				value: "đối xứng · vòm · minaret · charbagh"
			},
			{
				label: "Trang trí",
				value: "pietra dura · jali · hoa hình học"
			},
			{
				label: "Ảnh hưởng",
				value: "Ấn Độ · Pakistan · Bangladesh"
			}
		],
		body: ["Di sản Mô-gôn không nằm ở từng công trình riêng lẻ. Nó nằm ở việc sinh ra một ngôn ngữ kiến trúc sống lâu hơn chính đế quốc. Khi Mô-gôn suy, phong cách ấy vẫn dạy Nam Á cách dựng vòm, kéo trục, khảm đá.", "Taj Mahal là biểu tượng sáng nhất của nhịp Shah Jahan — nhưng đứng sau nó là cả một hệ thống: thành, nhà thờ, vườn, kinh đô."],
		tags: ["di sản Nam Á", "giao thoa"]
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
				"A-dục là người gieo hạt lớn nhất"
			]
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
				"Shah Jahan là người kết tinh rực rỡ nhất"
			]
		}
	},
	{
		id: "grand-time",
		type: "timeline",
		chapter: "compare",
		image: IMG.mahabodhi,
		kicker: "Một đường thời gian",
		title: "Hai nghìn năm, hai đức tin, một dải đất",
		events: [
			{
				year: "TK III TCN",
				title: "A-dục",
				body: "Sanchi lõi gạch · Mahabodhi khởi đầu · Phật giáo thành ngôn ngữ đế quốc."
			},
			{
				year: "TK II–I TCN",
				title: "Ajanta nhịp 1 · torana Sanchi",
				body: "Hang Theravada và cổng chạm truyện. Đức Phật vẫn là biểu tượng."
			},
			{
				year: "TK V–VI",
				title: "Ajanta nhịp 2 · Mahabodhi hiện nay",
				body: "Đại thừa, bích họa, tháp gạch Gupta. Phật hiện hình."
			},
			{
				year: "1526",
				title: "Babur",
				body: "Panipat. Mô-gôn đặt chân lên tiểu lục địa."
			},
			{
				year: "1556–1605",
				title: "Akbar",
				body: "Agra Fort đá đỏ, Fatehpur Sikri, dung hợp."
			},
			{
				year: "1628–1658",
				title: "Shah Jahan",
				body: "Taj Mahal, Red Fort, Jama Masjid — kiến trúc thành điện ảnh."
			},
			{
				year: "1857",
				title: "Kết thúc",
				body: "Bahadur Shah II. Đế quốc tắt, phong cách còn."
			}
		]
	},
	{
		id: "quiz-open",
		type: "chapter",
		chapter: "quiz",
		image: IMG.pietra,
		roman: "Chương V",
		title: "Ôn tập",
		subtitle: "Điền từ · trắc nghiệm ABCD · nối cột — chơi cùng nhóm, không phải thi"
	},
	{
		id: "fill",
		type: "fill",
		chapter: "quiz",
		image: IMG.sanchi
	},
	{
		id: "mcq",
		type: "mcq",
		chapter: "quiz",
		image: IMG.taj
	},
	{
		id: "key",
		type: "key",
		chapter: "quiz",
		image: IMG.pietra
	},
	{
		id: "match",
		type: "match",
		chapter: "quiz",
		image: IMG.jama
	},
	{
		id: "credits",
		type: "credits",
		chapter: "end",
		image: IMG.taj
	}
];
var fillQuestions = [
	{
		prompt: "Hoàng đế ______ cho xây Đại tháp Sanchi vào thế kỉ III TCN.",
		answer: "A-dục",
		accept: [
			"a-dục",
			"aduc",
			"ashoka",
			"a duc",
			"a dục"
		],
		hint: "Còn gọi là Ashoka, triều Maurya."
	},
	{
		prompt: "Chùa hang Ajanta được khoét vào vách đá basalt bên sông ______.",
		answer: "Waghora",
		accept: [
			"waghora",
			"waghorā",
			"waghor"
		],
		hint: "Con sông nhỏ dưới hẻm móng ngựa."
	},
	{
		prompt: "Đại bảo tháp Mahabodhi nằm tại ______, nơi Đức Phật thành đạo.",
		answer: "Bodh Gaya",
		accept: [
			"bodh gaya",
			"bodhgaya",
			"bồ đề đạo tràng",
			"bo de dao trang"
		],
		hint: "Bihar, dưới cây Bồ-đề."
	},
	{
		prompt: "Taj Mahal được Shah Jahan xây để tưởng niệm hoàng hậu ______.",
		answer: "Mumtaz Mahal",
		accept: [
			"mumtaz mahal",
			"mumtaz",
			"mum taj mahal"
		],
		hint: "Arjumand Banu Begum."
	},
	{
		prompt: "Đế quốc Mô-gôn được Babur thành lập năm ______ sau trận Panipat lần thứ nhất.",
		answer: "1526",
		accept: ["1526"],
		hint: "Thế kỉ XVI, bốn chữ số."
	},
	{
		prompt: "Fatehpur Sikri do hoàng đế ______ xây làm kinh đô trong một thời gian ngắn.",
		answer: "Akbar",
		accept: [
			"akbar",
			"akbar đại đế",
			"akbar dai de"
		],
		hint: "Cha của Jahangir, ông nội Shah Jahan."
	},
	{
		prompt: "Nghệ thuật khảm đá quý trên cẩm thạch trắng gọi là ______.",
		answer: "pietra dura",
		accept: ["pietra dura", "pietra-dura"],
		hint: "Hai từ tiếng Ý, nghĩa ‘đá cứng’."
	},
	{
		prompt: "Jama Masjid hoàn thành khoảng năm ______.",
		answer: "1656",
		accept: ["1656"],
		hint: "Sau Taj Mahal một nhịp, thời Shah Jahan."
	},
	{
		prompt: "Khu vườn bốn phần đối xứng của kiến trúc Mô-gôn gọi là ______.",
		answer: "charbagh",
		accept: [
			"charbagh",
			"char bagh",
			"chahar bagh",
			"chaharbagh"
		],
		hint: "‘Bốn khu vườn’."
	},
	{
		prompt: "Pháo đài Đỏ được xây khi Shah Jahan chuyển kinh đô tới ______.",
		answer: "Shahjahanabad",
		accept: [
			"shahjahanabad",
			"delhi",
			"old delhi",
			"đê-li",
			"de li"
		],
		hint: "Delhi ngày nay / thành phố mang tên ông."
	}
];
var mcqQuestions = [
	{
		q: "Ai cho xây Đại tháp Sanchi?",
		choices: [
			"Akbar",
			"A-dục (Ashoka)",
			"Shah Jahan",
			"Harishena"
		],
		correct: 1,
		explain: "A-dục khởi công lõi gạch thế kỉ III TCN; Shunga–Satavahana mới bọc đá và dựng torana."
	},
	{
		q: "Đặc điểm nào đúng với các phù điêu torana sớm ở Sanchi?",
		choices: [
			"Phật được tạc như một vị vua",
			"Phật không hiện hình người, chỉ qua biểu tượng",
			"Toàn bộ chữ Phạn khắc dày đặc",
			"Không có voi hay hoa sen"
		],
		correct: 1,
		explain: "Aniconic: sen, cây Bồ-đề, bánh xe, dấu chân, ngựa không người cưỡi."
	},
	{
		q: "Ajanta được hình thành chủ yếu trong mấy giai đoạn lớn?",
		choices: [
			"Một nhịp liên tục",
			"Hai nhịp, cách nhau khoảng bốn thế kỉ",
			"Ba nhịp đều đặn",
			"Chỉ thời A-dục"
		],
		correct: 1,
		explain: "TK II–I TCN (Satavahana) rồi TK V–VI (Vakataka)."
	},
	{
		q: "Hang Ajanta thuộc loại nào?",
		choices: [
			"Chỉ stupa ngoài trời",
			"Chaitya và vihara khoét đá",
			"Chỉ nhà thờ Hồi giáo",
			"Chỉ cung điện cẩm thạch"
		],
		correct: 1,
		explain: "5 chaitya (hang 9, 10, 19, 26, 29) và các vihara còn lại."
	},
	{
		q: "Ngôi đền Mahabodhi hiện nay chủ yếu thuộc niên đại nào?",
		choices: [
			"Thế kỉ III TCN nguyên vẹn",
			"Thế kỉ V–VI",
			"Năm 1632",
			"Năm 1857"
		],
		correct: 1,
		explain: "A-dục dựng công trình đầu; tháp gạch ta thấy chủ yếu thời Gupta, TK V–VI."
	},
	{
		q: "Đế quốc Mô-gôn bắt đầu khi nào?",
		choices: [
			"1632",
			"1526",
			"1857",
			"Thế kỉ III TCN"
		],
		correct: 1,
		explain: "Babur thắng Ibrahim Lodi ở Panipat năm 1526."
	},
	{
		q: "Thời kì nào được xem là đỉnh cao kiến trúc Mô-gôn?",
		choices: [
			"Babur",
			"Aurangzeb",
			"Shah Jahan (1628–1658)",
			"Bahadur Shah II"
		],
		correct: 2,
		explain: "Aurangzeb rộng đất nhất; Shah Jahan là đỉnh của đá, vòm và cẩm thạch."
	},
	{
		q: "Taj Mahal chủ yếu được xây bằng gì?",
		choices: [
			"Basalt đen",
			"Gạch nung không ốp",
			"Cẩm thạch trắng Makrana",
			"Chỉ gỗ quý"
		],
		correct: 2,
		explain: "Cẩm thạch trắng, khảm pietra dura, bốn minaret, vườn charbagh."
	},
	{
		q: "Pháo đài Đỏ khởi công ngày nào?",
		choices: [
			"12/5/1638",
			"1/1/1526",
			"Năm 1565",
			"Năm 1819"
		],
		correct: 0,
		explain: "12 tháng 5 năm 1638, hoàn thành 1648, khi dời đô sang Shahjahanabad."
	},
	{
		q: "Công thức di sản Mô-gôn nào đúng?",
		choices: [
			"Chỉ sao chép đền Hindu",
			"Ba Tư + Trung Á + Ấn Độ → đối xứng, vòm, minaret, charbagh, khảm đá",
			"Chỉ hang động basalt",
			"Không dùng cẩm thạch"
		],
		correct: 1,
		explain: "Giao thoa sinh ra phong cách sống lâu hơn chính đế quốc, lan ra Nam Á."
	}
];
var matchPairs = [
	{
		left: "Đại tháp Sanchi",
		right: "A-dục / Ashoka"
	},
	{
		left: "Ajanta — nhịp 2",
		right: "Vakataka / Harishena"
	},
	{
		left: "Mahabodhi",
		right: "Bodh Gaya"
	},
	{
		left: "Taj Mahal",
		right: "Mumtaz Mahal"
	},
	{
		left: "Pháo đài Đỏ",
		right: "Shah Jahan · Delhi"
	},
	{
		left: "Fatehpur Sikri",
		right: "Akbar"
	},
	{
		left: "Thành Agra",
		right: "Akbar rồi Shah Jahan"
	},
	{
		left: "Pietra dura",
		right: "Khảm đá quý"
	}
];
var mapPins = [
	{
		id: "delhi",
		name: "Delhi",
		sub: "Red Fort · Jama Masjid",
		x: 42,
		y: 26,
		slide: "red-hero"
	},
	{
		id: "agra",
		name: "Agra",
		sub: "Taj Mahal · Thành Agra",
		x: 48,
		y: 34,
		slide: "taj-hero"
	},
	{
		id: "sikri",
		name: "Fatehpur Sikri",
		sub: "Kinh đô Akbar",
		x: 44,
		y: 38,
		slide: "sikri-hero"
	},
	{
		id: "sanchi",
		name: "Sanchi",
		sub: "Đại tháp",
		x: 50,
		y: 52,
		slide: "sanchi-hero"
	},
	{
		id: "ajanta",
		name: "Ajanta",
		sub: "Hang động",
		x: 38,
		y: 60,
		slide: "ajanta-hero"
	},
	{
		id: "gaya",
		name: "Bodh Gaya",
		sub: "Mahabodhi",
		x: 66,
		y: 46,
		slide: "maha-hero"
	}
];
var chapters = [
	{
		id: "open",
		label: "Mở",
		slideId: "title"
	},
	{
		id: "buddhist",
		label: "Phật giáo",
		slideId: "ch-bud"
	},
	{
		id: "mughal",
		label: "Mô-gôn",
		slideId: "ch-mughal"
	},
	{
		id: "compare",
		label: "Đối chiếu",
		slideId: "compare"
	},
	{
		id: "quiz",
		label: "Ôn tập",
		slideId: "quiz-open"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Atmosphere() {
	const petals = Array.from({ length: 7 }, (_, i) => i);
	const motes = Array.from({ length: 18 }, (_, i) => i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [motes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "pointer-events-none absolute z-[6] size-1 rounded-full bg-gold-soft opacity-30",
		style: {
			left: `${i * 17 % 100}%`,
			bottom: `${i * 9 % 40}%`,
			animation: `petal-fall ${18 + i % 5 * 3}s ${i * .7}s linear infinite`
		}
	}, `m${i}`)), petals.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "petal",
		style: {
			left: `${8 + i * 13}%`,
			animationDuration: `${14 + i * 2.2}s`,
			animationDelay: `${i * 1.4}s`,
			opacity: .22 + i % 3 * .05
		}
	}, i))] });
}
function IndiaMap({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto h-full w-full max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 120",
			className: "h-full w-full drop-shadow-2xl",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "land",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#3a2418"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#1a120e"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 6 L55 8 L63 16 L70 22 L73 32 L80 42 L84 54 L81 66 L74 78 L67 90 L58 102 L50 112 L44 113 L38 104 L34 92 L26 84 L16 78 L11 68 L13 56 L9 46 L15 38 L13 28 L22 22 L28 14 L36 8 Z",
					fill: "url(#land)",
					stroke: "#d4a054",
					strokeOpacity: "0.55",
					strokeWidth: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "52",
					cy: "116",
					rx: "4.2",
					ry: "2.2",
					fill: "#1a120e",
					stroke: "#d4a054",
					strokeOpacity: "0.35",
					strokeWidth: "0.3"
				}),
				mapPins.map((pin, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: mapPins[i - 1].x,
					y1: mapPins[i - 1].y,
					x2: pin.x,
					y2: pin.y,
					stroke: "#d4a054",
					strokeOpacity: "0.25",
					strokeDasharray: "1.2 1.4",
					strokeWidth: "0.25"
				}) : null }, pin.id))
			]
		}), mapPins.map((pin) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onJump(pin.slide),
			className: "absolute -translate-x-1/2 -translate-y-1/2 text-left",
			style: {
				left: `${pin.x}%`,
				top: `${pin.y / 120 * 100}%`
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative grid size-3.5 place-items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pin-pulse absolute inset-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative size-2.5 rounded-full bg-gold shadow-[0_0_12px_var(--color-gold)]" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("absolute top-1/2 min-w-32 -translate-y-1/2 rounded-lg px-3 py-2", "bg-ink/80 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_35%,transparent)]", pin.x > 55 ? "right-4" : "left-4"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display text-sm text-ivory",
					children: pin.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[11px] tracking-wide text-ivory-dim",
					children: pin.sub
				})]
			})]
		}, pin.id))]
	});
}
function normalize(s) {
	return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, " ").trim();
}
function FillGame() {
	const [i, setI] = (0, import_react.useState)(0);
	const [val, setVal] = (0, import_react.useState)("");
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [ok, setOk] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const q = fillQuestions[i];
	const [blank, after] = splitPrompt(q.prompt);
	const check = () => {
		if (revealed || ok !== null) return;
		const n = normalize(val);
		const hit = q.accept.some((a) => n === normalize(a) || n.includes(normalize(a)));
		setOk(hit);
		if (hit) setScore((s) => s + 1);
	};
	const next = () => {
		setI((n) => (n + 1) % fillQuestions.length);
		setVal("");
		setRevealed(false);
		setOk(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "chip",
					children: "Điền từ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-ivory md:text-5xl",
					children: "Gợi ý rồi ____"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl tabular-nums text-gold",
					children: [
						score,
						"/",
						fillQuestions.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ivory-dim",
				children: [
					"Câu ",
					i + 1,
					"/",
					fillQuestions.length,
					" · Gõ đáp án, hoặc lật chữ cho cả lớp đoán."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-2xl leading-snug text-ivory md:text-3xl",
				children: [
					blank,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("mx-1 inline-block min-w-28 border-b border-gold px-2 text-center italic", ok === true || revealed ? "text-gold-soft" : "text-gold"),
						children: revealed || ok === true ? q.answer : val ? val : "____"
					}),
					after
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ivory-dim",
				children: ["Gợi ý: ", q.hint]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: val,
						onChange: (e) => setVal(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && check(),
						placeholder: "Nhập đáp án…",
						className: "h-12 min-h-12 flex-1 rounded-lg bg-ink-soft px-4 text-ivory shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ivory)_14%,transparent)] outline-none focus:shadow-[0_0_0_1px_var(--color-gold)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: check,
						className: "nav-btn h-12 w-auto min-w-28 gap-2 px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Kiểm tra"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setRevealed(true),
						className: "nav-btn h-12 w-auto min-w-28 gap-2 px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), "Lật đáp án"]
					})
				]
			}),
			ok === true ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gold-soft",
				children: "Đúng. Sang câu tiếp."
			}) : null,
			ok === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-sand",
				children: "Chưa khớp. Thử lại hoặc lật đáp án."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: next,
				className: "self-start text-sm tracking-wide text-gold",
				children: "Câu tiếp →"
			})
		]
	});
}
function splitPrompt(prompt) {
	const idx = prompt.indexOf("______");
	if (idx === -1) return [prompt, ""];
	return [prompt.slice(0, idx), prompt.slice(idx + 6)];
}
function McqGame() {
	const [i, setI] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const q = mcqQuestions[i];
	const done = picked !== null;
	const pick = (idx) => {
		if (picked !== null) return;
		setPicked(idx);
		if (idx === q.correct) setScore((s) => s + 1);
	};
	const next = () => {
		if (i === mcqQuestions.length - 1) {
			setI(0);
			setPicked(null);
			return;
		}
		setI((n) => n + 1);
		setPicked(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "chip",
					children: "Trắc nghiệm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ivory",
					children: "Chọn A B C D"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl tabular-nums text-gold",
					children: [
						score,
						"/",
						mcqQuestions.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ivory-dim",
				children: [
					"Câu ",
					i + 1,
					"/",
					mcqQuestions.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl text-ivory md:text-3xl",
				children: q.q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: q.choices.map((c, idx) => {
					const letter = String.fromCharCode(65 + idx);
					const state = picked === null ? "" : idx === q.correct ? "is-correct" : idx === picked ? "is-wrong" : "";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => pick(idx),
						className: cn("choice flex items-start gap-3", state),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-gold",
							children: letter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pt-0.5 text-sm md:text-base",
							children: c
						})]
					}, c);
				})
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ivory-dim",
				children: q.explain
			}) : null,
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: next,
				className: "self-start text-sm tracking-wide text-gold",
				children: i === mcqQuestions.length - 1 ? "Làm lại vòng" : "Câu tiếp →"
			}) : null
		]
	});
}
function AnswerKey() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "chip",
				children: "Đáp án"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl text-ivory md:text-5xl",
				children: "Khoanh vào câu đúng"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-ivory-dim",
				children: "Dành cho giáo viên chiếu sau khi cả lớp làm xong phần trắc nghiệm."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 grid gap-2 md:grid-cols-2",
				children: mcqQuestions.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg px-3 py-2.5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ivory)_12%,transparent)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] tracking-widest text-gold uppercase",
							children: ["Câu ", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ivory",
							children: q.q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-display text-base text-gold-soft",
							children: [
								String.fromCharCode(65 + q.correct),
								". ",
								q.choices[q.correct]
							]
						})
					]
				}, q.q))
			})
		]
	});
}
function MatchGame() {
	const [right, setRight] = (0, import_react.useState)(() => matchPairs.map((p) => p.right));
	const [pickedLeft, setPickedLeft] = (0, import_react.useState)(null);
	const [links, setLinks] = (0, import_react.useState)({});
	const [wrong, setWrong] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setRight(shuffle(matchPairs.map((p) => p.right)));
	}, []);
	const selectLeft = (l) => {
		if (links[l]) return;
		setPickedLeft(l);
		setWrong(null);
	};
	const selectRight = (r) => {
		if (!pickedLeft) return;
		if (Object.values(links).includes(r)) return;
		const pair = matchPairs.find((p) => p.left === pickedLeft);
		if (pair && pair.right === r) {
			setLinks((m) => ({
				...m,
				[pickedLeft]: r
			}));
			setPickedLeft(null);
			setWrong(null);
		} else setWrong(r);
	};
	const score = Object.keys(links).length;
	const reset = () => {
		setLinks({});
		setPickedLeft(null);
		setWrong(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "chip",
					children: "Nối cột"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ivory",
					children: "Công trình — chìa khóa"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl tabular-nums text-gold",
						children: [
							score,
							"/",
							matchPairs.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: reset,
						className: "nav-btn",
						"aria-label": "Làm lại",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 mb-5 text-sm text-ivory-dim",
				children: "Chọn trái, rồi chọn phải. Đúng sẽ khóa cặp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 md:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2",
					children: matchPairs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => selectLeft(p.left),
						className: cn("match-item text-left text-sm md:text-base", pickedLeft === p.left && "is-picked", links[p.left] && "is-done"),
						children: p.left
					}, p.left))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2",
					children: right.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => selectRight(r),
						className: cn("match-item text-left text-sm md:text-base", wrong === r && "is-wrong choice", Object.values(links).includes(r) && "is-done"),
						children: r
					}, r))
				})]
			}),
			score === matchPairs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 flex items-center gap-2 text-gold-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Cả lớp đã nối đúng toàn bộ."]
			}) : null
		]
	});
}
function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function SlideView({ slide, onJump }) {
	switch (slide.type) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleSlide, { slide });
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteSlide, { slide });
		case "toc": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocSlide, { slide });
		case "map": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSlide, {
			slide,
			onJump
		});
		case "chapter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterSlide, { slide });
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlide, { slide });
		case "split": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitSlide, { slide });
		case "cards": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsSlide, { slide });
		case "timeline": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineSlide, { slide });
		case "compare": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareSlide, { slide });
		case "fill": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameFrame, {
			image: slide.image,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FillGame, {})
		});
		case "mcq": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameFrame, {
			image: slide.image,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(McqGame, {})
		});
		case "key": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameFrame, {
			image: slide.image,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerKey, {})
		});
		case "match": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameFrame, {
			image: slide.image,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchGame, {})
		});
		case "credits": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditsSlide, { slide });
	}
}
function Bg({ src, slow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			className: cn("img-frame h-full w-full object-cover", slow ? "kenburns-slow" : "kenburns")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/20" })]
	});
}
function TitleSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full items-end px-6 pb-24 md:px-16 md:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, { src: slide.image }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "title-stagger relative z-10 max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "chip",
					children: slide.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-6xl leading-[0.9] text-ivory italic md:text-8xl lg:text-9xl",
					children: slide.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base text-ivory-dim md:text-lg",
					children: slide.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs tracking-[0.28em] text-gold uppercase",
					children: "Nhấn mũi tên để mở màn"
				})
			]
		})]
	});
}
function QuoteSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full items-center px-6 md:px-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, {
			src: slide.image,
			slow: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "stagger-in relative z-10 max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl leading-snug text-ivory italic md:text-5xl",
				children: slide.quote
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-8 text-xs tracking-[0.24em] text-gold uppercase",
				children: slide.attribution
			})]
		})]
	});
}
function TocSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full items-center px-6 md:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, { src: slide.image }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "chip",
						children: "Mục lục"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl text-ivory md:text-7xl",
						children: "Hành trình"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-ivory-dim",
						children: "Năm chương, từ tháp xá lợi đến vòm cẩm thạch, rồi ôn lại như một trò chơi."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "stagger-in flex flex-col gap-3",
				children: slide.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "fact-card flex items-baseline gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl text-gold",
						children: item.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-2xl text-ivory",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-ivory-dim",
						children: item.hint
					})] })]
				}, item.n))
			})]
		})]
	});
}
function MapSlide({ slide, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col px-4 py-16 md:px-10 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, {
				src: slide.image,
				slow: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in relative z-10 mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "chip",
						children: "Bản đồ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-ivory md:text-6xl",
						children: "Sáu điểm trên một dải đất"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ivory-dim",
						children: "Chạm vào điểm sáng để nhảy tới công trình."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 min-h-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndiaMap, { onJump })
			})
		]
	});
}
function ChapterSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full items-end px-6 pb-24 md:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, { src: slide.image }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "title-stagger relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.32em] text-gold uppercase",
					children: slide.roman
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-6xl text-ivory italic md:text-8xl",
					children: slide.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-ivory-dim",
					children: slide.subtitle
				})
			]
		})]
	});
}
function HeroSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full items-end overflow-hidden px-6 pb-24 md:px-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, { src: slide.image }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "year-ghost absolute top-[12%] right-4 text-[18vw] md:right-10",
				children: slide.year
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "monument-rise relative z-10 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "chip",
						children: slide.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl leading-[0.92] text-ivory italic md:text-7xl lg:text-8xl",
						children: slide.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base text-ivory-dim md:text-lg",
						children: slide.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs tracking-[0.22em] text-gold uppercase",
						children: slide.location
					})
				]
			})
		]
	});
}
function SplitSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col lg:flex-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[38vh] overflow-hidden lg:h-full lg:w-[46%]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: slide.image,
				alt: "",
				className: "img-frame h-full w-full object-cover kenburns"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent lg:bg-linear-to-r" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-5 py-8 md:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "chip",
						children: slide.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl text-ivory md:text-5xl",
						children: slide.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-6 grid grid-cols-2 gap-3",
						children: slide.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fact-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[10px] tracking-[0.18em] text-gold uppercase",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm text-ivory",
								children: f.value
							})]
						}, f.label))
					}),
					slide.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ivory-dim md:text-[15px]",
						children: p
					}, p)),
					slide.tags ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: slide.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: t
						}, t))
					}) : null
				]
			})
		})]
	});
}
function CardsSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col justify-start overflow-y-auto px-5 pt-16 pb-28 md:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, {
			src: slide.image,
			slow: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "chip",
					children: slide.kicker
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ivory md:text-6xl",
					children: slide.title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stagger-in grid gap-3 md:grid-cols-2",
				children: slide.cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "fact-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-ivory",
							children: c.title
						}),
						c.meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs tracking-wide text-gold",
							children: c.meta
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-ivory-dim",
							children: c.body
						})
					]
				}, c.title))
			})]
		})]
	});
}
function TimelineSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col px-5 py-16 md:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, {
				src: slide.image,
				slow: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in relative z-10 mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "chip",
					children: slide.kicker
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ivory md:text-6xl",
					children: slide.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "stagger-in relative z-10 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1",
				children: slide.events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[7rem_1fr] gap-4 border-l border-gold/30 pl-4 md:grid-cols-[9rem_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-gold tabular-nums",
						children: e.year
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl text-ivory",
						children: e.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-ivory-dim",
						children: e.body
					})] })]
				}, e.year + e.title))
			})
		]
	});
}
function CompareSlide({ slide }) {
	const cols = [slide.left, slide.right];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative grid h-full md:grid-cols-2",
		children: cols.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-0 flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: col.image,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover kenburns"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex h-full flex-col justify-end px-6 py-16 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "chip",
							children: i === 0 ? "Phật giáo" : "Hồi giáo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl text-ivory md:text-5xl",
							children: col.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2",
							children: col.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-ivory-dim",
								children: p
							}, p))
						})
					]
				})
			]
		}, col.title))
	});
}
function GameFrame({ image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full items-start overflow-y-auto px-5 pt-16 pb-28 md:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, {
			src: image,
			slow: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 w-full",
			children
		})]
	});
}
function CreditsSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full items-end px-6 pb-24 md:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, { src: slide.image }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "title-stagger relative z-10 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "chip",
					children: "Hết màn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-5xl text-ivory italic md:text-7xl",
					children: "Đá còn, đế quốc tan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-ivory-dim",
					children: "A-dục gieo tháp. Akbar dựng thành đỏ. Shah Jahan viết bằng cẩm thạch. Nhóm ôn lại bằng điền từ, ABCD và nối cột."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs tracking-[0.22em] text-gold uppercase",
					children: "Kiến Trúc Thiêng · Sử 10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Sanchi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Ajanta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Mahabodhi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Taj Mahal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Red Fort"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Jama Masjid"
						})
					]
				})
			]
		})]
	});
}
function Presentation() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [full, setFull] = (0, import_react.useState)(false);
	const touchX = (0, import_react.useRef)(null);
	const shell = (0, import_react.useRef)(null);
	const slide = slides[index];
	const total = slides.length;
	const go = (0, import_react.useCallback)((next) => {
		setIndex(Math.max(0, Math.min(total - 1, next)));
	}, [total]);
	const jumpId = (0, import_react.useCallback)((id) => {
		const i = slides.findIndex((s) => s.id === id);
		if (i >= 0) setIndex(i);
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				go(index + 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				go(index - 1);
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(total - 1);
			else if (e.key === "f" || e.key === "F") toggleFull();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		index,
		total
	]);
	const toggleFull = async () => {
		const el = shell.current;
		if (!el) return;
		if (!document.fullscreenElement) {
			await el.requestFullscreen?.();
			setFull(true);
		} else {
			await document.exitFullscreen?.();
			setFull(false);
		}
	};
	const onTouchStart = (e) => {
		touchX.current = e.changedTouches[0]?.clientX ?? null;
	};
	const onTouchEnd = (e) => {
		const start = touchX.current;
		const end = e.changedTouches[0]?.clientX;
		touchX.current = null;
		if (start == null || end == null) return;
		const dx = end - start;
		if (dx < -50) go(index + 1);
		if (dx > 50) go(index - 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: shell,
		className: "deck-shell",
		onTouchStart,
		onTouchEnd,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "letterbox letterbox-top" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "letterbox letterbox-bottom" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "slide-enter absolute inset-0 z-[1]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideView, {
					slide,
					onJump: jumpId
				})
			}, slide.id),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fog-layer" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "film-grain pointer-events-none absolute inset-0 z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-4 pt-4 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.22em] text-ivory-dim uppercase",
						children: "Kiến Trúc Thiêng"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center gap-1 md:flex",
						children: chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => jumpId(c.slideId),
							className: cn("rounded-full px-3 py-1.5 text-[11px] tracking-wide transition-colors duration-150", slide.chapter === c.id ? "bg-gold/15 text-gold" : "text-ivory-dim hover:text-ivory"),
							children: c.label
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] tabular-nums text-ivory-dim",
						children: [
							String(index + 1).padStart(2, "0"),
							" / ",
							String(total).padStart(2, "0")
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "absolute right-0 bottom-0 left-0 z-20 px-4 pb-4 md:px-6 md:pr-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 progress-track",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "progress-fill",
						style: { width: `${(index + 1) / total * 100}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-btn disabled:opacity-30",
							onClick: () => go(index - 1),
							disabled: index === 0,
							"aria-label": "Slide trước",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-[11px] tracking-[0.18em] text-ivory-dim uppercase sm:block",
							children: "Phím mũi tên · vuốt · F toàn màn hình"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "nav-btn",
								onClick: toggleFull,
								"aria-label": "Toàn màn hình",
								children: full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "nav-btn disabled:opacity-30",
								onClick: () => go(index + 1),
								disabled: index === total - 1,
								"aria-label": "Slide sau",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
							})]
						})
					]
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {});
}
//#endregion
export { Home as component };
