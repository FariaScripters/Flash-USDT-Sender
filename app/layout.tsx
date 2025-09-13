import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Provider } from "@/components/ui/provider"
import "@/styles/globals.css" // Import globals.css here

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flash USDT Sender - Secure Cryptocurrency Transactions",
  description:
    "Fast, secure, and reliable cryptocurrency payment processing with real-time tracking across multiple blockchain networks including BTC, SOL, BNB, and USDT.",
  keywords: "cryptocurrency, USDT, Bitcoin, blockchain, secure transactions, crypto sender, multi-network",
  authors: [{ name: "RecentCoders" }],
  creator: "RecentCoders",
  publisher: "Flash USDT Sender",
  robots: "index, follow",
  openGraph: {
    title: "Flash USDT Sender - Secure Cryptocurrency Transactions",
    description: "Fast, secure, and reliable cryptocurrency payment processing with real-time tracking.",
    url: "https://flashusdtsender.xyz",
    siteName: "Flash USDT Sender",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flash USDT Sender - Secure Crypto Transactions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash USDT Sender - Secure Cryptocurrency Transactions",
    description: "Fast, secure, and reliable cryptocurrency payment processing with real-time tracking.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#319795",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('chakra-ui-color-mode');
                  if (!mode) mode = 'dark';
                  document.documentElement.dataset.theme = mode;
                  document.documentElement.style.colorScheme = mode;
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Flash USDT Sender" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Flash USDT Sender",
              description:
                "Secure cryptocurrency transaction tool for multiple blockchain networks including BTC, ETH, USDT, BNB, SOL, TRX, LTC, DOGE",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web Browser",
              url: "https://flashusdtsender.xyz",
              downloadUrl: "https://flashusdtsender.xyz",
              screenshot: "/og-image.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1247",
                bestRating: "5",
                worstRating: "1",
              },
              author: {
                "@type": "Organization",
                name: "RecentCoders",
                url: "https://t.me/RecentCoders",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Basic Plan",
                  price: "250",
                  priceCurrency: "USD",
                  description: "Essential features for beginners",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Professional Plan",
                  price: "250",
                  priceCurrency: "USD",
                  description: "Advanced features for serious users",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Enterprise Plan",
                  price: "250",
                  priceCurrency: "USD",
                  description: "Custom solutions for businesses",
                  availability: "https://schema.org/InStock",
                },
              ],
              featureList: [
                "Secure Transactions",
                "90-Day Validity",
                "Multi-Network Support",
                "Undetectable Transfers",
                "Priority Customer Support",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Flash USDT Sender",
              description:
                "Fast, secure, and reliable cryptocurrency payment processing with real-time tracking across multiple blockchain networks including BTC, SOL, BNB, and USDT.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web Browser",
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Provider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </Provider>
      </body>
    </html>
  )
}
