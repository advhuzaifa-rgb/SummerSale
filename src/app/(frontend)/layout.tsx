import React from 'react'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://summersale.alhuzaifa.com'),
  title: 'Al Huzaifa Summer Sale | Exclusive Deals on Luxury Furniture & Decor',
  description:
    'Discover the Al Huzaifa Summer Sale — unbeatable discounts on luxury furniture, home decor, and interiors in the UAE. Shop premium quality for less, for a limited time only.',
  keywords: [
    'Al Huzaifa summer sale',
    'Al Huzaifa furniture sale',
    'Al Huzaifa Properties',
    'luxury furniture UAE',
    'furniture sale Dubai',
    'home decor sale UAE',
    'summer sale Dubai',
    'Al Huzaifa Dubai',
    'furniture discounts UAE',
    'luxury interiors sale',
  ],
  openGraph: {
    title: 'Al Huzaifa Summer Sale | Exclusive Deals on Luxury Furniture & Decor',
    description:
      'Discover the Al Huzaifa Summer Sale — unbeatable discounts on luxury furniture, home decor, and interiors in the UAE.',
    url: 'https://summersale.alhuzaifa.com',
    siteName: 'Al Huzaifa Summer Sale',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Al Huzaifa Summer Sale',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Huzaifa Summer Sale | Exclusive Deals on Luxury Furniture & Decor',
    description:
      'Discover the Al Huzaifa Summer Sale — unbeatable discounts on luxury furniture, home decor, and interiors in the UAE.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/PPHatton-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/modernline-personal-use.bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
