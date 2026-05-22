import Link from "next/link";
import { MessageCircleHeart } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { counselingSteps } from "@/lib/site-data";

export default function CounselingFlowPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <div className="organic-blob pointer-events-none absolute -top-20 left-[-6rem] h-80 w-80 bg-ceria-toska opacity-25" />
        <SectionHeading
          eyebrow="Bab II — Cara Kerja"
          title={
            <>
              Gimana <span className="font-medium italic">caranya</span>
              <br />
              <span className="marker font-medium">cerita di sini?</span>
            </>
          }
          description="Nggak ada form aneh-aneh. Nggak ada antrian formal. Cuma empat langkah pelan yang kami jaga biar tetap aman."
        />
      </section>

      <section className="border-t-2 border-ceria-ink bg-ceria-krem">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <ol className="space-y-14 sm:space-y-20">
            {counselingSteps.map((step, index) => (
              <li
                key={step.title}
                className={`grid grid-cols-12 gap-x-4 gap-y-3 ${
                  index % 2 === 1 ? "sm:pl-16 lg:pl-32" : "sm:pr-16 lg:pr-32"
                }`}
              >
                <div className="col-span-12 sm:col-span-3">
                  <p className="font-display text-7xl leading-none text-ceria-ink/15 sm:text-8xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-hand mt-1 -rotate-3 text-2xl text-ceria-coral">
                    {["pilih", "chat", "cerita", "lega"][index]}~
                  </p>
                </div>
                <div className="col-span-12 border-l-2 border-ceria-ink pl-5 sm:col-span-9 sm:pl-8">
                  <step.icon className="mb-4 h-7 w-7 text-ceria-dark" aria-hidden="true" />
                  <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                    {index % 2 === 1 ? (
                      <em className="font-medium">{step.title}</em>
                    ) : (
                      step.title
                    )}
                  </h3>
                  <p className="mt-3 max-w-lg text-ceria-ink/75">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ceria-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-hand text-3xl text-ceria-kuning">eh,</p>
            <h2 className="mt-1 font-display text-3xl leading-tight sm:text-4xl">
              Udah ngerti alurnya. Sekarang giliran kamu.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
            Kalau kamu sudah siap mulai cerita, pilih konselor yang paling cocok dan langsung chat ya.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/konselor">
              <MessageCircleHeart className="h-5 w-5" aria-hidden="true" />
              Pilih Konselor
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
