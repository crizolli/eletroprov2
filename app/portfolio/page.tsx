import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { portfolioItems } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Portfólio | EletroPro - Engenharia Elétrica',
  description: 'Conheça os projetos e experiência da EletroPro: mais de 15 projetos elétricos, 30 laudos técnicos e comissionamentos realizados.',
}

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nosso Portfólio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos e serviços que realizamos para nossos clientes
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-lg p-8 hover:border-primary-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.category}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="bg-primary-600 text-white rounded-lg px-4 py-2 text-center group-hover:bg-primary-700 transition-colors">
                    <p className="text-2xl font-bold">{item.count}</p>
                    <p className="text-sm">projetos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Nossa Experiência</h2>

          <div className="space-y-6 text-gray-700">
            <p>
              A EletroPro acumula experiência em diversos segmentos industriais e comerciais,
              desenvolvendo projetos elétricos de alta complexidade, realizando laudos técnicos
              criteriosos e garantindo a conformidade de todas as instalações com as normas
              técnicas vigentes.
            </p>
            <p>
              Cada projeto realizado reforça nosso compromisso com a excelência técnica e a
              satisfação de nossos clientes. Estamos constantemente atualizando nossos
              conhecimentos e práticas para oferecer as melhores soluções em engenharia elétrica.
            </p>
            <p>
              Se você busca um parceiro confiável em engenharia elétrica, a EletroPro está
              pronta para transformar seus desafios técnicos em soluções inovadoras e seguras.
            </p>
          </div>

          <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 rounded-r-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quer conhecer mais sobre um projeto específico?
            </h3>
            <p className="text-gray-700 mb-4">
              Entre em contato conosco para obter mais informações sobre nossa experiência e
              como podemos ajudar seu próximo projeto.
            </p>
            <Link
              href="/contato"
              className="btn-primary"
            >
              Solicitar Informações
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
