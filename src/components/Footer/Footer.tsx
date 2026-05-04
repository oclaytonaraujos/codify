import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>CODIFY</span>
        <span className={styles.copy}>
          © 2026 Codify Software Studio. Todos os direitos reservados.
        </span>
<span className={styles.tag}>
          Codify é onde ideias se tornam software.
        </span>
      </div>
    </footer>
  )
}
