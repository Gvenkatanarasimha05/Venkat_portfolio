import React, { useEffect, useState } from 'react';
import { Menu, X, ExternalLink, Sun, Moon } from 'lucide-react';
import { AnimatedLink } from './animations/AnimatedLink';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-900 py-5 shadow-md dark:shadow-lg transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-tight relative group text-black dark:text-white"
        >
          <span className="relative z-10">GVN</span> <span className="text-indigo-600">Portfolio.</span>
          <span className="absolute bottom-0 left-0 w-0 h-[6px] bg-indigo-600/20 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <AnimatedLink key={link.name} href={link.href}>
              {link.name}
            </AnimatedLink>
          ))}
          <a 
            href="https://drive.google.com/file/d/1vDzd5a6fZ6CbDMGMJaOTnM_5nKfwt7eq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2"
          >
            Resume <ExternalLink size={14} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-neutral-900 dark:text-neutral-100"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          <button 
            className="text-neutral-900 dark:text-neutral-100 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-24 pb-8 px-6`}
      >
        <nav className="flex flex-col space-y-6 items-center text-xl text-neutral-900 dark:text-neutral-100">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://drive.google.com/file/d/1lOnjClMvDZu5xqBhJu9ZycOu9o1pEE7j/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 mt-4 w-full text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Resume <ExternalLink size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
};
