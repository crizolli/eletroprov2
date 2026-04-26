import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import { company, engineeringServices } from '@/lib/config'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'EletroPro — Engenharia Elétrica',
  description: 'Projetos e consultoria de engenharia elétrica para instalações industriais e comerciais. Especialistas em baixa tensão, laudos técnicos e conformidade normativa.',
}

export default function Home() {
  const featuredServices = engineeringServices.slice(0, 4)
  const heroTitleClass = 'text-3xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl'
  const sectionTitleClass = 'text-[2rem] font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-[2.75rem]'
  const homeIntroClass = 'mx-auto max-w-3xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9'
  const sectionEyebrowClass = 'mb-3 inline-flex rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className={`${heroTitleClass} mb-5`}>
              Projetos e Consultoria de
              <span className="mt-2 block text-primary-700"> Engenharia Elétrica</span>
            </h1>
            <p className={homeIntroClass}>
              {company.description}
            </p>
            <div className="mx-auto mt-5 max-w-3xl">
              <div className="hidden flex-wrap items-center justify-center gap-3 sm:flex">
                <div className="rounded-full border border-primary-100 bg-white/80 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm shadow-primary-100/40 backdrop-blur">
                  Projetos em baixa tensão
                </div>
                <div className="rounded-full border border-primary-100 bg-white/80 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm shadow-primary-100/40 backdrop-blur">
                  Conformidade normativa
                </div>
                <div className="rounded-full border border-primary-100 bg-white/80 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm shadow-primary-100/40 backdrop-blur">
                  Suporte técnico especializado
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-white py-7 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:mb-10">
            <span className={sectionEyebrowClass}>Especialidades</span>
            <h2 className={`${sectionTitleClass} mb-4`}>Serviços de Engenharia Elétrica</h2>
            <p className={`${homeIntroClass} max-w-2xl`}>
              Soluções técnicas especializadas para seus projetos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-10 text-center md:mt-12">
            <Link
              href="/servicos"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Ver Todos os Serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:mb-12">
            <span className={sectionEyebrowClass}>Diferenciais</span>
            <h2 className={`${sectionTitleClass} mb-4`}>Por Que Escolher a EletroPro?</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">Experiência Técnica</h3>
              <p className="text-base leading-7 text-gray-600">
                Equipe altamente qualificada com especialização em baixa tensão e NR10
              </p>
            </div>

            <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <span className="text-xl text-primary-700">✓</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">Conformidade Normativa</h3>
              <p className="text-base leading-7 text-gray-600">
                Projetos e laudos em conformidade com as normas brasileiras e internacionais
              </p>
            </div>

            <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">Eficiência</h3>
              <p className="text-base leading-7 text-gray-600">
                Soluções otimizadas que garantem segurança e desempenho dos sistemas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-10 text-white md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-white/15 bg-white/10 px-6 py-10 text-center shadow-lg shadow-primary-900/10 backdrop-blur sm:px-8 md:px-12 md:py-12">
            <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-100">
              Vamos conversar
            </span>
            <h2 className={`${sectionTitleClass} mb-4 text-white`}>
              Pronto para Começar?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-primary-100 md:text-xl md:leading-9">
              Entre em contato conosco para conhecer como podemos ajudar seu projeto
            </p>
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-700 shadow-sm transition-all hover:bg-primary-50 hover:shadow"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
