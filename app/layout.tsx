import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const customFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Metro Funding NYC: Tailored Funding Solutions for New York Businesses",
  description:
    "Metro Funding NYC provides tailored funding solutions for New York businesses. We offer a variety of funding products and services to help you grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={customFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
