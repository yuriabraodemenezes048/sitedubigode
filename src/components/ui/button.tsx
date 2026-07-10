"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "sun" | "whats" | "ink" | "outline";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-transform duration-200 ease-pop active:scale-95 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60 select-none hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-tangerine text-paper shadow-[0_10px_0_-2px_#c9500f] hover:shadow-[0_12px_0_-2px_#c9500f]",
  sun: "bg-sun text-ink shadow-[0_10px_0_-2px_#d99a12] hover:shadow-[0_12px_0_-2px_#d99a12]",
  whats: "bg-[#25D366] text-white shadow-[0_10px_0_-2px_#1a9e4b] hover:shadow-[0_12px_0_-2px_#1a9e4b]",
  ink: "bg-ink text-paper hover:bg-graphite",
  outline: "border-[2.5px] border-ink text-ink hover:bg-ink hover:text-paper",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base sm:h-16 sm:px-10 sm:text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  external,
  ...props
}: CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="h-5 w-5 transition-transform duration-200 ease-pop group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </>
  );

  const cls = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...(props as object)}>
      {content}
    </Link>
  );
}

export const ButtonTag = forwardRef<
  HTMLButtonElement,
  CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ButtonTag(
  { variant = "primary", size = "md", arrow = false, className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="h-5 w-5 transition-transform duration-200 ease-pop group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </button>
  );
});
