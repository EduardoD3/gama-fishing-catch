import { ShoppingBag, Plus, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import CountdownTimer from "./CountdownTimer";

const badgeLabels: Record<string, string> = {
  promo: "Promoção",
  novo: "Novo",
  "mais-vendido": "Mais Vendido",
  oferta: "Oferta",
};

const badgeClasses: Record<string, string> = {
  promo: "badge-promo",
  novo: "badge-new",
  "mais-vendido": "badge-bestseller",
  oferta: "badge-promo",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, setIsOpen } = useCart();

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleAdd = () => {
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
              <p className="text-xs text-muted-foreground mt-0.5">
                adicionado ao carrinho
              </p>
            </div>
            <img
              src={product.image}
              alt=""
              className="w-12 h-12 rounded-xl object-cover flex-shrink-0 border border-border/30"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                toast.dismiss(id);
              }}
              className="flex-1 h-11 rounded-xl bg-secondary text-foreground font-heading font-bold text-xs transition-all active:scale-95 hover:bg-secondary/80"
            >
              Continuar comprando
            </button>
            <button
              onClick={() => {
                toast.dismiss(id);
                setIsOpen(true);
              }}
              className="flex-1 h-11 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-xs transition-all active:scale-95 hover:bg-primary/90 shadow-md"
            >
              Ver carrinho
            </button>
          </div>
        </div>
      ),
      { duration: 3500, position: "top-center" }
    );
  };

  return (
    <article className="card-product flex flex-col group">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1">
            <span className={`badge-product ${badgeClasses[product.badge]}`}>
              {badgeLabels[product.badge]}
            </span>
            {(product.badge === "promo" || product.badge === "oferta" || product.badge === "mais-vendido") && (
              <CountdownTimer
                hours={product.badge === "mais-vendido" ? 12 : 8}
                compact
              />
            )}
          </div>
        )}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 active:scale-90 hover:bg-primary/90"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <span className="text-[10px] font-body font-semibold text-primary uppercase tracking-widest mb-1">
          {product.category}
        </span>
        <h3 className="font-heading font-bold text-sm md:text-base text-foreground leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto">
          <p className="font-heading font-black text-xl text-foreground mb-0.5">
            {formattedPrice}
          </p>
          {product.installment && (
            <p className="text-xs text-muted-foreground mb-3">
              ou {product.installment}
            </p>
          )}

          <button
            onClick={handleAdd}
            className="btn-whatsapp w-full text-sm mt-1"
          >
            <ShoppingBag className="w-4 h-4" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </article>
  );
}
