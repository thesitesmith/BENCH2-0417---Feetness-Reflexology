export default function Footer() {
  return (
    <footer className="bg-brand-background pb-20 md:pb-0">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <span className="font-heading text-xl md:text-2xl tracking-tight text-brand-text">
          Feetness Reflexology
        </span>
        <p className="mt-3 max-w-prose text-brand-text/75 leading-relaxed">
          A reflexology room in Fort Worth for anyone whose feet, hands or back
          need real pressure and unhurried time.
        </p>
      </div>

      <div className="border-t border-brand-text/10">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-brand-text/60">
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Website by The Sitesmith
          </a>{' '}
          &copy; {new Date().getFullYear()} Feetness Reflexology
        </div>
      </div>
    </footer>
  );
}
