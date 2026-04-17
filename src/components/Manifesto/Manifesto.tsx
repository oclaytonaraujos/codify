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
      </div>
    </section>
  )
}
