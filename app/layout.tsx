import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Myers-Briggs Personality Test | Discover Your Type",
  description: "Take the comprehensive Myers-Briggs personality assessment to discover your 16-type personality. Learn about all 16 personality types and understand yourself better.",
  generator: "Shreyash Srivastva",
  icons: {
    icon: "https://static.diffen.com/uploadz/a/af/tesla--1.jpg",
    shortcut: "hhttps://static.diffen.com/uploadz/a/af/tesla--1.jpg",
    apple: "https://static.diffen.com/uploadz/a/af/tesla--1.jpg",
  },}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
