import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
              Aswin
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Full Stack MERN Developer building modern web experiences.
            </p>
          </div>
          
          <div className="flex space-x-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500">
          <p>© {currentYear} Aswin. All rights reserved.</p>
          <a
            href="/resume.pdf"
            className="mt-4 md:mt-0 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
