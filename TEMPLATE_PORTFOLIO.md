# 📋 Template para Adição de Dados no Portfólio

Este template serve como guia para adicionar novos itens ao portfólio de Samuel Estrella de forma padronizada.

## 🏠 Estrutura de um Card (BoardHouse)

```typescript
{
  id: "identificador-unico-kebab-case",
  type: "experience" | "milestone", // experience = experiência/projeto | milestone = marco/conquista
  position: { x: 0, y: 0 }, // Posição no board (x: horizontal, y: vertical)
  data: {
    // Dados principais do card
  },
  style: {
    // Configurações visuais do card
  }
}
```

## 📝 Template Completo para Copiar e Colar

### Para Experiências/Projetos (type: "experience")

```typescript
{
  id: "nome-do-projeto-ou-experiencia",
  type: "experience",
  position: { x: 0, y: 0 }, // AJUSTAR: posição no timeline
  data: {
    title: "Título do Projeto/Experiência",
    date: "Mês Ano", // Ex: "Janeiro 2024"
    description: "Descrição curta que aparece no card (máximo 2-3 linhas)",
    fullDescription: "Descrição completa e detalhada do projeto/experiência que aparece no modal quando clicado. Inclua contexto, objetivos, resultados e impacto.",
    tags: ["tag1", "tag2", "tag3"], // Máximo 3-4 tags principais
    achievements: [
      "Conquista ou resultado específico 1",
      "Conquista ou resultado específico 2",
      "Conquista ou resultado específico 3",
      "Conquista ou resultado específico 4"
    ],
    skills: [
      "Habilidade desenvolvida/utilizada 1",
      "Habilidade desenvolvida/utilizada 2", 
      "Habilidade desenvolvida/utilizada 3",
      "Habilidade desenvolvida/utilizada 4"
    ],
    links: [ // OPCIONAL: links relacionados
      {
        title: "Nome do Link",
        url: "https://exemplo.com"
      }
    ]
  },
  style: {
    size: "medium", // "small" | "medium" | "large"
    theme: "cultural", // Ver seção de temas abaixo
    icon: "🎵" // Emoji representativo
  }
}
```

### Para Marcos/Conquistas (type: "milestone")

```typescript
{
  id: "nome-da-conquista-ou-marco",
  type: "milestone",
  position: { x: 0, y: 0 }, // AJUSTAR: posição no timeline
  data: {
    title: "Título da Conquista/Marco",
    date: "Mês Ano", // Ex: "Dezembro 2023"
    description: "Descrição curta da conquista (máximo 2-3 linhas)",
    fullDescription: "Descrição detalhada da conquista, incluindo contexto, importância e reconhecimento recebido.",
    tags: ["conquista", "reconhecimento", "categoria"],
    achievements: [
      "Detalhes específicos da conquista 1",
      "Impacto ou reconhecimento 2",
      "Resultado ou benefício 3"
    ],
    skills: [
      "Habilidade demonstrada 1",
      "Competência reconhecida 2",
      "Expertise validada 3"
    ],
    links: [ // OPCIONAL: links para certificados, vídeos, etc.
      {
        title: "Certificado/Vídeo/Matéria",
        url: "https://exemplo.com"
      }
    ]
  },
  style: {
    size: "medium", // Milestones geralmente são "medium" ou "large"
    theme: "milestone", // Para conquistas use sempre "milestone"
    icon: "🏆" // Ícones comuns: 🏆 🥇 🎖️ ⭐ 🌟 📜 💡
  }
}
```

## 🎨 Guia de Temas e Cores

| Tema | Cor | Uso Recomendado | Ícones Sugeridos |
|------|-----|-----------------|-------------------|
| `cultural` | Vermelho (#ff6b6b) | Projetos culturais, eventos, festivais | 🎵 🎭 🎪 🎨 🎬 |
| `artistic` | Azul (#74b9ff) | Projetos artísticos, criação, tecnologia | 💻 🎨 📱 🖼️ 🎤 |
| `production` | Verde (#00b894) | Produção, gestão, consultoria, negócios | 🎛️ 🤝 🏛️ 📊 💼 |
| `education` | Roxo (#6c5ce7) | Educação, cursos, capacitação | 📚 🎓 📖 💡 🧠 |
| `milestone` | Rosa (#fd79a8) | Conquistas, prêmios, reconhecimentos | 🏆 🥇 🎖️ ⭐ 🌟 📜 |

## 📐 Guia de Posicionamento

### Posição X (Horizontal - Cronológica)
- **0-20**: Início da carreira (2009-2012)
- **20-40**: Desenvolvimento inicial (2013-2016)  
- **40-60**: Consolidação (2017-2020)
- **60-80**: Expansão (2021-2023)
- **80-120**: Período atual e futuro (2024+)

### Posição Y (Vertical - Hierarquia Visual)
- **20-30**: Marcos principais (topo)
- **30-40**: Experiências importantes
- **40-50**: Projetos regulares
- **50-60**: Experiências complementares
- **60-70**: Itens de apoio (base)

## 📏 Guia de Tamanhos

| Tamanho | Uso Recomendado | Dimensões Aproximadas |
|---------|-----------------|----------------------|
| `small` | Itens menores, certificações simples | 250x220px |
| `medium` | Projetos regulares, a maioria dos itens | 300x280px |
| `large` | Marcos importantes, projetos principais | 320x350px |

## ✅ Checklist Antes de Adicionar

- [ ] **ID único**: Verificar se não existe outro item com o mesmo ID
- [ ] **Data cronológica**: Confirmar mês e ano corretos
- [ ] **Posição adequada**: X baseado na cronologia, Y na importância
- [ ] **Tema apropriado**: Escolher tema que representa melhor o conteúdo
- [ ] **Ícone representativo**: Emoji que simboliza bem o projeto/conquista
- [ ] **Tags relevantes**: Máximo 3-4 tags principais e descritivas
- [ ] **Descrição concisa**: Descrição curta clara e objetiva
- [ ] **Achievements específicos**: Resultados quantificáveis quando possível
- [ ] **Skills alinhadas**: Habilidades realmente desenvolvidas/utilizadas
- [ ] **Links válidos**: Testar URLs se incluídos

## 🔧 Exemplo Prático Preenchido

```typescript
{
  id: "workshop-producao-musical",
  type: "experience", 
  position: { x: 85, y: 45 },
  data: {
    title: "Workshop de Produção Musical",
    date: "Março 2024",
    description: "Ministração de workshop sobre produção musical para jovens artistas da região",
    fullDescription: "Desenvolvimento e condução de workshop intensivo de produção musical para 30 jovens artistas emergentes da região de São Sebastião, abordando técnicas de gravação, mixagem e distribuição digital. O projeto resultou na produção de 5 singles pelos participantes.",
    tags: ["educação", "música", "jovens"],
    achievements: [
      "30 jovens artistas capacitados",
      "5 singles produzidos pelos participantes", 
      "Parceria com 3 estúdios locais",
      "95% de aprovação dos participantes"
    ],
    skills: [
      "Educação musical",
      "Mentoria de jovens",
      "Produção musical",
      "Desenvolvimento de talentos"
    ],
    links: [
      {
        title: "Playlist dos Singles Produzidos",
        url: "https://open.spotify.com/playlist/exemplo"
      }
    ]
  },
  style: {
    size: "large",
    theme: "education", 
    icon: "🎚️"
  }
}
```

## 📁 Como Adicionar ao Arquivo

1. Abrir o arquivo `/src/data/portfolio.ts`
2. Localizar o array `houses: [`
3. Adicionar o novo objeto no final da lista (antes do `]`)
4. Não esquecer da vírgula após o último item existente
5. Testar no navegador para verificar se está funcionando
6. Fazer commit das alterações

## 🎯 Dicas Importantes

- **Seja específico**: Use números e dados concretos quando possível
- **Mantenha consistência**: Use o mesmo padrão de linguagem e formatação
- **Cronologia**: Mantenha ordem cronológica na posição X
- **Relevância**: Coloque itens mais importantes em posições Y menores (mais ao topo)
- **Tags úteis**: Use tags que facilitem filtros futuros
- **Links funcionais**: Sempre teste os links antes de adicionar

---

💡 **Este template garante padronização e qualidade na adição de novos conteúdos ao portfólio!**
