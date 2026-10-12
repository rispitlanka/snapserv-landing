"use client";

import { motion, useReducedMotion } from "motion/react";

const card = "rounded-xl border border-[#EEF0F5] bg-white";

const stats = [
  { label: "Total Sales", value: "LKR 26,000", cls: "" },
  { label: "Total Expenses", value: "LKR 3,600", cls: "" },
  { label: "Net Profit", value: "LKR 16,300", cls: "text-green-700" },
  { label: "Credit Pending", value: "LKR 2,326", cls: "text-orange-700" },
];

const topItems = [
  { name: "Fresh Lime Juice", sold: 25, pct: 100 },
  { name: "Chicken Burger", sold: 11, pct: 44 },
  { name: "Chicken Kottu", sold: 5, pct: 20 },
  { name: "Chicken Fried Rice", sold: 2, pct: 8 },
];

const sideMenu = ["Sales", "Expenses", "Staffs", "Suppliers", "Inventory", "Menu", "Reports", "Purchases", "Customers"];

export function DashboardMock() {
  const reduce = useReducedMotion();
  return (
    <div role="img" aria-label="Owner dashboard showing sales, expenses, net profit, monthly sales trend and top-selling items" className="flex">
      <div className="hidden w-[200px] shrink-0 flex-col gap-1 border-r border-[#EEF0F5] px-3 py-[18px] text-[13px] text-muted md:flex">
        <div className="px-2.5 pb-3.5 pt-1 font-semibold text-ink">Demo Restaurant</div>
        <div className="rounded-lg bg-brand-tint px-2.5 py-2 font-medium text-brand">Dashboard</div>
        {sideMenu.map((m) => (
          <div key={m} className="px-2.5 py-2">{m}</div>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4 bg-page p-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={`${card} p-3.5`}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="text-[11px] text-sub">{s.label}</div>
              <div className={`mt-1 text-lg font-bold md:text-xl ${s.cls}`}>{s.value}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className={`${card} p-4`}>
            <div className="text-[13px] font-semibold">Monthly Sales Trend</div>
            <svg viewBox="0 0 320 120" className="mt-2 h-[130px] w-full" aria-hidden="true">
              {[110, 70, 30].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#EEF0F5" />
              ))}
              <motion.path
                d="M0 110 L135 110 C150 110 155 70 165 68 L190 62 C205 60 210 12 222 10 C235 8 240 35 250 40 C262 48 265 108 275 110 L320 110"
                fill="none"
                stroke="#16A34A"
                strokeWidth={2.5}
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
          </div>
          <div className={`${card} flex flex-col gap-2.5 p-4`}>
            <div className="text-[13px] font-semibold">Top-Selling Items</div>
            {topItems.map((it, i) => (
              <div key={it.name}>
                <div className="flex justify-between text-xs">
                  <span>{it.name}</span>
                  <span className="text-sub">{it.sold} sold</span>
                </div>
                <div className="mt-1.5 h-1.5 rounded bg-[#EEF0F5]">
                  <motion.div
                    className="h-1.5 rounded bg-brand"
                    initial={reduce ? false : { width: 0 }}
                    animate={{ width: `${it.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = ["All", "Bun", "Juice", "Kottu", "Rice"];
const menu = [
  { name: "Chicken Kottu", price: "LKR 800.00" },
  { name: "Chicken Fried Rice", price: "LKR 900.00" },
  { name: "Fresh Lime Juice", price: "LKR 500.00", active: true },
  { name: "Chicken Burger", price: "LKR 500.00" },
];

export function PosMock() {
  return (
    <div role="img" aria-label="POS billing screen with categories, menu items and current order" className="flex min-h-[380px] flex-col gap-3 bg-page p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-semibold">
          Demo · <span className="text-green-700">Front Counter</span>
        </span>
        <span className="flex flex-wrap gap-1.5">
          {["Dine-In", "Table 4", "Waiter: Kumar"].map((c) => (
            <span key={c} className="rounded-md border border-line bg-white px-2.5 py-1">{c}</span>
          ))}
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="flex max-w-[180px] flex-[1_1_140px] flex-col gap-1.5 text-xs">
          {categories.map((c, i) => (
            <span key={c} className={`rounded-lg px-3 py-2 ${i === 0 ? "bg-brand text-white" : "border border-line bg-white"}`}>{c}</span>
          ))}
        </div>
        <div className="grid flex-[3_1_300px] content-start gap-2 [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))]">
          {menu.map((m) => (
            <div key={m.name} className={`rounded-[10px] bg-white p-3.5 ${m.active ? "border-2 border-brand" : "border border-line"}`}>
              <div className="text-[13px] font-semibold">{m.name}</div>
              <div className="mt-0.5 text-xs text-sub">{m.price}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-[2_1_220px] flex-col gap-2.5 rounded-xl border border-line bg-white p-3.5 text-[13px]">
          <div className="font-semibold">Current Order · 3 items</div>
          <div className="flex justify-between"><span>1 × Chicken Kottu</span><span>800.00</span></div>
          <div className="flex justify-between"><span>2 × Fresh Lime Juice</span><span>1,000.00</span></div>
          <div className="flex justify-between border-t border-dashed border-line pt-2.5 text-[15px] font-bold"><span>Total</span><span>LKR 1,800.00</span></div>
          <div className="grid grid-cols-2 gap-1.5 text-center text-xs">
            <span className="rounded-lg border border-line p-2">Print KOT</span>
            <span className="rounded-lg border border-line p-2">Discount</span>
          </div>
          <div className="rounded-lg bg-brand p-2.5 text-center font-semibold text-white">Pay · LKR 1,800.00</div>
        </div>
      </div>
    </div>
  );
}

const drawer = [
  { label: "Opening balance", value: "LKR 12,000.00", cls: "" },
  { label: "Cash sales (+)", value: "LKR 31,300.00", cls: "text-green-700" },
  { label: "Credit settlement cash (+)", value: "LKR 1,300.00", cls: "text-green-700" },
  { label: "Cash purchases (−)", value: "LKR 2,880.00", cls: "text-red-700" },
  { label: "Cash expenses (−)", value: "LKR 3,600.00", cls: "text-red-700" },
];

export function ShiftMock() {
  return (
    <div role="img" aria-label="Shift drawer summary with opening balance, cash sales, purchases, expenses and expected closing balance" className="flex min-h-[380px] flex-wrap gap-4 bg-page p-5">
      <div className="flex flex-[3_1_340px] flex-col gap-2.5 rounded-xl border border-line bg-white p-5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">Drawer Summary</span>
          <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">Shift Open</span>
        </div>
        {drawer.map((r) => (
          <div key={r.label} className="flex justify-between">
            <span className="text-muted">{r.label}</span>
            <span className={r.cls}>{r.value}</span>
          </div>
        ))}
        <div className="flex justify-between border-t border-line pt-3 text-base font-bold">
          <span>Expected closing</span>
          <span>LKR 38,120.00</span>
        </div>
      </div>
      <div className="grid flex-[1_1_200px] grid-cols-2 content-start gap-2.5 text-[13px]">
        {[["Register", "Front Counter"], ["Cashier", "Cashier"], ["Total orders", "27"], ["Paid orders", "21"]].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-line bg-white p-3.5">
            <div className="text-[11px] text-sub">{k}</div>
            <div className="font-semibold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
