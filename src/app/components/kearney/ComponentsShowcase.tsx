import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Switch } from '../ui/switch';
import { Slider } from '../ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Separator } from '../ui/separator';
import { ArrowRight, Check, X, AlertCircle, Info, TrendingUp, Download, Share2, Filter } from 'lucide-react';

export function ComponentsShowcase() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">UI Components</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Production-ready components for building dashboards, applications, and interactive deliverables.
        </p>
      </div>

      {/* Buttons */}
      <section>
        <h2 className="mb-6">Buttons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">Primary Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Secondary Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Buttons with Icons</h4>
            <div className="flex flex-wrap gap-3">
              <Button>
                <TrendingUp className="w-4 h-4 mr-2" />
                Analyze
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="ghost">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Destructive</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="destructive">Delete</Button>
              <Button variant="destructive" size="sm">
                <X className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Icon Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <Button size="icon">
                <Filter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Download className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Button Group</h4>
            <div className="flex gap-0 border rounded-md overflow-hidden w-fit">
              <Button variant="ghost" className="rounded-none border-r">
                Day
              </Button>
              <Button variant="ghost" className="rounded-none border-r bg-muted">
                Week
              </Button>
              <Button variant="ghost" className="rounded-none">
                Month
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h2 className="mb-6">Form Elements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">Text Inputs</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" disabled value="Cannot edit" className="mt-1.5" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Selections</h4>
            <div className="space-y-4">
              <div>
                <Label>Select Region</Label>
                <Select>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Choose region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="asia">Asia Pacific</SelectItem>
                    <SelectItem value="latam">Latin America</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Preferences</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="analytics" />
                  <label htmlFor="analytics" className="text-sm cursor-pointer">
                    Include analytics data
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="reports" defaultChecked />
                  <label htmlFor="reports" className="text-sm cursor-pointer">
                    Generate reports
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="export" />
                  <label htmlFor="export" className="text-sm cursor-pointer">
                    Enable export
                  </label>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Switches & Sliders</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates via email
                  </p>
                </div>
                <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
              </div>

              <Separator />

              <div>
                <div className="flex justify-between mb-2">
                  <Label>Confidence Threshold</Label>
                  <span className="text-sm text-muted-foreground">{sliderValue}%</span>
                </div>
                <Slider 
                  value={sliderValue} 
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Progress Indicators</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Project Completion</Label>
                  <span className="text-sm">78%</span>
                </div>
                <Progress value={78} />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label>Revenue Target</Label>
                  <span className="text-sm">92%</span>
                </div>
                <Progress value={92} className="[&>div]:bg-primary" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label>Quality Score</Label>
                  <span className="text-sm">45%</span>
                </div>
                <Progress value={45} className="[&>div]:bg-muted-foreground" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Badges & Status */}
      <section>
        <h2 className="mb-6">Badges & Status Indicators</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">Badge Variants</h4>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Status Badges</h4>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-600">
                <Check className="w-3 h-3 mr-1" />
                Active
              </Badge>
              <Badge className="bg-yellow-600">
                <AlertCircle className="w-3 h-3 mr-1" />
                Pending
              </Badge>
              <Badge className="bg-red-600">
                <X className="w-3 h-3 mr-1" />
                Inactive
              </Badge>
              <Badge className="bg-blue-600">
                <Info className="w-3 h-3 mr-1" />
                Info
              </Badge>
            </div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h4 className="mb-4">Contextual Usage</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span>Project Alpha</span>
                <Badge className="bg-green-600">On Track</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span>Project Beta</span>
                <Badge className="bg-yellow-600">At Risk</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span>Project Gamma</span>
                <Badge className="bg-red-600">Delayed</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Alerts */}
      <section>
        <h2 className="mb-6">Alerts & Notifications</h2>
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational message to provide context or helpful details.
            </AlertDescription>
          </Alert>

          <Alert className="border-primary bg-primary/5">
            <TrendingUp className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">Success</AlertTitle>
            <AlertDescription>
              Your report has been generated successfully and is ready for download.
            </AlertDescription>
          </Alert>

          <Alert className="border-yellow-600 bg-yellow-600/5">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-600">Warning</AlertTitle>
            <AlertDescription>
              Some data points are missing. The analysis may be incomplete.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <X className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to process the request. Please check your input and try again.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="mb-6">Tabs & Navigation</h2>
        <Card className="p-6">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <h4 className="mb-2">Overview</h4>
              <p className="text-muted-foreground">
                High-level summary of key metrics and recent activity.
              </p>
            </TabsContent>
            <TabsContent value="analytics" className="mt-6">
              <h4 className="mb-2">Analytics</h4>
              <p className="text-muted-foreground">
                Detailed analytics and data visualization tools.
              </p>
            </TabsContent>
            <TabsContent value="reports" className="mt-6">
              <h4 className="mb-2">Reports</h4>
              <p className="text-muted-foreground">
                Generate and download custom reports.
              </p>
            </TabsContent>
            <TabsContent value="settings" className="mt-6">
              <h4 className="mb-2">Settings</h4>
              <p className="text-muted-foreground">
                Configure application preferences and options.
              </p>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Cards */}
      <section>
        <h2 className="mb-6">Cards & Containers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h4 className="mb-2">Basic Card</h4>
            <p className="text-sm text-muted-foreground">
              Simple container for grouping related content.
            </p>
          </Card>

          <Card className="p-6 border-primary">
            <h4 className="mb-2 text-primary">Highlighted Card</h4>
            <p className="text-sm text-muted-foreground">
              Card with colored border for emphasis.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
            <h4 className="mb-2">Gradient Card</h4>
            <p className="text-sm text-muted-foreground">
              Card with subtle gradient background.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
