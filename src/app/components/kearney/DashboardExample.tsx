import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { TrendingUp, TrendingDown, Download, Share2, Filter, ArrowRight } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function DashboardExample() {
  const kpiData = [
    { label: 'Total Revenue', value: '$2.4M', change: '+12.5%', trend: 'up', progress: 78 },
    { label: 'Active Projects', value: '24', change: '+3', trend: 'up', progress: 85 },
    { label: 'Client Satisfaction', value: '94%', change: '+2%', trend: 'up', progress: 94 },
    { label: 'Avg. Response Time', value: '4.2h', change: '-0.8h', trend: 'up', progress: 72 },
  ];

  const monthlyRevenue = [
    { month: 'Jan', value: 1.8 },
    { month: 'Feb', value: 2.1 },
    { month: 'Mar', value: 2.3 },
    { month: 'Apr', value: 2.0 },
    { month: 'May', value: 2.5 },
    { month: 'Jun', value: 2.4 },
  ];

  const projectStatus = [
    { status: 'On Track', count: 15, color: '#7823DC' },
    { status: 'At Risk', count: 6, color: '#C8A5F0' },
    { status: 'Delayed', count: 3, color: '#787878' },
  ];

  const regionalData = [
    { region: 'North America', value: 45 },
    { region: 'Europe', value: 32 },
    { region: 'Asia Pacific', value: 18 },
    { region: 'Latin America', value: 5 },
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 42 },
    { day: 'Tue', hours: 48 },
    { day: 'Wed', hours: 38 },
    { day: 'Thu', hours: 52 },
    { day: 'Fri', hours: 45 },
  ];

  const recentProjects = [
    { name: 'Digital Transformation Initiative', client: 'TechCorp Inc.', status: 'On Track', completion: 78 },
    { name: 'Operations Optimization', client: 'Global Logistics', status: 'On Track', completion: 92 },
    { name: 'Market Entry Strategy', client: 'Retail Innovations', status: 'At Risk', completion: 45 },
    { name: 'Supply Chain Redesign', client: 'Manufacturing Co.', status: 'On Track', completion: 67 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="mb-2">Executive Dashboard</h1>
            <p className="text-muted-foreground">Real-time performance metrics and insights</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
                <h2 className="mb-1">{kpi.value}</h2>
                <div className="flex items-center gap-1">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
            </div>
            <Progress value={kpi.progress} className="h-2" />
          </Card>
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3>Revenue Trend</h3>
              <p className="text-sm text-muted-foreground">Monthly revenue over last 6 months</p>
            </div>
            <Badge variant="outline">6M</Badge>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyRevenue}>
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
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#7823DC"
                fill="#7823DC"
                fillOpacity={0.2}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3>Project Status Distribution</h3>
              <p className="text-sm text-muted-foreground">Current project portfolio</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={projectStatus} layout="vertical">
              <XAxis 
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'currentColor', fontSize: 12 }}
              />
              <YAxis 
                type="category"
                dataKey="status"
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
                formatter={(value: any) => [value, 'Projects']}
              />
              <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                {projectStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Secondary Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h4 className="mb-6">Regional Distribution</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={regionalData}>
              <XAxis 
                dataKey="region"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'currentColor', fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'currentColor', fontSize: 12 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value: any) => [`${value}%`, 'Share']}
              />
              <Bar dataKey="value" fill="#9150E1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h4 className="mb-6">Weekly Activity</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyActivity}>
              <XAxis 
                dataKey="day"
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
                formatter={(value: any) => [`${value}h`, 'Hours']}
              />
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="#AF7DEB"
                strokeWidth={3}
                dot={{ fill: '#AF7DEB', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h4 className="mb-4">Quick Stats</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-sm">Team Members</span>
              <span className="text-lg">156</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-sm">Avg Project Value</span>
              <span className="text-lg">$180K</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-sm">Success Rate</span>
              <span className="text-lg">96%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Client Retention</span>
              <span className="text-lg">89%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Projects Table */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3>Recent Projects</h3>
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Project Name</th>
                <th className="text-left py-3 px-4">Client</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Completion</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project, index) => (
                <tr key={index} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium">{project.name}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </td>
                  <td className="py-4 px-4">
                    <Badge 
                      className={
                        project.status === 'On Track' 
                          ? 'bg-green-600' 
                          : project.status === 'At Risk'
                          ? 'bg-yellow-600'
                          : 'bg-red-600'
                      }
                    >
                      {project.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-3">
                      <span className="text-sm">{project.completion}%</span>
                      <Progress value={project.completion} className="w-24 h-2" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Insights Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 border-primary bg-gradient-to-br from-primary/5 to-primary/10">
          <h5 className="mb-2 text-primary">Key Insight</h5>
          <p className="text-sm text-muted-foreground mb-4">
            Revenue growth has accelerated 12.5% above target, driven by strong performance 
            in digital transformation projects across North America.
          </p>
          <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent">
            Learn more
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Card>

        <Card className="p-6 border-yellow-600/30 bg-yellow-600/5">
          <h5 className="mb-2 text-yellow-600">Action Required</h5>
          <p className="text-sm text-muted-foreground mb-4">
            3 projects are showing risk indicators. Review resource allocation 
            and consider timeline adjustments for Q2 deliverables.
          </p>
          <Button variant="ghost" size="sm" className="text-yellow-600 p-0 h-auto hover:bg-transparent">
            Review projects
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Card>

        <Card className="p-6 border-muted">
          <h5 className="mb-2">Upcoming Milestone</h5>
          <p className="text-sm text-muted-foreground mb-4">
            Q2 strategy review scheduled for next week. Prepare updates on 
            all active initiatives and resource planning.
          </p>
          <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
            View calendar
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
