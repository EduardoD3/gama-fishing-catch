import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Flame, Check } from "lucide-react";
import { products, type Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import CountdownTimer from "./CountdownTimer";

const featured = products.filter(
  (p) => p.badge === "mais-vendido" || p.badge === "novo" || p.badge === "promo"
).slice(0, 8);

const badgeLabels: Record<string, string> = {
  promo: "Promoção",
  novo: "Lançamento",
  "mais-vendido": "Mais Vendido",
  oferta: "Oferta Especial",
};

const badgeIcons: Record<string, string> = {
  promo: "🔥",
  novo: "✨",
  "mais-vendido": "⭐",
  oferta: "💥",
};

export default function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem, setIsOpen } = useCart();

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);

    const cardWidth = el.clientWidth * 0.75;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.7, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleAdd = (product: Product) => {
    addItem(product);
    toast.custom(
      (id) => (
        <div className="w-full max-w-[360px] bg-card border border-border/60 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading font-bold text-sm text-foreground leading-tight truncate">
                {product.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">adicionado ao carrinho</p>
            </div>
            <img src={product.image} alt="" className="w-12 h-12 rounded-xl object-cover flex-shrink-0 border border-border/30" />
          </div>
          <div className="flex gap-2">
            <button onClick={() => toast.dismiss(id)} className="flex-1 h-11 rounded-xl bg-secondary text-foreground font-heading font-bold text-xs transition-all active:scale-95 hover:bg-secondary/80">
              Continuar comprando
            </button>
            <button onClick={() => { toast.dismiss(id); setIsOpen(true); }} className="flex-1 h-11 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-xs transition-all active:scale-95 hover:bg-primary/90 shadow-md">
              Ver carrinho
            </button>
          </div>
        </div>
      ),
      { duration: 3500, position: "top-center" }
    );
  };

  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <section className="py-10 overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-cta" />
            <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground">
              Destaques
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-[max(1rem,calc((100vw-1280px)/2+1rem))] pb-4 no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {featured.map((product, i) => (
          <div
            key={product.id}
            className="snap-start shrink-0 w-[72vw] sm:w-[48vw] md:w-[32vw] lg:w-[24vw] xl:w-[20vw]"
          >
            <div className="relative bg-card rounded-3xl overflow-hidden border border-border/40 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 font-heading font-bold text-xs bg-card/90 backdrop-blur-sm text-foreground shadow-md">
                      {badgeIcons[product.badge]} {badgeLabels[product.badge]}
                    </span>
                    {(product.badge === "promo" || product.badge === "oferta" || product.badge === "mais-vendido") && (
                      <CountdownTimer
                        hours={product.badge === "mais-vendido" ? 12 : 8}
                        className="bg-card/90 backdrop-blur-sm shadow-md"
                      />
                    )}
                  </div>
                )}

                {/* Price overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-heading font-black text-xl text-white drop-shadow-lg">
                    {formatPrice(product.price)}
                  </p>
                  {product.installment && (
                    <p className="text-xs text-white/80 font-medium mt-0.5">
                      ou {product.installment}
                    </p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="text-[10px] font-heading font-semibold text-primary uppercase tracking-widest">
                  {product.category}
                </span>
                <h3 className="font-heading font-bold text-sm text-foreground leading-tight mt-1 line-clamp-2">
                  {product.name}
                </h3>

                <button
                  onClick={() => handleAdd(product)}
                  className="btn-whatsapp w-full text-xs mt-3"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator - mobile */}
      <div className="flex justify-center gap-1.5 mt-4 md:hidden">
        {featured.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
