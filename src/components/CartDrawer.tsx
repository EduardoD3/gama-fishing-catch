import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { openWhatsAppCart } from "@/lib/whatsapp";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

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
      <SheetContent className="flex flex-col w-full sm:max-w-lg bg-background">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-heading font-black text-xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="w-16 h-16 opacity-30" />
            <p className="font-heading font-semibold text-lg">Carrinho vazio</p>
            <p className="text-sm text-center">Adicione produtos para enviar seu pedido pelo WhatsApp</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => {
                const itemTotal = (item.product.price * item.quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                });

                return (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 rounded-xl bg-card border border-border/50 shadow-sm"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-sm text-foreground leading-tight truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.product.category}</p>
                      <p className="font-heading font-black text-base text-foreground mt-1">{itemTotal}</p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 active:scale-95 transition-all"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center font-heading font-bold text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 active:scale-95 transition-all"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 active:scale-95 transition-all text-destructive"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <SheetFooter className="border-t border-border pt-4 flex-col gap-3">
              <div className="flex items-center justify-between w-full">
                <span className="font-heading font-semibold text-muted-foreground">Total</span>
                <span className="font-heading font-black text-2xl text-foreground">{formattedTotal}</span>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full btn-whatsapp h-14 text-base rounded-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Finalizar pelo WhatsApp
              </Button>

              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors font-medium py-2"
              >
                Limpar carrinho
              </button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
