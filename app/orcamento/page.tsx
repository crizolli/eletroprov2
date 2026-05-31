import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Solicitar Orçamento',
  description: 'Solicite um orçamento personalizado para projetos elétricos, laudos técnicos, inspeções e consultoria especializada em baixa tensão.',
  alternates: {
    canonical: '/orcamento',
  },
}

const pageTitleClass = 'text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl'
const pageIntroClass = 'mx-auto max-w-3xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9'

export default function Quote() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className={`${pageTitleClass} mb-2`}>
              Solicitar Orçamento
            </h1>
            <p className={pageIntroClass}>
              Preencha o formulário e nossa equipe elaborará uma proposta técnica personalizada para o seu projeto
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="bg-white py-5 md:py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
