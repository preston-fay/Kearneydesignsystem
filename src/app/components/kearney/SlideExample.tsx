import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { SlideLayout } from './SlideLayout';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowRight, Check } from 'lucide-react';

export function SlideExample() {
  const revenueData = [
    { quarter: 'Q1 2025', value: 145 },
    { quarter: 'Q2 2025', value: 181 },
    { quarter: 'Q3 2025', value: 167 },
    { quarter: 'Q4 2025', value: 203 },
  ];

  const segmentData = [
    { segment: 'Digital', value: 42, color: '#7823DC' },
    { segment: 'Operations', value: 35, color: '#C8A5F0' },
    { segment: 'Strategy', value: 28, color: '#AF7DEB' },
    { segment: 'Technology', value: 18, color: '#E0D2FA' },
  ];

  const trendData = [
    { month: 'Jan', value: 42 },
    { month: 'Feb', value: 48 },
    { month: 'Mar', value: 55 },
    { month: 'Apr', value: 52 },
    { month: 'May', value: 61 },
    { month: 'Jun', value: 68 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Presentation Slides</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Professional slide layouts for Kearney presentations. These examples demonstrate 
          proper typography hierarchy, data visualization, and brand consistency.
        </p>
      </div>

      {/* Title Slide */}
      <div>
        <h3 className="mb-4">Title Slide</h3>
        <SlideLayout slideNumber={1} totalSlides={12} footer="Q4 2026 Strategic Review">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-4xl">
              <h1 className="mb-6" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
                Digital Transformation Strategy
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Accelerating growth through technology innovation
              </p>
              <div className="flex gap-8 text-sm text-muted-foreground">
                <div>
                  <p className="mb-1">Prepared for</p>
                  <p>TechCorp Executive Team</p>
                </div>
                <div>
                  <p className="mb-1">Date</p>
                  <p>January 15, 2026</p>
                </div>
                <div>
                  <p className="mb-1">Prepared by</p>
                  <p>Kearney Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </SlideLayout>
      </div>

      {/* Key Message Slide */}
      <div>
        <h3 className="mb-4">Key Message Slide</h3>
        <SlideLayout slideNumber={2} totalSlides={12} footer="Q4 2026 Strategic Review">
          <div>
            <h2 className="mb-8">Executive Summary</h2>
            <div className="grid gap-6 max-w-5xl">
              <Card className="p-6 border-l-4 border-l-primary">
                <h4 className="mb-2 text-primary">Market Opportunity</h4>
                <p className="text-muted-foreground">
                  $2.4B addressable market with 18% projected annual growth through 2028, 
                  driven by enterprise digital transformation initiatives.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary">
                <h4 className="mb-2 text-primary">Strategic Recommendation</h4>
                <p className="text-muted-foreground">
                  Accelerate technology platform investment to capture 15% market share 
                  within 24 months through targeted acquisitions and organic development.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary">
                <h4 className="mb-2 text-primary">Expected Impact</h4>
                <p className="text-muted-foreground">
                  Projected revenue increase of $360M by Q4 2027 with 32% margin improvement 
                  through operational efficiency gains and premium positioning.
                </p>
              </Card>
            </div>
          </div>
        </SlideLayout>
      </div>

      {/* Data Slide - Chart */}
      <div>
        <h3 className="mb-4">Data Visualization Slide</h3>
        <SlideLayout slideNumber={5} totalSlides={12} footer="Q4 2026 Strategic Review">
          <div>
            <h2 className="mb-2">Revenue Growth Trajectory</h2>
            <p className="text-muted-foreground mb-8">
              Quarterly revenue demonstrates consistent upward trend with strong Q4 performance
            </p>
            <div className="bg-card rounded-lg p-8">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={revenueData}>
                  <XAxis 
                    dataKey="quarter"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'currentColor', fontSize: 14 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'currentColor', fontSize: 14 }}
                    tickFormatter={(value) => `$${value}M`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: any) => [`$${value}M`, 'Revenue']}
                  />
                  <Bar dataKey="value" fill="#7823DC" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex items-start gap-3 max-w-4xl">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong>Key Insight:</strong> Q4 revenue of $203M represents 22% year-over-year growth, 
                exceeding target by $18M driven by enterprise client expansion
              </p>
            </div>
          </div>
        </SlideLayout>
      </div>

      {/* Data Slide - Comparison */}
      <div>
        <h3 className="mb-4">Comparison Slide</h3>
        <SlideLayout slideNumber={6} totalSlides={12} footer="Q4 2026 Strategic Review">
          <div>
            <h2 className="mb-2">Revenue by Business Segment</h2>
            <p className="text-muted-foreground mb-8">
              Digital services leading growth with 42% of total revenue
            </p>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={segmentData} layout="vertical">
                    <XAxis 
                      type="number"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'currentColor', fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis 
                      type="category"
                      dataKey="segment"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'currentColor', fontSize: 14 }}
                      width={100}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value: any) => [`${value}%`, 'Share']}
                    />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                {segmentData.map((segment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: segment.color }}
                    />
                    <div>
                      <h5 className="mb-1">{segment.segment}</h5>
                      <p className="text-sm text-muted-foreground">
                        {segment.value}% of total revenue
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideLayout>
      </div>

      {/* Bullet Points Slide */}
      <div>
        <h3 className="mb-4">Bullet Points Slide</h3>
        <SlideLayout slideNumber={8} totalSlides={12} footer="Q4 2026 Strategic Review">
          <div>
            <h2 className="mb-8">Strategic Recommendations</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-6xl">
              <div>
                <h4 className="mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary">1</span>
                  </div>
                  Market Expansion
                </h4>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Enter Asia-Pacific market with localized offerings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Establish 3 regional hubs by Q3 2026
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Target $80M in new market revenue
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary">2</span>
                  </div>
                  Technology Platform
                </h4>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Accelerate AI/ML capabilities integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Enhance analytics platform with real-time insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Invest $12M in platform development
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary">3</span>
                  </div>
                  Operational Excellence
                </h4>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Streamline delivery processes for 20% efficiency gain
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Implement automated quality assurance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Reduce average project timeline by 15%
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary">4</span>
                  </div>
                  Talent Development
                </h4>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Hire 45 specialized consultants in key areas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Launch advanced certification programs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Improve retention to 92% through development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SlideLayout>
      </div>

      {/* Timeline Slide */}
      <div>
        <h3 className="mb-4">Timeline Slide</h3>
        <SlideLayout slideNumber={10} totalSlides={12} footer="Q4 2026 Strategic Review">
          <div>
            <h2 className="mb-8">Implementation Roadmap</h2>
            <div className="space-y-6 max-w-5xl">
              {[
                { quarter: 'Q1 2026', title: 'Foundation', items: ['Platform architecture design', 'Team recruitment', 'Market research'] },
                { quarter: 'Q2 2026', title: 'Development', items: ['Platform MVP launch', 'Regional hub setup', 'Process automation'] },
                { quarter: 'Q3 2026', title: 'Expansion', items: ['Market entry execution', 'Full platform rollout', 'Training programs'] },
                { quarter: 'Q4 2026', title: 'Optimization', items: ['Performance analysis', 'Process refinement', 'Scale operations'] },
              ].map((phase, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 flex-1 bg-primary/30 my-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h4>{phase.title}</h4>
                      <Badge variant="outline">{phase.quarter}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SlideLayout>
      </div>

      {/* Closing Slide */}
      <div>
        <h3 className="mb-4">Closing Slide</h3>
        <SlideLayout slideNumber={12} totalSlides={12} footer="Q4 2026 Strategic Review">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-4xl">
              <h1 className="mb-6" style={{ fontSize: '2.5rem' }}>
                Next Steps
              </h1>
              <div className="space-y-6 mb-12">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h4 className="mb-2">Immediate Actions</h4>
                  <p className="text-muted-foreground">
                    Schedule executive steering committee meeting to approve investment allocation 
                    and finalize organizational structure
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h4 className="mb-2">Follow-up</h4>
                  <p className="text-muted-foreground">
                    Detailed implementation plan and resource requirements to be delivered by January 30, 2026
                  </p>
                </Card>
              </div>
              <div className="text-muted-foreground">
                <p className="mb-2">Contact</p>
                <p>insights@kearney.com</p>
              </div>
            </div>
          </div>
        </SlideLayout>
      </div>

      {/* Guidelines */}
      <Card className="p-6 bg-muted/50 mt-8">
        <h3 className="mb-4">Slide Design Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Layout Principles</h5>
            <ul className="space-y-2 text-sm">
              <li>• Use 16:9 aspect ratio for all slides</li>
              <li>• Maintain consistent margins (64px all sides)</li>
              <li>• Limit content to 75% of slide area</li>
              <li>• Use grids for alignment and visual rhythm</li>
              <li>• Keep slide numbers and footers consistent</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3">Content Best Practices</h5>
            <ul className="space-y-2 text-sm">
              <li>• One key message per slide</li>
              <li>• Maximum 6 bullets per slide</li>
              <li>• Use visuals over text when possible</li>
              <li>• Ensure charts are readable from distance</li>
              <li>• Include clear slide titles and context</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
