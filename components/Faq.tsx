const faqs = [
  {
    q: 'How do I book a session?',
    a: 'Call the number on this page to check availability and get a time set. Walk-ins are welcome too, though calling ahead means less waiting once you arrive.',
  },
  {
    q: 'Do you take walk-ins or only appointments?',
    a: 'Both. A walk-in can usually be worked in, but a call ahead holds a specific time so a session does not turn into a wait on a busy evening.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday to Saturday, 10 AM to 9 PM. Sunday, 11 AM to 8 PM.',
  },
  {
    q: 'Where are you located and what area do you serve?',
    a: 'The room is at 9501 Clifford St Ste 133 in Fort Worth, TX, serving clients from around the city who come in for a session in person.',
  },
  {
    q: 'What happens during a first visit?',
    a: 'Pressure and any areas of focus get talked through before the session starts, then the work moves through the feet, hands or back depending on what was booked.',
  },
  {
    q: 'How long does a session take?',
    a: 'Length depends on which service is booked, from a shorter chair session to a longer full body appointment. The desk can confirm timing when the visit is scheduled.',
  },
  {
    q: 'How does payment work?',
    a: 'Payment posture for reflexology work is generally settled at the end of the visit, once the session and any add-ons are complete, and details can be confirmed by phone before booking.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-brand-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance] mb-10">
          Questions people ask before their first visit
        </h2>

        <div className="divide-y divide-brand-text/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="list-none flex items-center justify-between cursor-pointer font-body font-semibold text-brand-text">
                <span>{f.q}</span>
                <span className="ml-4 text-brand-accent group-open:rotate-45 transition-transform text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-brand-text/75 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
