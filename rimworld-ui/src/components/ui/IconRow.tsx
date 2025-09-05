import React from 'react';

interface IconRowProps {
  children: React.ReactNode;
  className?: string;
}

export const IconRow = ({ children, className = '' }: IconRowProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {children}
    </div>
  );
};