import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
// adding this gtag

import "./globals.scss";
import { Providers } from "@/redux/provider";
const ORIGIN=
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
  description:
    "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",

  metadataBase: new URL(ORIGIN),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <head>
      {/* Add Google site verification meta tag */}
      <meta name="google-site-verification" content="nxv83caf4R0Z7y98gEt4aqgmwX1i3A01FqmGStM1WVg" />
     </head>
      <body>
        <Providers>{children}</Providers>
      </body>
      {/* staring here gtag */}
      <GoogleAnalytics gaId="G-FJXVS176M2" />
      {/* End here gtag */}
    </html>
  );
}
