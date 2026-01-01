import { Card } from '../ui/card';
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ComposedChart, Cell, LabelList, ReferenceLine, Label
} from 'recharts';

export function ChartsShowcase() {
  const monthlyData = [
    { month: 'Jan', revenue: 42, costs: 28, profit: 14 },
    { month: 'Feb', revenue: 48, costs: 31, profit: 17 },
    { month: 'Mar', revenue: 55, costs: 35, profit: 20 },
    { month: 'Apr', revenue: 52, costs: 33, profit: 19 },
    { month: 'May', revenue: 61, costs: 38, profit: 23 },
    { month: 'Jun', revenue: 68, costs: 42, profit: 26 },
  ];

  const quarterlyData = [
    { quarter: 'Q1 2025', value: 145 },
    { quarter: 'Q2 2025', value: 181 },
    { quarter: 'Q3 2025', value: 167 },
    { quarter: 'Q4 2025', value: 203 },
    { quarter: 'Q1 2026', value: 192 },
  ];

  const categoryData = [
    { category: 'Digital', value: 34 },
    { category: 'Operations', value: 28 },
    { category: 'Strategy', value: 22 },
    { category: 'Technology', value: 16 },
  ];

  const timeSeriesData = [
    { week: 'W1', actual: 42, forecast: 40, target: 45 },
    { week: 'W2', actual: 48, forecast: 47, target: 50 },
    { week: 'W3', actual: 55, forecast: 52, target: 55 },
    { week: 'W4', actual: 52, forecast: 58, target: 60 },
    { week: 'W5', actual: null, forecast: 63, target: 65 },
    { week: 'W6', actual: null, forecast: 68, target: 70 },
  ];

  const scatterData = [
    { x: 20, y: 45, z: 120 },
    { x: 35, y: 62, z: 180 },
    { x: 42, y: 58, z: 210 },
    { x: 55, y: 78, z: 250 },
    { x: 68, y: 85, z: 320 },
    { x: 75, y: 92, z: 280 },
    { x: 82, y: 88, z: 350 },
  ];

  const radarData = [
    { metric: 'Quality', value: 85 },
    { metric: 'Speed', value: 72 },
    { metric: 'Cost', value: 68 },
    { metric: 'Innovation', value: 91 },
    { metric: 'Satisfaction', value: 78 },
  ];

  const stackedData = [
    { month: 'Jan', segment1: 30, segment2: 25, segment3: 20 },
    { month: 'Feb', segment1: 35, segment2: 28, segment3: 22 },
    { month: 'Mar', segment1: 40, segment2: 32, segment3: 25 },
    { month: 'Apr', segment1: 38, segment2: 30, segment3: 24 },
    { month: 'May', segment1: 45, segment2: 35, segment3: 28 },
    { month: 'Jun', segment1: 50, segment2: 38, segment3: 30 },
  ];

  // Chart colors from theme
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
        <h1 className="mb-4">Data Visualizations</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Clean, professional charts without gridlines. Always use the Kearney color palette 
          in the specified order for multi-series data.
        </p>
      </div>

      {/* Bar Charts */}
      <section>
        <h2 className="mb-6">Bar Charts</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-6">Single Series Bar Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={quarterlyData}>
                <XAxis 
                  dataKey="quarter" 
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
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="value" fill={colors.chart10} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Best for comparing discrete categories or time periods
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-6">Multi-Series Bar Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
                <XAxis 
                  dataKey="month" 
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
                    borderRadius: '8px'
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="rect"
                />
                <Bar dataKey="revenue" fill={colors.chart10} radius={[4, 4, 0, 0]} />
                <Bar dataKey="costs" fill={colors.chart3} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Comparing multiple metrics across categories
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-6">Horizontal Bar Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={categoryData} layout="vertical">
                <XAxis 
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                />
                <YAxis 
                  type="category"
                  dataKey="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="value" fill={colors.chart9} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Ideal for rankings or long category names
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-6">Stacked Bar Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={stackedData}>
                <XAxis 
                  dataKey="month"
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
                    borderRadius: '8px'
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="rect"
                />
                <Bar dataKey="segment1" stackId="a" fill={colors.chart10} radius={[0, 0, 0, 0]} />
                <Bar dataKey="segment2" stackId="a" fill={colors.chart5} radius={[0, 0, 0, 0]} />
                <Bar dataKey="segment3" stackId="a" fill={colors.chart4} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Showing composition and total values
            </p>
          </Card>
        </div>
      </section>

      {/* Line Charts */}
      <section>
        <h2 className="mb-6">Line Charts</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-6">Single Line Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={quarterlyData}>
                <XAxis 
                  dataKey="quarter"
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
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={colors.chart10} 
                  strokeWidth={3}
                  dot={{ fill: colors.chart10, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Best for showing trends over time
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-6">Multi-Line Chart with Forecast</h4>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={timeSeriesData}>
                <XAxis 
                  dataKey="week"
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
                    borderRadius: '8px'
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="line"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke={colors.chart10} 
                  strokeWidth={3}
                  dot={{ fill: colors.chart10, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke={colors.chart5} 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: colors.chart5, r: 3 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke={colors.chart2} 
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Comparing actual vs forecast vs target
            </p>
          </Card>
        </div>
      </section>

      {/* Area Charts */}
      <section>
        <h2 className="mb-6">Area Charts</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-6">Single Area Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={quarterlyData}>
                <XAxis 
                  dataKey="quarter"
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
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={colors.chart10}
                  fill={colors.chart10}
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Emphasizing volume or magnitude
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-6">Stacked Area Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={stackedData}>
                <XAxis 
                  dataKey="month"
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
                    borderRadius: '8px'
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="rect"
                />
                <Area 
                  type="monotone" 
                  dataKey="segment1" 
                  stackId="1"
                  stroke={colors.chart10}
                  fill={colors.chart10}
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="segment2" 
                  stackId="1"
                  stroke={colors.chart5}
                  fill={colors.chart5}
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="segment3" 
                  stackId="1"
                  stroke={colors.chart4}
                  fill={colors.chart4}
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Showing part-to-whole relationships over time
            </p>
          </Card>
        </div>
      </section>

      {/* Advanced Charts */}
      <section>
        <h2 className="mb-6">Advanced Visualizations</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-6">Scatter Plot</h4>
            <ResponsiveContainer width="100%" height={280}>
              <ScatterChart>
                <XAxis 
                  type="number"
                  dataKey="x"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                  label={{ value: 'Investment', position: 'bottom', fontSize: 12 }}
                />
                <YAxis 
                  type="number"
                  dataKey="y"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                  label={{ value: 'Returns', angle: -90, position: 'left', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Scatter data={scatterData} fill={colors.chart10} />
              </ScatterChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Exploring correlations between variables
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="mb-6">Radar Chart</h4>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis 
                  dataKey="metric"
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: 'currentColor', fontSize: 10 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Radar 
                  dataKey="value" 
                  stroke={colors.chart10} 
                  fill={colors.chart10}
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Comparing multiple dimensions
            </p>
          </Card>

          <Card className="p-6 lg:col-span-2">
            <h4 className="mb-6">Combined Chart (Bar + Line)</h4>
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={monthlyData}>
                <XAxis 
                  dataKey="month"
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
                    borderRadius: '8px'
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                />
                <Bar dataKey="revenue" fill={colors.chart10} radius={[4, 4, 0, 0]} />
                <Bar dataKey="costs" fill={colors.chart3} radius={[4, 4, 0, 0]} />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke={colors.chart5} 
                  strokeWidth={3}
                  dot={{ fill: colors.chart5, r: 5 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Combining different chart types for complex insights
            </p>
          </Card>
        </div>
      </section>

      {/* Guidelines */}
      <Card className="p-6 bg-muted/50">
        <h3 className="mb-4">Chart Design Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Do's</h5>
            <ul className="space-y-2 text-sm">
              <li>✓ Use bar charts for comparing discrete categories</li>
              <li>✓ Use line charts for continuous trends over time</li>
              <li>✓ Use area charts to emphasize volume or magnitude</li>
              <li>✓ Follow the 10-color chart palette in order</li>
              <li>✓ Keep axes and labels at 12-14px for legibility</li>
              <li>✓ Use subtle tooltips for detailed information</li>
              <li>✓ Include legends when showing multiple series</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3">Don'ts</h5>
            <ul className="space-y-2 text-sm">
              <li>✗ Never include gridlines in charts</li>
              <li>✗ Don't use pie charts unless absolutely necessary</li>
              <li>✗ Don't use gauge charts except sparingly</li>
              <li>✗ Don't use colors outside the Kearney palette</li>
              <li>✗ Don't overcrowd charts with too many series</li>
              <li>✗ Don't use 3D effects or unnecessary decoration</li>
              <li>✗ Don't randomize color order - always follow 1-10</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}