import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getNavigation } from "@/lib/api/services";
import type { NavigationItem } from "@/types/api";

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  let navigation: NavigationItem[] = [];

  try {
    const response = await getNavigation();

    if (response.success && Array.isArray(response.data)) {
      navigation = response.data;
    }
  } catch (error) {
    console.error("Failed to load navigation:", error);
  }

  return (
    <html lang="id" className={googleSans.variable}>
      <body>
        <Navbar navigation={navigation} />
        {children}
        <Footer />
      </body>
    </html>
  );
}