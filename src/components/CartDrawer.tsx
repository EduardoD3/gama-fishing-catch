import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { openWhatsAppCart } from "@/lib/whatsapp";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, X } from "lucide-react";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  const handleCheckout = () => {
    const cartItems = items.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }));
    openWhatsAppCart(cartItems);
  };

  const formattedTotal = totalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md p-0 bg-background border-l border-border/50 gap-0">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading font-black text-lg text-foreground leading-none">Carrinho</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</p>
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground px-8">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 opacity-30" />
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-lg text-foreground">Carrinho vazio</p>
              <p className="text-sm mt-1">Adicione produtos para enviar seu pedido pelo WhatsApp</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 h-12 px-8 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-sm active:scale-95 transition-all"
            >
              Ver produtos
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {items.map((item) => {
                const itemTotal = (item.product.price * item.quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                });

                return (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 rounded-2xl bg-card border border-border/40 shadow-sm"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-[72px] h-[72px] rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-heading font-bold text-sm text-foreground leading-tight line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-destructive/10 active:scale-90 transition-all text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="font-heading font-black text-base text-foreground mt-1">{itemTotal}</p>

                      <div className="flex items-center gap-1.5 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/70 active:scale-90 transition-all"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-9 text-center font-heading font-black text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/70 active:scale-90 transition-all"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-border bg-card px-5 py-5 space-y-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-muted-foreground text-sm">Total</span>
                <span className="font-heading font-black text-2xl text-foreground">{formattedTotal}</span>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full h-14 text-base rounded-2xl font-heading font-bold shadow-lg active:scale-[0.97] transition-all"
                style={{ backgroundColor: '#25D366', color: '#fff' }}
              >
                <MessageCircle className="w-5 h-5" />
                Finalizar pelo WhatsApp
              </Button>

              <button
                onClick={clearCart}
                className="w-full text-xs text-muted-foreground hover:text-destructive transition-colors font-medium py-1"
              >
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
