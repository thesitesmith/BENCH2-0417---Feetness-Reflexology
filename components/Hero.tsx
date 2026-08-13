'use client';

import Image from 'next/image';
import { useReducedMotion, motion } from 'framer-motion';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="grid lg:grid-cols-2 min-h-screen">
      <div className="order-2 lg:order-1 bg-brand-primary flex items-center px-8 lg:px-16 py-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-brand-background [text-wrap:balance]">
            Start at the feet and the rest follows
          </h1>
          <p className="mt-6 max-w-prose text-brand-background/85 text-lg leading-relaxed">
            A reflexology room in Fort Worth for anyone who has been standing, walking
            or working on their feet all day and wants the pressure taken off, one
            arch at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+16823129196"
              className="bg-brand-accent text-brand-text px-8 py-4 font-semibold text-base transition-colors hover:bg-brand-accent/90"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="order-1 lg:order-2 relative overflow-hidden h-[55vh] lg:h-auto">
        <Image
          src="/images/hero.jpg"
          alt="A therapist giving a foot reflexology massage in a warmly lit room at Feetness Reflexology"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center saturate-[.95] contrast-[1.03]"
        />
      </div>
    </section>
  );
}
