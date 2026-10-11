import React from "react";
import { useState, useEffect } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ShoppingBag,
  Utensils, LayoutDashboard, Building2, Check
} from 'lucide-react';
import { showcases } from '../data/showcase.js';

const iconByType = {
  restaurant: Utensils,
  commerce: ShoppingBag,
  business: Building2,
  dashboard: LayoutDashboard
};

function Preview({ item }) {
  const Icon = iconByType[item.type];
  return (
    <div className={`preview preview-${item.type}`}>
      <div className="preview-topbar">
        <span className="preview-brand"><span className="preview-brand-dot" /> {item.label}</span>
        <span className="preview-window-dots"><i /><i /><i /></span>
      </div>

      <div className="preview-body">
        <div className="preview-sidebar">
          <span className="sidebar-symbol"><Icon size={17} /></span>
          <span className="sidebar-line active" />
          <span className="sidebar-line" />
          <span className="sidebar-line short" />
          <span className="sidebar-line" />
        </div>

        <div className="preview-content">
          <div className="preview-welcome">
            <div>
              <span className="preview-eyebrow">YOUR NEXT BIG IDEA</span>
              <h3>{item.type === 'restaurant' ? 'Fresh ideas.' : item.type === 'commerce' ? 'Find your style.' : item.type === 'business' ? 'Built for you.' : 'Your overview.'}</h3>
              <span className="preview-copy">Thoughtful design. Real possibilities.</span>
            </div>
            <span className="preview-icon"><Icon size={21} /></span>
          </div>

          {item.type === 'dashboard' ? (
            <>
              <div className="mini-stats">
                <span><small>Overview</small><b>84.6%</b></span>
                <span><small>Activity</small><b>+12.8%</b></span>
                <span><small>Projects</small><b>08</b></span>
              </div>
              <div className="mini-chart">
                {[30, 47, 37, 64, 50, 79, 57, 90, 69, 100, 72, 84].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </>
          ) : (
            <div className="preview-cards">
              {item.type === 'restaurant' ? (
                <>
                  <div className="food-tile food-one"><span>HOUSE SPECIAL</span><b>Made fresh, every day.</b></div>
                  <div className="food-tile food-two"><Icon size={24} /></div>
                  <div className="food-tile food-three"><Icon size={24} /></div>
                </>
              ) : item.type === 'commerce' ? (
                <>
                  <div className="product-tile product-one"><span>01</span></div>
                  <div className="product-tile product-two"><span>02</span></div>
                  <div className="product-tile product-three"><span>03</span></div>
                </>
              ) : (
                <>
                  <div className="business-tile"><span>OUR APPROACH</span><b>Good work starts with a good plan.</b><i /></div>
                  <div className="business-tile secondary"><Icon size={25} /><span>DESIGNED AROUND YOU</span></div>
                </>
              )}
            </div>
          )}
          <div className="preview-bottom"><span /><span /><span /><span className="bottom-long" /></div>
        </div>
      </div>
      <div className="preview-glow" />
    </div>
  );
}

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const item = showcases[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % showcases.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const change = (direction) => {
    setIndex((current) => (current + direction + showcases.length) % showcases.length);
  };

  return (
    <div className="showcase" id="work">
      <div className="showcase-heading">
        <span className="section-kicker"><span /> CONCEPT SHOWCASE</span>
        <span className="showcase-count">{String(index + 1).padStart(2, '0')} <span>/</span> {String(showcases.length).padStart(2, '0')}</span>
      </div>

      <div className="showcase-window" aria-live="polite">
        <div className="showcase-caption">
          <span className="showcase-category">{item.category}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href="#contact" className="showcase-link">Discuss a project <ArrowUpRight size={16} /></a>
        </div>

        <div className="showcase-art" key={item.id} style={{ '--showcase-accent': item.colors[0], '--showcase-deep': item.colors[1] }}>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-label"><Check size={13} /> DESIGN CONCEPT</div>
          <Preview item={item} />
          <div className="art-floating-card"><span className="floating-icon"><itemIcon item={item} /></span><span><b>{item.label}</b><small>Concept preview</small></span><ArrowUpRight size={15} /></div>
        </div>
      </div>

      <div className="showcase-controls">
        <div className="carousel-dots" aria-label="Choose a showcase">
          {showcases.map((slide, i) => (
            <button key={slide.id} className={i === index ? 'active' : ''} aria-label={`Show ${slide.label}`} aria-pressed={i === index} onClick={() => setIndex(i)} />
          ))}
        </div>
        <div className="carousel-arrows">
          <button aria-label="Previous showcase" onClick={() => change(-1)}><ArrowLeft size={18} /></button>
          <button aria-label="Next showcase" onClick={() => change(1)}><ArrowRight size={18} /></button>
        </div>
      </div>
    </div>
  );
}

function itemIcon({ item }) {
  const Icon = iconByType[item.type];
  return <Icon size={17} />;
}
