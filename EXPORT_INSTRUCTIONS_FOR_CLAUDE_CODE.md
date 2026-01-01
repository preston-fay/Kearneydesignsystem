# Instructions for Claude Code

## Your Figma Make URL
https://www.figma.com/make/[YOUR_PROJECT_ID_HERE]

## What You Need to Do

The user has a complete Kearney Design System in Figma Make with 79 files.  
They need to export everything to create a GitHub Gist.

## The Problem
- Figma Make has no export/download feature
- The web URL requires authentication
- We need all 79 files locally

## Solution for You (Claude Code)

**Ask the user to use Chrome DevTools to download all files:**

###  Step-by-Step Instructions to Give the User:

```
1. Open your Figma Make project in Chrome
2. Open DevTools (F12 or Cmd+Option+I)
3. Go to the "Sources" tab
4. Look in the left sidebar for the file tree
5. You should see all your project files listed
6. Right-click on folders and select "Save as..."
7. Download these key directories:
   - src/app/components/kearney/
   - src/app/components/ui/
   - src/assets/logos/
   - src/styles/
   - Root level .md files
   
8. Once you have them locally, run:
   cd ~/Downloads/figma-make-export
   gh gist create --public -d "Kearney Design System" $(find . -type f)
```

## Alternative: Screen Share
If DevTools doesn't work, ask the user to share their screen via Figma's "Share" feature  
and you can view/copy the code directly.

## File List (79 files total)

```
/ATTRIBUTIONS.md
/CLAUDE_CODE_INSTRUCTIONS.md
/EXPORT_BUNDLE_1_DOCUMENTATION.txt
/FILE_MANIFEST.txt
/GIST_UPLOAD_INSTRUCTIONS.md
/KDS_AI_GUIDELINES.md
/KEARNEY_DESIGN_SYSTEM.md
/TRANSFER_TO_CLAUDE_CODE.md
/create-gist.sh
/generate-kearney-ds.js
/guidelines/Guidelines.md
/package.json
/postcss.config.mjs
/src/app/App.tsx
/src/app/components/figma/ImageWithFallback.tsx
/src/app/components/kearney/AnnotatedChartsExample.tsx
/src/app/components/kearney/ChartCard.tsx
/src/app/components/kearney/ChartsShowcase.tsx
/src/app/components/kearney/ColorPalette.tsx
/src/app/components/kearney/ComponentsShowcase.tsx
/src/app/components/kearney/DashboardExample.tsx
/src/app/components/kearney/DataCard.tsx
/src/app/components/kearney/DataTable.tsx
/src/app/components/kearney/DataVisualizationGuide.tsx
/src/app/components/kearney/DesignSystemOverview.tsx
/src/app/components/kearney/GradientsShowcase.tsx
/src/app/components/kearney/InsightCard.tsx
/src/app/components/kearney/KPIGrid.tsx
/src/app/components/kearney/Logo.tsx
/src/app/components/kearney/SlideExample.tsx
/src/app/components/kearney/SlideLayout.tsx
/src/app/components/kearney/StatusBadge.tsx
/src/app/components/kearney/TypographyShowcase.tsx
/src/app/components/ui/accordion.tsx
/src/app/components/ui/alert-dialog.tsx
/src/app/components/ui/alert.tsx
/src/app/components/ui/aspect-ratio.tsx
/src/app/components/ui/avatar.tsx
/src/app/components/ui/badge.tsx
/src/app/components/ui/breadcrumb.tsx
/src/app/components/ui/button.tsx
/src/app/components/ui/calendar.tsx
/src/app/components/ui/card.tsx
/src/app/components/ui/carousel.tsx
/src/app/components/ui/chart.tsx
/src/app/components/ui/checkbox.tsx
/src/app/components/ui/collapsible.tsx
/src/app/components/ui/command.tsx
/src/app/components/ui/context-menu.tsx
/src/app/components/ui/dialog.tsx
/src/app/components/ui/drawer.tsx
/src/app/components/ui/dropdown-menu.tsx
/src/app/components/ui/form.tsx
/src/app/components/ui/hover-card.tsx
/src/app/components/ui/input-otp.tsx
/src/app/components/ui/input.tsx
/src/app/components/ui/label.tsx
/src/app/components/ui/menubar.tsx
/src/app/components/ui/navigation-menu.tsx
/src/app/components/ui/pagination.tsx
/src/app/components/ui/popover.tsx
/src/app/components/ui/progress.tsx
/src/app/components/ui/radio-group.tsx
/src/app/components/ui/resizable.tsx
/src/app/components/ui/scroll-area.tsx
/src/app/components/ui/select.tsx
/src/app/components/ui/separator.tsx
/src/app/components/ui/sheet.tsx
/src/app/components/ui/sidebar.tsx
/src/app/components/ui/skeleton.tsx
/src/app/components/ui/slider.tsx
/src/app/components/ui/sonner.tsx
/src/app/components/ui/switch.tsx
/src/app/components/ui/table.tsx
/src/app/components/ui/tabs.tsx
/src/app/components/ui/textarea.tsx
/src/app/components/ui/toggle-group.tsx
/src/app/components/ui/toggle.tsx
/src/app/components/ui/tooltip.tsx
/src/app/components/ui/use-mobile.ts
/src/app/components/ui/utils.ts
/src/assets/logos/kearney-logo-purple.svg
/src/assets/logos/kearney-logo-slate.svg
/src/assets/logos/kearney-logo-white.svg
/src/styles/fonts.css
/src/styles/index.css
/src/styles/tailwind.css
/src/styles/theme.css
/vite.config.ts
```

## Priority Files (If user can only get some)

The MOST IMPORTANT files to get:

1. **Documentation:**
   - KDS_AI_GUIDELINES.md (PRIMARY - this is the main guide)
   - KEARNEY_DESIGN_SYSTEM.md
   - package.json

2. **Kearney Components:**
   - All files in `/src/app/components/kearney/`
   
3. **Styles:**
   - `/src/styles/theme.css`
   
4. **Logos:**
   - All 3 SVG files in `/src/assets/logos/`

The UI components in `/src/app/components/ui/` are standard shadcn components and can be regenerated.
