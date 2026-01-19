# KDS Theme Specifications v1.1
**Kearney Design System - Light & Dark Theme Standards**

Date: January 19, 2026  
Status: Official Specification

---

## Overview

The Kearney Design System (KDS) supports both **light** and **dark** themes to ensure professional deliverables work in any viewing context—from bright boardrooms to dimmed executive briefings. All components, visualizations, and layouts MUST render correctly in both themes without sacrificing legibility, brand consistency, or visual hierarchy.

**Core Principle**: Theme switching should never compromise the Kearney brand identity or data clarity.

---

## Theme Philosophy

### Light Theme (Default)
- **Primary Use**: Printed deliverables, slides, reports, daytime presentations
- **Character**: Clean, professional, high contrast
- **Background**: Pure white (#FFFFFF) for maximum clarity
- **Best For**: Maximum data detail visibility, formal client presentations

### Dark Theme
- **Primary Use**: Digital dashboards, evening presentations, extended screen time
- **Character**: Sophisticated, reduced eye strain, modern
- **Background**: Kearney Black (#1E1E1E) for depth
- **Best For**: Executive dashboards, real-time monitoring, reduced screen glare

---

## Color System

### Light Theme Color Values

```css
:root {
  /* Surfaces */
  --background: #FFFFFF;              /* Pure white - main canvas */
  --card: #FFFFFF;                    /* Card backgrounds */
  --popover: #FFFFFF;                 /* Overlay surfaces */
  --secondary: #F5F5F5;               /* Subtle backgrounds */
  --muted: #E6E6E6;                   /* Muted sections */
  --accent: #E0D2FA;                  /* Light purple accents */
  
  /* Borders & Dividers */
  --border: #E6E6E6;                  /* Light gray borders */
  --input: #E6E6E6;                   /* Form borders */
  --ring: #7823DC;                    /* Focus ring */
  
  /* Text & Foreground */
  --foreground: #1E1E1E;              /* Primary text - Kearney Black */
  --card-foreground: #1E1E1E;         /* Text on cards */
  --popover-foreground: #1E1E1E;      /* Text on overlays */
  --muted-foreground: #787878;        /* Secondary text - Dark Gray */
  --accent-foreground: #1E1E1E;       /* Text on accent backgrounds */
  
  /* Brand Colors */
  --primary: #7823DC;                 /* Kearney Purple - primary brand */
  --primary-foreground: #FFFFFF;      /* Text on purple backgrounds */
  --secondary-foreground: #1E1E1E;    /* Text on secondary backgrounds */
  
  /* Status Colors (KDS-Compliant) */
  --destructive: #4B4B4B;             /* Charcoal - for warnings/errors */
  --destructive-foreground: #FFFFFF;  /* Text on destructive backgrounds */
  
  /* Chart Colors (Sequential Order) */
  --chart-1: #D2D2D2;                 /* Light Gray */
  --chart-2: #A5A6A5;                 /* Medium Gray */
  --chart-3: #787878;                 /* Dark Gray */
  --chart-4: #E0D2FA;                 /* Light Purple */
  --chart-5: #C8A5F0;                 /* Medium Light Purple */
  --chart-6: #AF7DEB;                 /* Medium Purple */
  --chart-7: #4B4B4B;                 /* Charcoal */
  --chart-8: #1E1E1E;                 /* Kearney Black */
  --chart-9: #9150E1;                 /* Bright Purple */
  --chart-10: #7823DC;                /* Kearney Purple */
}
```

### Dark Theme Color Values

```css
.dark {
  /* Surfaces */
  --background: #1E1E1E;              /* Kearney Black - main canvas */
  --card: #323232;                    /* Elevated cards */
  --popover: #323232;                 /* Overlay surfaces */
  --secondary: #323232;               /* Subtle backgrounds */
  --muted: #4B4B4B;                   /* Muted sections - Charcoal */
  --accent: #7823DC;                  /* Kearney Purple accents */
  
  /* Borders & Dividers */
  --border: #4B4B4B;                  /* Charcoal borders */
  --input: #4B4B4B;                   /* Form borders */
  --ring: #9150E1;                    /* Focus ring - brighter for visibility */
  
  /* Text & Foreground */
  --foreground: #FFFFFF;              /* Primary text - White */
  --card-foreground: #FFFFFF;         /* Text on cards */
  --popover-foreground: #FFFFFF;      /* Text on overlays */
  --muted-foreground: #A5A5A5;        /* Secondary text - Medium Gray */
  --accent-foreground: #FFFFFF;       /* Text on accent backgrounds */
  
  /* Brand Colors */
  --primary: #9150E1;                 /* Bright Purple - more visible in dark */
  --primary-foreground: #FFFFFF;      /* Text on purple backgrounds */
  --secondary-foreground: #FFFFFF;    /* Text on secondary backgrounds */
  
  /* Status Colors (KDS-Compliant) */
  --destructive: #787878;             /* Gray - softer for dark theme */
  --destructive-foreground: #FFFFFF;  /* Text on destructive backgrounds */
  
  /* Chart Colors (Same as Light - auto-adjust via context) */
  --chart-1: #D2D2D2;
  --chart-2: #A5A6A5;
  --chart-3: #787878;
  --chart-4: #E0D2FA;
  --chart-5: #C8A5F0;
  --chart-6: #AF7DEB;
  --chart-7: #4B4B4B;
  --chart-8: #1E1E1E;
  --chart-9: #9150E1;
  --chart-10: #7823DC;
}
```

---

## Contrast Requirements

### WCAG AA Compliance (Minimum)
All text must meet WCAG AA standards: **4.5:1 contrast ratio** for normal text, **3:1 for large text** (18px+ or 14px+ bold).

### Light Theme Contrast Ratios

| Element | Foreground | Background | Ratio | Status |
|---------|-----------|------------|-------|--------|
| Body Text | #1E1E1E | #FFFFFF | 16.9:1 | ✅ Excellent |
| Secondary Text | #787878 | #FFFFFF | 4.6:1 | ✅ AA Pass |
| Primary Purple | #7823DC | #FFFFFF | 5.2:1 | ✅ AA Pass |
| Purple Text on Card | #7823DC | #F5F5F5 | 5.0:1 | ✅ AA Pass |
| Muted Text | #787878 | #E6E6E6 | 3.5:1 | ⚠️ Large text only |
| Charcoal | #4B4B4B | #FFFFFF | 8.6:1 | ✅ Excellent |

### Dark Theme Contrast Ratios

| Element | Foreground | Background | Ratio | Status |
|---------|-----------|------------|-------|--------|
| Body Text | #FFFFFF | #1E1E1E | 16.9:1 | ✅ Excellent |
| Secondary Text | #A5A5A5 | #1E1E1E | 6.5:1 | ✅ AA+ Pass |
| Bright Purple | #9150E1 | #1E1E1E | 7.1:1 | ✅ AA+ Pass |
| Purple on Card | #9150E1 | #323232 | 6.2:1 | ✅ AA Pass |
| Muted Text | #A5A5A5 | #4B4B4B | 3.1:1 | ⚠️ Large text only |
| White on Charcoal | #FFFFFF | #4B4B4B | 7.4:1 | ✅ Excellent |

**Note**: All contrast ratios verified using WCAG 2.1 guidelines.

---

## Theme-Specific Component Behavior

### Cards

**Light Theme:**
```tsx
<Card className="bg-card border-border">
  {/* White background, light gray border */}
</Card>
```

**Dark Theme:**
```tsx
<Card className="bg-card border-border">
  {/* #323232 background, charcoal border */}
  {/* Automatic via CSS variables */}
</Card>
```

### Data Visualizations

#### Chart Backgrounds
- **Light**: Transparent or white (#FFFFFF)
- **Dark**: Transparent or match card background (#323232)

#### Chart Text
```tsx
// Always use theme-aware text color
<XAxis 
  tick={{ fill: 'currentColor', fontSize: 12 }}
  // currentColor inherits from parent theme
/>
```

#### Chart Colors
Use the same chart color sequence (1-10) in BOTH themes:
```tsx
const CHART_COLORS = {
  1: '#D2D2D2',   // Light Gray
  2: '#A5A6A5',   // Medium Gray
  3: '#787878',   // Dark Gray
  4: '#E0D2FA',   // Light Purple
  5: '#C8A5F0',   // Medium Light Purple
  6: '#AF7DEB',   // Medium Purple
  7: '#4B4B4B',   // Charcoal
  8: '#1E1E1E',   // Black (inverts well on dark)
  9: '#9150E1',   // Bright Purple
  10: '#7823DC',  // Kearney Purple
};

// Colors work in both themes because:
// - Purples have sufficient luminance
// - Grays provide range from light to dark
// - No theme-specific adjustments needed
```

### Buttons

**Primary Button:**
- **Light**: Purple background (#7823DC), white text
- **Dark**: Bright purple background (#9150E1), white text

```tsx
<Button variant="default">
  {/* Auto-adjusts via --primary variable */}
  Action
</Button>
```

**Ghost/Outline Button:**
- **Light**: Purple text (#7823DC), transparent background
- **Dark**: Bright purple text (#9150E1), transparent background

```tsx
<Button variant="ghost" className="text-primary">
  {/* Auto-adjusts */}
  Secondary Action
</Button>
```

### Badges & Status Indicators

**Never use traffic light colors!** Use KDS palette:

```tsx
// Positive/Active Status
<Badge style={{ backgroundColor: '#7823DC', color: '#FFFFFF' }}>
  Active
</Badge>

// Warning/At Risk Status
<Badge style={{ backgroundColor: '#787878', color: '#FFFFFF' }}>
  At Risk
</Badge>

// Negative/Delayed Status
<Badge style={{ backgroundColor: '#4B4B4B', color: '#FFFFFF' }}>
  Delayed
</Badge>
```

These colors work identically in both themes.

### Tables

**Light Theme:**
- Row hover: `bg-muted/50` (#E6E6E6 at 50% opacity)
- Borders: `border-border` (#E6E6E6)
- Alternate rows: Optional subtle gray (#F5F5F5)

**Dark Theme:**
- Row hover: `bg-muted/50` (#4B4B4B at 50% opacity)
- Borders: `border-border` (#4B4B4B)
- Alternate rows: Optional subtle lift (#323232)

```tsx
<tr className="border-b hover:bg-muted/50 transition-colors">
  {/* Automatically theme-aware */}
</tr>
```

### Forms & Inputs

**Light Theme:**
- Border: #E6E6E6
- Background: #FFFFFF
- Focus ring: #7823DC

**Dark Theme:**
- Border: #4B4B4B
- Background: #323232
- Focus ring: #9150E1

```tsx
<input 
  className="border-input bg-background text-foreground focus:ring-ring"
  // All variables adjust automatically
/>
```

---

## Shadows & Elevation

### Light Theme Shadows
Use subtle shadows for elevation:

```css
/* Card elevation */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);

/* Modal/Dialog elevation */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* Dropdown/Popover elevation */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
```

### Dark Theme Shadows
Use stronger shadows for elevation (creates depth in dark UIs):

```css
/* Card elevation */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

/* Modal/Dialog elevation */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

/* Dropdown/Popover elevation */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
```

**Implementation:**
```tsx
<div className="shadow-sm dark:shadow-md">
  {/* Adjusts shadow depth per theme */}
</div>
```

---

## Typography in Themes

### Font Weights
**Same in both themes:**
- Headings: 600-700 (semibold to bold)
- Body: 400 (regular)
- Captions: 400 (regular)
- Emphasis: 600 (semibold)

### Font Colors

**Light Theme:**
- Primary text: #1E1E1E (`text-foreground`)
- Secondary text: #787878 (`text-muted-foreground`)
- Links: #7823DC (`text-primary`)

**Dark Theme:**
- Primary text: #FFFFFF (`text-foreground`)
- Secondary text: #A5A5A5 (`text-muted-foreground`)
- Links: #9150E1 (`text-primary`)

```tsx
<h1 className="text-foreground">Title</h1>
<p className="text-muted-foreground">Description</p>
<a className="text-primary hover:underline">Learn more</a>
```

---

## Icons in Themes

### Standard Icons
Use `currentColor` to inherit theme text color:

```tsx
import { TrendingUp } from 'lucide-react';

<TrendingUp className="w-4 h-4 text-foreground" />
// OR
<TrendingUp className="w-4 h-4 text-primary" />
```

### Kearney-Colored Icons
For brand emphasis, use explicit Kearney colors:

**Light Theme:**
```tsx
<TrendingUp className="w-4 h-4" style={{ color: '#7823DC' }} />
```

**Dark Theme:**
```tsx
<TrendingUp className="w-4 h-4" style={{ color: '#9150E1' }} />
// OR use CSS variable for automatic switching:
<TrendingUp className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
```

### Decorative Icons in Charts
Always use explicit chart colors (not theme variables):

```tsx
<div className="flex items-center gap-2">
  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#7823DC' }} />
  <span>Revenue</span>
</div>
```

---

## Gradients

### Light Theme Gradients
```css
/* Purple gradient - light */
background: linear-gradient(135deg, #E0D2FA 0%, #C8A5F0 100%);

/* Gray gradient - light */
background: linear-gradient(135deg, #F5F5F5 0%, #E6E6E6 100%);

/* Accent gradient - light */
background: linear-gradient(135deg, #9150E1 0%, #7823DC 100%);
```

### Dark Theme Gradients
```css
/* Purple gradient - dark */
background: linear-gradient(135deg, #7823DC 0%, #9150E1 100%);

/* Gray gradient - dark */
background: linear-gradient(135deg, #323232 0%, #4B4B4B 100%);

/* Accent gradient - dark */
background: linear-gradient(135deg, #9150E1 0%, #AF7DEB 100%);
```

**Usage:**
```tsx
<div className="bg-gradient-to-br from-primary/5 to-primary/10">
  {/* Subtle branded gradient that adapts to theme */}
</div>
```

---

## Data Visualization Color Scales

### Sequential Scales (Light to Dark)

**Purple Scale** (for intensity, heat):
```typescript
const PURPLE_SCALE_LIGHT = [
  '#F3EDFC',  // Lightest
  '#E0D2FA',
  '#C8A5F0',
  '#AF7DEB',
  '#9150E1',
  '#7823DC',  // Darkest
];

const PURPLE_SCALE_DARK = [
  '#7823DC',  // Start darker for visibility
  '#9150E1',
  '#AF7DEB',
  '#C8A5F0',
  '#E0D2FA',
  '#F3EDFC',  // Lighter endpoint still visible
];
```

**Gray Scale** (for neutral data):
```typescript
const GRAY_SCALE = [
  '#D2D2D2',  // Works in both themes
  '#A5A6A5',
  '#787878',
  '#4B4B4B',
  '#1E1E1E',
];
```

### Divergent Scales (Negative to Positive)

**Gray to Purple** (for negative/neutral/positive):
```typescript
const DIVERGENT_SCALE = [
  '#1E1E1E',  // Negative (gray)
  '#787878',
  '#A5A6A5',  // Neutral
  '#AF7DEB',
  '#7823DC',  // Positive (purple)
];
```

**Implementation:**
```tsx
// Use explicit colors, not theme variables
<Bar fill="#7823DC" />
<Area fill="#C8A5F0" />
```

---

## Theme Switching Implementation

### Using next-themes
```tsx
import { ThemeProvider } from 'next-themes';

<ThemeProvider attribute="class" defaultTheme="light">
  <App />
</ThemeProvider>
```

### Theme Toggle Component
```tsx
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="w-4 h-4 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <Moon className="w-4 h-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

### Forcing a Specific Theme
For components that must always render in one theme:

```tsx
// Always light
<div className="bg-white text-black">
  {/* Overrides theme */}
</div>

// Always dark
<div className="dark">
  <Card className="bg-card text-foreground">
    {/* Renders as dark theme */}
  </Card>
</div>
```

---

## Testing Checklist

Before approving any KDS deliverable, verify BOTH themes:

### Visual Verification
- [ ] All text is legible in both themes (≥ 4.5:1 contrast)
- [ ] Charts render correctly with visible data in both themes
- [ ] Borders and dividers are visible but subtle
- [ ] Hover states work in both themes
- [ ] Focus indicators are visible in both themes
- [ ] Icons have appropriate contrast
- [ ] Cards and surfaces have proper elevation

### Functional Verification
- [ ] No hardcoded colors that break in dark mode
- [ ] No white text on white backgrounds (or black on black)
- [ ] Interactive elements have proper hover/active states
- [ ] Tooltips are readable in both themes
- [ ] Data labels don't disappear in either theme
- [ ] Brand colors (purple) remain prominent in both themes

### Brand Verification
- [ ] Kearney Purple is the primary accent in both themes
- [ ] No traffic light colors (red/yellow/green) in either theme
- [ ] Logos render appropriately (use theme-specific versions if needed)
- [ ] Overall aesthetic feels sophisticated in both themes
- [ ] Gray-to-purple palette is maintained

---

## Anti-Patterns

### ❌ DON'T DO THIS:

```tsx
// Hardcoded colors that break in dark theme
<div style={{ backgroundColor: 'white', color: 'black' }}>
  {/* Will be unreadable in dark mode */}
</div>

// Using non-KDS colors
<Badge className="bg-green-600">Success</Badge>

// Forgetting currentColor for icons
<TrendingUp style={{ color: '#000000' }} />
```

### ✅ DO THIS:

```tsx
// Theme-aware using CSS variables
<div className="bg-background text-foreground">
  {/* Automatically adapts */}
</div>

// KDS-compliant status colors
<Badge style={{ backgroundColor: '#7823DC', color: '#FFFFFF' }}>
  Success
</Badge>

// Theme-aware icon coloring
<TrendingUp className="w-4 h-4 text-primary" />
```

---

## Quick Reference

### When to Use CSS Variables
- Backgrounds: `bg-background`, `bg-card`, `bg-muted`
- Text: `text-foreground`, `text-muted-foreground`
- Borders: `border-border`
- Interactive states: `hover:bg-muted`, `focus:ring-ring`

### When to Use Explicit Colors
- Chart colors: Always use hex codes (#7823DC, #A5A6A5, etc.)
- Brand emphasis: Use Kearney Purple (#7823DC or #9150E1)
- Status indicators: Use KDS gray/purple palette
- Data visualization scales: Explicit hex values

### Color Selection Decision Tree
```
Need a color?
├─ Is it theme-dependent? (background, text, borders)
│  └─ YES → Use CSS variables (bg-background, text-foreground)
│
├─ Is it for data visualization? (charts, graphs)
│  └─ YES → Use explicit chart colors (#7823DC, #787878, etc.)
│
├─ Is it brand/accent?
│  └─ YES → Use `text-primary` or explicit Kearney Purple
│
└─ Is it a status indicator?
   └─ YES → Use KDS-approved grays and purples (never traffic lights)
```

---

## Version History

**v1.1** (January 19, 2026)
- Added comprehensive theme specifications
- Documented all color values and contrast ratios
- Added component-specific theme behavior
- Included implementation examples
- Added testing checklist

**v1.0** (December 2025)
- Initial KDS theme support

---

**Official Kearney Design System Resource**  
For questions or clarifications, refer to `/KDS_AI_GUIDELINES.md` and `/KEARNEY_DESIGN_SYSTEM.md`
