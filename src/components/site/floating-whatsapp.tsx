import Link from "next/link";
import { MessageCircleHeart } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <Link
      href="/konselor"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ceria-ink bg-ceria-kuning text-ceria-ink shadow-[0_2px_0_var(--tinta)] transition hover:-rotate-6 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ceria-toska/30 focus-visible:ring-offset-2"
      aria-label="Pilih konselor dan mulai cerita"
    >
      <MessageCircleHeart className="h-7 w-7" aria-hidden="true" />
    </Link>
  );
}
