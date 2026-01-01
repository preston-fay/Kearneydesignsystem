import React from 'react';
import { Card } from '../ui/card';

interface InsightCardProps {
  title: string;
  insight: string;
  impact?: 'high' | 'medium' | 'low';
  category?: string;
  icon?: React.ReactNode;
}

export function InsightCard({ title, insight, impact, category, icon }: InsightCardProps) {
  const impactColors = {
    high: 'border-l-[#D32F2F] bg-red-50/50 dark:bg-red-950/10',
    medium: 'border-l-[#FFA726] bg-orange-50/50 dark:bg-orange-950/10',
    low: 'border-l-[#7823DC] bg-purple-50/50 dark:bg-purple-950/10'
  };

  const impactLabels = {
    high: 'High Impact',
    medium: 'Medium Impact',
    low: 'Low Impact'
  };

  const impactTextColors = {
    high: '#D32F2F',
    medium: '#FFA726',
    low: '#7823DC'
  };

  return (
    <Card className={`p-6 border-l-4 ${impact ? impactColors[impact] : ''} hover:shadow-md transition-shadow`}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="p-2.5 rounded-lg flex-shrink-0" style={{ backgroundColor: '#7823DC15', color: '#7823DC' }}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h4>{title}</h4>
            {category && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                {category}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{insight}</p>
          {impact && (
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: impactTextColors[impact] }}>
              {impactLabels[impact]}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}