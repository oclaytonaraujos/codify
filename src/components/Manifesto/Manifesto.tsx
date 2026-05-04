import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import styles from './Manifesto.module.css'

export function Manifesto() {
  return (
    <section className={styles.manifesto} id="manifesto" aria-label="Manifesto">
      <div className={styles.inner}>
        <AnimateOnScroll>
          <p className="section-label section-label--light">MANIFESTO</p>
          <h2 className={styles.heading}>Como a Codify pensa software</h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <blockquote className={styles.quote}>
            "A gente não recebe um briefing e sai digitando. A gente{' '}
            <em>entende o problema</em>, questiona o que precisa ser
            questionado e constrói a solução certa — não a mais rápida,
            não a mais barata, a{' '}
            <em>que funciona de verdade</em>."
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className={styles.body}>
            Somos um studio de software: com autoria, com cuidado, com
            visão de produto. Cada projeto que sai daqui carrega uma
            pergunta respondida:{' '}
            <strong>
              como a tecnologia pode fazer esse negócio ir mais longe?
            </strong>
          </p>
          <p className={styles.body}>
            Quando não há cliente esperando, a gente constrói pra nós
            mesmos. Produtos próprios que nasceram aqui e que um dia
            estarão no mercado fazendo a diferença por conta própria.
          </p>
          <p className={`${styles.body} ${styles.close}`}>
            Não importa o tamanho da empresa. Se existe um problema real
            para resolver e tecnologia pode ser o caminho — é exatamente
            onde a Codify quer estar.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className={styles.cta}>
            <div className={styles.ctaTextWrapper}>
              <p className={styles.ctaText}>Parece que a gente pensa parecido?</p>
              <p className={styles.ctaText}>Então já é um bom começo.</p>
            </div>
            <a 
              href="https://wa.me/5564999890403?text=Ol%C3%A1%2C%20Codify!%20Achei%20interessante%20a%20forma%20como%20voc%C3%AAs%20pensam%20software."
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale com a Codify pelo WhatsApp"
            >
              Bora conversar
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
