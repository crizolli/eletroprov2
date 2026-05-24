import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'EletroPro | Engenharia Elétrica',
  description: 'Soluções técnicas para instalações elétricas industriais e comerciais',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
