import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViharAIApp } from './apps/ViharAIApp';
import { KhetMitraApp } from './apps/KhetMitraApp';
import { CardioRiskApp } from './apps/CardioRiskApp';
import { AmbientVoiceApp } from './apps/AmbientVoiceApp';
import {
  Wifi,
  Battery,
} from 'lucide-react';

interface AppMeta {
  id: string;
  name: string;
  tagline: string;
  category: string;
  accentColor: string;
  totalPages: number;
  pageNames: string[];
}

const APPS_META: AppMeta[] = [
  {
    id: 'vihar-ai',
    name: 'Vihar AI',
    tagline: 'Autonomous AI Travel Agent & Multi-Step LLM Pipeline',
    category: 'AI / GenAI Agent',
    accentColor: '#4f46e5',
    totalPages: 7,
    pageNames: ['AI Home', 'StateGraph', 'Flights', 'Hotels', 'Itinerary', 'Live Map', 'Summary'],
  },
  {
    id: 'khetmitra',
    name: 'KhetMitra',
    tagline: 'Automated Agriculture Irrigation & Sensor Telemetry System',
    category: 'IoT & Precision Farming',
    accentColor: '#059669',
    totalPages: 7,
    pageNames: ['Dashboard', 'Sensors', 'Field Map', 'Irrigation', 'Analytics', 'Weather', 'Alerts'],
  },
  {
    id: 'cardiorisk',
    name: 'CardioRisk',
    tagline: 'Clinical Decision Support & Heart Disease Prediction System',
    category: 'Clinical Machine Learning',
    accentColor: '#e11d48',
    totalPages: 7,
    pageNames: ['Intake', 'ML Pipeline', 'Risk Result', 'Insights', 'Models', 'History', 'Advice'],
  },
  {
    id: 'ambientvoice',
    name: 'AmbientVoice',
    tagline: 'Voice-Controlled Home Automation & Hardware Relays',
    category: 'IoT & Ambient Audio',
    accentColor: '#9333ea',
    totalPages: 8,
    pageNames: ['Dashboard', 'Voice', 'Pipeline', 'Relay Action', 'Rooms', 'Controls', 'History', 'Routines'],
  },
];

export const FeaturedAppsShowcase: React.FC = () => {
  const [selectedAppIndex, setSelectedAppIndex] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(0);
  const [isDemoPlaying, setIsDemoPlaying] = useState<boolean>(true);

  const currentApp = APPS_META[selectedAppIndex];

  // Automatic Demo Mode: cycles through pages every 4.5 seconds
  useEffect(() => {
    if (!isDemoPlaying) return;

    const timer = setInterval(() => {
      setActivePage((prev) => (prev + 1) % currentApp.totalPages);
    }, 4500);

    return () => clearInterval(timer);
  }, [isDemoPlaying, currentApp.totalPages]);

  // When switching project: reset to Page 1 (index 0) and smooth transition
  const handleSelectApp = (index: number) => {
    if (index === selectedAppIndex) return;
    setSelectedAppIndex(index);
    setActivePage(0);
  };

  const renderActiveApp = (deviceType: 'tablet' | 'phone') => {
    switch (currentApp.id) {
      case 'vihar-ai':
        return (
          <ViharAIApp
            deviceType={deviceType}
            activePage={activePage}
            onPageChange={(page) => {
              setActivePage(page);
              setIsDemoPlaying(false);
            }}
          />
        );
      case 'khetmitra':
        return (
          <KhetMitraApp
            deviceType={deviceType}
            activePage={activePage}
            onPageChange={(page) => {
              setActivePage(page);
              setIsDemoPlaying(false);
            }}
          />
        );
      case 'cardiorisk':
        return (
          <CardioRiskApp
            deviceType={deviceType}
            activePage={activePage}
            onPageChange={(page) => {
              setActivePage(page);
              setIsDemoPlaying(false);
            }}
          />
        );
      case 'ambientvoice':
        return (
          <AmbientVoiceApp
            deviceType={deviceType}
            activePage={activePage}
            onPageChange={(page) => {
              setActivePage(page);
              setIsDemoPlaying(false);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section id="showcase" className="py-20 md:py-32 bg-neutral-50/70 border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Featured Apps
          </h2>
        </motion.div>

        {/* Product Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {APPS_META.map((app, index) => {
            const isSelected = index === selectedAppIndex;
            return (
              <button
                key={app.id}
                onClick={() => handleSelectApp(index)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-md shadow-neutral-900/15'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/90 border border-neutral-200/90 shadow-2xs'
                }`}
              >
                <span>{app.name}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            DUAL SCREEN HARDWARE SETUP: TABLET (PRIMARY) + IPHONE (COMPANION)
            Both screens actively render and play the application prototype!
           ========================================================================= */}
        <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">

          {/* 1. TABLET SCREEN (Silver / White Hardware Frame) */}
          <div className="w-full max-w-2xl lg:max-w-[640px] aspect-[4/3] rounded-[34px] p-3 sm:p-4 bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-200 shadow-2xl shadow-neutral-900/12 border border-neutral-300 relative shrink-0">
            {/* Tablet Inner Glass Bezel */}
            <div className="w-full h-full rounded-[24px] bg-white overflow-hidden flex flex-col border border-neutral-200 shadow-inner relative">
              
              {/* Tablet Top Status Bar */}
              <div className="h-7 bg-neutral-50/90 border-b border-neutral-100 px-4 flex items-center justify-between text-[10px] text-neutral-500 font-mono select-none shrink-0">
                <span className="font-semibold text-neutral-700">9:41 AM</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-neutral-800">
                    {currentApp.name} Tablet OS · {currentApp.pageNames[activePage]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-3 h-3 text-neutral-600" />
                  <Battery className="w-3.5 h-3.5 text-neutral-600" />
                </div>
              </div>

              {/* Tablet Interactive Application Screen */}
              <div className="flex-1 overflow-hidden relative bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tablet-app-${currentApp.id}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    {renderActiveApp('tablet')}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* 2. IPHONE SCREEN (Silver / White Hardware Frame) */}
          <div className="w-[270px] sm:w-[290px] h-[550px] rounded-[46px] p-3 bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-200 shadow-2xl shadow-neutral-900/18 border border-neutral-300 relative shrink-0 -mt-6 lg:mt-0 lg:-ml-10 z-10">
            {/* iPhone Inner Screen */}
            <div className="w-full h-full rounded-[38px] bg-white overflow-hidden flex flex-col border border-neutral-200 shadow-inner relative">
              
              {/* iPhone Dynamic Island / Notch */}
              <div className="pt-2.5 pb-1 px-5 flex items-center justify-between bg-neutral-50/80 border-b border-neutral-100 select-none shrink-0">
                <span className="text-[10px] font-semibold text-neutral-700 font-mono">9:41</span>
                {/* Dynamic island pill */}
                <div className="w-18 h-4 bg-neutral-900 rounded-full flex items-center justify-end pr-1">
                  <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
                </div>
                <div className="flex items-center gap-1">
                  <Battery className="w-3 h-3 text-neutral-600" />
                </div>
              </div>

              {/* iPhone Interactive Application Screen */}
              <div className="flex-1 overflow-hidden relative bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`phone-app-${currentApp.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    {renderActiveApp('phone')}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Home indicator bar at bottom */}
              <div className="py-1 bg-white flex justify-center shrink-0">
                <div className="w-24 h-1 bg-neutral-300 rounded-full"></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
