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
