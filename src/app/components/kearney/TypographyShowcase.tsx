import { Card } from '../ui/card';

export function TypographyShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Typography</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Clean, professional typography system optimized for readability across all deliverable types.
        </p>
      </div>

      {/* Type Scale */}
      <section>
        <h2 className="mb-6">Type Scale</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h1>Heading 1 - Display Large</h1>
            <p className="text-sm text-muted-foreground mt-2">
              2.5rem (40px) • Bold (700) • Line height 1.2 • Letter spacing -0.02em
            </p>
            <p className="text-muted-foreground mt-4">
              Used for page titles, primary headlines, and hero content
            </p>
          </Card>

          <Card className="p-6">
            <h2>Heading 2 - Section Header</h2>
            <p className="text-sm text-muted-foreground mt-2">
              2rem (32px) • Bold (700) • Line height 1.3 • Letter spacing -0.01em
            </p>
            <p className="text-muted-foreground mt-4">
              Used for section headers, slide titles, and report sections
            </p>
          </Card>

          <Card className="p-6">
            <h3>Heading 3 - Subsection</h3>
            <p className="text-sm text-muted-foreground mt-2">
              1.5rem (24px) • Semibold (600) • Line height 1.4
            </p>
            <p className="text-muted-foreground mt-4">
              Used for subsections, card titles, and component headers
            </p>
          </Card>

          <Card className="p-6">
            <h4>Heading 4 - Component Title</h4>
            <p className="text-sm text-muted-foreground mt-2">
              1.25rem (20px) • Semibold (600) • Line height 1.4
            </p>
            <p className="text-muted-foreground mt-4">
              Used for component titles, list headers, and emphasis
            </p>
          </Card>

          <Card className="p-6">
            <h5>Heading 5 - Small Header</h5>
            <p className="text-sm text-muted-foreground mt-2">
              1rem (16px) • Semibold (600) • Line height 1.5
            </p>
            <p className="text-muted-foreground mt-4">
              Used for small headers, data labels, and table headers
            </p>
          </Card>

          <Card className="p-6">
            <h6>Heading 6 - Tiny Header</h6>
            <p className="text-sm text-muted-foreground mt-2">
              0.875rem (14px) • Semibold (600) • Line height 1.5
            </p>
            <p className="text-muted-foreground mt-4">
              Used for metadata, captions, and fine print headers
            </p>
          </Card>
        </div>
      </section>

      {/* Body Text */}
      <section>
        <h2 className="mb-6">Body Text</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-3">Paragraph - Large</h4>
            <p className="text-lg">
              This is large body text at 1.125rem (18px). It's used for introductory paragraphs, 
              lead text, and important content that needs emphasis. Line height is 1.6 for optimal readability.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              1.125rem (18px) • Normal (400) • Line height 1.6
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3">Paragraph - Regular</h4>
            <p>
              This is regular body text at 1rem (16px). It's the default for paragraphs, descriptions, 
              and general content. The line height of 1.6 ensures comfortable reading across different contexts.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              1rem (16px) • Normal (400) • Line height 1.6
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3">Paragraph - Small</h4>
            <p className="text-sm">
              This is small body text at 0.875rem (14px). It's used for secondary information, 
              captions, metadata, and supporting details that don't need primary emphasis.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              0.875rem (14px) • Normal (400) • Line height 1.5
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-3">Paragraph - Extra Small</h4>
            <p className="text-xs">
              This is extra small text at 0.75rem (12px). It's used for fine print, legal text, 
              timestamps, and auxiliary information. Use sparingly for best readability.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              0.75rem (12px) • Normal (400) • Line height 1.4
            </p>
          </Card>
        </div>
      </section>

      {/* Text Styles */}
      <section>
        <h2 className="mb-6">Text Styles & Emphasis</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h5 className="mb-2">Font Weights</h5>
              <div className="space-y-2">
                <p style={{ fontWeight: 400 }}>Regular (400) - Default body text and descriptions</p>
                <p style={{ fontWeight: 500 }}>Medium (500) - Labels, buttons, and subtle emphasis</p>
                <p style={{ fontWeight: 600 }}>Semibold (600) - Headers, important callouts</p>
                <p style={{ fontWeight: 700 }}>Bold (700) - Major headlines and strong emphasis</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h5 className="mb-2">Text Colors</h5>
              <div className="space-y-2">
                <p className="text-foreground">Foreground - Primary text color</p>
                <p className="text-muted-foreground">Muted Foreground - Secondary text, descriptions</p>
                <p className="text-primary">Primary - Kearney purple for links and emphasis</p>
                <p className="text-destructive">Destructive - Error states and warnings</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h5 className="mb-2">Text Decoration</h5>
              <div className="space-y-2">
                <p><em>Italic text for emphasis or citations</em></p>
                <p><strong>Bold text for strong importance</strong></p>
                <p><u>Underlined text for links (use sparingly)</u></p>
                <p className="uppercase">Uppercase for labels and categories</p>
                <p className="capitalize">Capitalize for proper nouns</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Usage in Context */}
      <section>
        <h2 className="mb-6">Typography in Context</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="mb-4">Report Format</h3>
            <div className="space-y-4">
              <div>
                <h2 className="mb-2">Executive Summary</h2>
                <p className="text-muted-foreground mb-4">
                  This example shows typography hierarchy in a report format. The main heading 
                  uses H2, sections use H3, and body text flows naturally.
                </p>
                <h3 className="mb-2">Key Findings</h3>
                <p className="mb-2">
                  Market analysis reveals significant opportunities in the digital transformation 
                  space, with 78% of organizations planning increased investment.
                </p>
                <p className="text-sm text-muted-foreground">
                  Source: Industry Survey 2026
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Dashboard Card</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h1 className="text-primary">$2.4M</h1>
                  <span className="text-sm text-green-600">+12.5%</span>
                </div>
                <h5 className="text-muted-foreground mb-3">Total Revenue</h5>
                <p className="text-sm">
                  Revenue increased compared to last quarter, driven by strong performance 
                  in enterprise sales and recurring subscriptions.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Data Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Metric</th>
                    <th className="text-right py-2">Value</th>
                    <th className="text-right py-2">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Revenue</td>
                    <td className="text-right">$2.4M</td>
                    <td className="text-right text-green-600">+12.5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Customers</td>
                    <td className="text-right">1,247</td>
                    <td className="text-right text-green-600">+8.2%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Churn Rate</td>
                    <td className="text-right">2.1%</td>
                    <td className="text-right text-red-600">-0.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Slide Content</h3>
            <div className="space-y-4">
              <h2 className="mb-3">Strategic Recommendations</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Accelerate digital transformation initiatives</li>
                <li>Expand market presence in emerging regions</li>
                <li>Strengthen customer retention programs</li>
                <li>Invest in advanced analytics capabilities</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-6 pt-4 border-t">
                Slide 12 of 24 | Q4 2026 Strategy Review
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Guidelines */}
      <Card className="p-6 bg-muted/50">
        <h3 className="mb-4">Typography Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Best Practices</h5>
            <ul className="space-y-2 text-sm">
              <li>• Use consistent hierarchy throughout deliverables</li>
              <li>• Maintain 1.5-1.6 line height for body text</li>
              <li>• Limit line length to 60-80 characters for readability</li>
              <li>• Use letter spacing sparingly on headlines only</li>
              <li>• Ensure sufficient contrast (min 4.5:1 for body text)</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3">Common Applications</h5>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Reports:</strong> H2 for sections, body for content</li>
              <li>• <strong>Dashboards:</strong> Large numbers, small labels</li>
              <li>• <strong>Slides:</strong> H2-H3 for titles, bullets for points</li>
              <li>• <strong>Tables:</strong> Small text (14px) for dense data</li>
              <li>• <strong>Charts:</strong> 12-14px for axes and labels</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
