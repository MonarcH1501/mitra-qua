import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitra Qua — Air Galon Isi Ulang Bersih & Sehat Pontianak",
  description: "Mitra Qua: depot air galon isi ulang terpercaya di Pontianak. Air bersih 20 liter hanya Rp 6.000. Proses filtrasi modern, higienis, pengiriman ke rumah. Sehat untuk keluarga Anda.",
  keywords: "air galon isi ulang Pontianak, depot air minum Pontianak, air galon murah, isi ulang galon 6000, air bersih Pontianak, Mitra Qua",
  authors: [{ name: "Mitra Qua" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://mitra-qua.vercel.app/",
    title: "Mitra Qua — Air Galon Isi Ulang Bersih & Sehat",
    description: "Air bersih 20 liter Rp 6.000. Proses filtrasi modern, higienis, pengiriman ke rumah.",
    locale: "id_ID",
    siteName: "Mitra Qua",
  },
  alternates: { canonical: "https://mitra-qua.vercel.app/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mitra Qua",
  description: "Depot air galon isi ulang terpercaya di Pontianak. Air bersih 20 liter Rp 6.000.",
  url: "https://mitra-qua.vercel.app",
  telephone: "+62812-3456-7892",
  email: "hello@mitraqua.id",
  foundingDate: "2018",
  priceRange: "Rp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sungai Raya No. 45",
    addressLocality: "Pontianak",
    addressRegion: "Kalimantan Barat",
    postalCode: "78391",
    addressCountry: "ID",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "07:00", closes: "21:00",
  }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200", bestRating: "5" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
