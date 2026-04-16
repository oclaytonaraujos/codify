import { portfolio } from '../../data/portfolio'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import styles from './Portfolio.module.css'

export function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <AnimateOnScroll>
        <p className="section-label">PORTFÓLIO</p>
        <h2 className="section-title">
          O que já<br />
          construímos.
        </h2>
      </AnimateOnScroll>

      <div className={styles.grid}>
        {portfolio.map((item, index) => (
          <AnimateOnScroll key={item.num} delay={index * 80}>
            <div className={styles.card}>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
              <span className={styles.link}>Ver projeto →</span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
