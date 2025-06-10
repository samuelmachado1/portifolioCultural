#!/bin/bash
# 🔒 Script para configurar proteções da branch main

set -e

echo "🔒 Configurando proteções da branch main..."

# Configurar proteção da branch main
cat > branch_protection.json << 'EOF'
{
  "required_status_checks": {
    "strict": true,
    "contexts": []
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "required_approving_review_count": 1,
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "restrict_pushes": false
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF

# Aplicar configuração
curl -X PUT \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $(gh auth token)" \
  "https://api.github.com/repos/samuelmachado1/portifolioCultural/branches/main/protection" \
  -d @branch_protection.json

# Limpar arquivo temporário
rm -f branch_protection.json

echo "✅ Proteções da branch main configuradas!"
echo ""
echo "📋 Proteções aplicadas:"
echo "  ✅ Pull Request obrigatório"
echo "  ✅ 1 aprovador necessário"
echo "  ✅ Dismiss stale reviews"
echo "  ✅ Administradores incluídos"
echo "  ✅ Force push bloqueado"
echo "  ✅ Deleção da branch bloqueada"
echo ""
echo "🚫 Agora NÃO é possível:"
echo "  - Push direto para main"
echo "  - Merge sem PR"
echo "  - Merge sem aprovação"
echo "  - Force push para main"
