import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header/header"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} min-h-screen `}>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
