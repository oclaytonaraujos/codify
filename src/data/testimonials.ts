import type { Testimonial } from '../types'

// A Codify ainda não tem depoimentos reais publicados. Os itens abaixo são
// EXEMPLOS ILUSTRATIVOS (isExample: true) — SocialProof.tsx exibe o selo
// "Exemplo ilustrativo" sobre eles para não serem confundidos com citações
// reais de clientes (isso configuraria propaganda enganosa, CDC art. 37).
//
// Assim que houver um depoimento real, adicione o objeto sem `isExample`
// (ou com `isExample: false`) e remova os exemplos correspondentes.
export const testimonials: Testimonial[] = [
  {
    quote:     'Antes, fechávamos as planilhas manualmente todo mês. Depois da automação, o processo caiu de dias para minutos.',
    name:      'Depoimento ilustrativo',
    role:      'Perfil: dono de e-commerce',
    isExample: true,
  },
  {
    quote:     'Nenhuma plataforma pronta resolvia o nosso caso. A Codify entendeu o problema antes de escrever a primeira linha de código.',
    name:      'Depoimento ilustrativo',
    role:      'Perfil: gestor de operações',
    isExample: true,
  },
  {
    quote:     'Buscávamos um parceiro técnico para validar um produto do zero, com comunicação direta do início ao fim.',
    name:      'Depoimento ilustrativo',
    role:      'Perfil: fundador de startup',
    isExample: true,
  },
]
