"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Icon, Skeleton } from "./ui";
import { icons, whatsappLink } from "@/lib/content";
import { DashboardMock, PosMock, ShiftMock } from "./Mockups";

const tabs = [
  { id: "dash", label: "Owner dashboard", title: "Dashboard" },
  { id: "pos", label: "POS billing", title: "Front Counter · POS" },
  { id: "shift", label: "Shift summary", title: "Current Account Summary" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const doodles = [
  { cls: "left-[6%] top-[90px] text-red-600 float-a", size: 74, paths: ["M14 50c10 4 30-2 36-20 2-6 0-10-4-10-5 0-6 6-10 12-6 9-14 14-22 18z", "M46 20c0-6 3-9 8-10", "M42 21c2-2 5-2 7 0"], vb: "0 0 64 64" },
  { cls: "left-[11%] top-[300px] text-amber-800 float-b", size: 70, paths: ["M12 28h32v12a12 12 0 0 1-12 12h-8a12 12 0 0 1-12-12z", "M44 32h4a5 5 0 0 1 0 10h-5", "M22 20c-3-3 3-6 0-10", "M30 20c-3-3 3-6 0-10", "M8 56h40"], vb: "0 0 64 64" },
  { cls: "right-[6%] top-[80px] text-amber-600 float-b", size: 80, paths: ["M10 28c0-10 10-16 22-16s22 6 22 16z", "M8 34c4 3 8-3 12 0s8 3 12 0 8-3 12 0 8 3 12 0", "M10 40h44", "M12 46h40a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6z"], vb: "0 0 64 64" },
  { cls: "right-[10%] top-[290px] text-green-700 float-a", size: 66, paths: ["M8 4h36v56l-6-4-6 4-6-4-6 4-6-4-6 4z", "M16 16h20M16 24h20M16 32h12", "M16 44h20"], vb: "0 0 52 64" },
  { cls: "right-[3%] top-[210px] text-amber-500 float-c", size: 46, paths: ["M24 4v12M24 32v12M4 24h12M32 24h12", "M38 6v6M35 9h6"], vb: "0 0 48 48" },
];

export function Hero() {
  const [tab, setTab] = useState<TabId>("dash");
  const [loading, setLoading] = useState(true);
  const reduce = useReducedMotion();

  // Show a short skeleton while the preview "loads" (first paint and each tab switch).
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), reduce ? 0 : 550);
    return () => clearTimeout(t);
  }, [tab, reduce]);

  const active = tabs.find((t) => t.id === tab)!;

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden bg-white px-5 pb-[72px] pt-20 md:px-12">
      {/* Doodles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] lg:block">
        {doodles.map((d, i) => (
          <motion.span
            key={i}
            className={`pointer-events-auto absolute inline-block cursor-pointer ${d.cls}`}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200, damping: 14 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.25, rotate: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              <svg width={d.size} height={d.size} viewBox={d.vb} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                {d.paths.map((p) => (
                  <path key={p} d={p} />
                ))}
              </svg>
            </motion.span>
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-2 text-[13px] font-semibold text-brand">
          <span className="size-2 rounded-full bg-green-600" />
          Complete restaurant management — made in Jaffna
        </motion.span>

        <motion.h1 {...fadeUp(0.08)} className="max-w-[940px] text-4xl font-bold leading-[1.1] tracking-[-1.5px] md:text-6xl">
          Faster billing. Fewer losses. Know your profit every day.
        </motion.h1>

        <motion.p {...fadeUp(0.16)} className="max-w-[720px] text-lg leading-relaxed text-muted">
          Snapserve brings your counter, kitchen, stock, suppliers and staff shifts into one simple system — so you
          always know what&apos;s in the drawer, what&apos;s in the store and what you really earned today.
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="flex flex-wrap justify-center gap-3">
          <a href="#demo" className="group inline-flex items-center gap-2.5 rounded-xl bg-brand px-7 py-4 font-semibold text-white transition hover:brightness-90">
            Book a Free Demo
            <Icon d={icons.arrowRight} size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href={whatsappLink()} className="inline-flex items-center gap-2.5 rounded-xl bg-wa px-7 py-4 font-semibold text-white transition hover:bg-wa-dark">
            <Icon d={icons.whatsapp} size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="text-sm text-muted">
          <b className="text-ink">7-day free trial</b> · LKR 5,000 / month per restaurant · No setup fee · Cancel anytime
        </motion.div>

        {/* Tabbed product preview */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex w-full max-w-[1100px] flex-col items-center gap-4"
        >
          <div role="tablist" aria-label="Product preview" className="inline-flex flex-wrap justify-center gap-1 rounded-xl bg-[#EEF1F8] p-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={t.id === tab}
                onClick={() => setTab(t.id)}
                className={`relative min-h-11 rounded-[9px] px-[18px] text-sm font-semibold transition-colors ${
                  t.id === tab ? "text-brand" : "text-muted hover:text-brand"
                }`}
              >
                {t.id === tab && (
                  <motion.span
                    layoutId="hero-tab-pill"
                    className="absolute inset-0 rounded-[9px] bg-white shadow-[0_1px_3px_rgba(20,44,142,0.15)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>

          <div className="w-full overflow-hidden rounded-[18px] border border-line bg-white text-left shadow-[0_30px_60px_-20px_rgba(20,44,142,0.28)]">
            <div className="flex items-center gap-2 border-b border-[#EEF0F5] bg-[#FAFBFD] px-4 py-3">
              <span className="size-[11px] rounded-full bg-red-400" />
              <span className="size-[11px] rounded-full bg-amber-400" />
              <span className="size-[11px] rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-sub">{active.title}</span>
            </div>
            <div className="min-h-[380px]">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    <PreviewSkeleton />
                  </motion.div>
                ) : (
                  <motion.div
                    key={tab}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {tab === "dash" && <DashboardMock />}
                    {tab === "pos" && <PosMock />}
                    {tab === "shift" && <ShiftMock />}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PreviewSkeleton() {
  return (
    <div className="flex min-h-[380px] gap-4 bg-page p-5" role="status" aria-label="Loading preview">
      <div className="hidden w-[180px] shrink-0 flex-col gap-2.5 md:flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-8" />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[74px] rounded-xl" />
          ))}
        </div>
        <div className="grid flex-1 gap-3 md:grid-cols-2">
          <Skeleton className="h-[180px] rounded-xl" />
          <Skeleton className="h-[180px] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
