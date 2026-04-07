import { ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-fishing.jpg";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[70vh] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Pescador ao pôr do sol em um rio"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

      <div className="relative container pb-12 pt-32 text-primary-foreground">
        <div className="max-w-lg fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4">
            Equipe-se para sua próxima pescaria 🎣
          </h1>
          <p className="text-base md:text-lg opacity-90 mb-8 leading-relaxed">
            Produtos selecionados com qualidade profissional. Escolha, clique e receba direto no seu WhatsApp — rápido e sem complicação.
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => openWhatsApp()} className="btn-cta text-base">
              <MessageCircle className="w-5 h-5" />
              Comprar pelo WhatsApp
            </button>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3.5 font-heading font-bold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20 active:scale-95"
            >
              Ver Produtos
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 text-sm opacity-75">
            <span>✓ Entrega para todo Brasil</span>
            <span>✓ Atendimento rápido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
