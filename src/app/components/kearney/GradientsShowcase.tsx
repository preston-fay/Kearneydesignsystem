import { Card } from '../ui/card';

export function GradientsShowcase() {
  const progressiveGradients = [
    {
      name: 'Purple Intensity',
      from: '#E0D2FA',
      to: '#7823DC',
      description: 'Light purple to primary purple - ideal for highlighting intensity or progression',
    },
    {
      name: 'Purple Depth',
      from: '#9150E1',
      to: '#1E1E1E',
      description: 'Mid purple to black - creates sophisticated depth',
    },
    {
      name: 'Gray to Purple',
      from: '#A5A5A5',
      to: '#7823DC',
      description: 'Neutral to purple - useful for transitioning from data to emphasis',
    },
    {
      name: 'Light to Dark',
      from: '#F5F5F5',
      to: '#323232',
      description: 'Subtle grayscale progression for backgrounds',
    },
    {
      name: 'Purple Spectrum',
      from: '#D7BEF5',
      via: '#9150E1',
      to: '#7823DC',
      description: 'Three-point purple gradient for rich backgrounds',
    },
    {
      name: 'Monochrome',
      from: '#FFFFFF',
      via: '#A5A5A5',
      to: '#1E1E1E',
      description: 'Full grayscale range for sophisticated neutral backgrounds',
    },
  ];

  const divergentGradients = [
    {
      name: 'Purple Divergent',
      left: '#7823DC',
      center: '#FFFFFF',
      right: '#7823DC',
      description: 'Purple edges with white center - ideal for bidirectional data',
    },
    {
      name: 'Gray to Purple Divergent',
      left: '#A5A5A5',
      center: '#E0D2FA',
      right: '#7823DC',
      description: 'Neutral to light purple to primary - shows progression from low to high',
    },
    {
      name: 'Monochrome Divergent',
      left: '#1E1E1E',
      center: '#A5A5A5',
      right: '#F5F5F5',
      description: 'Dark to light grayscale - neutral divergent scale',
    },
    {
      name: 'Accent Divergent',
      left: '#4B4B4B',
      center: '#C8A5F0',
      right: '#4B4B4B',
      description: 'Dark edges with purple center - highlights central values',
    },
  ];

  const overlayGradients = [
    {
      name: 'Purple Vignette',
      gradient: 'radial-gradient(circle, transparent 0%, rgba(120, 35, 220, 0.1) 100%)',
      description: 'Subtle purple overlay from center - adds depth without obscuring content',
    },
    {
      name: 'Dark Edge Fade',
      gradient: 'linear-gradient(to bottom, transparent 0%, rgba(30, 30, 30, 0.3) 100%)',
      description: 'Darkens bottom edge - useful for overlaying text on images',
    },
    {
      name: 'Spotlight',
      gradient: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
      description: 'Subtle top highlight - creates focus areas',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Gradient System</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          All gradients are anchored in valid Kearney colors. Gradients come in two types: 
          progressive (directional flow) and divergent (center-focused or edge-focused).
        </p>
      </div>

      {/* Progressive Gradients */}
      <section>
        <h2 className="mb-6">Progressive Gradients</h2>
        <p className="text-muted-foreground mb-6">
          Progressive gradients flow in one direction, ideal for showing movement, intensity, 
          or transformation from one state to another.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {progressiveGradients.map((gradient) => (
            <Card key={gradient.name} className="overflow-hidden">
              <div 
                className="h-32 w-full relative"
                style={{
                  background: gradient.via 
                    ? `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.via} 50%, ${gradient.to} 100%)`
                    : `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`
                }}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded">
                    <p className="text-xs">
                      {gradient.from} → {gradient.via && `${gradient.via} → `}{gradient.to}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-2">{gradient.name}</h4>
                <p className="text-sm text-muted-foreground">{gradient.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Divergent Gradients */}
      <section>
        <h2 className="mb-6">Divergent Gradients</h2>
        <p className="text-muted-foreground mb-6">
          Divergent gradients emphasize the center or edges, perfect for heatmaps, 
          highlighting ranges, or creating focal points.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {divergentGradients.map((gradient) => (
            <Card key={gradient.name} className="overflow-hidden">
              <div 
                className="h-32 w-full relative"
                style={{
                  background: `linear-gradient(90deg, ${gradient.left} 0%, ${gradient.center} 50%, ${gradient.right} 100%)`
                }}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded">
                    <p className="text-xs">
                      {gradient.left} ← {gradient.center} → {gradient.right}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-2">{gradient.name}</h4>
                <p className="text-sm text-muted-foreground">{gradient.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Overlay Gradients */}
      <section>
        <h2 className="mb-6">Overlay Gradients</h2>
        <p className="text-muted-foreground mb-6">
          Overlay gradients are semi-transparent and designed to be layered over images, 
          backgrounds, or other content to create depth and improve text legibility.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {overlayGradients.map((gradient) => (
            <Card key={gradient.name} className="overflow-hidden">
              <div className="h-32 w-full relative bg-muted">
                <div 
                  className="absolute inset-0"
                  style={{ background: gradient.gradient }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-2 rounded text-center">
                    <p className="text-sm">Sample Content</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="mb-2">{gradient.name}</h5>
                <p className="text-sm text-muted-foreground">{gradient.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <Card className="p-6">
        <h3 className="mb-4">Gradient Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="mb-3 text-primary">When to Use Gradients</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Background elements to add visual interest
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Data visualization heatmaps and intensity maps
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Hero sections and feature callouts
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Slide backgrounds for presentations
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Progress indicators and status bars
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Image overlays to improve text contrast
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-destructive">Gradient Best Practices</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Always anchor gradients to valid Kearney colors
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Use subtle gradients for backgrounds (avoid overpowering)
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Ensure text remains legible on gradient backgrounds
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't create gradients with non-Kearney colors
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't use too many gradients in one composition
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✗</span>
                Don't use harsh, high-contrast gradients for backgrounds
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Code Examples */}
      <Card className="p-6 bg-muted/50">
        <h3 className="mb-4">CSS Gradient Examples</h3>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-muted-foreground mb-2">Progressive (135deg):</p>
            <code className="block bg-background p-3 rounded border">
              background: linear-gradient(135deg, #E0D2FA 0%, #7823DC 100%);
            </code>
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Three-point Progressive:</p>
            <code className="block bg-background p-3 rounded border">
              background: linear-gradient(135deg, #D7BEF5 0%, #9150E1 50%, #7823DC 100%);
            </code>
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Divergent (horizontal):</p>
            <code className="block bg-background p-3 rounded border">
              background: linear-gradient(90deg, #A5A5A5 0%, #E0D2FA 50%, #7823DC 100%);
            </code>
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Radial Overlay:</p>
            <code className="block bg-background p-3 rounded border">
              background: radial-gradient(circle, transparent 0%, rgba(120, 35, 220, 0.1) 100%);
            </code>
          </div>
        </div>
      </Card>
    </div>
  );
}
