import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES, type Slide } from "./content";
import { cn } from "@/lib/utils";

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-sm bg-aqua px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
      {children}
    </span>
  );
}

function Cover({
  s,
  dir,
  onStart,
}: {
  s: Extract<Slide, { kind: "cover" }>;
  dir: number;
  onStart: () => void;
}) {
  return (
    <div className="relative h-full overflow-hidden bg-bg">
      <img
        src={s.bg}
        alt=""
        className="cover-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/55" />
      <div
        className={cn(
          "relative z-10 flex h-full flex-col justify-between px-6 py-8 sm:px-14 sm:py-10",
          dir >= 0 ? "deck-enter-right" : "deck-enter-left",
        )}
      >
        <Chip>{s.kicker}</Chip>
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-fg whitespace-pre-line sm:text-7xl">
            {s.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-fg/90 sm:text-xl">{s.subtitle}</p>
          <p className="mt-3 text-sm text-muted">{s.line}</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onStart();
            }}
            className="glow mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-fg"
          >
            Começar a aula
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="flex flex-col gap-2 pb-16 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm text-muted">{s.note}</p>
          <p className="text-sm text-fg/80">{s.brand}</p>
        </div>
      </div>
    </div>
  );
}

function Journey({ s }: { s: Extract<Slide, { kind: "journey" }> }) {
  return (
    <div className="flex h-full flex-col overflow-auto bg-bg px-6 py-8 sm:px-10">
      <Chip>{s.kicker}</Chip>
      <h2 className="deck-enter mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
        {s.title}
      </h2>
      <p className="deck-enter mt-2 max-w-3xl text-muted">{s.body}</p>
      <div className="stagger mt-6 grid flex-1 grid-cols-2 gap-3 lg:grid-cols-4">
        {s.steps.map((st) => (
          <article
            key={st.n}
            className="flex flex-col rounded-lg bg-card p-4 ring-1 ring-line sm:p-5"
          >
            <span className="text-xs font-bold text-aqua">{st.n}</span>
            <h3 className="mt-3 font-display text-lg font-semibold uppercase">{st.t}</h3>
            <p className="mt-2 text-sm text-muted">{st.d}</p>
          </article>
        ))}
      </div>
      <p className="deck-enter mt-5 font-display text-xl italic text-primary-soft">{s.quote}</p>
      <p className="mt-2 text-sm text-fg">{s.rule}</p>
      <p className="mt-1 pb-20 text-xs text-muted sm:text-sm">{s.qs}</p>
    </div>
  );
}

function MapSlide({ s }: { s: Extract<Slide, { kind: "map" }> }) {
  return (
    <div className="flex h-full flex-col overflow-auto bg-bg px-6 py-8 sm:px-10">
      <Chip>{s.kicker}</Chip>
      <h2 className="deck-enter mt-4 font-display text-3xl font-bold sm:text-4xl">{s.title}</h2>
      <p className="mt-2 text-muted">{s.body}</p>
      <div className="stagger mt-6 grid flex-1 grid-cols-2 gap-3 pb-20 sm:grid-cols-3">
        {s.items.map((item, i) => (
          <article key={item} className="rounded-lg bg-card p-5 ring-1 ring-line">
            <span className="text-xs font-bold text-aqua">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold uppercase">{item}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}

function Guide({ s }: { s: Extract<Slide, { kind: "guide" }> }) {
  return (
    <div className="flex h-full flex-col bg-bg px-4 py-5 sm:px-8 sm:py-6">
      <div className="flex flex-wrap items-center gap-3">
        <Chip>{s.kicker}</Chip>
        <h2 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h2>
      </div>
      <p className="mt-2 text-sm text-muted">{s.body}</p>
      <div className="mt-4 grid min-h-0 flex-1 gap-4 pb-16 lg:grid-cols-[1fr_200px]">
        <div className="deck-enter-left overflow-hidden rounded-lg bg-surface ring-1 ring-line">
          <img src={s.image} alt={s.title} className="h-full w-full object-contain object-top" />
        </div>
        <div className="stagger hidden flex-col gap-3 lg:flex">
          {s.observe.map((o) => (
            <article key={o.n} className="rounded-lg bg-card p-4 ring-1 ring-line">
              <span className="text-xs font-bold text-aqua">{o.n}</span>
              <p className="mt-2 font-display text-base font-semibold leading-snug">{o.t}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Full({ s }: { s: Extract<Slide, { kind: "full" }> }) {
  return (
    <div className="flex h-full flex-col bg-bg px-4 py-5 sm:px-8 sm:py-6">
      <div className="flex flex-wrap items-center gap-3">
        <Chip>{s.kicker}</Chip>
        <h2 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h2>
      </div>
      {s.body ? <p className="mt-2 text-sm text-muted">{s.body}</p> : null}
      <div className="deck-enter mt-4 min-h-0 flex-1 overflow-hidden rounded-lg bg-surface ring-1 ring-line">
        <img src={s.image} alt={s.title} className="h-full w-full object-contain object-top" />
      </div>
    </div>
  );
}

function Prompts({ s }: { s: Extract<Slide, { kind: "prompts" }> }) {
  return (
    <div className="flex h-full flex-col overflow-auto bg-bg px-6 py-8 sm:px-10">
      <Chip>{s.kicker}</Chip>
      <h2 className="deck-enter mt-4 font-display text-3xl font-bold">{s.title}</h2>
      <div className="stagger mt-6 grid flex-1 grid-cols-2 gap-3 pb-20 lg:grid-cols-4">
        {s.items.map((it) => (
          <article key={it.n} className="rounded-lg bg-card p-4 ring-1 ring-line sm:p-5">
            <span className="text-xs font-bold text-aqua">{it.n}</span>
            <h3 className="mt-3 font-display text-lg font-semibold">{it.t}</h3>
            <p className="mt-2 text-sm text-muted">{it.d}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Flow({ s }: { s: Extract<Slide, { kind: "flow" }> }) {
  return (
    <div className="flex h-full flex-col overflow-auto bg-bg px-6 py-8 sm:px-10">
      <Chip>{s.kicker}</Chip>
      <h2 className="deck-enter mt-4 font-display text-3xl font-bold">{s.title}</h2>
      <p className="mt-2 text-muted">{s.body}</p>
      <div className="stagger mt-6 grid flex-1 grid-cols-1 gap-3 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((it) => (
          <article key={it.n} className="rounded-lg bg-card p-5 ring-1 ring-line">
            <span className="inline-flex rounded-sm bg-aqua px-2 py-0.5 text-xs font-bold text-ink">
              {it.n}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold uppercase">{it.t}</h3>
            <p className="mt-2 text-sm text-muted">{it.d}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Close({ s }: { s: Extract<Slide, { kind: "close" }> }) {
  return (
    <div className="h-full overflow-hidden bg-bg pb-16">
      <img src={s.image} alt="Bora organizar" className="h-full w-full object-contain" />
    </div>
  );
}

function SlideView({
  slide,
  dir,
  onStart,
}: {
  slide: Slide;
  dir: number;
  onStart: () => void;
}) {
  switch (slide.kind) {
    case "cover":
      return <Cover s={slide} dir={dir} onStart={onStart} />;
    case "journey":
      return <Journey s={slide} />;
    case "map":
      return <MapSlide s={slide} />;
    case "guide":
      return <Guide s={slide} />;
    case "full":
      return <Full s={slide} />;
    case "prompts":
      return <Prompts s={slide} />;
    case "flow":
      return <Flow s={slide} />;
    case "close":
      return <Close s={slide} />;
  }
}

export function Deck() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const touchX = useRef<number | null>(null);
  const total = SLIDES.length;
  const slide = SLIDES[i];

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      if (clamped === i) return;
      setDir(clamped > i ? 1 : -1);
      setI(clamped);
    },
    [i, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(i + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(i - 1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, i, total]);

  const pct = ((i + 1) / total) * 100;

  return (
    <div
      className="relative h-dvh overflow-hidden bg-bg text-fg"
      onTouchStart={(e) => {
        touchX.current = e.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        touchX.current = null;
        if (start == null || end == null) return;
        const d = end - start;
        if (d < -40) go(i + 1);
        if (d > 40) go(i - 1);
      }}
    >
      <div className="absolute inset-x-0 top-0 z-30 h-1 bg-line">
        <div
          key={i}
          className="progress-fill h-full bg-aqua"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div
        className="absolute inset-0"
        key={i}
        onClick={(e) => {
          const x = e.clientX;
          const w = window.innerWidth;
          if (x < w * 0.22) go(i - 1);
          else go(i + 1);
        }}
      >
        <SlideView slide={slide} dir={dir} onStart={() => go(1)} />
      </div>

      <button
        type="button"
        aria-label="Slide anterior"
        onClick={(e) => {
          e.stopPropagation();
          go(i - 1);
        }}
        disabled={i === 0}
        className="absolute top-1/2 left-3 z-40 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-fg ring-1 ring-line backdrop-blur-sm disabled:opacity-20 sm:inline-flex"
      >
        <ChevronLeft className="size-7" />
      </button>
      <button
        type="button"
        aria-label="Próximo slide"
        onClick={(e) => {
          e.stopPropagation();
          go(i + 1);
        }}
        disabled={i === total - 1}
        className="absolute top-1/2 right-3 z-40 inline-flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-fg shadow-lg disabled:opacity-20"
      >
        <ChevronRight className="size-7" />
      </button>

      <div
        className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 bg-gradient-to-t from-ink via-ink/90 to-transparent px-4 pt-8 pb-5"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs tabular-nums text-muted">
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex max-w-[70%] flex-wrap justify-center gap-1.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Ir para o slide ${idx + 1}`}
              onClick={() => go(idx)}
              className={cn(
                "h-2 rounded-full transition-all",
                idx === i ? "w-6 bg-primary" : "w-2 bg-muted/40 hover:bg-muted",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2 sm:hidden">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            className="inline-flex size-11 items-center justify-center rounded-md bg-card ring-1 ring-line disabled:opacity-30"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => go(i + 1)}
            disabled={i === total - 1}
            className="inline-flex size-11 items-center justify-center rounded-md bg-primary disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
