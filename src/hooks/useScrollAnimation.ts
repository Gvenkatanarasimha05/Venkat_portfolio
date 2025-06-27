import { useCallback, useEffect } from 'react';

export function useScrollAnimation() {
  const initScrollAnimations = useCallback(() => {
    // Add CSS for animations to the document head
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      
      .animate-blink {
        animation: blink 1s step-end infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return () => cleanup();
  }, [initScrollAnimations]);

  return { initScrollAnimations };
}