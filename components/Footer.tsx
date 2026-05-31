import Link from 'next/link'
import { company, companyPhoneHref } from '@/lib/config'
import { Mail, Phone, MapPin } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{company.name}</h3>
            <p className="text-sm mb-4">{company.description}</p>
            <p className="text-sm text-gray-400">
              Fundada em {company.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-primary-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-primary-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href={`tel:${companyPhoneHref}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span>{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>© {CURRENT_YEAR} {company.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
