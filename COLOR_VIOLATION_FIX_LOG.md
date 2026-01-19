# KDS Color Violation Fixes

**Date**: January 2, 2026  
**Issue**: Non-compliant colors (red, green, yellow/amber) found throughout components  
**Status**: CRITICAL - Immediate fix required

---

## Violations Found

### Files with Non-KDS Colors:
1. ✅ **AnnotatedChartsExample.tsx** - FIXED
   - ❌ `yellow-600` (amber warnings)
   - ❌ `green-600` (positive indicators)
   - ❌ `red-600` (negative indicators)

2. ⏳ **InsightCard.tsx** - NEEDS FIX
   - ❌ `#D32F2F` (red) for high impact
   - ❌ `#FFA726` (orange/amber) for medium impact

3. ⏳ **TypographyShowcase.tsx** - NEEDS FIX
   - ❌ `text-green-600` (growth percentages)
   - ❌ `text-red-600` (decline percentages)

4. ⏳ **ComponentsShowcase.tsx** - NEEDS FIX
   - ❌ `bg-green-600` (Active, On Track statuses)
   - ❌ `bg-yellow-600` (Pending, At Risk statuses)
   - ❌ `bg-red-600` (Inactive, Delayed statuses)
   - ❌ `border-yellow-600` (Warning alerts)

5. ⏳ **DataVisualizationGuide.tsx** - NEEDS FIX
   - ❌ `text-yellow-600` (warning symbol)

6. ⏳ **DashboardExample.tsx** - NEEDS FIX
   - ❌ `text-green-600` / `text-red-600` (trend indicators)
   - ❌ `bg-green-600` / `bg-yellow-600` / `bg-red-600` (project status badges)
   - ❌ `border-yellow-600` (action required cards)

---

## KDS-Compliant Replacements

### Status/Impact Indicators:
- **Positive/Success** → `#7823DC` (Kearney Purple) or `#9150E1` (Bright Purple)
- **Warning/Caution** → `#A5A6A5` (Medium Gray) or `#787878` (Dark Gray)
- **Negative/Alert** → `#4B4B4B` (Charcoal) or `#1E1E1E` (Kearney Black)
- **Neutral** → `#D2D2D2` (Light Gray)

### Growth/Decline Indicators:
- **Upward trend** → `#7823DC` (primary emphasis)
- **Downward trend** → `#787878` (neutral gray, not red!)
- **Neutral/Flat** → `#A5A6A5`

### Project Status:
- **On Track** → `#7823DC` (Kearney Purple)
- **At Risk** → `#787878` (Dark Gray)
- **Delayed** → `#4B4B4B` (Charcoal)
- **Active** → `#9150E1` (Bright Purple)
- **Inactive** → `#D2D2D2` (Light Gray)

---

## Principle

**NEVER use traffic light colors (red/yellow/green)**

Kearney's brand is built on professionalism and sophistication. Traffic light colors are:
- Cliché
- Overused in business contexts
- Not distinctive to Kearney
- Can be problematic for colorblind users

Instead, use the sophisticated gray-to-purple palette that is:
- Distinctive
- Professional
- Brand-aligned
- Accessible

---

## Fix Strategy

1. Replace all green with purple shades
2. Replace all red/amber with gray shades
3. Use purple for primary emphasis
4. Use grays for secondary/neutral states
5. Never rely on color alone - always include icons or labels
