import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Configure the font array to map to your specific files in the /fonts folder
const futuraLtPaneuropean = localFont({
  src: [
    {
      path: "./fonts/paneuropean/FuturaLTPaneuropeanBook.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/paneuropean/FuturaLTPaneuropeanBookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/paneuropean/FuturaLTPaneuropeanBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/paneuropean/FuturaLTPaneuropeanExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/paneuropean/FuturaLTPaneuropeanExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-futura-lt-paneuropean",
});

const urbanist = localFont({
  src: [
    { path: "./fonts/urbanist/Urbanist-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./fonts/urbanist/Urbanist-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/urbanist/Urbanist-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iseeq.lk"),

  title: {
    default: "iSeeQ Academy | Professional Learning",
    template: "%s | iSeeQ Academy",
  },

  description:
    "iSeeQ Academy provides flexible learning, professional development, digital skills, AI training, and practical courses led by industry experts.",

  keywords: [
    "iSeeQ Academy",
    "iSeeQ",
    "iSeeQ.lk",
    "iSeeQ pvt ltd",
    "ICT training",
    "ICT courses",
    "ICT learning",
    "lifeskill courses",
    "professional development",
    "digital skills",
    "AI courses",
    "AI training",
    "business courses",
    "quality education Sri Lanka",
    "professional training Sri Lanka",
  ],

  authors: [{ name: "iSeeQ Academy" }],
  creator: "iSeeQ Academy",
  publisher: "iSeeQ Academy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iseeq.lk",
    siteName: "iSeeQ Academy",
    title: "iSeeQ Academy | Professional Learning",
    description:
      "Flexible learning and professional development led by industry experts.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "iSeeQ Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "iSeeQ Academy | Professional Learning",
    description:
      "Flexible learning and professional development led by industry experts.",
    images: ["/opengraph-image.jpg"],
  },

  alternates: {
    canonical: "https://iseeq.lk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Inject the CSS variable into the HTML tag here
    <html lang="en" className={`${futuraLtPaneuropean.variable} ${urbanist.variable}`}>
      <body className="antialiased bg-white text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}