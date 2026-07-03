export interface Service {
  num: string
  title: string
  desc: string
  tag: string
}

export interface ContactCard {
  type: 'email' | 'phone' | 'address'
  label: string
  value: string
  href?: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  /** Marca depoimentos ilustrativos (não vêm de um cliente real) — precisa do selo "Exemplo ilustrativo" na UI. */
  isExample?: boolean
}
