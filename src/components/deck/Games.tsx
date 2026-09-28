import { useEffect, useState } from "react";
import { Check, Eye, RotateCcw, Sparkles } from "lucide-react";
import { fillQuestions, matchPairs, mcqQuestions } from "@/data/content";
import { cn } from "@/lib/utils";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function FillGame() {
  const [i, setI] = useState(0);
  const [val, setVal] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
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

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="chip">Điền từ</p>
          <h2 className="mt-3 font-display text-3xl text-ivory md:text-5xl">Gợi ý rồi ____</h2>
        </div>
        <p className="font-display text-2xl tabular-nums text-gold">
          {score}/{fillQuestions.length}
        </p>
      </div>
      <p className="text-sm text-ivory-dim">
        Câu {i + 1}/{fillQuestions.length} · Gõ đáp án, hoặc lật chữ cho cả lớp đoán.
      </p>
      <p className="font-display text-2xl leading-snug text-ivory md:text-3xl">
        {blank}
        <span
          className={cn(
            "mx-1 inline-block min-w-28 border-b border-gold px-2 text-center italic",
            ok === true || revealed ? "text-gold-soft" : "text-gold",
          )}
        >
          {revealed || ok === true ? q.answer : val ? val : "____"}
        </span>
        {after}
      </p>
      <p className="text-sm text-ivory-dim">Gợi ý: {q.hint}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && check()}
          placeholder="Nhập đáp án…"
          className="h-12 min-h-12 flex-1 rounded-lg bg-ink-soft px-4 text-ivory shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ivory)_14%,transparent)] outline-none focus:shadow-[0_0_0_1px_var(--color-gold)]"
        />
        <button type="button" onClick={check} className="nav-btn h-12 w-auto min-w-28 gap-2 px-5">
          <Check className="size-4" />
          Kiểm tra
        </button>
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="nav-btn h-12 w-auto min-w-28 gap-2 px-5"
        >
          <Eye className="size-4" />
          Lật đáp án
        </button>
      </div>
      {ok === true ? <p className="text-sm text-gold-soft">Đúng. Sang câu tiếp.</p> : null}
      {ok === false ? <p className="text-sm text-sand">Chưa khớp. Thử lại hoặc lật đáp án.</p> : null}
      <button type="button" onClick={next} className="self-start text-sm tracking-wide text-gold">
        Câu tiếp →
      </button>
    </div>
  );
}

function splitPrompt(prompt: string): [string, string] {
  const idx = prompt.indexOf("______");
  if (idx === -1) return [prompt, ""];
  return [prompt.slice(0, idx), prompt.slice(idx + 6)];
}

export function McqGame() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = mcqQuestions[i];
  const done = picked !== null;

  const pick = (idx: number) => {
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

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="chip">Trắc nghiệm</p>
          <h2 className="mt-3 font-display text-4xl text-ivory">Chọn A B C D</h2>
        </div>
        <p className="font-display text-2xl tabular-nums text-gold">
          {score}/{mcqQuestions.length}
        </p>
      </div>
      <p className="text-sm text-ivory-dim">
        Câu {i + 1}/{mcqQuestions.length}
      </p>
      <p className="font-display text-2xl text-ivory md:text-3xl">{q.q}</p>
      <div className="grid gap-3">
        {q.choices.map((c, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const state =
            picked === null
              ? ""
              : idx === q.correct
                ? "is-correct"
                : idx === picked
                  ? "is-wrong"
                  : "";
          return (
            <button
              key={c}
              type="button"
              onClick={() => pick(idx)}
              className={cn("choice flex items-start gap-3", state)}
            >
              <span className="font-display text-lg text-gold">{letter}</span>
              <span className="pt-0.5 text-sm md:text-base">{c}</span>
            </button>
          );
        })}
      </div>
      {done ? <p className="text-sm text-ivory-dim">{q.explain}</p> : null}
      {done ? (
        <button type="button" onClick={next} className="self-start text-sm tracking-wide text-gold">
          {i === mcqQuestions.length - 1 ? "Làm lại vòng" : "Câu tiếp →"}
        </button>
      ) : null}
    </div>
  );
}

export function AnswerKey() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <p className="chip">Đáp án</p>
      <h2 className="mt-3 font-display text-3xl text-ivory md:text-5xl">Khoanh vào câu đúng</h2>
      <p className="mt-2 text-sm text-ivory-dim">
        Dành cho giáo viên chiếu sau khi cả lớp làm xong phần trắc nghiệm.
      </p>
      <ol className="mt-5 grid gap-2 md:grid-cols-2">
        {mcqQuestions.map((q, i) => (
          <li key={q.q} className="rounded-lg px-3 py-2.5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ivory)_12%,transparent)]">
            <p className="text-[10px] tracking-widest text-gold uppercase">Câu {i + 1}</p>
            <p className="mt-1 text-sm text-ivory">{q.q}</p>
            <p className="mt-1 font-display text-base text-gold-soft">
              {String.fromCharCode(65 + q.correct)}. {q.choices[q.correct]}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function MatchGame() {
  const [right, setRight] = useState(() => matchPairs.map((p) => p.right));
  const [pickedLeft, setPickedLeft] = useState<string | null>(null);
  const [links, setLinks] = useState<Record<string, string>>({});
  const [wrong, setWrong] = useState<string | null>(null);

  useEffect(() => {
    setRight(shuffle(matchPairs.map((p) => p.right)));
  }, []);

  const selectLeft = (l: string) => {
    if (links[l]) return;
    setPickedLeft(l);
    setWrong(null);
  };

  const selectRight = (r: string) => {
    if (!pickedLeft) return;
    if (Object.values(links).includes(r)) return;
    const pair = matchPairs.find((p) => p.left === pickedLeft);
    if (pair && pair.right === r) {
      setLinks((m) => ({ ...m, [pickedLeft]: r }));
      setPickedLeft(null);
      setWrong(null);
    } else {
      setWrong(r);
    }
  };

  const score = Object.keys(links).length;
  const reset = () => {
    setLinks({});
    setPickedLeft(null);
    setWrong(null);
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="chip">Nối cột</p>
          <h2 className="mt-3 font-display text-4xl text-ivory">Công trình — chìa khóa</h2>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-display text-2xl tabular-nums text-gold">
            {score}/{matchPairs.length}
          </p>
          <button type="button" onClick={reset} className="nav-btn" aria-label="Làm lại">
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>
      <p className="mt-2 mb-5 text-sm text-ivory-dim">Chọn trái, rồi chọn phải. Đúng sẽ khóa cặp.</p>
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col gap-2">
          {matchPairs.map((p) => (
            <button
              key={p.left}
              type="button"
              onClick={() => selectLeft(p.left)}
              className={cn(
                "match-item text-left text-sm md:text-base",
                pickedLeft === p.left && "is-picked",
                links[p.left] && "is-done",
              )}
            >
              {p.left}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {right.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => selectRight(r)}
              className={cn(
                "match-item text-left text-sm md:text-base",
                wrong === r && "is-wrong choice",
                Object.values(links).includes(r) && "is-done",
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      {score === matchPairs.length ? (
        <p className="mt-5 flex items-center gap-2 text-gold-soft">
          <Sparkles className="size-4" />
          Cả lớp đã nối đúng toàn bộ.
        </p>
      ) : null}
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
