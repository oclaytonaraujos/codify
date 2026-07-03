import { testimonials } from '../../data/testimonials'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import { IconShield, IconProcess, IconHeadset, IconChat } from './SocialProofIcons'
import styles from './SocialProof.module.css'

const BADGES = [
  {
    icon:  <IconShield />,
    title: 'CNPJ Ativo',
    desc:  'Empresa formalizada e regularizada desde Março de 2025.',
  },
  {
    icon:  <IconProcess />,
    title: 'Metodologia Própria',
    desc:  'Processo estruturado do briefing à entrega — sem improviso.',
  },
  {
    icon:  <IconHeadset />,
    title: 'Suporte Contínuo',
    desc:  'Acompanhamento após o deploy. Não desaparecemos depois de entregar.',
  },
  {
    icon:  <IconChat />,
    title: 'Comunicação Direta',
    desc:  'Você fala com quem escreve o código, sem intermediários.',
  },
] as const

export function SocialProof() {
  return (
    <section className={styles.socialProof} id="prova-social" aria-label="Prova social">
      <AnimateOnScroll>
        <p className="section-label">PROVA SOCIAL</p>
        <h2 className="section-title">
          Confiança que a gente<br />
          constrói aos poucos.
        </h2>
        <p className={styles.sub}>
          Ainda estamos no começo — e isso também é motivo pra confiar: atenção
          total em cada projeto, sem fila de espera.
        </p>
      </AnimateOnScroll>

      <div className={styles.badgeGrid}>
        {BADGES.map(({ icon, title, desc }, index) => (
          <AnimateOnScroll key={title} delay={index * 80}>
            <div className={styles.badgeCard}>
              <span className={styles.badgeIcon} aria-hidden="true">{icon}</span>
              <h3 className={styles.badgeTitle}>{title}</h3>
              <p className={styles.badgeDesc}>{desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll className={styles.testimonials}>
        {testimonials.length > 0 ? (
          <div className={styles.testimonialGrid}>
            {testimonials.map((item, index) => (
              <blockquote
                key={index}
                className={`${styles.testimonialCard} ${item.isExample ? styles.exampleCard : ''}`}
              >
                {item.isExample && (
                  <span className={styles.exampleBadge}>Exemplo ilustrativo</span>
                )}
                <p className={styles.testimonialQuote}>&ldquo;{item.quote}&rdquo;</p>
                <footer className={styles.testimonialFooter}>
                  <span className={styles.testimonialName}>{item.name}</span>
                  <span className={styles.testimonialRole}>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className={styles.comingSoon}>
            <p>Os primeiros depoimentos de clientes chegam por aqui em breve.</p>
          </div>
        )}
      </AnimateOnScroll>
    </section>
  )
}
