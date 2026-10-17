import React, { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ShoppingBag,
  Utensils, Check, Pause, Play, Search, MonitorCheck
} from "lucide-react";
import { showcases } from "../data/showcase.js";

function Preview({ item }) {
  return (
    <div className={`preview preview-${item.type} preview-homepage`}>
      <div className="preview-topbar">
        <span className="preview-brand">
          <span className="preview-brand-dot" />
          {item.label}
        </span>
        <span className="preview-window-dots"><i /><i /><i /></span>
      </div>

      <div className={`preview-page preview-page-${item.type}`}>
        {item.type === "restaurant" && (
          <>
            <header className="site-nav restaurant-nav">
              <b className="site-logo">Saffron <i>&</i> Stone</b>
              <nav><span>OUR STORY</span><span>MENU</span><span>PRIVATE DINING</span></nav>
              <button className="site-nav-cta">BOOK A TABLE</button>
            </header>
            <section className="site-hero restaurant-hero">
              <div className="site-hero-copy">
                <span className="site-kicker">A LITTLE TASTE OF SOMETHING SPECIAL</span>
                <h3>Good food.<br />Better company.</h3>
                <p>Seasonal ingredients, thoughtful cooking, and a table waiting just for you.</p>
                <button className="site-button restaurant-button">EXPLORE OUR MENU <ArrowUpRight size={13} /></button>
                <span className="site-note">FRESHLY PREPARED · MADE TO BE SHARED</span>
              </div>
              <div className="site-hero-image restaurant-photo">
                <img src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=900&q=85" alt="Freshly prepared restaurant dish" />
                <span className="photo-caption">FRESH FROM OUR KITCHEN</span>
              </div>
            </section>
          </>
        )}

        {item.type === "commerce" && (
          <>
            <header className="site-nav commerce-nav">
              <b className="site-logo">NORTH<span>/</span>STUDIO</b>
              <nav><span>NEW IN</span><span>WOMEN</span><span>MEN</span><span>ACCESSORIES</span></nav>
              <span className="commerce-actions"><Search size={14} /><ShoppingBag size={14} /></span>
            </header>
            <section className="commerce-hero">
              <div className="commerce-copy">
                <span className="site-kicker">THE EVERYDAY EDIT · 2026</span>
                <h3>Less, but<br /><i>better.</i></h3>
                <p>Considered essentials for wherever the day takes you.</p>
                <button className="site-button commerce-button">SHOP COLLECTION <ArrowUpRight size={13} /></button>
              </div>
              <div className="commerce-products">
                <article className="commerce-product product-featured">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Red everyday sneaker" />
                  <b>Everyday Runner</b><span>Rs. 8,490</span>
                </article>
                <article className="commerce-product">
                  <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80" alt="Minimal leather handbag" />
                  <b>Everyday Carry</b><span>Rs. 6,200</span>
                </article>
              </div>
            </section>
          </>
        )}

        {item.type === "business" && (
          <>
            <header className="site-nav business-nav">
              <b className="site-logo"><span className="business-mark">V</span> VERTEX <small>BUILDERS</small></b>
              <nav><span>OUR WORK</span><span>SERVICES</span><span>ABOUT</span></nav>
              <button className="site-nav-cta">LET'S TALK <ArrowUpRight size={12} /></button>
            </header>
            <section className="business-hero">
              <div className="business-copy">
                <span className="site-kicker">DESIGN · BUILD · DELIVER</span>
                <h3>Built around<br />your <i>vision.</i></h3>
                <p>Thoughtful spaces. Reliable delivery. A better way to build.</p>
                <button className="site-button business-button">DISCOVER OUR WORK <ArrowUpRight size={13} /></button>
                <div className="business-stats">
                  <span><b>12+</b><small>YEARS OF WORK</small></span>
                  <span><b>86</b><small>PROJECTS DELIVERED</small></span>
                </div>
              </div>
              <div className="business-photo">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85" alt="Modern commercial architecture" />
                <span>01 / BUILT FOR WHAT'S NEXT</span>
              </div>
            </section>
          </>
        )}

        {item.type === "pos" && (
          <div className="pos-page">
            <header className="site-nav pos-nav">
              <b className="site-logo"><span className="pos-mark"><MonitorCheck size={15} /></span> COUNTERFLOW</b>
              <nav><span>PRODUCT</span><span>FEATURES</span><span>PRICING</span></nav>
              <button className="site-nav-cta">BOOK A DEMO <ArrowUpRight size={12} /></button>
            </header>
            <section className="pos-hero">
              <div className="pos-copy">
                <span className="site-kicker">POINT OF SALE · INVENTORY · REPORTING</span>
                <h3>Every sale.<br /><i>Under control.</i></h3>
                <p>One clear view of sales, stock, and the daily work that keeps your business moving.</p>
                <button className="site-button pos-button">EXPLORE THE SYSTEM <ArrowUpRight size={13} /></button>
                <span className="site-note"><Check size={11} /> BUILT FOR BUSY RETAIL TEAMS</span>
              </div>
              <div className="pos-dashboard">
                <div className="pos-dash-head"><b>Business overview</b><span>Today⌄</span></div>
                <div className="pos-metrics">
                  <div><small>NET SALES</small><b>Rs. 248,650</b><em>↑ 12.4%</em></div>
                  <div><small>ORDERS</small><b>186</b><em>↑ 8.2%</em></div>
                  <div><small>LOW STOCK</small><b>07 items</b><em className="pos-warning">Needs review</em></div>
                </div>
                <div className="pos-chart-heading"><b>Sales performance</b><span>Last 7 days</span></div>
                <div className="pos-bars">
                  {[42,65,51,79,57,91,72,100,63,82,58,88,69,94].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}
                </div>
                <div className="pos-dash-footer"><span><i /> Sales trend</span><span>Inventory · Reports · Team</span></div>
              </div>
            </section>
          </div>
        )}

        {item.type === "agency" && (
          <>
            <header className="site-nav agency-nav">
              <b className="site-logo">FORM<span>+</span>FUNCTION</b>
              <nav><span>WHAT WE DO</span><span>SELECTED WORK</span><span>ABOUT</span></nav>
              <button className="site-nav-cta">START A PROJECT <ArrowUpRight size={12} /></button>
            </header>
            <section className="agency-hero">
              <div className="agency-copy">
                <span className="site-kicker">INDEPENDENT DIGITAL STUDIO</span>
                <h3>Ideas made<br /><i>visible.</i></h3>
                <p>We turn ambitious ideas into thoughtful websites, digital products, and better ways of working.</p>
                <button className="site-button agency-button">LET'S MAKE SOMETHING <ArrowUpRight size={13} /></button>
                <span className="agency-services">WEB DESIGN <i /> CLOUD SOLUTIONS <i /> AUTOMATION</span>
              </div>
              <div className="agency-art">
                <div className="agency-art-card agency-art-main"><span>01 / DIGITAL EXPERIENCE</span><b>Make room<br />for better.</b><div className="agency-orbit"><i /><i /><i /></div></div>
                <div className="agency-art-card agency-art-side"><span>02 / BRAND SYSTEM</span><div className="agency-shapes"><i /><i /><i /></div><b>Built to stand out.</b></div>
                <div className="agency-art-note">GOOD IDEAS, MADE REAL ↗</div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = showcases.length;
  const item = showcases[index];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || manuallyPaused || reducedMotion || count < 2) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % count);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, manuallyPaused, reducedMotion, count]);

  if (!item) return null;

  const change = direction => setIndex(current => (current + direction + count) % count);

  return (
    <div
      className={`showcase showcase-fullscreen showcase-theme-${item.type}`}
      style={{
        "--showcase-accent": item.colors?.[0] || "#7be495",
        "--showcase-deep": item.colors?.[1] || "#234d32"
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      aria-label="Website design showcase"
    >
      <div className="showcase-backdrop" />
      <div className="showcase-ambient ambient-one" />
      <div className="showcase-ambient ambient-two" />

      <div className="showcase-design-label">
        <span><Check size={13} /> WEBSITE CONCEPT</span>
        <span className="showcase-count">{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
      </div>

      <div className="showcase-large-art" key={item.id}>
        <div className="showcase-art-heading">
          <span>{item.category}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span className="showcase-art-tag"><ArrowUpRight size={14} /> A concept for your business</span>
        </div>
        <Preview item={item} />
      </div>

      <div className="showcase-controls showcase-controls-full">
        <button className="showcase-arrow" type="button" aria-label="Previous website design" onClick={() => change(-1)}>
          <ArrowLeft size={19} />
        </button>

        <div className="carousel-dots" aria-label="Choose website design">
          {showcases.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className={i === index ? "active" : ""}
              aria-label={`Show ${slide.label}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button className="showcase-arrow" type="button" aria-label="Next website design" onClick={() => change(1)}>
          <ArrowRight size={19} />
        </button>

        <button
          className="showcase-arrow"
          type="button"
          aria-label={
            reducedMotion
              ? "Automatic rotation disabled by motion preference"
              : manuallyPaused
                ? "Resume automatic website showcase"
                : "Pause automatic website showcase"
          }
          aria-pressed={manuallyPaused}
          disabled={reducedMotion}
          onClick={() => setManuallyPaused(current => !current)}
        >
          {manuallyPaused || reducedMotion ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>
    </div>
  );
}
