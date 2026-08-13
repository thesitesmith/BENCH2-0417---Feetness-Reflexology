import type { Metadata } from 'next';
import { Lora, Karla } from 'next/font/google';
import './globals.css';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Beacon from '../components/Beacon';

export const metadata = {
  title: "Feetness Reflexology | Massage spa in Fort Worth, TX",
  description: "Feetness Reflexology, Massage spa in Fort Worth, TX. Call (682) 312-9196.",
  openGraph: {
    title: "Feetness Reflexology | Massage spa in Fort Worth, TX",
    description: "Feetness Reflexology, Massage spa in Fort Worth, TX. Call (682) 312-9196.",
    type: "website",
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feetness Reflexology | Massage spa in Fort Worth, TX",
    description: "Feetness Reflexology, Massage spa in Fort Worth, TX. Call (682) 312-9196.",
    images: ["/images/og.jpg"],
  },
};


const lora = Lora({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-heading',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable + ' ' + karla.variable}>
      <body className="font-body bg-brand-background text-brand-text">
        <LocalBusinessSchema />
        <Beacon />
        {children}
      </body>
    </html>
  );
}
