# 🚀 Deploy Guide - Portfolio Samuel Estrella

## 📋 **Opções de Deploy Gratuito**

### 🥇 **1. Vercel (Recomendado)**

**Vantagens:**
- ✅ Deploy automático mais rápido (~1-2min)
- ✅ Domínio personalizado gratuito
- ✅ Preview deploys para Pull Requests
- ✅ Analytics integrados
- ✅ Zero configuração necessária

**Como configurar:**

1. **Acesse:** https://vercel.com
2. **Login** com GitHub
3. **Import Project** → Conecte seu repositório
4. **Configure:**
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy!** 🎉

**URL final:** `https://portfolio-samuel-estrella.vercel.app`

---

### 🥈 **2. Netlify**

**Vantagens:**
- ✅ Deploy automático
- ✅ Domínio personalizado
- ✅ Formulários gratuitos
- ✅ Functions serverless

**Como configurar:**

1. **Acesse:** https://netlify.com
2. **Login** com GitHub
3. **New site from Git** → Conecte seu repositório
4. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy!** 🎉

**URL final:** `https://portfolio-samuel-estrella.netlify.app`

---

### 🥉 **3. GitHub Pages**

**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Integração nativa com GitHub
- ✅ HTTPS automático

**Como configurar:**

1. **Vá em:** Settings → Pages do seu repositório
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages`
4. **Execute:** `npm run deploy`

**URL final:** `https://[username].github.io/portfolio`

---

## 🔧 **Configurações de Deploy**

### **Variáveis de Ambiente**
```bash
# Para desenvolvimento
NODE_ENV=development

# Para produção
NODE_ENV=production
```

### **Build Commands**
```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Deploy específico
npm run deploy:vercel   # Para Vercel
npm run deploy:netlify  # Para Netlify
npm run deploy          # Para GitHub Pages
```

## 🌍 **Domínio Personalizado**

### **Vercel/Netlify:**
1. Compre um domínio (ex: `samuelestrellaportfolio.com`)
2. Configure DNS apontando para a plataforma
3. Adicione domínio nas configurações

### **GitHub Pages:**
1. Adicione arquivo `CNAME` na raiz com seu domínio
2. Configure DNS do domínio

## 📊 **Monitoramento**

### **Analytics Gratuitos:**
- **Vercel Analytics** (built-in)
- **Google Analytics 4**
- **Plausible** (privacy-first)

### **Performance:**
- **Lighthouse CI** (automático no Vercel)
- **Web Vitals** monitoring

## 🔐 **Segurança**

### **Headers de Segurança** (já configurados):
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### **HTTPS:**
- ✅ Automático em todas as plataformas
- ✅ Certificados SSL gratuitos

## 🚨 **Troubleshooting**

### **Build Errors:**
```bash
# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

### **Path Issues:**
- Vercel/Netlify: Use base `/`
- GitHub Pages: Use base `/portfolio/`

### **Assets não carregam:**
- Verificar `vite.config.ts` → `base` path
- Verificar paths relativos nos componentes

## 📈 **Próximos Passos**

1. **SEO:** Adicionar meta tags, sitemap.xml
2. **PWA:** Service worker para cache offline  
3. **CDN:** Otimização de imagens
4. **Monitoring:** Error tracking (Sentry)

---

## 💡 **Recomendação Final**

Para **MVP rápido**: Use **Vercel** 
- Setup em 5 minutos
- Deploy automático  
- Performance excelente
- Domínio gratuito

Para **longo prazo**: Configure **domínio próprio** + **analytics**
