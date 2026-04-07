import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";

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
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card-product flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {product.badge && (
          <span
            className={`badge-product ${badgeClasses[product.badge]} absolute top-3 left-3`}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        <span className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider mb-1">
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
            onClick={() => openWhatsApp(product.name)}
            className="btn-whatsapp w-full text-sm mt-1"
          >
            <MessageCircle className="w-4 h-4" />
            Comprar no WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}
