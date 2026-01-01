#!/bin/bash

# Kearney Design System - GitHub Gist Creator
# This script creates a public Gist with all design system files

# SETUP: Get your GitHub token from https://github.com/settings/tokens
# Required scope: gist
GITHUB_TOKEN="YOUR_GITHUB_TOKEN_HERE"

if [ "$GITHUB_TOKEN" = "YOUR_GITHUB_TOKEN_HERE" ]; then
    echo "❌ Error: Please set your GitHub token in this script"
    echo "Get one from: https://github.com/settings/tokens (with 'gist' scope)"
    exit 1
fi

echo "🚀 Creating Kearney Design System Gist..."

# Create the gist using GitHub API
# Note: This is a template - you'll need to run this from your local machine
# after downloading the Figma Make project

cat > gist-payload.json << 'EOF'
{
  "description": "Kearney Design System - Production-ready React component library for consulting deliverables. Built with React, Tailwind CSS 4.0, and Recharts. January 2026.",
  "public": true,
  "files": {
    "README.md": {
      "content": "# Kearney Design System\n\nProduction-ready React component library for professional consulting deliverables.\n\n## Features\n- 18 Kearney-specific components (charts, dashboards, slides)\n- 48 UI base components (buttons, cards, tables, etc.)\n- Official Kearney logos (slate, white, purple)\n- Complete theme system (light/dark mode)\n- Comprehensive AI guidelines\n\n## Quick Start\n\n```tsx\nimport { Logo } from './components/kearney/Logo';\nimport { DataCard } from './components/kearney/DataCard';\nimport { ChartCard } from './components/kearney/ChartCard';\n\n// Use official logo\n<Logo variant=\"slate\" size=\"md\" />\n\n// Display KPI\n<DataCard \n  title=\"Total Revenue\"\n  value=\"$2.4M\"\n  change=\"+12.5%\"\n  trend=\"up\"\n/>\n```\n\n## Documentation\n\nSee `KDS_AI_GUIDELINES.md` for complete usage instructions, color palettes, chart configurations, and code examples.\n\n## License\n\n© 2026 Kearney Design System - For professional consulting use"
    }
  }
}
EOF

# Make API call
response=$(curl -s -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d @gist-payload.json \
  https://api.github.com/gists)

# Extract the URL
gist_url=$(echo "$response" | grep -o '"html_url": "[^"]*' | head -1 | cut -d'"' -f4)

if [ -n "$gist_url" ]; then
    echo "✅ Gist created successfully!"
    echo "📎 URL: $gist_url"
    echo ""
    echo "⚠️  NOTE: This created a basic Gist structure."
    echo "You need to manually add the 74 files from your downloaded Figma Make project."
else
    echo "❌ Failed to create Gist"
    echo "Response: $response"
fi

# Clean up
rm gist-payload.json

echo ""
echo "📋 Next Steps:"
echo "1. Download/export your Figma Make project"
echo "2. Edit the created Gist and upload all 74 files"
echo "3. Update KDS_AI_GUIDELINES.md with the Gist URL"
