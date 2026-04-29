import { AlignCenter, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-gradient inline-block mb-2">
              Portfolio.
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/TirthPanchal-06" icon={<FaGithub size={20} />} />
            <SocialLink href="http://www.linkedin.com/in/tirth-panchal0644" icon={<FaLinkedin size={20} />} />
            <SocialLink href="https://x.com/PanchalTirth12" icon={<FaTwitter size={20} />} />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm" style={{ marginLeft: "450px" }}>
            © {currentYear} Tirth Panchal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all"
  >
    {icon}
  </a>
);

export default Footer;
