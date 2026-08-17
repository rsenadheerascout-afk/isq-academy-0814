import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Configure the font array to map to your specific files in the /fonts folder
const futuraLtPaneuropean = localFont({
  src: [
    {
      path: "./fonts/FuturaLTPaneuropeanBook.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FuturaLTPaneuropeanBookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/FuturaLTPaneuropeanBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/FuturaLTPaneuropeanExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/FuturaLTPaneuropeanExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-futura-lt-paneuropean",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iSeeQ Academy",
  description: "Empowering you with Skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Inject the CSS variable into the HTML tag here
    <html lang="en" className={`${futuraLtPaneuropean.variable}`}>
      <body className="antialiased bg-white text-black">
        {/* Navbar will render on every page */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}