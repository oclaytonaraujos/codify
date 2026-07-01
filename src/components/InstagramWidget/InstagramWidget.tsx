import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import styles from './InstagramWidget.module.css'

export function InstagramWidget() {
  return (
    <section className={styles.widgetSection} id="instagram" aria-label="Nosso Instagram">
      <AnimateOnScroll>
        <p className="section-label">INSTAGRAM</p>
        <h2 className="section-title">
          Acompanhe Nosso Feed
        </h2>
      </AnimateOnScroll>
      <div className={styles.widgetContainer}>
        <iframe
          src="https://cdn.lightwidget.com/widgets/de88d16ca61157b1aa0a060329026fb8.html"
          scrolling="no"
          allowTransparency={true}
          className="lightwidget-widget"
          style={{ width: '100%', border: 0, overflow: 'hidden' }}
          title="Instagram Feed Widget"
        />
      </div>
    </section>
  )
}
