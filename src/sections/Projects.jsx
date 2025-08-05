/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../components/Card';
import { projects } from '../constants/index';
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col gap-2">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl text-white-100 mb-3"
        >
          My projects
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
