import type { Step } from '../../types/methodology'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import styles from './CodifyMethodology.module.css'

interface TimelineItemProps {
  step: Step
  index: number
  total: number
}

const ICON_MAP: Record<string, JSX.Element> = {
  search: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  map: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  rocket: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  'trending-up': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
}

export function TimelineItem({ step, index, total }: TimelineItemProps) {
  const stepNumber = String(index + 1).padStart(2, '0')

  return (
    <li className={styles.timelineItem}>
      <AnimateOnScroll delay={index * 100}>
        <div className={styles.itemLayout}>
          {/* Connector line + dot */}
          <div className={styles.connector} aria-hidden="true">
            <div className={styles.dot}>
              {ICON_MAP[step.icon] ?? <span>{stepNumber}</span>}
            </div>
            {index < total - 1 && <div className={styles.line} />}
          </div>

          {/* Card */}
          <div className={styles.card}>
            <span className={styles.stepNum}>{stepNumber}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepSubtitle}>{step.subtitle}</p>
            <p className={styles.stepDesc}>{step.description}</p>
          </div>
        </div>
      </AnimateOnScroll>
    </li>
  )
}
