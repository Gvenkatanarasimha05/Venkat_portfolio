import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatePresence } from './components/animations/AnimatePresence';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const { initScrollAnimations } = useScrollAnimation();

  useEffect(() => {
    initScrollAnimations();
    document.title = '(GVN)Portfolio';
  }, [initScrollAnimations]);

  return (
    <div className="bg-neutral-50 text-neutral-900 font-sans">
      <AnimatePresence>
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;