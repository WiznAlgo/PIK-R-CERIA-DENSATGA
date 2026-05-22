import Link from "next/link";
import Image from "next/image";

import { site } from "@/lib/site-data";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska focus-visible:ring-offset-2"
      aria-label="Kembali ke Beranda PIK-R CERIA DENSATGA"
    >
      <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-ceria-ink bg-ceria-kuning shadow-[0_2px_0_var(--tinta)]">
        <Image
          src={site.logoUrl}
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="leading-tight">
        <p className="font-display text-lg font-semibold tracking-tight text-ceria-ink sm:text-xl">
          PIK-R <em className="font-medium">Ceria</em>
        </p>
        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-ceria-ink/60">
          Densatga
        </p>
      </div>
    </Link>
  );
}
