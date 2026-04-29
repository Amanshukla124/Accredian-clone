import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics that deliver measurable ROI.",
  keywords:
    "enterprise learning, corporate training, IIT programs, upskilling, L&D, workforce development",
  openGraph: {
    title: "Accredian Enterprise | Upskill Your Workforce at Scale",
    description:
      "Partner with IITs, IIMs, and global universities to upskill your enterprise teams.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
