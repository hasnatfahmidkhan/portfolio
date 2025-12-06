import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div 
      variants={variants}
      className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg hover:shadow-neon transition-all duration-300 group border border-gray-200 dark:border-gray-800 flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-48">
        <img
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          src={project.image}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
            href={project.github}
            title="View Code"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
            href={project.demo}
            title="Live Demo"
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className={`px-3 py-1 text-xs font-medium rounded-full ${tag.bg} ${tag.text}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
