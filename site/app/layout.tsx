import './globals.css'
import type { Metadata } from 'next'
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { ThemeProvider } from './components/ui/themeProvider'

const baseUrl = 'https://gpumode.ai'
const fontSans = GeistSans
const fontMono = GeistMono


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'GPU Mode',
    template: '%s | GPU Mode',
  },
  description: 'Your favorite GPU community',
  openGraph: {
    title: 'GPU Mode',
    description: 'Your favorite GPU community',
    url: baseUrl,
    siteName: 'GPU Mode',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111]',
        fontSans.variable,
        fontMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto min-h-screen dark:bg-[#111]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="min-h-screen dark:bg-[#111]">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Navbar />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
