import { whatsappLink } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-green text-2xl text-white shadow-lg transition-transform hover:scale-105 md:flex"
    >
      💬
    </a>
  );
}
