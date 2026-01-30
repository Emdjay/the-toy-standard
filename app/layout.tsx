import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thetoystandard.com"),
  title: {
    default: "The Toy Standard",
    template: "%s | The Toy Standard",
  },
  description:
    "Parent-first toy recommendations focused on safety, longevity, and play value.",
  alternates: {
    canonical: "https://www.thetoystandard.com",
  },
  openGraph: {
    title: "The Toy Standard",
    description:
      "Parent-first toy recommendations focused on safety, longevity, and play value.",
    url: "https://www.thetoystandard.com",
    siteName: "The Toy Standard",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Toy Standard",
    description:
      "Parent-first toy recommendations focused on safety, longevity, and play value.",
  },
  other: {
    "impact-site-verification": "a43c9816-b2fb-4306-93ab-75615fba98a2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} body`}>
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
