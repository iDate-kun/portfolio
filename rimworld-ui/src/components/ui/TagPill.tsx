import React from 'react';

interface TagPillProps {
  children: React.ReactNode;
  variant: 'faction' | 'ideology' | 'trait' | 'weakness';
  className?: string;
}

export const TagPill = ({ children, variant, className = '' }: TagPillProps) => {
  const baseClasses = 'inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-tight';

  const variantClasses = {
    faction: 'bg-brand-purple text-white',
    ideology: 'bg-green-800 text-green-100',
    trait: 'bg-gray-700 text-slate-200',
    weakness: 'bg-yellow-800 text-yellow-100',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
