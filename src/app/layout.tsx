import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const title =
  "Flutter Box Shadow Generator - Create Beautiful Flutter Shadows | Free Tool";
const description =
  "Generate stunning Flutter box shadows with our free online tool. Copy-paste ready shadow effects for your Flutter projects. 90+ curated shadow styles with live preview.";
const url = "https://flutter-boxshadow.vercel.app";
export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "box shadow generator",
    "flutter box shadow",
    "shadow generator",
    "css shadows",
    "web design tools",
    "css generator",
    "box shadow css",
    "shadow effects",
    "flutter development tools",
    "frontend tools",
  ],
  authors: [{ name: "JeronDev", url: "https://youtube.com/@JeronDev" }],
  creator: "JeronDev",
  publisher: "JeronDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: url,
    siteName: "Flutter Box Shadow Generator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Box Shadow Generator - Create Beautiful Flutter Shadows",
    description:
      "Generate stunning Flutter box shadows with our free online tool. Copy-paste ready shadow effects for your Flutter projects.",
    creator: "@jerondev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position={"top-center"} />
      </body>
    </html>
  );
}
