import { ArrowUpRight, MessageCircle } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="organic-blob pointer-events-none absolute -top-24 left-[-4rem] h-80 w-80 bg-ceria-coral opacity-20" />
        <SectionHeading
          eyebrow="Bab V — Kolofon"
          title={
            <>
              Sebuah catatan
              <br />
              <span className="font-medium italic">tentang kami.</span>
            </>
          }
          description="PIK-R CERIA tumbuh sebagai bagian dari ekstrakurikuler DENSATGA. Kami ingin ada tempat ngobrol yang aman, tidak menggurui, dan tetap diarahkan oleh Guru BK."
        />
        <div className="relative mx-auto mt-10 grid max-w-6xl grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="columns-1 gap-8 text-ceria-ink/85 sm:columns-2 sm:text-lg">
              <p className="mb-4">
                <span className="float-left mr-2 font-display text-5xl leading-[0.85]">
                  P
                </span>
                IK-R <strong>CERIA</strong> tumbuh sebagai bagian dari
                ekstrakurikuler <strong>DENSATGA</strong>. Sederhananya, kami
                sekumpulan siswa yang pengen ada tempat ngobrol — bukan tempat
                dihakimi — buat teman-teman sendiri di sekolah.
              </p>
              <p className="mb-4">
                Semua kegiatan kami jalan di bawah bimbingan{" "}
                <strong>Guru BK</strong>, jadi tetap aman dan terarah. Konselor
                sebayanya? Siswa yang dilatih buat <em>mendengar</em>, bukan
                buat kasih ceramah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ceria-ink bg-ceria-krem">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-10 px-5 py-16 sm:px-8 sm:py-20">
          <div className="col-span-12 md:col-span-5 md:-rotate-1">
            <p className="font-hand text-3xl text-ceria-coral">visi.</p>
            <h2 className="mt-2 font-display text-4xl leading-[1.05] sm:text-5xl">
              Remaja yang <em className="font-medium">sehat,</em> berencana,
              dan <span className="marker">ceria.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:translate-y-12 md:rotate-1">
            <p className="font-hand text-3xl text-ceria-dark">misi.</p>
            <ul className="mt-2 space-y-3 font-display text-2xl leading-tight sm:text-3xl">
              <li className="border-l-2 border-ceria-ink pl-4">
                Ruang konseling sebaya yang aman.
              </li>
              <li className="border-l-2 border-ceria-ink pl-4">
                <em className="font-medium">Edukasi</em> remaja yang nggak kaku.
              </li>
              <li className="border-l-2 border-ceria-ink pl-4">
                Kegiatan positif tiap semester.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ceria-ink bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid grid-cols-12 gap-y-6">
            <div className="col-span-12 md:col-span-4">
              <p className="font-hand text-3xl text-ceria-coral">hubungi.</p>
              <h2 className="mt-1 font-display text-4xl leading-tight">
                Dua kontak <em className="font-medium">resmi</em>, sisanya lewat
                admin.
              </h2>
            </div>
            <div className="col-span-12 grid gap-4 md:col-span-8 md:grid-cols-2">
              {[
                {
                  label: "Admin Web",
                  nama: "Wisnu",
                  no: "0822-3341-2942",
                  wa: "6282233412942",
                  rot: "-rotate-1",
                },
                {
                  label: "Koor PIK-R",
                  nama: "Khansa",
                  no: "0821-3117-5512",
                  wa: "6282131175512",
                  rot: "rotate-1",
                },
              ].map((contact) => (
                <a
                  key={contact.nama}
                  href={`https://wa.me/${contact.wa}?text=Halo%20Kak%20${contact.nama},%20saya%20dari%20web%20PIK-R%20CERIA.`}
                  target="_blank"
                  rel="noreferrer"
                  className={`group rounded-[2rem] border-2 border-ceria-ink bg-ceria-krem p-6 transition-transform hover:-translate-y-1 ${contact.rot}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-ceria-ink/55">
                    {contact.label}
                  </p>
                  <p className="mt-2 font-display text-3xl">
                    Kak {contact.nama}
                  </p>
                  <p className="mt-1 font-semibold text-ceria-ink/75">
                    {contact.no}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Chat resmi
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
