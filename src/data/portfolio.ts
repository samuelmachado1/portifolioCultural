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
        date: "28 de Junho de 2025",
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
            title: "LinkedIn - Post de Samuel Estrella sobre o Festival",
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
      id: "festival-paredao-ccbb-2025",
      type: "experience",
      position: { x: 80, y: 50 },
      data: {
        title: "Festival Paredão CCBB 2025",
        date: "28 de Setembro de 2025",
        description:
          "Mediador da Mesa de Debates 'Sonoridades Periféricas: Resistência, Identidade e Transformação Social' no Festival Paredão realizado no Centro Cultural Banco do Brasil.",
        fullDescription:
          "Atuei como mediador da Mesa de Debates 'Sonoridades Periféricas: Resistência, Identidade e Transformação Social' durante o Festival Paredão CCBB 2025. O evento, realizado no prestigioso Centro Cultural Banco do Brasil, reuniu importantes vozes da cultura periférica, destacando-se a participação de Célia Sampaio, conhecida como a dama do reggae, e Nubia, a nova voz feminina do reggae do Maranhão. Durante a conversa, as participantes compartilharam suas trajetórias artísticas e refletiram sobre a importância de pautas como negritude, o amor LGBTQIA+ e toda a liberdade de expressão que o reggae proporciona. Destacamos a participação histórica de Célia Sampaio no festival The Town junto com IZA, discutindo as expectativas em relação ao crescimento do gênero no cenário nacional. A mesa também abordou a fundamental importância de políticas públicas de cultura voltadas para o segmento reggae e toda sua cadeia produtiva, desde artistas até produtores, técnicos e demais profissionais envolvidos. O debate explorou como as sonoridades das periferias urbanas se constituem como ferramentas de resistência, construção de identidade e transformação social, além de temas como apropriação cultural, representatividade e o impacto das sonoridades periféricas na construção de narrativas alternativas sobre os territórios marginalizados.",
        flyerUrl: getPublicAssetPath(
          "assets/festival_paredao_ccbb_2025/flyer_mesa_debates.png"
        ),
        tags: [
          "mediação",
          "cultura periférica",
          "sonoridades",
          "resistência",
          "CCBB",
          "transformação social",
        ],
        achievements: [
          "Mediação de mesa de debates no CCBB com Célia Sampaio e Nubia",
          "Articulação de discussões sobre negritude e diversidade LGBTQIA+",
          "Promoção do debate sobre políticas públicas para o reggae",
          "Facilitação de reflexões sobre cadeia produtiva do reggae",
          "Discussão sobre participação histórica no festival The Town",
          "Contribuição para reflexões sobre representatividade feminina no reggae",
        ],
        skills: [
          "Mediação de Debates",
          "Cultura Periférica",
          "Facilitação de Diálogos",
          "Articulação Institucional",
          "Curadoria de Conteúdo",
        ],
        socialLinks: {
          instagram: "https://www.instagram.com/festivalparedao",
        },
        links: [
          {
            title: "Centro Cultural Banco do Brasil",
            url: "https://ccbb.com.br/brasilia",
          },
          {
            title: "Festival Paredão",
            url: "https://www.festivalparedao.com.br",
          },
        ],
        eventPhotos: [
          getPublicAssetPath(
            "assets/festival_paredao_ccbb_2025/foto_mesa_tres_2.png"
          ),
          getPublicAssetPath(
            "assets/festival_paredao_ccbb_2025/foto_mesa_tres_3.png"
          ),
          getPublicAssetPath(
            "assets/festival_paredao_ccbb_2025/foto_mesa_tres_participantes.png"
          ),
          getPublicAssetPath(
            "assets/festival_paredao_ccbb_2025/foto_samuel_destaque.png"
          ),
        ],
        clippingLinks: [
          {
            title: "Vídeo Release do Festival Paredão CCBB 2025",
            url: getPublicAssetPath(
              "assets/festival_paredao_ccbb_2025/video_release_1_festival_paredao.mov"
            ),
          },
          {
            title: "Programação completa do Festival Paredão CCBB 2025",
            url: "https://ccbb.com.br/brasilia/programacao/festival-paredao-2025",
          },
        ],
      },
      style: {
        size: "large",
        theme: "Mediação",
        icon: getPublicAssetPath(
          "assets/festival_paredao_ccbb_2025/flyer_foto_samuel_estrella.png"
        ),
      },
    },
    {
      id: "queira-sempre-mais-single",
      type: "experience",
      position: { x: 130, y: 55 },
      data: {
        title: "Single 'Queira Sempre Mais'",
        date: "29 de Setembro de 2025",
        description:
          "Lançamento do single 'Queira Sempre Mais' de Samuel Estrella ft. Experimental Dub, uma música inspiracional sobre nunca desistir dos objetivos.",
        fullDescription:
          "Lançamento do single 'Queira Sempre Mais', uma colaboração entre Samuel Estrella e Experimental Dub que marca um momento especial na carreira artística. A música traz uma mensagem inspiracional sobre perseverança e a importância de nunca desistir dos objetivos, lembrando que a vida é um constante evoluir e que devemos sempre querer mais de nós mesmos. A produção combina elementos do reggae original do cerrado com sonoridades dub, criando uma atmosfera única que reflete a identidade musical do projeto. O single foi disponibilizado em todas as plataformas de streaming e no canal Reggae na Praça no YouTube, representando a continuidade do trabalho autoral e a consolidação da parceria artística com Experimental Dub. A canção reforça a mensagem de que devemos sempre buscar nossa melhor versão.",
        flyerUrl: getPublicAssetPath("assets/queira_sempre_mais_single/1.png"),
        tags: [
          "single",
          "lançamento",
          "reggae",
          "dub",
          "inspiracional",
          "colaboração",
          "streaming",
        ],
        achievements: [
          "Lançamento em todas as plataformas de streaming",
          "Colaboração com Experimental Dub",
          "Produção original do Reggae do Cerrado",
          "Disponibilização no canal Reggae na Praça",
          "Consolidação da carreira autoral",
        ],
        skills: [
          "Composição Musical",
          "Produção Artística",
          "Colaboração Musical",
          "Direção Criativa",
          "Marketing Digital",
        ],
        socialLinks: {
          video:
            "https://www.youtube.com/watch?v=W-Hk_CuOs0Q&list=RDW-Hk_CuOs0Q&start_radio=1",
          youtube: "https://youtube.com/reggaenapraca",
        },
        links: [
          {
            title: "Canal Reggae na Praça no YouTube",
            url: "https://youtube.com/reggaenapraca",
          },
          {
            title: "Spotify",
            url: "https://open.spotify.com/artist/samuel-estrella",
          },
        ],
        eventPhotos: [
          getPublicAssetPath("assets/queira_sempre_mais_single/1.png"),
        ],
        clippingLinks: [
          {
            title: "Videoclipe 'Queira Sempre Mais'",
            url: "https://www.youtube.com/watch?v=W-Hk_CuOs0Q&list=RDW-Hk_CuOs0Q&start_radio=1",
          },
        ],
      },
      style: {
        size: "large",
        theme: "Produção Musical",
        icon: getPublicAssetPath("assets/queira_sempre_mais_single/1.png"),
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
        title: "Reggae o Bosque",
        date: "Maio 2022",
        description:
          "Produção e apresentação musical como Calangos Sounds no festival Reggae o Bosque, um evento gratuito em Candangolândia.",
        fullDescription:
          "Participei da produção do festival 'Reggae o Bosque' e também me apresentei como Calangos Sounds. O evento foi uma iniciativa do Coletivo Reggae DF, realizado de forma gratuita no dia 1º de maio de 2022, na Praça do Bosque em Candangolândia. Voltado para toda a família e ao ar livre, o festival contou com uma estrutura completa de bar, praça de alimentação e banheiros. O line-up foi extenso, com bandas como Banda Zoka, Marrul e um show especial 'Brasil Riddim'. Minha apresentação como Calangos Sounds ocorreu às 16:45 e, posteriormente, às 21:45 em uma colaboração com outros artistas para o encerramento.",
        flyerUrl: getPublicAssetPath("assets/reggae_bosque/flyer.png"),
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
          {
            title: "Canal Calango Rasta no YouTube",
            url: "youtube.com/calangorasta",
          },
        ],
        eventPhotos: [
          getPublicAssetPath("assets/reggae_bosque/detalhes_post.png"),
        ],
      },
      style: {
        size: "large",
        theme: "Apresentação Musical",
        icon: getPublicAssetPath("assets/reggae_bosque/flyer.png"),
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
      id: "entrevista-crixas-podcast",
      type: "experience",
      position: { x: 30, y: 48 },
      data: {
        title: "Entrevista Crixás Podcast",
        date: "11 de Maio de 2024",
        description:
          "Entrevista sobre a trajetória do Reggae na Praça e do movimento reggae em São Sebastião.",
        fullDescription:
          "Concedi entrevista ao Crixás Podcast para compartilhar a trajetória completa do projeto Reggae na Praça e a história do movimento reggae em São Sebastião. Durante a conversa, relatei os desafios enfrentados, as conquistas alcançadas ao longo dos anos, e como o projeto se tornou um marco cultural na região, promovendo não apenas a música reggae, mas também a ocupação cultural de espaços públicos e o fortalecimento da comunidade local. A entrevista explora desde os primórdios do movimento até os dias atuais, destacando a importância da persistência, da gestão cultural profissional e do impacto social que o reggae trouxe para São Sebastião.",
        flyerUrl: getPublicAssetPath(
          "assets/crixas_podcast/post_crixas_podcast.png"
        ),
        tags: [
          "entrevista",
          "reggae na praça",
          "movimento reggae",
          "história cultural",
          "podcast",
          "memória",
        ],
        achievements: [
          "Registro da história do Reggae na Praça",
          "Compartilhamento da trajetória do movimento reggae",
          "Divulgação da cultura reggae de São Sebastião",
          "Preservação da memória cultural",
        ],
        skills: [
          "Comunicação",
          "Storytelling",
          "Representação cultural",
          "Memória histórica",
        ],
        socialLinks: {
          video: "https://www.youtube.com/embed/LvRAUPJ5Cp4?start=5713",
          youtube: "https://www.youtube.com/watch?v=LvRAUPJ5Cp4&t=5713s",
          corte1: "https://www.instagram.com/p/C7KbDZJLhYr/embed",
          corte2: "https://www.instagram.com/p/C7KbSI_r5ER/embed",
          corte3: "https://www.instagram.com/p/C7Kbqk5rqlk/embed",
        },
        links: [
          {
            title: "Episódio Completo no YouTube",
            url: "https://www.youtube.com/watch?v=LvRAUPJ5Cp4&t=5713s",
          },
          {
            title: "Corte 1 - Instagram",
            url: "https://www.instagram.com/p/C7KbDZJLhYr/",
          },
          {
            title: "Corte 2 - Instagram",
            url: "https://www.instagram.com/p/C7KbSI_r5ER/",
          },
          {
            title: "Corte 3 - Instagram",
            url: "https://www.instagram.com/p/C7Kbqk5rqlk/",
          },
        ],
        eventPhotos: [
          getPublicAssetPath("assets/crixas_podcast/post_crixas_podcast.png"),
        ],
      },
      style: {
        size: "large",
        theme: "Entrevista",
        icon: getPublicAssetPath(
          "assets/crixas_podcast/post_crixas_podcast.png"
        ),
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
      id: "mocao-louvor-cldf",
      type: "experience",
      position: { x: 60, y: 42 },
      data: {
        title: "Moção de Louvor - CLDF",
        date: "01 de Novembro de 2019",
        description:
          "Reconhecimento da Câmara Legislativa do Distrito Federal pelo profissionalismo e relevante contribuição a projetos culturais e à música brasileira.",
        fullDescription:
          "Recebi Moção de Louvor da Câmara Legislativa do Distrito Federal (CLDF) mediante proposição da Deputada Arlete Sampaio, em reconhecimento ao profissionalismo e à relevante contribuição a projetos culturais e, em especial, à música brasileira. Esta homenagem foi motivada pela conquista da semifinal do Prêmio Profissionais da Música (@premiopm) na categoria Produção - Produtor Executivo Pessoa Física, sendo o único representante do Distrito Federal neste quesito. A moção marca um momento de reflexão sobre uma década de trajetória profissional, desde a emissão da carteira de músico em 2009, quando me tornei profissional da música. Durante esses 10 anos, muitas histórias de desafios e conquistas ficaram pelo caminho. Receber essa homenagem me fez refletir sobre essa caminhada e resgatar ótimos aprendizados que jamais esquecerei. Seja como músico ou como produtor, ser profissional sempre foi a meta. Fico extremamente orgulhoso de conseguir mostrar mais uma vez que nós, jovens Pretos, de periferia, também podemos ocupar lugares de expoência, colocando a quebrada no topo!",
        flyerUrl: getPublicAssetPath(
          "assets/mocao_de_louvor_2019/mocao_de_louvor_Dep.ArleteSampaio.png"
        ),
        tags: [
          "reconhecimento",
          "música brasileira",
          "produção cultural",
          "prêmio profissionais da música",
          "cldf",
          "representatividade",
        ],
        achievements: [
          "Moção de Louvor da CLDF",
          "Semifinalista do Prêmio Profissionais da Música",
          "Único representante do DF na categoria Produtor Executivo",
          "10 anos de carreira profissional na música",
          "Reconhecimento institucional pelo trabalho cultural",
        ],
        skills: [
          "Produção Musical",
          "Gestão de Projetos Culturais",
          "Representatividade",
          "Liderança Cultural",
        ],
        socialLinks: {
          instagram: "https://www.instagram.com/premiopm",
        },
        links: [
          {
            title: "Prêmio Profissionais da Música",
            url: "https://www.ppm.art.br",
          },
        ],
        eventPhotos: [
          getPublicAssetPath(
            "assets/mocao_de_louvor_2019/flyer_semifinal_premio_profissionais_da_musica.png"
          ),
          getPublicAssetPath(
            "assets/mocao_de_louvor_2019/mocao_de_louvor_Dep.ArleteSampaio.png"
          ),
        ],
      },
      style: {
        size: "large",
        theme: "Reconhecimento",
        icon: getPublicAssetPath(
          "assets/mocao_de_louvor_2019/mocao_de_louvor_Dep.ArleteSampaio.png"
        ),
      },
    },
    {
      id: "presidente-crc",
      type: "experience",
      position: { x: 75, y: 55 },
      data: {
        title: "Presidente do CRC/DF",
        date: "Dezembro 2024 - Final do mandato.",
        description:
          "Presidente do Conselho Regional de Cultura de São Sebastião, atuando na defesa das vocações culturais e no projeto do Complexo Cultural.",
        fullDescription:
          "Atuação como Presidente do Conselho Regional de Cultura de São Sebastião - CRC/DF, liderando iniciativas estratégicas para o desenvolvimento cultural da região. Um dos principais marcos da gestão foi o acompanhamento e contribuição para o projeto arquitetônico do Complexo Cultural de São Sebastião. Em reunião realizada em 29 de outubro de 2024 na Administração Regional, junto com Alex e Sr. Chico do Instituto Metamorfose, apresentei aos arquitetos Giovana e Douglas a visão do Conselho sobre as vocações culturais da cidade e como o novo espaço pode atender à comunidade de forma mais completa. Foram levantados mais de 10 pontos estratégicos, incluindo: necessidade de espaços mais versáteis como galeria de arte para expor trabalhos da comunidade e receber mostras externas; ilha de edição audiovisual ao invés de sala de informática tradicional; auditório com capacidade superior ao do IFB, funcionando como cinema, teatro e espaço para shows e eventos de grande porte; espaço de convivência nos pilotis com acesso livre e internet para a comunidade, inspirado no Complexo Nacional da República; diversificação dos serviços com espaço gastronômico mais amplo além da lanchonete. Os arquitetos se comprometeram a apresentar as adequações no projeto até dezembro, incorporando todos os itens levantados pelo CRC. O Conselho segue acompanhando de perto o projeto e trabalhando para garantir que a burocracia não atrapalhe a execução da obra, que tem prazo até meados de 2025 para ser licitada. A verba de 5 milhões de reais, proveniente do prêmio do Sebrae, já está garantida para a construção do Complexo Cultural. A Administração Regional de São Sebastião segue comprometida com o desenvolvimento de espaços que valorizam a arte e a cultura da nossa cidade.",
        flyerUrl: getPublicAssetPath("assets/crc_presidencia/atuacao.png"),
        tags: [
          "conselho",
          "representação",
          "liderança",
          "cultura",
          "complexo cultural",
          "gestão pública",
          "articulação institucional",
        ],
        achievements: [
          "Eleição para presidência do CRC/DF",
          "Liderança no projeto do Complexo Cultural de São Sebastião",
          "Articulação com Administração Regional e arquitetos responsáveis",
          "Contribuição com mais de 10 pontos estratégicos para o projeto",
          "Garantia de verba de R$ 5 milhões para construção do Complexo",
          "Representação das vocações culturais da comunidade",
          "Acompanhamento ativo das políticas culturais regionais",
        ],
        skills: [
          "Liderança institucional",
          "Representação política",
          "Articulação de grupos",
          "Gestão de conselhos",
          "Planejamento de equipamentos culturais",
          "Advocacy para políticas públicas",
          "Gestão de projetos",
        ],
        socialLinks: {
          instagram: "https://www.instagram.com/techrastabr",
          video: getPublicAssetPath(
            "assets/crc_presidencia/reuniao_centro_cultural.mov"
          ),
          comunicado: getPublicAssetPath(
            "assets/crc_presidencia/comunicado_a_comunidade_cultural.mov"
          ),
          oficio: getPublicAssetPath(
            "assets/crc_presidencia/entregando_oficio_para_deputado_max_maciel.mov"
          ),
        },
        links: [
          {
            title: "Conselho Regional de Cultura São Sebastião",
            url: "https://www.instagram.com/crcsaosebas",
          },
          {
            title: "Instituto Metamorfose",
            url: "https://www.instagram.com/institutometamorfose",
          },
        ],
        eventPhotos: [
          getPublicAssetPath("assets/crc_presidencia/atuacao.png"),
          getPublicAssetPath(
            "assets/crc_presidencia/logo_conselho_regional_cultura.png"
          ),
        ],
      },
      style: {
        size: "large",
        theme: "Gestão Cultural",
        icon: getPublicAssetPath(
          "assets/crc_presidencia/logo_conselho_regional_cultura.png"
        ),
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
    {
      id: "equalizando-frequencias-2",
      type: "experience",
      position: { x: 45, y: 80 },
      data: {
        title: "Equalizando Frequências #2",
        date: "27 de Dezembro de 2025",
        description:
          "Sonorização e apoio à realização do evento Equalizando Frequências #2 pela Calangos Sounds, celebrando a virada de ano com reggae e cultura.",
        fullDescription:
          "A Calangos Sounds participou como responsável pela sonorização e apoio à realização da segunda edição do Equalizando Frequências, evento apresentado pela ROOTS & CULTURE PRODUÇÕES. O evento foi realizado no 14 Bis Lounge Bar e Tabacaria, em Santa Maria - DF, reunindo pessoas de diferentes lugares para celebrar a virada de ano com a vibração do reggae. A proposta do evento foi descentralizar a cultura e fortalecer a comunidade com paz, união e criatividade, criando um espaço onde cada batida, verso e acorde servisse como ponte para novas percepções, conexões e caminhos. O line-up contou com Selectas Boquinha Dub e Fyah Bass, Pupa Jay e KingZulu no mic, e a banda Jah Connection Reggae. A Calangos Sounds garantiu a qualidade técnica de som do evento, trabalhando em parceria com a Favela Pro Stage na parte técnica, demonstrando o compromisso com a excelência na produção de eventos culturais e o fortalecimento da cena reggae local. O evento simbolizou a renovação de energias através da música, preparando coração e alma para o novo ano com vibrações positivas.",
        flyerUrl: getPublicAssetPath(
          "assets/equalizando_frequencias_2/flyer_1.png"
        ),
        tags: [
          "sonorização",
          "reggae",
          "virada de ano",
          "calangos sounds",
          "produção técnica",
          "cultura",
        ],
        achievements: [
          "Sonorização completa do evento Equalizando Frequências #2",
          "Apoio à realização de evento cultural descentralizado",
          "Parceria técnica com Favela Pro Stage",
          "Contribuição para fortalecimento da cena reggae local",
          "Garantia de qualidade técnica e experiência sonora imersiva",
        ],
        skills: [
          "Sonorização de Eventos",
          "Produção Técnica",
          "Gestão de Equipamentos",
          "Parceria Institucional",
          "Suporte a Eventos Culturais",
        ],
        socialLinks: {
          instagram: "https://www.instagram.com/calangossounds",
        },
        links: [
          {
            title: "14 Bis Lounge Bar e Tabacaria",
            url: "https://www.instagram.com/14bisbaroficial",
          },
          {
            title: "Calangos Sounds",
            url: "https://www.instagram.com/calangossounds",
          },
          {
            title: "Favela Pro Stage",
            url: "https://www.instagram.com/favelaprostage",
          },
        ],
        eventPhotos: [
          getPublicAssetPath("assets/equalizando_frequencias_2/apoiadores.png"),
          getPublicAssetPath(
            "assets/equalizando_frequencias_2/destaque_post_divulgacao.png"
          ),
        ],
      },
      style: {
        size: "large",
        theme: "Sonorização de Eventos",
        icon: getPublicAssetPath(
          "assets/equalizando_frequencias_2/flyer_1.png"
        ),
      },
    },
    {
      id: "cinema-urbana-2024",
      type: "experience",
      position: { x: 90, y: 75 },
      data: {
        title: "Cinema Urbana 2024 - Praça do Reggae",
        date: "26 de Outubro de 2024",
        description:
          "Mediação de roda de conversa sobre a história da Praça do Reggae e recolocação da placa histórica, promovendo debate sobre ocupação cultural de espaços públicos.",
        fullDescription:
          "Participação como mediador na roda de conversa 'Praça do Reggae: História e Ocupação Cultural', realizada durante o evento Cinema Urbana 2024, edição 'Mulheridades'. O evento reuniu importantes figuras da comunidade local, incluindo Edvair, Zezinho Pedra, Dona Idália e quiosqueiros da praça, para discutir a importância de espaços públicos para a socialização da comunidade e valorização da arte local. A conversa explorou como ações como o Reggae na Praça valorizam a arte local e fomentam o mercado cultural da região, debatendo como a ocupação cultural pode gerar empregos, promover sustentabilidade e criar ambientes mais vibrantes e acolhedores. O momento também marcou a recolocação da placa histórica da Praça do Reggae, simbolizando o reconhecimento oficial deste importante espaço cultural de São Sebastião. A Cinema Urbana encerrou o ciclo da edição com celebrações que incluíram sessões de cinema, debates, oficinas de cineclubismo e festa com os coletivos Calangos Sounds e Jamaicana, demonstrando como as conexões culturais reverberam e fortalecem a identidade local.",
        flyerUrl: getPublicAssetPath(
          "assets/cinema_urbana_2024/flyer_roda_de_conversa.png"
        ),
        tags: [
          "mediação",
          "ocupação cultural",
          "espaços públicos",
          "cinema urbana",
          "praça do reggae",
          "patrimônio cultural",
        ],
        achievements: [
          "Mediação de roda de conversa com agentes culturais locais",
          "Recolocação da placa histórica da Praça do Reggae",
          "Promoção do debate sobre ocupação cultural de espaços públicos",
          "Articulação entre comerciantes e produtores culturais",
          "Fortalecimento da identidade cultural de São Sebastião",
          "Valorização da história e memória do Reggae na Praça",
        ],
        skills: [
          "Mediação de Debates",
          "Articulação Comunitária",
          "Gestão de Patrimônio Cultural",
          "Facilitação de Diálogos",
          "Ocupação Cultural",
        ],
        socialLinks: {
          video: getPublicAssetPath(
            "assets/cinema_urbana_2024/video_divulgacao.mov"
          ),
          release: getPublicAssetPath(
            "assets/cinema_urbana_2024/mini_release_pos_evento.mov"
          ),
          videoRelease: getPublicAssetPath(
            "assets/cinema_urbana_2024/video_release.mov"
          ),
          instagram: "https://www.instagram.com/cinemaurbana",
        },
        links: [
          {
            title: "Cinema Urbana",
            url: "https://www.instagram.com/cinemaurbana",
          },
          {
            title: "Brigadas Populares",
            url: "https://www.instagram.com/brigadaspopulares",
          },
          {
            title: "Calangos Sounds",
            url: "https://www.instagram.com/calangossounds",
          },
        ],
        eventPhotos: [
          getPublicAssetPath(
            "assets/cinema_urbana_2024/descricao_flyer_roda_de_conversa.png"
          ),
          getPublicAssetPath(
            "assets/cinema_urbana_2024/nova_placa_praca_reggae.png"
          ),
        ],
      },
      style: {
        size: "large",
        theme: "Mediação",
        icon: getPublicAssetPath(
          "assets/cinema_urbana_2024/flyer_roda_de_conversa.png"
        ),
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
