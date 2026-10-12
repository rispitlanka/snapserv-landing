import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy policy — Snapserve" };

// TODO: replace this placeholder with your real privacy policy.
export default function Privacy() {
  return (
    <main className="mx-auto max-w-[760px] px-5 py-20">
      <a href="/" className="text-sm font-medium text-brand hover:underline">← Back to Snapserve</a>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">Privacy policy</h1>
      <p className="mt-6 leading-relaxed text-muted">
        [Your privacy policy goes here — what data Snapserve collects (for example, names and phone numbers from the
        demo form), how it is used and stored, and how people can ask for it to be deleted.]
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Questions? Email <a href="mailto:info@rispit.com" className="text-brand hover:underline">info@rispit.com</a>.
      </p>
    </main>
  );
}
