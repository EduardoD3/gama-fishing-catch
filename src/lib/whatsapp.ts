const WHATSAPP_NUMBER = "5569999544300";

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export function getWhatsAppUrl(productName?: string): string {
  const message = productName
    ? `Fala, vi esse produto no site e quero esse aqui 👇 ${productName}`
    : "Olá! Vi o site do Grupo Gama e gostaria de saber mais sobre os produtos.";
  
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function getWhatsAppCartUrl(items: CartItem[]): string {
  const itemsList = items
    .map((item) => {
      const total = (item.price * item.quantity).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return `• ${item.quantity}x ${item.name} — ${total}`;
    })
    .join("\n");

  const grandTotal = items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const message = `Fala! Vi esses produtos no site e quero comprar 👇\n\n${itemsList}\n\n💰 Total: ${grandTotal}\n\nPode me ajudar?`;
  
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(productName?: string): void {
  window.open(getWhatsAppUrl(productName), "_blank");
}

export function openWhatsAppCart(items: CartItem[]): void {
  window.open(getWhatsAppCartUrl(items), "_blank");
}
