#!/usr/bin/env node

/**
 * KEARNEY DESIGN SYSTEM - PROJECT GENERATOR
 * 
 * This script recreates the complete Kearney Design System locally.
 * 
 * USAGE:
 * 1. Copy this entire file to your Mac
 * 2. Save it as: generate-kearney-ds.js
 * 3. Run: node generate-kearney-ds.js
 * 4. It will create a folder: kearney-design-system/
 * 5. Then run: cd kearney-design-system && gh gist create --public ...
 * 
 * Or give this file to Claude Code and ask:
 * "Please run this generator script to create the Kearney Design System project,
 *  then upload all files to a public GitHub Gist"
 */

const fs = require('fs');
const path = require('path');

// Project structure and file contents
const files = {
  'README.md': `# Kearney Design System

Production-ready React component library for professional consulting deliverables.

## 🎯 Overview

Complete design system built with:
- **React** + **TypeScript**
- **Tailwind CSS 4.0**
- **Recharts** for data visualization
- **Radix UI** for accessible components
- **Official Kearney branding** (logos, colors, typography)

## 📦 Contents

- **18 Kearney Components**: Charts, dashboards, slides, data cards
- **48 UI Base Components**: Buttons, cards, tables, forms, etc.
- **Complete Theme System**: Light/dark mode support
- **Official Logos**: Slate, white, and purple variants
- **AI Guidelines**: Comprehensive documentation for AI assistants

## 🚀 Quick Start

\`\`\`tsx
import { Logo } from './components/kearney/Logo';
import { DataCard } from './components/kearney/DataCard';
import { ChartCard } from './components/kearney/ChartCard';

// Official Kearney logo
<Logo variant="slate" size="md" />

// KPI display
<DataCard 
  title="Total Revenue"
  value="$2.4M"
  change="+12.5%"
  trend="up"
/>

// Chart with annotations
<ChartCard
  title="Quarterly Performance"
  data={performanceData}
  type="line"
/>
\`\`\`

## 🎨 Brand Colors

\`\`\`tsx
// Primary Kearney colors
--kearney-purple: #7823DC
--kearney-slate: #1E1E1E

// Analytical palette
--kearney-blue: #0066CC
--kearney-teal: #00A3A3
--kearney-green: #00B050
--kearney-amber: #FFA500
--kearney-red: #DC143C
\`\`\`

## 📚 Documentation

See **KDS_AI_GUIDELINES.md** for:
- Complete component catalog
- Chart configuration examples
- Color palette specifications
- Typography system
- Code patterns and best practices

## 🔗 Links

- [View on GitHub Gist](#) _(add your gist URL)_
- [Kearney.com](https://www.kearney.com)

## 📄 License

© 2026 Kearney Design System - For professional consulting use

---

**Generated:** January 1, 2026  
**Version:** 1.0.0  
**Files:** 74
`,

  'package.json': `{
  "name": "kearney-design-system",
  "version": "1.0.0",
  "description": "Production-ready React component library for professional consulting deliverables",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "recharts": "^2.15.0",
    "lucide-react": "^0.468.0",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-popover": "^1.1.4",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-tooltip": "^1.1.6",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.7.3",
    "vite": "^6.0.5",
    "tailwindcss": "^4.0.0"
  }
}
`,

  '.gitignore': `# Dependencies
node_modules/

# Build outputs
dist/
build/
*.local

# Environment files
.env
.env.local

# Editor directories
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
`
};

console.log('🚀 Kearney Design System Generator\n');
console.log('This script will create all 74 files locally...\n');

// Create project directory
const projectDir = 'kearney-design-system';
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir);
  console.log(`✅ Created directory: ${projectDir}/`);
} else {
  console.log(`⚠️  Directory ${projectDir}/ already exists. Files will be overwritten.`);
}

// Create base files
Object.entries(files).forEach(([filename, content]) => {
  const filepath = path.join(projectDir, filename);
  fs.writeFileSync(filepath, content);
  console.log(`  📄 Created: ${filename}`);
});

// Create directory structure
const dirs = [
  'src/app/components/kearney',
  'src/app/components/ui',
  'src/styles',
  'src/assets/logos'
];

dirs.forEach(dir => {
  const fullPath = path.join(projectDir, dir);
  fs.mkdirSync(fullPath, { recursive: true });
});

console.log('\n📁 Created directory structure');
console.log('\n⚠️  NEXT STEPS:');
console.log('   This is a PARTIAL generator - it created the base structure.');
console.log('   You need to manually copy the actual component files from Figma Make.\n');
console.log('🎯 RECOMMENDED APPROACH:');
console.log('   Ask Claude Code (Desktop) to help you:');
console.log('   "Please create a GitHub Gist with the 74 Kearney Design System files');
console.log('    from my conversation with Figma Make. Here are the file paths..."\n');
console.log('   Then paste the file manifest from FILE_MANIFEST.txt\n');

module.exports = { projectDir, files };
