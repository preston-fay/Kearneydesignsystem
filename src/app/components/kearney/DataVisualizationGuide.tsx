import { Card } from '../ui/card';
import { Check, X } from 'lucide-react';
import { AnnotatedChartsExample } from './AnnotatedChartsExample';

export function DataVisualizationGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Data Visualization Guidelines</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Comprehensive best practices for creating clear, insightful data visualizations 
          that follow Kearney design standards.
        </p>
      </div>

      {/* Annotated Charts Example */}
      <AnnotatedChartsExample />

      {/* Core Principles */}
      <section>
        <h2 className="mb-6">Core Principles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h4 className="mb-3 text-primary">Clarity First</h4>
            <p className="text-sm text-muted-foreground">
              Every visualization should communicate its message immediately. Remove any 
              element that doesn't add to understanding. No gridlines, minimal decoration, 
              maximum insight.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3 text-primary">Consistent Aesthetics</h4>
            <p className="text-sm text-muted-foreground">
              Use the Kearney color palette in the prescribed order. Maintain consistent 
              spacing, typography, and layout patterns across all visualizations in a deliverable.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3 text-primary">Accessible Design</h4>
            <p className="text-sm text-muted-foreground">
              Ensure all visualizations work in both light and dark themes. Text must have 
              minimum 4.5:1 contrast ratio. Don't rely solely on color to convey meaning.
            </p>
          </Card>
        </div>
      </section>

      {/* Chart Selection Guide */}
      <section>
        <h2 className="mb-6">Choosing the Right Chart Type</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="mb-4">Comparison</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Recommended
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Bar Charts:</strong> Comparing discrete categories or time periods</li>
                  <li><strong>Horizontal Bars:</strong> Long category names or rankings</li>
                  <li><strong>Grouped Bars:</strong> Comparing multiple metrics across categories</li>
                  <li><strong>Bullet Charts:</strong> Performance vs target comparisons</li>
                </ul>
              </div>
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  Avoid
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Pie Charts:</strong> Use only when showing simple part-to-whole (2-4 segments max)</li>
                  <li><strong>3D Charts:</strong> Never use - they distort perception</li>
                  <li><strong>Donut Charts:</strong> Less effective than bars for comparison</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Trends Over Time</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Recommended
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Line Charts:</strong> Continuous data and trends</li>
                  <li><strong>Area Charts:</strong> Emphasizing volume or magnitude</li>
                  <li><strong>Sparklines:</strong> Compact trend indicators</li>
                  <li><strong>Step Charts:</strong> Discrete changes over time</li>
                </ul>
              </div>
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  Avoid
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Multiple Pie Charts:</strong> Use stacked area or line instead</li>
                  <li><strong>Bubble Charts with Time:</strong> Hard to follow trends</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Part-to-Whole Relationships</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Recommended
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Stacked Bar Charts:</strong> Comparing composition across categories</li>
                  <li><strong>Treemaps:</strong> Hierarchical part-to-whole</li>
                  <li><strong>100% Stacked Bars:</strong> Showing proportional changes</li>
                  <li><strong>Waterfall Charts:</strong> Showing cumulative effect</li>
                </ul>
              </div>
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <span className="text-yellow-600">⚠</span>
                  Use Sparingly
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Pie Charts:</strong> Only for 2-4 simple segments, when percentages are clear</li>
                  <li><strong>Donut Charts:</strong> Same as pie, but even less effective</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Correlation & Distribution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Recommended
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Scatter Plots:</strong> Showing correlation between two variables</li>
                  <li><strong>Heatmaps:</strong> Patterns across two dimensions</li>
                  <li><strong>Box Plots:</strong> Distribution and outliers</li>
                  <li><strong>Histograms:</strong> Frequency distribution</li>
                </ul>
              </div>
              <div>
                <h5 className="mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Advanced
                </h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Violin Plots:</strong> Detailed distribution analysis</li>
                  <li><strong>Contour Plots:</strong> Density visualization</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Color Application */}
      <section>
        <h2 className="mb-6">Color Application Rules</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h4 className="mb-3">Sequential Data (1-10 series)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Always use chart colors 1-10 in order. For fewer series, use colors 1-N.
              </p>
              <div className="flex gap-2 mb-2">
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#D2D2D2' }} title="1" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#A5A6A5' }} title="2" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#787878' }} title="3" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#E0D2FA' }} title="4" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#C8A5F0' }} title="5" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#AF7DEB' }} title="6" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#4B4B4B' }} title="7" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#1E1E1E' }} title="8" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#9150E1' }} title="9" />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: '#7823DC' }} title="10" />
              </div>
              <p className="text-xs text-muted-foreground">Example: 3 series → use colors 1, 2, 3</p>
            </div>

            <div className="pt-4 border-t">
              <h4 className="mb-3">Single Metric Emphasis</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Use Kearney Purple (#7823DC) for primary metric or emphasis. Use grays for secondary data.
              </p>
            </div>

            <div className="pt-4 border-t">
              <h4 className="mb-3">Positive/Negative Values</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Use divergent color schemes: grays for neutral, purples for positive emphasis. 
                Avoid red/green (colorblind accessible).
              </p>
            </div>

            <div className="pt-4 border-t">
              <h4 className="mb-3">Heatmaps & Gradients</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Use progressive or divergent gradients anchored in Kearney colors. 
                Light to purple for intensity, gray-to-purple for ranges.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Typography in Charts */}
      <section>
        <h2 className="mb-6">Typography in Visualizations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">Font Sizes</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center">
                <span>Chart Title</span>
                <code className="px-2 py-1 bg-muted rounded">18-24px</code>
              </li>
              <li className="flex justify-between items-center">
                <span>Axis Labels</span>
                <code className="px-2 py-1 bg-muted rounded">12-14px</code>
              </li>
              <li className="flex justify-between items-center">
                <span>Data Labels</span>
                <code className="px-2 py-1 bg-muted rounded">12-14px</code>
              </li>
              <li className="flex justify-between items-center">
                <span>Legend</span>
                <code className="px-2 py-1 bg-muted rounded">12px</code>
              </li>
              <li className="flex justify-between items-center">
                <span>Tooltips</span>
                <code className="px-2 py-1 bg-muted rounded">12-13px</code>
              </li>
              <li className="flex justify-between items-center">
                <span>Annotations</span>
                <code className="px-2 py-1 bg-muted rounded">11-12px</code>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Text Guidelines</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Use sentence case for titles and labels
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Abbreviate long axis labels thoughtfully
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Right-align numeric labels for consistency
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Use consistent number formatting (K, M, B)
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                Don't rotate text more than 45 degrees
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                Don't use all caps except for acronyms
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Layout & Spacing */}
      <section>
        <h2 className="mb-6">Layout & Spacing</h2>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4">Chart Proportions</h4>
              <ul className="space-y-3 text-sm">
                <li><strong>Aspect Ratio:</strong> 16:9 for slides, 4:3 or flexible for dashboards</li>
                <li><strong>Padding:</strong> 24-32px around chart content</li>
                <li><strong>Bar Width:</strong> Maximum 80% of available space</li>
                <li><strong>Line Weight:</strong> 2-3px for primary lines, 1-2px for secondary</li>
                <li><strong>Dot Size:</strong> 4-6px radius for line chart markers</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Composition</h4>
              <ul className="space-y-3 text-sm">
                <li><strong>Title Position:</strong> Top-left or centered above chart</li>
                <li><strong>Legend Position:</strong> Bottom or right side, never obscuring data</li>
                <li><strong>Axis Offset:</strong> 8-12px from chart area</li>
                <li><strong>Multi-Chart Grid:</strong> 16-24px gap between charts</li>
                <li><strong>Whitespace:</strong> Generous - let visualizations breathe</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Interactivity */}
      <section>
        <h2 className="mb-6">Interactivity (Digital Deliverables)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h4 className="mb-3">Tooltips</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Show detailed values on hover. Include metric name, value, and context (date, category).
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Keep tooltip text concise</li>
              <li>• Use card-style design</li>
              <li>• 300-500ms delay before showing</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3">Filters</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Allow users to slice data by dimensions. Place controls above or beside visualizations.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Clear filter labels</li>
              <li>• Show selected state</li>
              <li>• Provide "reset" option</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3">Drill-down</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Enable click-to-explore for hierarchical data. Provide clear navigation breadcrumbs.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Visual click affordance</li>
              <li>• Smooth transitions</li>
              <li>• Easy return to overview</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section>
        <h2 className="mb-6">Quick Reference: Do's & Don'ts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-primary/30 bg-primary/5">
            <h4 className="mb-4 flex items-center gap-2 text-primary">
              <Check className="w-5 h-5" />
              Do's
            </h4>
            <ul className="space-y-2 text-sm">
              <li>✓ Start y-axis at zero for bar charts</li>
              <li>✓ Use consistent scales when comparing charts</li>
              <li>✓ Label axes clearly with units</li>
              <li>✓ Highlight key insights with annotations</li>
              <li>✓ Test in both light and dark modes</li>
              <li>✓ Use direct labeling when possible (vs legend)</li>
              <li>✓ Sort categories meaningfully (by value, alphabetically, etc.)</li>
              <li>✓ Include data sources and timestamps</li>
              <li>✓ Use progressive disclosure for complex data</li>
            </ul>
          </Card>

          <Card className="p-6 border-destructive/30 bg-destructive/5">
            <h4 className="mb-4 flex items-center gap-2 text-destructive">
              <X className="w-5 h-5" />
              Don'ts
            </h4>
            <ul className="space-y-2 text-sm">
              <li>✗ Never use gridlines</li>
              <li>✗ Never use dual y-axes (very confusing)</li>
              <li>✗ Don't use pie charts for more than 4 segments</li>
              <li>✗ Don't use 3D effects or shadows</li>
              <li>✗ Don't truncate y-axis to exaggerate differences</li>
              <li>✗ Don't use more than 7-8 series in one chart</li>
              <li>✗ Don't rely solely on color to differentiate</li>
              <li>✗ Don't use rainbow color schemes</li>
              <li>✗ Don't clutter with unnecessary decoration</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Accessibility */}
      <Card className="p-6 bg-muted/50">
        <h3 className="mb-4">Accessibility Checklist</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Visual Accessibility</h5>
            <ul className="space-y-2 text-sm">
              <li>☐ Text contrast ratio ≥ 4.5:1 (WCAG AA)</li>
              <li>☐ Works in both light and dark themes</li>
              <li>☐ Colorblind-friendly palette (no red/green reliance)</li>
              <li>☐ Text size ≥ 12px for all labels</li>
              <li>☐ Sufficient spacing between elements</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3">Functional Accessibility</h5>
            <ul className="space-y-2 text-sm">
              <li>☐ Keyboard navigable (for interactive charts)</li>
              <li>☐ Screen reader friendly with proper ARIA labels</li>
              <li>☐ Alternative text descriptions provided</li>
              <li>☐ Data table alternative available</li>
              <li>☐ No critical information conveyed by color alone</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}