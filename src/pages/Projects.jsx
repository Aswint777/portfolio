import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import E_learning from "../assets/photos/Screenshot 2026-06-23 150720.png"

function Projects() {
  const projectsData = [
    {
      title: "E-Commerce Platform",
             subTitle: "Real-time Chat Application",
      description: "A full-featured MERN stack e-commerce application with Stripe integration, admin dashboard, and Redux state management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "All Beyond",
             subTitle: "E-Learning Management System",
      description: "Comprehensive LMS platform supporting video uploads, course tracking, student dashboards, and payment processing.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "Socket.io"],
      image: E_learning,
      demoLink: "https://allbeyonds.vercel.app/",
      repoLink: "#"
    },
    {
      title: "Real-time Chat Application",
      subTitle: "Real-time Chat Application",
      description: "A modern chat app featuring real-time messaging, group chats, typing indicators, and read receipts using WebSockets.",
      tech: ["React", "Socket.io", "Node.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Portfolio Template",
             subTitle: "Real-time Chat Application",
      description: "A highly customizable, performant, and beautifully animated developer portfolio built with React and Framer Motion.",
      tech: ["React", "Framer Motion", "Vite", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      demoLink: "#",
      repoLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h1>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in the MERN stack and modern frontend development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
