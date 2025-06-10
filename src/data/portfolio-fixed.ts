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
        linkedin: "https://linkedin.com/in/samuel-estrella",
        instagram: "https://instagram.com/samuelestrellasp",
        youtube: "https://youtube.com/@samuelestrellamusic",
        spotify: "https://open.spotify.com/artist/samuelestrellaofficial",
      },
    },
    avatar: "/src/assets/SamuelEstrella.jpg",
  },

  houses: [
    {
      id: "inicio-carreira",
      type: "milestone",
      position: { x: 5, y: 50 },
      data: {
        title: "Início da Carreira",
        date: "2018",
        description: "Primeiros passos na produção cultural",
        fullDescription:
          "Marco inicial da jornada profissional na área cultural, desenvolvendo os primeiros conhecimentos em gestão de projetos artísticos e produção de eventos. Este período foi fundamental para estabelecer as bases de uma carreira sólida no setor criativo, através de experiências práticas e networking com profissionais da área.",
        tags: ["início", "cultura", "aprendizado"],
        achievements: [
          "Primeira participação em projeto cultural",
          "Desenvolvimento de rede de contatos inicial",
          "Aprendizado de fundamentos da produção",
          "Definição do foco profissional",
        ],
        skills: [
          "Gestão básica de projetos",
          "Comunicação interpessoal",
          "Organização de eventos",
          "Networking profissional",
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "🌟",
      },
    },

    {
      id: "educacao-formal",
      type: "experience",
      position: { x: 15, y: 50 },
      data: {
        title: "Formação Acadêmica",
        date: "2019-2022",
        description: "Graduação em Comunicação Social",
        fullDescription:
          "Formação em Comunicação Social com ênfase em Produção Cultural. Durante o curso, desenvolveu projetos práticos em parceria com instituições culturais da cidade. Participou ativamente do diretório acadêmico e organizou diversos eventos estudantis.",
        tags: ["educação", "comunicação", "formação"],
        achievements: [
          "Graduação concluída com honras",
          "Organização de eventos acadêmicos",
          "Projeto final premiado",
          "Estágio em produtora cultural",
        ],
        skills: [
          "Teoria da Comunicação",
          "Marketing Cultural",
          "Pesquisa Acadêmica",
          "Produção de Conteúdo",
        ],
      },
      style: {
        size: "medium",
        theme: "education",
        icon: "🎓",
      },
    },

    {
      id: "coletivo-periferia",
      type: "experience",
      position: { x: 25, y: 50 },
      data: {
        title: "Coletivo Periferia Criativa",
        date: "2019-2021",
        description: "Co-fundador do coletivo de arte urbana",
        fullDescription:
          "Co-fundou o Coletivo Periferia Criativa, uma iniciativa voltada para promover arte urbana e cultura periférica em São Paulo. O coletivo realizou mais de 30 intervenções artísticas em comunidades, promovendo oficinas gratuitas de graffiti, música e dança.",
        tags: ["arte urbana", "coletivo", "periferia", "intervenções"],
        achievements: [
          "30+ intervenções artísticas realizadas",
          "Festival Periferia Viva criado",
          "15 oficinas gratuitas ministradas",
          "Parcerias com escolas públicas",
        ],
        skills: [
          "Curadoria",
          "Gestão de Coletivos",
          "Arte Urbana",
          "Mobilização Social",
        ],
        links: [
          {
            title: "Instagram",
            url: "https://instagram.com/periferia.criativa",
          },
        ],
      },
      style: {
        size: "large",
        theme: "artistic",
        icon: "🎨",
      },
    },

    {
      id: "producao-shows",
      type: "experience",
      position: { x: 35, y: 50 },
      data: {
        title: "Produção de Shows",
        date: "2020-Presente",
        description: "Produção executiva de shows e turnês",
        fullDescription:
          "Especialista em produção executiva de shows de médio e grande porte. Já produziu mais de 150 shows e 12 turnês nacionais, trabalhando com artistas independentes e grandes nomes da música brasileira. Expertise em rider técnico, negociação e logística complexa.",
        tags: ["shows", "turnês", "produção executiva", "logística"],
        achievements: [
          "150+ shows produzidos",
          "12 turnês nacionais coordenadas",
          "Trabalho com 40+ artistas diferentes",
          "Zero acidentes em 5 anos",
        ],
        skills: [
          "Produção Executiva",
          "Gestão de Equipes",
          "Logística",
          "Negociação",
        ],
      },
      style: {
        size: "large",
        theme: "production",
        icon: "🎤",
      },
    },

    {
      id: "festival-sonora",
      type: "experience",
      position: { x: 45, y: 50 },
      data: {
        title: "Festival Sonora Brasil",
        date: "2021-2024",
        description: "Coordenador de Produção",
        fullDescription:
          "Coordenação da produção executiva do Festival Sonora Brasil, um dos principais eventos focados na música brasileira contemporânea. O festival reuniu mais de 40.000 pessoas em suas 4 edições, apresentando 120+ artistas nacionais e internacionais.",
        tags: ["festival", "música brasileira", "coordenação", "grande porte"],
        achievements: [
          "4 edições realizadas com sucesso",
          "40.000+ pessoas impactadas",
          "120+ artistas apresentados",
          "Reconhecimento nacional do evento",
        ],
        skills: [
          "Coordenação de Grandes Eventos",
          "Gestão de Orçamento",
          "Curadoria Musical",
          "Parcerias Estratégicas",
        ],
        links: [
          {
            title: "Instagram",
            url: "https://instagram.com/sonora.brasil",
          },
          {
            title: "Website",
            url: "https://festivalonorabrasil.com.br",
          },
        ],
      },
      style: {
        size: "large",
        theme: "cultural",
        icon: "🎭",
      },
    },

    {
      id: "gestao-artistas",
      type: "experience",
      position: { x: 55, y: 50 },
      data: {
        title: "Gestão de Artistas",
        date: "2022-Presente",
        description: "Desenvolvimento de carreiras artísticas",
        fullDescription:
          "Especialista em desenvolvimento e gestão de carreiras artísticas, com foco em artistas emergentes da música brasileira. Atua desde o planejamento estratégico até a execução de campanhas, lançamentos e turnês.",
        tags: ["gestão", "artistas", "desenvolvimento", "estratégia"],
        achievements: [
          "15 artistas em carteira",
          "8 álbuns lançados",
          "50+ singles produzidos",
          "Contratos com gravadoras fechados",
        ],
        skills: [
          "Gestão de Carreiras",
          "Planejamento Estratégico",
          "Marketing Musical",
          "Negociação Contratual",
        ],
      },
      style: {
        size: "large",
        theme: "production",
        icon: "⭐",
      },
    },

    {
      id: "especializacao-cultural",
      type: "experience",
      position: { x: 65, y: 50 },
      data: {
        title: "Especialização em Gestão Cultural",
        date: "2023",
        description: "Aperfeiçoamento profissional especializado",
        fullDescription:
          "Especialização em Gestão Cultural pelo Centro de Estudos Avançados em Economia Criativa. Foco em políticas públicas culturais, economia criativa e inovação em projetos artísticos.",
        tags: ["especialização", "gestão cultural", "políticas públicas"],
        achievements: [
          "Especialização concluída com distinção",
          "Projeto final implementado",
          "Networking internacional",
          "Certificação profissional",
        ],
        skills: [
          "Políticas Culturais",
          "Economia Criativa",
          "Gestão de Projetos",
          "Inovação Cultural",
        ],
      },
      style: {
        size: "medium",
        theme: "education",
        icon: "📚",
      },
    },

    {
      id: "plural-periferico",
      type: "experience",
      position: { x: 75, y: 50 },
      data: {
        title: "Festival Plural Periférico",
        date: "2024",
        description: "Diretor de Produção",
        fullDescription:
          "Direção de produção do Festival Plural Periférico, evento inovador que celebra a diversidade cultural das periferias brasileiras. O festival promove a inclusão através da arte, música e ativismo social.",
        tags: ["festival", "periferia", "diversidade", "ativismo"],
        achievements: [
          "Festival inaugural realizado",
          "20.000+ pessoas alcançadas",
          "30 artistas periféricos apresentados",
          "Impacto social documentado",
        ],
        skills: [
          "Direção de Produção",
          "Curadoria Social",
          "Gestão de Impacto",
          "Mobilização Comunitária",
        ],
        links: [
          {
            title: "Instagram",
            url: "https://instagram.com/pluralperiferico",
          },
          {
            title: "Website",
            url: "https://pluralperiferico.org.br",
          },
        ],
      },
      style: {
        size: "large",
        theme: "cultural",
        icon: "🌈",
      },
    },

    {
      id: "futuro-projetos",
      type: "milestone",
      position: { x: 85, y: 50 },
      data: {
        title: "Próximos Projetos",
        date: "2025+",
        description: "Expansão e novos horizontes",
        fullDescription:
          "Planejamento de novos projetos culturais com foco na internacionalização da música brasileira e no desenvolvimento de plataformas digitais para artistas emergentes. Projetos incluem selo musical independente e plataforma de gestão cultural.",
        tags: ["futuro", "inovação", "internacional", "digital"],
        achievements: [
          "Selo musical em planejamento",
          "Plataforma digital em desenvolvimento",
          "Parcerias internacionais",
          "Expansão do portfólio",
        ],
        skills: [
          "Visão Estratégica",
          "Inovação Digital",
          "Expansão Internacional",
          "Empreendedorismo Cultural",
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "🚀",
      },
    },
  ],

  boardConfig: {
    width: 1000,
    height: 400,
    backgroundColor: "#1a1a2e",
    pathColor: "#ffffff",
  },
};

export default portfolioData;
