export type Observe = { n: string; t: string };

export type Slide =
  | {
      kind: "cover";
      kicker: string;
      title: string;
      subtitle: string;
      line: string;
      note: string;
      brand: string;
      bg: string;
    }
  | {
      kind: "journey";
      kicker: string;
      title: string;
      body: string;
      steps: { n: string; t: string; d: string }[];
      quote: string;
      rule: string;
      qs: string;
    }
  | {
      kind: "map";
      kicker: string;
      title: string;
      body: string;
      items: string[];
    }
  | {
      kind: "guide";
      kicker: string;
      title: string;
      body: string;
      image: string;
      observe: Observe[];
    }
  | {
      kind: "full";
      kicker: string;
      title: string;
      body?: string;
      image: string;
    }
  | {
      kind: "prompts";
      kicker: string;
      title: string;
      items: { n: string; t: string; d: string }[];
    }
  | {
      kind: "flow";
      kicker: string;
      title: string;
      body: string;
      items: { n: string; t: string; d: string }[];
    }
  | {
      kind: "close";
      image: string;
    };

export const SLIDES: Slide[] = [
  {
    kind: "cover",
    kicker: "Aula prática",
    title: "Seu site\ncom IA",
    subtitle: "Da estrutura certa à publicação profissional",
    line: "Planeje  ·  Crie  ·  Configure  ·  Publique",
    note: "Uma apresentação visual para transformar conhecimento em ação.",
    brand: "e-todavia  ·  Kelly Coutinho",
    bg: "/deck/cover-bg.png",
  },
  {
    kind: "journey",
    kicker: "A jornada",
    title: "Um site forte não nasce de uma tela bonita.",
    body: "Ele nasce de uma estrutura clara, uma mensagem objetiva e uma configuração profissional.",
    steps: [
      { n: "01", t: "Estrutura", d: "Organizar antes de decorar" },
      { n: "02", t: "Experiência", d: "Guiar o visitante para a próxima ação" },
      { n: "03", t: "Conversão", d: "Construir confiança em cada seção" },
      { n: "04", t: "Resultado", d: "Publicar com segurança e autonomia" },
    ],
    quote: "“Bora organizar?”",
    rule: "A regra: cada bloco responde uma pergunta do visitante.",
    qs: "“Onde estou?”  ·  “Isso é para mim?”  ·  “Como funciona?”  ·  “Posso confiar?”  ·  “O que faço agora?”",
  },
  {
    kind: "map",
    kicker: "Mapa do site",
    title: "A arquitetura que conduz o visitante",
    body: "A ordem cria uma narrativa: atenção → clareza → confiança → ação.",
    items: [
      "Header",
      "Hero",
      "Sobre",
      "Serviços",
      "Benefícios",
      "Depoimentos",
      "Contato",
      "FAQ",
      "Footer",
    ],
  },
  {
    kind: "guide",
    kicker: "Seção 01",
    title: "Header: orientação em poucos segundos",
    body: "Logo, navegação, busca e CTA precisam estar visíveis sem competir entre si.",
    image: "/deck/header.png",
    observe: [
      { n: "01", t: "Marca reconhecível" },
      { n: "02", t: "Menu enxuto" },
      { n: "03", t: "CTA prioritário" },
      { n: "04", t: "Mobile simplificado" },
    ],
  },
  {
    kind: "guide",
    kicker: "Seção 02",
    title: "Hero: a promessa principal",
    body: "É a primeira dobra. Precisa dizer o que você faz, para quem e qual o próximo passo.",
    image: "/deck/hero.png",
    observe: [
      { n: "01", t: "Título de impacto" },
      { n: "02", t: "Subtítulo claro" },
      { n: "03", t: "CTA destacado" },
      { n: "04", t: "Visual que conecta" },
    ],
  },
  {
    kind: "guide",
    kicker: "Seção 03",
    title: "Sobre: problema + solução + contexto",
    body: "Apresente a empresa pelo valor que ela gera — não apenas pela própria história.",
    image: "/deck/sobre.png",
    observe: [
      { n: "01", t: "Problema do público" },
      { n: "02", t: "Solução objetiva" },
      { n: "03", t: "Benefícios visíveis" },
      { n: "04", t: "Imagem humana" },
    ],
  },
  {
    kind: "guide",
    kicker: "Seção 04",
    title: "Serviços: transforme oferta em escolha",
    body: "Cards organizados ajudam o visitante a entender rapidamente o que você entrega.",
    image: "/deck/servicos.png",
    observe: [
      { n: "01", t: "Categorias claras" },
      { n: "02", t: "Textos curtos" },
      { n: "03", t: "Hierarquia visual" },
      { n: "04", t: "Link de ação" },
    ],
  },
  {
    kind: "guide",
    kicker: "Seção 05",
    title: "Benefícios: por que escolher você?",
    body: "Diferenciais concretos reduzem objeções e aumentam a percepção de valor.",
    image: "/deck/beneficios.png",
    observe: [
      { n: "01", t: "Valor percebido" },
      { n: "02", t: "Diferenciais reais" },
      { n: "03", t: "Prova por números" },
      { n: "04", t: "Consistência visual" },
    ],
  },
  {
    kind: "guide",
    kicker: "Seção 06",
    title: "Depoimentos: confiança por prova social",
    body: "Resultados e histórias reais ajudam o visitante a se enxergar como próximo caso de sucesso.",
    image: "/deck/depoimentos.png",
    observe: [
      { n: "01", t: "Depoimento específico" },
      { n: "02", t: "Nome e contexto" },
      { n: "03", t: "Indicadores reais" },
      { n: "04", t: "Formato escaneável" },
    ],
  },
  {
    kind: "full",
    kicker: "Seção 07",
    title: "Contato: reduza a distância até a conversa",
    body: "Ofereça canais diretos e um formulário simples. O visitante escolhe como quer falar com você.",
    image: "/deck/contato.png",
  },
  {
    kind: "guide",
    kicker: "Seção 08",
    title: "FAQ: responda antes que a dúvida vire abandono",
    body: "Perguntas frequentes reduzem atrito, esclarecem objeções e melhoram a decisão.",
    image: "/deck/faq.png",
    observe: [
      { n: "01", t: "Dúvidas reais" },
      { n: "02", t: "Respostas objetivas" },
      { n: "03", t: "Busca opcional" },
      { n: "04", t: "Accordion no mobile" },
    ],
  },
  {
    kind: "guide",
    kicker: "Seção 09",
    title: "Footer: termine o site sem terminar a navegação",
    body: "O rodapé reúne atalhos, contatos, redes sociais e informações legais.",
    image: "/deck/footer.png",
    observe: [
      { n: "01", t: "Links essenciais" },
      { n: "02", t: "Contato completo" },
      { n: "03", t: "Redes sociais" },
      { n: "04", t: "Privacidade e cookies" },
    ],
  },
  {
    kind: "full",
    kicker: "IA na prática",
    title: "Como conversar com a IA para construir melhor",
    body: "Quanto melhor o briefing, melhor a primeira versão — e mais inteligente fica o refinamento.",
    image: "/deck/ia.png",
  },
  {
    kind: "prompts",
    kicker: "Prompt que funciona",
    title: "O briefing em 8 blocos",
    items: [
      { n: "01", t: "Objetivo", d: "Explique o que você quer fazer." },
      { n: "02", t: "Público", d: "Diga para quem é o site." },
      { n: "03", t: "Estrutura", d: "Liste as seções necessárias." },
      { n: "04", t: "Estilo visual", d: "Cores, tom e referências." },
      { n: "05", t: "Funcionalidades", d: "Formulário, WhatsApp, blog, SEO." },
      { n: "06", t: "Referências", d: "Mostre sites que você gosta." },
      { n: "07", t: "Ajustes", d: "Revise e refine a primeira versão." },
      { n: "08", t: "Otimizações", d: "Velocidade, SEO e responsivo." },
    ],
  },
  {
    kind: "full",
    kicker: "Ferramentas",
    title: "A mesma ideia. Mais possibilidades.",
    image: "/deck/ferramentas.png",
  },
  {
    kind: "full",
    kicker: "Publicação",
    title: "Configurações que não podem faltar",
    image: "/deck/checklist.png",
  },
  {
    kind: "full",
    kicker: "Formulários",
    title: "E-mail profissional e SMTP",
    image: "/deck/email.png",
  },
  {
    kind: "flow",
    kicker: "Execução",
    title: "Do briefing ao site publicado",
    body: "Um fluxo simples para não se perder entre design, código, conteúdo e configuração.",
    items: [
      { n: "01", t: "Briefing", d: "Objetivo, público e referências" },
      { n: "02", t: "Estrutura", d: "Seções e hierarquia" },
      { n: "03", t: "Criação", d: "Layout + conteúdo + código" },
      { n: "04", t: "Refino", d: "Responsivo, velocidade e UX" },
      { n: "05", t: "Configuração", d: "Domínio, SMTP, LGPD e SEO" },
      { n: "06", t: "Publicação", d: "Testes e entrada no ar" },
    ],
  },
  {
    kind: "close",
    image: "/deck/pratica.png?v=2",
  },
  {
    kind: "close",
    image: "/deck/close.png?v=3",
  },
];
