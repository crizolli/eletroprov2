import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '404 — Página Não Encontrada | EletroPro',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-primary-50 via-white to-white px-4 py-20">
        <div className="text-center">
          <p className="text-6xl font-bold text-primary-600">404</p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Página não encontrada</h1>
          <p className="mt-4 text-lg text-gray-600">
            A página que você procura não existe ou foi movida.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/" className="btn-primary">
              Voltar ao Início
            </Link>
            <Link href="/contato" className="btn-outline">
              Fale Conosco
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
