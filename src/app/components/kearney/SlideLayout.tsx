import { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
  footer: string;
}

export function SlideLayout({ children, slideNumber, totalSlides, footer }: SlideLayoutProps) {
  return (
    <div className="relative bg-card border rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {/* Slide Content */}
      <div className="h-full p-16">
        {children}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 px-16 py-6 border-t bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded" />
            <span>{footer}</span>
          </div>
          <span>
            {slideNumber} / {totalSlides}
          </span>
        </div>
      </div>
    </div>
  );
}
