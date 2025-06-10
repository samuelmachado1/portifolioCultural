#!/bin/bash

# 🔧 Script de Fix para Erro de Deploy GitHub Pages
# Executa: chmod +x fix-deploy-error.sh && ./fix-deploy-error.sh

echo "🔧 CORRIGINDO ERRO DE DEPLOY - GitHub Pages"
echo "============================================="

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_step() {
    echo -e "${BLUE}[FIX]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[ACTION NEEDED]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 1. Verificar se estamos no repositório correto
print_step "Verificando repositório..."
if [ ! -d ".git" ]; then
    print_error "Não é um repositório Git!"
    exit 1
fi

# Verificar remote
REMOTE_URL=$(git remote get-url origin 2>/dev/null)
if [[ $REMOTE_URL == *"portifolioCultural"* ]]; then
    print_success "Repositório portifolioCultural detectado!"
else
    print_warning "Repositório diferente detectado: $REMOTE_URL"
fi

# 2. Fazer backup do workflow atual
print_step "Fazendo backup do workflow atual..."
if [ -f ".github/workflows/deploy.yml" ]; then
    cp .github/workflows/deploy.yml .github/workflows/deploy.yml.backup
    print_success "Backup criado: deploy.yml.backup"
fi

# 3. Tentar deploy manual primeiro
print_step "Tentando deploy manual..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build funcionando!"
    
    # Verificar se gh-pages está instalado
    if ! command -v npx &> /dev/null; then
        print_error "NPX não encontrado!"
        exit 1
    fi
    
    print_step "Executando deploy manual..."
    npx gh-pages -d dist
    
    if [ $? -eq 0 ]; then
        print_success "Deploy manual realizado com sucesso!"
        echo ""
        echo -e "${GREEN}🎉 SITE DISPONÍVEL EM:${NC}"
        echo "https://samuelmachado1.github.io/portifolioCultural"
        echo ""
        print_warning "Para corrigir o GitHub Actions, siga os passos em FIX_DEPLOY_ERROR.md"
        exit 0
    else
        print_error "Falha no deploy manual"
    fi
else
    print_error "Erro no build!"
    exit 1
fi

# 4. Instruções para configurar GitHub
echo ""
echo -e "${YELLOW}📋 PRÓXIMOS PASSOS MANUAIS NO GITHUB:${NC}"
echo ""
echo "1. Acesse: https://github.com/samuelmachado1/portifolioCultural/settings/actions"
echo "2. Em 'Workflow permissions':"
echo "   ✅ Selecione: 'Read and write permissions'"
echo "   ✅ Marque: 'Allow GitHub Actions to create and approve pull requests'"
echo "3. Clique em 'Save'"
echo ""
echo "4. Vá em: https://github.com/samuelmachado1/portifolioCultural/settings/pages"
echo "5. Source: 'Deploy from a branch'"
echo "6. Branch: 'gh-pages' / 'root'"
echo "7. Clique em 'Save'"
echo ""
echo -e "${GREEN}🚀 Após isso, faça um novo push e o deploy automático funcionará!${NC}"
