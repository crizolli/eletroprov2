import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eletroproeng.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/sobre`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/servicos`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contato`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/orcamento`, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
