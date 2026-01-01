import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface KPI {
  label: string;
  value: string | number;
  unit?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  description?: string;
}

interface KPIGridProps {
  kpis: KPI[];
  columns?: 2 | 3 | 4;
}

export function KPIGrid({ kpis, columns = 3 }: KPIGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  };

  const changeColors = {
    positive: '#7823DC',
    negative: '#D32F2F',
    neutral: 'hsl(var(--muted-foreground))'
  };

  const getChangeIcon = (type?: 'positive' | 'negative' | 'neutral') => {
    if (type === 'positive') return <TrendingUp className="w-4 h-4" style={{ color: changeColors.positive }} />;
    if (type === 'negative') return <TrendingDown className="w-4 h-4" style={{ color: changeColors.negative }} />;
    return <Minus className="w-4 h-4" style={{ color: changeColors.neutral }} />;
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {kpis.map((kpi, index) => (
        <div key={index} className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
            {kpi.label}
          </p>
          <div className="flex items-baseline gap-2 mb-2">
            <h2>{kpi.value}</h2>
            {kpi.unit && (
              <span className="text-sm text-muted-foreground">{kpi.unit}</span>
            )}
          </div>
          {kpi.change && (
            <div className="flex items-center gap-1.5">
              {getChangeIcon(kpi.changeType)}
              <span className="text-sm font-medium" style={{ color: changeColors[kpi.changeType || 'neutral'] }}>
                {kpi.change}
              </span>
            </div>
          )}
          {kpi.description && (
            <p className="text-xs text-muted-foreground mt-2">
              {kpi.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}