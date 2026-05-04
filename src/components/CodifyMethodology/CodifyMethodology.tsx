import { STEPS } from '../../data/methodology'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import { TimelineItem } from './TimelineItem'
import styles from './CodifyMethodology.module.css'

const WHATSAPP_MSG = 'Olá, Codify! Quero agendar um Discovery gratuito para entender como vocês podem ajudar meu negócio.'
const WHATSAPP_URL = `https://wa.me/5564999990403?text=${encodeURIComponent(WHATSAPP_MSG)}`

export function CodifyMethodology() {
  return (
    <section
      className={styles.methodology}
      id="metodologia"
      aria-label="Metodologia Codify"
    >
      <AnimateOnScroll>
        <p className="section-label">COMO TRABALHAMOS</p>
        <h2 className="section-title">
          Do problema à solução.<br />
          Sem atalhos, sem surpresas.
        </h2>
      </AnimateOnScroll>

      <ol className={styles.timeline} role="list">
        {STEPS.map((step, index) => (
          <TimelineItem
            key={step.id}
            step={step}
            index={index}
            total={STEPS.length}
          />
        ))}
      </ol>

      <AnimateOnScroll delay={STEPS.length * 100 + 100}>
        <div className={styles.ctaWrapper}>
          <p className={styles.ctaText}>
            Pronto pra dar o primeiro passo?
          </p>
          <a
            href={WHATSAPP_URL}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agende um Discovery Gratuito pelo WhatsApp"
          >
            Agende um Discovery Gratuito
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
