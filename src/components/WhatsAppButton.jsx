import { site } from "../content";
import Icon from "./Icon";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
