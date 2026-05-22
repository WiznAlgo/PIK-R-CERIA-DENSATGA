import {
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  Home,
  LibraryBig,
  LockKeyhole,
  MessageCircleHeart,
  PhoneCall,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const site = {
  name: "PIK-R CERIA DENSATGA",
  shortName: "PIK-R CERIA",
  tagline: "Tempat Curhat Aman, Tumbuh Bareng Tanpa Takut Dihakimi",
  description:
    "PIK-R CERIA DENSATGA adalah ruang konseling sebaya SMAN 3 KEDIRI. Kami siap dengerin cerita akademik, percintaan, sampai overthinking. Konsultasi awal online via Admin, lanjutan offline. Privasi 100% terjaga.",
  adminWa:
    "https://wa.me/6282233412942?text=Halo%20Kak%20Wisnu,%20saya%20dari%20web%20PIK-R%20CERIA.%20Mau%20mulai%20curhat",
  adminChat:
    "https://wa.me/6282233412942?text=Halo%20Kak%20Wisnu,%20saya%20dari%20web%20PIK-R%20CERIA.%20Mau%20konseling",
  logoUrl: "/logo-ceria.svg",
  moduleDriveFolder: "/modul",
};

export const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Alur Konseling", href: "/alur-konseling" },
  { label: "Konselor", href: "/konselor" },
  { label: "Modul", href: "/modul" },
  { label: "Tentang", href: "/tentang" },
];

export const benefits = [
  { label: "100% Privasi Terjaga", icon: ShieldCheck },
  { label: "Konselor Sebaya", icon: UsersRound },
  { label: "Gratis & Aman", icon: HeartHandshake },
];

export const counselingSteps = [
  {
    title: "Hubungi Admin",
    description: "Klik tombol WA, cerita awal ke Admin.",
    icon: PhoneCall,
  },
  {
    title: "Disambungkan",
    description:
      "Admin akan menyalurkan ke konselor sebaya yang paling cocok sama ceritamu.",
    icon: UsersRound,
  },
  {
    title: "Sesi Konseling",
    description: "Ngobrol via WA atau janjian ketemu offline di Chill&Talk Room.",
    icon: MessageCircleHeart,
  },
  {
    title: "Tuntas & Aman",
    description: "Semua cerita dijamin rahasia.",
    icon: LockKeyhole,
  },
];

export const counselors = [
  {
    name: "Wisnu",
    className: "XI-8",
    role: "Admin Web & Konselor Sebaya",
    topics: ["Akademik", "Motivasi", "Problem Solving"],
  },
  {
    name: "Khansa",
    className: "XI-2",
    role: "Koor PIK-R & Konselor Sebaya",
    topics: ["Prestasi", "Problem Solving", "Teman Curhat"],
  },
  {
    name: "Aurel",
    className: "XI-10",
    role: "Konselor Sebaya",
    topics: ["Motivasi", "Teman Curhat", "Percintaan"],
  },
];

export const modules = [
  {
    title: "Dasar PIK-R",
    description: "Pondasi awal jadi remaja berencana.",
    tag: "fundamental",
    driveUrl: "/modules/dasar-pikr.html",
  },
  {
    title: "PKBR",
    description: "Pendidikan Kesehatan Reproduksi Remaja.",
    tag: "kesehatan",
    driveUrl: "/modules/pkbr.html",
  },
  {
    title: "Risiko Seksualitas",
    description:
      "Pahami batasan, dampak, pencegahan HIV AIDS, dan cara menjaga diri.",
    tag: "kesehatan",
    driveUrl: "/modules/risiko-seksualitas.html",
  },
  {
    title: "P.U.P",
    description: "Pendewasaan Usia Perkawinan.",
    tag: "rencana",
    driveUrl: "/modules/pup.html",
  },
  {
    title: "Life Skills",
    description: "Skill bertahan hidup ala remaja.",
    tag: "skill",
    driveUrl: "/modules/life-skills.html",
  },
  {
    title: "8 Fungsi Keluarga",
    description: "Keluarga keren itu yang gimana sih?",
    tag: "keluarga",
    driveUrl: "/modules/8-fungsi-keluarga.html",
  },
];

export const pageHighlights = [
  { title: "Alur jelas", href: "/alur-konseling", icon: ClipboardList },
  { title: "Konselor terkurasi", href: "/konselor", icon: UsersRound },
  { title: "Modul Google Drive", href: "/modul", icon: BookOpen },
];

export const homepageStats = [
  { value: "4", label: "langkah konseling", icon: CheckCircle2 },
  { value: "3", label: "konselor sebaya", icon: UsersRound },
  { value: "6", label: "modul siap dibaca", icon: LibraryBig },
  { value: "2026", label: "dikelola siswa", icon: CalendarDays },
];

export const footerLinks = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Alur", href: "/alur-konseling", icon: MessageCircleHeart },
  { label: "Modul", href: "/modul", icon: LibraryBig },
  { label: "Tentang", href: "/tentang", icon: Brain },
];
