import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  MessageCircleHeart,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  benefits,
  homepageStats,
  pageHighlights,
  site,
} from "@/lib/site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="paper-dots pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="organic-blob pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] bg-ceria-kuning opacity-70" />
        <div className="organic-blob-alt pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-72 w-72 bg-ceria-coral opacity-25" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-12 gap-y-10 px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:gap-x-8 lg:pb-28 lg:pt-20">
          <div className="col-span-12 mb-2 overflow-hidden border-y-2 border-ceria-ink py-2">
            <div className="ticker flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-ceria-ink">
              {Array.from({ length: 2 }).map((_, index) => (
                <span key={index} className="flex items-center gap-10">
                  <span>★ Curhat tanpa drama</span>
                  <span>✦ Privasi 100%</span>
                  <span>♡ Konselor sebaya</span>
                  <span>☻ Gratis</span>
                  <span>✿ Tanpa hakim</span>
                  <span>★ Curhat tanpa drama</span>
                  <span>✦ Privasi 100%</span>
                  <span>♡ Konselor sebaya</span>
                  <span>☻ Gratis</span>
                  <span>✿ Tanpa hakim</span>
                </span>
              ))}
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-3 lg:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ceria-ink/60">
              Vol. 01 — Edisi Pertama
            </p>
            <p className="mt-3 font-display text-base italic text-ceria-ink/80">
              “Ruang aman buat kamu yang lagi nggak baik-baik aja.”
            </p>
            <div className="mt-5 h-px w-12 bg-ceria-ink" />
            <p className="mt-5 text-sm leading-6 text-ceria-ink/70">
              Sebuah surat terbuka dari PIK-R{" "}
              <span className="font-semibold">CERIA DENSATGA</span> buat siapapun
              yang lagi butuh tempat cerita.
            </p>
          </aside>

          <div className="col-span-12 lg:col-span-9">
            <h1 className="font-display text-[clamp(2.6rem,9vw,6.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-ceria-ink">
              Cerita kamu,
              <br />
              <span className="font-medium italic">aman</span>{" "}
              <span className="font-hand text-[1.1em] text-ceria-dark">
                di sini.
              </span>
              <br />
              <span className="marker font-medium">Tumbuh bareng</span>
              <br />
              tanpa <span className="italic">dihakimi.</span>
            </h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-12">
              <p className="text-base leading-8 text-ceria-ink/80 sm:col-span-7 sm:text-lg">
                PIK-R CERIA DENSATGA — ruang konseling sebaya{" "}
                <span className="font-semibold">SMAN 3 KEDIRI</span>. Dengerin
                cerita akademik, percintaan, sampai overthinking.
                Konsultasi awal online via Admin, lanjutan offline. Rahasia,
                gratis, dan dijaga.
              </p>

              <div className="flex flex-col gap-3 sm:col-span-5">
                <Button asChild size="lg">
                  <a href={site.adminWa} target="_blank" rel="noreferrer">
                    <MessageCircleHeart className="h-5 w-5" aria-hidden="true" />
                    Mulai Curhat via Admin
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/modul">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                    Lihat Modul PIK-R
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.label}
                  className={`rounded-[1.5rem] border-2 border-ceria-ink bg-white p-4 shadow-[0_2px_0_var(--tinta)] ${
                    index === 1
                      ? "sm:translate-y-4 sm:rotate-1"
                      : "sm:-rotate-1"
                  }`}
                >
                  <benefit.icon
                    className="mb-3 h-6 w-6 text-ceria-dark"
                    aria-hidden="true"
                  />
                  <p className="font-display text-2xl leading-none text-ceria-ink">
                    {benefit.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-4 border-y-2 border-ceria-ink py-5 sm:grid-cols-4">
              {homepageStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon
                    className="h-5 w-5 text-ceria-coral"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-3xl leading-none text-ceria-ink">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ceria-ink/60">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ceria-ink bg-white px-5 py-14 sm:px-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge>Mulai dari sini</Badge>
              <h2 className="mt-3 font-display text-4xl font-light tracking-[-0.03em] text-ceria-ink sm:text-5xl">
                Buka bab yang kamu butuh.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-ceria-ink/70">
              Alurnya dibuat kayak zine kecil: baca singkat, klik jelas, lanjut
              ke bantuan yang paling kamu perlukan.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pageHighlights.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full transition hover:-translate-y-1 hover:rotate-1">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ceria-ink bg-ceria-kuning text-ceria-ink">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="font-display text-3xl font-light">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-ceria-ink/65">
                      Klik buat lihat detailnya.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-ceria-ink">
                      Buka halaman
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
