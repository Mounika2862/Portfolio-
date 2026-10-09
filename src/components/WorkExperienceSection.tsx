import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const WorkExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: 'Assistant Professor – DBMS & MySQL',
      company: 'Six Phrase Edutech Pvt. Ltd.',
      location: 'VSB Engineering College, Coimbatore',
      period: 'July 2026 – Present',
      technologies: ['MySQL', 'SQL', 'DBMS', 'ER Modeling', 'Query Optimization', 'Transactions'],
    },
    {
      role: 'Software Developer Intern',
      company: 'TechCiti Software Consulting Pvt. Ltd.',
      location: 'Bengaluru, Karnataka',
      period: 'May 2024 – July 2024',
      technologies: ['Python', 'Django', 'scikit-learn', 'Pandas', 'NumPy', 'REST APIs'],
    },
    {
      role: 'Data Analyst Intern',
      company: 'Codegnan IT Solutions Pvt. Ltd.',
      location: 'Vijayawada, Andhra Pradesh',
      period: 'July 2023 – September 2023',
      technologies: ['Python', 'Speech Recognition API', 'IoT Relays', 'Data Parsing', 'Hardware Logic'],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-neutral-50/60 border-t border-neutral-100">
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
            Work Experience
          </h2>
        </motion.div>

        {/* Compact Work Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:border-neutral-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                  {exp.role}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-neutral-700 mt-0.5">
                  {exp.company}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 mt-3">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-50 border border-neutral-200 text-[11px] font-mono text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex sm:flex-col sm:items-end justify-between sm:justify-center gap-1.5 text-xs font-mono text-neutral-500 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                <span className="flex items-center gap-1 bg-neutral-50 border border-neutral-200/80 px-2.5 py-1 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 bg-neutral-50 border border-neutral-200/80 px-2.5 py-1 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {exp.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
