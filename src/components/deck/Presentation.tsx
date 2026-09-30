import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { chapters, slides } from "@/data/content";
import { cn } from "@/lib/utils";
import { Atmosphere } from "./Atmosphere";
import { SlideView } from "./SlideView";

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(false);
  const touchX = useRef<number | null>(null);
  const shell = useRef<HTMLDivElement>(null);
  const slide = slides[index];
  const total = slides.length;

  const go = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(total - 1, next)));
  }, [total]);

  const jumpId = useCallback((id: string) => {
    const i = slides.findIndex((s) => s.id === id);
    if (i >= 0) setIndex(i);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      } else if (e.key === "f" || e.key === "F") {
        toggleFull();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

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

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.changedTouches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchX.current;
    const end = e.changedTouches[0]?.clientX;
    touchX.current = null;
    if (start == null || end == null) return;
    const dx = end - start;
    if (dx < -50) go(index + 1);
    if (dx > 50) go(index - 1);
  };

  return (
    <div
      ref={shell}
      className="deck-shell"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="letterbox letterbox-top" />
      <div className="letterbox letterbox-bottom" />
      <div key={slide.id} className="slide-enter absolute inset-0 z-[1]">
        <SlideView slide={slide} onJump={jumpId} />
      </div>
      <div className="fog-layer" />
      <Atmosphere />
      <div className="vignette" />
      <div className="film-grain pointer-events-none absolute inset-0 z-10" />

      <header className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-4 pt-4 md:px-6">
        <p className="text-[11px] tracking-[0.22em] text-ivory-dim uppercase">Những thành tựu tiêu biểu của văn minh Ấn Độ thời cổ - trung đại</p>
        <div className="hidden items-center gap-1 md:flex">
          {chapters.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => jumpId(c.slideId)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[11px] tracking-wide transition-colors duration-150",
                slide.chapter === c.id ? "bg-gold/15 text-gold" : "text-ivory-dim hover:text-ivory",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <p className="text-[11px] tabular-nums text-ivory-dim">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </header>

      <footer className="absolute right-0 bottom-0 left-0 z-20 px-4 pb-4 md:px-6 md:pr-44">
        <div className="mb-3 progress-track">
          <div className="progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="nav-btn disabled:opacity-30"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Slide trước"
          >
            <ChevronLeft className="size-5" />
          </button>
          <p className="hidden text-[11px] tracking-[0.18em] text-ivory-dim uppercase sm:block">
            Phím mũi tên · vuốt · F toàn màn hình
          </p>
          <div className="flex items-center gap-2">
            <button type="button" className="nav-btn" onClick={toggleFull} aria-label="Toàn màn hình">
              {full ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
            </button>
            <button
              type="button"
              className="nav-btn disabled:opacity-30"
              onClick={() => go(index + 1)}
              disabled={index === total - 1}
              aria-label="Slide sau"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
