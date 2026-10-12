import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Strip, Reports, Steps, Testimonials, Pricing, Footer } from "@/components/Sections";
import { Logos } from "@/components/Logos";
import { Faq } from "@/components/Faq";
import { DemoForm } from "@/components/DemoForm";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobilePage } from "@/components/MobilePage";

export default function Home() {
  return (
    <>
      {/* Tablet & desktop (768px and up) */}
      <div className="hidden md:block">
        <Nav />
        <main>
          <Hero />
          <Strip />
          <Features />
          <Reports />
          <Steps />
          <Testimonials />
          <Logos />
          <Pricing />
          <Faq />
          <DemoForm />
        </main>
        <Footer />
      </div>

      {/* Phones (under 768px) — the simpler layout */}
      <div className="md:hidden">
        <MobilePage />
      </div>

      <WhatsAppFloat />
    </>
  );
}
