
import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const googleSans = localFont({
  src: "../assets/fonts/GoogleSans-Variable.ttf",
  variable: "--font-google-sans",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GDGoC",
    template: "%s | GDGoC",
  },
  description: "Google Developer Groups on Campus",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id" className={googleSans.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
