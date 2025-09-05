'use client';

import { Character } from '@/types';
import React, { useMemo, useState } from 'react';
import { TagPill } from './ui/TagPill';
import { Tooltip } from './ui/Tooltip';
import { IconRow } from './ui/IconRow';
import { SkillBar } from './ui/SkillBar';

interface ProfileCardProps {
  character: Character;
}

type SortKey = 'default' | 'value' | 'name';

const DEFAULT_SKILL_ORDER = ['社交', '知力', '医術', '動物', '栽培', '料理', '採掘', '建築', '格闘', '射撃', '工芸', '芸術'];


export const ProfileCard = ({ character }: ProfileCardProps) => {
  const [sortKey, setSortKey] = useState<SortKey>('default');

  const sortedSkills = useMemo(() => {
    const skills = [...character.skills];
    switch (sortKey) {
      case 'name':
        return skills.sort((a, b) => a.name.localeCompare(b.name));
      case 'value':
        return skills.sort((a, b) => b.value - a.value);
      case 'default':
      default:
        return skills.sort((a, b) => {
          const indexA = DEFAULT_SKILL_ORDER.indexOf(a.name);
          const indexB = DEFAULT_SKILL_ORDER.indexOf(b.name);
          return indexA - indexB;
        });
    }
  }, [character.skills, sortKey]);

  const birthYearText = character.birthYear ? `(${character.birthYear}年)` : '';

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-dark-card p-4 shadow-lg ring-1 ring-dark-border md:p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Left Column / Top part on mobile */}
        <div className="md:col-span-1">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {character.name}
          </h1>
          <p className="text-base text-slate-400">{character.adulthood}</p>

          <div className="my-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-300">
            <span>{character.gender}</span>
            <span>{character.age}歳 {birthYearText}</span>
            <TagPill variant="faction">{character.faction}</TagPill>
            {character.ideology && <TagPill variant="ideology">{character.ideology}</TagPill>}
          </div>

          <div className="my-5">
             <h2 className="mb-2 text-xs uppercase tracking-widest text-slate-400">特性</h2>
             <IconRow>
                {character.traits.map(trait => (
                    <Tooltip key={trait.name} text={trait.description || trait.name}>
                         <button
                            aria-label={trait.name}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-2 border-dark-border bg-dark-card transition-colors hover:border-brand-green focus:border-brand-green focus:outline-none"
                        >
                            <span className="text-xl"> T </span>
                        </button>
                    </Tooltip>
                ))}
             </IconRow>
          </div>
          
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold text-slate-400">幼年期: </span>
              <span className="text-slate-300">{character.childhood}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-400">成年期: </span>
              <span className="text-slate-300">{character.adulthood}</span>
            </div>
          </div>

          <div className="my-5">
            <h2 className="mb-2 text-xs uppercase tracking-widest text-slate-400">能力・性格</h2>
            <div className="flex flex-wrap gap-2">
              {character.traits.map(trait => <TagPill key={trait.name} variant="trait">{trait.name}</TagPill>)}
            </div>
          </div>

          <div className="my-5">
            <h2 className="mb-2 text-xs uppercase tracking-widest text-slate-400">苦手・欠点</h2>
            <div className="flex flex-wrap gap-2">
              {character.weaknesses.map(weakness => <TagPill key={weakness} variant="weakness">{weakness}</TagPill>)}
            </div>
          </div>
        </div>

        {/* Right Column / Bottom part on mobile */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">スキル</h2>
            <div className="flex items-center space-x-2">
                <span className='text-xs text-slate-400'>ソート:</span>
                <select onChange={(e) => setSortKey(e.target.value as SortKey)} value={sortKey} className="rounded border-dark-border bg-dark-card text-sm text-white focus:ring-brand-green">
                    <option value="default">デフォルト</option>
                    <option value="value">値</option>
                    <option value="name">名前</option>
                </select>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {sortedSkills.map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>

          <div className="mt-6">
            <h2 className="mb-2 text-xs uppercase tracking-widest text-slate-400">才能</h2>
            <IconRow>
                {character.talents.map(talent => (
                    <Tooltip key={talent.label} text={talent.description}>
                         <button
                            aria-label={talent.label}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-2 border-dark-border bg-dark-card transition-colors hover:border-brand-green focus:border-brand-green focus:outline-none"
                        >
                            <span className="text-xl">{talent.icon}</span>
                        </button>
                    </Tooltip>
                ))}
             </IconRow>
          </div>
        </div>
      </div>
    </div>
  );
};