import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      {/* Image Container with Hover Effect */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech && project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-md border border-indigo-100 dark:border-indigo-800/50"
            >
              {t}
            </span>
          ))}
        </div>
        
        {/* Action Links */}
        <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ExternalLink size={16} className="mr-1.5" />
              Live Demo
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={16} className="mr-1.5" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
