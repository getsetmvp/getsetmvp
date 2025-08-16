import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from '@/constants';

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: "GetSetMVP Team" }],
  generator: "Next.js",
  keywords: ["MVP development", "startup", "web app", "fast development", "2-week MVP", "minimum viable product", "product launch", "startup ideas", "app development", "rapid prototyping"],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  metadataBase: new URL("https://getsetmvp.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: "https://getsetmvp.com",
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ['/images/og-image.png'],
  },
  verification: {
    // Can be added later when verification is needed
    // google: "google-site-verification-code",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffdc58" />
      </head>
      <body
        className={`${lato.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
