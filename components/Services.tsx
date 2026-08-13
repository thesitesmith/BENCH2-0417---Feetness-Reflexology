import Image from 'next/image';

const services = [
  {
    num: '01',
    name: `Foot Reflexology`,
    desc: `Thumb pressure worked along the sole and arch to find where a long day has settled, held at whatever depth feels right for that visit.`,
  },
  {
    num: '02',
    name: `Hand Massage`,
    desc: `Slower work through the palm and each finger, suited to hands that spend the day gripping a wheel, a phone or a keyboard.`,
  },
  {
    num: '03',
    name: `Full Body Reflexology`,
    desc: `Pressure points across feet, hands and back addressed in one longer session for anyone carrying tension in more than one place.`,
  },
  {
    num: '04',
    name: `Chair Massage`,
    desc: `A shorter seated session focused on neck and shoulders, built for a visit that needs to fit into a lunch hour rather than an afternoon.`,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance]">
          Reflexology, hand and chair work
        </h2>
        <p className="mt-4 max-w-prose text-brand-text/80 leading-relaxed">
          Every session is built around pressure, not talk. Choose the one that
          matches what needs attention today.
        </p>

        <div className="mt-12 divide-y divide-brand-text/10">
          {services.map((s) => (
            <div key={s.num} className="py-8 flex gap-6 items-start">
              <span className="font-heading text-4xl md:text-5xl text-brand-primary/20 leading-none">
                {s.num}
              </span>
              <div>
                <h3 className="font-body font-semibold text-lg text-brand-text">
                  {s.name}
                </h3>
                <p className="mt-2 max-w-prose text-brand-text/75 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden w-full aspect-[16/9]">
          <Image
            src="/images/gallery-1.jpg"
            alt="Close-up of a therapist's hands giving a hand massage at Feetness Reflexology"
            fill
            sizes="100vw"
            className="object-cover object-center saturate-[.95] contrast-[1.03]"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-24">
        <svg
          viewBox="0 0 200 400"
          className="mx-auto w-[70%] md:w-[55%] text-brand-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M100 20 C60 20 40 80 45 150 C50 220 30 260 35 320 C40 370 80 390 100 380 C120 390 160 370 165 320 C170 260 150 220 155 150 C160 80 140 20 100 20 Z" />
          <circle cx="75" cy="60" r="5" fill="#C4956A" stroke="none" />
          <circle cx="100" cy="55" r="5" fill="#C4956A" stroke="none" />
          <circle cx="125" cy="60" r="5" fill="#C4956A" stroke="none" />
          <circle cx="90" cy="180" r="5" fill="#C4956A" stroke="none" />
          <circle cx="110" cy="180" r="5" fill="#C4956A" stroke="none" />
          <circle cx="80" cy="300" r="5" fill="#C4956A" stroke="none" />
          <circle cx="120" cy="300" r="5" fill="#C4956A" stroke="none" />
        </svg>
        <p className="mt-4 text-center text-xs tracking-[0.18em] uppercase text-brand-text/70">
          Reflexology
        </p>
      </div>
    </section>
  );
}
