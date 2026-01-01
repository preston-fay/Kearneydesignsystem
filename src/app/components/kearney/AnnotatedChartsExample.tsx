import { Card } from '../ui/card';
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  LabelList, ReferenceLine, Label, ComposedChart
} from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, Target } from 'lucide-react';

export function AnnotatedChartsExample() {
  // Data with value labels example
  const performanceData = [
    { category: 'Digital', value: 34, target: 30 },
    { category: 'Operations', value: 28, target: 32 },
    { category: 'Strategy', value: 22, target: 25 },
    { category: 'Technology', value: 16, target: 18 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 1.8, growth: 2 },
    { month: 'Feb', revenue: 2.1, growth: 16.7 },
    { month: 'Mar', revenue: 2.3, growth: 9.5 },
    { month: 'Apr', revenue: 2.0, growth: -13 },
    { month: 'May', revenue: 2.5, growth: 25 },
    { month: 'Jun', revenue: 2.4, growth: -4 },
  ];

  const growthData = [
    { quarter: 'Q1', value: 145, label: '145M' },
    { quarter: 'Q2', value: 181, label: '181M' },
    { quarter: 'Q3', value: 167, label: '167M' },
    { quarter: 'Q4', value: 203, label: '203M' },
  ];

  const colors = {
    chart1: '#D2D2D2',
    chart2: '#A5A6A5',
    chart3: '#787878',
    chart4: '#E0D2FA',
    chart5: '#C8A5F0',
    chart6: '#AF7DEB',
    chart7: '#4B4B4B',
    chart8: '#1E1E1E',
    chart9: '#9150E1',
    chart10: '#7823DC',
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Annotated Charts & Value Labels</h2>
        <p className="text-muted-foreground max-w-3xl">
          Examples showing best practices for value labels, annotations, and reference lines.
          Labels should be included where they enhance clarity without cluttering the visualization.
        </p>
      </div>

      {/* Chart with value labels */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="mb-6">
            <h4 className="mb-2">Bar Chart with Value Labels</h4>
            <p className="text-sm text-muted-foreground">
              Value labels eliminate the need for Y-axis values
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData}>
              <XAxis 
                dataKey="quarter" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'currentColor', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" fill={colors.chart10} radius={[4, 4, 0, 0]}>
                <LabelList 
                  dataKey="label" 
                  position="top" 
                  style={{ fill: 'currentColor', fontSize: 14, fontWeight: 600 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-start gap-2 mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
            <TrendingUp className="w-4 h-4 mt-0.5" style={{ color: colors.chart10 }} />
            <p className="text-sm">
              <span className="font-semibold">+14% YoY growth</span> driven by strong Q4 performance
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-6">
            <h4 className="mb-2">Performance vs Target</h4>
            <p className="text-sm text-muted-foreground">
              Reference line shows target, labels show actual values
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData} layout="vertical">
              <XAxis 
                type="number"
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <YAxis 
                type="category"
                dataKey="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'currentColor', fontSize: 12 }}
                width={80}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <ReferenceLine 
                x={25} 
                stroke={colors.chart2} 
                strokeDasharray="3 3"
                strokeWidth={2}
              >
                <Label value="Target" position="top" fill={colors.chart2} fontSize={11} />
              </ReferenceLine>
              <Bar dataKey="value" fill={colors.chart9} radius={[0, 4, 4, 0]}>
                <LabelList 
                  dataKey="value" 
                  position="right" 
                  style={{ fill: 'currentColor', fontSize: 13, fontWeight: 600 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-start gap-2 mt-4 p-3 bg-yellow-600/5 rounded-lg border border-yellow-600/20">
            <AlertCircle className="w-4 h-4 mt-0.5 text-yellow-600" />
            <p className="text-sm">
              <span className="font-semibold">Operations below target</span> - resource allocation needed
            </p>
          </div>
        </Card>
      </div>

      {/* Line chart with annotations */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="mb-2">Revenue Trend with Insights</h3>
          <p className="text-sm text-muted-foreground">
            Inline insights and annotations highlight key data points and trends
          </p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={revenueData}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'currentColor', fontSize: 12 }}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'currentColor', fontSize: 12 }}
              tickFormatter={(value) => `$${value}M`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <ReferenceLine 
              y={2.2} 
              yAxisId="left"
              stroke={colors.chart2} 
              strokeDasharray="3 3"
              strokeWidth={2}
            >
              <Label value="2026 Target" position="right" fill={colors.chart2} fontSize={11} />
            </ReferenceLine>
            <Area
              yAxisId="left"
              type="monotone" 
              dataKey="revenue" 
              stroke={colors.chart10}
              fill={colors.chart10}
              fillOpacity={0.2}
              strokeWidth={3}
            >
              <LabelList 
                dataKey="revenue" 
                position="top" 
                formatter={(value: number) => `$${value}M`}
                style={{ fill: 'currentColor', fontSize: 12, fontWeight: 600 }}
              />
            </Area>
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke={colors.chart5}
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
        
        {/* Insights grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-green-600/5 rounded-lg border border-green-600/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <h6 className="text-green-600">Peak Performance</h6>
            </div>
            <p className="text-sm text-muted-foreground">
              May saw <span className="font-semibold text-foreground">+25% growth</span>, highest of the period
            </p>
          </div>
          
          <div className="p-4 bg-red-600/5 rounded-lg border border-red-600/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-red-600" />
              <h6 className="text-red-600">Dip in April</h6>
            </div>
            <p className="text-sm text-muted-foreground">
              April revenue declined <span className="font-semibold text-foreground">13%</span> due to seasonal factors
            </p>
          </div>
          
          <div className="p-4" style={{ backgroundColor: `${colors.chart10}10`, border: `1px solid ${colors.chart10}30`, borderRadius: '0.5rem' }}>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4" style={{ color: colors.chart10 }} />
              <h6 style={{ color: colors.chart10 }}>On Track</h6>
            </div>
            <p className="text-sm text-muted-foreground">
              Currently <span className="font-semibold text-foreground">9% above</span> YTD revenue target
            </p>
          </div>
        </div>
      </Card>

      {/* Best Practices */}
      <Card className="p-6 bg-muted/50">
        <h4 className="mb-4">Value Labels & Annotations Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h6 className="mb-3">When to Use Value Labels</h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>When precise values are important to the message</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>When the chart has few data points (≤8)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>To eliminate the need for axis gridlines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>For final values in trend charts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span>When labels would overlap or clutter the chart</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-3">Annotation Guidelines</h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Use reference lines for targets or benchmarks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Add insight cards below charts to explain key findings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Use Kearney-colored icons in insights (Lucide icons)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Keep annotations concise and action-oriented</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span>Never use emoticons - only professional icons</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
