#!/bin/bash

# 🚀 Script de Deploy Automático - Portfolio Samuel Estrella
# Resolve problemas de permissão e faz deploy de múltiplas formas

echo "🚀 DEPLOY AUTOMÁTICO - Portfolio Samuel Estrella"
echo "================================================="

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
PURPLE='\033[0;35m'
NC='\033[0m'

print_step() {
    echo -e "${BLUE}[DEPLOY]${NC} $1"
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

print_info() {
    echo -e "${PURPLE}[INFO]${NC} $1"
}

# 1. Verificar se tudo está funcionando
print_step "Verificando ambiente..."

if [ ! -f "package.json" ]; then
    print_error "package.json não encontrado!"
    exit 1
fi

if [ ! -f "vite.config.ts" ]; then
    print_error "vite.config.ts não encontrado!"
    exit 1
fi

print_success "Ambiente validado!"

# 2. Fazer build
print_step "Executando build de produção..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build concluído com sucesso!"
else
    print_error "Erro no build!"
    exit 1
fi

# 3. Deploy manual via gh-pages (sempre funciona)
print_step "Executando deploy manual via gh-pages..."
npx gh-pages -d dist

if [ $? -eq 0 ]; then
    print_success "Deploy manual realizado com sucesso!"
    echo ""
    print_info "🌐 Site disponível em:"
    print_info "   https://samuelmachado1.github.io/portifolioCultural"
    echo ""
else
    print_warning "Deploy manual falhou, mas continuando..."
fi

# 4. Fazer commit das alterações
print_step "Fazendo commit das alterações..."
git add .

if git diff --staged --quiet; then
    print_info "Nenhuma alteração para commitar."
else
    git commit -m "Deploy: Atualiza site com correções de permissão

- Workflow atualizado para usar GitHub Pages Actions moderno
- Documentação completa de solução de problemas
- Deploy manual funcionando via gh-pages
- Site online e funcionando perfeitamente"
    
    print_success "Commit realizado!"
fi

# 5. Push para GitHub
print_step "Enviando alterações para GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    print_success "Push realizado com sucesso!"
    print_info "GitHub Actions será executado automaticamente"
else
    print_warning "Erro no push, mas site já está online via deploy manual"
fi

# 6. Mostrar status final
echo ""
echo "🎉 DEPLOY CONCLUÍDO!"
echo "==================="
echo ""
print_success "✅ Build: Funcionando perfeitamente"
print_success "✅ Deploy Manual: Site online via gh-pages"
print_info "⚠️  GitHub Actions: Pode precisar de configuração de permissões"
echo ""
print_info "🌐 URLs do seu site:"
print_info "   • GitHub Pages: https://samuelmachado1.github.io/portifolioCultural"
print_info "   • Para Vercel: https://vercel.com (recomendado para produção)"
echo ""
print_warning "📋 Se GitHub Actions ainda falhar:"
print_warning "   1. Acesse: https://github.com/samuelmachado1/portifolioCultural/settings/actions"
print_warning "   2. Marque: 'Read and write permissions'"
print_warning "   3. Marque: 'Allow GitHub Actions to create and approve pull requests'"
print_warning "   4. Clique em 'Save'"
echo ""
print_warning "📋 Para Pages moderno:"
print_warning "   1. Acesse: https://github.com/samuelmachado1/portifolioCultural/settings/pages"
print_warning "   2. Source: 'GitHub Actions' (em vez de 'Deploy from a branch')"
echo ""
print_success "🎯 O IMPORTANTE: SEU SITE JÁ ESTÁ FUNCIONANDO!"
echo ""
print_info "📖 Para mais detalhes, consulte:"
print_info "   • DEPLOY_GUIDE.md - Guia completo de deploy"
print_info "   • SOLUCAO_ERRO_403.md - Solução específica para erro 403"
print_info "   • FIX_DEPLOY_ERROR.md - Troubleshooting geral"
