import { useState } from 'react'
import { faqData } from '../../data/faq'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import styles from './FAQ.module.css'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq" aria-label="Perguntas Frequentes">
      <AnimateOnScroll>
        <p className="section-label">DÚVIDAS</p>
        <h2 className="section-title">
          Perguntas Frequentes
        </h2>
      </AnimateOnScroll>

      <div className={styles.faqList}>
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <AnimateOnScroll key={faq.id} delay={index * 50}>
              <div 
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`} 
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.faqQuestion}>
                  <h3 className={styles.questionText}>{faq.question}</h3>
                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                </div>
                <div className={styles.faqAnswerWrapper}>
                  <div className={styles.faqAnswerInner}>
                    <p className={styles.faqAnswerText}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  )
}
