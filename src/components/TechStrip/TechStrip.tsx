import styles from './TechStrip.module.css'

const TECHS = [
  'JavaScript', 'TypeScript', 'Python', 'Go', 'Rust',
  'Java', 'C#', 'PHP', 'Ruby', 'Swift',
  'Kotlin', 'Dart', 'HTML', 'CSS', 'SQL',
  'GraphQL', 'React', 'Next.js', 'Vue', 'Angular',
  'Node.js', 'Express', 'FastAPI', 'Django', 'Laravel',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git',
]

export function TechStrip() {
  const track = [...TECHS, ...TECHS, ...TECHS]

  return (
    <section className={styles.strip} aria-label="Tecnologias">
      <div className={styles.track}>
        {track.map((tech, i) => (
          <span key={i} className={styles.item}>
            {tech}
            <span className={styles.dot} aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
