export interface PersonalInfo {
  name: string;
  artisticName: string;
  alternativeNames: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
    social: {
      facebook: string;
    };
  };
  biography: string;
  yearsActive: number;
  registrations: string[];
}

export interface Education {
  id: string;
  course: string;
  institution: string;
  year: string;
  type: 'course' | 'workshop' | 'certification';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'recognition' | 'nomination' | 'position';
  url?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Samuel Machado",
  artisticName: "Samuel Estrella",
  alternativeNames: ["Calangos Sounds", "Calango Rasta"],
  contact: {
    phone: "61 9 8239-1310",
    email: "samuelmachado1@gmail.com",
    address: "Quadra 24 Casa 10 – Bairro São José – São Sebastião – DF",
    social: {
      facebook: "facebook.com/samuelestrellareggae"
    }
  },
  biography: `Nasci em Brasília/DF, autodidata, com 12 anos já tocava violão em celebrações e encontros religiosos. Com a banda "Louvor da Alma" participei de diversos festivais de música católica. Aos 16 anos, tive minhas primeiras experiências como músico profissional me apresentando em eventos culturais, saraus e eventos particulares. 

Em 2012 já com produtora própria chamada "Calangos Sound System", realizamos nosso primeiro evento de forma independente, foi o "SOUND SYSTEM", que serviu de laboratório para o projeto hoje chamado de "REGGAE NA PRAÇA" que já teve 8 edições desde o seu início. Fundador da banda "Calango Rasta", que teve seu primeiro single lançado em 2012 pela produtora Unidade 76, também sou compositor e vocalista da banda.`,
  yearsActive: 13,
  registrations: [
    "Músico registrado na Ordem dos Músicos do Brasil – OMB/DF desde 2009"
  ]
};

export const education: Education[] = [
  {
    id: "fac-pratica",
    course: "FAC na Prática",
    institution: "RED Produtora",
    year: "2013",
    type: "course"
  },
  {
    id: "producao-moveis",
    course: "Curso Livre de Produção",
    institution: "Projeto Móveis Convida",
    year: "2014",
    type: "course"
  },
  {
    id: "cultura-gestao",
    course: "MOOC - Cultura e Gestão Cultural",
    institution: "Instituto Itaú Cultural",
    year: "2016",
    type: "course"
  },
  {
    id: "gestao-cultural",
    course: "Curso de Gestão Cultural",
    institution: "Laboratório de Empreendimentos Criativos - LECRIA",
    year: "2017",
    type: "course"
  },
  {
    id: "transpiracao",
    course: "Transpiração",
    institution: "Na Praia",
    year: "2018",
    type: "workshop"
  }
];

export const mainPositions: string[] = [
  "Gerente Regional de Cultura em São Sebastião",
  "Músico registrado na OMB desde 2009",
  "Músico fundador da banda Calango Rasta - Desde 2011",
  "Vice Presidente do Conselho Regional de Cultura de São Sebastião - CRC/DF",
  "Membro da Câmara Técnica de Cultura do Conselho de Desenvolvimento Econômico, Sustentável e Estratégico do Distrito Federal - CODESE/DF"
];

export const achievements: Achievement[] = [
  {
    id: "reggae-praca-2023",
    title: "Reggae na Praça 15ª Edição",
    description: "Produção do festival em sua 15ª edição",
    date: "2023",
    type: "recognition",
    url: "https://www.instagram.com/p/CrVrseCu3d3/?igshid=MzRlODBiNWFlZA=="
  },
  {
    id: "moocao-louvor-2019",
    title: "Moção de Louvor - Câmara Legislativa do DF",
    description: "Reconhecimento pelas contribuições em projetos culturais",
    date: "2019",
    type: "award"
  },
  {
    id: "finalista-musica-2019",
    title: "Finalista Prêmio Profissionais da Música",
    description: "Categoria Produção Executiva",
    date: "2019",
    type: "nomination"
  },
  {
    id: "homenagem-festival-2020",
    title: "Homenageado no I Festival Cerrado Reggae",
    description: "Reconhecimento pela contribuição ao reggae no DF",
    date: "2020",
    type: "recognition",
    url: "https://youtu.be/cmMdYI9HBBI?t=8550"
  },
  {
    id: "premiacao-lecria-2017",
    title: "Premiação EDITAL LECRIA",
    description: "Laboratório de Empreendimentos Criativos",
    date: "2017",
    type: "award"
  },
  {
    id: "fac-primeiro-lugar-2017",
    title: "1º Lugar no Edital Áreas Culturais",
    description: "Fundo de Apoio à Cultura - FAC/DF",
    date: "2017",
    type: "award"
  }
];

export const recentProjects = [
  {
    title: "Reggae na Praça - Ed. Baile do Kayaman",
    date: "2022",
    url: "https://www.instagram.com/p/Cmj28vKuicw/?igshid=MzRlODBiNWFlZA=="
  },
  {
    title: "3x3 Sound Streets",
    date: "2022"
  },
  {
    title: "Mano a mana Cineclub",
    date: "2022"
  },
  {
    title: "Reggae o Bosque",
    date: "2022"
  },
  {
    title: "Lance - troca de tecnologias sociais periféricas no mundo da arte",
    date: "2021"
  }
];
