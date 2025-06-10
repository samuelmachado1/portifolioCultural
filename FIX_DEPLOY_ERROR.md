# 🔧 Guia de Correção - Erro de Permissão GitHub Actions

## ❌ **Erro Encontrado:**
```
remote: Permission to samuelmachado1/portifolioCultural.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/samuelmachado1/portifolioCultural.git/': The requested URL returned error: 403
```

## 🛠️ **Soluções (Execute em Ordem)**

### **Solução 1: Configurar Permissões do GitHub Actions**

#### **Passo 1: Configurar Permissões no Repositório**
1. **Acesse seu repositório:** https://github.com/samuelmachado1/portifolioCultural
2. **Vá em:** `Settings` → `Actions` → `General`
3. **Em "Workflow permissions":**
   - ✅ Selecione: `Read and write permissions`
   - ✅ Marque: `Allow GitHub Actions to create and approve pull requests`
4. **Clique em:** `Save`

#### **Passo 2: Habilitar GitHub Pages**
1. **Vá em:** `Settings` → `Pages`
2. **Source:** `Deploy from a branch`
3. **Branch:** `gh-pages` / `root`
4. **Clique em:** `Save`

### **Solução 2: Usar Deploy via Pages Action (Mais Moderno)**

Se a Solução 1 não funcionar, substitua o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

# Permissões necessárias para GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Permitir apenas um deploy por vez
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v4

      - name: Setup Node.js ⚙️
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies 📦
        run: npm ci

      - name: Build 🔧
        run: npm run build

      - name: Setup Pages 📄
        uses: actions/configure-pages@v4

      - name: Upload artifact 📤
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages 🚀
        id: deployment
        uses: actions/deploy-pages@v4
```

### **Solução 3: Deploy Manual (Rápido para Testar)**

Se precisar fazer deploy imediatamente:

```bash
# No seu terminal local
cd /Users/samuel.machado/Documents/lpRelease/portfolio-samuel

# Build do projeto
npm run build

# Deploy manual via gh-pages
npm install -g gh-pages
npx gh-pages -d dist
```

### **Solução 4: Usar Personal Access Token (Se Necessário)**

1. **Crie um Personal Access Token:**
   - GitHub → Settings → Developer settings → Personal access tokens
   - Permissions: `repo`, `workflow`

2. **Adicione como Secret:**
   - Repositório → Settings → Secrets and variables → Actions
   - Nome: `PERSONAL_ACCESS_TOKEN`
   - Valor: Seu token

3. **Atualize o workflow:**
```yaml
- name: Deploy 🚀
  uses: peaceiris/actions-gh-pages@v3
  with:
    personal_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    publish_dir: ./dist
```

## 🔍 **Verificação das Soluções**

### **Checklist:**
- [ ] Permissões do Actions configuradas (Read and write)
- [ ] GitHub Pages habilitado
- [ ] Workflow atualizado com permissões
- [ ] Branch `main` existe e tem commits
- [ ] Arquivo `package.json` tem script `build`

### **URLs Finais Esperadas:**
- **GitHub Pages:** https://samuelmachado1.github.io/portifolioCultural
- **Verificar Actions:** https://github.com/samuelmachado1/portifolioCultural/actions

## 🚀 **Alternativa Recomendada: Vercel**

Se continuar com problemas no GitHub Pages, use **Vercel** (mais simples):

1. **Acesse:** https://vercel.com
2. **Login** com GitHub
3. **Import Project** → Selecione o repositório
4. **Deploy automático!** ✨

**Vantagens do Vercel:**
- ✅ Zero configuração
- ✅ Deploy automático em segundos
- ✅ Preview de Pull Requests
- ✅ Domínio customizável
- ✅ Melhor performance

## 📞 **Se Nada Funcionar:**

1. **Verifique os logs do Actions:** `.../actions`
2. **Execute deploy manual:** `npx gh-pages -d dist`
3. **Use Vercel como alternativa**
