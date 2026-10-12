import type { ReactNode } from "react";

export function Icon({
  d,
  size = 20,
  strokeWidth = 2,
  className,
}: {
  d: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} aria-hidden="true" />;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-3.5 text-center">
      <span className={`text-[13px] font-semibold uppercase tracking-[1.5px] ${light ? "text-white" : "text-brand"}`}>
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[42px]">{title}</h2>
      {text && (
        <p className={`max-w-2xl text-[17px] leading-relaxed ${light ? "text-[#E3EAFF]" : "text-muted"}`}>{text}</p>
      )}
    </div>
  );
}
