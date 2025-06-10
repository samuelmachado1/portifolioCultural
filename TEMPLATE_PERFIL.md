# 👤 Template para Dados do Perfil

Este template serve para atualizar informações do perfil pessoal no portfólio.

## 📋 Estrutura Completa do Perfil

```typescript
profile: {
  name: "Nome Completo",
  title: "Título Profissional Principal",
  bio: "Biografia profissional concisa que descreve especialidades, experiência e foco de atuação. Máximo 2-3 frases.",
  contact: {
    email: "email@exemplo.com",
    phone: "+55 (11) 99999-9999", // Formato brasileiro padrão
    whatsapp: "+55 (11) 99999-9999", // Mesmo número ou diferente
    social: {
      linkedin: "https://linkedin.com/in/seu-perfil",
      instagram: "https://instagram.com/seu-usuario",
      youtube: "https://youtube.com/@seu-canal",
      spotify: "https://open.spotify.com/artist/seu-id",
      facebook: "https://facebook.com/seu-perfil", // OPCIONAL
    },
  },
  avatar: "/src/assets/SuaFoto.jpg", // Caminho para sua foto
}
```

## ✅ Checklist de Informações do Perfil

### Informações Básicas
- [ ] **Nome**: Nome completo correto
- [ ] **Título**: Título profissional que resume sua área
- [ ] **Bio**: Biografia concisa e profissional
- [ ] **Foto**: Imagem profissional em boa qualidade

### Contato
- [ ] **Email**: Email profissional ativo
- [ ] **Telefone**: Número atualizado com DDD
- [ ] **WhatsApp**: Número para contato direto

### Redes Sociais (Incluir apenas as que você usa profissionalmente)
- [ ] **LinkedIn**: Perfil profissional atualizado
- [ ] **Instagram**: Conta relacionada ao trabalho
- [ ] **YouTube**: Canal com conteúdo profissional
- [ ] **Spotify**: Perfil de artista se aplicável
- [ ] **Facebook**: Página profissional (opcional)

## 🎯 Exemplo Preenchido

```typescript
profile: {
  name: "Samuel Estrella",
  title: "Produtor Cultural & Gestor de Projetos Artísticos",
  bio: "Especialista em gestão de projetos artísticos, eventos musicais e desenvolvimento de talentos emergentes. Experiência consolidada em produção executiva e curadoria cultural.",
  contact: {
    email: "samuel.estrella@outlook.com",
    phone: "+55 (61) 99847-3621",
    whatsapp: "+55 (61) 99847-3621",
    social: {
      linkedin: "https://linkedin.com/in/samuel-estrella",
      instagram: "https://instagram.com/samuelestrellasp",
      youtube: "https://youtube.com/@samuelestrellamusic",
      spotify: "https://open.spotify.com/artist/samuelestrellaofficial",
    },
  },
  avatar: "/src/assets/SamuelEstrella.jpg",
}
```

## 📐 Configurações do Board (Raramente alteradas)

```typescript
boardConfig: {
  width: 1000,    // Largura do board em pixels
  height: 400,    // Altura do board em pixels  
  backgroundColor: "#1a1a2e", // Cor de fundo (azul escuro)
  pathColor: "#ffffff",       // Cor das linhas de conexão (branco)
}
```

## 🔧 Como Atualizar

1. Abrir o arquivo `/src/data/portfolio.ts`
2. Localizar a seção `profile: {`
3. Atualizar as informações necessárias
4. Salvar o arquivo
5. Verificar no navegador se as alterações apareceram
6. Fazer commit das alterações

## 💡 Dicas Importantes

- **Bio profissional**: Mantenha foco nas competências e experiências
- **Links atualizados**: Verifique se todos os links estão funcionando
- **Foto profissional**: Use imagem de boa qualidade e profissional
- **Contatos ativos**: Certifique-se que email e telefone estão corretos
- **Redes relevantes**: Inclua apenas redes sociais relacionadas ao trabalho

---

💼 **Use este template para manter o perfil sempre atualizado e profissional!**
