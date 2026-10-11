import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <a className="brand footer-brand" href="#home" aria-label="HZTECHCLOUD home">
        <span className="brand-hz">HZ</span><span className="brand-name">TECHCLOUD</span>
      </a>

      <p>Practical digital solutions for your business.</p>

      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#work">Our Work</a>
        <a href="#about">About</a>
        <a href="#request">Request Help</a>
        <a href="#contact">Contact <ArrowUpRight size={13} /></a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HZTECHCLOUD. All rights reserved.</span>
        <span>Websites <i /> Applications <i /> DevOps</span>
      </div>
    </footer>
  );
}
