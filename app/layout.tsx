import type { Metadata } from "next";
import "./globals.css";
import MainPage from "./components/MainPage/MainPage";

export const metadata: Metadata = {
  title: "Новая-Походка: Ремонт обуви и изготовление ключей",
  description:
    "Новая Походка — Профессиональный ремонт и реставрация обуви изготовление ключей. Чистка, реставрация и качественное обслуживание обуви. Доверяйте мастерам с опытом!",
  openGraph: {
    title: "Новая Походка Ремонт и реставрация обуви, изготовление ключей",
    description:
      "Ищете качественный ремонт обуви и ключей? Новая Походка предлагает профессиональное обслуживание и реставрацию обуви в кратчайшие сроки!",
    url: "https://novayapoxodka.ru",
    siteName: "Новая Походка Ремонт и реставрация обуви, изготовление ключей",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Новая-Походка: ремонт и реставрация обуви, изготовление ключе",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новая-Походка: ремонт обуви и ключей",
    description:
      "Профессиональный ремонт обуви, реставрация и чистка. Доверяйте мастерам Новая Походка!",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://novayapoxodka.ru",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
      <title>Новая Походка — Ремонт и Реставрация Обуви, Изготовление Ключей в Санкт-Петербурге</title>
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Новая походка"/>
      <meta name="description" content="Ремонт обуви, реставрация, изготовление ключей и другие услуги в Санкт-Петербурге. Высокое качество и доступные цены. Новая Походка — ваш мастер по ремонту обуви!" />
      <meta property="og:title" content="Новая Походка — Ремонт и Реставрация Обуви Изготовление ключей"/>
      <meta property="og:description" content="Качественный ремонт обуви и изготовление ключей в Санкт-Петербурге. Обращайтесь в Новую Походку для реставрации и ремонта обуви." />
      <meta property="og:image" content="https://novayapoxodka.ru/favicon.ico" />
      <meta property="og:url" content="https://novayapoxodka.ru"/>
      <meta property="og:type" content="website" />
      <meta name="geo.region" content="RU-SPE" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="geo.placename" content="Санкт-Петербург" />
      <meta name="yandex-verification" content="d1723de03ccf8c01" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </head>
      <body>
        <MainPage />
        <div>{children}</div>
      </body>
    </html>
  );
}
