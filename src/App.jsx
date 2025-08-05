import React from 'react';
import Hero from './sections/Hero';
import StickyNavbar from './components/StickyNavbar';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import { AnimatePresence } from 'framer-motion';
import Experience from './sections/Experience';

const App = () => {
  return (
    <>
      <AnimatePresence>
        <StickyNavbar className={'hidden lg:block'} />

        <Hero />

        <AboutMe />

        <Experience />

        <Projects />
      </AnimatePresence>
    </>
  );
};

export default App;
