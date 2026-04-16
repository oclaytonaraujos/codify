export interface PortfolioItem {
  num:   string
  title: string
  desc:  string
  tags:  string[]
}

export const portfolio: PortfolioItem[] = [
  {
    num:   '01',
    title: 'Codify One',
    desc:  'ERP completo desenvolvido para centralizar e automatizar a gestão empresarial — do financeiro ao controle operacional em um único lugar.',
    tags:  ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    num:   '02',
    title: 'Codify Go',
    desc:  'Sistema de comandas e pedidos para bares e restaurantes com painel em tempo real e integração direta entre mesas, cozinha e caixa.',
    tags:  ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    num:   '03',
    title: 'Codify Flow',
    desc:  'CRM focado no fluxo comercial — gestão de leads, pipeline de vendas e acompanhamento da jornada do cliente do primeiro contato ao fechamento.',
    tags:  ['React', 'Node.js', 'PostgreSQL'],
  },
]
