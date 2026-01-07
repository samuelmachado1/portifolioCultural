# 🔒 Fluxo de Trabalho com Git - Branch Protection

Este repositório está configurado para **prevenir commits diretos na branch `main`**. Todas as alterações devem passar por Pull Requests.

## 🚀 Como Contribuir

### 1️⃣ Criar uma Nova Branch

Sempre crie uma branch a partir da `main` atualizada:

```bash
# Atualizar a main local
git checkout main
git pull origin main

# Criar e mudar para a nova branch
git checkout -b feature/nome-da-sua-feature
```

### 📝 Convenções de Nomenclatura de Branches

Use prefixos descritivos para suas branches:

- `feature/` - Nova funcionalidade
  - Exemplo: `feature/novo-componente-modal`
- `fix/` - Correção de bug
  - Exemplo: `fix/corrigir-loading-centralizado`
- `style/` - Ajustes de UI/CSS
  - Exemplo: `style/ajustar-layout-mobile`
- `refactor/` - Refatoração de código
  - Exemplo: `refactor/otimizar-loading`
- `docs/` - Documentação
  - Exemplo: `docs/atualizar-readme`

### 2️⃣ Fazer Alterações e Commit

```bash
# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem descritiva
git commit -m "feat: adicionar novo componente de modal"
```

### 📋 Convenção de Mensagens de Commit

Use o padrão Conventional Commits:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `style:` - Mudanças de estilo/formatação
- `refactor:` - Refatoração de código
- `docs:` - Mudanças na documentação
- `test:` - Adicionar ou corrigir testes
- `chore:` - Tarefas de manutenção

### 3️⃣ Enviar para o Repositório Remoto

```bash
git push origin feature/nome-da-sua-feature
```

### 4️⃣ Abrir um Pull Request

1. Vá para o GitHub: https://github.com/samuelmachado1/portfolioCultural/pulls
2. Clique em "New Pull Request"
3. Selecione sua branch
4. Preencha o template do PR com:
   - Descrição das mudanças
   - Tipo de mudança
   - Como testar
   - Screenshots (se aplicável)
5. Solicite revisão
6. Aguarde aprovação e merge

## ⚠️ O que NÃO fazer

❌ **NUNCA faça push direto para a main:**
```bash
# Isto será BLOQUEADO
git checkout main
git push origin main
```

Se você tentar, receberá esta mensagem de erro:

```
❌ ============================================== ❌
   PUSH DIRETO PARA A MAIN NÃO É PERMITIDO!
❌ ============================================== ❌
```

## 🛡️ Proteções Implementadas

### Local (Git Hooks)
- **Pre-push hook**: Bloqueia pushes diretos para main localmente

### GitHub
- **Branch protection workflow**: Bloqueia pushes diretos no remoto
- **Pull Request template**: Padroniza informações nos PRs
- **CODEOWNERS**: Define revisores obrigatórios

## 🔧 Configuração no GitHub (Administrador)

Para ativar as proteções no GitHub, o administrador deve:

1. Ir em **Settings** > **Branches**
2. Adicionar regra de proteção para `main`:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators (opcional)
   - ✅ Require review from Code Owners

## 💡 Dicas

- Mantenha suas branches atualizadas com a main:
  ```bash
  git checkout main
  git pull origin main
  git checkout sua-branch
  git merge main
  ```

- Delete branches locais após merge:
  ```bash
  git branch -d feature/nome-da-feature
  ```

- Delete branches remotas após merge:
  ```bash
  git push origin --delete feature/nome-da-feature
  ```

## 📞 Dúvidas?

Se tiver dúvidas sobre o fluxo de trabalho, entre em contato com @samuelmachado1
