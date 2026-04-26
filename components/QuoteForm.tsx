'use client'

import { useState, useEffect, useRef } from 'react'
import ServiceSelect from '@/components/ServiceSelect'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  installationType: string
  description: string
}

const inputClass =
  'w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary-600 focus:outline-none'
const labelClass = 'mb-2 block text-sm font-semibold text-gray-900'

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    installationType: '',
    description: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.service || !formData.installationType || !formData.description) {
      setStatus('error')
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', installationType: '', description: '' })
        resetTimerRef.current = setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setErrorMessage('Erro ao enviar. Tente novamente.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Erro ao conectar com o servidor. Tente novamente.')
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Section 1: Identification */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Seus Dados</h3>

        <div>
          <label htmlFor="name" className={labelClass}>Nome Completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Seu nome"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Section 2: Project Info */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Sobre o Projeto</h3>

        <div>
          <label className={labelClass}>Serviço desejado *</label>
          <ServiceSelect
            value={formData.service}
            onChange={(v) => setFormData((prev) => ({ ...prev, service: v }))}
          />
        </div>

        <div>
          <label className={labelClass}>Tipo de instalação *</label>
          <div className="flex flex-wrap gap-6">
            {(['Industrial', 'Comercial', 'Outro'] as const).map((type) => (
              <label key={type} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="installationType"
                  value={type}
                  checked={formData.installationType === type}
                  onChange={handleChange}
                  className="accent-primary-600"
                />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>Descrição da necessidade *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary-600 focus:outline-none"
            placeholder="Descreva sua necessidade: tamanho da instalação, características específicas, normas envolvidas, etc."
          />
        </div>
      </div>

      {status === 'success' && (
        <div className="rounded-lg border border-green-500 bg-green-50 px-4 py-3 text-green-700">
          Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-lg border border-red-500 bg-red-50 px-4 py-3 text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
      </button>

      <p className="text-center text-sm text-gray-600">* Campos obrigatórios</p>
    </form>
  )
}
