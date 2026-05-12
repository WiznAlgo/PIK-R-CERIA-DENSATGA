import { ReactNode } from "react";

import { Footer } from "./footer";
import { FloatingWhatsApp } from "./floating-whatsapp";
import { Navbar } from "./navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ceria-krem text-ceria-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
