import './globals.css'
import type { Metadata } from 'next'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayaan Grover | Modern Portfolio',
  description: 'Full Stack Developer specializing in Next, Node.js, and Swift',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={syne.className}>{children}</body>
    </html>
  )
}