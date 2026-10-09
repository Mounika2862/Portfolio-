import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plane,
  Hotel,
  MapPin,
  Sparkles,
  Navigation,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Search,
  Compass,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Luggage,
  Users,
  Star,
  Map as MapIcon,
  Home,
  Bookmark,
  Share2
} from 'lucide-react';

interface ViharAIAppProps {
  deviceType: 'tablet' | 'phone';
  activePage: number;
  onPageChange: (page: number) => void;
}

export const ViharAIApp: React.FC<ViharAIAppProps> = ({ deviceType, activePage, onPageChange }) => {
  // Page 1: Animated typed search query
  const fullSearchQuery = 'Plan a 5-day trip to Japan from Hyderabad';
  const [typedQuery, setTypedQuery] = useState('');
  const [selectedFlight, setSelectedFlight] = useState<number | null>(0);
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);
  const [activeMapPin, setActiveMapPin] = useState<string>('Tokyo');

  useEffect(() => {
    if (activePage === 0) {
      setTypedQuery('');
      let i = 0;
      const interval = setInterval(() => {
        if (i <= fullSearchQuery.length) {
          setTypedQuery(fullSearchQuery.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 55);
      return () => clearInterval(interval);
    }
  }, [activePage]);

  // Page 2: Sequential agents
  const [agentStep, setAgentStep] = useState(3);
  useEffect(() => {
    if (activePage === 1) {
      setAgentStep(0);
      const timer1 = setTimeout(() => setAgentStep(1), 700);
      const timer2 = setTimeout(() => setAgentStep(2), 1500);
      const timer3 = setTimeout(() => setAgentStep(3), 2300);
      const timer4 = setTimeout(() => setAgentStep(4), 3100);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [activePage]);

  // Page 7: Count up total price
  const [animatedPrice, setAnimatedPrice] = useState(0);
  useEffect(() => {
    if (activePage === 6) {
      setAnimatedPrice(40000);
      let curr = 40000;
      const step = 4500;
      const target = 108740;
      const timer = setInterval(() => {
        curr += step;
        if (curr >= target) {
          setAnimatedPrice(target);
          clearInterval(timer);
        } else {
          setAnimatedPrice(curr);
        }
      }, 70);
      return () => clearInterval(timer);
    }
  }, [activePage]);

  const navItems = [
    { id: 0, label: 'Home', icon: Home },
    { id: 1, label: 'AI Planner', icon: Sparkles },
    { id: 2, label: 'Flights', icon: Plane },
    { id: 3, label: 'Hotels', icon: Hotel },
    { id: 4, label: 'Itinerary', icon: Calendar },
    { id: 5, label: 'Map', icon: MapIcon },
    { id: 6, label: 'Summary', icon: CreditCard },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white text-neutral-900 select-none overflow-hidden font-sans">
      
      {/* App Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        <AnimatePresence mode="wait">
          
          {/* ================= PAGE 1: AI HOME ================= */}
          {activePage === 0 && (
            <motion.div
              key="vihar-p1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Vihar AI · Travel Agent</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-0.5">
                    Where are you going?
                  </h2>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 text-xs font-bold">
                  AM
                </div>
              </div>

              {/* Large AI Search Card with Typing Animation */}
              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 shadow-2xs space-y-2">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span>Autonomous Natural Language Planner</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-3 rounded-xl border border-neutral-200 shadow-inner">
                  <Search className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-neutral-800">
                    {typedQuery}
                    <span className="inline-block w-1.5 h-4 bg-indigo-600 ml-0.5 animate-pulse align-middle" />
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                  <span>LangGraph Agent + Groq LPU</span>
                  <span className="text-indigo-600 font-semibold cursor-pointer" onClick={() => onPageChange(1)}>
                    Run Planner →
                  </span>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'Flights', icon: Plane, page: 2 },
                  { label: 'Hotels', icon: Hotel, page: 3 },
                  { label: 'Itinerary', icon: Calendar, page: 4 },
                  { label: 'Live Map', icon: MapIcon, page: 5 },
                ].map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      onClick={() => onPageChange(action.page)}
                      className="p-2.5 rounded-xl bg-white border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex flex-col items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-semibold text-neutral-700">{action.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Popular Destinations Scroll */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-800 mb-2">
                  <span>Curated Global Destinations</span>
                  <span className="text-[10px] text-neutral-500 font-mono">Live Cache</span>
                </div>
                <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { city: 'Tokyo', country: 'Japan', price: '₹48,240', tag: 'High-Speed Rail' },
                    { city: 'Paris', country: 'France', price: '₹54,100', tag: 'Art & Wine' },
                    { city: 'Dubai', country: 'UAE', price: '₹28,500', tag: 'Desert Safari' },
                    { city: 'Singapore', country: 'SG', price: '₹32,400', tag: 'City Garden' },
                  ].map((dest) => (
                    <div
                      key={dest.city}
                      onClick={() => onPageChange(1)}
                      className="min-w-[130px] p-3 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-2xs hover:border-indigo-400 transition-all cursor-pointer shrink-0"
                    >
                      <div className="text-[10px] text-indigo-600 font-mono font-medium">{dest.tag}</div>
                      <div className="text-sm font-bold text-neutral-900 mt-0.5">{dest.city}</div>
                      <div className="text-[10px] text-neutral-500">{dest.country}</div>
                      <div className="text-xs font-mono font-semibold text-neutral-800 mt-2">{dest.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 2: AI TRIP PLANNER ================= */}
          {activePage === 1 && (
            <motion.div
              key="vihar-p2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-indigo-600 uppercase font-semibold">
                    Autonomous StateGraph
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    Building your Japan journey...
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono font-bold text-indigo-700">
                  {agentStep >= 4 ? '100%' : '78%'}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${Math.min(100, (agentStep + 1) * 20)}%` }}
                />
              </div>

              {/* Sequential Agent Nodes */}
              <div className="space-y-2">
                {[
                  { name: 'Planner Agent', desc: 'Decomposed 5-day query into parallel sub-graphs', role: 'Groq LPU' },
                  { name: 'Flight Agent', desc: 'Queried direct & 1-stop routes HYD → NRT', role: 'Live Flight API' },
                  { name: 'Hotel Agent', desc: 'Validated Tokyo central availability & guest reviews', role: 'Inventory API' },
                  { name: 'Itinerary Agent', desc: 'Sequencing Shibuya, Kyoto transit, and day tours', role: 'LangGraph' },
                  { name: 'Optimization Agent', desc: 'Reduced prompt token footprint from 35k to 2k', role: 'Compression' },
                ].map((agent, idx) => {
                  const isDone = agentStep >= idx;
                  const isWorking = agentStep === idx;

                  return (
                    <div
                      key={agent.name}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between text-xs ${
                        isDone
                          ? 'bg-neutral-50/90 border-neutral-200'
                          : isWorking
                          ? 'bg-indigo-50/50 border-indigo-300 ring-1 ring-indigo-200'
                          : 'bg-white border-neutral-100 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isDone ? 'bg-indigo-600 text-white' : 'bg-neutral-200 text-neutral-600'
                          }`}
                        >
                          {isDone ? '✓' : idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-900">{agent.name}</div>
                          <div className="text-[10px] text-neutral-500">{agent.desc}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600">
                        {agent.role}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  33,000 Tokens Saved (90% cut)
                </span>
                <button
                  onClick={() => onPageChange(2)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>View Flights</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 3: FLIGHT SEARCH ================= */}
          {activePage === 2 && (
            <motion.div
              key="vihar-p3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 flex items-center gap-2">
                    <span>HYD</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                    <span>NRT (Tokyo)</span>
                  </h3>
                  <div className="text-[11px] text-neutral-500 font-mono">12 Oct – 17 Oct · 2 Passengers</div>
                </div>
                <span className="text-xs font-mono text-indigo-600 font-semibold">Live Fare Feed</span>
              </div>

              {/* Filters */}
              <div className="flex gap-1.5 overflow-x-auto text-[10px] font-medium text-neutral-600 pb-1">
                {['Lowest Price', 'Non-stop', '1 Stop', 'Earliest Departure'].map((f, i) => (
                  <span
                    key={f}
                    className={`px-2.5 py-1 rounded-full border whitespace-nowrap cursor-pointer ${
                      i === 0
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-white border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Flight Cards */}
              <div className="space-y-2">
                {[
                  { id: 0, airline: 'IndiGo Airlines', time: '06:30 → 19:45', stops: '1 Stop · 14h 20m', price: '₹48,240', badge: 'Fastest' },
                  { id: 1, airline: 'Singapore Airlines', time: '11:15 → 06:20 (+1)', stops: '1 Stop · 15h 35m', price: '₹53,900', badge: 'Top Rated' },
                  { id: 2, airline: 'Air India Express', time: '02:00 → 18:30', stops: '1 Stop · 16h 00m', price: '₹46,100', badge: 'Best Value' },
                ].map((flight) => {
                  const isSelected = selectedFlight === flight.id;
                  return (
                    <div
                      key={flight.airline}
                      onClick={() => setSelectedFlight(flight.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50/40 border-indigo-400 ring-1 ring-indigo-300'
                          : 'bg-neutral-50/60 border-neutral-200/80 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-bold text-neutral-900">{flight.airline}</span>
                        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                          {flight.badge}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-bold font-mono text-neutral-800">{flight.time}</div>
                          <div className="text-[10px] text-neutral-500">{flight.stops}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-mono font-extrabold text-neutral-900">{flight.price}</div>
                          <div className="text-[9px] text-neutral-400">Taxes included</div>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="mt-3 pt-2.5 border-t border-indigo-200/60 flex items-center justify-between text-[11px]">
                          <span className="text-neutral-600">Baggage: 30kg · Meal included</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onPageChange(3);
                            }}
                            className="px-3 py-1 rounded-md bg-indigo-600 text-white font-semibold text-[10px] hover:bg-indigo-500"
                          >
                            Select Flight →
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 4: HOTEL DISCOVERY ================= */}
          {activePage === 3 && (
            <motion.div
              key="vihar-p4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Tokyo Stays</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Shinjuku & Shibuya · 5 Nights</div>
                </div>
                <span className="text-xs font-mono text-indigo-600 font-semibold">Curated Stays</span>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    id: 0,
                    name: 'Shinjuku Grand Palace Hotel',
                    stars: '4.8',
                    reviews: '1,240',
                    price: '₹8,400',
                    dist: '250m from Shinjuku Station',
                    perks: ['Free High-Speed WiFi', 'Japanese Breakfast', 'Subway Direct Access'],
                  },
                  {
                    id: 1,
                    name: 'Shibuya Stream Modern Suites',
                    stars: '4.7',
                    reviews: '890',
                    price: '₹9,200',
                    dist: 'At Shibuya Crossing',
                    perks: ['Sky Deck Access', 'Gym & Spa', 'Automated Check-in'],
                  },
                ].map((hotel) => (
                  <div
                    key={hotel.name}
                    className="p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 shadow-2xs hover:border-indigo-300 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-neutral-900">{hotel.name}</h4>
                        <div className="text-[10px] text-neutral-500 mt-0.5">{hotel.dist}</div>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold text-amber-700">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{hotel.stars}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2 mb-3">
                      {hotel.perks.map((p) => (
                        <span key={p} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600">
                          {p}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-neutral-200/60">
                      <div>
                        <span className="text-sm font-bold font-mono text-neutral-900">{hotel.price}</span>
                        <span className="text-[10px] text-neutral-500"> / night</span>
                      </div>
                      <button
                        onClick={() => onPageChange(4)}
                        className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-semibold cursor-pointer"
                      >
                        Reserve Hotel →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 5: AI ITINERARY ================= */}
          {activePage === 4 && (
            <motion.div
              key="vihar-p5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">5-Day Curated Timeline</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Day-by-Day Optimized Schedule</div>
                </div>
                <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Optimized by Vihar AI
                </span>
              </div>

              {/* Timeline Items */}
              <div className="space-y-3">
                <div className="border-l-2 border-indigo-500 pl-3 space-y-2">
                  <div className="text-xs font-bold font-mono text-indigo-700">DAY 01 · Arrival & Shibuya Neon</div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/70 flex justify-between">
                      <span className="font-semibold text-neutral-800">09:00 AM · Narita Express Transit</span>
                      <span className="text-neutral-500 font-mono">Airport Transfer</span>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/70 flex justify-between">
                      <span className="font-semibold text-neutral-800">12:30 PM · Shinjuku Hotel Check-in</span>
                      <span className="text-neutral-500 font-mono">Luggage Drop</span>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/70 flex justify-between">
                      <span className="font-semibold text-neutral-800">03:30 PM · Shibuya Sky Observatory</span>
                      <span className="text-emerald-600 font-mono">Ticket Confirmed</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-neutral-300 pl-3 space-y-2">
                  <div className="text-xs font-bold font-mono text-neutral-700">DAY 02 · Heritage & Akihabara Tech</div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/70 flex justify-between">
                      <span className="font-semibold text-neutral-800">09:00 AM · Meiji Jingu Forest Shrine</span>
                      <span className="text-neutral-500 font-mono">Walking Tour</span>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/70 flex justify-between">
                      <span className="font-semibold text-neutral-800">02:00 PM · Akihabara Electronics District</span>
                      <span className="text-indigo-600 font-mono">Tech Hub</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={() => onPageChange(5)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>View Trip Map</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 6: LIVE TRIP MAP ================= */}
          {activePage === 5 && (
            <motion.div
              key="vihar-p6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Multi-City Map Route</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Tokaido Shinkansen High-Speed Route</div>
                </div>
                <span className="text-xs font-mono text-indigo-600 font-semibold">Active Geolocation</span>
              </div>

              {/* Map Illustration Box */}
              <div className="w-full h-44 sm:h-52 rounded-2xl bg-neutral-100 border border-neutral-200 relative overflow-hidden flex items-center justify-center p-4">
                {/* SVG Route Line */}
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 200">
                  <path
                    d="M 60 70 Q 200 130 330 90"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />
                  {/* Transit arrow */}
                  <circle cx="60" cy="70" r="8" fill="#4f46e5" />
                  <circle cx="200" cy="115" r="8" fill="#4f46e5" />
                  <circle cx="330" cy="90" r="8" fill="#4f46e5" />
                </svg>

                {/* Pulsing Markers */}
                <div
                  onClick={() => setActiveMapPin('Osaka')}
                  className="absolute left-10 top-10 flex flex-col items-center cursor-pointer"
                >
                  <span className="w-3 h-3 rounded-full bg-indigo-600 animate-ping absolute"></span>
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <span className="text-[10px] font-bold text-neutral-800 bg-white px-1.5 py-0.5 rounded shadow mt-1">
                    Osaka
                  </span>
                </div>

                <div
                  onClick={() => setActiveMapPin('Kyoto')}
                  className="absolute left-1/2 top-24 -translate-x-1/2 flex flex-col items-center cursor-pointer"
                >
                  <span className="w-3 h-3 rounded-full bg-indigo-600 animate-ping absolute"></span>
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <span className="text-[10px] font-bold text-neutral-800 bg-white px-1.5 py-0.5 rounded shadow mt-1">
                    Kyoto (Shrines)
                  </span>
                </div>

                <div
                  onClick={() => setActiveMapPin('Tokyo')}
                  className="absolute right-12 top-16 flex flex-col items-center cursor-pointer"
                >
                  <span className="w-3 h-3 rounded-full bg-emerald-600 animate-ping absolute"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                  <span className="text-[10px] font-bold text-neutral-800 bg-white px-1.5 py-0.5 rounded shadow mt-1">
                    Tokyo Hub
                  </span>
                </div>
              </div>

              {/* Pin Detail Card */}
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-neutral-900">{activeMapPin} Node:</span>
                  <span className="text-neutral-600 ml-1.5">
                    {activeMapPin === 'Tokyo'
                      ? '3 Days · Metro transit card linked'
                      : activeMapPin === 'Kyoto'
                      ? '1 Day · Fushimi Inari & Bamboo Grove'
                      : '1 Day · Dotonbori Street Food'}
                  </span>
                </div>
                <button
                  onClick={() => onPageChange(6)}
                  className="px-3 py-1 rounded-md bg-neutral-900 text-white font-semibold text-[10px] cursor-pointer"
                >
                  View Cost →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 7: TRIP SUMMARY ================= */}
          {activePage === 6 && (
            <motion.div
              key="vihar-p7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase">
                    Deterministic Budget Satisfied
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900">Total Trip Summary</h3>
                </div>
                <span className="text-xs font-mono text-neutral-500">5 Days · 2 Guests</span>
              </div>

              {/* Breakdown Cards */}
              <div className="space-y-2">
                {[
                  { label: 'Round-trip Flights (IndiGo HYD-NRT)', amount: '₹48,240', icon: Plane },
                  { label: 'Hotels (5 Nights in Shinjuku)', amount: '₹42,000', icon: Hotel },
                  { label: 'Activities & JR Shinkansen Pass', amount: '₹18,500', icon: MapIcon },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-indigo-600" />
                        <span className="font-medium text-neutral-800">{item.label}</span>
                      </div>
                      <span className="font-mono font-bold text-neutral-900">{item.amount}</span>
                    </div>
                  );
                })}
              </div>

              {/* Total Card with Count-Up */}
              <div className="p-4 rounded-2xl bg-neutral-900 text-white flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    Total Estimated Expense
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-white mt-0.5">
                    ₹{animatedPrice.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
                    ✓ Within Target
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => onPageChange(0)}
                  className="flex-1 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold cursor-pointer text-center"
                >
                  Restart Demo
                </button>
                <button
                  onClick={() => onPageChange(1)}
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer text-center"
                >
                  Save Itinerary
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Internal Bottom Navigation Bar */}
      <div className="border-t border-neutral-200 bg-white/95 px-2 py-2 flex items-center justify-around shrink-0">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition-colors cursor-pointer ${
                isActive ? 'text-indigo-600 font-bold' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[9px] font-medium leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
};
