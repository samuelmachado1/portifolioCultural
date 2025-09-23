import type { BoardHouse } from "../types/portfolio";
import { getPublicAssetPath } from "../utils/assets";

const portfolioData = {
  profile: {
    name: "Samuel Estrella",
    title:
      "Produção Cultural, Gestão de Projetos & Desenvolvimento de Produtos Digitais",
    bio: "Especialista em gestão de projetos culturais, políticas públicas para cultura e captação de recursos públicos. Experiência consolidada em produção executiva e curadoria de eventos e desenvolvimento de software.",
    contact: {
      email: "samuelmachado1@gmail.com",
      phone: "+55 (61) 98239-1310",
      whatsapp: "+55 (61) 98239-1310",
      social: {
        linkedin: "https://linkedin.com/in/samuel-estrella",
        instagram: "https://instagram.com/techarastabr",
        youtube: "https://youtube.com/samuelestrella",
      },
    },
    avatar: "/src/assets/SamuelEstrella.jpg",
  },

  houses: [
    {
      id: "festival-curicaca",
      type: "experience",
      position: { x: 15, y: 45 },
      data: {
        title: "Festival Curicaca",
        date: "Junho 2025",
        description:
          "Mediador no painel - Empreender no que é nosso: desafios e força do território no Festival Curicaca, discutindo empreendedorismo territorial e inovação.",
        fullDescription:
          "Atuei como mediador no painel 'Empreender no que é nosso: desafios e força do território', durante o Festival Curicaca. A discussão explorou como transformar desafios locais em diferenciais competitivos e como a identidade territorial pode ser uma força motriz para negócios. Junto com Âmbar del Valle González Blanco, Manoel Arcanjo Magalhães e Juliana Vieira, buscamos caminhos práticos para empreendedores locais que enfrentam obstáculos específicos do território, mas que também enxergam seu potencial único. O evento aconteceu no IFB - Campus São Sebastião, com entrada gratuita, demonstrando o compromisso com o acesso democrático ao conhecimento sobre empreendedorismo e inovação territorial.",
        flyerUrl: getPublicAssetPath("assets/curicaca/flyer_curicaca.jpeg"),
        tags: [
          "empreendedorismo",
          "mediação",
          "inovação",
          "território",
          "abdi",
        ],
        achievements: [
          "Mediação de painel sobre empreendedorismo territorial",
          "Articulação com especialistas renomados da área",
          "Promoção do debate sobre inovação local",
          "Facilitação de discussões práticas para empreendedores",
        ],
        skills: [
          "Mediação de Painéis",
          "Empreendedorismo Territorial",
          "Facilitação de Debates",
          "Articulação Institucional",
        ],
        socialLinks: {
          video: getPublicAssetPath("assets/curicaca/videoCuricaca.mp4"),
          youtube: "https://youtube.com/calangorasta",
          website: "https://festivalcuricaca.com.br",
        },
        links: [
          {
            title: "Instituto Federal de Brasília - Campus São Sebastião",
            url: "https://www.ifb.edu.br/saosebastiao",
          },
          {
            title: "Sobre ABDI",
            url: "https://www.abdi.com.br",
          },
        ],
        clippingLinks: [
          {
            title:
              "IFB - Empreendedorismo local, IA e educação no Festival Curicaca",
            url: "https://ifb.edu.br/saosebastiao/42791-empreendedorismo-local-inteligencia-artificial-e-educacao-serao-temas-do-festival-curicaca-no-ifb-campus-sao-sebastiao",
          },
          {
            title: "ABDI - Festival Curicaca chega a São Sebastião/DF",
            url: "https://www.abdi.com.br/festival-curicaca-chega-a-sao-sebastiao-df-nos-dias-27-e-28-6/",
          },
          {
            title: "Let's Events - Festival Curicaca São Sebastião",
            url: "https://lets.4.events/festival-curicaca-sao-sebastiao-C24825E3",
          },
          {
            title: "IFB - Campus São Sebastião recebe Festival Curicaca",
            url: "https://www.ifb.edu.br/saosebastiao/42780-ifb-campus-sao-sebastiao-recebe-festival-curicaca-nos-dias-27-e-28",
          },
          {
            title:
              "ABDI - Empreendedorismo local, IA e educação em São Sebastião",
            url: "https://www.abdi.com.br/empreendedorismo-local-ia-e-educacao-em-sao-sebastiao-df-serao-temas-do-festival-curicaca/",
          },
          {
            title: "BSB Capital - São Sebastião recebe evento de tecnologia",
            url: "https://bsbcapital.com.br/sao-sebastiao-recebe-evento-de-tecnologia-sexta-27-e-sabado-28/",
          },
          {
            title:
              "Primeiro Jornal - Festival Curicaca debate desafios para inovação",
            url: "https://primeirojornal.com.br/2025/06/festival-curicaca-debate-desafios-para-a-inovacao-em-sao-sebastiao/",
          },
          {
            title: "LinkedIn - Post de Samuel Machado sobre o Festival",
            url: "https://www.linkedin.com/posts/samuel-machado-347204158_festivalcuricaca-inovaaexaeto-lideranaexa-activity-7340535462085779456-jy2F",
          },
        ],
      },
      style: {
        size: "large",
        theme: "Mediação",
        icon: getPublicAssetPath("assets/curicaca/flyer_curicaca.jpeg"),
      },
    },
    {
      id: "reggae-na-praca-sessions",
      type: "experience",
      position: { x: 150, y: 45 },
      data: {
        title: "Reggae na Praça Sessions",
        date: "21 de Setembro de 2025",
        description:
          "Curadoria e apresentação do Reggae na Praça Sessions na Tenda em Movimento durante o festival Elemento em Movimento.",
        fullDescription:
          "Como parte da programação do festival Elemento em Movimento, realizamos o Reggae na Praça Sessions na icônica Tenda em Movimento. O evento reuniu alguns dos principais sound systems e coletivos da cena reggae do DF: BoomClap sound system, Rude Gyals, Boquinha Dub e Calangos Sounds (Samuel Estrella e Dudulino). Foi uma experiência única de intercâmbio cultural, onde cada coletivo trouxe sua identidade sonora e estética, criando uma atmosfera autêntica do Reggae na Praça. A iniciativa reforça o conceito itinerante do evento, levando a cultura reggae para diferentes espaços e contextos da cidade.",
        flyerUrl: getPublicAssetPath(
          "assets/reggaenapraca_elemento/flyer_reggaenapraca_elemento.png"
        ),
        tags: [
          "reggae",
          "sound system",
          "curadoria",
          "festival",
          "elemento em movimento",
        ],
        achievements: [
          "Curadoria e apresentação na Tenda em Movimento",
          "Apresentação musical como Samuel Estrella e Experimental DUB",
          "Intercâmbio cultural entre coletivos reggae",
          "Expansão do conceito itinerante do Reggae na Praça",
          "Engajamento com o público do festival Elemento em Movimento",
        ],
        skills: [
          "Curadoria",
          "Produção de Eventos",
          "Articulação entre Coletivos",
          "Apresentação artística",
          "Gestão Cultural Itinerante",
        ],
        socialLinks: {
          video: getPublicAssetPath(
            "assets/reggaenapraca_elemento/BC860B97-E35F-4F01-BF88-9669252A9D39.mov"
          ),
          instagram: "https://www.instagram.com/reggaenapraca",
          website: "https://reggaenapraca.com.br",
        },
        links: [
          {
            title: "Festival Elemento em Movimento",
            url: "https://elementoemmovimento.com.br",
          },
          {
            title: "Instagram @reggaenapraca",
            url: "https://www.instagram.com/reggaenapraca",
          },
        ],
        eventPhotos: [
          getPublicAssetPath(
            "assets/reggaenapraca_elemento/photos/Gabriela Pires - @gabiiils @ocreimagem-291.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_elemento/photos/VENUS-8604.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_elemento/photos/Gabriela Pires - @gabiiils @ocreimagem-272.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_elemento/photos/LUCAS MEDEIROS-0677.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_elemento/photos/Gabriela Pires - @gabiiils @ocreimagem-281.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_elemento/photos/BEATRIZ BRAGA-0547.jpg"
          ),
        ],
      },
      style: {
        size: "large",
        theme: "Produção Geral",
        icon: getPublicAssetPath(
          "assets/reggaenapraca_elemento/flyer_reggaenapraca_elemento.png"
        ),
      },
    },
    {
      id: "reggae-na-praca-10-anos",
      type: "experience",
      position: { x: 90, y: 35 },
      data: {
        title: "Reggae na Praça 10 Anos",
        date: "09 de Março de 2025",
        description:
          "Produção geral da edição comemorativa de 10 anos do maior festival de Reggae do DF, realizado na Praça do Reggae em São Sebastião com mais de 900 pessoas.",
        fullDescription:
          "O projeto Plataforma Periférica II, apoiado pelo deputado distrital Max Maciel, destinou fomento para a realização do Reggae na Praça - 10 Anos, evento produzido pelo coletivo Calangos Sounds. Reunindo 12 atrações musicais e um público de mais de 900 pessoas, o evento superou expectativas e consolidou-se como um marco cultural e de desenvolvimento socioeconômico para São Sebastião. A curadoria contemplou artistas locais como Jah Connection, Negra Eve, Experimental Dub, I Cris, Heitor Valente, Selecta KBC, Novick MC e DJ Kalm, além da headliner nacional Marina Peralta. O evento gerou 82 empregos diretos e mais de 600 indiretos, com 65% dos recursos utilizados em serviços e produtos locais, impactando positivamente a economia criativa da região.",
        tags: ["festival", "reggae", "economia criativa", "impacto social"],
        achievements: [
          "Público de mais de 900 pessoas na Praça do Reggae",
          "12 atrações musicais com foco na cena local",
          "82 empregos diretos e mais de 600 indiretos gerados",
          "65% dos recursos investidos na economia local",
          "Alcance de +99 mil pessoas nas redes sociais em 27 dias",
          "Aumento de 150% no número de seguidores @reggaenapraca",
          "21 inserções na mídia (TV Globo, G1, Correio Braziliense, Portal Metrópoles e outros)",
          "Investimento de R$ 90.000 com retorno estimado de R$ 150.000",
          "Equipe de produção com 48% de mulheres",
          "Alinhamento com 4 Objetivos de Desenvolvimento Sustentável da ONU",
        ],
        skills: [
          "Produção de Grandes Eventos",
          "Captação de Recursos Públicos",
          "Curadoria Artística",
          "Gestão de Economia Criativa",
          "Desenvolvimento Social",
          "Marketing Digital",
          "Impacto Socioeconômico",
        ],
        flyerUrl: getPublicAssetPath(
          "assets/reggaenapraca_dez_anos/reggaenapraca10anosflyer.jpeg"
        ),
        socialLinks: {
          video: getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/6d940beb7c5145538b91e24a5b5bb962.mp4"
          ),
          instagram: "https://www.instagram.com/reggaenapraca",
          website: "https://reggaenapraca.com.br",
        },
        links: [
          {
            title: "Site Oficial do Festival",
            url: "https://reggaenapraca.com.br",
          },
          {
            title: "Instagram @reggaenapraca",
            url: "https://www.instagram.com/reggaenapraca",
          },
        ],
        clippingLinks: [
          {
            title: "TV Globo - Bom Dia DF (07/03)",
            url: "https://g1.globo.com/df/distrito-federal/bom-dia-df/video/bom-dia-df-edicao-de-07032025-13399617.ghtml",
          },
          {
            title: "TV Globo - DF1 (07/03)",
            url: "https://g1.globo.com/df/distrito-federal/df1/video/df1-edicao-de-07032025-13400523.ghtml",
          },
          {
            title: "Correio Braziliense - Festival de Reggae em São Sebastião",
            url: "https://www.correiobraziliense.com.br/diversao-e-arte/2025/03/7078075-sao-sebastiao-recebe-10-edicao-do-festival-reggae-na-praca.html",
          },
          {
            title: "G1 - Agenda Cultural do DF",
            url: "https://g1.globo.com/df/distrito-federal/o-que-fazer-no-distrito-federal/noticia/2025/03/07/e-o-tchan-teatro-com-lucinha-lins-e-ressacas-de-carnaval-sao-atracoes-do-fim-de-semana-no-df.ghtml",
          },
          {
            title: "BrasíliaETC - 10ª edição do Festival",
            url: "https://brasiliaetc.com.br/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca/",
          },
          {
            title: "Portal Lago Sul - Reggae na Praça",
            url: "https://lagosul.com.br/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca/",
          },
          {
            title: "Visite Brasília - 10ª edição",
            url: "https://visitebrasilia.com.br/noticias/sao-sebastiao-recebe-10-edicao-do-festival-reggae-na-praca",
          },
          {
            title: "Mutirum Instituto de Cultura",
            url: "https://mutirum.com/2025/03/05/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca/",
          },
          {
            title: "TV Comunitária DF",
            url: "https://www.tvcomunitariadf.com/2025/03/06/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca-com-mais-de-13-grupos-inclusive-renato-mattos-o-pai-do-reggae-no-df/",
          },
          {
            title: "Jornal Daqui DF",
            url: "https://jornaldaquidf.com.br/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca/",
          },
          {
            title: "Jornal Alô Brasília",
            url: "https://www.alobrasilia.com.br/2025/03/sao-sebastiao-recebe-10-edicao-do.html",
          },
          {
            title: "Conectado ao Poder",
            url: "https://conectadoaopoder.com.br/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca/",
          },
          {
            title: "É Di Brasília",
            url: "https://www.edibrasilia.com.br/noticias/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca/",
          },
          {
            title: "Jornal de Brasília - Agenda",
            url: "https://jornaldebrasilia.com.br/entretenimento/agenda-brasilia/ressaca-pos-carnaval-veja-onde-curtir-o-restinho-da-folia-no-df/",
          },
          {
            title: "Portal De Boa - Festival",
            url: "https://brasilia.deboa.com/brasilia/festa-show/festas-shows-em-brasilia/festival-reggae-na-praca/",
          },
          {
            title: "Sabor a Vida",
            url: "https://www.saboravida.com.br/gastronomia/2025/03/05/sao-sebastiao-recebe-10a-edicao-do-festival-reggae-na-praca/",
          },
          {
            title: "São Sebastião Oficial - Instagram",
            url: "https://www.instagram.com/p/DG1T2-vxRy4/?igsh=Z2l0cnk0a2x0aHFk",
          },
          {
            title: "São Sebastião Oficial - Facebook",
            url: "https://www.facebook.com/share/p/1C3cAen65a/?mibextid=wwXIfr",
          },
        ],
        impactReport: {
          investment: "R$ 90.000,00",
          estimatedReturn: "R$ 150.000,00",
          directJobs: 82,
          indirectJobs: 600,
          localSpending: "65%",
          audience: "900+",
          socialReach: "99.000+",
          mediaInsertions: "21",
          followerGrowth: "150%",
          womenInProduction: "48%",
          odsAlignment: ["ODS 8", "ODS 9", "ODS 10", "ODS 11"],
        },
        eventPhotos: [
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-12.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-6.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-3.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-14.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-9.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-10.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-13.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-2.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/photos-1/RodGueto-11.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/6 - FOTOS 6/RNP - 2025 - RodGueto-3.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/7 - FOTOS 7/RNP - 2025 - RodGueto-1.jpg"
          ),
          getPublicAssetPath(
            "assets/reggaenapraca_dez_anos/photos/8 - FOTOS 8/RNP - 2025 - RodGueto-2.jpg"
          ),
        ],
      },
      style: {
        size: "large",
        theme: "Produtor Geral",
        icon: getPublicAssetPath(
          "assets/reggaenapraca_dez_anos/reggaenapraca10anosflyer.jpeg"
        ),
      },
    },
    {
      id: "reggae-o-bosque-2022",
      type: "experience",
      position: { x: 70, y: 40 }, // AJUSTAR: posição no timeline
      data: {
        title: "Reggae o Bosque", //
        date: "Maio 2022", //
        description:
          "Produção e apresentação musical como Calangos Sounds no festival Reggae o Bosque, um evento gratuito em Candangolândia.",
        fullDescription:
          "Participei da produção do festival 'Reggae o Bosque' e também me apresentei como Calangos Sounds. O evento foi uma iniciativa do Coletivo Reggae DF, realizado de forma gratuita no dia 1º de maio de 2022, na Praça do Bosque em Candangolândia. Voltado para toda a família e ao ar livre, o festival contou com uma estrutura completa de bar, praça de alimentação e banheiros. O line-up foi extenso, com bandas como Banda Zoka, Marrul e um show especial 'Brasil Riddim'. Minha apresentação como Calangos Sounds ocorreu às 16:45 e, posteriormente, às 21:45 em uma colaboração com outros artistas para o encerramento.",
        tags: ["festival", "reggae", "produção musical"],
        achievements: [
          "Realização de um evento gratuito e ao ar livre para toda a família ",
          "Apresentação como Calangos Sounds em dois momentos distintos do festival ",
          "Curadoria de um line-up com mais de 10 bandas e artistas da cena reggae ",
          "Produção de um evento com estrutura de bar, praça de alimentação e banheiros ",
        ],
        skills: [
          "Produção de Eventos Culturais",
          "Apresentação Musical (Selecta)",
          "Curadoria Artística",
          "Articulação de Coletivos Culturais",
        ],
        links: [
          // OPCIONAL: links relacionados
          {
            title: "Canal Calango Rasta no YouTube",
            url: "youtube.com/calangorasta", //
          },
        ],
      },
      style: {
        size: "large", // "small" | "medium" | "large"
        theme: "cultural", // Ver seção de temas abaixo
        icon: "🎵", // Emoji representativo
      },
    },
    {
      id: "curso-gestao-cultural",
      type: "experience",
      position: { x: 25, y: 60 },
      data: {
        title: "Curso de Gestão Cultural",
        date: "Setembro 2019",
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
        date: "Janeiro 2020",
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
        date: "Junho 2021",
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
        date: "Agosto 2021",
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
        date: "Abril 2023",
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
        date: "Março 2020",
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
    {
      id: "banda-calango-rasta",
      type: "milestone",
      position: { x: 15, y: 40 },
      data: {
        title: "Fundação da Banda Calango Rasta",
        date: "Maio 2011",
        description: "Fundador, compositor e vocalista da banda Calango Rasta",
        fullDescription:
          "Fundei a banda Calango Rasta, atuando como compositor e vocalista. A banda teve seu primeiro single lançado em 2012 pela produtora Unidade 76, marcando minha entrada definitiva no cenário musical profissional.",
        tags: ["música", "reggae", "banda", "composição"],
        achievements: [
          "Fundação da banda Calango Rasta",
          "Primeiro single lançado pela Unidade 76",
          "Desenvolvimento de repertório autoral",
          "Apresentações em diversos eventos",
        ],
        skills: [
          "Composição musical",
          "Performance vocal",
          "Liderança de banda",
          "Produção musical",
        ],
      },
      style: {
        size: "large",
        theme: "artistic",
        icon: "🎵",
      },
    },
    {
      id: "calangos-sound-system",
      type: "experience",
      position: { x: 25, y: 55 },
      data: {
        title: "Calangos Sound System",
        date: "Setembro 2012",
        description:
          "Criação da produtora própria e primeiro evento independente",
        fullDescription:
          "Em 2012, com a produtora própria 'Calangos Sound System', realizamos nosso primeiro evento de forma independente: o 'SOUND SYSTEM'. Este evento serviu de laboratório para o que hoje é o projeto 'REGGAE NA PRAÇA', que já teve 8 edições.",
        tags: ["produção", "empreendedorismo", "sound system", "reggae"],
        achievements: [
          "Criação da produtora Calangos Sound System",
          "Realização do primeiro evento independente",
          "Base para o projeto Reggae na Praça",
          "Desenvolvimento de metodologia própria",
        ],
        skills: [
          "Gestão de produtora",
          "Organização de eventos",
          "Empreendedorismo cultural",
          "Gestão de sound system",
        ],
      },
      style: {
        size: "large",
        theme: "production",
        icon: "🎛️",
      },
    },
    {
      id: "omb-registro",
      type: "milestone",
      position: { x: 35, y: 30 },
      data: {
        title: "Registro na OMB",
        date: "Outubro 2009",
        description: "Músico registrado na Ordem dos Músicos do Brasil",
        fullDescription:
          "Registro oficial como músico na Ordem dos Músicos do Brasil - OMB/DF, formalizando minha atuação profissional na música e ampliando horizontes em produções artísticas.",
        tags: ["registro profissional", "OMB", "música", "formalização"],
        achievements: [
          "Registro oficial na OMB/DF",
          "Reconhecimento profissional",
          "Habilitação para atuação formal",
          "Ampliação de oportunidades",
        ],
        skills: [
          "Profissionalismo musical",
          "Conhecimento técnico",
          "Ética profissional",
          "Networking institucional",
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "📜",
      },
    },
    {
      id: "gerente-regional-cultura",
      type: "experience",
      position: { x: 45, y: 60 },
      data: {
        title: "Gerente Regional de Cultura",
        date: "Fevereiro 2020",
        description: "Gerente Regional de Cultura em São Sebastião",
        fullDescription:
          "Atuação como Gerente Regional de Cultura em São Sebastião, coordenando políticas culturais regionais, desenvolvendo projetos e promovendo a cultura local com foco na valorização de artistas e manifestações culturais da região.",
        tags: [
          "gestão pública",
          "cultura",
          "São Sebastião",
          "políticas culturais",
        ],
        achievements: [
          "Coordenação de políticas culturais regionais",
          "Desenvolvimento de projetos comunitários",
          "Fortalecimento da cena cultural local",
          "Articulação com poder público",
        ],
        skills: [
          "Gestão pública",
          "Políticas culturais",
          "Articulação institucional",
          "Desenvolvimento regional",
        ],
      },
      style: {
        size: "large",
        theme: "production",
        icon: "🏛️",
      },
    },
    {
      id: "vice-presidente-crc",
      type: "experience",
      position: { x: 55, y: 35 },
      data: {
        title: "Vice Presidente do CRC/DF",
        date: "Março 2019",
        description:
          "Vice Presidente do Conselho Regional de Cultura de São Sebastião",
        fullDescription:
          "Atuação como Vice Presidente do Conselho Regional de Cultura de São Sebastião - CRC/DF, participando ativamente das decisões sobre políticas culturais e representando os interesses da comunidade artística regional.",
        tags: ["conselho", "representação", "liderança", "cultura"],
        achievements: [
          "Eleição para vice-presidência do CRC/DF",
          "Representação da comunidade artística",
          "Participação em decisões estratégicas",
          "Advocacy para políticas culturais",
        ],
        skills: [
          "Liderança institucional",
          "Representação política",
          "Articulação de grupos",
          "Gestão de conselhos",
        ],
      },
      style: {
        size: "medium",
        theme: "production",
        icon: "🤝",
      },
    },
    {
      id: "presidente-crc",
      type: "experience",
      position: { x: 75, y: 55 },
      data: {
        title: "Presidente do CRC/DF",
        date: "Janeiro 2024",
        description:
          "Presidente do Conselho Regional de Cultura de São Sebastião",
        fullDescription:
          "Atuação como Presidente do Conselho Regional de Cultura de São Sebastião - CRC/DF, participando ativamente das decisões sobre políticas culturais e representando os interesses da comunidade artística regional.",
        tags: ["conselho", "representação", "liderança", "cultura"],
        achievements: [
          "Eleição para presidência do CRC/DF",
          "Representação da comunidade artística",
          "Participação em decisões estratégicas",
          "Advocacy para políticas culturais",
        ],
        skills: [
          "Liderança institucional",
          "Representação política",
          "Articulação de grupos",
          "Gestão de conselhos",
        ],
      },
      style: {
        size: "medium",
        theme: "Gestão Cultural",
        icon: "🤝",
      },
    },
    {
      id: "membro-codese",
      type: "experience",
      position: { x: 65, y: 50 },
      data: {
        title: "Membro da Câmara Técnica CODESE/DF",
        date: "Maio 2020",
        description: "Membro da Câmara Técnica de Cultura do CODESE/DF",
        fullDescription:
          "Participação como membro da Câmara Técnica de Cultura do Conselho de Desenvolvimento Econômico, Sustentável e Estratégico do Distrito Federal - CODESE/DF, contribuindo para políticas de desenvolvimento cultural sustentável.",
        tags: ["desenvolvimento", "sustentabilidade", "estratégia", "DF"],
        achievements: [
          "Participação em câmara técnica especializada",
          "Contribuição para políticas de desenvolvimento",
          "Articulação entre cultura e economia",
          "Visão estratégica para o DF",
        ],
        skills: [
          "Planejamento estratégico",
          "Desenvolvimento sustentável",
          "Economia criativa",
          "Análise de políticas públicas",
        ],
      },
      style: {
        size: "medium",
        theme: "production",
        icon: "📊",
      },
    },
    {
      id: "premio-profissionais-musica",
      type: "milestone",
      position: { x: 75, y: 40 },
      data: {
        title: "Finalista Prêmio Profissionais da Música",
        date: "Setembro 2019",
        description: "Finalista na categoria Produção Executiva",
        fullDescription:
          "Reconhecimento como finalista no Prêmio Profissionais da Música na categoria Produção Executiva, destacando a qualidade e relevância do trabalho desenvolvido na área de produção musical e cultural.",
        tags: ["prêmio", "reconhecimento", "produção executiva", "música"],
        achievements: [
          "Finalista em premiação nacional",
          "Reconhecimento por pares da indústria",
          "Destaque na produção executiva",
          "Validação do trabalho profissional",
        ],
        skills: [
          "Excelência em produção",
          "Gestão de projetos musicais",
          "Qualidade técnica",
          "Inovação na produção",
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "🏆",
      },
    },
    {
      id: "mocao-louvor-cldf",
      type: "milestone",
      position: { x: 85, y: 55 },
      data: {
        title: "Moção de Louvor - CLDF",
        date: "Novembro 2019",
        description: "Moção de louvor na Câmara Legislativa do DF",
        fullDescription:
          "Recebimento de Moção de Louvor na Câmara Legislativa do Distrito Federal pelas contribuições significativas em projetos culturais, reconhecendo o impacto positivo das ações desenvolvidas para a comunidade.",
        tags: [
          "reconhecimento",
          "CLDF",
          "contribuição social",
          "projetos culturais",
        ],
        achievements: [
          "Moção de louvor oficial da CLDF",
          "Reconhecimento público das contribuições",
          "Impacto social reconhecido",
          "Exemplo para a comunidade",
        ],
        skills: [
          "Impacto social",
          "Liderança comunitária",
          "Transformação cultural",
          "Responsabilidade social",
        ],
      },
      style: {
        size: "large",
        theme: "milestone",
        icon: "🎖️",
      },
    },
    {
      id: "premiacao-lecria",
      type: "milestone",
      position: { x: 95, y: 30 },
      data: {
        title: "Premiação EDITAL LECRIA",
        date: "Agosto 2017",
        description: "Premiação no Laboratório de Empreendimentos Criativos",
        fullDescription:
          "Conquista de premiação no EDITAL LECRIA - Laboratório de Empreendimentos Criativos, reconhecendo a inovação e qualidade em projetos de empreendedorismo cultural e economia criativa.",
        tags: [
          "premiação",
          "empreendedorismo",
          "inovação",
          "economia criativa",
        ],
        achievements: [
          "Premiação em edital competitivo",
          "Reconhecimento da inovação",
          "Destaque em empreendedorismo cultural",
          "Validação de modelo de negócio",
        ],
        skills: [
          "Empreendedorismo cultural",
          "Inovação em projetos",
          "Economia criativa",
          "Gestão de negócios culturais",
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "💡",
      },
    },
    {
      id: "fac-primeiro-lugar",
      type: "milestone",
      position: { x: 105, y: 45 },
      data: {
        title: "1º Lugar Edital FAC/DF",
        date: "Dezembro 2017",
        description: "Primeiro lugar no Edital Áreas Culturais do FAC/DF",
        fullDescription:
          "Conquista do primeiro lugar no Edital Áreas Culturais do Fundo de Apoio à Cultura - FAC/DF, demonstrando excelência na elaboração de projetos culturais e reconhecimento oficial da qualidade das propostas.",
        tags: ["FAC", "primeiro lugar", "edital", "excelência"],
        achievements: [
          "Primeiro lugar em edital competitivo",
          "Projeto cultural de excelência",
          "Captação de recursos públicos",
          "Reconhecimento institucional",
        ],
        skills: [
          "Elaboração de projetos",
          "Captação de recursos",
          "Gestão de editais",
          "Excelência técnica",
        ],
      },
      style: {
        size: "large",
        theme: "milestone",
        icon: "🥇",
      },
    },
    {
      id: "homenagem-festival-cerrado",
      type: "milestone",
      position: { x: 115, y: 60 },
      data: {
        title: "Homenageado Festival Cerrado Reggae",
        date: "Outubro 2020",
        description: "Homenagem no I Festival Cerrado Reggae",
        fullDescription:
          "Reconhecimento como homenageado no I Festival Cerrado Reggae, celebrando a contribuição significativa para o desenvolvimento e fortalecimento da cena reggae no Distrito Federal e região do Cerrado.",
        tags: ["homenagem", "reggae", "festival", "reconhecimento"],
        achievements: [
          "Homenagem em festival de relevância",
          "Reconhecimento pela comunidade reggae",
          "Contribuição para cena musical local",
          "Referência no movimento cultural",
        ],
        skills: [
          "Liderança cultural",
          "Desenvolvimento de cena musical",
          "Articulação comunitária",
          "Influência cultural",
        ],
        links: [
          {
            title: "Vídeo da Homenagem",
            url: "https://youtu.be/cmMdYI9HBBI?t=8550",
          },
        ],
      },
      style: {
        size: "medium",
        theme: "milestone",
        icon: "🎭",
      },
    },
    {
      id: "reggae-na-praca-projeto",
      type: "experience",
      position: { x: 125, y: 35 },
      data: {
        title: "Projeto Reggae na Praça",
        date: "Junho 2014",
        description:
          "Criação e produção do projeto Reggae na Praça com 15+ edições",
        fullDescription:
          "Desenvolvimento e coordenação do projeto 'Reggae na Praça', que se tornou um dos principais eventos de reggae do DF. O projeto já realizou mais de 15 edições, promovendo a cultura reggae e oferecendo espaço para artistas locais e nacionais.",
        tags: ["reggae", "evento", "produção", "continuidade"],
        achievements: [
          "Mais de 15 edições realizadas",
          "Consolidação como evento referência",
          "Promoção de artistas locais",
          "Fortalecimento da cena reggae",
        ],
        skills: [
          "Produção de eventos",
          "Gestão de projeto longevo",
          "Curadoria musical",
          "Desenvolvimento de público",
        ],
        links: [
          {
            title: "Instagram do Projeto",
            url: "https://www.instagram.com/reggaenapraca",
          },
        ],
      },
      style: {
        size: "large",
        theme: "cultural",
        icon: "🎪",
      },
    },
  ] as BoardHouse[],

  boardConfig: {
    width: 1200,
    height: 400,
    backgroundColor: "#1a1a2e",
    pathColor: "#ffffff",
  },
};

export default portfolioData;
