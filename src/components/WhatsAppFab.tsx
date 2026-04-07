import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function WhatsAppFab() {
  return (
    <button
      onClick={() => openWhatsApp()}
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-transform fab-pulse"
      style={{
        backgroundColor: "#25D366",
        marginBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <MessageCircle className="w-7 h-7" style={{ color: "#fff" }} />
    </button>
  );
}
