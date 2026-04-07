import { MapPin, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="font-heading font-black text-sm">GG</span>
              </div>
              <span className="font-heading font-bold text-lg">Grupo Gama</span>
            </div>
            <p className="text-sm opacity-70 max-w-xs leading-relaxed">
              Sua loja de pesca esportiva com os melhores equipamentos e atendimento direto pelo WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2 opacity-70">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Porto Velho – RO</span>
            </div>
            <button
              onClick={() => openWhatsApp()}
              className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Atendimento pelo WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Grupo Gama. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
