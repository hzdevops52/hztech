import React from "react";
import { ArrowUpRight, CheckCircle2, Code2, GitBranch, Layers3 } from 'lucide-react';

const strengths = [
  { icon: Code2, title: 'Practical development', description: 'Responsive interfaces and useful business-focused applications.' },
  { icon: Layers3, title: 'A complete workflow', description: 'From source code and containers to repeatable deployments.' },
  { icon: GitBranch, title: 'Automation-minded', description: 'Version control and CI pipelines that help catch issues early.' }
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-shell about-layout">
        <div className="about-main">
          <span className="section-kicker"><span /> WHY HZ TECH</span>
          <h2>Not just a website.<br /><span className="text-gradient">A solution that fits.</span></h2>
          <p className="about-description">
            Every business has different needs. The goal is to understand yours, choose the right tools, and deliver a solution that's clear, maintainable, and built to grow.
          </p>
          <a className="button-primary" href="#contact">Let's discuss your idea <ArrowUpRight size={17} /></a>
        </div>

        <div className="strength-list">
          {strengths.map(({ icon: Icon, title, description }, index) => (
            <div className="strength-item" key={title}>
              <span className="strength-icon"><Icon size={21} /></span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <CheckCircle2 className="strength-check" size={18} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
