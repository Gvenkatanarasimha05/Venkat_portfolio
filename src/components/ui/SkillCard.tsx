import React from 'react';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="p-4 bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 animate-fade-in-up flex flex-col items-center"
      style={{ animationDelay }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-3">
        <img 
          src={skill.iconUrl} 
          alt={skill.name}
          className="w-full h-auto object-contain"
        />
      </div>
      <h4 className="text-neutral-900 font-medium text-center">{skill.name}</h4>
      <div className="mt-2 w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-600 rounded-full"
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};