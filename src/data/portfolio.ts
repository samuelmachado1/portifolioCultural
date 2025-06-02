import type { BoardHouse } from "../types/portfolio";

const portfolioData = {
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
          "Marco inicial da jornada profissional na área cultural, desenvolvendo os primeiros conhecimentos em gestão de projetos artísticos e produção de eventos.",
        tags: ["início", "cultura", "aprendizado"],
        achievements: [
          "Primeira participação em projeto cultural",
          "Desenvolvimento de rede de contatos inicial",
          "Aprendizado de fundamentos da produção",
        ],
        skills: [
          "Gestão básica de projetos",
          "Comunicação interpessoal",
          "Organização de eventos",
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "🌟",
      },
    },
    {
      id: "festival-independente",
      type: "experience",
      position: { x: 15, y: 40 },
      data: {
        title: "Festival de Música Independente",
        date: "2019",
        description: "Produção executiva de festival com 15 bandas locais",
        fullDescription:
          "Responsável pela produção executiva completa de um festival de música independente, coordenando desde a curadoria musical até a logística do evento, resultando em público de 2.000 pessoas.",
        tags: ["festival", "música", "produção executiva"],
        achievements: [
          "Coordenação de 15 bandas e artistas",
          "Gestão de orçamento de R$ 80.000",
          "Público de 2.000 pessoas",
          "Parceria com 8 patrocinadores locais",
        ],
        skills: [
          "Produção de eventos",
          "Curadoria musical",
          "Gestão financeira",
          "Negociação comercial",
        ],
      },
      style: {
        size: "large",
        theme: "cultural",
        icon: "🎵",
      },
    },
    {
      id: "curso-gestao-cultural",
      type: "experience",
      position: { x: 25, y: 60 },
      data: {
        title: "Curso de Gestão Cultural",
        date: "2019-2020",
        description: "Especialização em gestão de projetos culturais",
        fullDescription:
          "Curso de especialização focado em gestão de projetos culturais, políticas públicas para cultura e empreendedorismo criativo. Incluiu estágio prático em centro cultural.",
        tags: ["educação", "gestão", "cultura"],
        achievements: [
          "Certificação em Gestão Cultural",
          "Estágio em centro cultural renomado",
          "Projeto final premiado",
          "Rede de contatos ampliada",
        ],
        skills: [
          "Políticas culturais",
          "Captação de recursos",
          "Planejamento estratégico",
          "Marketing cultural",
        ],
      },
      style: {
        size: "medium",
        theme: "education",
        icon: "📚",
      },
    },
    {
      id: "plataforma-digital",
      type: "experience",
      position: { x: 35, y: 45 },
      data: {
        title: "Plataforma Digital de Artistas",
        date: "2020-2021",
        description:
          "Criação de plataforma para divulgação de artistas emergentes",
        fullDescription:
          "Desenvolvimento e gestão de plataforma digital para conectar artistas emergentes com o público, incluindo sistema de streaming, agenda de eventos e marketplace de produtos artísticos.",
        tags: ["digital", "tecnologia", "artistas emergentes"],
        achievements: [
          "200+ artistas cadastrados",
          "50.000 usuários mensais",
          "Parcerias com 20 casas de show",
          "Monetização de R$ 150.000 para artistas",
        ],
        skills: [
          "Gestão de produto digital",
          "Marketing digital",
          "Análise de dados",
          "Desenvolvimento de parcerias",
        ],
      },
      style: {
        size: "large",
        theme: "artistic",
        icon: "💻",
      },
    },
    {
      id: "premio-inovacao",
      type: "milestone",
      position: { x: 45, y: 55 },
      data: {
        title: "Prêmio Inovação Cultural",
        date: "2021",
        description: "Reconhecimento por projeto inovador na área cultural",
        fullDescription:
          "Recebimento do Prêmio Inovação Cultural da Secretaria de Cultura do Estado por projeto que integra tecnologia e arte, promovendo acesso democratizado à cultura.",
        tags: ["prêmio", "inovação", "reconhecimento"],
        achievements: [
          "Prêmio Inovação Cultural 2021",
          "Destaque na mídia especializada",
          "Convite para palestras",
          "Mentoria para outros projetos",
        ],
        skills: [
          "Inovação em projetos culturais",
          "Apresentação de projetos",
          "Liderança",
          "Visão estratégica",
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "🏆",
      },
    },
    {
      id: "consultoria-cultural",
      type: "experience",
      position: { x: 55, y: 40 },
      data: {
        title: "Consultoria Cultural",
        date: "2021-2023",
        description: "Consultoria para empresas e instituições culturais",
        fullDescription:
          "Prestação de consultoria especializada para empresas que desejam investir em cultura e para instituições culturais que buscam modernização e sustentabilidade financeira.",
        tags: ["consultoria", "empresas", "sustentabilidade"],
        achievements: [
          "15 projetos de consultoria realizados",
          "R$ 2M em recursos captados",
          "5 instituições modernizadas",
          "3 empresas com programas culturais criados",
        ],
        skills: [
          "Consultoria empresarial",
          "Captação de recursos",
          "Sustentabilidade financeira",
          "Modernização institucional",
        ],
      },
      style: {
        size: "large",
        theme: "production",
        icon: "🤝",
      },
    },
    {
      id: "network-internacional",
      type: "experience",
      position: { x: 65, y: 50 },
      data: {
        title: "Rede Internacional de Cultura",
        date: "2023",
        description: "Participação em rede internacional de gestores culturais",
        fullDescription:
          "Integração à rede internacional de gestores culturais, participando de intercâmbios, conferências e projetos colaborativos entre Brasil, Argentina e Portugal.",
        tags: ["internacional", "networking", "intercâmbio"],
        achievements: [
          "Participação em 3 conferências internacionais",
          "Intercâmbio cultural Brasil-Argentina",
          "Projeto colaborativo com Portugal",
          "Rede de 100+ gestores internacionais",
        ],
        skills: [
          "Relações internacionais",
          "Gestão multicultural",
          "Idiomas (espanhol/inglês)",
          "Projetos colaborativos",
        ],
      },
      style: {
        size: "medium",
        theme: "cultural",
        icon: "🌍",
      },
    },
    {
      id: "empresa-propria",
      type: "milestone",
      position: { x: 75, y: 45 },
      data: {
        title: "Empresa Própria - Estrella Cultural",
        date: "2024",
        description: "Fundação da própria empresa de gestão cultural",
        fullDescription:
          "Criação da Estrella Cultural, empresa especializada em gestão de projetos artísticos, produção de eventos e consultoria para o setor cultural, consolidando toda a experiência adquirida.",
        tags: ["empreendedorismo", "empresa", "consolidação"],
        achievements: [
          "Empresa registrada e operacional",
          "5 clientes nos primeiros 6 meses",
          "Equipe de 3 colaboradores",
          "Faturamento de R$ 200.000 no primeiro ano",
        ],
        skills: [
          "Empreendedorismo",
          "Gestão empresarial",
          "Liderança de equipe",
          "Visão de negócios",
        ],
      },
      style: {
        size: "large",
        theme: "milestone",
        icon: "🚀",
      },
    },
  ] as BoardHouse[],

  boardConfig: {
    width: 1000,
    height: 400,
    backgroundColor: "#1a1a2e",
    pathColor: "#ffffff",
  },
};

export default portfolioData;
