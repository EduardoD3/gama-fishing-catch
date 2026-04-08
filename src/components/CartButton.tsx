import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function CartButton() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 active:scale-95 transition-all"
      aria-label="Abrir carrinho"
    >
      <ShoppingBag className="w-5 h-5 text-foreground" />
      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cta text-cta-foreground text-[10px] font-heading font-bold flex items-center justify-center animate-in zoom-in-50">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
