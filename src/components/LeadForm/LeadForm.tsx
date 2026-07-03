import { useState, type FormEvent } from 'react'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import styles from './LeadForm.module.css'

const WHATSAPP_NUMBER = '5564999890403'

const SERVICES = [
  'Desenvolvimento sob Demanda',
  'SaaS & Produtos Digitais',
  'Automação de Processos',
  'Suporte & Manutenção',
  'Ainda não sei',
] as const

interface FormState {
  nome:      string
  whatsapp:  string
  email:     string
  servico:   string
  mensagem:  string
}

const INITIAL_STATE: FormState = {
  nome:     '',
  whatsapp: '',
  email:    '',
  servico:  '',
  mensagem: '',
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!form.nome.trim()) errors.nome = 'Informe seu nome.'
  if (!form.whatsapp.trim()) errors.whatsapp = 'Informe um WhatsApp para contato.'
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email inválido.'
  }
  if (!form.servico) errors.servico = 'Selecione um serviço.'
  if (!form.mensagem.trim()) errors.mensagem = 'Conte um pouco sobre o projeto.'

  return errors
}

function buildWhatsAppMessage(form: FormState): string {
  const lines = [
    `Olá! Meu nome é ${form.nome}.`,
    `WhatsApp: ${form.whatsapp}`,
    form.email.trim() ? `Email: ${form.email}` : null,
    `Serviço de interesse: ${form.servico}`,
    '',
    `Mensagem: ${form.mensagem}`,
  ].filter((line): line is string => line !== null)

  return lines.join('\n')
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    const text = encodeURIComponent(buildWhatsAppMessage(form))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer')

    setSent(true)
    setForm(INITIAL_STATE)
  }

  return (
    <section className={styles.leadForm} id="orcamento" aria-label="Solicitar orçamento">
      <AnimateOnScroll>
        <p className="section-label">ORÇAMENTO</p>
        <h2 className="section-title">
          Conte sobre<br />
          o seu projeto.
        </h2>
        <p className={styles.sub}>
          Preencha os campos abaixo e a gente continua a conversa no WhatsApp.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={80}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lead-nome">Nome</label>
              <input
                id="lead-nome"
                className={styles.input}
                type="text"
                autoComplete="name"
                value={form.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                aria-invalid={Boolean(errors.nome)}
                aria-describedby={errors.nome ? 'lead-nome-error' : undefined}
              />
              {errors.nome && <span className={styles.error} id="lead-nome-error">{errors.nome}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="lead-whatsapp">WhatsApp</label>
              <input
                id="lead-whatsapp"
                className={styles.input}
                type="tel"
                autoComplete="tel"
                placeholder="(64) 9 9999-9999"
                value={form.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? 'lead-whatsapp-error' : undefined}
              />
              {errors.whatsapp && <span className={styles.error} id="lead-whatsapp-error">{errors.whatsapp}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lead-email">Email <span className={styles.optional}>(opcional)</span></label>
              <input
                id="lead-email"
                className={styles.input}
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'lead-email-error' : undefined}
              />
              {errors.email && <span className={styles.error} id="lead-email-error">{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="lead-servico">Serviço de interesse</label>
              <select
                id="lead-servico"
                className={styles.input}
                value={form.servico}
                onChange={(e) => handleChange('servico', e.target.value)}
                aria-invalid={Boolean(errors.servico)}
                aria-describedby={errors.servico ? 'lead-servico-error' : undefined}
              >
                <option value="" disabled>Selecione uma opção</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.servico && <span className={styles.error} id="lead-servico-error">{errors.servico}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="lead-mensagem">Mensagem</label>
            <textarea
              id="lead-mensagem"
              className={styles.textarea}
              rows={4}
              placeholder="Conte um pouco sobre o problema que você quer resolver."
              value={form.mensagem}
              onChange={(e) => handleChange('mensagem', e.target.value)}
              aria-invalid={Boolean(errors.mensagem)}
              aria-describedby={errors.mensagem ? 'lead-mensagem-error' : undefined}
            />
            {errors.mensagem && <span className={styles.error} id="lead-mensagem-error">{errors.mensagem}</span>}
          </div>

          <div className={styles.actions}>
            <button type="submit" className={`btn-primary ${styles.submit}`}>
              Enviar pelo WhatsApp →
            </button>
            {sent && (
              <span className={styles.success} role="status">
                Abrimos o WhatsApp em outra aba — só confirmar o envio por lá.
              </span>
            )}
          </div>
        </form>
      </AnimateOnScroll>
    </section>
  )
}
