import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { skillsData, toolsData } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-800 text-black dark:text-white relative transition-colors duration-300"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="My Expertise"
          title="Skills & Tools"
          alignment="center"
          theme="light"
        />

        {/* Skills */}
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {skillsData.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center space-y-2">
              <img src={skill.iconUrl} alt={skill.name} className="w-12 h-12" />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {toolsData.map((tool) => (
            <div key={tool.id} className="flex flex-col items-center space-y-2">
              <img src={tool.iconUrl} alt={tool.name} className="w-12 h-12" />
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
