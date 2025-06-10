#!/bin/bash
# 🔒 Script para abrir configurações de proteção da branch main

echo "🔒 Abrindo configurações de proteção da branch main..."
echo ""
echo "📋 Configurações que devem ser aplicadas:"
echo "  ✅ Require a pull request before merging"
echo "  ✅ Require approvals: 1"
echo "  ✅ Dismiss stale reviews when new commits are pushed"
echo "  ✅ Require conversation resolution before merging"
echo "  ✅ Include administrators"
echo "  ✅ Restrict pushes"
echo ""

# Verificar se está no macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🌐 Abrindo no navegador..."
    open "https://github.com/samuelmachado1/portifolioCultural/settings/branches"
else
    echo "🌐 Acesse manualmente: https://github.com/samuelmachado1/portifolioCultural/settings/branches"
fi

echo ""
echo "📋 Passo a passo:"
echo "1. Clique em 'Add rule'"
echo "2. Digite 'main' no Branch name pattern"
echo "3. Marque as opções listadas acima"
echo "4. Clique em 'Create'"
echo ""
echo "⚠️  IMPORTANTE: Após configurar, teste com:"
echo "   git checkout main"
echo "   git push origin main"
echo "   (deve falhar com erro de proteção)"
