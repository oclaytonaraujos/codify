import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import serviceStyles from '../Services/Services.module.css'
import styles from './LegalConsulting.module.css'

const PHONE = '5564999890403'

const CARDS = [
  {
    num: '01',
    tag: 'LC 167/2019',
    title: 'CNPJ Inova Simples',
    desc: 'Constituição completa da sua empresa como Inova Simples (LC 167/2019) — o regime jurídico desenhado pra startups em fase de validação. Trâmite na Redesim, enquadramento, contrato social e orientação de pós-registro. A Codify é Inova Simples; levamos você pelo caminho que já percorremos.',
    waMsg: 'Olá, tenho interesse no serviço de constituição de CNPJ Inova Simples.',
  },
  {
    num: '02',
    tag: 'LGPD · Lei 13.709',
    title: 'LGPD & Documentos para Software',
    desc: 'Política de Privacidade, Termos de Uso, política de cookies e mapeamento de conformidade LGPD — elaborados pela nossa equipe jurídica e calibrados pela engenharia que entende seu produto. Documento que protege de verdade, não template adaptado.',
    waMsg: 'Olá, tenho interesse na consultoria de LGPD e documentos para software.',
  },
]

export function LegalConsulting() {
  return (
    <section
      className={serviceStyles.services}
      id="consultoria"
      aria-labelledby="consultoria-titulo"
    >
      <AnimateOnScroll>
        <p className="section-label">CONSULTORIA</p>
        <h2
          id="consultoria-titulo"
          className={`section-title ${styles.titleWithSub}`}
        >
          Consultoria &amp; Estruturação Jurídica
        </h2>
        <p className={styles.subtitle}>
          Software bom precisa de base legal sólida. Nosso time une
          desenvolvimento e advocacia especializada em direito digital —
          você fala com quem entende de código e de norma, no mesmo lugar.
        </p>
      </AnimateOnScroll>

      <div className={serviceStyles.grid}>
        {CARDS.map((card, index) => {
          const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(card.waMsg)}`
          return (
            <AnimateOnScroll key={card.num} delay={index * 80}>
              <article className={serviceStyles.card}>
                <div className={serviceStyles.num}>{card.num}</div>
                <div className={serviceStyles.tag}>{card.tag}</div>
                <h3 className={serviceStyles.title}>{card.title}</h3>
                <p className={serviceStyles.desc}>{card.desc}</p>
                <a
                  href={href}
                  className={styles.cardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Saiba mais sobre ${card.title} pelo WhatsApp`}
                >
                  Saiba mais
                </a>
              </article>
            </AnimateOnScroll>
          )
        })}
      </div>
    </section>
  )
}
