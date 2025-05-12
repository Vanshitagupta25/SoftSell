import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SoftSell - Sell Your Unused Software Licenses",
  description: "Turn unused software into cash effortlessly with SoftSell. Fast, secure, and trusted by thousands.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}