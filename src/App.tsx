import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedAppsShowcase } from './components/FeaturedAppsShowcase';
import { EducationSection } from './components/EducationSection';
import { WorkExperienceSection } from './components/WorkExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InfoAIModal } from './components/InfoAIModal';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* Sticky Clean White Navigation */}
      <Navbar />

      {/* Main Content Sections: Profile → Skills → Featured Apps → Education → Work Experience → Certifications → Contact */}
      <main>
        {/* 1. Hero Section (Profile) */}
        <Hero />

        {/* 2. Technical Skills Section */}
        <SkillsSection />

        {/* 3. Featured Apps Continuous Device Showcase (iPhone + Tablet) */}
        <FeaturedAppsShowcase />

        {/* 4. Education Section */}
        <EducationSection />

        {/* 5. Work Experience Section */}
        <WorkExperienceSection />

        {/* 6. Certifications Section */}
        <CertificationsSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* Floating Personal AI Assistant */}
      <InfoAIModal />

      {/* Minimal White Footer */}
      <Footer />
    </div>
  );
}
