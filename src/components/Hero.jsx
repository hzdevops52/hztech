import React from "react";
import { MessageCircle } from "lucide-react";
import ShowcaseCarousel from "./ShowcaseCarousel.jsx";

const WHATSAPP_NUMBER = "923277495256";

export default function Hero() {
  return (
    <section className="hero hero-fullscreen" id="home">
      <div className="hero-message">
        <span className="hero-eyebrow">
          <span className="hero-status-dot" />
          HZTECHCLOUD
        </span>
        <h1>Grow Your Business Online.</h1>
      </div>

      <ShowcaseCarousel />

      <div className="hero-cta-bottom">
        <a
          className="hero-whatsapp"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with HZTECHCLOUD on WhatsApp"
        >
          <MessageCircle size={19} />
          <span>Let's Talk on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
