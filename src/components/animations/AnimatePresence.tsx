import React, { useState, useEffect } from 'react';

interface AnimatePresenceProps {
  children: React.ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure smooth initial animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div 
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};