import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_INSTALLATION_TYPES = ['Industrial', 'Comercial', 'Outro']
const MAX_REQUEST_SIZE = 10_000

type ResendError = {
  message?: string
  name?: string
  statusCode?: number
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function getResendErrorMessage(error: unknown): string {
  if (!error || typeof error !== 'object') {
    return 'Falha ao enviar email'
  }

  const resendError = error as ResendError

  return resendError.message || resendError.name || 'Falha ao enviar email'
}

function getPublicEmailErrorMessage(error: unknown): string {
  const message = getResendErrorMessage(error)

  if (message.toLowerCase().includes('testing emails')) {
    return 'Serviço de email aguardando verificação do domínio. Tente novamente em alguns minutos.'
  }

  return 'Não foi possível enviar sua solicitação agora. Tente novamente em alguns minutos.'
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.RESEND_FROM_EMAIL || 'EletroPro <onboarding@resend.dev>'

  if (!apiKey || !to) {
    return null
  }

  return {
    resend: new Resend(apiKey),
    from,
    to,
  }
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0)

    if (contentLength > MAX_REQUEST_SIZE) {
      return NextResponse.json({ error: 'Solicitação muito grande' }, { status: 413 })
    }

    let body

    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
    }

    const { name, email, phone, service, installationType, description } = body
    const trimmedName = typeof name === 'string' ? name.trim() : ''
    const trimmedEmail = typeof email === 'string' ? email.trim() : ''
    const trimmedPhone = typeof phone === 'string' ? phone.trim() : ''
    const trimmedService = typeof service === 'string' ? service.trim() : ''
    const trimmedDescription = typeof description === 'string' ? description.trim() : ''

    if (!trimmedName || trimmedName.length > 100) {
      return NextResponse.json({ error: 'Nome inválido' }, { status: 400 })
    }

    if (!trimmedEmail || trimmedEmail.length > 254 || !EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 })
    }

    if (phone && (typeof phone !== 'string' || trimmedPhone.length > 20)) {
      return NextResponse.json({ error: 'Telefone inválido' }, { status: 400 })
    }

    if (!trimmedService || trimmedService.length > 200) {
      return NextResponse.json({ error: 'Serviço inválido' }, { status: 400 })
    }

    if (!installationType || !VALID_INSTALLATION_TYPES.includes(installationType)) {
      return NextResponse.json({ error: 'Tipo de instalação inválido' }, { status: 400 })
    }

    if (!trimmedDescription || trimmedDescription.length > 2000) {
      return NextResponse.json({ error: 'Descrição inválida (máx. 2000 caracteres)' }, { status: 400 })
    }

    const emailConfig = getEmailConfig()

    if (!emailConfig) {
      console.error('Configuração de email incompleta: RESEND_API_KEY e/ou CONTACT_EMAIL ausentes')
      return NextResponse.json(
        { error: 'Serviço de email não configurado' },
        { status: 503 }
      )
    }

    const { error } = await emailConfig.resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: trimmedEmail,
      subject: `Solicitação de Orçamento - ${trimmedService}`,
      html: `
        <h2>Nova Solicitação de Orçamento</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Nome</strong></td><td>${escapeHtml(trimmedName)}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${escapeHtml(trimmedEmail)}</td></tr>
          <tr><td><strong>Telefone</strong></td><td>${escapeHtml(trimmedPhone || '-')}</td></tr>
          <tr><td><strong>Serviço</strong></td><td>${escapeHtml(trimmedService)}</td></tr>
          <tr><td><strong>Tipo de instalação</strong></td><td>${escapeHtml(installationType)}</td></tr>
        </table>
        <h3>Descrição</h3>
        <p style="white-space:pre-wrap">${escapeHtml(trimmedDescription)}</p>
      `,
    })

    if (error) {
      const publicErrorMessage = getPublicEmailErrorMessage(error)
      console.error('Resend error:', error)
      return NextResponse.json({ error: publicErrorMessage }, { status: 502 })
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitação recebida com sucesso. Entraremos em contato em breve.',
    })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
