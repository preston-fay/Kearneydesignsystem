import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { DesignSystemOverview } from "./components/kearney/DesignSystemOverview";
import { ColorPalette } from "./components/kearney/ColorPalette";
import { TypographyShowcase } from "./components/kearney/TypographyShowcase";
import { ComponentsShowcase } from "./components/kearney/ComponentsShowcase";
import { ChartsShowcase } from "./components/kearney/ChartsShowcase";
import { DashboardExample } from "./components/kearney/DashboardExample";
import { SlideExample } from "./components/kearney/SlideExample";
import { DataVisualizationGuide } from "./components/kearney/DataVisualizationGuide";
import { GradientsShowcase } from "./components/kearney/GradientsShowcase";
import { Logo } from "./components/kearney/Logo";
import { MapExample } from "./components/kearney/MapExample";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark",
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return <AppContent theme={theme} toggleTheme={toggleTheme} />;
}

function AppContent({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo
                variant={theme === "dark" ? "white" : "slate"}
                size="sm"
              />
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Design System
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8 flex flex-wrap h-auto gap-2 bg-muted p-1 rounded-lg">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="gradients">
              Gradients
            </TabsTrigger>
            <TabsTrigger value="typography">
              Typography
            </TabsTrigger>
            <TabsTrigger value="components">
              Components
            </TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="dataviz">
              Data Viz Guide
            </TabsTrigger>
            <TabsTrigger value="dashboard">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="slides">Slides</TabsTrigger>
            <TabsTrigger value="maps">Maps</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <DesignSystemOverview />
          </TabsContent>

          <TabsContent value="colors">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="gradients">
            <GradientsShowcase />
          </TabsContent>

          <TabsContent value="typography">
            <TypographyShowcase />
          </TabsContent>

          <TabsContent value="components">
            <ComponentsShowcase />
          </TabsContent>

          <TabsContent value="charts">
            <ChartsShowcase />
          </TabsContent>

          <TabsContent value="dataviz">
            <DataVisualizationGuide />
          </TabsContent>

          <TabsContent value="dashboard">
            <DashboardExample />
          </TabsContent>

          <TabsContent value="slides">
            <SlideExample />
          </TabsContent>

          <TabsContent value="maps">
            <MapExample />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2026 Kearney Design System - Comprehensive
              reference for all deliverables
            </p>
            <p>
              Light & Dark themes • Accessible •
              Production-ready
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;