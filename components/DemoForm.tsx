"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Icon, Skeleton } from "./ui";
import { Reveal } from "./Reveal";
import { icons, whatsappLink } from "@/lib/content";

type Status = "idle" | "sending" | "sent";

const inputCls =
  "rounded-[10px] border-[1.5px] border-[#D6DBE8] px-3.5 py-3 text-[15px] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");

  // No backend needed: the request is sent to your WhatsApp as a pre-filled message.
  // Swap this for a fetch() to your own API or form service if you prefer.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "Hi Snapserve, I'd like to book a demo.",
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("mobile")}`,
      `Best time to call: ${data.get("time")}`,
    ].join("\n");
    // Open WhatsApp straight away (inside the click) so pop-up blockers allow it.
    window.open(whatsappLink(text), "_blank", "noopener");
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <section id="demo" className="px-5 py-24 md:px-12">
      <Reveal>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 rounded-[28px] bg-brand px-5 py-8 text-white md:p-14">
          <div className="flex flex-[1_1_380px] flex-col gap-[18px]">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[42px]">Book your free demo</h2>
            <p className="text-[17px] leading-relaxed text-[#E3EAFF]">
              Leave your number and we&apos;ll call you at a time that suits you — or message us on WhatsApp right now.
            </p>
            <div className="flex flex-col gap-2.5 text-[15px] text-[#E3EAFF]">
              <span>✓&nbsp; Live walkthrough of POS, inventory and reports</span>
              <span>✓&nbsp; Setup help for your menu and counters</span>
              <span>✓&nbsp; 7-day free trial, then cancel anytime</span>
            </div>
            <a href={whatsappLink()} className="mt-1.5 inline-flex items-center gap-2.5 self-start rounded-xl bg-wa px-6 py-3.5 font-semibold text-white transition hover:bg-wa-dark">
              <Icon d={icons.whatsapp} size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="min-h-[360px] flex-[1_1_360px] rounded-[20px] bg-white p-8 text-ink">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                  <label className="flex flex-col gap-1.5 text-[13.5px] font-medium">
                    Your name
                    <input name="name" type="text" required placeholder="e.g. Senthuran" className={inputCls} />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[13.5px] font-medium">
                    Mobile / WhatsApp
                    <input name="mobile" type="tel" required placeholder="07X XXX XXXX" className={inputCls} />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[13.5px] font-medium">
                    <span>
                      Best time to call <span className="font-normal text-sub">(optional)</span>
                    </span>
                    <select name="time" className={`${inputCls} bg-white`}>
                      <option>Any time</option>
                      <option>Morning (9am – 12pm)</option>
                      <option>Afternoon (12pm – 4pm)</option>
                      <option>Evening (4pm – 7pm)</option>
                    </select>
                  </label>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    className="min-h-12 rounded-xl bg-brand p-3.5 font-semibold text-white transition hover:brightness-90"
                  >
                    Book a Demo
                  </motion.button>
                </motion.form>
              )}

              {status === "sending" && (
                <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4" role="status" aria-label="Sending">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <Skeleton className="h-3.5 w-28" />
                      <Skeleton className="h-12" />
                    </div>
                  ))}
                  <Skeleton className="h-12 rounded-xl" />
                </motion.div>
              )}

              {status === "sent" && (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-7 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                    className="flex size-14 items-center justify-center rounded-full bg-green-100 text-green-700"
                  >
                    <Icon d={icons.check} size={28} strokeWidth={2.5} />
                  </motion.span>
                  <div className="text-xl font-semibold">Thanks — we&apos;ll call you soon!</div>
                  <div className="text-sm text-muted">Send the WhatsApp message that just opened and we&apos;ll ring you in the time slot you picked.</div>
                  <button onClick={() => setStatus("idle")} className="mt-2 text-sm font-medium text-brand hover:underline">
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
