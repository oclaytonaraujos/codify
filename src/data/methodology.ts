import type { Step } from '../types/methodology'

export const STEPS: Step[] = [
  {
    id: 'discovery',
    icon: 'search',
    title: 'Discovery',
    subtitle: 'Entender antes de construir',
    description:
      'Mergulhamos no seu negócio, entendemos o problema real e mapeamos o cenário antes de escrever uma única linha de código.',
  },
  {
    id: 'strategy',
    icon: 'map',
    title: 'Estratégia',
    subtitle: 'Planejar com precisão',
    description:
      'Definimos escopo, tecnologia, arquitetura e roadmap — tudo alinhado com orçamento, prazo e visão de produto.',
  },
  {
    id: 'build',
    icon: 'code',
    title: 'Construção',
    subtitle: 'Desenvolver com excelência',
    description:
      'Sprints curtos, entregas frequentes, código limpo e revisado. Você acompanha cada evolução em tempo real.',
  },
  {
    id: 'launch',
    icon: 'rocket',
    title: 'Lançamento',
    subtitle: 'Colocar no ar com confiança',
    description:
      'Deploy seguro, testes automatizados e monitoramento ativo. Seu software nasce pronto para o mundo real.',
  },
  {
    id: 'evolve',
    icon: 'trending-up',
    title: 'Evolução',
    subtitle: 'Crescer sem parar',
    description:
      'Suporte contínuo, novas funcionalidades e otimizações baseadas em dados reais de uso. O software evolui com o negócio.',
  },
]
