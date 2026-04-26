'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { engineeringServices, executionServices } from '@/lib/config'

type Props = {
  value: string
  onChange: (value: string) => void
}

const groups = [
  {
    label: 'Engenharia Elétrica',
    options: engineeringServices.map((s) => s.title),
  },
  {
    label: 'Execução',
    options: executionServices.map((s) => s.title),
  },
  {
    label: '',
    options: ['Não sei / Preciso de orientação'],
  },
]

export default function ServiceSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Selecionar serviço"
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-3 text-left transition-colors focus:border-primary-600 focus:outline-none"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value || 'Selecione um serviço...'}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          <div role="listbox" aria-label="Serviços disponíveis" className="max-h-80 overflow-y-auto">
            {groups.map((group) => (
              <div key={group.label || 'other'}>
                {group.label && (
                  <div className="bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {group.label}
                  </div>
                )}
                {group.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={value === opt}
                    onClick={() => {
                      onChange(opt)
                      setOpen(false)
                    }}
                    className={`flex w-full items-center justify-between px-4 py-4 text-left text-base transition-colors hover:bg-primary-50 hover:text-primary-700 ${
                      value === opt
                        ? 'bg-primary-50 font-medium text-primary-700'
                        : 'text-gray-700'
                    }`}
                  >
                    <span>{opt}</span>
                    {value === opt && <Check className="h-5 w-5 flex-shrink-0 text-primary-600" />}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
