<div align="center">

# 🎯 Samuel Estrella - Portfólio Cultural

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/samuelmachado1/portifolioCultural?style=social" alt="GitHub stars" />
  <img src="https://img.shields.io/github/forks/samuelmachado1/portifolioCultural?style=social" alt="GitHub forks" />
  <img src="https://img.shields.io/github/watchers/samuelmachado1/portifolioCultural?style=social" alt="GitHub watchers" />
</p>

<p align="center">
  <strong>Portfólio interativo com timeline horizontal de experiências</strong><br>
  Produtor cultural especializado em eventos musicais e gestão artística
</p>

<p align="center">
  <a href="https://samuelmachado1.github.io/portifolioCultural/" target="_blank">
    <img src="https://img.shields.io/badge/🌟_Ver_Portfólio-Live_Demo-blue?style=for-the-badge" alt="Ver Portfólio" />
  </a>
  <a href="#-instalação" target="_blank">
    <img src="https://img.shields.io/badge/🚀_Quick_Start-Instalação-green?style=for-the-badge" alt="Quick Start" />
  </a>
  <a href="#-contato" target="_blank">
    <img src="https://img.shields.io/badge/📧_Contato-samuel@estrella.com.br-red?style=for-the-badge" alt="Contato" />
  </a>
</p>

</div>

---

## 📖 Sobre o Projeto

Uma **experiência interativa inovadora** que apresenta a trajetória profissional do produtor cultural Samuel Estrella através de uma timeline horizontal com cards interativos. Cada marco da carreira é representado como um card navegável, criando uma narrativa visual envolvente sobre a jornada no cenário cultural brasileiro.

### 🎯 **Objetivo**
Demonstrar como a **convergência entre tecnologia e arte** pode transformar uma apresentação profissional tradicional em uma experiência **memorável e interativa**.

### 🏆 **Diferenciais**
- ✨ **Timeline Horizontal Interativa** com navegação por arrasto e botões
- 🎨 **Design Moderno** com glassmorphism e animações fluidas
- 📱 **Totalmente Responsivo** para todos os dispositivos
- ⚡ **Performance Otimizada** com bundle de apenas 36KB
- 🔥 **PWA Ready** - instalável como aplicativo
- 🎵 **Identidade Visual** da Calangos Sound System

---

## 🚀 Demo & Links

| Ambiente | URL | Status |
|----------|-----|--------|
| **🌟 Produção** | [samuelmachado1.github.io/portifolioCultural](https://samuelmachado1.github.io/portifolioCultural/) | ![Status](https://img.shields.io/website?url=https%3A//samuelmachado1.github.io/portifolioCultural/&style=flat-square) |
| **📱 PWA Install** | Disponível via navegador | ![PWA](https://img.shields.io/badge/PWA-Ready-success?style=flat-square) |
| **📊 Lighthouse** | Performance Score | ![Lighthouse](https://img.shields.io/badge/Score-95%2B-brightgreen?style=flat-square) |

---

## 🛠️ Stack Tecnológica

### **Frontend**
- ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white) **React 19** - UI Library mais recente
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white) **TypeScript** - Type safety e melhor DX
- ![CSS3](https://img.shields.io/badge/CSS3-Modular-1572B6?logo=css3&logoColor=white) **CSS Modular** - Estilização componentizada

### **Build & Tooling**
- ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&logoColor=white) **Vite** - Build tool ultra-rápida
- ![ESLint](https://img.shields.io/badge/ESLint-9.25.0-4B32C3?logo=eslint&logoColor=white) **ESLint** - Code quality e consistency
- ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?logo=github-actions&logoColor=white) **GitHub Actions** - Automação de deploy

### **Deploy & Hosting**
- ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deploy-181717?logo=github&logoColor=white) **GitHub Pages** - Hosting estático
- ![PWA](https://img.shields.io/badge/PWA-Manifest-5A0FC8?logo=pwa&logoColor=white) **PWA** - Progressive Web App

---

## 🚀 Instalação

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn
- Git

### **Clone e Setup**
```bash
# Clone o repositório
git clone https://github.com/samuelmachado1/portifolioCultural.git

# Entre no diretório
cd portifolioCultural

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Abra no navegador
open http://localhost:5173
```

### **Scripts Disponíveis**
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificação de código
npm run deploy   # Deploy para GitHub Pages
```

---

## 🏗️ Arquitetura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Board/           # Container da timeline
│   ├── FilterBar/       # Filtros de navegação
│   ├── Portfolio/       # Container principal
│   ├── TimelineCard/    # Cards interativos de experiência
│   ├── Modal/           # Modal de detalhes expandidos
│   ├── Footer/          # Rodapé com informações
│   └── UI/              # Componentes de interface
├── data/                # Dados do portfólio
├── hooks/               # Custom hooks
├── styles/              # Estilos globais
├── types/               # Definições TypeScript
└── assets/              # Imagens e recursos
```

### **Padrões Utilizados**
- ✅ **Component Composition** - Componentes reutilizáveis
- ✅ **Custom Hooks** - Lógica compartilhada
- ✅ **TypeScript Strict** - Type safety total
- ✅ **CSS Modules** - Escopo isolado de estilos
- ✅ **Lazy Loading** - Otimização de performance
---
## 📊 Métricas de Performance

| Métrica          | Valor    | Benchmark        |
| ---------------- | -------- | ---------------- |
| **Bundle Size**  | 36.28 KB | 🟢 Excelente      |
| **JavaScript**   | 11.57 KB | 🟢 Otimizado      |
| **First Load**   | < 1s     | 🟢 Rápido         |
| **Lighthouse**   | 95+      | 🟢 Alta Qualidade |
| **Mobile Ready** | 100%     | 🟢 Responsivo     |

---
---

## 🎯 Funcionalidades

### **📱 Interface Interativa**
- Timeline horizontal navegável com scroll e arrasto
- Botões de navegação para experiências anteriores/próximas
- Cards interativos com informações resumidas
- Modal expandido com detalhes completos da experiência
- Sistema de filtros por categoria de experiência

### **🎨 Design System**
- Glassmorphism e gradientes modernos
- Paleta de cores consistente da marca
- Tipografia otimizada para legibilidade
- Iconografia personalizada
- Animações e transições suaves

### **📱 Responsividade**
- Layout adaptativo para todas as telas
- Otimização específica para mobile e tablet
- Touch-friendly para dispositivos móveis
- Navegação por gestos (arrasto) em mobile
- Progressive Enhancement

### **⚡ Performance**
- Bundle splitting automático
- Lazy loading de componentes
- Otimização de imagens
- Service Worker para cache
- Scroll suave e otimizado

---

## 💼 Sobre Samuel Estrella

<div align="center">
  <img src="src/assets/SamuelEstrella.jpg" alt="Samuel Estrella" width="200" style="border-radius: 50%" />
</div>

**Produtor Cultural** com vasta experiência no cenário musical brasileiro, especializado em:

### **🎵 Expertise**
- **Eventos Musicais** - Organização e produção de shows e festivais
- **Gestão Artística** - Desenvolvimento de carreiras e projetos artísticos
- **Cultura Urbana** - Promoção da cena cultural independente
- **Calangos Sound System** - Coletivo musical e movimento cultural

### **📈 Resultados**
- **50+** eventos produzidos
- **20+** artistas gerenciados
- **10+** anos de experiência
- **Milhares** de pessoas impactadas

### **🏆 Projetos Destacados**
- **Reggae na Praça** - Criador e organizador do movimento
- **Calangos Sound System** - Fundador do coletivo
- **Eventos Corporativos** - Produção para grandes marcas
- **Festivais Independentes** - Curadoria e organização

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### **Guidelines**
- Siga os padrões de código existentes
- Adicione testes quando necessário
- Atualize a documentação
- Use commits semânticos

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, modificar e distribuir livremente
```

---

## 🤝 Contributing

This project uses **branch protection** to ensure code quality. Direct push to `main` is not allowed.

### 🔒 Branch Protection

All changes must go through Pull Requests. The following protections are active:
- ✅ Pre-push hook blocks direct pushes locally
- ✅ GitHub workflow blocks direct pushes remotely
- ✅ Pull Request template standardizes submissions
- ✅ Code owners review required

### 📋 Workflow

#### 1️⃣ Create a Branch (in English)

```bash
# Update local main
git checkout main
git pull origin main

# Create and switch to new branch
git checkout -b feature/your-feature-name
```

**Branch naming conventions** (always in English):
- `feature/` - New functionality (e.g., `feature/new-modal-component`)
- `fix/` - Bug fix (e.g., `fix/loading-centering-issue`)
- `style/` - UI/CSS adjustments (e.g., `style/adjust-mobile-layout`)
- `refactor/` - Code refactoring (e.g., `refactor/optimize-loading`)
- `docs/` - Documentation (e.g., `docs/update-readme`)

#### 2️⃣ Make Changes and Commit (in English)

```bash
git add .
git commit -m "feat: add new modal component"
```

**Conventional Commits** (always in English):
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - Styling/formatting changes
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `test:` - Add or fix tests
- `chore:` - Maintenance tasks

#### 3️⃣ Push to GitHub

```bash
git push origin feature/your-feature-name
```

#### 4️⃣ Open a Pull Request

1. Go to: https://github.com/samuelmachado1/portfolioCultural/pulls
2. Click "New Pull Request"
3. Fill the PR template **in English**
4. Request review
5. Wait for approval and merge

### ⚠️ What NOT to do

❌ **NEVER push directly to main:**
```bash
# This will be BLOCKED
git checkout main
git push origin main
```

Error message you'll see:
```
❌ ============================================== ❌
   DIRECT PUSH TO MAIN IS NOT ALLOWED!
❌ ============================================== ❌
```

### 🌐 Language Standards

**✅ Use ENGLISH for:**
- Branch names
- Commit messages
- PR titles and descriptions
- Code (variables, functions, classes, comments)

**📝 Portuguese is OK for:**
- Issue discussions
- Code review comments
- Internal team communication

### 🛠️ Helper Script

Use the provided script to create branches easily:

```bash
./scripts/new-branch.sh feature my-new-feature
```

---

## 📞 Contato

<div align="center">

### **Samuel Estrella**
**Produtor Cultural & Gestor Artístico**

[![Email](https://img.shields.io/badge/📧_Email-samuel@estrella.com.br-red?style=for-the-badge)](mailto:samuel@estrella.com.br)
[![LinkedIn](https://img.shields.io/badge/🔗_LinkedIn-Samuel_Estrella-blue?style=for-the-badge)](https://linkedin.com/in/samuelestrella)
[![Portfolio](https://img.shields.io/badge/🌟_Portfólio-Ver_Online-purple?style=for-the-badge)](https://samuelmachado1.github.io/portifolioCultural/)

**🎵 Calangos Sound System** | **📍 Brasil** | **🎭 Cultura & Arte**

</div>

---

<div align="center">

**⭐ Se este projeto te inspirou, deixe uma star!**

*Feito com ❤️ por Samuel Estrella | © 2026*

</div>
