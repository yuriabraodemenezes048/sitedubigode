"use client";

import { whatsappUrl } from "@/lib/site";

function WhatsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.65.14-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.57-.89-2.15-.24-.56-.48-.48-.65-.49h-.56c-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.42 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12.01 2C6.5 2 2.02 6.48 2.02 11.99c0 1.76.46 3.45 1.34 4.95L2 22l5.19-1.35a9.9 9.9 0 004.82 1.23h.01c5.51 0 9.99-4.48 9.99-9.99C22.01 6.48 17.53 2 12.01 2z" />
    </svg>
  );
}

export function WhatsappFab() {
  return (
    <a
      href={whatsappUrl("Oi! Vim pelo site e quero um orçamento 🍹")}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-display text-sm font-semibold text-white shadow-[0_10px_0_-3px_#1a9e4b] transition-transform duration-200 ease-pop hover:-translate-y-0.5 active:scale-95 sm:px-5"
    >
      <WhatsIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Bora brindar?</span>
    </a>
  );
}
