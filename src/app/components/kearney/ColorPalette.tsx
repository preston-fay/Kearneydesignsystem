import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function ColorPalette() {
  const mainColors = [
    { name: 'Kearney Black', value: '#1E1E1E', rgb: 'RGB 30 30 30', usage: 'Primary text, dark backgrounds' },
    { name: 'Kearney White', value: '#FFFFFF', rgb: 'RGB 255 255 255', usage: 'Light backgrounds, text on dark' },
    { name: 'Kearney Gray', value: '#A5A5A5', rgb: 'RGB 165 165 165', usage: 'Secondary text, subtle elements' },
    { name: 'Kearney Purple', value: '#7823DC', rgb: 'RGB 120 35 220', usage: 'Primary brand color, CTAs, emphasis' },
  ];

  const chartColors = [
    { name: 'Chart 1', value: '#D2D2D2', rgb: 'RGB 210 210 210', order: 1 },
    { name: 'Chart 2', value: '#A5A6A5', rgb: 'RGB 165 165 165', order: 2 },
    { name: 'Chart 3', value: '#787878', rgb: 'RGB 120 120 120', order: 3 },
    { name: 'Chart 4', value: '#E0D2FA', rgb: 'RGB 224 210 250', order: 4 },
    { name: 'Chart 5', value: '#C8A5F0', rgb: 'RGB 200 165 240', order: 5 },
    { name: 'Chart 6', value: '#AF7DEB', rgb: 'RGB 175 125 235', order: 6 },
    { name: 'Chart 7', value: '#4B4B4B', rgb: 'RGB 75 75 75', order: 7 },
    { name: 'Chart 8', value: '#1E1E1E', rgb: 'RGB 30 30 30', order: 8 },
    { name: 'Chart 9', value: '#9150E1', rgb: 'RGB 145 80 225', order: 9 },
    { name: 'Chart 10', value: '#7823DC', rgb: 'RGB 120 35 220', order: 10 },
  ];

  const additionalColors = [
    { name: 'Gray 100', value: '#F5F5F5', rgb: 'RGB 245 245 245' },
    { name: 'Gray 200', value: '#E6E6E6', rgb: 'RGB 230 230 230' },
    { name: 'Gray 300', value: '#B9B9B9', rgb: 'RGB 185 185 185' },
    { name: 'Gray 400', value: '#8C8C8C', rgb: 'RGB 140 140 140' },
    { name: 'Gray 500', value: '#5F5F5F', rgb: 'RGB 95 95 95' },
    { name: 'Gray 600', value: '#323232', rgb: 'RGB 50 50 50' },
    { name: 'Purple 100', value: '#D7BEF5', rgb: 'RGB 215 190 245' },
    { name: 'Purple 200', value: '#B991EB', rgb: 'RGB 185 145 235' },
    { name: 'Purple 300', value: '#A064E6', rgb: 'RGB 160 100 230' },
    { name: 'Purple 400', value: '#8737E1', rgb: 'RGB 135 55 225' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Color Palette</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The Kearney color system is built on official brand colors with carefully considered variations 
          for different use cases. All colors maintain proper contrast ratios for accessibility.
        </p>
      </div>

      {/* Main Colors */}
      <section>
        <h2 className="mb-6">Main Colors</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainColors.map((color) => (
            <Card key={color.value} className="overflow-hidden">
              <div 
                className="h-32 w-full" 
                style={{ backgroundColor: color.value }}
              />
              <div className="p-4">
                <h4 className="mb-2">{color.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{color.value}</p>
                <p className="text-xs text-muted-foreground mb-3">{color.rgb}</p>
                <p className="text-sm">{color.usage}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Chart Colors */}
      <section>
        <div className="mb-6">
          <h2 className="mb-2">Chart Colors (In Order)</h2>
          <p className="text-muted-foreground">
            These colors should be used in the specified order for multi-series data visualizations. 
            The sequence is optimized for visual distinction and harmony.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {chartColors.map((color) => (
            <Card key={color.value} className="overflow-hidden">
              <div 
                className="h-24 w-full relative" 
                style={{ backgroundColor: color.value }}
              >
                <Badge 
                  className="absolute top-2 right-2 bg-background/90 text-foreground"
                  variant="secondary"
                >
                  {color.order}
                </Badge>
              </div>
              <div className="p-3">
                <h5 className="mb-1">{color.name}</h5>
                <p className="text-xs text-muted-foreground">{color.value}</p>
                <p className="text-xs text-muted-foreground">{color.rgb}</p>
              </div>
            </Card>
          ))}
        </div>
        <Card className="p-4 mt-4 bg-muted/50">
          <p className="text-sm">
            <strong>Usage Note:</strong> Always use these colors in the order shown (1-10). 
            For datasets with fewer than 10 series, use colors 1-N where N is your series count. 
            This ensures consistent color application across all visualizations.
          </p>
        </Card>
      </section>

      {/* Additional Colors */}
      <section>
        <div className="mb-6">
          <h2 className="mb-2">Additional Colors (Use Sparingly)</h2>
          <p className="text-muted-foreground">
            These colors are available for special use cases but should be used sparingly. 
            They complement the main palette but are not primary brand colors.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {additionalColors.map((color) => (
            <Card key={color.value} className="overflow-hidden">
              <div 
                className="h-20 w-full" 
                style={{ backgroundColor: color.value }}
              />
              <div className="p-3">
                <h5 className="mb-1">{color.name}</h5>
                <p className="text-xs text-muted-foreground">{color.value}</p>
                <p className="text-xs text-muted-foreground">{color.rgb}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <Card className="p-6">
        <h3 className="mb-4">Color Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="mb-3 text-primary">Do's</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Use Kearney Purple (#7823DC) for primary actions and key emphasis
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Follow the chart color sequence (1-10) for consistent data visualization
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Use grayscale colors for hierarchy and de-emphasis
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Ensure text has minimum 4.5:1 contrast ratio with backgrounds
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Test all designs in both light and dark themes
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-destructive">Don'ts</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't use colors outside the official palette
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't randomize chart color order - always follow 1-10 sequence
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't overuse additional colors - they're accents only
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't place low-contrast text on busy backgrounds
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't modify color values - use exact hex codes
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
