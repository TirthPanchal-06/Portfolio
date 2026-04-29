import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Layout, Server, Smartphone, Code } from 'lucide-react';

const services = [
  {
    icon: <Layout size={32} />,
    title: "Frontend Development",
    description: "Building responsive, accessible, and highly interactive user interfaces using React, Next.js, and Tailwind CSS."
  },
  {
    icon: <Server size={32} />,
    title: "Backend Architecture",
    description: "Designing scalable APIs and robust server-side logic using Node.js, Express, and modern databases."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Responsive Design",
    description: "Ensuring your application looks and functions flawlessly across all devices and screen sizes."
  },
  {
    icon: <Code size={32} />,
    title: "Clean Code & Refactoring",
    description: "Writing maintainable, well-documented code and optimizing existing codebases for better performance."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="My Services" 
          subtitle="What I can do to help you bring your vision to reality."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-violet-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
