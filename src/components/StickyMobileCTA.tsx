"use client";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold/20 bg-gold md:hidden">
      <div className="flex items-center justify-center gap-3 px-4 py-3">
        <a
          href="tel:15612466544"
          className="flex-1 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-navy/90"
        >
          Call Now
        </a>
        <a
          href="/contact"
          className="flex-1 rounded-full border-2 border-navy px-4 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
