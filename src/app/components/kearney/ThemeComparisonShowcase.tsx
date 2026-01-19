import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { TrendingUp, Check, AlertCircle } from 'lucide-react';

export function ThemeComparisonShowcase() {
  const sampleData = [
    { category: 'Q1', value: 45 },
    { category: 'Q2', value: 62 },
    { category: 'Q3', value: 58 },
    { category: 'Q4', value: 71 },
  ];

  const chartColors = {
    chart1: '#D2D2D2',
    chart2: '#A5A6A5',
    chart3: '#787878',
    chart10: '#7823DC',
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Light & Dark Theme Specifications</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          All KDS components must work flawlessly in both light and dark themes. 
          This page demonstrates theme-aware components and proper implementation patterns.
        </p>
      </div>

      {/* Theme Principles */}
      <section>
        <h2 className="mb-6">Theme Principles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h4 className="mb-3 text-primary">Consistent Brand Identity</h4>
            <p className="text-sm text-muted-foreground">
              Kearney Purple remains the primary accent color in both themes. 
              The gray-to-purple palette works in any viewing context.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3 text-primary">WCAG AA Compliance</h4>
            <p className="text-sm text-muted-foreground">
              All text maintains ≥4.5:1 contrast ratio. Light theme: 16.9:1 (body), 
              5.2:1 (purple). Dark theme: 16.9:1 (body), 7.1:1 (purple).
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3 text-primary">Automatic Adaptation</h4>
            <p className="text-sm text-muted-foreground">
              Components use CSS variables for backgrounds and text, but explicit 
              hex colors for data visualizations to maintain consistency.
            </p>
          </Card>
        </div>
      </section>

      {/* Color Swatches */}
      <section>
        <h2 className="mb-6">Core Theme Colors</h2>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Light Theme */}
          <Card className="p-6">
            <h3 className="mb-6">Light Theme (Default)</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6' }}>
                <div>
                  <div className="font-medium" style={{ color: '#1E1E1E' }}>Background</div>
                  <div className="text-sm" style={{ color: '#787878' }}>#FFFFFF</div>
                </div>
                <div className="w-16 h-16 rounded border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E6E6E6' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#F5F5F5' }}>
                <div>
                  <div className="font-medium" style={{ color: '#1E1E1E' }}>Foreground</div>
                  <div className="text-sm" style={{ color: '#787878' }}>#1E1E1E</div>
                </div>
                <div className="w-16 h-16 rounded border" style={{ backgroundColor: '#1E1E1E' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#E0D2FA' }}>
                <div>
                  <div className="font-medium" style={{ color: '#1E1E1E' }}>Primary</div>
                  <div className="text-sm" style={{ color: '#1E1E1E' }}>#7823DC</div>
                </div>
                <div className="w-16 h-16 rounded" style={{ backgroundColor: '#7823DC' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#F5F5F5' }}>
                <div>
                  <div className="font-medium" style={{ color: '#1E1E1E' }}>Muted</div>
                  <div className="text-sm" style={{ color: '#787878' }}>#E6E6E6</div>
                </div>
                <div className="w-16 h-16 rounded border" style={{ backgroundColor: '#E6E6E6', borderColor: '#D2D2D2' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#F5F5F5' }}>
                <div>
                  <div className="font-medium" style={{ color: '#1E1E1E' }}>Muted Foreground</div>
                  <div className="text-sm" style={{ color: '#787878' }}>#787878</div>
                </div>
                <div className="w-16 h-16 rounded" style={{ backgroundColor: '#787878' }} />
              </div>
            </div>

            <div className="mt-6 p-4 rounded" style={{ backgroundColor: '#E0D2FA' }}>
              <p className="text-sm font-medium mb-2" style={{ color: '#1E1E1E' }}>Use For:</p>
              <ul className="text-sm space-y-1" style={{ color: '#1E1E1E' }}>
                <li>• Printed deliverables</li>
                <li>• Client presentations</li>
                <li>• Formal reports</li>
                <li>• Maximum data detail</li>
              </ul>
            </div>
          </Card>

          {/* Dark Theme */}
          <Card className="p-6 dark" style={{ backgroundColor: '#1E1E1E' }}>
            <h3 className="mb-6" style={{ color: '#FFFFFF' }}>Dark Theme</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#323232' }}>
                <div>
                  <div className="font-medium" style={{ color: '#FFFFFF' }}>Background</div>
                  <div className="text-sm" style={{ color: '#A5A5A5' }}>#1E1E1E</div>
                </div>
                <div className="w-16 h-16 rounded border" style={{ backgroundColor: '#1E1E1E', borderColor: '#4B4B4B' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#323232' }}>
                <div>
                  <div className="font-medium" style={{ color: '#FFFFFF' }}>Foreground</div>
                  <div className="text-sm" style={{ color: '#A5A5A5' }}>#FFFFFF</div>
                </div>
                <div className="w-16 h-16 rounded border" style={{ backgroundColor: '#FFFFFF', borderColor: '#4B4B4B' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#7823DC' }}>
                <div>
                  <div className="font-medium" style={{ color: '#FFFFFF' }}>Primary</div>
                  <div className="text-sm" style={{ color: '#E0D2FA' }}>#9150E1</div>
                </div>
                <div className="w-16 h-16 rounded" style={{ backgroundColor: '#9150E1' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#323232' }}>
                <div>
                  <div className="font-medium" style={{ color: '#FFFFFF' }}>Muted</div>
                  <div className="text-sm" style={{ color: '#A5A5A5' }}>#4B4B4B</div>
                </div>
                <div className="w-16 h-16 rounded border" style={{ backgroundColor: '#4B4B4B', borderColor: '#787878' }} />
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: '#323232' }}>
                <div>
                  <div className="font-medium" style={{ color: '#FFFFFF' }}>Muted Foreground</div>
                  <div className="text-sm" style={{ color: '#A5A5A5' }}>#A5A5A5</div>
                </div>
                <div className="w-16 h-16 rounded" style={{ backgroundColor: '#A5A5A5' }} />
              </div>
            </div>

            <div className="mt-6 p-4 rounded" style={{ backgroundColor: '#7823DC' }}>
              <p className="text-sm font-medium mb-2" style={{ color: '#FFFFFF' }}>Use For:</p>
              <ul className="text-sm space-y-1" style={{ color: '#FFFFFF' }}>
                <li>• Digital dashboards</li>
                <li>• Evening presentations</li>
                <li>• Extended screen time</li>
                <li>• Reduced eye strain</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Component Examples */}
      <section>
        <h2 className="mb-6">Component Examples in Current Theme</h2>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Cards & Badges */}
          <Card className="p-6">
            <h4 className="mb-4">Cards & Status Indicators</h4>
            <div className="space-y-4">
              <Card className="p-4 border-primary/20 bg-primary/5">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-primary">Key Metric</h5>
                  <Badge style={{ backgroundColor: '#7823DC', color: '#FFFFFF' }}>
                    Active
                  </Badge>
                </div>
                <p className="text-2xl font-semibold mb-1">$2.4M</p>
                <p className="text-sm text-muted-foreground">+12.5% from last quarter</p>
              </Card>

              <div className="flex gap-2 flex-wrap">
                <Badge style={{ backgroundColor: '#7823DC', color: '#FFFFFF' }}>
                  <Check className="w-3 h-3 mr-1" />
                  On Track
                </Badge>
                <Badge style={{ backgroundColor: '#787878', color: '#FFFFFF' }}>
                  <AlertCircle className="w-3 h-3 mr-1" />
                  At Risk
                </Badge>
                <Badge style={{ backgroundColor: '#4B4B4B', color: '#FFFFFF' }}>
                  Delayed
                </Badge>
              </div>

              <Progress value={67} className="h-2" />
              
              <div className="flex gap-2">
                <Button>Primary Action</Button>
                <Button variant="outline">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
          </Card>

          {/* Charts */}
          <Card className="p-6">
            <h4 className="mb-4">Data Visualization</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sampleData}>
                <XAxis 
                  dataKey="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {sampleData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 3 ? chartColors.chart10 : chartColors.chart3} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Charts use explicit Kearney colors that work in both themes
            </p>
          </Card>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="mb-6">Typography Hierarchy</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h1>Heading 1 - Display</h1>
              <p className="text-sm text-muted-foreground">48-60px, semibold, used for hero sections</p>
            </div>
            <div>
              <h2>Heading 2 - Section</h2>
              <p className="text-sm text-muted-foreground">32-36px, semibold, section headers</p>
            </div>
            <div>
              <h3>Heading 3 - Subsection</h3>
              <p className="text-sm text-muted-foreground">24-28px, semibold, subsection headers</p>
            </div>
            <div>
              <h4>Heading 4 - Component Title</h4>
              <p className="text-sm text-muted-foreground">18-20px, semibold, card/component titles</p>
            </div>
            <div>
              <p>Body text uses 16px regular weight with currentColor (inherits theme foreground)</p>
              <p className="text-sm text-muted-foreground">Secondary text uses muted-foreground for reduced emphasis</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Implementation Guide */}
      <section>
        <h2 className="mb-6">Implementation Guidelines</h2>
        
        <div className="space-y-6">
          <Card className="p-6 border-primary/30 bg-primary/5">
            <h4 className="mb-4 flex items-center gap-2 text-primary">
              <Check className="w-5 h-5" />
              Theme-Aware Components (Use CSS Variables)
            </h4>
            <div className="space-y-3 text-sm">
              <div className="font-mono bg-background p-3 rounded border">
                <div className="text-muted-foreground">// Backgrounds</div>
                <div>&lt;div className="bg-background"&gt;</div>
                <div>&lt;Card className="bg-card"&gt;</div>
                <div>&lt;div className="bg-muted"&gt;</div>
              </div>
              <div className="font-mono bg-background p-3 rounded border">
                <div className="text-muted-foreground">// Text</div>
                <div>&lt;p className="text-foreground"&gt;</div>
                <div>&lt;span className="text-muted-foreground"&gt;</div>
                <div>&lt;h1 className="text-primary"&gt;</div>
              </div>
              <div className="font-mono bg-background p-3 rounded border">
                <div className="text-muted-foreground">// Interactive States</div>
                <div>className="hover:bg-muted/50 focus:ring-ring"</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Data Visualizations (Use Explicit Colors)
            </h4>
            <div className="space-y-3 text-sm">
              <div className="font-mono bg-muted p-3 rounded">
                <div className="text-muted-foreground">// Always use hex codes for charts</div>
                <div>&lt;Bar fill="#7823DC" /&gt;</div>
                <div>&lt;Line stroke="#787878" strokeWidth={'{2}'} /&gt;</div>
                <div>&lt;Area fill="#C8A5F0" fillOpacity={'{0.2}'} /&gt;</div>
              </div>
              <div className="font-mono bg-muted p-3 rounded">
                <div className="text-muted-foreground">// Chart text should use currentColor</div>
                <div>&lt;XAxis tick={'{{fill: "currentColor"}}'} /&gt;</div>
              </div>
              <p className="text-muted-foreground">
                Chart colors remain consistent across themes for data integrity
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Testing Checklist */}
      <Card className="p-6 bg-muted/50">
        <h3 className="mb-4">Theme Testing Checklist</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Visual Verification</h5>
            <ul className="space-y-2 text-sm">
              <li>☐ All text is legible (≥ 4.5:1 contrast)</li>
              <li>☐ Charts render correctly in both themes</li>
              <li>☐ Borders and dividers are visible</li>
              <li>☐ Hover states work properly</li>
              <li>☐ Focus indicators are visible</li>
              <li>☐ Icons have appropriate contrast</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3">Brand Compliance</h5>
            <ul className="space-y-2 text-sm">
              <li>☐ Kearney Purple is primary accent</li>
              <li>☐ No traffic light colors (red/yellow/green)</li>
              <li>☐ Gray-to-purple palette maintained</li>
              <li>☐ Professional aesthetic in both themes</li>
              <li>☐ Data visualizations use KDS colors only</li>
              <li>☐ Brand identity consistent across themes</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
