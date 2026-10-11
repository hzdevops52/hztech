import React from "react";
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <section className="section-shell services-section" id="services">
      <div className="section-heading">
        <div>
          <span className="section-kicker"><span /> WHAT WE CAN DO FOR YOU</span>
          <h2>Technology that <span className="text-gradient">works for you.</span></h2>
        </div>
        <p>From your first website to automated deployment, practical solutions for the next stage of your business.</p>
      </div>

      <div className="services-grid">
        {services.map(({ icon: Icon, number, title, description, tags }) => (
          <article className="service-card" key={number}>
            <div className="service-card-top">
              <span className="service-icon"><Icon size={22} strokeWidth={1.7} /></span>
              <span className="service-number">{number}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a href="#contact" className="service-link" aria-label={`Ask about ${title}`}><MoveUpRight size={17} /></a>
          </article>
        ))}
      </div>

      <a href="#contact" className="text-link">Have something specific in mind? <span>Let's talk <ArrowUpRight size={16} /></span></a>
    </section>
  );
}
