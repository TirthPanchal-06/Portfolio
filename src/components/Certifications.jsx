import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Award, FileText, Download, Eye } from 'lucide-react';

const certificatesData = [
  { filename: "AWS .pdf", name: "AWS Certification", type: "pdf" },
  { filename: "Android With Kotil.pdf", name: "Android With Kotlin", type: "pdf" },
  { filename: "Build a Firebase Android Application (Part II).pdf", name: "Firebase Android App (Part II)", type: "pdf" },
  { filename: "Build a Firebase Android Application.pdf", name: "Firebase Android App", type: "pdf" },
  { filename: "Data_Analytics.jpeg", name: "Data Analytics", type: "img" },
  { filename: "Google SEO Fundamentals.pdf", name: "Google SEO Fundamentals", type: "pdf" },
  { filename: "Introduction to Cybersecurity Essentials.pdf", name: "Cybersecurity Essentials", type: "pdf" },
  { filename: "TATA.pdf", name: "TATA Certification", type: "pdf" },
  { filename: "TATA_new.png", name: "TATA Certification (Badge)", type: "img" },
  { filename: "Technical Support Fundamentals.pdf", name: "Technical Support Fundamentals", type: "pdf" },
  { filename: "Walmart .pdf", name: "Walmart Certification", type: "pdf" }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Licenses & Certifications" 
          subtitle="Continuous learning and skill validation through official courses."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="glass-card flex flex-col overflow-hidden group hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border-b border-slate-200 dark:border-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors" />
                {cert.type === 'img' ? (
                  <img src={`/certificate/${cert.filename}`} alt={cert.name} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <Award size={48} className="text-primary-400 dark:text-primary-600/50 group-hover:scale-110 transition-transform" />
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="text-slate-400 shrink-0 mt-1" size={18} />
                  <h3 className="text-[15px] font-bold text-slate-800 dark:text-white leading-snug group-hover:text-primary-500 transition-colors">
                    {cert.name}
                  </h3>
                </div>
                
                <div className="mt-auto grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  <a 
                    href={`/certificate/${cert.filename}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Eye size={14} /> Preview
                  </a>
                  <a 
                    href={`/certificate/${cert.filename}`} 
                    download
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-sm"
                  >
                    <Download size={14} /> Download
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

export default Certifications;
