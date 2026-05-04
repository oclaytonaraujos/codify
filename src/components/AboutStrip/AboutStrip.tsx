import styles from './AboutStrip.module.css'

const ITEMS = [
  'Empresa Simples de Inovação',
  'Rio Verde · Goiás',
  'CNPJ Ativo desde Mar/2026',
  'SaaS · Sistemas · Automação',
  'contato@codify.dev.br',
]

export function AboutStrip() {
  // Duplicamos os itens para criar o loop contínuo do marquee
  const track = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <aside className={styles.strip} aria-label="Informações da empresa">
      <div className={styles.track} aria-hidden="true">
        {track.map((item, index) => (
          <span key={index} className={styles.item}>
            {item}
            <span className={styles.sep}>·</span>
          </span>
        ))}
      </div>
    </aside>
  )
}
