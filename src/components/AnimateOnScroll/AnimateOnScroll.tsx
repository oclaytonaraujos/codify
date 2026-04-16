import { useRef, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

/**
 * Envolve o conteúdo em uma div que anima a entrada quando
 * o elemento entra na viewport (via IntersectionObserver).
 *
 * Usa as classes globais `animate-on-scroll` e `visible`
 * definidas em globals.css.
 */
export function AnimateOnScroll({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setTimeout(() => setVisible(true), delay)
        observer.unobserve(el)
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const classes = [
    'animate-on-scroll',
    visible ? 'visible' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
