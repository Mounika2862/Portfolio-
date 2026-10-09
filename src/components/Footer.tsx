import React from 'react';
import { RESUME_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-white border-t border-neutral-200/80 text-neutral-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          
          {/* Round icon before Mounika name in footer */}
          <div className="flex items-center gap-3.5 text-center md:text-left justify-center md:justify-start">
            <img
              src="/mouni.png"
              alt="Mounika Logo"
              className="w-10 h-10 rounded-full object-cover shadow-2xs ring-1 ring-neutral-200/80 shrink-0"
            />
            <div>
              <span className="text-lg font-bold text-neutral-900 tracking-tight">
                {RESUME_INFO.name}
              </span>
              <p className="text-xs text-neutral-500 mt-0.5">
                Software Engineer · AI & Intelligent Automation Systems
              </p>
            </div>
          </div>

          {/* Clean HTML Anchor Links: GitHub · LinkedIn · Email */}
          <div className="flex items-center gap-6 text-xs font-medium text-neutral-600">
            <a
              href={RESUME_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href={RESUME_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href={`mailto:${RESUME_INFO.email}`}
              className="hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright line with mini icon */}
        <div className="pt-8 text-center text-xs text-neutral-400 font-normal flex items-center justify-center gap-2">
          <img
            src="/mouni.png"
            alt="Mounika icon"
            className="w-4 h-4 rounded-full object-cover inline-block"
          />
          <span>© 2026 {RESUME_INFO.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
