import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppButton.module.css'

const WHATSAPP_MSG = 'Ol\u00E1! Vi que a Codify desenvolve solu\u00E7\u00F5es de tecnologia sob medida e quero entender como isso funciona na pr\u00E1tica pro meu neg\u00F3cio. Vamos conversar?'
const WHATSAPP_URL = `https://wa.me/556499890403?text=${encodeURIComponent(WHATSAPP_MSG)}`

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
