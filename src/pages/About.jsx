import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Server } from "lucide-react";
import myImage from "../assets/photos/ChatGPT Image Jun 24, 2026, 04_51_30 PM.png";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const featureCards = [
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: "Frontend",
      description:
        "Building responsive, accessible, and dynamic UIs with React, Tailwind, and Framer Motion.",
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: "Backend",
      description:
        "Developing robust APIs and microservices using Node.js, Express, and modern architecture.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Database",
      description:
        "Designing efficient schemas and managing data with MongoDB and NoSQL databases.",
    },
    {
      icon: <Code className="w-8 h-8 text-pink-500" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented TypeScript and JavaScript code.",
    },
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
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h1>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-300"
          >
            <p>
              Hi, I'm{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                Aswin
              </strong>
              , a passionate self-taught Full Stack MERN Developer. I specialize
              in building complete web applications from the ground up, turning
              complex problems into elegant, user-friendly solutions.
            </p>
            <p>
              My expertise lies in the React ecosystem, Node.js, Express, and
              MongoDB. I have hands-on experience building industrial-level
              projects including scalable E-commerce platforms and comprehensive
              E-learning applications.
            </p>
            <p>
              I am deeply interested in backend architecture, real-time systems,
              and optimizing application performance. When I'm not coding, I'm
              usually exploring new technologies or refining my understanding of
              software design patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white dark:bg-slate-900">
                <img
                  src={myImage}
                  alt="Aswin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4 bg-slate-100 dark:bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
