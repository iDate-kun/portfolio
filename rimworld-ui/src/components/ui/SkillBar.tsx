import React from 'react';

interface SkillBarProps {
  name: string;
  value: number;
  passion: 0 | 1 | 2;
}

const PassionIndicator = ({ passion }: { passion: 0 | 1 | 2 }) => {
  if (passion === 0) return null;
  const passionColor = 'text-orange-400';
  return (
    <span className="ml-2">
      {passion === 1 && <span className={passionColor}>🔥</span>}
      {passion === 2 && <span className={passionColor}>🔥🔥</span>}
    </span>
  );
};

const getBarColor = (value: number) => {
  if (value >= 15) return 'bg-skill-dark-green';
  if (value >= 10) return 'bg-skill-green';
  if (value >= 5) return 'bg-skill-dull-green';
  return 'bg-skill-gray';
};

export const SkillBar = ({ name, value, passion }: SkillBarProps) => {
  const barWidth = `${(value / 20) * 100}%`;
  const barColor = getBarColor(value);

  return (
    <div className="grid grid-cols-3 items-center gap-4 font-mono text-sm">
      <div className="col-span-1 flex items-center">
        <span>{name}</span>
        <PassionIndicator passion={passion} />
      </div>
      <div className="col-span-2 flex items-center">
        <div className="relative h-5 flex-grow rounded-sm bg-dark-border">
          <div
            className={`absolute left-0 top-0 h-full rounded-sm ${barColor}`}
            style={{ width: barWidth }}
          ></div>
           <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};
