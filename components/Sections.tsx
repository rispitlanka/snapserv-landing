import Image from "next/image";
import { Icon, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { CONTACT_EMAIL, icons, planPoints, reports, steps, testimonials } from "@/lib/content";

const stripItems = ["Multi-counter POS", "Live inventory", "Shift & cash control", "WhatsApp bills", "Profit & loss reports"];

export function Strip() {
  return (
    <section className="bg-brand px-5 py-7 text-white md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-5 text-[15px] font-medium">
        {stripItems.map((s) => (
          <span key={s} className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-white" />
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Reports() {
  return (
    <section id="reports" className="bg-brand px-5 py-24 text-white md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Reports"
            title="See your real profit, not a guess"
            text="Filter any date range and register. Export every report to CSV or PDF for your accountant."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col gap-1.5 rounded-[14px] border border-white/20 bg-white/10 p-[22px] transition hover:-translate-y-1 hover:bg-white/15">
                <span className="mb-2 flex size-10 items-center justify-center rounded-[10px] bg-white/20">
                  <Icon d={r.icon} />
                </span>
                <div className="text-base font-semibold">{r.t}</div>
                <div className="text-[13.5px] leading-relaxed text-[#E3EAFF]">{r.d}</div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.12}>
            <a href="#demo" className="group flex h-full flex-col gap-1.5 rounded-[14px] bg-white p-[22px] text-brand transition hover:-translate-y-1">
              <span className="mb-2 flex size-10 items-center justify-center rounded-[10px] bg-brand-tint">
                <Icon d={icons.plus} />
              </span>
              <span className="text-base font-semibold">And many more reports</span>
              <span className="text-[13.5px] leading-relaxed text-muted">
                Weekly and monthly sales, pending orders, petty cash and more — see them all in your demo{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section id="how" className="px-5 py-24 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Up and running in three steps" />
        </Reveal>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-11 hidden border-t-[2.5px] border-dashed border-brand-line md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="group relative flex flex-col items-center gap-3.5 px-3 text-center">
                <span className="flex size-[88px] items-center justify-center rounded-full border-[6px] border-page bg-brand-tint text-brand shadow-[0_0_0_2px_#BFCDFB] transition-all duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-white">
                  <Icon d={s.icon} size={32} />
                </span>
                <span className="text-xs font-bold tracking-[1.6px] text-brand">STEP {s.n}</span>
                <h3 className="text-[21px] font-semibold">{s.t}</h3>
                <p className="max-w-[300px] text-[15px] leading-relaxed text-muted">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white px-5 pb-10 pt-24 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <Reveal>
          <SectionHeading eyebrow="From restaurant owners" title="What owners say after switching" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((q, i) => (
            <Reveal key={q.init} delay={i * 0.08}>
              <figure className="flex h-full flex-col gap-5 rounded-[18px] bg-page p-7">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="#BFCDFB" aria-hidden="true">
                  <path d="M0 24V14C0 6 4 1 12 0l1 4c-4 1-6 4-6 8h6v12zm18 0V14c0-8 4-13 12-14l1 4c-4 1-6 4-6 8h6v12z" />
                </svg>
                <blockquote className="flex-1 text-base leading-relaxed">{q.text}</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#DCE4FD] font-bold text-brand">{q.init}</span>
                  <span className="flex flex-col">
                    <span className="text-[15px] font-semibold">{q.name}</span>
                    <span className="text-[13px] text-sub">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-24 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-11">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="One simple price. Everything included."
            text="One price per restaurant. No tiers, no hidden extras, no setup fee — and you can cancel anytime."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto flex w-full max-w-[960px] flex-wrap overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(35,80,230,0.35)]">
            <div className="flex flex-[1_1_340px] flex-col gap-3.5 bg-brand p-8 text-white md:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-bold tracking-wide text-brand">7-DAY FREE TRIAL</span>
                <span className="rounded-full bg-white/20 px-3.5 py-1.5 text-[12.5px] font-bold tracking-wide">NO SETUP FEE</span>
              </div>
              <div className="mt-1 text-xl font-semibold">Snapserve — full system</div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-[22px] font-semibold">LKR</span>
                <span className="text-6xl font-bold leading-none tracking-[-2px]">5,000</span>
                <span className="text-base text-[#E3EAFF]">/ month per restaurant</span>
              </div>
              <p className="text-[15px] leading-relaxed text-[#E3EAFF]">Every module and every report for one flat price. Cancel anytime.</p>
              <div className="flex items-center gap-2.5 rounded-xl border border-white/30 bg-white/15 px-3.5 py-3 text-sm">
                <Icon d={icons.gift} size={18} className="shrink-0" />
                <span><b>Pay yearly and save</b> — ask us about the yearly price.</span>
              </div>
              <a href="#demo" className="mt-auto min-h-12 rounded-xl bg-white p-3.5 text-center font-semibold text-brand transition hover:brightness-95">
                Start with a Free Demo
              </a>
            </div>
            <div className="flex flex-[1_1_340px] flex-col gap-3.5 p-8 md:p-10">
              <div className="text-[15px] font-semibold">Everything you get</div>
              {planPoints.map((p) => (
                <span key={p} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-px flex size-[22px] shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <Icon d={icons.check} size={13} strokeWidth={3} />
                  </span>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-5 py-7 pb-28 md:px-12 md:pb-7">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 text-sm text-sub">
        <span className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Snapserve logo" width={32} height={32} />
          <span>© 2026 Snapserve A Product of Rispit | Build in Jaffna with ❤️</span>
        </span>
        <span className="flex flex-wrap gap-6">
          {/* TODO: point this at your real privacy policy page */}
          <a href="/privacy" className="text-brand hover:underline">Privacy policy</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
        </span>
      </div>
    </footer>
  );
}
