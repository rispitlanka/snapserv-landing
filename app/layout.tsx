import type { Metadata } from "next";
import { Poppins, Playfair_Display, Oswald, Pacifico } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Only used by the placeholder restaurant logos — remove once real logo images are in.
const playfair = Playfair_Display({ subsets: ["latin"], weight: "700", variable: "--font-serif-logo", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: "600", variable: "--font-condensed-logo", display: "swap" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-script-logo", display: "swap" });

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your live domain so WhatsApp/Facebook link previews work.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Snapserve — Complete Restaurant Management System",
  description:
    "POS, kitchen tickets, inventory, suppliers, shifts and profit reports in one simple system. LKR 5,000/month per restaurant, 7-day free trial, no setup fee. Made in Jaffna.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Snapserve — Complete Restaurant Management System",
    description: "Faster billing. Fewer losses. Know your profit every day. 7-day free trial.",
    images: ["/logo.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${oswald.variable} ${pacifico.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
