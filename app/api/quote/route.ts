import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_INSTALLATION_TYPES = ['Industrial', 'Comercial', 'Outro']

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, installationType, description } = body

    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json({ error: 'Nome inválido' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 })
    }

    if (phone && (typeof phone !== 'string' || phone.length > 20)) {
      return NextResponse.json({ error: 'Telefone inválido' }, { status: 400 })
    }

    if (!service || typeof service !== 'string' || service.trim().length === 0 || service.length > 200) {
      return NextResponse.json({ error: 'Serviço inválido' }, { status: 400 })
    }

    if (!installationType || !VALID_INSTALLATION_TYPES.includes(installationType)) {
      return NextResponse.json({ error: 'Tipo de instalação inválido' }, { status: 400 })
    }

    if (!description || typeof description !== 'string' || description.trim().length === 0 || description.length > 2000) {
      return NextResponse.json({ error: 'Descrição inválida (máx. 2000 caracteres)' }, { status: 400 })
    }

    if (!resend) {
      console.error('RESEND_API_KEY não configurada')
      return NextResponse.json({ error: 'Serviço de email não configurado' }, { status: 503 })
    }

    const destEmail = process.env.CONTACT_EMAIL
    if (!destEmail) {
      console.error('CONTACT_EMAIL não configurada')
      return NextResponse.json({ error: 'Serviço de email não configurado' }, { status: 503 })
    }

    const { error } = await resend.emails.send({
      from: 'EletroPro <onboarding@resend.dev>',
      to: destEmail,
      replyTo: email,
      subject: `Solicitação de Orçamento — ${service}`,
      html: `
        <h2>Nova Solicitação de Orçamento</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Nome</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Telefone</strong></td><td>${escapeHtml(phone || '—')}</td></tr>
          <tr><td><strong>Serviço</strong></td><td>${escapeHtml(service)}</td></tr>
          <tr><td><strong>Tipo de instalação</strong></td><td>${escapeHtml(installationType)}</td></tr>
        </table>
        <h3>Descrição</h3>
        <p style="white-space:pre-wrap">${escapeHtml(description)}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Falha ao enviar email' }, { status: 502 })
    }

    return NextResponse.json(
      { success: true, message: 'Solicitação recebida com sucesso. Entraremos em contato em breve.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
