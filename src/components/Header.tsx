import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import CartButton from "./CartButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header" : "glass-header-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="font-heading font-black text-primary-foreground text-sm">GG</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            Grupo Gama
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CartButton />
          <button
            onClick={() => openWhatsApp()}
            className="btn-whatsapp text-xs !py-2 !px-3.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Fale Conosco</span>
          </button>
        </div>
      </div>
    </header>
  );
}
