import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const educationItems = [
    {
      degree: 'Integrated M.Tech in Software Engineering',
      institution: 'VIT Chennai',
      period: 'August 2021 – May 2026',
      location: 'Chennai, Tamil Nadu',
      status: 'Completed',
    },
    {
      degree: '12th Grade',
      institution: 'Sri Chaitanya Junior Kalasala',
      period: 'June 2019 – March 2021',
      location: 'Andhra Pradesh',
      status: 'Completed',
    },
    {
      degree: 'SSC (10th Class)',
      institution: 'St Arnold’s High School',
      period: 'June 2018 – March 2019',
      location: 'Andhra Pradesh',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-white border-t border-neutral-100">
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
            Education
          </h2>
        </motion.div>

        {/* Compact Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="p-5 sm:p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 shadow-2xs hover:shadow-sm hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-2xs">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {item.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                  {item.degree}
                </h3>
                <div className="text-xs font-semibold text-neutral-700 mt-1">
                  {item.institution}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-neutral-400" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
