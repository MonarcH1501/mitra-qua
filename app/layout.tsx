import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitra Qua — Air Galon Isi Ulang Bersih Rp 6.000 | Pontianak",
  description:
    "Mitra Qua depot air galon isi ulang terpercaya di Pontianak. Air minum bersih 20 liter hanya Rp 6.000. Filtrasi 7 tahap, tersertifikasi, antar ke rumah. Buka setiap hari 07.00–21.00.",
  keywords:
    "air galon isi ulang Pontianak, depot air minum Pontianak, isi ulang galon murah, air galon 6000, depot air Sungai Raya, Mitra Qua Pontianak, air bersih Pontianak",
  authors: [{ name: "Mitra Qua" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    url: "https://mitra-qua.vercel.app/",
    title: "Mitra Qua — Air Galon Isi Ulang Bersih Rp 6.000",
    description: "Depot air galon isi ulang terpercaya di Pontianak. 20 liter Rp 6.000, filtrasi 7 tahap, antar ke rumah.",
    locale: "id_ID",
    siteName: "Mitra Qua",
    images: [{ url: "https://mitra-qua.vercel.app/og.png", width: 1200, height: 630, alt: "Mitra Qua - Air Galon Isi Ulang Pontianak" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitra Qua — Air Galon Isi Ulang Bersih Rp 6.000",
    description: "Depot air galon isi ulang terpercaya di Pontianak. 20 liter Rp 6.000, antar ke rumah.",
    images: ["https://mitra-qua.vercel.app/og.png"],
  },
  alternates: { canonical: "https://mitra-qua.vercel.app/" },
  verification: {
    google: "GANTI_DENGAN_KODE_VERIFIKASI_GOOGLE_SEARCH_CONSOLE",
  },
  category: "food & drink",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mitra-qua.vercel.app/#business",
  name: "Mitra Qua",
  description: "Depot air galon isi ulang terpercaya di Pontianak. Air minum bersih 20 liter hanya Rp 6.000 dengan filtrasi 7 tahap.",
  url: "https://mitra-qua.vercel.app",
  logo: "https://mitra-qua.vercel.app/logo.png",
  image: "https://mitra-qua.vercel.app/og.png",
  telephone: "+62812-3456-7892",
  email: "hello@mitraqua.id",
  foundingDate: "2018",
  priceRange: "Rp",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Transfer Bank, QRIS",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sungai Raya No. 45",
    addressLocality: "Pontianak",
    addressRegion: "Kalimantan Barat",
    postalCode: "78391",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.0476,
    longitude: 109.3294,
  },
  hasMap: "https://maps.google.com/?q=Mitra+Qua+Pontianak",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Ibu Sari" },
      reviewBody: "Sudah 3 tahun jadi pelanggan Mitra Qua. Harga murah tapi kualitas airnya enak banget.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Pak Rudi" },
      reviewBody: "Pakai paket 10 galon, langsung diantar ke rumah. Pelayanannya cepat dan ramah.",
    },
  ],
  sameAs: [
    "https://www.instagram.com/mitraqua",
    "https://www.facebook.com/mitraqua",
  ],
  offers: {
    "@type": "Offer",
    name: "Isi Ulang Galon 20 Liter",
    price: "6000",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
    description: "Air galon isi ulang 20 liter dengan filtrasi 7 tahap",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#6358E5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
