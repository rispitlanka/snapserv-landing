// All page copy and data lives here, so text can be edited without touching layout.

export const WHATSAPP_NUMBER = "94775527937";
export const CONTACT_EMAIL = "info@rispit.com";

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Stroke icon paths (24×24 viewBox)
export const icons = {
  arrowRight: "M5 12h14 M13 6l6 6-6 6",
  check: "M5 12l5 5 9-10",
  plus: "M12 5v14 M5 12h14",
  whatsapp: "M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z",
  gift: "M3 11h18 M5 11v9h14v-9 M12 7v13 M12 7c-2-4-7-3-6 0 M12 7c2-4 7-3 6 0",
};

export type Feature = { title: string; icon: string; text: string };
export type FeatureGroup = { name: string; sub: string; items: Feature[] };

export const featureGroups: FeatureGroup[] = [
  {
    name: "Front of house",
    sub: "Serve faster at the counter and the table",
    items: [
      { title: "Point of Sale", icon: "M3 4h18v12H3z M8 20h8 M12 16v4", text: "Dine-in, takeaway and delivery billing with a category menu grid and search." },
      { title: "Multi-counter registers", icon: "M4 6h16v5H4z M6 11v8 M18 11v8 M4 19h16", text: "Run several counters at once. Each terminal is locked to one cashier per shift." },
      { title: "Tables & waiters", icon: "M3 10h18 M5 10v10 M19 10v10 M7 6h10", text: "Set up your floor tables and assign a waiter to every dine-in order." },
      { title: "Delivery orders", icon: "M3 7h11v9H3z M14 10h4l3 3v3h-7 M7 19a2 2 0 1 0 0-.01 M17 19a2 2 0 1 0 0-.01", text: "Take delivery orders alongside dine-in and takeaway from the same screen." },
      { title: "Pending & cleared orders", icon: "M12 7v5l3 2 M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18", text: "See which bills are still open and which are paid, with full order history." },
      { title: "Discounts & extra charges", icon: "M19 5 5 19 M7 7h.01 M17 17h.01", text: "Apply discounts or extra charges to any order, with an optional service charge." },
    ],
  },
  {
    name: "Kitchen & menu",
    sub: "Keep the kitchen and the menu in step",
    items: [
      { title: "Menu management", icon: "M7 3v8 M5 3v4a2 2 0 0 0 4 0V3 M7 11v10 M17 3c-2 2-2 6 0 8v10", text: "Add dishes with prices and switch items on or off instantly." },
      { title: "Menu categories", icon: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z", text: "Group dishes into categories so cashiers find them in one tap." },
      { title: "Variants & add-ons", icon: "M12 3v18 M3 12h18", text: "Sizes, portions and extras priced per item — no duplicate menu entries." },
      { title: "Recipes & ingredients", icon: "M9 3h6 M10 3v6L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-10V3", text: "Link each dish to its ingredients so every sale deducts stock automatically." },
      { title: "Kitchen order tickets", icon: "M6 9V3h12v6 M4 9h16v8H4z M7 14h10v7H7z", text: "Print a KOT the moment an order is placed so the kitchen starts cooking." },
      { title: "Menu photos on POS", icon: "M3 5h18v14H3z M3 15l5-5 4 4 3-3 6 6 M15 9h.01", text: "Show item photos in the menu grid to help new cashiers." },
    ],
  },
  {
    name: "Stock & purchasing",
    sub: "Know what you have and what to order",
    items: [
      { title: "Inventory items", icon: "M3 7l9-4 9 4-9 4z M3 7v10l9 4 9-4V7 M12 11v10", text: "Track every ingredient and packaging item with its current stock and price." },
      { title: "Low-stock alerts", icon: "M12 3 2 20h20z M12 10v4 M12 17h.01", text: "Get warned on the dashboard before you run out of anything." },
      { title: "Brands & sub-categories", icon: "M3 3h8l10 10-8 8L3 11z M7 7h.01", text: "Organise stock by brand, category and sub-category." },
      { title: "Purchase invoices", icon: "M6 2h12v20l-3-2-3 2-3-2-3 2z M9 7h6 M9 11h6 M9 15h4", text: "Record every purchase — cash or credit — and update stock in one step." },
      { title: "Supplier management", icon: "M6 6h15l-2 9H8z M6 6 5 3H2 M9 20h.01 M18 20h.01", text: "Keep all supplier contacts and what each one supplies in one list." },
      { title: "Supplier settlements", icon: "M3 7h18v12H3z M3 11h18 M15 15h3", text: "See outstanding credit purchases and settle supplier balances." },
    ],
  },
  {
    name: "Money & people",
    sub: "Control every rupee and every shift",
    items: [
      { title: "Shifts & cash drawer", icon: "M3 7h18v12H3z M3 11h18 M8 15h3", text: "Opening balance, cash in and out, and the expected closing amount for every shift." },
      { title: "Payment methods", icon: "M2 6h20v12H2z M2 10h20 M6 15h4", text: "Cash, card, bank transfer and credit — tracked separately in every report." },
      { title: "Expenses", icon: "M12 2v20 M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", text: "Log daily expenses so they show up in your profit and loss." },
      { title: "Petty cash", icon: "M4 7h16v13H4z M8 7V4h8v3 M12 11v5 M9.5 13.5h5", text: "Manage a petty-cash float with entries, reimbursements and a running balance." },
      { title: "Customers & credit", icon: "M16 21v-2a4 4 0 0 0-8 0v2 M12 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8", text: "Customer profiles, credit sales and settlement of outstanding bills." },
      { title: "Staff & roles", icon: "M9 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8 M2 21v-1a7 7 0 0 1 14 0v1 M19 8v6 M22 11h-6", text: "Admin and cashier roles, so each person sees only what they need." },
    ],
  },
  {
    name: "Setup & control",
    sub: "Make Snapserve fit your restaurant",
    items: [
      { title: "Loyalty", icon: "M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8z", text: "Reward regular customers and bring them back more often." },
      { title: "Restaurant branding", icon: "M12 3a9 9 0 1 0 0 18c1 0 2-1 2-2s-1-1-1-2 1-2 2-2h2a4 4 0 0 0 4-4c0-4-4-8-9-8z M7.5 11h.01 M10 7h.01 M15 7h.01", text: "Your logo, brand colour and details on screens and bills." },
      { title: "Print settings", icon: "M6 9V3h12v6 M4 9h16v8H4z M7 14h10v7H7z", text: "Choose hard copy, WhatsApp soft copy, or ask the cashier every time." },
      { title: "Assets register", icon: "M2 5h14v10H2z M18 9h4v10h-4z M6 19h8", text: "Keep a record of your kitchen equipment and restaurant assets." },
      { title: "Notes", icon: "M5 3h14v18H5z M9 8h6 M9 12h6 M9 16h3", text: "Leave shift notes and reminders for the team." },
      { title: "Business & tax details", icon: "M4 21V7l8-4 8 4v14 M9 21v-6h6v6", text: "Store your business registration number and tax ID for your records." },
    ],
  },
];

export const featureExtras = [
  "Dark mode", "CSV export", "PDF export", "Refund tracking",
  "Date-range filters", "Order search", "Weekly sales summary", "Monthly sales trend",
];

export const reports = [
  { t: "Sales report", icon: "M3 3v18h18 M7 15l4-4 3 3 5-6", d: "Orders, net sales and payment-method split by register." },
  { t: "Profit & Loss", icon: "M12 2v20 M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", d: "Sales, purchases, expenses and net profit for any period." },
  { t: "Customer sales", icon: "M16 21v-2a4 4 0 0 0-8 0v2 M12 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8", d: "Who buys what, and how much each customer owes." },
  { t: "Product summary", icon: "M3 20h18 M6 20V10 M11 20V4 M16 20v-7 M21 20v-3", d: "Top-selling items by quantity and revenue." },
  { t: "Inventory usage", icon: "M3 7l9-4 9 4-9 4z M3 7v10l9 4 9-4V7 M12 11v10", d: "How much stock each dish actually consumed." },
  { t: "Purchase report", icon: "M6 6h15l-2 9H8z M6 6 5 3H2 M9 20h.01 M18 20h.01", d: "Every supplier invoice, paid or on credit." },
  { t: "Expense report", icon: "M6 2h12v20l-3-2-3 2-3-2-3 2z M9 7h6 M9 11h6 M9 15h4", d: "Where your money went, category by category." },
  { t: "Closed registers", icon: "M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4", d: "Full history of every shift and its cash count." },
];

export const steps = [
  { n: "01", t: "Book a demo", icon: "M4 5h16v16H4z M4 10h16 M9 3v4 M15 3v4 M9 15l2 2 4-4", d: "We walk you through Snapserve using your own menu and workflow." },
  { n: "02", t: "We set you up", icon: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z", d: "Menu, tables, registers, staff, suppliers and print settings — configured with you." },
  { n: "03", t: "Start serving", icon: "M5 12l5 5L20 7", d: "Cashiers bill from day one while you watch sales and stock from the dashboard." },
];

// PLACEHOLDERS — replace with real customer quotes before launch.
export const testimonials = [
  { init: "O1", name: "[Owner name]", role: "[Restaurant name], [City]", text: "[A short quote from a real customer — e.g. how closing the register got faster after switching.]" },
  { init: "O2", name: "[Owner name]", role: "[Restaurant name], [City]", text: "[A short quote about stock — e.g. catching low-stock items before the dinner rush.]" },
  { init: "O3", name: "[Owner name]", role: "[Restaurant name], [City]", text: "[A short quote about reports — e.g. finally knowing real monthly profit.]" },
];

// PLACEHOLDERS — dummy restaurants. Swap for real logos (put image files in /public/logos).
export const brands = [
  { name: "Jaffna Spice House", font: "serif", icon: "M12 3c-4 3-6 6-6 9a6 6 0 0 0 12 0c0-3-2-6-6-9z M12 9v8" },
  { name: "Kottu Corner", font: "condensed", icon: "M4 10h16 M6 10l2 10h8l2-10 M9 6l1 4 M15 6l-1 4" },
  { name: "Lagoon Bites", font: "sans", icon: "M2 12c3-4 7-4 10 0s7 4 10 0 M2 17c3-4 7-4 10 0s7 4 10 0" },
  { name: "Nallur Café", font: "script", icon: "M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z M17 10h2a2 2 0 0 1 0 4h-2 M8 2v3 M12 2v3" },
  { name: "The Curry Leaf", font: "serif", icon: "M5 19C5 10 11 4 20 4c0 9-6 15-15 15z M5 19 14 10" },
  { name: "Palmyrah Grill", font: "condensed", icon: "M12 22V10 M12 10c-3-1-6 0-8 2 M12 10c3-1 6 0 8 2 M12 10c-1-3-3-5-6-6 M12 10c1-3 3-5 6-6" },
  { name: "Seabreeze Kitchen", font: "sans", icon: "M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z M12 12v9 M8 21h8" },
  { name: "Mango Tree Bistro", font: "script", icon: "M12 6c4 0 7 3 7 7s-3 8-7 8-7-4-7-8 3-7 7-7z M12 6c0-2 1-3 3-4" },
  { name: "Vanni Kitchen", font: "condensed", icon: "M3 11h18 M5 11a7 7 0 0 0 14 0 M12 4v3 M9 5l1 2 M15 5l-1 2" },
] as const;

export const planPoints = [
  "POS with tables, waiters, KOT and delivery",
  "Multi-counter registers and shift control",
  "Menu with variants, add-ons and recipes",
  "Inventory, purchases and supplier credit",
  "Expenses, petty cash and customer credit",
  "All 8 reports with CSV & PDF export",
  "WhatsApp and printed bills",
  "Setup and staff training — no setup fee",
  "7-day free trial · cancel anytime",
];

// ── Phone layout (shorter copy) ─────────────────────────────────────────────
export const mobile = {
  // Short tab names for the feature filter, in the same order as featureGroups.
  groupNames: ["Front of house", "Kitchen & menu", "Stock", "Money & staff", "Setup"],
  steps: [
    { n: "1", t: "Book a demo", d: "We show you Snapserve with your own menu." },
    { n: "2", t: "We set you up", d: "Menu, tables, staff and printers — done with you." },
    { n: "3", t: "Start serving", d: "Bill from day one and watch sales live." },
  ],
  planPoints: ["7-day free trial", "No setup fee", "Setup & staff training", "Cancel anytime · save yearly"],
  logoCount: 5, // how many of `brands` to show on phones
  faqIndexes: [0, 2, 1, 6], // which `faqs` to show on phones
};

// Answers in [brackets] are placeholders — fill them in before launch.
export const faqs = [
  { q: "Is there a contract or a free trial?", a: "No contract. Try Snapserve free for 7 days, then it is LKR 5,000 per month per restaurant — no setup fee, and you can cancel anytime. Paying yearly works out cheaper; ask us for the yearly price." },
  { q: "Does Snapserve work if the internet goes down?", a: "[Your answer — e.g. whether billing keeps working offline and syncs when the connection returns.]" },
  { q: "What devices and printers do I need?", a: "Any laptop, desktop or tablet with a modern browser runs Snapserve. Receipt printers print KOT and bills — [list supported printer models]." },
  { q: "Is my data safe and backed up?", a: "[Your answer — e.g. where data is stored, how often it is backed up, and who can access it.]" },
  { q: "Is Snapserve available in Tamil or Sinhala?", a: "[Your answer — which languages the app and printed bills support today.]" },
  { q: "How long does setup and staff training take?", a: "We set up your menu, tables, registers, staff and print settings with you, then train your cashiers — with no setup fee. [Typical time to go live.]" },
  { q: "Can cashiers see sales reports and profit?", a: "No. Cashiers only see their sales, customers, petty cash and notes. Reports, inventory, purchases and settings stay with the owner or admin." },
];
