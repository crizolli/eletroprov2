import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { company } from '@/lib/config'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre | EletroPro - Engenharia Elétrica',
  description: 'Conheça a EletroPro: empresa especializada em engenharia elétrica com foco em projetos, laudos técnicos e consultoria em baixa tensão.',
}

const pageTitleClass = 'text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl'
const pageIntroClass = 'mx-auto max-w-3xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9'

export default function About() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className={`${pageTitleClass} mb-2`}>
              Sobre a {company.name}
            </h1>
            <p className={pageIntroClass}>
              Conheça nossa história, missão e equipe especializada
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-white py-5 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">Nossa Empresa</h2>
              <div className="space-y-4 text-base leading-8 text-gray-600">
                <p>
                  A <strong>{company.name}</strong> é uma empresa especializada em engenharia
                  elétrica, fundada em <strong>{company.founded}</strong>, atuando em{' '}
                  <strong>{company.location}</strong>.
                </p>
                <p>
                  Nossa missão é fornecer soluções técnicas de excelência em engenharia
                  elétrica, com foco em projetos, análises técnicas e suporte especializado
                  para instalações de baixa tensão.
                </p>
                <p>
                  Atendemos clientes industriais e comerciais, oferecendo um serviço
                  personalizado, com rigor técnico e conformidade total com as normas
                  brasileiras e internacionais.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-primary-100 bg-primary-50 p-6 shadow-sm md:p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                {company.technicalLead.title}
              </h3>
              <p className="mb-4 text-lg font-semibold text-primary-600">
                {company.technicalLead.profession}
              </p>
              <div className="space-y-3">
                {company.technicalLead.credentials.map((credential) => (
                  <div key={credential} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-12 md:text-5xl">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">Excelência Técnica</h3>
              <p className="text-base leading-7 text-gray-600">
                Compromisso com a qualidade e rigor nos projetos e serviços oferecidos
              </p>
            </div>

            <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">Segurança</h3>
              <p className="text-base leading-7 text-gray-600">
                Prioridade absoluta na segurança de nossas soluções e na conformidade com NR10
              </p>
            </div>

            <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">Parceria</h3>
              <p className="text-base leading-7 text-gray-600">
                Atuamos como parceiros de confiança, entendendo as necessidades dos clientes
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
