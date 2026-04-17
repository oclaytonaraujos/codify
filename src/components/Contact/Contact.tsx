import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import { IconEmail, IconPhone, IconLocation, IconInstagram } from './ContactIcons'
import styles from './Contact.module.css'

const CARDS = [
  {
    icon:  <IconInstagram />,
    label: 'Instagram',
    value: '@codify.dev.br',
    href:  'https://instagram.com/codify.dev.br',
  },
  {
    icon:  <IconPhone />,
    label: 'Telefone',
    value: '(64) 9989-0403',
    href:  'https://wa.me/556499890403',
  },
  {
    icon:  <IconEmail />,
    label: 'Email',
    value: 'contato@codify.dev.br',
    href:  'mailto:contato@codify.dev.br',
  },
  {
    icon:  <IconLocation />,
    label: 'Endereço',
    value: (
      <>
        R. Abel Pereira de Castro, 574<br />
        Setor Central · Rio Verde · GO
      </>
    ),
    href: undefined,
  },
] as const

export function Contact() {
  return (
    <section className={styles.contactWrap} id="contato" aria-label="Contato">
      <div className={styles.bg} aria-hidden="true" />
    <div className={styles.contact}>
      <AnimateOnScroll className={styles.inner}>
        <p className="section-label">CONTATO</p>
        <h2 className={styles.title}>
          Tem um problema real<br />para resolver?
        </h2>
        <p className={styles.sub}>É exatamente onde a Codify quer estar.</p>

        <div className={styles.grid}>
          {CARDS.map(({ icon, label, value, href }) => {
            const content = (
              <>
                <span className={styles.icon} aria-hidden="true">{icon}</span>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
              </>
            )

            return href ? (
              <a key={label} href={href} className={styles.card}>
                {content}
              </a>
            ) : (
              <div key={label} className={styles.card}>
                {content}
              </div>
            )
          })}
        </div>
      </AnimateOnScroll>
    </div>
    </section>
  )
}
