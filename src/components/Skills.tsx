import React, { useRef } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { useInView } from '../hooks/useInView';
import { skillsData, toolsData } from '../data/skills';

export const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const skillsInView = useInView(skillsRef, { threshold: 0.1 });
  const toolsInView = useInView(toolsRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-800 text-black dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Accent */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-indigo-100/30 dark:bg-indigo-900/20 rounded-tl-full opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="My Expertise"
          title="Skills"
          alignment="center"
          theme="light"
        />

        {/* Skills */}
        <div ref={skillsRef} className="mt-16 space-y-10">
          {skillsData.map((skill, index) => (
            <div
              key={skill.id}
              className={`transition-all duration-1000 ${
                skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold text-black dark:text-white">{skill.name}</h3>
                <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: skillsInView ? `${skill.proficiency}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Skills */}
        <div className="mt-16 text-center">
          <a
            href="#more-skills"
            className="text-xl text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300 inline-flex items-center gap-2"
          >
            See More Skills
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        {/* Tools */}
        <div ref={toolsRef} className="mt-20 space-y-10">
          {toolsData.map((tool, index) => (
            <div
              key={tool.id}
              className={`transition-all duration-1000 ${
                toolsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold text-black dark:text-white">{tool.name}</h3>
                <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  {tool.proficiency}%
                </span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
               
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: toolsInView ? `${tool.proficiency}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Tools */}
        <div className="mt-16 text-center">
          <a
            href="#more-tools"
            className="text-xl text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300 inline-flex items-center gap-2"
          >
            See More Tools
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
