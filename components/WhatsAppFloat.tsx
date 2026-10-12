"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "./ui";
import { icons, whatsappLink } from "@/lib/content";

/** Round WhatsApp button on desktop, sticky "Book a demo" bar on phones. */
export function WhatsAppFloat() {
  const reduce = useReducedMotion();
  return (
    <>
      <motion.a
        href={whatsappLink()}
        aria-label="Chat with us on WhatsApp"
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 16 }}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-6 right-6 z-50 hidden size-[60px] items-center justify-center rounded-full bg-wa text-white shadow-[0_10px_24px_-6px_rgba(18,140,74,0.55)] md:flex"
      >
        <Icon d={icons.whatsapp} size={28} />
      </motion.a>

      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-line bg-white px-4 py-3 shadow-[0_-8px_20px_-10px_rgba(20,44,142,0.2)] md:hidden">
        <a
          href={whatsappLink()}
          aria-label="Chat with us on WhatsApp"
          className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-wa text-white"
        >
          <Icon d={icons.whatsapp} size={24} />
        </a>
        <a href="#m-demo" className="flex min-h-[52px] flex-1 items-center justify-center rounded-xl bg-brand font-semibold text-white">
          Book a Free Demo
        </a>
      </div>
    </>
  );
}
