import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { easeOut, motion } from 'framer-motion';

const Card = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: easeOut }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-[url(/images/card_bg.jpg)] bg-cover shadow-md rounded-xl hover:shadow-lg transition-all duration-300 font-montserra flex flex-col "
    >
      <div className="img-container group relative overflow-hidden rounded-xl">
        {/* Thumbnail */}
        <img src={project.thumbnailLink} alt={project.title} className="w-full h-auto object-cover rounded-xl" />

        {/* Motion Button - hiện khi hover parent */}
        <div className="absolute top-3 right-3 p-2 rounded-full bg-[url(/images/pattern.webp)] bg-cover shadow-md shadow-white-100 text-white font-montserrat opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 justify-center"
          >
            <FaGithub /> Github Link
          </a>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-auto font-montserrat">
        <h2 className="text-2sm font-bold mb-2 text-gray-800">{project.title}</h2>
        <p className="text-sm text-gray-500 mb-1 italic">{project.time}</p>
        <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Technologies:</strong> {project.technologies}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
