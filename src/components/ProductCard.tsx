import { ShoppingBag, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

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
  const { addItem } = useCart();

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

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
          <span
            className={`badge-product ${badgeClasses[product.badge]} absolute top-3 left-3`}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
        {/* Quick add button overlay */}
        <button
          onClick={() => addItem(product)}
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
            onClick={() => addItem(product)}
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
