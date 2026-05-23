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
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const site = {
  name: "PIK-R CERIA DENSATGA",
  shortName: "PIK-R CERIA",
  tagline: "Tempat Curhat Aman, Tumbuh Bareng Tanpa Takut Dihakimi",
  description:
    "PIK-R CERIA DENSATGA adalah ruang konseling sebaya SMAN 3 KEDIRI. Kami siap dengerin cerita akademik, percintaan, sampai overthinking. Pilih konselor, langsung chat. Privasi 100% terjaga.",
  logoUrl: "/logo_DENSATGA.jpeg",
  moduleDriveFolder: "https://drive.google.com/drive/folders/1xDfZNggxb5-fzPdPcR5tClx7lmuYCedk",
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
    title: "Pilih Konselor",
    description: "Buka halaman Konselor, kenalan, dan pilih yang paling cocok sama kamu.",
    icon: Search,
  },
  {
    title: "Langsung Chat",
    description:
      "Klik tombol WA di profil konselor, langsung ngobrol tanpa perantara.",
    icon: MessageCircleHeart,
  },
  {
    title: "Sesi Konseling",
    description: "Ngobrol via WA atau janjian ketemu offline di Chill&Talk Room.",
    icon: UsersRound,
  },
  {
    title: "Tuntas & Aman",
    description: "Semua cerita dijamin rahasia.",
    icon: LockKeyhole,
  },
];

export const counselors = [
  {
    name: "Khansa",
    className: "XI-2",
    role: "Konselor Sebaya",
    wa: "6282131175512",
    topics: ["Prestasi", "Problem Solving", "Teman Curhat"],
    quote: "kadang cuma butuh didengerin tanpa disuruh 'sabar', kan?",
  },
  {
    name: "Anggrek",
    className: "XI-2",
    role: "Konselor Sebaya",
    wa: "6285855923927",
    topics: ["Motivasi", "Self-Love", "Teman Curhat"],
    quote: "kamu nggak harus kuat sendirian, cerita aja dulu.",
  },
  {
    name: "Aurel",
    className: "XI-10",
    role: "Konselor Sebaya",
    wa: "6285648180604",
    topics: ["Percintaan", "Motivasi", "Teman Curhat"],
    quote: "patah hati itu valid. capek karena ekspektasi juga valid.",
  },
  {
    name: "Fawas",
    className: "XI-6",
    role: "Konselor Sebaya",
    wa: "62881027159165",
    topics: ["Akademik", "Problem Solving", "Karier"],
    quote: "bingung itu wajar, yang penting jangan bingung sendirian.",
  },
  {
    name: "Jhonatan",
    className: "XI-10",
    role: "Konselor Sebaya",
    wa: "6285707395564",
    topics: ["Motivasi", "Persahabatan", "Problem Solving"],
    quote: "ceritamu nggak akan aku jadiin bahan ketawa, janji.",
  },
  {
    name: "Izza",
    className: "XI-3",
    role: "Konselor Sebaya",
    wa: "6282143206863",
    topics: ["Self-Love", "Keluarga", "Teman Curhat"],
    quote: "nggak ada cerita yang terlalu kecil buat didengerin.",
  },
  {
    name: "Wisnu",
    className: "XI-8",
    role: "Konselor Sebaya & Pengelola Website",
    wa: "6282233412942",
    topics: ["Akademik", "Karier", "Problem Solving"],
    quote: "kalau bingung, ayo pikirin bareng-bareng. nggak harus sendirian.",
  },
];

export const modules = [
  {
    title: "Dasar PIK-R",
    description: "Pondasi awal jadi remaja berencana.",
    tag: "fundamental",
    driveUrl: "https://drive.google.com/file/d/1vxDepqU7PT8PxVUGnCqKqF7AuX4QtXS9/view?usp=drivesdk",
  },
  {
    title: "PKBR",
    description: "Pendidikan Kesehatan Reproduksi Remaja.",
    tag: "kesehatan",
    driveUrl: "https://drive.google.com/file/d/1F7rZuaRT5i2lo2Q6479jEFVXSFoexDSc/view?usp=drivesdk",
  },
  {
    title: "Risiko Seksualitas",
    description:
      "Pahami batasan, dampak, pencegahan HIV AIDS, dan cara menjaga diri.",
    tag: "kesehatan",
    driveUrl: "https://drive.google.com/file/d/155xrck7g8PTtE9ErJOTJCLOlJE-fLAz5/view?usp=drivesdk",
  },
  {
    title: "P.U.P",
    description: "Pendewasaan Usia Perkawinan.",
    tag: "rencana",
    driveUrl: "https://drive.google.com/file/d/14A48x-xEt4fny81ZCIKw9NolIDmy8KzW/view?usp=drivesdk",
  },
  {
    title: "Life Skills",
    description: "Skill bertahan hidup ala remaja.",
    tag: "skill",
    driveUrl: "https://drive.google.com/file/d/15qtzB2AxPrPO_01qaMdk2pp1fkdTlm8H/view?usp=drivesdk",
  },
  {
    title: "8 Fungsi Keluarga",
    description: "Keluarga keren itu yang gimana sih?",
    tag: "keluarga",
    driveUrl: "https://drive.google.com/file/d/1p84ozM-fmzLaKqT2XnFka4IU_ivesiHO/view?usp=drivesdk",
  },
];

export const pageHighlights = [
  { title: "Alur jelas", href: "/alur-konseling", icon: ClipboardList },
  { title: "Konselor terkurasi", href: "/konselor", icon: UsersRound },
  { title: "Modul Google Drive", href: "/modul", icon: BookOpen },
];

export const homepageStats = [
  { value: "4", label: "langkah konseling", icon: CheckCircle2 },
  { value: "7", label: "konselor sebaya", icon: UsersRound },
  { value: "6", label: "modul siap dibaca", icon: LibraryBig },
  { value: "2026", label: "dikelola siswa", icon: CalendarDays },
];

export const footerLinks = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Alur", href: "/alur-konseling", icon: MessageCircleHeart },
  { label: "Modul", href: "/modul", icon: LibraryBig },
  { label: "Tentang", href: "/tentang", icon: Brain },
];
