import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { GraduationCap } from 'lucide-react';

const educations = [
  {
    degree: "Master's in Computer Science & Information Technology",
    institution: "Silver Oak University,Ahmedabad",
    period: "2025 - Present",
    description: "Currently pursuing advanced coursework in modern computing technologies, focusing on deepening my expertise in software architecture and emerging tech trends.",
  },
  {
    degree: "Bachelor's in Computer Science & Information Technology",
    institution: "L.J. Institute of Computer Applications,Ahmedabad",
    period: "2021 - 2024",
    description: "Graduated with a strong foundation in Data Structures, Algorithms, Web Development, and Database Management. Built multiple impactful academic projects.",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Academic Background" subtitle="My educational journey and qualifications." />

        <div className="max-w-4xl mx-auto space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="p-4 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 shrink-0">
                <GraduationCap size={32} />
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="py-1 px-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap border border-slate-300 dark:border-slate-700">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                  {edu.institution}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
