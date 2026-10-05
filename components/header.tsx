"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 p-6 md:px-12 md:py-8 pointer-events-none">
      <Link
        href="#hero"
        className="pointer-events-auto inline-block text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
      >
        海悅廣告 x SPARKO
      </Link>
    </header>
  );
}
