import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 150}ms`;

  return (
    <div 
      className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-56 object-cover transition-all duration-700 transform group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6`}>
          <div className="space-x-4">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-white text-neutral-900 rounded-md transition-transform duration-300 hover:bg-indigo-50"
            >
              View Live <ExternalLink size={14} className="ml-2" />
            </a>
            {project.codeUrl && (
              <a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md transition-transform duration-300 hover:bg-indigo-700"
              >
                Source Code <ArrowRight size={14} className="ml-2" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-neutral-600 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};