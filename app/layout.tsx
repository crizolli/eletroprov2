import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { company, siteUrl } from '@/lib/config'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'EletroPro | Engenharia Elétrica em Paulínia e Região',
    template: '%s | EletroPro',
  },
  description: 'Projetos elétricos, laudos técnicos, inspeções e consultoria em baixa tensão para instalações industriais e comerciais em Paulínia e região.',
  applicationName: company.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: company.name,
    title: 'EletroPro | Engenharia Elétrica em Paulínia e Região',
    description: 'Projetos elétricos, laudos técnicos, inspeções e consultoria em baixa tensão para instalações industriais e comerciais.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EletroPro Engenharia Elétrica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EletroPro | Engenharia Elétrica em Paulínia e Região',
    description: 'Projetos elétricos, laudos técnicos, inspeções e consultoria em baixa tensão.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/novoLogo.png',
    apple: '/novoLogo.png',
  },
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
      </body>
    </html>
  )
}
