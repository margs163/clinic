import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Levita Medical Clinic Website",
  description: "A web application for a medical clinic - Levita.",
};

const inter = Inter({
  subsets: ["cyrillic", "latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50/90 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
