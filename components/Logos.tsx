"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Icon, Skeleton } from "./ui";
import { brands } from "@/lib/content";

const fontClass: Record<string, string> = {
  serif: "font-[family-name:var(--font-serif-logo)] font-bold",
  condensed: "font-[family-name:var(--font-condensed-logo)] font-semibold",
  sans: "font-semibold",
  script: "font-[family-name:var(--font-script-logo)]",
};

export function Logos() {
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  // Show skeleton tiles until the logo fonts (or, later, logo images) have loaded.
  useEffect(() => {
    let alive = true;
    const minDelay = new Promise((r) => setTimeout(r, reduce ? 0 : 400));
    Promise.all([document.fonts?.ready ?? Promise.resolve(), minDelay]).then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, [reduce]);

  return (
    <section className="bg-white px-5 pb-24 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-7">
        <span className="text-sm font-semibold text-sub">Restaurants already serving with Snapserve</span>
        <div className="grid w-full grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-5">
          {brands.map((b, i) =>
            ready ? (
              <motion.div
                key={b.name}
                role="img"
                aria-label={`${b.name} logo`}
                initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="flex h-24 items-center justify-center gap-2.5 rounded-[14px] border border-line bg-white p-4 text-muted grayscale transition hover:text-ink"
              >
                <Icon d={b.icon} size={26} className="shrink-0" />
                <span className={`text-[17px] leading-tight ${fontClass[b.font]}`}>{b.name}</span>
              </motion.div>
            ) : (
              <div key={b.name} className="flex h-24 items-center justify-center gap-2.5 rounded-[14px] border border-line bg-white p-4">
                <Skeleton className="size-7 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            ),
          )}
          <div className="flex h-24 items-center justify-center gap-2.5 rounded-[14px] border border-line bg-white p-4">
            <span className="text-3xl font-bold leading-none text-brand">12+</span>
            <span className="text-sm leading-snug text-muted">
              restaurants
              <br />
              and growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
