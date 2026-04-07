const WHATSAPP_NUMBER = "5569999999999";

export function getWhatsAppUrl(productName?: string): string {
  const message = productName
    ? `Fala, vi esse produto no site e quero esse aqui 👇 ${productName}`
    : "Olá! Vi o site do Grupo Gama e gostaria de saber mais sobre os produtos.";
  
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(productName?: string): void {
  window.open(getWhatsAppUrl(productName), "_blank");
}
