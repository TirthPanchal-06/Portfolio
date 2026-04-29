import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { a } from 'framer-motion/client';

const projects = [
  {
    title: "Bill Flow",
    description: "A robust mobile application built with Flutter to streamline billing and management processes. It features real-time data synchronization, intuitive UI/UX, and comprehensive reporting capabilities for small businesses.",
    image: "./certificate/BillFlow.png",
    tags: ["Flutter", "Dart", "Firebase", "State Management"],
    github: "https://github.com/TirthPanchal-06/BillFlow",
    live: ""
  },
  {
    title: "Car Maintenance System",
    description: "A comprehensive vehicle service management system for auto repair shops to handle customer bookings, track maintenance history, manage inventory, and generate service invoices efficiently.",
    image: "certificate/car_maint.avif",
    tags: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/TirthPanchal-06/CarMaintenanceSystem",
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my best academic and personal projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col h-full hover:border-primary-500/50 transition-colors"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-100 dark:border-slate-800">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <FaGithub size={18} /> Source Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors ml-auto">
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
