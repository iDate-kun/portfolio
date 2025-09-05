import React from 'react';

// NOTE: For a production application, using a battle-tested library like Radix UI or Headless UI for tooltips
// is recommended for better accessibility and robustness.

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div
        role="tooltip"
        className="pointer-events-none absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full transform whitespace-nowrap rounded-md bg-dark-card px-3 py-2 text-sm text-slate-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus:opacity-100"
      >
        {text}
        <div className="absolute left-1/2 top-full -translate-x-1/2 transform border-8 border-t-dark-card border-l-transparent border-r-transparent border-b-transparent"></div>
      </div>
    </div>
  );
};
