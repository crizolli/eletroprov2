# EletroPro — Website

Website profissional para EletroPro - Engenharia Elétrica, construído com Next.js 15 + TypeScript + Tailwind CSS.

## Tecnologias

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 3**
- **Resend** (envio de emails)

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — serviços em destaque e diferenciais |
| `/sobre` | Sobre a empresa, valores e responsável técnico |
| `/servicos` | Lista completa de serviços |
| `/portfolio` | Projetos realizados |
| `/contato` | Canais de contato (telefone e email) |
| `/orcamento` | Formulário de solicitação de orçamento |

---

## Configuração de Email

O formulário de orçamento envia emails via [Resend](https://resend.com).

Crie o arquivo `.env.local` na raiz do projeto:

```
RESEND_API_KEY=sua_api_key_aqui
CONTACT_EMAIL=seu@email.com
RESEND_FROM_EMAIL=EletroPro <contato@seudominio.com.br>
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

> **Nota:** O remetente `onboarding@resend.dev` funciona apenas para envio ao email do dono da conta Resend. Para enviar a qualquer destinatário em produção, verifique um domínio próprio em resend.com e configure `RESEND_FROM_EMAIL`.

---

## Personalizações

### Informações da empresa
Edite `lib/config.ts` — telefone, email, localização, serviços e portfólio.

### Cores
Edite `tailwind.config.ts`:
- Cor primária (azul): `#1451A6`

### Logo
Substitua `public/ELETROProLogoV2.png`. Atualize dimensões em `components/Header.tsx` se necessário.

---

## Deploy no Vercel

1. Criar repositório GitHub privado e fazer push
2. Conectar ao Vercel: https://vercel.com/new
3. Adicionar variáveis de ambiente no dashboard Vercel:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `RESEND_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy automático a cada push

---

## Estrutura de arquivos

```
├── app/
│   ├── page.tsx              # Home
│   ├── sobre/page.tsx
│   ├── servicos/page.tsx
│   ├── portfolio/page.tsx
│   ├── contato/page.tsx
│   ├── orcamento/page.tsx    # Formulário de orçamento
│   ├── api/quote/route.ts    # API de envio de email
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   ├── ServiceSelect.tsx     # Dropdown customizado de serviços
│   └── QuoteForm.tsx         # Formulário de orçamento
├── lib/
│   └── config.ts             # Dados da empresa e serviços
├── public/
│   └── ELETROProLogoV2.png
├── .env.example
└── next.config.js
```
