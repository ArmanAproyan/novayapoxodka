import type { Metadata } from "next";
import "./globals.css";
import MainPage from "./components/MainPage/MainPage";


export const metadata: Metadata = {
  title: "Ремонт обуви и ключей Новая-Походка — Качество и надежность",
  description:
    "Новая Походка — Профессиональный ремонт обуви и ключей в вашем районе. Чистка, реставрация и качественное обслуживание обуви. Доверяйте мастерам с опытом!",
  keywords: [
    "ремонт обуви",
    "ремонт ключей",
    "чистка обуви",
    "реставрация обуви",
    "мастерская по ремонту обуви",
    "ремонт обуви и ключей",
    "домофон",
    "ключи для домофона",
    "сайт ремонт обуви",
    "сайт ремонт ключей"
  ],
  openGraph: {
    title: "Ремонт обуви и ключей Новая-Походка",
    description:
      "Ищете качественный ремонт обуви и ключей? Новая Походка предлагает профессиональное обслуживание и реставрацию обуви в кратчайшие сроки!",
    url: "https://yourwebsite.com",
    siteName: "Новая Походка",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Мастерская Новая Походка — ремонт обуви и ключей",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ремонт обуви и ключей Новая-Походка",
    description:
      "Профессиональный ремонт обуви, реставрация и чистка. Доверяйте мастерам Новая Походка!",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      </head>
      <body>
        <MainPage />
        {children}
      </body>
    </html>
  );
}
