/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../components/Card';
import { projects } from '../constants/index';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl md:text-3xl text-white-100 mb-3 text-center md:text-left font-bold"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
