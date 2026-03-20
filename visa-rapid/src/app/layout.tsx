import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import StructuredData from "@/components/StructuredData";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.visarapid.com'),
  title: {
    default: "Visa Rapid — Move to Europe Permanently",
    template: "%s | Visa Rapid",
  },
  description: "Visa Rapid helps working professionals move to Europe permanently through business, startup, and job seeker visa pathways. Book a free consultation today.",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.visarapid.com',
    siteName: 'Visa Rapid',
    title: 'Visa Rapid — Move to Europe Permanently',
    description: 'Visa Rapid helps working professionals move to Europe permanently through business, startup, and job seeker visa pathways.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Visa Rapid' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Rapid — Move to Europe Permanently',
    description: 'Visa Rapid helps working professionals move to Europe permanently through business, startup, and job seeker visa pathways.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="any" href="/VR.png" />
        <link rel="apple-touch-icon" href="/VR.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.apollo.io" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preload" as="image" href="/image3.webp" type="image/webp" fetchPriority="high" imageSrcSet="/image3-mobile.webp 750w, /image3.webp 1330w" imageSizes="(max-width: 1024px) 100vw, 50vw" />
      </head>
      <body
        className={`${openSans.variable} ${playfair.variable} antialiased min-h-screen w-full bg-white overflow-x-hidden`}
      >
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69a5244143c84d00112ab94f"})},document.head.appendChild(o)}initApollo();`}
        </Script>
        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Visa Rapid',
          url: 'https://www.visarapid.com',
          logo: 'https://www.visarapid.com/VR.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-9910578099',
            contactType: 'customer service',
            email: 'nikita@visarapid.com',
          },
          sameAs: [],
        }} />
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
