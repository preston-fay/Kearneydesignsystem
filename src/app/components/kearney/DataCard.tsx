import React from 'react';
import { Card } from '../ui/card';

interface DataCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  subtitle?: string;
  icon?: React.ReactNode;
  gradient?: boolean;
}

export function DataCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  subtitle,
  icon,
  gradient = false 
}: DataCardProps) {
  const changeColors = {
    positive: '#7823DC',
    negative: '#D32F2F',
    neutral: 'hsl(var(--muted-foreground))'
  };

  return (
    <Card className={`p-6 ${gradient ? 'gradient-purple text-white' : ''} hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`text-sm mb-3 uppercase tracking-wide ${gradient ? 'text-white/80' : 'text-muted-foreground'}`}>
            {title}
          </p>
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className={gradient ? 'text-white' : ''}>
              {value}
            </h2>
            {change && (
              <span className={`text-sm font-semibold ${gradient ? 'text-white/90' : ''}`} style={!gradient ? { color: changeColors[changeType] } : undefined}>
                {change}
              </span>
            )}
          </div>
          {subtitle && (
            <p className={`text-xs mt-2 ${gradient ? 'text-white/70' : 'text-muted-foreground'}`}>
              {subtitle}
            </p>
          )}
        </div>
        {icon && (
          <div className={`p-3 rounded-lg ${gradient ? 'bg-white/20' : 'bg-primary/10'}`} style={!gradient ? { color: '#7823DC' } : undefined}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}