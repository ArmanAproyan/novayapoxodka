import type { Metadata } from "next";
import "./globals.css";
import MainPage from "./components/MainPage/MainPage";

export const metadata: Metadata = {
  title: "Новая-Походка",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
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
        {children}
      </body>
    </html>
  );
}
