import { ArrowUpRight, Download, FolderOpen } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { modules, site } from "@/lib/site-data";

export default function ModulesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <SectionHeading
          eyebrow="Bab IV — Bahan Bacaan"
          title={
            <>
              Perpustakaan
              <br />
              <span className="marker font-medium">mini</span>{" "}
              <span className="italic">buat kamu.</span>
            </>
          }
          description="Enam modul tentang remaja, kesehatan, keluarga, dan rencana hidup. Boleh diunduh lewat Google Drive, boleh juga sekadar dibaca pas lagi mager."
        />
      </section>

      <section className="border-t-2 border-ceria-ink bg-ceria-krem">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
          <div className="mb-8 rounded-[1.5rem] border-2 border-ceria-ink bg-white p-5 shadow-[0_2px_0_var(--tinta)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl text-ceria-ink">
                Folder Drive modul
              </p>
              <p className="mt-1 text-sm leading-6 text-ceria-ink/70">
                Link modul sudah disiapkan sebagai materi ringkas lokal. Nanti
                bisa diganti ke Google Drive kalau file final sudah siap.
              </p>
            </div>
            <Button asChild variant="outline">
              <a href={site.moduleDriveFolder} target="_blank" rel="noreferrer">
                <FolderOpen className="h-4 w-4" aria-hidden="true" />
                Buka Folder Drive
              </a>
            </Button>
          </div>
          </div>

          <div className="hidden grid-cols-12 border-b-2 border-ceria-ink pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ceria-ink/60 sm:grid">
            <span className="col-span-1">No.</span>
            <span className="col-span-5">Judul</span>
            <span className="col-span-4">Catatan</span>
            <span className="col-span-2 text-right">Unduh</span>
          </div>

          <ul>
            {modules.map((module, index) => (
              <li
                key={module.title}
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b border-ceria-ink/20 py-6 transition-colors hover:bg-white/60"
              >
                <span className="col-span-2 font-display text-3xl leading-none text-ceria-ink/30 sm:col-span-1 sm:text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 sm:col-span-5">
                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                    {index % 2 === 0 ? (
                      module.title
                    ) : (
                      <em className="font-medium">{module.title}</em>
                    )}
                  </h3>
                  <p className="font-hand mt-1 text-lg text-ceria-coral">
                    #{module.tag}
                  </p>
                </div>
                <p className="col-span-12 text-sm text-ceria-ink/75 sm:col-span-4 sm:text-base">
                  {module.description}
                </p>
                <a
                  href={module.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Buka Google Drive ${module.title}`}
                  className="col-span-12 inline-flex items-center justify-between gap-2 self-center rounded-full border-2 border-ceria-ink px-4 py-2 text-sm font-semibold transition-all hover:bg-ceria-ink hover:text-white sm:col-span-2 sm:justify-end sm:border-0 sm:px-0 sm:py-0 sm:hover:bg-transparent sm:hover:text-ceria-dark"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Drive
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
