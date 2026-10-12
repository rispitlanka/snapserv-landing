"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-5 py-24 md:px-12">
      <div className="mx-auto flex max-w-[860px] flex-col gap-9">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions owners ask us" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col border-t border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-11 w-full items-center justify-between gap-4 px-1 py-[22px] text-left text-[17px] font-semibold transition-colors hover:text-brand"
                  >
                    <span>{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-xl font-medium text-brand"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-[22px] pl-1 pr-12 text-[15px] leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
