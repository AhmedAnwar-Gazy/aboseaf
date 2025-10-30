import type React from "react"
import type { Metadata } from "next"
// import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "نظام أجور - عمالة مرخصة",
  description: "نظام أجور لتوفير عمالة مرخصة",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body  >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
