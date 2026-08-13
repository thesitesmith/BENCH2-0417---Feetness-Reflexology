const points = [
  {
    text: `Clients often mention that the therapist checks in on pressure throughout the visit, so the session never feels rushed even on a busy evening.`,
  },
  {
    text: `People who stand all day for work tend to come back because the relief actually lasts into the next morning.`,
  },
  {
    text: `Walk-ins are common, and even on a busy Saturday clients are usually seen the same evening.`,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-brand-primary">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-brand-background [text-wrap:balance] mb-12">
          What clients say after a session
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((q, i) => (
            <div key={i} className="border-t border-brand-background/20 pt-6">
              <p className="text-brand-background/90 leading-relaxed">
                {q.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
