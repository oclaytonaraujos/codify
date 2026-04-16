import { useState } from 'react'
import { useScrolled } from '../../hooks/useScrolled'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Serviços',   anchor: 'servicos' },
  { label: 'Manifesto',  anchor: 'manifesto' },
  { label: 'Portfólio',  anchor: 'portfolio' },
  { label: 'Contato',    anchor: 'contato' },
] as const

export function Nav() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  function scrollToSection(anchor: string) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Codify — ir para o topo"
        >
          <span className={styles.logoWord}>CODIFY</span>
          <span className={styles.logoDot} aria-hidden="true" />
        </button>

        <div className={styles.linksDesktop} role="navigation" aria-label="Menu principal">
          {NAV_LINKS.map(({ label, anchor }) => (
            <button
              key={anchor}
              className={styles.link}
              onClick={() => scrollToSection(anchor)}
            >
              {label}
            </button>
          ))}
          <button className={styles.cta} onClick={() => scrollToSection('contato')}>
            Falar com a equipe →
          </button>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu} id="mobile-menu">
          {NAV_LINKS.map(({ label, anchor }) => (
            <button
              key={anchor}
              className={styles.mobileLink}
              onClick={() => scrollToSection(anchor)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
