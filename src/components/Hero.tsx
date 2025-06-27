import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { TypeAnimation } from '../components/animations/TypeAnimation';
import meImage from './images/me .jpg';

export const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const xValue = e.clientX / window.innerWidth - 0.5;
      const yValue = e.clientY / window.innerHeight - 0.5;
      parallaxRef.current.style.transform = `translateX(${xValue * 20}px) translateY(${yValue * 20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-indigo-100/30 dark:from-indigo-900/20 to-transparent"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-indigo-50/40 dark:from-indigo-800/20 to-transparent"></div>
        <div
          ref={parallaxRef}
          className="absolute inset-0 opacity-40 dark:opacity-30 transition-transform duration-[250ms] ease-out"
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-indigo-300/50 dark:bg-indigo-400/30"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-indigo-400/40 dark:bg-indigo-300/30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 sm:w-5 sm:h-5 rounded-full bg-indigo-300/60 dark:bg-indigo-400/30"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 tracking-tight text-black dark:text-white opacity-0 animate-fade-in-up leading-tight"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              G Venkata{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                Narasimha
              </span>
            </h1>

            <div
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 lg:mb-8 h-8 sm:h-10 md:h-12 text-black dark:text-white opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <TypeAnimation
                strings={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver']}
                speed={100}
                deleteSpeed={50}
                delayBetween={2000}
              />
            </div>

            <p
              className="max-w-xl lg:max-w-2xl mb-6 lg:mb-8 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 opacity-0 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              I create visually stunning and user-friendly digital experiences that help businesses grow and engage their audience.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            >
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="px-6 sm:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group font-medium shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 sm:px-8 py-3 border-2 border-neutral-700 dark:border-neutral-300 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 text-black dark:text-white rounded-lg transition-all duration-300 flex items-center justify-center font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex-shrink-0 order-first lg:order-last">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-400 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent dark:from-indigo-300/10"></div>
              <img
                src={meImage} 
                alt="G Venkata Narasimha - Full Stack Developer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Floating elements around profile */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-300 dark:bg-indigo-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={() => scrollToSection('#about')} 
          aria-label="Scroll down"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          <ChevronDown 
            size={32} 
            className="text-neutral-400 dark:text-neutral-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300" 
          />
        </button>
      </div>
    </section>
  );
};