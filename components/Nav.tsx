import Image from "next/image";
import { Icon } from "./ui";
import { icons, whatsappLink } from "@/lib/content";

const links = [
  { href: "#features", label: "Features" },
  { href: "#reports", label: "Reports" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-12">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <Image src="/logo.png" alt="" width={42} height={42} priority />
          <span className="text-xl font-bold tracking-tight">Snapserve</span>
        </a>
        <nav className="hidden gap-7 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href={whatsappLink()}
            aria-label="Chat with us on WhatsApp"
            className="hidden size-11 items-center justify-center rounded-[10px] border-[1.5px] border-[#D6DBE8] text-wa transition-colors hover:border-wa md:flex"
          >
            <Icon d={icons.whatsapp} />
          </a>
          <a
            href="#demo"
            className="inline-flex min-h-11 items-center rounded-[10px] bg-brand px-5 text-[15px] font-semibold text-white transition hover:brightness-90"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
