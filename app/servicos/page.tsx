import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import StructuredData from '@/components/StructuredData'
import { engineeringServices, executionServices, siteUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Serviços de Engenharia Elétrica',
  description: 'Serviços de engenharia elétrica: projetos elétricos de baixa tensão, laudos técnicos, inspeções, comissionamento e dimensionamento de cargas e painéis.',
  alternates: {
    canonical: '/servicos',
  },
}

const pageTitleClass = 'text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl'
const pageIntroClass = 'mx-auto max-w-3xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9'
const sectionTitleClass = 'mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl'

export default function Services() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços de Engenharia Elétrica EletroPro',
    url: `${siteUrl}/servicos`,
    itemListElement: [...engineeringServices, ...executionServices].map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@id': `${siteUrl}/#empresa`,
        },
      },
    })),
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={structuredData} />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className={`${pageTitleClass} mb-2`}>
              Nossos Serviços
            </h1>
            <p className={pageIntroClass}>
              Soluções técnicas especializadas em engenharia elétrica com foco em baixa tensão
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="bg-white py-5 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-12">
            <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              Foco Principal
            </div>
            <h2 className={sectionTitleClass}>Serviços de Engenharia Elétrica</h2>
            <p className="max-w-3xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
              Nossa especialidade é o fornecimento de soluções técnicas de engenharia elétrica
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Execution Services */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-12">
            <div className="mb-4 inline-flex items-center rounded-full bg-secondary-100 px-4 py-2 text-sm font-semibold text-secondary-700">
              Complementar
            </div>
            <h2 className={sectionTitleClass}>Serviços de Execução</h2>
            <p className="max-w-3xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
              Complementando nossos serviços de engenharia com execução profissional
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {executionServices.map((service, index) => (
              <div
                key={service.id}
                className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-50">
                  <span className="text-lg font-semibold text-secondary-700">{index + 1}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">
                  {service.title}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Engineering Focus */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-12 md:text-5xl">
            Por Que Foco em Engenharia?
          </h2>

          <div className="rounded-lg border border-primary-100 bg-primary-50 p-6 shadow-sm md:p-10">
            <p className="mb-4 leading-8 text-gray-700">
              A EletroPro reconhece que a engenharia elétrica é o coração de qualquer projeto
              bem-sucedido. Nossas competências em projeto, análise e consultoria técnica
              garantem que cada aspecto de sua instalação elétrica seja otimizado para
              segurança, eficiência e conformidade normativa.
            </p>
            <p className="mb-4 leading-8 text-gray-700">
              Enquanto oferecemos serviços de execução, nossa verdadeira diferenciação está
              na profundidade e precisão de nossas soluções de engenharia. Isso significa que
              seus projetos são desenvolvidos com o rigor e conhecimento especializado que
              apenas engenheiros experientes podem oferecer.
            </p>
            <p className="leading-8 text-gray-700">
              Seja um projeto novo, uma inspeção crítica ou um comissionamento complexo,
              você pode contar com nossa experiência e dedicação à excelência técnica.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
