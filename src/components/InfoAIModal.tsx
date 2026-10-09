import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Layers,
  Cpu,
  HeartPulse,
  Mic,
  Compass,
} from 'lucide-react';
import { resolveIntent, IntentType } from '../data/infoAIKeywords';

// 3D vector Robot Avatar for Info AI
export const RobotAvatar: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 200 230" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#38BDF8" floodOpacity="0.85" />
      </filter>
      <linearGradient id="armGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
      <linearGradient id="earGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
    </defs>

    {/* Floating Shadow Below */}
    <ellipse cx="100" cy="222" rx="34" ry="5.5" fill="#94A3B8" opacity="0.3" />

    {/* Left Arm */}
    <path
      d="M52 108 C34 116 24 140 28 165 C31 178 45 180 50 166 C56 148 64 128 66 116 Z"
      fill="url(#armGrad)"
      stroke="#CBD5E1"
      strokeWidth="1.5"
    />

    {/* Right Arm */}
    <path
      d="M148 108 C166 116 176 140 172 165 C169 178 155 180 150 166 C144 148 136 128 134 116 Z"
      fill="url(#armGrad)"
      stroke="#CBD5E1"
      strokeWidth="1.5"
    />

    {/* Torso / Body */}
    <rect
      x="56"
      y="98"
      width="88"
      height="82"
      rx="34"
      fill="url(#bodyGrad)"
      stroke="#CBD5E1"
      strokeWidth="2"
    />

    {/* Chest Details & Seam Lines */}
    <path
      d="M78 132 L122 132"
      stroke="#94A3B8"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M74 154 L78 165 L122 165 L126 154"
      stroke="#94A3B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
      opacity="0.5"
    />

    {/* Neck Joint */}
    <rect x="80" y="94" width="40" height="14" rx="7" fill="#CBD5E1" />

    {/* Ear Pods */}
    <rect x="34" y="44" width="16" height="34" rx="8" fill="url(#earGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
    <ellipse cx="42" cy="61" rx="4" ry="9" fill="#94A3B8" opacity="0.5" />

    <rect x="150" y="44" width="16" height="34" rx="8" fill="url(#earGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
    <ellipse cx="158" cy="61" rx="4" ry="9" fill="#94A3B8" opacity="0.5" />

    {/* Head Shell */}
    <rect
      x="44"
      y="14"
      width="112"
      height="92"
      rx="44"
      fill="url(#bodyGrad)"
      stroke="#CBD5E1"
      strokeWidth="2"
    />

    {/* Head Top Crest Highlight */}
    <path
      d="M76 22 Q100 18 124 22"
      stroke="#FFFFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.95"
    />

    {/* Dark Glossy Visor / Screen Face */}
    <rect
      x="54"
      y="26"
      width="92"
      height="66"
      rx="28"
      fill="url(#screenGrad)"
      stroke="#475569"
      strokeWidth="1.5"
    />

    {/* Visor Glare / Reflection */}
    <path
      d="M66 35 Q100 29 134 35"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.25"
    />

    {/* Glowing Cyan Eyes */}
    <path
      d="M74 57 Q83 48 92 57"
      stroke="#38BDF8"
      strokeWidth="5"
      strokeLinecap="round"
      filter="url(#cyanGlow)"
    />
    <path
      d="M74 57 Q83 48 92 57"
      stroke="#E0F2FE"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M108 57 Q117 48 126 57"
      stroke="#38BDF8"
      strokeWidth="5"
      strokeLinecap="round"
      filter="url(#cyanGlow)"
    />
    <path
      d="M108 57 Q117 48 126 57"
      stroke="#E0F2FE"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Glowing Cyan Smiling Mouth */}
    <path
      d="M93 72 Q100 78 107 72"
      stroke="#38BDF8"
      strokeWidth="4"
      strokeLinecap="round"
      filter="url(#cyanGlow)"
    />
    <path
      d="M94 72 Q100 77 106 72"
      stroke="#E0F2FE"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// High-fidelity profile portrait of Mounika
export const MounikaPortrait: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <div className={`rounded-full overflow-hidden bg-neutral-100 ring-2 ring-neutral-200/90 shadow-sm flex items-center justify-center shrink-0 ${className}`}>
    <img
      src="/mono.jpeg"
      alt="Ainamilli Mounika"
      className="w-full h-full object-cover object-[center_22%]"
    />
  </div>
);

export type CardType =
  | 'contact_all'
  | 'contact_email_only'
  | 'contact_linkedin_only'
  | 'contact_github_only'
  | 'graduation'
  | 'education_full'
  | 'current_role'
  | 'experience'
  | 'projects_all'
  | 'project_vihar'
  | 'project_khetmitra'
  | 'project_cardio'
  | 'project_ambient'
  | 'skills'
  | 'certifications'
  | 'location'
  | null;

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  cardType?: CardType;
}

const CONTACT_INFO = {
  email: 'mounikaainamilli@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ainamilli-mounika-4820a427a',
  github: 'https://github.com/Mounika2862',
};

export const InfoAIModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: "Hi! I’m Mounika’s personal AI assistant. How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Context-aware response engine following strict rules
  const getAssistantResponse = (userQuery: string): { text: string; cardType?: CardType } => {
    const intent: IntentType = resolveIntent(userQuery);

    switch (intent) {
      // 1. GREETINGS: Respond naturally without default profile info dump
      case 'greeting':
        return {
          text: "Hi! I’m Mounika’s personal AI assistant. How can I help you today?",
        };

      // 2A. SPECIFIC EMAIL ALONE: Display only the Email icon with clickable email link
      case 'contact_email_only':
        return {
          text: "Here is Mounika's email address. Click the icon below to write directly:",
          cardType: 'contact_email_only',
        };

      // 2B. SPECIFIC LINKEDIN ALONE: Display only the LinkedIn icon with clickable profile link
      case 'contact_linkedin_only':
        return {
          text: "Here is Mounika's LinkedIn profile. Click the icon below to connect:",
          cardType: 'contact_linkedin_only',
        };

      // 2C. SPECIFIC GITHUB ALONE: Display only the GitHub icon with clickable profile link
      case 'contact_github_only':
        return {
          text: "Here is Mounika's GitHub profile. Click the icon below to explore her repositories:",
          cardType: 'contact_github_only',
        };

      // 2D. GENERAL CONTACT DETAILS: Show contact card with profile photo and 3 clickable icons (LinkedIn, Email, GitHub)
      case 'contact_all':
        return {
          text: "Here are Mounika's contact details. Click any icon below to connect:",
          cardType: 'contact_all',
        };

      // 3. GRADUATION & EDUCATION: Most recent and relevant educational details (VIT Chennai)
      case 'graduation':
        return {
          text: "Mounika has completed her Integrated M.Tech in Software Engineering from VIT Chennai (August 2021 – May 2026).",
          cardType: 'graduation',
        };

      // 3B. FULL EDUCATION HISTORY (If specifically asked for all/schooling)
      case 'education_full':
        return {
          text: "Here is Mounika's complete academic background:",
          cardType: 'education_full',
        };

      // 4. CURRENT ROLE & STATUS: Explain only current job title, company, and responsibilities (No past internships)
      case 'current_role':
        return {
          text: "Mounika currently works as an Assistant Professor in DBMS & MySQL at Six Phrase Edutech (VSB Engineering College, Coimbatore).",
          cardType: 'current_role',
        };

      // 5. PREVIOUS WORK EXPERIENCE: Only when asked about past work / internships
      case 'experience':
        return {
          text: "Here is Mounika's previous professional and internship experience:",
          cardType: 'experience',
        };

      // 6A. LATEST PROJECTS (ALL)
      case 'projects_all':
        return {
          text: "Here are Mounika's latest engineering and AI projects:",
          cardType: 'projects_all',
        };

      // 6B. SPECIFIC PROJECTS
      case 'project_vihar':
        return {
          text: "Here are the details for Vihar AI:",
          cardType: 'project_vihar',
        };

      case 'project_khetmitra':
        return {
          text: "Here are the details for KhetMitra:",
          cardType: 'project_khetmitra',
        };

      case 'project_cardio':
        return {
          text: "Here are the details for CardioRisk ML:",
          cardType: 'project_cardio',
        };

      case 'project_ambient':
        return {
          text: "Here are the details for AmbientVoice IoT:",
          cardType: 'project_ambient',
        };

      // 7. SKILLS
      case 'skills':
        return {
          text: "Here is Mounika's core technical skillset:",
          cardType: 'skills',
        };

      // 8. CERTIFICATIONS
      case 'certifications':
        return {
          text: "Here are Mounika's certifications and technical appointments:",
          cardType: 'certifications',
        };

      // 9. LOCATION
      case 'location':
        return {
          text: "Mounika is currently based in Coimbatore, Tamil Nadu, India.",
          cardType: 'location',
        };

      // 10. GENERAL ABOUT (Only when explicitly asked about her bio / who is she)
      case 'about':
        return {
          text: "Mounika is a Software Engineer specializing in AI & Intelligent Automation Systems. She completed her Integrated M.Tech in Software Engineering at VIT Chennai and is currently working as an Assistant Professor in DBMS & MySQL at Six Phrase Edutech.",
        };

      // 11. UNKNOWN / UNMATCHED INPUT
      case 'unknown':
      default:
        return {
          text: "I didn't quite catch that. You can ask me specifically about Mounika's graduation, current role, latest projects, or contact channels!",
        };
    }
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || query).trim();
    if (!text) return;

    const userMessage: ChatMessage = { role: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAssistantResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: response.text,
          cardType: response.cardType,
        },
      ]);
      setIsTyping(false);
    }, 280);
  };

  const samplePrompts = [
    'What is she doing currently?',
    'Where did she graduate from?',
    'What are her latest projects?',
    'How to contact Mounika?',
  ];

  return (
    <>
      {/* Floating Personal Robot Avatar Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-white text-neutral-900 shadow-2xl hover:shadow-cyan-500/20 transition-all border border-neutral-200/90 flex items-center justify-center cursor-pointer relative group"
          aria-label="Open Info AI"
        >
          <div className="w-9 h-9 flex items-center justify-center shrink-0">
            <RobotAvatar className="w-9 h-9" />
          </div>
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
        </motion.button>
      </div>

      {/* Floating Card Box Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[380px] sm:w-[420px] max-w-[94vw] h-[550px] max-h-[84vh] bg-white border border-neutral-200/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans select-none"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-neutral-50/95 border-b border-neutral-200/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center shrink-0">
                  <RobotAvatar className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900 leading-tight flex items-center gap-1.5">
                    <span>Info AI</span>
                    <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Online
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-500">Mounika's Personal Assistant</div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors cursor-pointer"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Suggested Prompt Pills */}
            <div className="px-3 py-2 bg-neutral-100/60 border-b border-neutral-200/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0 text-[10px]">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p)}
                  className="px-2.5 py-1 rounded-full bg-white border border-neutral-200/80 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 transition-all shrink-0 cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Messages Chat Flow */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-white">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    m.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`flex gap-2 ${
                      m.role === 'user' ? 'justify-end' : 'justify-start'
                    } max-w-full`}
                  >
                    {m.role === 'assistant' && (
                      <div className="w-6 h-6 shrink-0 mt-0.5">
                        <RobotAvatar className="w-6 h-6" />
                      </div>
                    )}

                    <div
                      className={`max-w-[90%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-neutral-900 text-white rounded-br-xs'
                          : 'bg-neutral-50 border border-neutral-200/90 text-neutral-800 rounded-bl-xs shadow-2xs'
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>

                      {/* DYNAMIC INFORMATION CARDS */}

                      {/* 1. GENERAL CONTACT CARD: Profile Photo + 3 Clickable Icons (LinkedIn, Email, GitHub) */}
                      {m.cardType === 'contact_all' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                          <div className="flex items-center gap-3">
                            <MounikaPortrait className="w-12 h-12" />
                            <div>
                              <h4 className="text-xs font-bold text-neutral-900">Ainamilli Mounika</h4>
                              <p className="text-[11px] text-neutral-500">Software Engineer · AI & Systems</p>
                            </div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-around gap-2">
                            {/* LinkedIn Icon Link */}
                            <a
                              href={CONTACT_INFO.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all group"
                              title="LinkedIn Profile"
                            >
                              <div className="w-9 h-9 rounded-full bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                                <Linkedin className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-medium text-neutral-600 group-hover:text-neutral-900">
                                LinkedIn
                              </span>
                            </a>

                            {/* Email Icon Link */}
                            <a
                              href={`mailto:${CONTACT_INFO.email}`}
                              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all group"
                              title="Send Email"
                            >
                              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                                <Mail className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-medium text-neutral-600 group-hover:text-neutral-900">
                                Email
                              </span>
                            </a>

                            {/* GitHub Icon Link */}
                            <a
                              href={CONTACT_INFO.github}
                              target="_blank"
                              rel="noreferrer"
                              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all group"
                              title="GitHub Profile"
                            >
                              <div className="w-9 h-9 rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                                <Github className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-medium text-neutral-600 group-hover:text-neutral-900">
                                GitHub
                              </span>
                            </a>
                          </div>
                        </div>
                      )}

                      {/* 2. SPECIFIC EMAIL CARD (Only Email Icon & Direct Link) */}
                      {m.cardType === 'contact_email_only' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0">
                              <Mail className="w-5 h-5" />
                            </div>
                            <div className="truncate">
                              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Email Address</div>
                              <div className="text-xs font-semibold text-neutral-900 font-mono truncate">{CONTACT_INFO.email}</div>
                            </div>
                          </div>
                          <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-medium flex items-center gap-1.5 shrink-0 transition-all shadow-2xs"
                          >
                            <span>Compose</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      {/* 3. SPECIFIC LINKEDIN CARD (Only LinkedIn Icon & Direct Link) */}
                      {m.cardType === 'contact_linkedin_only' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <div className="w-10 h-10 rounded-full bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/30 flex items-center justify-center shrink-0">
                              <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="truncate">
                              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">LinkedIn Profile</div>
                              <div className="text-xs font-semibold text-neutral-900 truncate">ainamilli-mounika</div>
                            </div>
                          </div>
                          <a
                            href={CONTACT_INFO.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-[#0077b5] hover:bg-[#006097] text-white text-[11px] font-medium flex items-center gap-1.5 shrink-0 transition-all shadow-2xs"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      {/* 4. SPECIFIC GITHUB CARD (Only GitHub Icon & Direct Link) */}
                      {m.cardType === 'contact_github_only' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-300 flex items-center justify-center shrink-0">
                              <Github className="w-5 h-5" />
                            </div>
                            <div className="truncate">
                              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">GitHub Profile</div>
                              <div className="text-xs font-semibold text-neutral-900 font-mono truncate">Mounika2862</div>
                            </div>
                          </div>
                          <a
                            href={CONTACT_INFO.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-medium flex items-center gap-1.5 shrink-0 transition-all shadow-2xs"
                          >
                            <span>View</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      {/* 5. GRADUATION CARD (Most Recent & Relevant) */}
                      {m.cardType === 'graduation' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3.5 border border-neutral-200/70 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-neutral-900 font-bold text-xs">
                              <GraduationCap className="w-4 h-4 text-neutral-800" />
                              <span>VIT Chennai</span>
                            </div>
                            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                              Completed
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-neutral-900">
                            Integrated M.Tech in Software Engineering
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-neutral-400" />
                              August 2021 – May 2026
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-neutral-400" />
                              Chennai, Tamil Nadu
                            </span>
                          </div>
                        </div>
                      )}

                      {/* 5B. FULL EDUCATION CARD */}
                      {m.cardType === 'education_full' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 space-y-2">
                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900">
                              <span>Integrated M.Tech in Software Engineering · VIT Chennai</span>
                              <span className="font-mono text-[10px] text-emerald-700 font-semibold">Completed</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900">
                              <span>12th Grade · Sri Chaitanya Junior Kalasala</span>
                              <span className="font-mono text-[10px] text-neutral-500">2019–2021</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900">
                              <span>SSC (10th) · St Arnold’s High School</span>
                              <span className="font-mono text-[10px] text-neutral-500">2018–2019</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 6. CURRENT ROLE CARD (Title, Company, Responsibilities Only) */}
                      {m.cardType === 'current_role' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3.5 border border-neutral-200/70 shadow-2xs space-y-2.5">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="text-xs font-bold text-neutral-900">Assistant Professor – DBMS & MySQL</div>
                              <div className="text-[11px] font-medium text-neutral-600">Six Phrase Edutech Pvt. Ltd.</div>
                              <div className="text-[10px] text-neutral-500 flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3 text-neutral-400" />
                                <span>VSB Engineering College, Coimbatore</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-900 text-white shrink-0">
                              Present
                            </span>
                          </div>

                          <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-600 space-y-1">
                            <div className="font-semibold text-neutral-800 text-[10px] uppercase tracking-wider">Responsibilities:</div>
                            <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                              <li>Teaching relational database architecture & schema normalization</li>
                              <li>Coursework on ER modeling, ACID properties & SQL optimization</li>
                              <li>Conducting hands-on MySQL lab sessions and query evaluation</li>
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-1 pt-1">
                            {['MySQL', 'SQL', 'DBMS', 'ER Modeling', 'Query Optimization'].map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-mono text-neutral-700">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 7. PREVIOUS WORK EXPERIENCE CARD */}
                      {m.cardType === 'experience' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 space-y-2.5">
                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">Software Developer Intern</span>
                              <span className="text-[10px] font-mono text-neutral-500">May – Jul 2024</span>
                            </div>
                            <div className="text-[11px] text-neutral-600 mt-0.5">TechCiti Software Consulting · Bengaluru</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {['Python', 'Django', 'scikit-learn', 'Pandas', 'NumPy'].map((t) => (
                                <span key={t} className="px-1.5 py-0.5 rounded bg-neutral-100 text-[9px] font-mono text-neutral-700">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">Data Analyst Intern</span>
                              <span className="text-[10px] font-mono text-neutral-500">Jul – Sep 2023</span>
                            </div>
                            <div className="text-[11px] text-neutral-600 mt-0.5">Codegnan IT Solutions · Vijayawada</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {['Python', 'Speech Recognition', 'IoT Relays', 'Data Parsing'].map((t) => (
                                <span key={t} className="px-1.5 py-0.5 rounded bg-neutral-100 text-[9px] font-mono text-neutral-700">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 8. ALL PROJECTS CARD */}
                      {m.cardType === 'projects_all' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 space-y-2">
                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">1. Vihar AI</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">90% Token Savings</span>
                            </div>
                            <p className="text-[11px] text-neutral-600 mt-1">Autonomous AI Travel Agent with multi-step LangGraph & Groq pipeline.</p>
                          </div>

                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">2. KhetMitra</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-100 text-sky-800">18% Water Saved</span>
                            </div>
                            <p className="text-[11px] text-neutral-600 mt-1">Automated precision irrigation for sugarcane via ESP32 & Firebase.</p>
                          </div>

                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">3. CardioRisk ML</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">Zero False Negatives</span>
                            </div>
                            <p className="text-[11px] text-neutral-600 mt-1">Heart disease predictive clinical platform comparing ML models.</p>
                          </div>

                          <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">4. AmbientVoice IoT</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">&lt; 350ms Latency</span>
                            </div>
                            <p className="text-[11px] text-neutral-600 mt-1">Voice-controlled smart home automation with hardware relay actuation.</p>
                          </div>
                        </div>
                      )}

                      {/* 8A. VIHAR CARD */}
                      {m.cardType === 'project_vihar' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3.5 border border-neutral-200/70 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-neutral-900">Vihar AI · Autonomous Travel Agent</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-white">LangGraph</span>
                          </div>
                          <p className="text-[11px] text-neutral-600">
                            Multi-step LLM pipeline built with LangGraph and Groq, cutting token consumption from 35k to 2k per query (90% savings) with MongoDB caching and live flight/hotel APIs.
                          </p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {['LangGraph', 'Groq', 'MongoDB', 'Docker', 'Python', 'REST APIs'].map((t) => (
                              <span key={t} className="px-1.5 py-0.5 rounded bg-neutral-100 text-[9px] font-mono text-neutral-700">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 8B. KHETMITRA CARD */}
                      {m.cardType === 'project_khetmitra' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3.5 border border-neutral-200/70 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-neutral-900">KhetMitra · Smart Irrigation</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">18% Water Saved</span>
                          </div>
                          <p className="text-[11px] text-neutral-600">
                            Automated irrigation system for sugarcane utilizing ESP32 soil-moisture and climate telemetry synced with Firebase, achieving 91% scheduling accuracy.
                          </p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {['ESP32', 'Firebase', 'Android Studio', 'IoT Sensors', 'C++'].map((t) => (
                              <span key={t} className="px-1.5 py-0.5 rounded bg-neutral-100 text-[9px] font-mono text-neutral-700">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 8C. CARDIORISK CARD */}
                      {m.cardType === 'project_cardio' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3.5 border border-neutral-200/70 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-neutral-900">CardioRisk ML · Heart Disease Prediction</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800">Zero False Negatives</span>
                          </div>
                          <p className="text-[11px] text-neutral-600">
                            Clinical decision support platform comparing Decision Tree and Logistic Regression models with Django and pandas for real-time diagnostic risk assessment.
                          </p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {['Django', 'scikit-learn', 'Pandas', 'NumPy', 'Python'].map((t) => (
                              <span key={t} className="px-1.5 py-0.5 rounded bg-neutral-100 text-[9px] font-mono text-neutral-700">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 8D. AMBIENTVOICE CARD */}
                      {m.cardType === 'project_ambient' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3.5 border border-neutral-200/70 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-neutral-900">AmbientVoice IoT · Smart Home</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800">&lt; 350ms Latency</span>
                          </div>
                          <p className="text-[11px] text-neutral-600">
                            Voice-controlled automation system using Python and Speech Recognition API to actuate physical hardware relays and appliances via spoken commands.
                          </p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {['Python', 'Speech Recognition', 'IoT Relays', 'Hardware Logic'].map((t) => (
                              <span key={t} className="px-1.5 py-0.5 rounded bg-neutral-100 text-[9px] font-mono text-neutral-700">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 9. SKILLS CARD */}
                      {m.cardType === 'skills' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 space-y-2">
                          <div className="bg-white rounded-xl p-2.5 border border-neutral-200/70 shadow-2xs">
                            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">AI / ML & GenAI</div>
                            <div className="text-[11px] font-medium text-neutral-800 mt-1">LangGraph, Intelligent Agents, LangChain, scikit-learn, Pandas, NumPy</div>
                          </div>
                          <div className="bg-white rounded-xl p-2.5 border border-neutral-200/70 shadow-2xs">
                            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Languages & Backend</div>
                            <div className="text-[11px] font-medium text-neutral-800 mt-1">SQL, Python, Java, Django, MySQL, MongoDB, Firebase, REST APIs</div>
                          </div>
                          <div className="bg-white rounded-xl p-2.5 border border-neutral-200/70 shadow-2xs">
                            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">IoT & DevOps</div>
                            <div className="text-[11px] font-medium text-neutral-800 mt-1">ESP32, Android Studio, Docker, AWS (EC2, S3), Git, Postman</div>
                          </div>
                        </div>
                      )}

                      {/* 10. CERTIFICATIONS CARD */}
                      {m.cardType === 'certifications' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 space-y-1.5">
                          {[
                            { name: 'Advanced SQL Certificate', org: 'HackerRank' },
                            { name: 'Agile Scrum in Practice', org: 'Infosys Springboard' },
                            { name: 'Legacy Responsive Web Design V8', org: 'freeCodeCamp' },
                            { name: 'AI Research Assistant', org: 'VIT Chennai' },
                            { name: 'Android Club Technical Volunteer', org: 'VIT Chennai' },
                          ].map((c) => (
                            <div key={c.name} className="bg-white rounded-lg p-2 border border-neutral-200/70 shadow-2xs flex items-center justify-between text-[11px]">
                              <span className="font-semibold text-neutral-900">{c.name}</span>
                              <span className="text-[10px] font-mono text-neutral-500">{c.org}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 11. LOCATION CARD */}
                      {m.cardType === 'location' && (
                        <div className="mt-3 pt-3 border-t border-neutral-200/80 bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-neutral-900">Coimbatore, Tamil Nadu</div>
                            <div className="text-[11px] text-neutral-500">Currently based here for teaching & research</div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 shrink-0">
                    <RobotAvatar className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-400 text-xs w-18">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Message Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-neutral-200 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                placeholder="Ask about role, graduation, projects, contact..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={!query.trim()}
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
