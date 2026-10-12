"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Icon, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { featureExtras, featureGroups } from "@/lib/content";

export function Features() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const group = featureGroups[active];

  return (
    <section id="features" className="px-5 py-24 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow="Everything in one place"
            title="Every module your restaurant needs. One login."
            text="From the first order of the morning to the cash count at closing, every part of your restaurant works together — and it's all included in one plan."
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center gap-3.5">
          <div
            role="tablist"
            aria-label="Feature groups"
            className="-mx-5 flex w-[calc(100%+2.5rem)] gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:w-auto md:flex-wrap md:justify-center md:overflow-visible md:px-0"
          >
            {featureGroups.map((g, i) => {
              const sel = i === active;
              return (
                <button
                  key={g.name}
                  role="tab"
                  aria-selected={sel}
                  onClick={() => setActive(i)}
                  className={`inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] px-[18px] text-[14.5px] font-semibold transition-colors ${
                    sel ? "border-brand bg-brand text-white" : "border-line bg-white text-muted hover:border-brand hover:text-brand"
                  }`}
                >
                  {g.name}
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${sel ? "bg-white/20 text-white" : "bg-brand-tint text-brand"}`}>
                    {g.items.length}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="text-sm text-sub">{group.sub}</div>
        </Reveal>

        <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {group.items.map((f, i) => (
              <motion.div
                key={group.name + f.title}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-3.5 rounded-[14px] border border-line bg-white p-[18px] transition-colors hover:border-brand-line"
              >
                <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[11px] bg-brand-tint text-brand">
                  <Icon d={f.icon} size={21} />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-muted">{f.text}</p>
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Reveal className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="mr-1 text-sm font-semibold">Plus:</span>
          {featureExtras.map((x) => (
            <span key={x} className="rounded-full border border-line bg-white px-4 py-2 text-[13.5px] text-muted">{x}</span>
          ))}
          <span className="rounded-full bg-brand-tint px-4 py-2 text-[13.5px] font-semibold text-brand">…and more</span>
        </Reveal>
      </div>
    </section>
  );
}
