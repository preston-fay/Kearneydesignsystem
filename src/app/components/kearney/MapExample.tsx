import { Card } from '../ui/card';
import { MapPin, TrendingUp } from 'lucide-react';

/**
 * MapExample Component
 * 
 * Demonstrates Kearney Design System standards for geospatial visualizations.
 * This is a static example showing proper styling - replace with actual map library in production.
 * 
 * For interactive maps, use:
 * - react-leaflet for general use
 * - mapbox-gl for advanced features
 * - react-simple-maps for slides
 */

const LOCATIONS = [
  { id: 1, name: 'New York', lat: 40.7128, lng: -74.0060, revenue: 250, growth: 15, type: 'primary' },
  { id: 2, name: 'Los Angeles', lat: 34.0522, lng: -118.2437, revenue: 180, growth: 8, type: 'secondary' },
  { id: 3, name: 'Chicago', lat: 41.8781, lng: -87.6298, revenue: 150, growth: 12, type: 'secondary' },
  { id: 4, name: 'Houston', lat: 29.7604, lng: -95.3698, revenue: 120, growth: 10, type: 'tertiary' },
  { id: 5, name: 'Phoenix', lat: 33.4484, lng: -112.0740, revenue: 95, growth: 18, type: 'tertiary' },
];

// Kearney color scale for maps
const MAP_COLORS = {
  primary: '#7823DC',      // Top tier
  secondary: '#AF7DEB',    // Mid tier
  tertiary: '#E0D2FA',     // Lower tier
  inactive: '#D2D2D2',     // Inactive
};

// Sequential scale for choropleth
const CHOROPLETH_SCALE = [
  '#F5F5F5',  // Very low
  '#E6E6E6',  
  '#D2D2D2',  
  '#E0D2FA',  // Medium
  '#C8A5F0',  
  '#AF7DEB',  
  '#9150E1',  
  '#7823DC',  // Highest
];

export function MapExample() {
  const totalRevenue = LOCATIONS.reduce((sum, loc) => sum + loc.revenue, 0);

  return (
    <div className="space-y-6">
      {/* Point Map Example */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="mb-1">Office Network Performance</h3>
            <p className="text-sm text-muted-foreground">
              Revenue by location (Q4 2024)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: '#7823DC' }} />
            <span className="text-sm font-semibold">
              {LOCATIONS.length} Locations
            </span>
          </div>
        </div>

        {/* Map visualization placeholder */}
        <div className="relative bg-muted/20 rounded-lg border-2 border-dashed" style={{ height: '400px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-md">
              <MapPin className="w-12 h-12 mx-auto mb-3" style={{ color: '#7823DC' }} />
              <h4 className="mb-2">Interactive Map Placeholder</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Replace this div with react-leaflet or mapbox-gl MapContainer.
                See KDS_AI_GUIDELINES.md for implementation details.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                npm install react-leaflet leaflet
              </code>
            </div>
          </div>

          {/* Legend overlay (shows proper positioning) */}
          <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur p-4 rounded-lg border shadow-lg max-w-[200px]">
            <h4 className="text-sm font-semibold mb-3">Location Tiers</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: MAP_COLORS.primary }} />
                <span className="text-xs">Primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: MAP_COLORS.secondary }} />
                <span className="text-xs">Secondary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: MAP_COLORS.tertiary }} />
                <span className="text-xs">Tertiary</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 pt-3 border-t">
              Circle size = revenue
            </p>
          </div>
        </div>

        {/* Data table (accessible alternative) */}
        <details className="mt-4">
          <summary className="text-sm font-semibold cursor-pointer hover:text-primary">
            View data table (accessible alternative)
          </summary>
          <div className="mt-3 rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="text-left py-3 px-4 font-semibold">Location</th>
                  <th className="text-right py-3 px-4 font-semibold">Revenue ($M)</th>
                  <th className="text-right py-3 px-4 font-semibold">Growth</th>
                  <th className="text-left py-3 px-4 font-semibold">Tier</th>
                </tr>
              </thead>
              <tbody>
                {LOCATIONS.map((loc) => (
                  <tr key={loc.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4">{loc.name}</td>
                    <td className="text-right py-3 px-4 font-medium">${loc.revenue}M</td>
                    <td className="text-right py-3 px-4">
                      <div className="flex items-center justify-end gap-1">
                        <TrendingUp className="w-3 h-3" style={{ color: '#7823DC' }} />
                        <span style={{ color: '#7823DC' }}>+{loc.growth}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: MAP_COLORS[loc.type] }} 
                        />
                        <span className="text-xs capitalize">{loc.type}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-muted/30 font-semibold">
                  <td className="py-3 px-4">Total</td>
                  <td className="text-right py-3 px-4">${totalRevenue}M</td>
                  <td className="text-right py-3 px-4" colSpan={2}>
                    <span className="text-xs text-muted-foreground">
                      Avg: +{Math.round(LOCATIONS.reduce((sum, l) => sum + l.growth, 0) / LOCATIONS.length)}%
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </details>
      </Card>

      {/* Choropleth Color Scale Reference */}
      <Card className="p-6">
        <h3 className="mb-4">Choropleth Color Scale (Sequential)</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Use this color scale for choropleth maps (regions colored by value).
          Always progresses from gray (low) to Kearney purple (high).
        </p>

        <div className="grid grid-cols-8 gap-2">
          {CHOROPLETH_SCALE.map((color, i) => (
            <div key={i} className="text-center">
              <div 
                className="w-full h-20 rounded-lg border-2 mb-2"
                style={{ 
                  backgroundColor: color,
                  borderColor: '#787878'
                }}
              />
              <div className="text-xs font-medium mb-1">
                {Math.round((i / (CHOROPLETH_SCALE.length - 1)) * 100)}%
              </div>
              <code className="text-[10px] text-muted-foreground">
                {color}
              </code>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 border rounded-lg bg-muted/20">
          <h4 className="text-sm font-semibold mb-2">Usage Example:</h4>
          <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
            <code>{`const CHOROPLETH_SCALE = [
  '#F5F5F5',  // 0-12.5%
  '#E6E6E6',  // 12.5-25%
  '#D2D2D2',  // 25-37.5%
  '#E0D2FA',  // 37.5-50%
  '#C8A5F0',  // 50-62.5%
  '#AF7DEB',  // 62.5-75%
  '#9150E1',  // 75-87.5%
  '#7823DC',  // 87.5-100%
];`}</code>
          </pre>
        </div>
      </Card>

      {/* Map Best Practices */}
      <Card className="p-6">
        <h3 className="mb-4">Geospatial Analytics Best Practices</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <span className="text-lg">✅</span>
              DO
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Use Kearney color scales exclusively</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Keep base maps minimal (light gray/white)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Always include legend and scale bar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Provide data table alternative</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Use appropriate zoom level for analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Add tooltips with detailed data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Annotate key geographic insights</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <span className="text-lg">❌</span>
              DON'T
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                <span>Use rainbow or traffic light color scales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                <span>Overcrowd map with unnecessary labels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                <span>Show excessive detail (roads, buildings)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                <span>Use non-Kearney colors for data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                <span>Forget legend or scale indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                <span>Use fonts smaller than 11px</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                <span>Rely solely on color for critical info</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 border-l-4 rounded-lg" style={{ 
          borderLeftColor: '#7823DC',
          backgroundColor: 'hsl(var(--muted))'
        }}>
          <h4 className="font-semibold mb-2">Map Library Recommendations</h4>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="font-medium">Interactive dashboards:</span>
              <code className="block text-xs mt-1 text-muted-foreground">react-leaflet</code>
            </div>
            <div>
              <span className="font-medium">Advanced features:</span>
              <code className="block text-xs mt-1 text-muted-foreground">mapbox-gl</code>
            </div>
            <div>
              <span className="font-medium">Presentation slides:</span>
              <code className="block text-xs mt-1 text-muted-foreground">react-simple-maps</code>
            </div>
            <div>
              <span className="font-medium">3D visualization:</span>
              <code className="block text-xs mt-1 text-muted-foreground">@deck.gl/react</code>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
