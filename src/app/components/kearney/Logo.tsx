import React from 'react';
import logoSlate from '../../../assets/logos/kearney-logo-slate.svg';
import logoWhite from '../../../assets/logos/kearney-logo-white.svg';
import logoPurple from '../../../assets/logos/kearney-logo-purple.svg';

interface LogoProps {
  variant?: 'slate' | 'white' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Official Kearney Logo Component
 * 
 * Variants:
 * - slate: Black/slate color (#1E1E1E) - for light backgrounds
 * - white: White (#FFFFFF) - for dark backgrounds  
 * - purple: Kearney Purple (#7823DC) - for emphasis
 * 
 * Sizes:
 * - sm: 80px width (headers, compact spaces)
 * - md: 120px width (default, slides)
 * - lg: 160px width (hero sections)
 * - xl: 200px width (title slides, covers)
 * 
 * Usage:
 * <Logo variant="slate" size="md" />
 * <Logo variant="white" size="lg" className="mb-4" />
 */
export function Logo({ variant = 'slate', size = 'md', className = '' }: LogoProps) {
  const logos = {
    slate: logoSlate,
    white: logoWhite,
    purple: logoPurple,
  };

  const sizes = {
    sm: 'w-20',   // 80px
    md: 'w-30',   // 120px  
    lg: 'w-40',   // 160px
    xl: 'w-50',   // 200px
  };

  const logo = logos[variant];

  return (
    <img 
      src={logo} 
      alt="Kearney" 
      className={`${sizes[size]} h-auto ${className}`}
      style={{ maxWidth: '100%' }}
    />
  );
}
