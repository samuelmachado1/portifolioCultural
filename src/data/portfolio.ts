import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Samuel Estrella",
    title: "Produtor Cultural & Gestor de Projetos Artísticos",
    bio: "Especialista em gestão de projetos artísticos, eventos musicais e desenvolvimento de talentos emergentes. Experiência consolidada em produção executiva e curadoria cultural.",
    contact: {
      email: "samuel.estrella@outlook.com",
      phone: "+55 (11) 99847-3621",
      whatsapp: "+55 (11) 99847-3621",
      social: {
        instagram: "@samuel.estrella",
        linkedin: "samuel-estrella-producer",
        facebook: "samuel.estrella.official",
      },
    },
  },
  houses: [
    // ======= CASAS PRINCIPAIS - LAYOUT CIRCULAR INSPIRADO NA IMAGEM =======

    // TOPO - "Portfólio" (como na imagem de referência)
    {
      id: "profile",
      type: "milestone",
      position: { x: 50, y: 8 },
      data: {
        title: "Portfólio",
        date: "Samuel Estrella",
        description: "Produtor Cultural & Gestor de Projetos Artísticos",
        fullDescription:
          "Graduado em Comunicação Social com especialização em Produção Cultural. Mais de 6 anos de experiência no mercado cultural brasileiro, com foco em gestão de projetos artísticos, produção de eventos musicais e desenvolvimento de talentos emergentes. Expertise em captação de recursos via editais públicos e leis de incentivo.",
        tags: ["produção cultural", "gestão", "música", "arte", "editais"],
      },
      style: {
        size: "large",
        theme: "milestone",
        icon: "🎭",
      },
    },

    // DIREITA SUPERIOR - "Biografia"
    {
      id: "education",
      type: "experience",
      position: { x: 85, y: 15 },
      data: {
        title: "Biografia",
        date: "Formação & Origem",
        description: "Comunicação Social - Universidade Anhembi Morumbi",
        fullDescription:
          "Natural de São Paulo, graduado em Comunicação Social com habilitação em Publicidade e Propaganda pela Universidade Anhembi Morumbi. Especialização em Produção Cultural e Gestão de Eventos. TCC sobre 'O Impacto das Redes Sociais na Divulgação de Eventos Culturais Independentes'. Iniciou carreira aos 19 anos como assistente de produção.",
        tags: [
          "biografia",
          "educação",
          "comunicação",
          "graduação",
          "anhembi morumbi",
        ],
      },
      style: {
        size: "large",
        theme: "education",
        icon: "📖",
      },
    },

    // DIREITA - "Principais Trabalhos"
    {
      id: "selo-musical",
      type: "experience",
      position: { x: 92, y: 50 },
      data: {
        title: "Principais Trabalhos",
        date: "2020-Presente",
        description: "Estrella Produções - Fundador & Diretor Executivo",
        fullDescription:
          "Criação e gestão da Estrella Produções, empresa especializada em produção de eventos culturais e gestão de carreiras artísticas. Responsável pela produção de mais de 60 eventos, gestão de 8 artistas e captação de R$ 350.000 em recursos via editais públicos e patrocínios.",
        tags: ["produtora", "gestão artística", "eventos", "empreendedorismo"],
        links: {
          website: "https://estrellaproducoes.com.br",
          social: "https://instagram.com/estrellaproducoes",
        },
      },
      style: {
        size: "large",
        theme: "production",
        icon: "🎵",
      },
    },

    // DIREITA INFERIOR - "Festivais & Eventos"
    {
      id: "festival-independente",
      type: "experience",
      position: { x: 85, y: 85 },
      data: {
        title: "Festival Sonora Brasil",
        date: "2021-2023",
        description: "Coordenador de Produção - 3 edições realizadas",
        fullDescription:
          "Coordenação da produção executiva do Festival Sonora Brasil, evento anual focado na música brasileira contemporânea. Responsável pela logística de 4 palcos, gestão de equipe de 25 pessoas, contratação de fornecedores e relacionamento com mais de 40 artistas por edição. Público médio de 3.500 pessoas.",
        tags: [
          "festival",
          "música brasileira",
          "produção executiva",
          "logística",
        ],
        links: {
          social: "https://instagram.com/festivalsonorabrasil",
        },
      },
      style: {
        size: "large",
        theme: "cultural",
        icon: "🎪",
      },
    },

    // INFERIOR - "Formação & Capacitação"
    {
      id: "workshop-gestao",
      type: "experience",
      position: { x: 50, y: 92 },
      data: {
        title: "Formação",
        date: "2022-2023",
        description: "Workshops de Gestão Musical - Instrutor",
        fullDescription:
          "Ministração de workshops sobre gestão de carreira musical, produção de eventos e marketing digital para artistas em parceria com o SESC e conservatórios musicais. Mais de 200 músicos capacitados em temas como: contratos, direitos autorais, produção executiva e estratégias de divulgação.",
        tags: ["educação", "capacitação", "gestão musical", "SESC"],
      },
      style: {
        size: "large",
        theme: "education",
        icon: "📚",
      },
    },

    // ESQUERDA INFERIOR - "Consultoria & Projetos"
    {
      id: "consultoria-cultural",
      type: "experience",
      position: { x: 15, y: 85 },
      data: {
        title: "Consultoria Cultural",
        date: "2022-Presente",
        description: "Especialista em editais e leis de incentivo",
        fullDescription:
          "Prestação de consultoria para artistas e produtoras na elaboração de projetos culturais para editais públicos e leis de incentivo (Lei Rouanet, ProAC, etc.). Aprovação de mais de R$ 500.000 em recursos para projetos artísticos diversos.",
        tags: ["consultoria", "editais", "lei rouanet", "projetos culturais"],
      },
      style: {
        size: "large",
        theme: "production",
        icon: "📋",
      },
    },

    // ESQUERDA - "Arte Urbana & Coletivos"
    {
      id: "coletivo-artistico",
      type: "experience",
      position: { x: 8, y: 50 },
      data: {
        title: "Coletivo Estrela Urbana",
        date: "2019-2021",
        description: "Co-fundador do coletivo de arte urbana",
        fullDescription:
          "Co-criação e gestão do Coletivo Estrela Urbana, grupo multidisciplinar focado em intervenções artísticas em espaços públicos. Organização de mais de 30 eventos, incluindo batalhas de rap, exposições de grafite e saraus de poesia na periferia de São Paulo.",
        tags: ["arte urbana", "coletivo", "periferia", "intervenções"],
        links: {
          social: "https://instagram.com/coletivoestrelurbana",
        },
      },
      style: {
        size: "large",
        theme: "artistic",
        icon: "🎨",
      },
    },

    // ESQUERDA SUPERIOR - "Produção de Shows"
    {
      id: "producao-shows",
      type: "experience",
      position: { x: 15, y: 15 },
      data: {
        title: "Produção de Shows",
        date: "2020-Presente",
        description: "Produção executiva de shows e turnês",
        fullDescription:
          "Produção executiva de mais de 80 shows em casas de diferentes portes (de 100 a 3.000 pessoas). Especialização em logística de turnês, negociação com casas de show, gestão de equipes técnicas e coordenação de rider técnico e hospitality.",
        tags: ["shows", "turnês", "produção executiva", "logística"],
      },
      style: {
        size: "large",
        theme: "production",
        icon: "🎤",
      },
    },

    // ======= CASAS INTERMEDIÁRIAS - CÍRCULO INTERNO =======

    // Festival Periferias (posição entre as principais)
    {
      id: "festival-periferias",
      type: "experience",
      position: { x: 75, y: 25 },
      data: {
        title: "Festival Periferias Criativas",
        date: "2023",
        description: "Diretor de Produção - Primeira edição",
        fullDescription:
          "Direção de produção da primeira edição do Festival Periferias Criativas, evento que celebrou a diversidade cultural das periferias paulistanas. Coordenação de 4 palcos simultâneos, 60 atrações e público de 8.000 pessoas durante 2 dias de festival.",
        tags: ["festival", "periferia", "diversidade cultural", "grande porte"],
        links: {
          video: "https://youtube.com/watch?v=festivalperiferias2023",
        },
      },
      style: {
        size: "medium",
        theme: "cultural",
        icon: "🌟",
      },
    },

    // ======= ELEMENTOS DECORATIVOS =======
    {
      id: "decorative-music",
      type: "decorative",
      position: { x: 35, y: 30 },
      style: {
        size: "small",
        theme: "artistic",
        icon: "🎼",
      },
    },
    {
      id: "decorative-art",
      type: "decorative",
      position: { x: 65, y: 70 },
      style: {
        size: "small",
        theme: "cultural",
        icon: "🎨",
      },
    },
    {
      id: "decorative-star",
      type: "decorative",
      position: { x: 30, y: 70 },
      style: {
        size: "small",
        theme: "milestone",
        icon: "✨",
      },
    },
  ],
  boardConfig: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    pathColor: "#ffffff",
  },
};
