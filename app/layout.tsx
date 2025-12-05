import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zibra Consultores - Estrategias Soluciones",
  description:
    "Expert business consulting services to optimize operations, increase efficiency, and drive sustainable growth for your business.",
  generator: "Zibra consultores",
  icons: {
    icon: [
      {
        url: "/",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${montserrat.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
