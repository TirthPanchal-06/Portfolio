import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Led the development of a scalable React dashboard for enterprise clients. Improved application performance by 40% through code splitting and lazy loading.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack MERN applications. Implemented secure authentication and integrated Stripe payment gateways for e-commerce platforms.",
  },
  {
    role: "Junior Web Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Collaborated with designers to translate Figma mockups into responsive web pages using HTML, CSS, JavaScript, and Tailwind CSS.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Professional Experience" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-violet-500/50 to-transparent -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 z-10 flex items-center justify-center -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:flex">
                  <Briefcase size={16} className="text-primary-500" />
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-6 relative group hover:border-primary-500/50 transition-colors">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 border border-primary-200 dark:border-primary-800/50">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-md font-medium text-slate-500 dark:text-slate-400 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
