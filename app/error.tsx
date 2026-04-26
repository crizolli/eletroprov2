'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-50 via-white to-white px-4 py-20">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary-600">Ops!</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Algo deu errado</h1>
        <p className="mt-4 text-lg text-gray-600">
          Ocorreu um erro inesperado. Tente novamente ou entre em contato.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button onClick={reset} className="btn-primary">
            Tentar Novamente
          </button>
          <Link href="/" className="btn-outline">
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  )
}
