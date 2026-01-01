# How to Upload Kearney Design System to GitHub Gist

## Option 1: Manual Upload (Easiest)

1. **Go to GitHub Gist**: https://gist.github.com/
2. **Click "New Gist"**
3. **Set Description**: 
   ```
   Kearney Design System - Production-ready React component library for consulting deliverables. Built with React, Tailwind CSS 4.0, and Recharts. January 2026.
   ```
4. **Make it Public**: Check "Create public gist"
5. **Add files one by one** using the file list below

## Option 2: Using Figma Make Export

1. **In Figma Make**: Look for "Export" or "Download" button
2. **Download the entire project** as a ZIP
3. **Extract on your machine**
4. **Use the script below** to bulk upload to Gist

## Option 3: Use GitHub CLI (gh)

If you have GitHub CLI installed:

```bash
# Install gh if needed
brew install gh  # macOS
# or download from https://cli.github.com/

# Authenticate
gh auth login

# Create gist from files
gh gist create --public \
  --desc "Kearney Design System - Complete Component Library" \
  src/app/components/kearney/*.tsx \
  src/app/components/ui/*.tsx \
  src/styles/*.css \
  src/assets/logos/*.svg \
  KDS_AI_GUIDELINES.md
```

---

## 📋 Complete File List (74 Files)

### Kearney Components (18 files)
Copy from: `/src/app/components/kearney/`

1. AnnotatedChartsExample.tsx
2. ChartCard.tsx
3. ChartsShowcase.tsx
4. ColorPalette.tsx
5. ComponentsShowcase.tsx
6. DashboardExample.tsx
7. DataCard.tsx
8. DataTable.tsx
9. DataVisualizationGuide.tsx
10. DesignSystemOverview.tsx
11. GradientsShowcase.tsx
12. InsightCard.tsx
13. KPIGrid.tsx
14. Logo.tsx
15. SlideExample.tsx
16. SlideLayout.tsx
17. StatusBadge.tsx
18. TypographyShowcase.tsx

### UI Base Components (48 files)
Copy from: `/src/app/components/ui/`

19. accordion.tsx
20. alert-dialog.tsx
21. alert.tsx
22. aspect-ratio.tsx
23. avatar.tsx
24. badge.tsx
25. breadcrumb.tsx
26. button.tsx
27. calendar.tsx
28. card.tsx
29. carousel.tsx
30. chart.tsx
31. checkbox.tsx
32. collapsible.tsx
33. command.tsx
34. context-menu.tsx
35. dialog.tsx
36. drawer.tsx
37. dropdown-menu.tsx
38. form.tsx
39. hover-card.tsx
40. input-otp.tsx
41. input.tsx
42. label.tsx
43. menubar.tsx
44. navigation-menu.tsx
45. pagination.tsx
46. popover.tsx
47. progress.tsx
48. radio-group.tsx
49. resizable.tsx
50. scroll-area.tsx
51. select.tsx
52. separator.tsx
53. sheet.tsx
54. sidebar.tsx
55. skeleton.tsx
56. slider.tsx
57. sonner.tsx
58. switch.tsx
59. table.tsx
60. tabs.tsx
61. textarea.tsx
62. toggle-group.tsx
63. toggle.tsx
64. tooltip.tsx
65. use-mobile.ts
66. utils.ts

### Styles (4 files)
Copy from: `/src/styles/`

67. fonts.css
68. index.css
69. tailwind.css
70. theme.css

### Logo Assets (3 files)
Copy from: `/src/assets/logos/`

71. kearney-logo-purple.svg
72. kearney-logo-slate.svg
73. kearney-logo-white.svg

### Documentation (1 file)
Copy from: `/` (root)

74. KDS_AI_GUIDELINES.md

---

## 🎯 Recommended Gist File Structure

When uploading, name files with paths to create folders:

```
components/kearney/AnnotatedChartsExample.tsx
components/kearney/ChartCard.tsx
components/kearney/ChartsShowcase.tsx
...
components/ui/button.tsx
components/ui/card.tsx
...
styles/theme.css
styles/tailwind.css
...
assets/logos/kearney-logo-slate.svg
...
KDS_AI_GUIDELINES.md
README.md
```

---

## ✅ After Upload

1. **Copy the Gist URL** (e.g., https://gist.github.com/yourusername/abc123)
2. **Update KDS_AI_GUIDELINES.md** with the actual URL
3. **Test**: Try importing a component in CodePen or CodeSandbox
4. **Share**: The Gist URL can now be shared with AI assistants

---

## 💡 Tips

- **Batch Upload**: You can add multiple files at once in the Gist UI
- **Edit Later**: You can always edit the Gist to add/update files
- **Clone**: Anyone can clone your Gist with: `gh gist clone <gist-id>`
- **Embed**: Gist files can be embedded in documentation

---

## 🆘 Troubleshooting

**Can't find export in Figma Make?**
- Try right-clicking on the project
- Look for "Download" or "Export code"
- Check the menu bar at the top

**Files missing after export?**
- Make sure to export the entire project, not just App.tsx
- Check if there's a "Include dependencies" option

**Need help?**
- GitHub Gist docs: https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists
- GitHub CLI docs: https://cli.github.com/manual/gh_gist_create
