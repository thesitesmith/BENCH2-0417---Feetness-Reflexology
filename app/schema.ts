export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Feetness Reflexology",
  "description": "Massage spa in Fort Worth",
  "telephone": "(682) 312-9196",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9501 Clifford St Ste 133",
    "addressLocality": "Fort Worth",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "hasMap": "https://www.google.com/maps/place/Feetness+Reflexology/data=!4m7!3m6!1s0x864e0c807740a551:0xca01c931b35f5a95!8m2!3d32.7635615!4d-97.4811203!16s%2Fg%2F11d_tsc18l!19sChIJUaVAd4AMToYRlVpfszHJAco?authuser=0&hl=en&rclk=1",
  "image": "/images/hero.jpg",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "21:00"
    }
  ]
} as const;
