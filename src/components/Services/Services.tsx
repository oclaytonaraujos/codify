import { services } from '../../data/services'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import styles from './Services.module.css'

export function Services() {
  return (
    <section className={styles.services} id="servicos" aria-label="Serviços">
      <AnimateOnScroll>
        <p className="section-label">O QUE FAZEMOS</p>
        <h2 className="section-title">
          Software não é só código.<br />
          É a diferença entre ficar parado<br />
          e mover o mercado.
        </h2>
      </AnimateOnScroll>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <AnimateOnScroll key={service.num} delay={index * 80}>
            <div className={styles.card}>
              <div className={styles.num}>{service.num}</div>
              <div className={styles.tag}>{service.tag}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
