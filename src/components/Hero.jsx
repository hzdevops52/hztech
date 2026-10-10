import React from "react";
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import ShowcaseCarousel from './ShowcaseCarousel.jsx';

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability"><span /> DIGITAL SOLUTIONS FOR GROWING BUSINESSES</div>
          <h1>Good ideas deserve <span className="text-gradient">great technology.</span></h1>
          <p className="hero-description">
            We build modern websites, practical business applications, and reliable deployment workflows that help turn your ideas into reality.
          </p>

          <div className="hero-actions">
            <a href="#services" className="button-primary">Explore services <ArrowRight size={17} /></a>
            <a href="#work" className="button-secondary">See what we build <ArrowDown size={16} /></a>
          </div>

          <div className="hero-trust">
            <div className="trust-icon"><Sparkles size={17} /></div>
            <p><b>Built with purpose.</b><span>Designed for real business needs.</span></p>
          </div>
        </div>

        <ShowcaseCarousel />
      </div>

      <div className="hero-bottomline">
        <span>WEB DEVELOPMENT</span><i /><span>APPLICATIONS</span><i /><span>DEPLOYMENT</span><i /><span>DEVOPS</span>
      </div>
    </section>
  );
}
