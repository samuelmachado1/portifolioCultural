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

Use prefixos descritivos **EM INGLÊS** para suas branches:

- `feature/` - Nova funcionalidade
  - ✅ Correto: `feature/new-modal-component`
  - ❌ Incorreto: `feature/novo-componente-modal`
- `fix/` - Correção de bug
  - ✅ Correto: `fix/loading-centering-issue`
  - ❌ Incorreto: `fix/corrigir-loading-centralizado`
- `style/` - Ajustes de UI/CSS
  - ✅ Correto: `style/adjust-mobile-layout`
  - ❌ Incorreto: `style/ajustar-layout-mobile`
- `refactor/` - Refatoração de código
  - ✅ Correto: `refactor/optimize-loading`
  - ❌ Incorreto: `refactor/otimizar-loading`
- `docs/` - Documentação
  - ✅ Correto: `docs/update-readme`
  - ❌ Incorreto: `docs/atualizar-readme`

**⚠️ IMPORTANTE**: Use sempre **inglês** para nomear branches.

### 2️⃣ Fazer Alterações e Commit

```bash
# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem descritiva EM INGLÊS
git commit -m "feat: add new modal component"
```

### 📋 Convenção de Mensagens de Commit

Use o padrão Conventional Commits **EM INGLÊS**:

- `feat:` - Nova funcionalidade (Ex: `feat: add user authentication`)
- `fix:` - Correção de bug (Ex: `fix: resolve loading centering issue`)
- `style:` - Mudanças de estilo/formatação (Ex: `style: adjust mobile layout`)
- `refactor:` - Refatoração de código (Ex: `refactor: optimize loading component`)
- `docs:` - Mudanças na documentação (Ex: `docs: update README`)
- `test:` - Adicionar ou corrigir testes (Ex: `test: add unit tests for auth`)
- `chore:` - Tarefas de manutenção (Ex: `chore: update dependencies`)

**⚠️ IMPORTANTE**: Todas as mensagens de commit devem ser escritas em **inglês** para manter consistência com as convenções da comunidade de código aberto.
### 4️⃣ Abrir um Pull Request

1. Vá para o GitHub: https://github.com/samuelmachado1/portfolioCultural/pulls
2. Clique em "New Pull Request"
3. Selecione sua branch
4. Preencha o template do PR **EM INGLÊS** com:
   - Descrição das mudanças (description)
   - Tipo de mudança (type of change)
   - Como testar (how to test)
   - Screenshots (se aplicável)
5. Solicite revisão
6. Aguarde aprovação e merge

**⚠️ IMPORTANTE**: O título e descrição do Pull Request devem ser escritos em **inglês**.

**Exemplos de títulos de PR:**
- ✅ `feat: add authentication system`
- ✅ `fix: resolve mobile layout issues`
- ✅ `style: improve loading animation`
- ❌ `feat: adicionar sistema de autenticação`
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
   DIRECT PUSH TO MAIN IS NOT ALLOWED!
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

## 💡 Dicas

- Mantenha suas branches atualizadas com a main:
  ```bash
  git checkout main
  git pull origin main
  git checkout your-branch
  git merge main
  ```

- Delete branches locais após merge:
  ```bash
  git branch -d feature/branch-name
  ```

- Delete branches remotas após merge:
  ```bash
  git push origin --delete feature/branch-name
  ```

## 🌐 Padrões de Idioma

### ✅ Use INGLÊS para:
- **Nomes de branches**: `feature/add-modal`, `fix/button-style`
- **Mensagens de commit**: `feat: add user profile`, `fix: resolve loading issue`
- **Títulos de PR**: `feat: implement authentication`
- **Descrições de PR**: Todo o conteúdo do Pull Request
- **Código**: Nomes de variáveis, funções, classes, comentários no código

### 📝 Pode usar PORTUGUÊS para:
- **Comentários em issues**: Discussões podem ser em português
- **Code reviews**: Comentários de revisão podem ser em português
- **Documentação interna**: READMEs e guias podem ter versão em português
- **Comunicação entre equipe**: Mensagens diretas e discussões informaisete branches locais após merge:
  ```bash
  git branch -d feature/nome-da-feature
  ```

- Delete branches remotas após merge:
  ```bash
  git push origin --delete feature/nome-da-feature
  ```

## 📞 Dúvidas?

Se tiver dúvidas sobre o fluxo de trabalho, entre em contato com @samuelmachado1
