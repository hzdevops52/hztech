import React from "react";
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  ['Services', '#services'],
  ['Our Work', '#work'],
  ['About', '#about'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="HZ TECH home">
        <span className="brand-mark">HZ</span>
        <span>TECH<span className="brand-period">.</span></span>
      </a>

      <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      <a className="nav-cta" href="#contact">
        Let's Talk <ArrowUpRight size={16} />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
