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
  ] as BoardHouse[],

  boardConfig: {
    width: 1000,
    height: 400,
    backgroundColor: "#1a1a2e",
    pathColor: "#ffffff",
  },
};

export default portfolioData;
