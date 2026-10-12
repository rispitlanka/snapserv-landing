"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import { Icon, Skeleton } from "./ui";
import { Reveal } from "./Reveal";
import {
  CONTACT_EMAIL, brands, faqs, featureGroups, icons, mobile, reports, testimonials, whatsappLink,
} from "@/lib/content";

/*
 * The simplified phone layout (under 768px). Section ids are prefixed with "m-"
 * so they never clash with the desktop sections, which are hidden on phones.
 */

const fontClass: Record<string, string> = {
  serif: "font-[family-name:var(--font-serif-logo)] font-bold",
  condensed: "font-[family-name:var(--font-condensed-logo)] font-semibold",
  sans: "font-semibold",
  script: "font-[family-name:var(--font-script-logo)]",
};

const h2 = "text-[26px] font-bold leading-tight tracking-[-0.5px]";
const eyebrow = "text-xs font-semibold uppercase tracking-[1.4px]";

export function MobilePage() {
  return (
    <>
      <MobileHeader />
      <main>
        <MobileHero />
        <MobileFeatures />
        <MobileReports />
        <MobileSteps />
        <MobileProof />
        <MobilePricing />
        <MobileFaq />
        <MobileDemo />
      </main>
      <footer className="flex flex-col items-center gap-2.5 border-t border-line bg-white px-4 pb-28 pt-6 text-center text-[12.5px] text-sub">
        <span>© 2026 Snapserve A Product of Rispit | Build in Jaffna with ❤️</span>
        <span className="flex gap-[18px]">
          <a href="/privacy" className="text-brand">Privacy policy</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand">{CONTACT_EMAIL}</a>
        </span>
      </footer>
    </>
  );
}

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#m-features", label: "Features" },
    { href: "#m-pricing", label: "Pricing" },
    { href: "#m-faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-2.5">
        <a href="#m-top" className="flex items-center gap-2 text-ink">
          <Image src="/logo.png" alt="" width={34} height={34} priority />
          <span className="text-lg font-bold tracking-tight">Snapserve</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex size-11 items-center justify-center rounded-[10px] border-[1.5px] border-line bg-white"
        >
          <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }} className="flex">
            <Icon d={open ? "M6 6l12 12 M18 6 6 18" : "M4 7h16 M4 12h16 M4 17h16"} />
          </motion.span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col px-4 pb-3.5">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-[#EEF0F5] px-0.5 py-[13px] text-base font-medium text-ink">
                  {l.label}
                </a>
              ))}
              <a href="#m-demo" onClick={() => setOpen(false)} className="mt-3 flex h-12 items-center justify-center rounded-xl bg-brand text-[15px] font-semibold text-white">
                Book a Free Demo
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileHero() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), reduce ? 0 : 600);
    return () => clearTimeout(t);
  }, [reduce]);

  const up = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } };

  return (
    <section id="m-top" className="flex flex-col gap-[18px] bg-white px-4 pb-9 pt-8">
      <motion.span {...up(0)} className="inline-flex items-center gap-[7px] self-start rounded-full bg-brand-tint px-3 py-1.5 text-xs font-semibold text-brand">
        <span className="size-[7px] rounded-full bg-green-600" />
        Made in Jaffna
      </motion.span>
      <motion.h1 {...up(0.06)} className="text-[32px] font-bold leading-[1.15] tracking-[-0.9px]">
        Faster billing. Fewer losses. Know your profit every day.
      </motion.h1>
      <motion.p {...up(0.12)} className="text-[15px] leading-relaxed text-muted">
        Billing, kitchen, stock and shifts in one simple system for your restaurant.
      </motion.p>
      <motion.div {...up(0.18)} className="flex flex-col gap-2.5">
        <a href="#m-demo" className="flex h-[52px] items-center justify-center rounded-xl bg-brand font-semibold text-white active:scale-[0.97]">
          Book a Free Demo
        </a>
        <a href={whatsappLink()} className="flex h-[52px] items-center justify-center gap-2 rounded-xl border-[1.5px] border-wa bg-white font-semibold text-wa active:scale-[0.97]">
          <Icon d={icons.whatsapp} size={18} />
          Chat on WhatsApp
        </a>
      </motion.div>
      <motion.div {...up(0.22)} className="text-center text-[13px] text-muted">
        <b className="text-ink">7-day free trial</b> · No setup fee · Cancel anytime
      </motion.div>

      {/* Small dashboard preview */}
      <div className="mt-1.5 rounded-2xl border border-line bg-page p-3.5">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="sk" exit={{ opacity: 0 }} className="flex flex-col gap-2.5" role="status" aria-label="Loading preview">
              <div className="grid grid-cols-2 gap-2">
                <Skeleton className="h-[62px]" />
                <Skeleton className="h-[62px]" />
              </div>
              <Skeleton className="h-[92px]" />
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              role="img"
              aria-label="Snapserve owner dashboard showing today's sales, net profit and top-selling items"
              className="flex flex-col gap-2.5"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-[10px] bg-white p-3">
                  <div className="text-[11px] text-sub">Total Sales</div>
                  <div className="mt-0.5 text-[17px] font-bold">LKR 26,000</div>
                </div>
                <div className="rounded-[10px] bg-white p-3">
                  <div className="text-[11px] text-sub">Net Profit</div>
                  <div className="mt-0.5 text-[17px] font-bold text-green-700">LKR 16,300</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-[10px] bg-white p-3">
                <div className="text-xs font-semibold">Top-Selling Items</div>
                {[
                  { n: "Fresh Lime Juice", s: 25, p: 100 },
                  { n: "Chicken Burger", s: 11, p: 44 },
                ].map((it, i) => (
                  <div key={it.n}>
                    <div className="flex justify-between text-xs">
                      <span>{it.n}</span>
                      <span className="text-sub">{it.s} sold</span>
                    </div>
                    <div className="mt-1 h-[5px] rounded bg-[#EEF0F5]">
                      <motion.div
                        className="h-[5px] rounded bg-brand"
                        initial={reduce ? false : { width: 0 }}
                        animate={{ width: `${it.p}%` }}
                        transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function MobileFeatures() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const items = featureGroups[active].items;

  return (
    <section id="m-features" className="pb-10 pt-11">
      <Reveal className="flex flex-col gap-2 px-4">
        <span className={`${eyebrow} text-brand`}>Features</span>
        <h2 className={h2}>Everything your restaurant needs</h2>
      </Reveal>
      <div role="tablist" aria-label="Feature groups" className="flex gap-2 overflow-x-auto px-4 pb-4 pt-[18px] [scrollbar-width:none]">
        {mobile.groupNames.map((name, i) => {
          const sel = i === active;
          return (
            <button
              key={name}
              role="tab"
              aria-selected={sel}
              onClick={() => setActive(i)}
              className={`h-11 shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-4 text-sm font-semibold transition-colors ${
                sel ? "border-brand bg-brand text-white" : "border-line bg-white text-muted"
              }`}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2 px-4">
        <AnimatePresence mode="popLayout">
          {items.map((f, i) => (
            <motion.div
              key={active + f.title}
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.08 } }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="flex flex-col gap-2 rounded-xl border border-line bg-white p-3"
            >
              <span className="flex size-[34px] items-center justify-center rounded-[9px] bg-brand-tint text-brand">
                <Icon d={f.icon} size={18} />
              </span>
              <span className="text-[13.5px] font-semibold leading-snug">{f.title}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function MobileReports() {
  return (
    <section className="flex flex-col gap-[18px] bg-brand px-4 py-10 text-white">
      <Reveal className="flex flex-col gap-2">
        <span className={eyebrow}>Reports</span>
        <h2 className={h2}>See your real profit, not a guess</h2>
        <p className="text-[14.5px] leading-relaxed text-[#E3EAFF]">8 reports with date filters and CSV &amp; PDF export.</p>
      </Reveal>
      <div className="flex flex-wrap gap-2">
        {reports.map((r, i) => (
          <motion.span
            key={r.t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="rounded-full border border-white/25 bg-white/10 px-[13px] py-2 text-[13px] font-medium"
          >
            {r.t.replace(" report", "")}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function MobileSteps() {
  return (
    <section className="flex flex-col gap-[18px] px-4 py-10">
      <Reveal>
        <h2 className={h2}>Up and running in 3 steps</h2>
      </Reveal>
      <div className="flex flex-col gap-2.5">
        {mobile.steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="flex items-center gap-3.5 rounded-xl border border-line bg-white p-3.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-white">{s.n}</span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold">{s.t}</span>
                <span className="text-[13px] leading-normal text-muted">{s.d}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MobileProof() {
  const q = testimonials[0];
  const shown = brands.slice(0, mobile.logoCount);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let alive = true;
    (document.fonts?.ready ?? Promise.resolve()).then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="flex flex-col gap-[18px] bg-white px-4 py-10">
      <Reveal>
        <figure className="flex flex-col gap-3.5 rounded-2xl bg-page p-5">
          <svg width="24" height="18" viewBox="0 0 32 24" fill="#BFCDFB" aria-hidden="true">
            <path d="M0 24V14C0 6 4 1 12 0l1 4c-4 1-6 4-6 8h6v12zm18 0V14c0-8 4-13 12-14l1 4c-4 1-6 4-6 8h6v12z" />
          </svg>
          <blockquote className="text-[15px] leading-relaxed">{q.text}</blockquote>
          <figcaption className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#DCE4FD] text-[13px] font-bold text-brand">{q.init}</span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold">{q.name}</span>
              <span className="text-xs text-sub">{q.role}</span>
            </span>
          </figcaption>
        </figure>
      </Reveal>
      <span className="mt-1.5 text-center text-[13px] font-semibold text-sub">Trusted by restaurants in Sri Lanka</span>
      <div className="grid grid-cols-2 gap-2">
        {shown.map((b) =>
          ready ? (
            <motion.div
              key={b.name}
              role="img"
              aria-label={`${b.name} logo`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex h-[60px] items-center justify-center gap-[7px] rounded-xl border border-line px-2 text-center text-muted"
            >
              <Icon d={b.icon} size={18} className="shrink-0" />
              <span className={`text-[13.5px] leading-tight ${fontClass[b.font]}`}>{b.name}</span>
            </motion.div>
          ) : (
            <div key={b.name} className="flex h-[60px] items-center justify-center gap-2 rounded-xl border border-line">
              <Skeleton className="size-5 rounded-full" />
              <Skeleton className="h-3.5 w-20" />
            </div>
          ),
        )}
        <div className="flex h-[60px] items-center justify-center gap-1.5 rounded-xl border border-line">
          <span className="text-[22px] font-bold text-brand">12+</span>
          <span className="text-xs text-muted">restaurants</span>
        </div>
      </div>
    </section>
  );
}

function MobilePricing() {
  return (
    <section id="m-pricing" className="px-4 py-10">
      <Reveal>
        <div className="flex flex-col gap-3.5 rounded-[20px] bg-brand px-5 py-6 text-white">
          <span className={eyebrow}>Pricing</span>
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-lg font-semibold">LKR</span>
            <span className="text-[46px] font-bold leading-none tracking-[-1.5px]">5,000</span>
            <span className="text-sm text-[#E3EAFF]">/ month</span>
          </div>
          <div className="text-sm text-[#E3EAFF]">Per restaurant · every module included</div>
          <div className="flex flex-col gap-[9px] text-sm">
            {mobile.planPoints.map((p) => (
              <span key={p} className="flex items-center gap-2.5">
                <Icon d={icons.check} size={16} strokeWidth={3} className="shrink-0" />
                {p}
              </span>
            ))}
          </div>
          <a href="#m-demo" className="mt-1 flex h-[50px] items-center justify-center rounded-xl bg-white text-[15px] font-semibold text-brand active:scale-[0.97]">
            Start with a Free Demo
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function MobileFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const list = mobile.faqIndexes.map((i) => faqs[i]);
  return (
    <section id="m-faq" className="flex flex-col gap-3 bg-white px-4 py-10">
      <h2 className={`${h2} mb-1`}>Questions</h2>
      <div className="flex flex-col border-t border-line">
        {list.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex min-h-11 w-full items-center justify-between gap-3 px-0.5 py-[15px] text-left text-[15px] font-semibold"
              >
                <span>{f.q}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-xl leading-none text-brand">
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-[15px] pl-0.5 pr-7 text-sm leading-relaxed text-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <a href={whatsappLink()} className="mt-1 text-sm font-medium text-brand">
        More questions? Ask us on WhatsApp →
      </a>
    </section>
  );
}

function MobileDemo() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = ["Hi Snapserve, I'd like to book a demo.", `Name: ${data.get("name")}`, `Mobile: ${data.get("mobile")}`].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 700);
  }

  const input = "rounded-[10px] border-[1.5px] border-[#D6DBE8] px-[13px] py-3 text-base outline-none focus:border-brand focus:ring-4 focus:ring-brand/15";

  return (
    <section id="m-demo" className="flex flex-col gap-3.5 px-4 pb-11 pt-10">
      <h2 className={h2}>Book your free demo</h2>
      <p className="text-[14.5px] leading-relaxed text-muted">Leave your number and we&apos;ll call you.</p>
      <div className="min-h-[248px] rounded-2xl border border-line bg-white p-[18px]">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="flex flex-col gap-3">
              <label className="flex flex-col gap-1.5 text-[13px] font-medium">
                Your name
                <input name="name" type="text" required placeholder="e.g. Senthuran" className={input} />
              </label>
              <label className="flex flex-col gap-1.5 text-[13px] font-medium">
                Mobile / WhatsApp
                <input name="mobile" type="tel" required placeholder="07X XXX XXXX" className={input} />
              </label>
              <motion.button whileTap={{ scale: 0.97 }} type="submit" className="mt-1 h-[52px] rounded-xl bg-brand font-semibold text-white">
                Book a Demo
              </motion.button>
            </motion.form>
          )}
          {status === "sending" && (
            <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-3" role="status" aria-label="Sending">
              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="h-12" />
              <Skeleton className="h-3.5 w-28" />
              <Skeleton className="h-12" />
              <Skeleton className="h-[52px] rounded-xl" />
            </motion.div>
          )}
          {status === "sent" && (
            <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-2.5 py-6 text-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                className="flex size-12 items-center justify-center rounded-full bg-green-100 text-green-700"
              >
                <Icon d={icons.check} size={24} strokeWidth={2.5} />
              </motion.span>
              <div className="text-[17px] font-semibold">Thanks — we&apos;ll call you soon!</div>
              <div className="text-[13px] text-muted">Send the WhatsApp message that just opened.</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
