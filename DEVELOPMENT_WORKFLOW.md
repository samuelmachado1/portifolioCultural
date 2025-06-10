# 🔄 Fluxo de Desenvolvimento - Portfolio Samuel Estrella

## ⚠️ CONFIGURAÇÃO OBRIGATÓRIA ANTES DE USAR

### 🔒 1. Configurar Proteções da Branch Main

**CRITICAL**: Execute PRIMEIRO para proteger a branch main:

```bash
# Abrir configurações no navegador
./open-branch-settings.sh

# OU acesse manualmente
open https://github.com/samuelmachado1/portifolioCultural/settings/branches
```

**Configurações obrigatórias**:
- ✅ Require a pull request before merging (1 aprovador)
- ✅ Dismiss stale reviews when new commits are pushed
- ✅ Require conversation resolution before merging  
- ✅ Include administrators
- ✅ Restrict pushes

## 📋 Resumo do Fluxo

A partir de agora, **TODA** alteração segue: **develop → staging → PR → main → produção**

## 🌿 Estrutura de Branches

```
main (produção) 🌟 [PROTEGIDA - Apenas via PR]
 ↑
 │ (PR com aprovação obrigatória)
 │
develop (desenvolvimento) 🚧 [Trabalho ativo]
```

## 🚀 Como Usar o Fluxo

### 🛠️ Setup Inicial (apenas uma vez)

1. **Configure proteções da branch main** (OBRIGATÓRIO):
   ```bash
   ./open-branch-settings.sh
   ```

2. **Instale dependências**:
   ```bash
   ./dev.sh setup
   ```

### 💻 Desenvolvimento Diário

```bash
# Usar script interativo
./dev.sh

# Menu de opções:
# 1) Setup inicial
# 2) Iniciar desenvolvimento  
# 3) Build e teste
# 4) Commit inteligente
# 5) Ver status
# 6) Processo de release
```

### 📝 Fazer Alterações (Passo a Passo)

1. **Sempre trabalhe na develop**:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Desenvolva e teste localmente**:
   ```bash
   npm run dev  # servidor local
   # faça suas alterações
   npm run build  # teste build
   npm run lint   # verifique código
   ```

3. **Commit inteligente**:
   ```bash
   ./dev.sh commit
   # O script irá:
   # - Executar lint automaticamente
   # - Fazer build de verificação
   # - Solicitar mensagem do commit
   # - Fazer push para develop
   ```

4. **Deploy staging automático**:
   - Push para develop → Deploy automático para staging
   - URL: https://samuelmachado1.github.io/portifolioCultural/staging/

5. **PR automático criado**:
   - Workflow cria PR develop → main automaticamente
   - Aguarda aprovação manual

### 🚀 Deploy para Produção

1. **Teste no staging**: 
   ```
   https://samuelmachado1.github.io/portifolioCultural/staging/
   ```

2. **Aprove o PR**:
   ```
   https://github.com/samuelmachado1/portifolioCultural/pulls
   ```

3. **Deploy automático**:
   - Merge PR → Deploy produção automático
   - URL: https://samuelmachado1.github.io/portifolioCultural/

## 🛡️ Proteções Implementadas

### 🚫 O que NÃO é mais possível:
- ❌ Push direto para main
- ❌ Merge sem Pull Request  
- ❌ Merge sem aprovação
- ❌ Force push para main
- ❌ Deletar branch main

### ✅ Fluxo obrigatório:
1. Develop → Push
2. CI/CD automático
3. Deploy staging
4. Criar PR automático
5. **Aprovação manual obrigatória**
6. Merge → Deploy produção

## 🔄 Workflows Automáticos

### 📊 `develop.yml` - Desenvolvimento
**Triggers**: Push para develop
- ✅ Lint + Build + Testes
- 🚀 Deploy staging automático  
- 📋 Criar PR para main
- ⏳ Aguardar aprovação

### 🛡️ `protect-main.yml` - Proteção
**Triggers**: Tentativa de push para main
- 🚫 Bloquear push direto
- 🌟 Deploy produção (apenas após merge PR)

### 🌟 `deploy.yml` - Produção  
**Triggers**: Merge na main
- 🏗️ Build final
- 🌟 Deploy produção

## 📋 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `./dev.sh` | Menu interativo completo |
| `./dev.sh setup` | Configuração inicial |
| `./dev.sh dev` | Servidor desenvolvimento |
| `./dev.sh commit` | Commit inteligente |
| `./dev.sh status` | Status do projeto |
| `./dev.sh release` | Processo de release |
| `./open-branch-settings.sh` | Abrir config proteções |

## 🔗 Links Importantes

- 🧪 **Staging**: https://samuelmachado1.github.io/portifolioCultural/staging/
- 🌟 **Produção**: https://samuelmachado1.github.io/portifolioCultural/
- 📊 **Actions**: https://github.com/samuelmachado1/portifolioCultural/actions
- 📋 **Pull Requests**: https://github.com/samuelmachado1/portifolioCultural/pulls
- 🛡️ **Branch Settings**: https://github.com/samuelmachado1/portifolioCultural/settings/branches

## 🧪 Teste das Proteções

Para verificar se as proteções estão funcionando:

```bash
# Deve FALHAR após configuração
git checkout main
echo "test" > test.txt
git add test.txt  
git commit -m "test push direto"
git push origin main  # ❌ Deve ser rejeitado
```

Se o push for **rejeitado**, as proteções estão funcionando! ✅

## 🆘 Comandos de Emergência

```bash
# Ver status geral
git status && git branch -a

# Voltar para develop
git checkout develop && git pull origin develop

# Ver PRs pendentes  
gh pr list

# Verificar workflows
gh run list

# Recriar develop se necessário
git checkout -b develop
git push -u origin develop
```

## 🎯 Benefícios do Novo Fluxo

1. **🛡️ Segurança**: Main sempre estável e protegida
2. **🧪 Qualidade**: Staging obrigatório + testes automáticos
3. **👀 Revisão**: Aprovação humana obrigatória
4. **🚀 Agilidade**: Deploy automático após aprovação
5. **📊 Rastreabilidade**: Histórico completo no GitHub
6. **🔧 Automação**: Ferramentas que facilitam desenvolvimento

---

## ⚡ Quick Start

```bash
# 1. Configure proteções (PRIMEIRO)
./open-branch-settings.sh

# 2. Setup inicial
./dev.sh setup

# 3. Desenvolvimento
./dev.sh

# 4. Sempre trabalhe na develop!
git checkout develop
```

---

*Este fluxo garante qualidade e estabilidade do código em produção* 🎯