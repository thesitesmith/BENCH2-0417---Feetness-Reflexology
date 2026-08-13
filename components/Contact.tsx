import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  const address = '9501 Clifford St Ste 133, Fort Worth, TX';
  const mapSrc =
    'https://www.google.com/maps?q=' + encodeURIComponent(address) + '&output=embed';

  return (
    <section id="contact" className="py-20 md:py-24 bg-brand-primary/[0.04]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance] mb-6">
          Call to book or find the room
        </h2>
        <p className="max-w-prose text-brand-text/80 leading-relaxed mb-10">
          The room sits at 9501 Clifford St Ste 133 in Fort Worth, tucked into a
          small suite that is easy to miss if you are not looking for it. Calling
          ahead is the fastest way to check availability, and a quick call also
          gives a chance to confirm which service fits best before the visit
          starts. Walk-ins are welcome whenever the schedule allows, but a
          reserved time means less waiting on a busy evening.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center gap-6">
            <a
              href="tel:+16823129196"
              className="inline-flex w-fit items-center gap-2 bg-brand-accent text-brand-text px-8 py-4 font-semibold text-lg transition-colors hover:bg-brand-accent/90"
            >
              <Phone size={18} />
              Call Us
            </a>

            <ul className="space-y-4 text-brand-text/85">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-brand-primary" />
                <span>{address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-1 text-brand-primary" />
                <span>
                  Monday to Saturday: 10 AM to 9 PM
                  <br />
                  Sunday: 11 AM to 8 PM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-brand-primary" />
                <a href="tel:+16823129196" className="underline">
                  (682) 312-9196
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative overflow-hidden w-full min-h-[300px] h-full">
              
            </div>
            <a
              href="https://www.google.com/maps/place/Feetness+Reflexology/data=!4m7!3m6!1s0x864e0c807740a551:0xca01c931b35f5a95!8m2!3d32.7635615!4d-97.4811203!16s%2Fg%2F11d_tsc18l!19sChIJUaVAd4AMToYRlVpfszHJAco?authuser=0&hl=en&rclk=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm underline text-brand-text/80"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    
      <div className="mx-auto max-w-6xl px-6 mt-10">
        <div className="relative overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps?q=9501%20Clifford%20St%20Ste%20133&output=embed"
            title="Location map"
            loading="lazy"
            className="h-[320px] w-full border-0"
          />
        </div>
      </div>
</section>
  );
}
