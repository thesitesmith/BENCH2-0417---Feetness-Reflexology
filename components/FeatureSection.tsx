import Image from 'next/image';

const points = [
  {
    title: `Never rushed`,
    desc: `Sessions run the full length booked, with pressure adjusted as the visit goes rather than cut short at a clock.`,
  },
  {
    title: `Open when they say they are`,
    desc: `Hours hold steady across the week, including evenings, so a visit fits after work rather than before it.`,
  },
  {
    title: `Pressure set by the client`,
    desc: `The depth of the thumb work is checked and adjusted through the session instead of applied the same way to everyone.`,
  },
];

export default function FeatureSection() {
  return (
    <section id="feature" className="py-20 md:py-24 bg-brand-primary/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance] mb-12">
          What clients notice most
        </h2>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-8">
            {points.map((p) => (
              <div key={p.title}>
                <p className="font-body font-semibold text-lg text-brand-text">
                  {p.title}
                </p>
                <p className="mt-1 max-w-prose text-brand-text/75 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
            <a
              href="tel:+16823129196"
              className="inline-block mt-4 bg-brand-accent text-brand-text px-6 py-3 font-semibold transition-colors hover:bg-brand-accent/90"
            >
              Call Us
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="relative overflow-hidden w-full h-full min-h-[280px] mb-6">
              <Image
                src="/images/gallery-2.jpg"
                alt="A relaxed client reclining after a reflexology session at Feetness Reflexology"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center saturate-[.95] contrast-[1.03]"
              />
            </div>
            <p className="font-heading text-2xl md:text-3xl leading-snug text-brand-text [text-wrap:balance]">
              "Leave feeling lighter, with pressure adjusted just for you."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
