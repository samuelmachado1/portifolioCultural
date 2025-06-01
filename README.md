# 🎯 Samuel Estrella - Portfólio Interativo

Uma landing page inovadora em formato de jogo de tabuleiro que conta a trajetória profissional do produtor cultural Samuel Estrella. Cada experiência é uma "casa" no percurso, criando uma narrativa visual única e envolvente.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Samuel+Estrella+Portfolio)

## 🚀 MVP Base Funcional

Este repositório contém a implementação base funcional do portfólio, com todos os componentes principais desenvolvidos e testados.

## ✨ Características

- 🎮 **Interface Gamificada**: Tabuleiro interativo com trilha animada
- 🎨 **Design Moderno**: Glassmorphism, gradientes e animações fluidas
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop e mobile
- ⚡ **Performance Otimizada**: React + TypeScript + Vite
- 🔗 **Sistema Extensível**: Fácil adição de novas experiências e funcionalidades
- 💫 **Animações Suaves**: Efeitos visuais que encantam o usuário

## 🚀 Tecnologias

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS puro com variáveis customizadas
- **Arquitetura**: Componentes modulares e hooks customizados

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seuemail/portfolio-samuel.git
cd portfolio-samuel
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
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
