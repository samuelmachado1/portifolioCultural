# 📚 Documentação de Templates do Portfólio

Esta pasta contém todos os templates e guias necessários para adicionar e atualizar dados no portfólio de Samuel Estrella.

## 📋 Arquivos de Template

| Arquivo | Propósito | Quando Usar |
|---------|-----------|-------------|
| `TEMPLATE_PORTFOLIO.md` | Template principal para novos projetos/conquistas | Sempre que adicionar nova experiência ou milestone |
| `TEMPLATE_PERFIL.md` | Template para dados pessoais e contato | Para atualizar informações do perfil |
| `GUIA_CRONOLOGIA.md` | Organização temporal e posicionamento | Para entender como organizar itens no timeline |
| `EXEMPLO_PRATICO.md` | Exemplo completo passo a passo | Para ver na prática como adicionar um item |

## 🚀 Início Rápido

### Para adicionar um novo projeto/conquista:

1. **Consulte**: `TEMPLATE_PORTFOLIO.md` para estrutura
2. **Posicione**: Use `GUIA_CRONOLOGIA.md` para localização cronológica
3. **Pratique**: Siga `EXEMPLO_PRATICO.md` para implementação
4. **Teste**: Verifique no navegador antes do commit

### Para atualizar perfil:

1. **Consulte**: `TEMPLATE_PERFIL.md`
2. **Edite**: `/src/data/portfolio.ts` seção `profile`
3. **Teste**: Verifique no navegador
4. **Commit**: Salve as alterações

## 🎯 Tipos de Conteúdo

### 🏆 Milestones (Conquistas)
- Prêmios e reconhecimentos
- Homenagens oficiais
- Marcos importantes da carreira
- Certificações relevantes

### 💼 Experiences (Experiências)
- Projetos realizados
- Cargos ocupados
- Consultorias prestadas
- Eventos produzidos
- Cursos ministrados

## 🎨 Sistema de Temas

| Tema | Cor | Uso |
|------|-----|-----|
| 🔴 `cultural` | Vermelho | Eventos, festivais, projetos culturais |
| 🔵 `artistic` | Azul | Criação artística, tecnologia, inovação |
| 🟢 `production` | Verde | Produção, gestão, consultoria, negócios |
| 🟣 `education` | Roxo | Educação, capacitação, ensino |
| 🟡 `milestone` | Rosa | Conquistas, prêmios, reconhecimentos |

## 📏 Sistema de Posicionamento

### Eixo X (Cronológico)
```
0────25────50────75────100────125
2009   2013   2017   2021    2025
```

### Eixo Y (Importância)
```
20 ← Marcos principais
35 ← Projetos importantes  
50 ← Experiências regulares
65 ← Itens complementares
```

## ✅ Checklist Geral

Antes de adicionar qualquer item:

- [ ] **ID único** e descritivo
- [ ] **Data correta** (mês e ano)
- [ ] **Posição adequada** (X cronológico, Y importância)
- [ ] **Tema apropriado** para o tipo de conteúdo
- [ ] **Ícone representativo** e relacionado
- [ ] **Tags relevantes** (máximo 4)
- [ ] **Descrição concisa** e clara
- [ ] **Links funcionais** (se incluídos)
- [ ] **Teste no navegador** antes do commit

## 🔧 Fluxo de Trabalho

1. **Planejamento**
   - Identifique tipo de conteúdo (milestone/experience)
   - Determine cronologia e importância
   - Escolha tema e ícone apropriados

2. **Desenvolvimento**
   - Use template correspondente
   - Preencha todas as informações
   - Revise qualidade do conteúdo

3. **Implementação**
   - Adicione ao arquivo `/src/data/portfolio.ts`
   - Verifique sintaxe e formatação
   - Teste no navegador local

4. **Finalização**
   - Commit com mensagem descritiva
   - Push para repositório
   - Verificar em produção

## 📁 Estrutura de Arquivos

```
portfolio-samuel/
├── src/
│   ├── data/
│   │   └── portfolio.ts          ← Arquivo principal de dados
│   ├── types/
│   │   └── portfolio.ts          ← Definições de tipos
│   └── components/
│       └── TimelineCard/         ← Componente dos cards
├── TEMPLATE_PORTFOLIO.md         ← Template principal
├── TEMPLATE_PERFIL.md            ← Template de perfil
├── GUIA_CRONOLOGIA.md            ← Guia de organização
├── EXEMPLO_PRATICO.md            ← Exemplo passo a passo
└── README_TEMPLATES.md           ← Este arquivo
```

## 🆘 Solução de Problemas

### Card não aparece:
- Verifique sintaxe JSON
- Confirme vírgula após item anterior
- Verifique console do navegador

### Posição incorreta:
- Consulte `GUIA_CRONOLOGIA.md`
- Ajuste valores X e Y
- Teste diferentes posições

### Tema/cor errada:
- Verifique seção de temas
- Confirme spelling do tema
- Teste no navegador

### Links não funcionam:
- Teste URLs individualmente
- Verifique formato correto
- Certifique-se que são públicos

## 📞 Suporte

Para dúvidas ou problemas:

1. **Consulte os templates** primeiro
2. **Verifique exemplos** nos arquivos
3. **Teste localmente** antes de commitir
4. **Use o console** do navegador para debug

---

💡 **Estes templates garantem consistência e qualidade na manutenção do portfólio!**

🎯 **Sempre teste suas alterações localmente antes de fazer commit!**
