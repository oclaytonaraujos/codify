import styles from './Hero.module.css'

export function Hero() {
  function scrollTo(anchor: string) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="sobre" aria-label="Apresentação">
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badge}>
          Studio de Software · Rio Verde, GO · Desde 2026
        </div>

        <h1 className={styles.title}>
          <span>Toda grande empresa</span>
          <span className={styles.accent}>já foi uma ideia</span>
          <span>sem forma.</span>
        </h1>

        <p className={styles.sub}>
          Nós damos forma a ela. Do projeto sob demanda ao produto próprio
          — tecnologia que gera resultado real.
        </p>

        <div className={styles.actions}>
          <button className="btn-primary" onClick={() => scrollTo('servicos')}>
            Ver serviços
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('manifesto')}>
            Ler o manifesto
          </button>
        </div>
      </div>

      <div className={styles.tag} aria-label="Dados da empresa">
        <span>CNPJ 65.739.441/0001-55</span>
        <span className={styles.sep} aria-hidden="true">·</span>
        <span>Empresa Simples de Inovação</span>
        <span className={styles.sep} aria-hidden="true">·</span>
        <span>Situação: ATIVA</span>
      </div>
    </section>
  )
}
