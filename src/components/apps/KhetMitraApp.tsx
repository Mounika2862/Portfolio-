import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Droplets,
  Thermometer,
  Wind,
  Cpu,
  MapPin,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  BarChart3,
  Sun,
  CloudRain,
  Layers,
  ArrowRight,
  RefreshCw,
  Power,
  TrendingDown,
  Clock
} from 'lucide-react';

interface KhetMitraAppProps {
  deviceType: 'tablet' | 'phone';
  activePage: number;
  onPageChange: (page: number) => void;
}

export const KhetMitraApp: React.FC<KhetMitraAppProps> = ({ deviceType, activePage, onPageChange }) => {
  const [selectedZone, setSelectedZone] = useState<string>('ZONE B');
  const [isAutoMode, setIsAutoMode] = useState<boolean>(true);
  const [irrigationProgress, setIrrigationProgress] = useState<number>(34);
  const [animatedMoisture, setAnimatedMoisture] = useState<number>(50);

  // Animated numbers when entering Page 1 (Farm Dashboard)
  useEffect(() => {
    if (activePage === 0) {
      setAnimatedMoisture(45);
      const timer = setInterval(() => {
        setAnimatedMoisture((prev) => (prev < 68 ? prev + 1 : 68));
      }, 40);
      return () => clearInterval(timer);
    }
  }, [activePage]);

  // Water flow progress animation for Page 4 (Automatic Irrigation)
  useEffect(() => {
    if (activePage === 3) {
      setIrrigationProgress(10);
      const interval = setInterval(() => {
        setIrrigationProgress((prev) => (prev >= 100 ? 100 : prev + 6));
      }, 180);
      return () => clearInterval(interval);
    }
  }, [activePage]);

  const navItems = [
    { id: 0, label: 'Dashboard', icon: Activity },
    { id: 1, label: 'Sensors', icon: Cpu },
    { id: 2, label: 'Field Map', icon: Layers },
    { id: 3, label: 'Irrigation', icon: Droplets },
    { id: 4, label: 'Analytics', icon: BarChart3 },
    { id: 5, label: 'Weather', icon: Sun },
    { id: 6, label: 'Alerts', icon: AlertTriangle },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white text-neutral-900 select-none overflow-hidden font-sans">
      
      {/* App Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        <AnimatePresence mode="wait">

          {/* ================= PAGE 1: FARM DASHBOARD ================= */}
          {activePage === 0 && (
            <motion.div
              key="khet-p1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Good Morning · Sugarcane Block</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-0.5">
                    12 Acres Precision Farm
                  </h2>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-700">
                  HEALTH: GOOD
                </div>
              </div>

              {/* Large Metric Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-500 mb-1">
                    <span className="text-[11px] font-medium">Soil Moisture</span>
                    <Droplets className="w-3.5 h-3.5 text-cyan-600" />
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-neutral-900">
                    {animatedMoisture}%
                  </div>
                  <div className="text-[10px] text-emerald-600 mt-1 font-mono">Target: 65% Met</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-500 mb-1">
                    <span className="text-[11px] font-medium">Temperature</span>
                    <Thermometer className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-neutral-900">31°C</div>
                  <div className="text-[10px] text-neutral-500 mt-1 font-mono">Normal Ambient</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-500 mb-1">
                    <span className="text-[11px] font-medium">Air Humidity</span>
                    <Wind className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-neutral-900">72%</div>
                  <div className="text-[10px] text-indigo-600 mt-1 font-mono">Transpiration Low</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-500 mb-1">
                    <span className="text-[11px] font-medium">Water Tank</span>
                    <Droplets className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-neutral-900">74%</div>
                  <div className="text-[10px] text-emerald-600 mt-1 font-mono">Sufficient Storage</div>
                </div>
              </div>

              {/* Crop Stage Banner */}
              <div className="p-3.5 rounded-2xl bg-emerald-950 text-white flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
                    Crop Stage: Vegetative Tillering
                  </div>
                  <div className="text-xs sm:text-sm font-semibold mt-0.5">
                    ESP32 Closed-Loop Solenoid Active
                  </div>
                </div>
                <button
                  onClick={() => onPageChange(1)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold transition-colors cursor-pointer"
                >
                  Live Telemetry →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 2: LIVE SENSOR TELEMETRY ================= */}
          {activePage === 1 && (
            <motion.div
              key="khet-p2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <div className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                    <span>ESP32 Node #01</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-100 text-emerald-800">
                      LIVE
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono">Telemetry Frequency: 1 Hz Cloud Sync</div>
                </div>
                <span className="text-xs font-mono text-neutral-700">Water Flow: 4.2 L/min</span>
              </div>

              {/* Animated Continuous Waveform Telemetry Graph */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-800 mb-2">
                  <span>Soil Moisture Telemetry Stream</span>
                  <span className="text-[10px] font-mono text-emerald-600">68% Stabilized</span>
                </div>
                <div className="h-28 w-full relative flex items-end justify-between gap-1 pt-4">
                  {[62, 64, 65, 63, 67, 68, 66, 68, 69, 68, 67, 68, 69, 68].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        className="w-full bg-emerald-500 rounded-t-sm transition-all duration-300"
                        style={{ height: `${(val / 80) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] font-mono text-neutral-400 mt-2">
                  <span>10:00 AM</span>
                  <span>10:15 AM</span>
                  <span>10:30 AM (Now)</span>
                </div>
              </div>

              {/* Sensor Channels Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="text-[10px] text-neutral-400 font-mono">Soil Moisture Sensor</div>
                  <div className="text-base font-bold font-mono text-neutral-900 mt-0.5">68% (Adequate)</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="text-[10px] text-neutral-400 font-mono">Calibrated Thermistor</div>
                  <div className="text-base font-bold font-mono text-neutral-900 mt-0.5">31.2°C</div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(2)}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Check Field Zones</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 3: FIELD MAP ================= */}
          {activePage === 2 && (
            <motion.div
              key="khet-p3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Farm Zone Heatmap</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">4 Sectors Multi-Depth Grid</div>
                </div>
                <span className="text-xs font-mono text-emerald-600 font-semibold">12 Acres Total</span>
              </div>

              {/* 4 Clickable Field Zones Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: 'ZONE A', status: 'Optimal', moisture: '69%', last: '2h ago', alert: false },
                  { name: 'ZONE B', status: 'Needs Water', moisture: '42%', last: '5h ago', alert: true },
                  { name: 'ZONE C', status: 'Optimal', moisture: '66%', last: '3h ago', alert: false },
                  { name: 'ZONE D', status: 'Low Moisture', moisture: '48%', last: '4h ago', alert: true },
                ].map((z) => {
                  const isSelected = selectedZone === z.name;
                  return (
                    <div
                      key={z.name}
                      onClick={() => setSelectedZone(z.name)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-300'
                          : 'border-neutral-200 bg-neutral-50/60 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span>{z.name}</span>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                            z.alert ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {z.status}
                        </span>
                      </div>
                      <div className="text-base font-extrabold font-mono text-neutral-900 mt-1">
                        {z.moisture}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Last irrigated: {z.last}</div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Zone Detail Panel */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900">{selectedZone} Diagnostics:</span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Solenoid Ready
                  </span>
                </div>
                <div className="text-[11px] text-neutral-600">
                  Recommended water run: <strong>18 minutes</strong> (420 L for root depth).
                </div>
                <button
                  onClick={() => onPageChange(3)}
                  className="w-full py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Execute Automated Irrigation</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 4: AUTOMATIC IRRIGATION ================= */}
          {activePage === 3 && (
            <motion.div
              key="khet-p4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Solenoid Pump Controller</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Closed-Loop Valve Scheduling</div>
                </div>
                {/* AUTO/MANUAL toggle */}
                <button
                  onClick={() => setIsAutoMode(!isAutoMode)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isAutoMode
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {isAutoMode ? 'AUTO MODE' : 'MANUAL'}
                </button>
              </div>

              {/* Water Pipe Flow Animation Card */}
              <div className="p-4 rounded-2xl bg-neutral-950 text-white space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 animate-bounce" />
                    Water Flowing Through Field Pipes
                  </span>
                  <span className="font-mono text-xs">{irrigationProgress}%</span>
                </div>

                {/* Animated Pipeline Visual */}
                <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${irrigationProgress}%` }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-neutral-300 pt-1">
                  <div>Required: 420 L</div>
                  <div>Duration: 24 min</div>
                  <div>Next: 06:30 AM</div>
                </div>
              </div>

              {/* Irrigation Metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-400 font-mono block">Water Conservation</span>
                  <span className="text-base font-extrabold font-mono text-emerald-600">18% Saved</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-400 font-mono block">Over-Irrigation Reduced</span>
                  <span className="text-base font-extrabold font-mono text-indigo-600">22% Cut</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(4)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Water Analytics →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 5: WATER ANALYTICS ================= */}
          {activePage === 4 && (
            <motion.div
              key="khet-p5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Conservation Analytics</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Daily & Weekly Water Efficiency</div>
                </div>
                <span className="text-xs font-mono text-emerald-600 font-semibold">18% Overall Saved</span>
              </div>

              {/* Weekly Comparison Bars Growing */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-xs font-semibold text-neutral-800 mb-2">Daily Consumption (Liters)</div>
                <div className="h-28 flex items-end justify-between gap-2 pt-3">
                  {[
                    { day: 'Mon', val: 380 },
                    { day: 'Tue', val: 410 },
                    { day: 'Wed', val: 390 },
                    { day: 'Thu', val: 360 },
                    { day: 'Fri', val: 420 },
                    { day: 'Sat', val: 375 },
                    { day: 'Sun', val: 390 },
                  ].map((d) => (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-emerald-600 rounded-t-sm"
                        style={{ height: `${(d.val / 460) * 100}%` }}
                      />
                      <span className="text-[9px] font-mono text-neutral-500">{d.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="text-[10px] text-neutral-400 font-mono">Average Daily Usage</div>
                  <div className="text-base font-bold font-mono text-neutral-900 mt-0.5">390 L/day</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="text-[10px] text-neutral-400 font-mono">Threshold Adherence</div>
                  <div className="text-base font-bold font-mono text-emerald-600 mt-0.5">93% Accuracy</div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(5)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Weather Forecast →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 6: WEATHER + PREDICTION ================= */}
          {activePage === 5 && (
            <motion.div
              key="khet-p6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Climate & Rain Forecast</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Micro-climate Predictive AI</div>
                </div>
                <span className="text-xs font-mono text-amber-600 font-semibold">Sunny / Arid</span>
              </div>

              {/* Weather Stats Grid */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <Sun className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                  <div className="text-xs font-bold font-mono">31°C</div>
                  <div className="text-[9px] text-neutral-400">Temp</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <CloudRain className="w-4 h-4 text-cyan-500 mx-auto mb-1" />
                  <div className="text-xs font-bold font-mono">18%</div>
                  <div className="text-[9px] text-neutral-400">Rain Prob</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <Wind className="w-4 h-4 text-indigo-500 mx-auto mb-1" />
                  <div className="text-xs font-bold font-mono">12 km/h</div>
                  <div className="text-[9px] text-neutral-400">Wind</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <Droplets className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                  <div className="text-xs font-bold font-mono">72%</div>
                  <div className="text-[9px] text-neutral-400">Humidity</div>
                </div>
              </div>

              {/* AI Recommendation Cards */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                  <span className="font-bold text-emerald-800">Zone A & C:</span>
                  <span className="text-emerald-700 ml-1">No irrigation required for the next 8 hours.</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                  <span className="font-bold text-amber-800">Zone B Alert:</span>
                  <span className="text-amber-700 ml-1">Irrigation required within 2 hours to avoid root stress.</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(6)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  View System Alerts →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 7: ALERTS ================= */}
          {activePage === 6 && (
            <motion.div
              key="khet-p7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Notifications & Alerts</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Real-time Push Dispatcher</div>
                </div>
                <span className="text-xs font-mono text-neutral-500">All Nodes Synced</span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { text: 'Irrigation completed for Zone A (420 L released)', type: 'success', time: '10m ago' },
                  { text: 'Soil moisture optimal across Sector 1', type: 'success', time: '35m ago' },
                  { text: 'Zone B moisture below critical 45% threshold', type: 'warning', time: '1h ago' },
                  { text: 'Water storage tank level checked at 74%', type: 'info', time: '2h ago' },
                ].map((alert, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      alert.type === 'warning'
                        ? 'bg-amber-50/70 border-amber-200 text-amber-900'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {alert.type === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      <span className="font-medium">{alert.text}</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 shrink-0 ml-2">{alert.time}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  onClick={() => onPageChange(0)}
                  className="flex-1 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold cursor-pointer text-center"
                >
                  Restart Farm Demo
                </button>
                <button
                  onClick={() => onPageChange(3)}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold cursor-pointer text-center"
                >
                  Open Valve Control
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
                isActive ? 'text-emerald-600 font-bold' : 'text-neutral-500 hover:text-neutral-800'
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
