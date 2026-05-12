# Yang Perlu Diisi / Diganti

File utama untuk edit cepat: `src/lib/site-data.ts`.

## 1. Logo pojok kiri atas

- File sekarang: `public/logo-ceria.svg`
- Ganti file itu dengan logo PIK-R final.
- Kalau pakai nama file lain, ubah `site.logoUrl` di `src/lib/site-data.ts`.

Contoh:

```ts
logoUrl: "/logo-pikr.png",
```

Simpan file logo baru di folder `public/`.

## 2. Nomor WhatsApp admin

Saat ini tombol chat memakai nomor Admin Wisnu:

```ts
adminWa: "https://wa.me/6282233412942?...",
adminChat: "https://wa.me/6282233412942?...",
```

Ganti nomor dan teks pesannya kalau diperlukan.

## 3. Data konselor

Edit bagian `counselors` di `src/lib/site-data.ts`:

- nama
- kelas
- role
- topik yang bisa dibantu

Nomor pribadi konselor tidak ditampilkan; alur tetap lewat admin supaya aman.

## 4. Modul / bahan bacaan

Saat ini link modul memakai fallback lokal di folder `public/modules/`.

Kalau sudah punya Google Drive/PDF final, ganti:

```ts
moduleDriveFolder: "https://drive.google.com/...",
driveUrl: "https://drive.google.com/...",
```

Bagian yang perlu diganti ada di array `modules`.

## 5. Nama sekolah / copywriting

Saat ini tertulis `SMAN 3 KEDIRI`.

Kalau mau ganti teks besar, tagline, atau deskripsi, edit:

- `src/lib/site-data.ts`
- `src/app/page.tsx`
- `src/app/layout.tsx` untuk metadata/title.

## 6. Cara deploy manual ke Vercel

1. Extract ZIP ini.
2. Upload/import folder project ke Vercel.
3. Framework preset: Next.js.
4. Install command: `npm install`.
5. Build command: `npm run build`.
6. Output mengikuti default Next.js/Vercel.

## 7. Cek lokal sebelum deploy

```bash
npm install
npm run lint
npm run build
npm run dev
```

Lalu buka `http://localhost:3000`.
