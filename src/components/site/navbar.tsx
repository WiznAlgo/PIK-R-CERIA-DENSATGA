import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ceria-ink bg-ceria-krem/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ceria-ink/75 transition hover:text-ceria-ink hover:underline hover:decoration-ceria-kuning hover:decoration-4 hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/konselor">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Pilih Konselor
            </Link>
          </Button>
          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border-2 border-ceria-ink bg-transparent text-ceria-ink transition hover:bg-ceria-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Buka menu navigasi</span>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-[1.5rem] border-2 border-ceria-ink bg-ceria-krem p-3 shadow-[0_2px_0_var(--tinta)]">
              <nav className="grid gap-1" aria-label="Navigasi mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 font-display text-xl text-ceria-ink hover:bg-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full">
                  <Link href="/konselor">
                    Pilih Konselor
                  </Link>
                </Button>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
