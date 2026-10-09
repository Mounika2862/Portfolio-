import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Code2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      id: 'sql',
      title: 'Advanced SQL Certificate',
      issuer: 'HackerRank',
      icon: ShieldCheck,
    },
    {
      id: 'agile',
      title: 'Agile Scrum in Practice',
      issuer: 'Infosys Springboard',
      icon: Award,
    },
    {
      id: 'web',
      title: 'Legacy Responsive Web Design V8',
      issuer: 'freeCodeCamp',
      icon: Code2,
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-20 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Certifications
          </h2>
        </motion.div>

        {/* Compact 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 shadow-2xs hover:shadow-sm hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-2xs text-neutral-900">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-neutral-700 font-mono">
                  <span>{cert.issuer}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
