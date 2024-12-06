import type { Metadata } from "next";
import "./globals.css";
import MainPage from "./components/MainPage/MainPage";


export const metadata: Metadata = {
  title: "Ремонт обуви и ключей Новая-Походка",
  description: "Новая Похходка — Профессиональный ремонт обуви, чистка и реставрация. Вернем вашим туфлям, ботинкам и сапогам первозданный вид!",
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
      </head>
      <body>
        <MainPage />
        {children}
      </body>
    </html>
  );
}
