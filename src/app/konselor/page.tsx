import { ArrowUpRight, MessageCircle } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { counselors } from "@/lib/site-data";

function connectLink(name: string) {
  return `https://wa.me/6282233412942?text=Halo%20Kak,%20tolong%20sambungkan%20saya%20dengan%20Kak%20${encodeURIComponent(
    name,
  )}`;
}

export default function CounselorsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <div className="organic-blob-alt pointer-events-none absolute -top-16 right-[-6rem] h-80 w-80 bg-ceria-kuning opacity-60" />
        <SectionHeading
          eyebrow="Bab III — Orang-orangnya"
          title={
            <>
              Kenalan dulu,
              <br />
              <span className="font-medium italic">biar nggak</span>{" "}
              <span className="font-hand text-[0.95em] text-ceria-coral">
                canggung.
              </span>
            </>
          }
          description="Mereka siswa juga. Dilatih buat dengerin, bukan buat ngehakimi. Pilih yang menurutmu paling nyambung — sisanya admin yang urus."
        />
      </section>

      <section className="border-t-2 border-ceria-ink bg-ceria-krem">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {counselors.map((counselor, index) => (
              <article
                key={counselor.name}
                className={`relative flex flex-col rounded-[2rem] border-2 border-ceria-ink bg-white p-6 ${
                  index === 0
                    ? "-rotate-1"
                    : index === 1
                      ? "rotate-[1.5deg] md:translate-y-8"
                      : "-rotate-[0.5deg] md:translate-y-4"
                }`}
              >
                <span className="absolute -top-3 left-6 rounded-full border-2 border-ceria-ink bg-ceria-krem px-3 py-0.5 text-xs font-bold">
                  No. 0{index + 1}
                </span>
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full border-2 border-ceria-ink font-display text-5xl ${
                    index === 0
                      ? "bg-ceria-toska text-white"
                      : index === 1
                        ? "bg-ceria-kuning text-ceria-ink"
                        : "bg-ceria-coral text-white"
                  }`}
                >
                  {counselor.name.charAt(0)}
                </div>
                <h3 className="mt-5 font-display text-3xl leading-none">
                  Kak {counselor.name}
                </h3>
                <p className="mt-1 text-sm text-ceria-ink/60">
                  {counselor.className} · {counselor.role}
                </p>
                <p className="mt-5 border-l-2 border-ceria-ink pl-3 font-display text-base italic text-ceria-ink/80">
                  “{[
                    "ceritamu nggak akan aku jadiin bahan ketawa, janji.",
                    "kadang cuma butuh didengerin tanpa disuruh ‘sabar’, kan?",
                    "patah hati itu valid. capek karena ekspektasi juga valid.",
                  ][index]}”
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {counselor.topics.map((topic) => (
                    <Badge key={topic} variant="default" className="normal-case">
                      #{topic.toLowerCase()}
                    </Badge>
                  ))}
                </div>
                <a
                  href={connectLink(counselor.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-between rounded-full border-2 border-ceria-ink px-4 py-2 text-sm font-semibold transition-all hover:bg-ceria-ink hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Minta Disambungin
                  </span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
