import React from 'react';
import { Badge } from '../ui/badge';

interface StatusBadgeProps {
  status: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, children, size = 'md' }: StatusBadgeProps) {
  const statusColors = {
    success: 'bg-viz-success/10 text-viz-success border-viz-success/20',
    warning: 'bg-viz-warning/10 text-viz-warning border-viz-warning/20',
    danger: 'bg-viz-danger/10 text-viz-danger border-viz-danger/20',
    info: 'bg-primary/10 text-primary border-primary/20',
    neutral: 'bg-muted text-muted-foreground border-border'
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5'
  };

  return (
    <Badge 
      variant="outline" 
      className={`${statusColors[status]} ${sizes[size]} font-medium border`}
    >
      {children}
    </Badge>
  );
}
