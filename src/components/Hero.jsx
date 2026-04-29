import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6 border border-primary-200 dark:border-primary-800/50"
          >
            Actively Seeking Internships & Job Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
          >
            Hi, I'm <br />
            <span className="text-gradient">Tirth Panchal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg"
          >
            An enthusiastic Software Developer with a solid academic foundation and a passion for building innovative mobile and web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary-500/25">
              Contact Me <ArrowRight size={18} />
            </a>
            <a href="/certificate/Tirth_Panchal.pdf" download className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium flex items-center gap-2 transition-all shadow-sm">
              Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-5 mt-10"
          >
            <SocialIcon href="https://github.com/TirthPanchal-06/" icon={<FaGithub size={20} />} />
            <SocialIcon href="https://www.linkedin.com/in/tirth-panchal0644" icon={<FaLinkedin size={20} />} />
            <SocialIcon href="tirthpanchal65@gmail.com" icon={<Mail size={20} />} />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative w-72 h-72 md:w-[400px] md:h-[400px]"
          >
            {/* Using a placeholder gradient blob or actual image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-violet-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="absolute inset-2 bg-slate-900 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl glass flex items-center justify-center">
              <span className="text-white text-8xl font-bold opacity-100">
                <img src="/certificate/logoimage.jpeg" alt="" />
              </span>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card px-4 py-3 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="font-semibold text-sm">Open to Work</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;
