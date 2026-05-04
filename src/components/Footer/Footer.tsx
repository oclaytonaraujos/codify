import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>CODIFY</span>
        <span className={styles.copy}>
          © 2026 Codify Inova Simples (I.S.) · CNPJ 65.739.441/0001-55
        </span>
        <span className={styles.address}>
          R. Abel Pereira de Castro, 574 · Setor Central · Rio Verde · GO
        </span>
        <span className={styles.tag}>
          Codify é onde ideias se tornam software.
        </span>
      </div>
    </footer>
  )
}
