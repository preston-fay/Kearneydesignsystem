import { Card } from '../ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

export function DesignSystemOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Kearney Design System</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A comprehensive design system for creating beautiful, consistent deliverables across all formats: 
          data visualizations, reports, slides, applications, and dashboards.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="mb-4">Key Principles</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <strong>Brand-First Color System</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  All colors are anchored in official Kearney brand palette with proper contrast ratios
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <strong>Light & Dark Themes</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Full support for both themes with optimized legibility in all contexts
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <strong>Progressive & Divergent Gradients</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Sophisticated gradient system always anchored to valid Kearney colors
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <strong>Clean Data Visualization</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  No gridlines, minimal decoration, maximum insight clarity
                </p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4">Best Practices</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Use the 10-color chart palette in order for multi-series data</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Prefer bar charts, line charts, and area charts over pie charts</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <span>Never use gridlines in any visualization</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <span>Use pie charts and gauge charts sparingly - only when necessary</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Ensure text contrast meets WCAG AA standards (4.5:1 minimum)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Use additional colors sparingly - they're accents, not primaries</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <h3 className="mb-4">Deliverable Coverage</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="mb-2">Data Visualizations</h5>
            <p className="text-sm text-muted-foreground">
              Charts, graphs, and infographics with clean design and no gridlines
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="mb-2">Reporting</h5>
            <p className="text-sm text-muted-foreground">
              Professional reports with data tables, KPIs, and insights
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="mb-2">Presentations</h5>
            <p className="text-sm text-muted-foreground">
              Slide decks with consistent layouts and visual hierarchy
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="mb-2">Applications</h5>
            <p className="text-sm text-muted-foreground">
              Web apps and dashboards with interactive components
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4">Using This Design System</h3>
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <p>
            This design system serves as a comprehensive reference that can be shared with LLMs 
            to ensure consistent, on-brand output across all Kearney deliverables.
          </p>
          <p>
            All components are production-ready, accessible, and optimized for both light and dark themes. 
            The color system is carefully calibrated to ensure text legibility and visual hierarchy 
            in any context.
          </p>
          <p>
            Navigate through the tabs above to explore:
          </p>
          <ul>
            <li><strong>Colors</strong> - Complete palette with hex codes and usage guidelines</li>
            <li><strong>Gradients</strong> - Progressive and divergent gradient combinations</li>
            <li><strong>Typography</strong> - Type scale and hierarchy examples</li>
            <li><strong>Components</strong> - UI components for applications and dashboards</li>
            <li><strong>Charts</strong> - Data visualization examples with best practices</li>
            <li><strong>Data Viz Guide</strong> - Detailed guidelines for creating visualizations</li>
            <li><strong>Dashboard</strong> - Full dashboard example showcasing all elements</li>
            <li><strong>Slides</strong> - Presentation slide layouts and templates</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
