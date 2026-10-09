import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Database, Cpu, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-neutral-800" />;
      case 'Code':
        return <Code2 className="w-5 h-5 text-neutral-800" />;
      case 'Database':
        return <Database className="w-5 h-5 text-neutral-800" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-neutral-800" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-neutral-800" />;
      default:
        return <Sparkles className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Technical Skills
          </h2>
          <p className="text-base text-neutral-600 mt-2">
            Core technologies and frameworks extracted directly from hands-on software development, AI model orchestration, and edge IoT engineering.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`p-7 rounded-[26px] bg-neutral-50/70 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header with Icon and Category Name */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-neutral-200/90 flex items-center justify-center shadow-2xs">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-medium text-neutral-500">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Technology Pills/Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-neutral-200/70 text-xs font-medium text-neutral-800 shadow-2xs hover:border-neutral-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
