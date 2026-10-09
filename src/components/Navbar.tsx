import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Apps', href: '#showcase' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Left side: Round icon before Mounika name */}
        <a
          href="#about"
          className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors whitespace-nowrap flex items-center gap-2.5"
        >
          <img
            src="/mouni.png"
            alt="Mounika Logo"
            className="w-8 h-8 rounded-full object-cover shadow-2xs ring-1 ring-neutral-200/80"
          />
          <span>{RESUME_INFO.name}</span>
        </a>

        {/* Right side: Clean navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-neutral-900 after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-full transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white/98 backdrop-blur-xl px-5 py-5 space-y-3.5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-700 hover:text-neutral-950 py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3 text-neutral-600">
              <a href={RESUME_INFO.github} target="_blank" rel="noreferrer" className="p-1 hover:text-neutral-900">
                <Github className="w-4 h-4" />
              </a>
              <a href={RESUME_INFO.linkedin} target="_blank" rel="noreferrer" className="p-1 hover:text-neutral-900">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${RESUME_INFO.email}`} className="p-1 hover:text-neutral-900">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
