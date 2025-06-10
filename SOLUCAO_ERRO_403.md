# 🚨 SOLUÇÃO DEFINITIVA - Erro 403 GitHub Actions

## ❌ **Erro Atual:**
```
remote: Permission to samuelmachado1/portifolioCultural.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/samuelmachado1/portifolioCultural.git/': The requested URL returned error: 403
```

## 🔧 **SOLUÇÃO OBRIGATÓRIA - Configure no GitHub Web**

### **PASSO 1: Configurar Permissões do Actions**
1. **ACESSE:** https://github.com/samuelmachado1/portifolioCultural/settings/actions
2. **Na seção "Workflow permissions":**
   - 🔴 **DESMARQUE:** "Restrict permissions to the contents of the repository"
   - ✅ **SELECIONE:** "Read and write permissions"
   - ✅ **MARQUE:** "Allow GitHub Actions to create and approve pull requests"
3. **CLIQUE:** "Save"

### **PASSO 2: Habilitar GitHub Pages**
1. **ACESSE:** https://github.com/samuelmachado1/portifolioCultural/settings/pages
2. **Source:** "Deploy from a branch"
3. **Branch:** "gh-pages" / "/ (root)"
4. **CLIQUE:** "Save"

### **PASSO 3: Verificar se funciona**
```bash
# Faça qualquer alteração pequena
echo "# Test" >> README.md
git add README.md
git commit -m "test: verifica deploy automático"
git push origin main
```

## 🛠️ **SOLUÇÃO ALTERNATIVA - Token Personalizado**

Se a Solução 1 não funcionar, use um Personal Access Token:

### **Criar Token:**
1. **ACESSE:** https://github.com/settings/tokens/new
2. **Scopes necessários:**
   - ✅ `repo` (acesso total ao repositório)
   - ✅ `workflow` (permissão para workflows)
3. **COPIE o token gerado**

### **Adicionar como Secret:**
1. **ACESSE:** https://github.com/samuelmachado1/portifolioCultural/settings/secrets/actions
2. **"New repository secret"**
3. **Nome:** `PERSONAL_ACCESS_TOKEN`
4. **Value:** Cole o token gerado
5. **"Add secret"**

### **Atualizar Workflow:**
```yaml
- name: Deploy 🚀
  uses: peaceiris/actions-gh-pages@v3
  if: github.ref == 'refs/heads/main'
  with:
    personal_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    publish_dir: ./dist
    force_orphan: true
```

## 🚀 **SOLUÇÃO IMEDIATA - Deploy Manual**

Enquanto configura as permissões, use deploy manual:

```bash
cd /Users/samuel.machado/Documents/lpRelease/portfolio-samuel
npm run build
npx gh-pages -d dist
```

**✅ Isso sempre funciona e o site fica online imediatamente!**

## 🎯 **SOLUÇÃO MODERNA - GitHub Pages com Actions**

Substitua todo o conteúdo de `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
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
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Para usar esta versão:**
1. Configure Pages para "GitHub Actions" em vez de "Deploy from a branch"
2. **ACESSE:** https://github.com/samuelmachado1/portifolioCultural/settings/pages
3. **Source:** "GitHub Actions"

## 🌟 **RECOMENDAÇÃO FINAL - Use Vercel**

Para evitar todos esses problemas de permissão:

1. **ACESSE:** https://vercel.com
2. **Login** com GitHub
3. **Import Project** → `samuelmachado1/portifolioCultural`
4. **Deploy automático!** ✨

**Vantagens do Vercel:**
- ✅ Zero configuração de permissões
- ✅ Deploy em ~30 segundos
- ✅ Preview automático de PRs
- ✅ Melhor performance
- ✅ Analytics gratuitos
- ✅ Domínio customizável

## 📊 **Status Atual:**

- ✅ **Site funcionando:** https://samuelmachado1.github.io/portifolioCultural (via deploy manual)
- ❌ **GitHub Actions:** Problema de permissão
- ✅ **Build local:** Funcionando perfeitamente
- ✅ **Deploy manual:** Sempre funciona

## 🎯 **AÇÃO RECOMENDADA:**

1. **AGORA:** Configure as permissões no GitHub (Solução 1)
2. **EM PARALELO:** Teste o Vercel para comparar
3. **BACKUP:** Use deploy manual quando necessário

**O importante é que SEU SITE JÁ ESTÁ ONLINE! 🎉**
