import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  alignment?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  alignment = 'left',
  theme = 'light',
}) => {
  const textAlign = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-neutral-900';
  const accentColor = theme === 'dark' ? 'text-purple-400' : 'text-indigo-600';

  return (
    <div className={`max-w-2xl ${textAlign[alignment]}`}>
      <h4 className={`text-sm font-medium uppercase tracking-wider ${accentColor} mb-2`}>
        {subtitle}
      </h4>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${textColor}`}>
        {title}
      </h2>
      <div className={`h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-400 mt-4 ${
        alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''
      }`}></div>
    </div>
  );
};