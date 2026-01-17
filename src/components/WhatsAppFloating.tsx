// src/components/WhatsAppFloating.tsx
import { MessageCircle } from "lucide-react";

export function WhatsAppFloating() {
  return (
  <a
    href="https://wa.me/5584998302660?text=Olá! Gostaria de informações sobre os kits de festa 🎉"
    style={{ zIndex: 9999 }}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl hover:scale-110 transition-all"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle className="w-8 h-6" />
    <span className="hidden md:block ml-0.5 font-semibold">
      Fale conosco
    </span>
  </a>
  );
}
