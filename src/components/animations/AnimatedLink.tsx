import React from 'react';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="relative group"
    >
      <span className="text-neutral-600 group-hover:text-indigo-600 transition-colors duration-300">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </a>
  );
};