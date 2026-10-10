import React from "react";
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">HZ</span><span>TECH<span className="brand-period">.</span></span>
      </a>
      <p>Thoughtful digital solutions. Built with purpose.</p>
      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#work">Our Work</a>
        <a href="#contact">Contact <ArrowUpRight size={13} /></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HZ TECH. All rights reserved.</span>
        <span>Web development <i /> Deployment <i /> DevOps</span>
      </div>
    </footer>
  );
}
