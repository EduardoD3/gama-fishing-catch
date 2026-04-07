import { MousePointerClick, Search, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Escolha",
    description: "Navegue pelo catálogo e encontre o produto ideal para sua pescaria.",
  },
  {
    icon: MousePointerClick,
    title: "Clique",
    description: "Toque em \"Comprar no WhatsApp\" e a mensagem é montada automaticamente.",
  },
  {
    icon: Truck,
    title: "Receba",
    description: "Finalize pelo WhatsApp e receba seu pedido com rapidez e segurança.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground text-center mb-10">
          Como Funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                Passo {i + 1}
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
