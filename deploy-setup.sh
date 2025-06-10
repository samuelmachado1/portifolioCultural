#!/bin/bash

# 🚀 Setup Automático para Deploy no Vercel
# Executa: chmod +x deploy-setup.sh && ./deploy-setup.sh

echo "🚀 INICIANDO SETUP DE DEPLOY - PORTFOLIO SAMUEL ESTRELLA"
echo "========================================================="

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Função para print colorido
print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 1. Verificar se estamos no diretório correto
print_step "Verificando estrutura do projeto..."
if [ ! -f "package.json" ]; then
    print_error "package.json não encontrado. Execute este script na raiz do projeto."
    exit 1
fi

if [ ! -f "vite.config.ts" ]; then
    print_error "vite.config.ts não encontrado. Não é um projeto Vite válido."
    exit 1
fi

print_success "Estrutura do projeto validada!"

# 2. Verificar dependências
print_step "Verificando dependências..."
if ! command -v npm &> /dev/null; then
    print_error "NPM não está instalado. Instale Node.js primeiro."
    exit 1
fi

if ! command -v git &> /dev/null; then
    print_error "Git não está instalado."
    exit 1
fi

print_success "Dependências validadas!"

# 3. Testar build local
print_step "Testando build de produção..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build de produção funcionando!"
else
    print_error "Erro no build. Corrija os erros antes de continuar."
    exit 1
fi

# 4. Verificar se está em um repositório Git
print_step "Verificando repositório Git..."
if [ ! -d ".git" ]; then
    print_warning "Não é um repositório Git. Inicializando..."
    git init
    git add .
    git commit -m "Initial commit - Portfolio Samuel Estrella"
fi

# Verificar se tem origin configurado
if ! git remote get-url origin &> /dev/null; then
    print_warning "Remote origin não configurado."
    echo -e "${YELLOW}Configure manualmente:${NC}"
    echo "git remote add origin https://github.com/SEU_USUARIO/portfolio-samuel.git"
    echo "git push -u origin main"
fi

print_success "Repositório Git verificado!"

# 5. Instalar Vercel CLI (opcional)
print_step "Verificando Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI não instalado."
    echo -e "${YELLOW}Para instalar globalmente:${NC}"
    echo "npm install -g vercel"
    echo ""
    echo -e "${YELLOW}Ou você pode usar o método web (recomendado para iniciantes)${NC}"
else
    print_success "Vercel CLI instalado!"
fi

# 6. Mostrar próximos passos
echo ""
echo "🎉 SETUP CONCLUÍDO COM SUCESSO!"
echo "==============================="
echo ""
echo -e "${GREEN}📋 PRÓXIMOS PASSOS PARA DEPLOY:${NC}"
echo ""
echo -e "${BLUE}OPÇÃO 1 - Deploy via Web (Recomendado):${NC}"
echo "1. Acesse: https://vercel.com"
echo "2. Faça login com GitHub"
echo "3. Clique em 'Add New Project'"
echo "4. Selecione este repositório"
echo "5. Configure:"
echo "   • Framework Preset: Vite"
echo "   • Build Command: npm run build"
echo "   • Output Directory: dist"
echo "6. Clique em 'Deploy' 🚀"
echo ""
echo -e "${BLUE}OPÇÃO 2 - Deploy via CLI:${NC}"
echo "1. vercel login"
echo "2. vercel"
echo "3. vercel --prod"
echo ""
echo -e "${GREEN}🌐 URLs ESPERADAS APÓS DEPLOY:${NC}"
echo "• Vercel: https://portfolio-samuel-estrella.vercel.app"
echo "• GitHub Pages: https://SEU_USUARIO.github.io/portfolio-samuel"
echo ""
echo -e "${YELLOW}📖 Para mais detalhes, consulte: DEPLOY_GUIDE.md${NC}"
echo ""
echo -e "${GREEN}🎯 RECOMENDAÇÃO: Use Vercel para melhor performance!${NC}"
