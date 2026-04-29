import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Mail, Phone, Download, ExternalLink } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle
          title="About Me"
          subtitle="Get to know my background and technical journey."
        />

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-transparent transition-all duration-500 z-10" />
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                <span className="text-slate-400 text-lg">
                  <img src="./certificate/about.avif" alt="" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Aspiring Developer ready to make an impact.
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              Hello! I'm Tirth Panchal, a motivated and detail-oriented Computer Science graduate. My academic journey and hands-on personal projects have equipped me with a strong understanding of modern software development, spanning from responsive web applications to cross-platform mobile solutions.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              I thrive in environments where I can learn, adapt, and solve complex problems. Currently pursuing my Master's degree, I am actively seeking internships, freelance opportunities, and junior developer roles where I can contribute to meaningful projects and collaborate with experienced professionals.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 space-y-3">
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Mail size={18} className="text-primary-500" />
                  <span className="text-sm font-medium">tirthpanchal65@gmail.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Phone size={18} className="text-primary-500" />
                  <span className="text-sm font-medium">+91 7990571191</span>
                </a>
              </div>
              <div className="glass-card p-4 space-y-3">
                <a href="https://www.linkedin.com/in/tirth-panchal0644/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <FaLinkedin size={18} className="text-primary-500" />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                  <ExternalLink size={14} className="ml-auto" />
                </a>
                <a href="/certificate/Tirth_Panchal.pdf" download className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Download size={18} className="text-primary-500" />
                  <span className="text-sm font-medium">Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
