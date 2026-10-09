import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mic,
  Home,
  Power,
  Volume2,
  Sliders,
  Clock,
  Sparkles,
  CheckCircle2,
  Wind,
  Sun,
  Tv,
  ArrowRight,
  Layers,
  Settings,
  Calendar,
  Zap,
  Activity
} from 'lucide-react';

interface AmbientVoiceAppProps {
  deviceType: 'tablet' | 'phone';
  activePage: number;
  onPageChange: (page: number) => void;
}

export const AmbientVoiceApp: React.FC<AmbientVoiceAppProps> = ({ deviceType, activePage, onPageChange }) => {
  const [isLivingRoomLightOn, setIsLivingRoomLightOn] = useState<boolean>(true);
  const [brightness, setBrightness] = useState<number>(80);
  const [acTemp, setAcTemp] = useState<number>(24);
  const [fanSpeed, setFanSpeed] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [pipelineStep, setPipelineStep] = useState<number>(3);

  // Auto pipeline activation on page 2 (Command understanding)
  useEffect(() => {
    if (activePage === 2) {
      setPipelineStep(0);
      const t1 = setTimeout(() => setPipelineStep(1), 600);
      const t2 = setTimeout(() => setPipelineStep(2), 1400);
      const t3 = setTimeout(() => setPipelineStep(3), 2200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [activePage]);

  const navItems = [
    { id: 0, label: 'Home', icon: Home },
    { id: 1, label: 'Voice', icon: Mic },
    { id: 2, label: 'Pipeline', icon: Activity },
    { id: 3, label: 'Action', icon: Zap },
    { id: 4, label: 'Rooms', icon: Layers },
    { id: 5, label: 'Controls', icon: Sliders },
    { id: 6, label: 'History', icon: Clock },
    { id: 7, label: 'Routines', icon: Calendar },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white text-neutral-900 select-none overflow-hidden font-sans">
      
      {/* App Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        <AnimatePresence mode="wait">

          {/* ================= PAGE 1: SMART HOME DASHBOARD ================= */}
          {activePage === 0 && (
            <motion.div
              key="voice-p1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <div className="text-xs font-semibold text-purple-600 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Good Evening · Ambient Home</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-neutral-900 mt-0.5">
                    All Systems Operational
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                  4 Active Devices
                </span>
              </div>

              {/* Large Circular Microphone Button */}
              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200 text-center space-y-2">
                <button
                  onClick={() => onPageChange(1)}
                  className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-purple-600/20 transition-all cursor-pointer group"
                >
                  <Mic className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </button>
                <div className="text-xs font-bold text-neutral-900">Tap to Speak</div>
                <div className="text-[10px] text-neutral-500 font-mono">
                  Speech Recognition API · Listening for hardware relays
                </div>
              </div>

              {/* Quick Device Status Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-neutral-800">Living Room</span>
                    <span className="text-[10px] text-neutral-500 block">Main Light</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-100 text-purple-800">
                    ON
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-neutral-800">Thermostat</span>
                    <span className="text-[10px] text-neutral-500 block">Climate AC</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-200 text-neutral-800">
                    24°C
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-neutral-800">Ceiling Fan</span>
                    <span className="text-[10px] text-neutral-500 block">Master Suite</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-200 text-neutral-800">
                    MEDIUM
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-neutral-800">Kitchen</span>
                    <span className="text-[10px] text-neutral-500 block">Appliance Relays</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                    3 ONLINE
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 2: VOICE LISTENING STATE ================= */}
          {activePage === 1 && (
            <motion.div
              key="voice-p2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4 text-center py-2"
            >
              <div className="text-left border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-mono text-purple-600 font-semibold uppercase">
                  Acoustic Speech Stream
                </span>
                <h3 className="text-base font-bold text-neutral-900">Voice Recognition Active</h3>
              </div>

              {/* Pulsing Mic Graphic */}
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-purple-100 animate-ping absolute opacity-40"></div>
                <div className="w-18 h-18 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg relative z-10">
                  <Mic className="w-8 h-8" />
                </div>
              </div>

              {/* Moving Audio Waveform Bars */}
              <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-[10px] font-mono text-neutral-400 mb-2">Simulated Waveform Input</div>
                <div className="h-10 flex items-center justify-center gap-1.5">
                  {[12, 24, 38, 20, 34, 40, 26, 18, 36, 22, 14, 30, 24, 16].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-purple-500 rounded-full animate-pulse"
                      style={{ height: `${h}px`, animationDelay: `${i * 80}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Captured Command Box */}
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                <div className="text-[10px] font-mono text-purple-600 font-semibold uppercase">Spoken Command</div>
                <div className="text-sm font-bold text-neutral-900 mt-0.5">
                  "Turn on the living room lights"
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={() => onPageChange(2)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Process Intent →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 3: COMMAND UNDERSTANDING ================= */}
          {activePage === 2 && (
            <motion.div
              key="voice-p3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Understanding Command</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Intent Parsing Pipeline</div>
                </div>
                <span className="text-xs font-mono text-purple-600 font-semibold">Parser: Active</span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { name: '1. Speech-to-Text Conversion', desc: 'Audio stream transcribed to plaintext', ok: pipelineStep >= 0 },
                  { name: '2. Intent Detection Algorithm', desc: 'Identified ACTION: POWER_TOGGLE', ok: pipelineStep >= 1 },
                  { name: '3. Device Entity Extractor', desc: 'Target: LIVING_ROOM_MAIN_LIGHT', ok: pipelineStep >= 2 },
                  { name: '4. Hardware Pin Dispatcher', desc: 'Actuating GPIO Relay Pin #12', ok: pipelineStep >= 3 },
                ].map((step, idx) => (
                  <div
                    key={step.name}
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      step.ok ? 'bg-neutral-50 border-neutral-200' : 'bg-white border-neutral-100 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        step.ok ? 'bg-purple-600 text-white' : 'bg-neutral-200 text-neutral-600'
                      }`}>
                        {step.ok ? '✓' : idx + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-neutral-900">{step.name}</div>
                        <div className="text-[10px] text-neutral-500">{step.desc}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {step.ok ? 'Parsed' : 'Waiting'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(3)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Execute Relay →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 4: ACTION EXECUTION ================= */}
          {activePage === 3 && (
            <motion.div
              key="voice-p4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4 text-center py-2"
            >
              <div className="text-left border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase">
                  Relay Actuation Confirmed
                </span>
                <h3 className="text-base font-bold text-neutral-900">Command Executed Successfully</h3>
              </div>

              {/* State Transition Visual: OFF -> ON */}
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col items-center justify-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-base font-bold text-neutral-900">
                  Living Room Lights
                </div>
                <div className="flex items-center gap-3 font-mono text-xs font-bold">
                  <span className="px-2 py-0.5 rounded bg-neutral-200 text-neutral-600">OFF</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                  <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-white shadow-sm">
                    POWER: ON
                  </span>
                </div>
              </div>

              <div className="text-xs text-neutral-500 font-mono">
                Hardware response latency: <strong>310ms</strong> across serial GPIO.
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={() => onPageChange(4)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Explore Rooms →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 5: ROOM CONTROL ================= */}
          {activePage === 4 && (
            <motion.div
              key="voice-p5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Room Overview</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">3 Zones Configured</div>
                </div>
                <span className="text-xs font-mono text-neutral-500">Living Space</span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { name: 'Living Room', devices: 'Lights ON · AC 24°C', count: '2 Devices', active: true },
                  { name: 'Master Bedroom', devices: 'Lights OFF · Fan Medium', count: '2 Devices', active: false },
                  { name: 'Kitchen & Dining', devices: 'Exhaust Fan OFF · 3 Outlets', count: '4 Devices', active: false },
                ].map((room) => (
                  <div
                    key={room.name}
                    onClick={() => onPageChange(5)}
                    className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between hover:border-purple-300 transition-all cursor-pointer"
                  >
                    <div>
                      <div className="font-bold text-neutral-900">{room.name}</div>
                      <div className="text-[11px] text-neutral-500">{room.devices}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-700">
                      {room.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(5)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Device Controls →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 6: DEVICE CONTROL ================= */}
          {activePage === 5 && (
            <motion.div
              key="voice-p6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Living Room Controls</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Direct Micro-Interactions</div>
                </div>
                <button
                  onClick={() => setIsLivingRoomLightOn(!isLivingRoomLightOn)}
                  className={`px-3 py-1 rounded-full text-xs font-bold font-mono transition-all cursor-pointer ${
                    isLivingRoomLightOn ? 'bg-purple-600 text-white' : 'bg-neutral-200 text-neutral-700'
                  }`}
                >
                  LIGHT: {isLivingRoomLightOn ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* Brightness Presets */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="flex justify-between text-xs font-semibold text-neutral-800">
                  <span>Light Brightness Level</span>
                  <span className="font-mono text-purple-600">{brightness}%</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[20, 50, 80, 100].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBrightness(b)}
                      className={`py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        brightness === b
                          ? 'bg-purple-600 text-white shadow-2xs'
                          : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {b}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Climate AC & Fan Speed */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-500 block font-mono">Thermostat Temperature</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-lg font-bold font-mono">{acTemp}°C</span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setAcTemp(acTemp - 1)}
                        className="w-6 h-6 rounded bg-white border border-neutral-200 text-xs font-bold"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setAcTemp(acTemp + 1)}
                        className="w-6 h-6 rounded bg-white border border-neutral-200 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-500 block font-mono">Fan Speed</span>
                  <div className="flex gap-1 mt-1">
                    {(['Low', 'Medium', 'High'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setFanSpeed(s)}
                        className={`flex-1 py-1 rounded text-[10px] font-mono font-bold ${
                          fanSpeed === s ? 'bg-neutral-900 text-white' : 'bg-white border border-neutral-200 text-neutral-600'
                        }`}
                      >
                        {s[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(6)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  View Voice History →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 7: VOICE HISTORY ================= */}
          {activePage === 6 && (
            <motion.div
              key="voice-p7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Command History</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Acoustic Audit Trail</div>
                </div>
                <span className="text-xs font-mono text-neutral-500">3 Logged</span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { cmd: '"Turn on living room lights"', time: '2m ago', device: 'Living Room Light · Relay #12' },
                  { cmd: '"Set AC to 24 degrees"', time: '14m ago', device: 'Thermostat HVAC' },
                  { cmd: '"Turn off bedroom ceiling fan"', time: '1h ago', device: 'Master Suite Fan' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-neutral-900">{item.cmd}</span>
                      <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        ✓ Completed
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                      <span>{item.device}</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(7)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Smart Routines →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 8: AUTOMATIONS ================= */}
          {activePage === 7 && (
            <motion.div
              key="voice-p8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Automated Schedules</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Event & Time-Based Logic</div>
                </div>
                <span className="text-xs font-mono text-purple-600 font-semibold">2 Active</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-neutral-900">Morning Wake-up Routine</div>
                    <div className="text-[10px] text-neutral-500 font-mono">06:30 AM · Kitchen coffee + soft lighting</div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                    ACTIVE
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-neutral-900">Good Night Protocol</div>
                    <div className="text-[10px] text-neutral-500 font-mono">11:00 PM · Lock relays + AC 22°C</div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                    ACTIVE
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-neutral-900">Away Security Mode</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Manual Trigger · Motion sensor watch</div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-200 text-neutral-600">
                    STANDBY
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => onPageChange(0)}
                  className="flex-1 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold cursor-pointer text-center"
                >
                  Restart Ambient Home
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
              className={`flex flex-col items-center gap-0.5 py-1 px-1.5 rounded-lg transition-colors cursor-pointer ${
                isActive ? 'text-purple-600 font-bold' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
};
