import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { footerLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ceria-ink/20 bg-[#f5f5f5] text-ceria-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-ceria-dark">
              {site.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-ceria-ink/65">
              Tempat curhat aman buat siswa, dikelola oleh siswa untuk siswa.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold">Menu cepat</p>
            <div className="grid gap-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-ceria-ink/65 hover:text-ceria-dark"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold">Kontak resmi</p>
            <div className="grid gap-2 text-sm text-ceria-ink/65">
              <a
                href={site.adminChat}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-ceria-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WA Admin Wisnu
              </a>
              <a
                href="https://wa.me/6282131175512?text=Halo%20Kak%20Khansa,%20saya%20dari%20web%20PIK-R%20CERIA."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-ceria-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WA Koor Khansa
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-2xl bg-white p-4 text-xs leading-6 text-ceria-ink/65 ring-1 ring-ceria-ink/10">
          <strong className="text-ceria-ink">Disclaimer:</strong> Layanan ini
          adalah konseling sebaya, bukan pengganti konsultasi psikolog
          profesional. Untuk kondisi serius, segera hubungi tenaga profesional
          atau Guru BK.
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-ceria-ink/10 pt-6 text-xs text-ceria-ink/60 sm:flex-row">
          <p>© 2026 PIK-R CERIA DENSATGA — Dikelola oleh Siswa untuk Siswa.</p>
          <p>Dibuat untuk teman-teman SMA.</p>
        </div>
      </div>
    </footer>
  );
}
