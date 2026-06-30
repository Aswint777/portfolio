import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Redux"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT"]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      skills: ["MongoDB", "Mongoose", "AWS S3", "Cloudinary"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      skills: ["Git", "GitHub", "Postman", "Render", "Vercel","netlify"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h1>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical toolkit for building modern, scalable, and high-performance web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default Skills;