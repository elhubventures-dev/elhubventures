import Link from "next/link";

export function StickyCta() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 left-5 z-30 hidden rounded-sm bg-gold px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#fffcf7] shadow-sm hover:bg-[#fffcf7] hover:text-[#12151c] sm:inline-flex"
    >
      Get proposal in 48 hours
    </Link>
  );
}
