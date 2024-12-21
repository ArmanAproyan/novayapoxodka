import type { Metadata } from "next";
import "./globals.css";
import MainPage from "./components/MainPage/MainPage";

export const metadata: Metadata = {
  title: "Новая-Походка: Ремонт обуви и изготовление ключей",
  description:
    "Новая Походка — профессиональный ремонт обуви и ключей. Чистка, реставрация и качественное обслуживание обуви в вашем районе.",
  openGraph: {
    title: "Новая-Походка: Ремонт обуви и ключей",
    description:
      "Ищете качественный ремонт обуви и ключей? Новая Походка предлагает профессиональное обслуживание и реставрацию обуви в кратчайшие сроки!",
    url: "https://yourwebsite.com",
    siteName: "Новая Походка",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Новая-Походка: Ремонт обуви и ключей",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://novayapoxodka.ru",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="yandex-verification" content="d1723de03ccf8c01" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        /><link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        /><link rel="icon" href="/favicon.ico" />
         <link rel="canonical" href="https://novayapoxodka.ru" />
      </head>
      <body>
        <MainPage />
        <div>{children}</div>
      </body>
    </html>
  );
}
