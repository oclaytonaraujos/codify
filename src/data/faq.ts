export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "q1",
    question: "O que é um studio de software e como isso é diferente de uma software house comum?",
    answer: "Uma software house executa. Um studio pensa antes de executar. A diferença está na postura: não recebemos um briefing e saímos codando — questionamos o problema, desafiamos premissas e propomos a solução certa, não a mais rápida. Isso significa que às vezes o projeto muda de forma antes de começar. E isso é bom."
  },
  {
    id: "q2",
    question: "O que significa ser um \"studio de software\" na prática?",
    answer: "Significa que cada projeto tem autoria. Tem alguém pensando na arquitetura, na experiência, na escalabilidade — não só na entrega. Trabalhamos com um número limitado de projetos em paralelo justamente para garantir esse nível de atenção. Você não é mais um ticket na fila."
  },
  {
    id: "q3",
    question: "Como vocês decidem a melhor solução para um problema? Nem sempre é criar algo do zero?",
    answer: "Exato. Nossa primeira pergunta não é \"o que vamos construir\", é \"o que você realmente precisa resolver\". Às vezes a resposta é um sistema customizado. Às vezes é adaptar um produto que já existe. Às vezes é uma automação simples. A gente prefere ser honesto sobre isso do que vender complexidade desnecessária."
  },
  {
    id: "q4",
    question: "Tenho uma ideia mas não sei se é viável, posso conversar antes de fechar?",
    answer: "Pode e deve. A conversa inicial é sem compromisso — serve exatamente para entender se a ideia faz sentido, o que seria necessário para construí-la e qual seria o caminho mais inteligente. Entre em contato pelo WhatsApp ou e-mail e a gente marca."
  },
  {
    id: "q5",
    question: "Como funciona o processo do início ao fim?",
    answer: "Começa com uma conversa de descoberta, onde entendemos o problema e o contexto do seu negócio. A partir daí, montamos uma proposta com escopo, prazo e investimento. Com o projeto aprovado, iniciamos o desenvolvimento em ciclos — você acompanha o progresso, valida entregas e dá feedback em tempo real. Ao final, realizamos a implantação, os testes e o repasse do sistema."
  },
  {
    id: "q6",
    question: "O que acontece depois que o sistema é entregue?",
    answer: "O projeto não termina na entrega — essa é a nossa visão. Oferecemos suporte técnico, manutenção contínua e evolução de funcionalidades conforme o negócio cresce. Sistemas bons precisam de cuidado ao longo do tempo, e a gente está aqui pra isso."
  },
  {
    id: "q7",
    question: "E se eu precisar de alterações depois que o sistema for entregue?",
    answer: "Mudanças fazem parte. Negócios evoluem e o software precisa acompanhar. Alterações pontuais podem ser tratadas avulsas ou dentro de um plano de suporte mensal, dependendo do volume e da frequência. A gente define isso junto no momento certo."
  },
  {
    id: "q8",
    question: "O código e os dados ficam comigo ou ficam com a Codify?",
    answer: "Tudo fica com você. O código-fonte, os dados e a propriedade intelectual do que foi desenvolvido para o seu negócio são seus. A Codify não retém nada disso. Trabalhamos com contrato claro e transparente desde o início."
  }
];
