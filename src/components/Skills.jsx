import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import {
  FaReact, FaAngular, FaHtml5, FaCss3Alt, FaSass, FaJsSquare, 
  FaNodeJs, FaPython, FaDocker, FaGithub, FaFigma, FaLinux, FaAws, FaDatabase, FaCode 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiRedux, 
  SiExpress, SiDjango, SiFirebase, SiGraphql, SiMongodb, SiPostgresql, 
  SiMysql, SiSupabase, SiVercel, SiNetlify, SiFlutter, SiDart, 
  SiPostman, SiGithubactions, SiJsonwebtokens
} from 'react-icons/si';
import { TbApi, TbDeviceMobile } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="text-slate-800 dark:text-white" />, level: 85 },
      { name: "Angular", icon: <FaAngular className="text-[#DD0031]" />, level: 75 },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-[#F7DF1E]" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
      { name: "Framer Motion", icon: <SiFramer className="text-slate-800 dark:text-white" />, level: 80 },
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" />, level: 80 },
      { name: "HTML5 / CSS3", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
      { name: "SCSS", icon: <FaSass className="text-[#CC6699]" />, level: 85 },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 85 },
      { name: "Express.js", icon: <SiExpress className="text-slate-800 dark:text-white" />, level: 80 },
      { name: "Django", icon: <SiDjango className="text-[#092E20] dark:text-[#44B78B]" />, level: 80 },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: 85 },
      { name: "REST APIs", icon: <TbApi className="text-primary-500" />, level: 90 },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#000000] dark:text-white" />, level: 85 },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, level: 80 },
      { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" />, level: 70 },
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, level: 85 },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: 80 },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" />, level: 75 },
      { name: "AWS Basics", icon: <FaAws className="text-[#FF9900]" />, level: 65 },
      { name: "Vercel", icon: <SiVercel className="text-slate-800 dark:text-white" />, level: 90 },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" />, level: 85 },
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" />, level: 85 },
      { name: "Dart", icon: <SiDart className="text-[#0175C2]" />, level: 80 },
      { name: "Firebase Integration", icon: <SiFirebase className="text-[#FFCA28]" />, level: 85 },
      { name: "Responsive UI", icon: <TbDeviceMobile className="text-violet-500" />, level: 90 },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub className="text-slate-800 dark:text-white" />, level: 90 },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, level: 70 },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, level: 85 },
      { name: "VS Code", icon: <FaCode className="text-[#007ACC]" />, level: 95 },
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" />, level: 80 },
      { name: "Linux", icon: <FaLinux className="text-slate-800 dark:text-white" />, level: 75 },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" />, level: 65 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Technical Expertise" 
          subtitle="Modern industry-standard technologies organized by development domains."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 50 }}
              className="glass-card p-6 md:p-8 relative group overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 border border-slate-200 dark:border-slate-800 hover:border-primary-500/30"
            >
              {/* Glowing Background Accent */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-violet-500/0 group-hover:from-primary-500/10 group-hover:via-violet-500/10 group-hover:to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl z-0" />
              
              <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-3 relative z-10">
                <span className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 inline-block" />
                {category.title}
              </h3>
              
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl drop-shadow-sm group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-primary-500 font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                        className="bg-gradient-to-r from-primary-500 to-violet-500 h-full rounded-full relative overflow-hidden"
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover/skill:animate-[shimmer_1.5s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default Skills;
