import type React from "react"
import type { Metadata } from "next"
// import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "ALMURISI" ,
  description: "نظام أجور لتوفير عمالة مرخصة",
  metadataBase: new URL("https://aboseaf.vercel.app"),
 openGraph: {
   images: ["/copengraph-image.png"],
 },
  twitter : {
    card : "summary_large_image"
  },
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
