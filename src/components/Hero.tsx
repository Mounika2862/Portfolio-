import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-white">
      {/* Very subtle ambient light for Apple-like soft depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-neutral-100/60 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Mobile Profile Image order-first; Desktop order-last in right col */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden flex justify-center"
          >
            <div className="relative group">
              <div className="w-56 h-56 rounded-full p-2 bg-gradient-to-b from-neutral-100 via-white to-neutral-50 ring-1 ring-neutral-200/90 shadow-xl shadow-neutral-900/5 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-50 relative flex items-center justify-center border-2 border-white shadow-inner">
                  <img
                    src="/mono.jpeg"
                    alt={RESUME_INFO.name}
                    className="w-full h-full object-cover object-[center_22%]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Column: Name, Title, Resume-grounded Summary, CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Round icon before Mounika name */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/80 shadow-2xs">
              <img
                src="/mouni.png"
                alt="Mounika Icon"
                className="w-5 h-5 rounded-full object-cover shadow-2xs"
              />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-semibold text-neutral-800 tracking-wide uppercase">
                Available for Opportunities
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3.5 flex-wrap">
                <img
                  src="/mouni.png"
                  alt="Mounika Logo"
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover shadow-sm ring-2 ring-neutral-200/90"
                />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]">
                  {RESUME_INFO.name}
                </h1>
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-neutral-600">
                {RESUME_INFO.role}
              </p>
            </div>

            {/* Resume-grounded short summary */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              {RESUME_INFO.summary}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#showcase"
                className="px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-full transition-all shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Featured Apps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 rounded-full transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Contact Me</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={RESUME_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-full border border-neutral-200/70 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={RESUME_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-full border border-neutral-200/70 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${RESUME_INFO.email}`}
                  className="p-3 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-full border border-neutral-200/70 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Desktop): Circular Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:col-span-5 lg:flex justify-end"
          >
            <div className="relative">
              {/* Soft decorative halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-100 to-neutral-50 rounded-full blur-xl -z-10 opacity-70"></div>

              {/* Circular profile image container */}
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full p-2.5 bg-gradient-to-b from-neutral-100 via-white to-neutral-50 ring-1 ring-neutral-200/80 shadow-2xl shadow-neutral-900/5 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-50 relative flex items-center justify-center border-2 border-white shadow-inner">
                  <img
                    src="/mono.jpeg"
                    alt={RESUME_INFO.name}
                    className="w-full h-full object-cover object-[center_22%]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
