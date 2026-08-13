'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: `Services` },
  { href: '#feature', label: `Why Us` },
  { href: '#testimonials', label: `Reviews` },
  { href: '#faq', label: `FAQ` },
  { href: '#contact', label: `Contact` },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-brand-primary border-b border-brand-text/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Feetness Reflexology icon"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="font-heading text-xl md:text-2xl tracking-tight text-brand-background whitespace-nowrap">
            Feetness Reflexology
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                active === l.href
                  ? 'text-brand-accent'
                  : 'text-brand-background/85 hover:text-brand-background'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+16823129196"
            className="whitespace-nowrap bg-brand-accent text-brand-text px-5 py-2.5 rounded-none font-semibold text-sm transition-colors hover:bg-brand-accent/90"
          >
            Call Us
          </a>
        </div>

        <button
          className="lg:hidden text-brand-background"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-primary border-t border-brand-background/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-brand-background/90 text-base font-medium whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+16823129196"
            onClick={() => setIsMenuOpen(false)}
            className="bg-brand-accent text-brand-text px-5 py-3 text-center font-semibold whitespace-nowrap"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  );
}
