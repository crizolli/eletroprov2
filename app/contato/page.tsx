import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { company, companyPhoneHref } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contato | EletroPro - Engenharia Elétrica',
  description: 'Entre em contato com a EletroPro. Solicite orçamentos para projetos elétricos, laudos técnicos e consultoria especializada em baixa tensão.',
}

const pageTitleClass = 'text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl'
const pageIntroClass = 'mx-auto max-w-3xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9'

export default function Contact() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className={`${pageTitleClass} mb-2`}>
              Entre em Contato
            </h1>
            <p className={pageIntroClass}>
              Escolha o canal mais conveniente e receba uma resposta ágil da nossa equipe
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="bg-white py-5 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-2 text-3xl font-bold leading-tight text-gray-900">Canais de Contato</h2>
            <p className="mb-8 text-lg leading-8 text-gray-600">
              Estamos disponíveis para tirar dúvidas, apresentar soluções e elaborar propostas técnicas.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col rounded-lg border border-primary-100 bg-primary-50 p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Telefone</h3>
                <p className="mb-4 flex-1 text-base leading-7 text-gray-600">
                  Fale diretamente com um engenheiro para agilizar seu atendimento ou agendar uma visita técnica.
                </p>
                <a href={`tel:${companyPhoneHref}`} className="btn-primary mt-auto">
                  {company.phone}
                </a>
              </div>
              <div className="flex flex-col rounded-lg border border-secondary-100 bg-secondary-50 p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">E-mail</h3>
                <p className="mb-4 flex-1 text-base leading-7 text-gray-600">
                  Se preferir contato por email, descreva suas necessidades e nossa equipe entrará em contato o mais breve possível.
                </p>
                <a href={`mailto:${company.email}`} className="btn-secondary mt-auto">
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
