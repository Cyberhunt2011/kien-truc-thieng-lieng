import type { ReactNode } from "react";
import type { Slide } from "@/data/content";
import { cn } from "@/lib/utils";
import { IndiaMap } from "./IndiaMap";
import { AnswerKey, FillGame, MatchGame, McqGame } from "./Games";

export function SlideView({
  slide,
  onJump,
}: {
  slide: Slide;
  onJump: (id: string) => void;
}) {
  switch (slide.type) {
    case "members":
      return <MembersSlide slide={slide} />;
    case "title":
      return <TitleSlide slide={slide} />;
    case "quote":
      return <QuoteSlide slide={slide} />;
    case "toc":
      return <TocSlide slide={slide} />;
    case "map":
      return <MapSlide slide={slide} onJump={onJump} />;
    case "chapter":
      return <ChapterSlide slide={slide} />;
    case "hero":
      return <HeroSlide slide={slide} />;
    case "split":
      return <SplitSlide slide={slide} />;
    case "cards":
      return <CardsSlide slide={slide} />;
    case "timeline":
      return <TimelineSlide slide={slide} />;
    case "compare":
      return <CompareSlide slide={slide} />;
    case "fill":
      return (
        <GameFrame image={slide.image}>
          <FillGame />
        </GameFrame>
      );
    case "mcq":
      return (
        <GameFrame image={slide.image}>
          <McqGame />
        </GameFrame>
      );
    case "key":
      return (
        <GameFrame image={slide.image}>
          <AnswerKey />
        </GameFrame>
      );
    case "match":
      return (
        <GameFrame image={slide.image}>
          <MatchGame />
        </GameFrame>
      );
    case "credits":
      return <CreditsSlide slide={slide} />;
  }
}

function Bg({ src, slow }: { src: string; slow?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt=""
        className={cn("img-frame h-full w-full object-cover", slow ? "kenburns-slow" : "kenburns")}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/20" />
    </div>
  );
}

function MembersSlide({ slide }: { slide: Extract<Slide, { type: "members" }> }) {
  const collage = [
    "/images/taj-dawn.jpg",
    "/images/sanchi.jpg",
    "/images/ajanta-gorge.jpg",
    "/images/mahabodhi.jpg",
    "/images/red-fort.jpg",
    "/images/jama-masjid.jpg",
  ];

  return (
    <div className="relative flex h-full flex-col overflow-hidden px-5 pt-16 pb-20 md:px-12 md:pt-16">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-30">
        {collage.map((src) => (
          <img key={src} src={src} alt="" className="h-full w-full object-cover" />
        ))}
      </div>
      <div className="absolute inset-0 bg-ink/85" />
      <div className="absolute inset-0 bg-linear-to-br from-ink/60 via-ink/80 to-ink" />

      <div className="relative z-10 mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="chip">Đội ngũ thực hiện</p>
          <h1 className="mt-3 font-display text-4xl leading-none text-ivory italic md:text-6xl">
            Thành viên 🐧 nhiệm vụ
          </h1>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-ivory-dim md:block">
          Hành trình kiến trúc Ấn Độ qua lịch sử, tôn giáo, khoa học và di sản.
        </p>
      </div>

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-2 gap-2.5 overflow-hidden md:gap-3">
        {slide.members.map((member, index) => (
          <article
            key={member.name}
            className="flex min-h-0 items-start gap-2.5 rounded-xl border border-gold/15 bg-ink/55 px-3 py-2.5 backdrop-blur-sm md:px-4 md:py-3"
          >
            <span className="font-display text-lg leading-none text-gold md:text-2xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-lg leading-tight text-ivory md:text-2xl">{member.name}</h2>
              <p className="mt-1 text-sm leading-snug text-ivory-dim md:text-base">{member.task}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function TitleSlide({ slide }: { slide: Extract<Slide, { type: "title" }> }) {
  return (
    <div className="relative flex h-full items-end px-6 pb-24 md:px-16 md:pb-28">
      <Bg src={slide.image} />
      <div className="title-stagger relative z-10 max-w-4xl">
        <p className="chip">{slide.kicker}</p>
        <h1 className="mt-5 font-display text-6xl leading-[0.9] text-ivory italic md:text-8xl lg:text-9xl">
          {slide.title}
        </h1>
        <div className="gold-rule mt-6" />
        <p className="mt-6 max-w-xl text-base text-ivory-dim md:text-lg">{slide.subtitle}</p>
        <p className="mt-8 text-xs tracking-[0.28em] text-gold uppercase">Nhấn mũi tên để mở màn</p>
      </div>
    </div>
  );
}

function QuoteSlide({ slide }: { slide: Extract<Slide, { type: "quote" }> }) {
  return (
    <div className="relative flex h-full items-center px-6 md:px-20">
      <Bg src={slide.image} slow />
      <blockquote className="stagger-in relative z-10 max-w-3xl">
        <p className="font-display text-3xl leading-snug text-ivory italic md:text-5xl">
          {slide.quote}
        </p>
        <footer className="mt-8 text-xs tracking-[0.24em] text-gold uppercase">{slide.attribution}</footer>
      </blockquote>
    </div>
  );
}

function TocSlide({ slide }: { slide: Extract<Slide, { type: "toc" }> }) {
  return (
    <div className="relative flex h-full items-center px-6 md:px-16">
      <Bg src={slide.image} />
      <div className="relative z-10 grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="stagger-in">
          <p className="chip">Mục lục</p>
          <h2 className="mt-4 font-display text-5xl text-ivory md:text-7xl">Hành trình</h2>
          <p className="mt-4 max-w-sm text-ivory-dim">
            Năm chương, từ tháp xá lợi đến vòm cẩm thạch, rồi ôn lại như một trò chơi.
          </p>
        </div>
        <ol className="stagger-in flex flex-col gap-3">
          {slide.items.map((item) => (
            <li key={item.n} className="fact-card flex items-baseline gap-4">
              <span className="font-display text-3xl text-gold">{item.n}</span>
              <span>
                <span className="block font-display text-3xl text-ivory">{item.title}</span>
                <span className="text-base text-ivory-dim">{item.hint}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function MapSlide({
  slide,
  onJump,
}: {
  slide: Extract<Slide, { type: "map" }>;
  onJump: (id: string) => void;
}) {
  return (
    <div className="relative flex h-full flex-col px-4 py-16 md:px-10 md:py-20">
      <Bg src={slide.image} slow />
      <div className="stagger-in relative z-10 mb-4">
        <p className="chip">Bản đồ</p>
        <h2 className="mt-3 font-display text-4xl text-ivory md:text-6xl">Sáu điểm trên một dải đất</h2>
        <p className="mt-2 text-base text-ivory-dim">Chạm vào điểm sáng để nhảy tới công trình.</p>
      </div>
      <div className="relative z-10 min-h-0 flex-1">
        <IndiaMap onJump={onJump} />
      </div>
    </div>
  );
}

function ChapterSlide({ slide }: { slide: Extract<Slide, { type: "chapter" }> }) {
  return (
    <div className="relative flex h-full items-end px-6 pb-24 md:px-16">
      <Bg src={slide.image} />
      <div className="title-stagger relative z-10">
        <p className="text-xs tracking-[0.32em] text-gold uppercase">{slide.roman}</p>
        <h2 className="mt-4 font-display text-6xl text-ivory italic md:text-8xl">{slide.title}</h2>
        <div className="gold-rule mt-6" />
        <p className="mt-6 max-w-lg text-ivory-dim">{slide.subtitle}</p>
      </div>
    </div>
  );
}

function HeroSlide({ slide }: { slide: Extract<Slide, { type: "hero" }> }) {
  return (
    <div className="relative flex h-full items-end overflow-hidden px-6 pb-24 md:px-16">
      <Bg src={slide.image} />
      <p className="year-ghost absolute top-[12%] right-4 text-[18vw] md:right-10">{slide.year}</p>
      <div className="monument-rise relative z-10 max-w-3xl">
        <p className="chip">{slide.kicker}</p>
        <h2 className="mt-4 font-display text-5xl leading-[0.92] text-ivory italic md:text-7xl lg:text-8xl">
          {slide.title}
        </h2>
        <p className="mt-5 max-w-xl text-base text-ivory-dim md:text-lg">{slide.subtitle}</p>
        <p className="mt-6 text-xs tracking-[0.22em] text-gold uppercase">{slide.location}</p>
      </div>
    </div>
  );
}

function SplitSlide({ slide }: { slide: Extract<Slide, { type: "split" }> }) {
  return (
    <div className="relative flex h-full flex-col lg:flex-row">
      <div className="relative h-[38vh] overflow-hidden lg:h-full lg:w-[46%]">
        <img src={slide.image} alt="" className="img-frame h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent lg:bg-linear-to-r" />
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-5 py-8 md:px-12">
        <div className="stagger-in max-w-2xl">
          <p className="chip">{slide.kicker}</p>
          <h2 className="mt-4 font-display text-3xl text-ivory md:text-5xl">{slide.title}</h2>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {slide.facts.map((f) => (
              <div key={f.label} className="fact-card">
                <dt className="text-[10px] tracking-[0.18em] text-gold uppercase">{f.label}</dt>
                <dd className="mt-1 text-base text-ivory">{f.value}</dd>
              </div>
            ))}
          </dl>
          {slide.body.map((p) => (
            <p key={p} className="mt-4 text-base leading-relaxed text-ivory-dim md:text-[17px]">
              {p}
            </p>
          ))}
          {slide.tags ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {slide.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CardsSlide({ slide }: { slide: Extract<Slide, { type: "cards" }> }) {
  return (
    <div className="relative flex h-full flex-col justify-start overflow-y-auto px-5 pt-16 pb-28 md:px-12">
      <Bg src={slide.image} slow />
      <div className="relative z-10">
        <div className="stagger-in mb-5">
          <p className="chip">{slide.kicker}</p>
          <h2 className="mt-3 font-display text-4xl text-ivory md:text-6xl">{slide.title}</h2>
        </div>
        <div className="stagger-in grid gap-3 md:grid-cols-2">
          {slide.cards.map((c) => (
            <article key={c.title} className="fact-card">
              <p className="font-display text-3xl text-ivory">{c.title}</p>
              {c.meta ? <p className="mt-1 text-xs tracking-wide text-gold">{c.meta}</p> : null}
              <p className="mt-3 text-base text-ivory-dim">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineSlide({ slide }: { slide: Extract<Slide, { type: "timeline" }> }) {
  return (
    <div className="relative flex h-full flex-col px-5 py-16 md:px-12">
      <Bg src={slide.image} slow />
      <div className="stagger-in relative z-10 mb-5">
        <p className="chip">{slide.kicker}</p>
        <h2 className="mt-3 font-display text-4xl text-ivory md:text-6xl">{slide.title}</h2>
      </div>
      <ol className="stagger-in relative z-10 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
        {slide.events.map((e) => (
          <li
            key={e.year + e.title}
            className="grid grid-cols-[7rem_1fr] gap-4 border-l border-gold/30 pl-4 md:grid-cols-[9rem_1fr]"
          >
            <span className="font-display text-lg text-gold tabular-nums">{e.year}</span>
            <span>
              <span className="block font-display text-xl text-ivory">{e.title}</span>
              <span className="text-base text-ivory-dim">{e.body}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CompareSlide({ slide }: { slide: Extract<Slide, { type: "compare" }> }) {
  const cols = [slide.left, slide.right];
  return (
    <div className="relative grid h-full md:grid-cols-2">
      {cols.map((col, i) => (
        <section key={col.title} className="relative flex min-h-0 flex-col overflow-hidden">
          <img src={col.image} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative z-10 flex h-full flex-col justify-end px-6 py-16 md:px-10">
            <p className="chip">{i === 0 ? "Phật giáo" : "Hồi giáo"}</p>
            <h2 className="mt-3 font-display text-4xl text-ivory md:text-5xl">{col.title}</h2>
            <ul className="mt-5 space-y-2">
              {col.points.map((p) => (
                <li key={p} className="text-base text-ivory-dim">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}

function GameFrame({ image, children }: { image: string; children: ReactNode }) {
  return (
    <div className="relative flex h-full items-start overflow-y-auto px-5 pt-16 pb-28 md:px-12">
      <Bg src={image} slow />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

function CreditsSlide({ slide }: { slide: Extract<Slide, { type: "credits" }> }) {
  return (
    <div className="relative flex h-full items-end px-6 pb-24 md:px-16">
      <Bg src={slide.image} />
      <div className="title-stagger relative z-10 max-w-2xl">
        <p className="chip">Hết màn</p>
        <h2 className="mt-4 font-display text-5xl text-ivory italic md:text-7xl">Đá còn, đế quốc tan</h2>
        <p className="mt-5 text-ivory-dim">
          A-dục gieo tháp. Akbar dựng thành đỏ. Shah Jahan viết bằng cẩm thạch. Nhóm ôn lại bằng điền
          từ, ABCD và nối cột.
        </p>
        <p className="mt-8 text-xs tracking-[0.22em] text-gold uppercase">Thuyết trình lịch sử nhóm 2 · 10A09</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="chip">Sanchi</span>
          <span className="chip">Ajanta</span>
          <span className="chip">Mahabodhi</span>
          <span className="chip">Taj Mahal</span>
          <span className="chip">Red Fort</span>
          <span className="chip">Jama Masjid</span>
        </div>
      </div>
    </div>
  );
}
