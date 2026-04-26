import type { ReactNode } from 'react'
import {
  Zap,
  FileText,
  CheckCircle,
  Hammer,
  Calculator,
  LayoutGrid,
} from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
}

const iconMap: Record<string, ReactNode> = {
  Zap: <Zap className="h-7 w-7 text-primary-600" />,
  FileText: <FileText className="h-7 w-7 text-primary-600" />,
  CheckCircle: <CheckCircle className="h-7 w-7 text-primary-600" />,
  Hammer: <Hammer className="h-7 w-7 text-primary-600" />,
  Calculator: <Calculator className="h-7 w-7 text-primary-600" />,
  LayoutGrid: <LayoutGrid className="h-7 w-7 text-primary-600" />,
}

export default function ServiceCard({
  title,
  description,
  icon = 'Zap',
}: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
        {iconMap[icon] || iconMap.Zap}
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">{title}</h3>
      <p className="text-base leading-7 text-gray-600">{description}</p>
    </div>
  )
}
