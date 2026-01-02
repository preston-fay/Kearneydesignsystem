# KDS Mapping Quick Reference Card

**Copy-paste this when working with maps in Kearney deliverables**

---

## Required Map Colors (Sequential Scale)

```typescript
// Choropleth maps (low to high)
const CHOROPLETH_SCALE = [
  '#F5F5F5',  // 0-12.5%
  '#E6E6E6',  // 12.5-25%
  '#D2D2D2',  // 25-37.5%
  '#E0D2FA',  // 37.5-50%
  '#C8A5F0',  // 50-62.5%
  '#AF7DEB',  // 62.5-75%
  '#9150E1',  // 75-87.5%
  '#7823DC',  // 87.5-100%
];

// Categorical markers
const MARKER_COLORS = {
  primary: '#7823DC',
  secondary: '#AF7DEB',
  tertiary: '#E0D2FA',
  inactive: '#D2D2D2',
};
```

---

## Map Libraries by Use Case

| Need | Use | Install |
|------|-----|---------|
| Interactive dashboard map | `react-leaflet` | `npm install react-leaflet leaflet` |
| Presentation slide map | `react-simple-maps` | `npm install react-simple-maps` |
| Advanced styling | `mapbox-gl` | `npm install mapbox-gl react-map-gl` |
| 3D visualization | `@deck.gl/react` | `npm install deck.gl @deck.gl/react` |

---

## Required Elements

Every map MUST have:
- [ ] KDS color scale (no rainbow/traffic light)
- [ ] Legend showing color scale with units
- [ ] Scale bar (for distance reference)
- [ ] Minimal base map (light gray/white)
- [ ] Data table alternative (accessibility)
- [ ] Labels ≥ 11px font size
- [ ] Tooltips with detailed data

---

## Map Types

**Choropleth** (regions by value)
```tsx
<GeoJSON 
  data={regions} 
  style={(feature) => ({
    fillColor: getColor(feature.properties.value),
    fillOpacity: 0.85,
    color: '#787878',
    weight: 1,
  })} 
/>
```

**Point/Marker** (locations)
```tsx
<CircleMarker
  center={[lat, lng]}
  radius={8 + (value / 50)}
  fillColor="#7823DC"
  fillOpacity={0.7}
  color="#FFFFFF"
  weight={2}
/>
```

**Static (slides)**
```tsx
<ComposableMap>
  <Geographies geography={geoUrl}>
    {({ geographies }) =>
      geographies.map(geo => (
        <Geography 
          geography={geo} 
          fill="#E6E6E6" 
          stroke="#FFFFFF" 
        />
      ))
    }
  </Geographies>
</ComposableMap>
```

---

## DO ✅

- Use KDS sequential scale (#F5F5F5 → #7823DC)
- Keep base maps minimal (light gray/white)
- Include legend and scale
- Add tooltips with data
- Annotate key insights
- Provide data table alternative
- Use ≥ 11px fonts
- Test for colorblind accessibility

## DON'T ❌

- Use rainbow color scales
- Use traffic light colors (red/yellow/green)
- Use non-Kearney colors
- Overcrowd with labels
- Show unnecessary detail (roads, buildings)
- Forget legend or scale
- Use fonts < 11px
- Rely solely on color

---

## Typography

```typescript
title: '18px, Semibold, #1E1E1E'
cityLabel: '12px, Semibold, #1E1E1E'
valueLabel: '11px, Regular, #787878'
legend: '11px, Regular, #787878'
```

---

## Accessibility Checklist

- [ ] Color contrast ≥ 4.5:1
- [ ] Colorblind simulator tested
- [ ] Data table provided
- [ ] ARIA labels on map container
- [ ] Keyboard navigation works
- [ ] Touch targets ≥ 44px
- [ ] Legend doesn't rely on color alone
- [ ] Alt text describes key insights

---

## Common Use Cases

| Need | Map Type | Color |
|------|----------|-------|
| Revenue by territory | Choropleth | Sequential scale |
| Office locations | Point map | Categorical + size |
| Customer density | Heatmap | Purple gradient |
| Distribution routes | Flow map | Line weight by volume |
| Market size | Choropleth | Sequential scale |
| Site selection | Point map | Multi-criteria sizing |

---

## Quick Setup (Leaflet)

```tsx
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

<MapContainer center={[39.8283, -98.5795]} zoom={4}>
  <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png" />
  <GeoJSON data={yourData} style={styleFunction} />
</MapContainer>
```

---

## Legend Template

```tsx
<div className="absolute bottom-4 right-4 bg-background/95 p-4 rounded-lg border shadow-lg">
  <h4 className="text-sm font-semibold mb-2">Revenue ($M)</h4>
  <div className="space-y-1">
    {CHOROPLETH_SCALE.map((color, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="w-8 h-4 rounded" style={{ backgroundColor: color }} />
        <span className="text-xs">{labels[i]}</span>
      </div>
    ))}
  </div>
</div>
```

---

## FORBIDDEN Colors

❌ Never use these:
- Rainbow scales
- Traffic lights (red/yellow/green)
- Cyan (#4ECDC4)
- Coral (#FF6B6B)
- Any non-Kearney colors

✅ Always use:
- KDS sequential scale
- KDS categorical colors
- Grays for base maps

---

## Full Documentation

**Complete guide**: `/KDS_AI_GUIDELINES.md` → Section 10: "Mapping & Geospatial Analytics"  
**Visual example**: `/src/app/components/kearney/MapExample.tsx`  
**Live demo**: Open app → "Maps" tab

---

**Last Updated**: January 2, 2026  
**Version**: 1.1
