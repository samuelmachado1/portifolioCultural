# 🎮 Samuel Estrella - Portfólio Cultural

> Produtor cultural especializado em eventos musicais e gestão artística

Uma experiência interativa única que apresenta minha trajetória profissional através de um jogo de tabuleiro inovador. Cada etapa da carreira é representada como uma "casa" no percurso, criando uma narrativa visual envolvente sobre minha jornada no cenário cultural brasileiro.

🌟 **Acesse o portfólio**: https://samuelmachado1.github.io/portifolioCultural/

## 🎯 Sobre o Projeto

Este portfólio representa a convergência entre tecnologia e arte, demonstrando como a criatividade pode transformar uma simples apresentação profissional em uma experiência memorável e interativa.

## ✨ Características

- 🎮 **Interface Gamificada**: Navegação em formato de jogo de tabuleiro
- 🎨 **Design Moderno**: Glassmorphism, gradientes e animações fluidas  
- 📱 **Responsivo**: Experiência otimizada para desktop e mobile
- 🔥 **PWA Ready**: Instalável como aplicativo
- ⚡ **Performance**: Carregamento rápido e navegação fluida
- 🎵 **Identidade Visual**: Logo da Calangos Sound System integrada

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: CSS modular  
- **Deploy**: GitHub Pages
- **PWA**: Manifest + Service Worker

## 🚀 Acesso Rápido

- **🌟 Portfólio Live**: https://samuelmachado1.github.io/portifolioCultural/
- **📱 Instalação PWA**: Disponível via navegador
- **📧 Contato**: samuel@estrella.com.br

## 💼 Sobre Samuel Estrella

Produtor cultural com vasta experiência no cenário musical brasileiro, especializado em:

- 🎵 **Eventos Musicais**: Organização e produção de shows e festivais
- 🎤 **Gestão Artística**: Desenvolvimento de carreiras e projetos artísticos  
- 🌆 **Cultura Urbana**: Promoção da cena cultural independente
- 🎪 **Reggae na Praça**: Criador e organizador do movimento cultural

## 📞 Contato

- **📧 Email**: samuel@estrella.com.br
- **🔗 LinkedIn**: [Samuel Estrella](https://linkedin.com/in/samuelestrella)
- **🎵 Calangos Sound System**: Coletivo musical e cultural

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

*Desenvolvido com ❤️ para demonstrar a intersecção entre tecnologia e cultura*
```
http://localhost:5174
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Board/           # Tabuleiro principal
│   ├── House/           # Casas interativas  
│   ├── Modal/           # Modal de detalhes
│   └── Portfolio/       # Componente raiz
├── data/                # Dados do portfólio
├── hooks/               # Hooks customizados
├── types/               # Interfaces TypeScript
└── styles/              # Estilos globais
```

## 🎮 Como Funciona

### Tipos de Casas
- **📚 Cultural**: Experiências em produção cultural
- **🎨 Artistic**: Projetos artísticos e criativos
- **🎬 Production**: Trabalhos de produção audiovisual
- **📖 Education**: Formação e ensino
- **🏆 Milestone**: Marcos importantes na carreira

### Interatividade
- Clique em qualquer casa para ver detalhes
- Modal com informações completas da experiência
- Seção especial de contato no perfil central
- Animações responsivas aos hovers

## 🎨 Design System

### Cores Principais
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)
--glassmorphism: rgba(255, 255, 255, 0.1)
--shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
```

### Temas das Casas
- **Cultural**: Gradiente azul-roxo
- **Artistic**: Gradiente rosa-laranja  
- **Production**: Gradiente verde-azul
- **Education**: Gradiente dourado
- **Milestone**: Gradiente especial multi-cor

## 🔧 Customização

### Adicionando Nova Experiência

1. **Edite o arquivo `src/data/portfolio.ts`**:
```typescript
{
  id: 'nova-experiencia',
  title: 'Título da Experiência',
  period: '2024',
  description: 'Descrição detalhada...',
  type: 'cultural', // cultural | artistic | production | education | milestone
  size: 'medium',   // small | medium | large
  position: { x: 50, y: 50 }, // Posição no tabuleiro (%)
  // ... outros campos
}
```

2. **A casa aparecerá automaticamente no tabuleiro**

### Modificando o Layout

- **Posições**: Ajuste `position: { x, y }` em cada experiência
- **Trilha**: Modifique o SVG path em `Board.tsx`
- **Cores**: Customize as variáveis CSS em `styles/portfolio.css`

## 📱 Deploy

### GitHub Pages
```bash
npm run build
npm run deploy
```

### Netlify
1. Conecte seu repositório
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
```bash
npm i -g vercel
vercel --prod
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 🐛 Troubleshooting

### Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas de Build
```bash
npm run build -- --mode development
```

## 📞 Contato

**Samuel Estrella**
- 📧 Email: samuel@estrella.com.br
- 📱 WhatsApp: +55 11 99999-9999
- 🔗 LinkedIn: [linkedin.com/in/samuel-estrella](https://linkedin.com/in/samuel-estrella)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
