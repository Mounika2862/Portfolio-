import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HeartPulse,
  Activity,
  User,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sliders,
  BarChart2,
  Calendar,
  AlertCircle,
  FileText,
  Clock,
  ArrowRight,
  TrendingDown,
  Info
} from 'lucide-react';

interface CardioRiskAppProps {
  deviceType: 'tablet' | 'phone';
  activePage: number;
  onPageChange: (page: number) => void;
}

export const CardioRiskApp: React.FC<CardioRiskAppProps> = ({ deviceType, activePage, onPageChange }) => {
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [pipelineStep, setPipelineStep] = useState<number>(6);
  const [animatedRisk, setAnimatedRisk] = useState<number>(0);
  const [expandedCard, setExpandedCard] = useState<string | null>('bp');

  // Trigger button analysis transition on page 0
  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      onPageChange(1);
    }, 900);
  };

  // Pipeline execution animation on page 1
  useEffect(() => {
    if (activePage === 1) {
      setPipelineStep(0);
      const timers = [
        setTimeout(() => setPipelineStep(1), 500),
        setTimeout(() => setPipelineStep(2), 1100),
        setTimeout(() => setPipelineStep(3), 1700),
        setTimeout(() => setPipelineStep(4), 2300),
        setTimeout(() => setPipelineStep(5), 2900),
        setTimeout(() => setPipelineStep(6), 3500),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [activePage]);

  // Circular score animation on page 2
  useEffect(() => {
    if (activePage === 2) {
      setAnimatedRisk(0);
      const timer = setInterval(() => {
        setAnimatedRisk((prev) => (prev < 18 ? prev + 1 : 18));
      }, 50);
      return () => clearInterval(timer);
    }
  }, [activePage]);

  const navItems = [
    { id: 0, label: 'Patient', icon: User },
    { id: 1, label: 'ML Pipeline', icon: Activity },
    { id: 2, label: 'Risk Score', icon: HeartPulse },
    { id: 3, label: 'Insights', icon: Info },
    { id: 4, label: 'Models', icon: BarChart2 },
    { id: 5, label: 'History', icon: Calendar },
    { id: 6, label: 'Advice', icon: ShieldCheck },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white text-neutral-900 select-none overflow-hidden font-sans">
      
      {/* App Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        <AnimatePresence mode="wait">

          {/* ================= PAGE 1: PATIENT ASSESSMENT ================= */}
          {activePage === 0 && (
            <motion.div
              key="cardio-p1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <div className="text-xs font-semibold text-rose-600 flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>CardioRisk · Clinical Diagnosis</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-neutral-900 mt-0.5">
                    Patient Biometric Intake
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">ID: PT-2026-88</span>
              </div>

              {/* Patient Input Cards Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-400 font-mono block">Patient Age</span>
                  <span className="text-sm font-bold font-mono text-neutral-900 mt-0.5">54 Yrs</span>
                  <span className="text-[9px] text-neutral-400 block mt-0.5">Gender: Male</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-400 font-mono block">Resting BP</span>
                  <span className="text-sm font-bold font-mono text-neutral-900 mt-0.5">128 / 82 mmHg</span>
                  <span className="text-[9px] text-emerald-600 block mt-0.5">Normal Pre-hypertension</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-400 font-mono block">Total Serum Cholesterol</span>
                  <span className="text-sm font-bold font-mono text-neutral-900 mt-0.5">195 mg/dL</span>
                  <span className="text-[9px] text-emerald-600 block mt-0.5">Optimal Range (&lt;200)</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] text-neutral-400 font-mono block">Max Heart Rate</span>
                  <span className="text-sm font-bold font-mono text-neutral-900 mt-0.5">142 bpm</span>
                  <span className="text-[9px] text-neutral-500 block mt-0.5">Chest Pain: Type 0</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleStartAnalysis}
                  disabled={isAnalyzing}
                  className="w-full py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
                >
                  {isAnalyzing ? (
                    <>
                      <Activity className="w-4 h-4 animate-spin text-rose-400" />
                      <span>Analyzing Clinical Features...</span>
                    </>
                  ) : (
                    <>
                      <HeartPulse className="w-4 h-4 text-rose-400" />
                      <span>Analyze Cardiovascular Risk</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 2: ML PIPELINE ================= */}
          {activePage === 1 && (
            <motion.div
              key="cardio-p2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Machine Learning Pipeline</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Scikit-learn Classifier Routing</div>
                </div>
                <span className="text-xs font-mono text-rose-600 font-semibold">Active Inference</span>
              </div>

              {/* Step By Step ML Nodes */}
              <div className="space-y-2 text-xs">
                {[
                  { name: '1. Patient Data Ingestion', desc: 'Validated numerical ranges & types' },
                  { name: '2. Clinical Preprocessing', desc: 'Handled missing values with median imputation' },
                  { name: '3. Feature Scaling & Encoding', desc: 'Standardized BP & cholesterol vectors' },
                  { name: '4. Decision Tree Classifier', desc: 'Benchmarked tree splits on clinical entropy' },
                  { name: '5. Logistic Regression Model', desc: 'Calibrated sigmoid posterior probability' },
                  { name: '6. Ensemble Risk Calibration', desc: 'Synthesizing final diagnostic score' },
                ].map((step, idx) => {
                  const isDone = pipelineStep >= idx;
                  const isCurrent = pipelineStep === idx;
                  return (
                    <div
                      key={step.name}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                        isDone
                          ? 'bg-neutral-50 border-neutral-200'
                          : isCurrent
                          ? 'bg-rose-50 border-rose-300 ring-1 ring-rose-200'
                          : 'bg-white border-neutral-100 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isDone ? 'bg-rose-600 text-white' : 'bg-neutral-200 text-neutral-600'
                          }`}
                        >
                          {isDone ? '✓' : idx + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-neutral-900">{step.name}</div>
                          <div className="text-[10px] text-neutral-500">{step.desc}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {isDone ? 'Complete' : 'Pending'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(2)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>View Diagnostic Score</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 3: RISK RESULT ================= */}
          {activePage === 2 && (
            <motion.div
              key="cardio-p3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4 text-center"
            >
              <div className="text-left border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold">
                  Prediction Complete
                </span>
                <h3 className="text-base font-bold text-neutral-900">Patient Diagnostic Outcome</h3>
              </div>

              {/* Large Circular Animated Gauge */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#10b981"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * animatedRisk) / 100}
                      strokeLinecap="round"
                      fill="none"
                      className="transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-2xl font-extrabold font-mono text-neutral-900">{animatedRisk}%</span>
                    <span className="text-[9px] block text-neutral-400 font-mono">RISK SCORE</span>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold font-mono">
                    LOW CARDIAC RISK
                  </span>
                  <p className="text-xs text-neutral-600 mt-2 max-w-xs mx-auto">
                    Biometric signals align with typical healthy cardiovascular parameters. Zero high-risk flags triggered.
                  </p>
                </div>
              </div>

              {/* Quick Factor Pills */}
              <div className="grid grid-cols-4 gap-1.5 text-[10px] font-mono">
                <div className="p-2 rounded-xl bg-white border border-neutral-200">
                  <span className="text-neutral-400 block">BP</span>
                  <span className="font-bold text-emerald-600">Normal</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-neutral-200">
                  <span className="text-neutral-400 block">Cholesterol</span>
                  <span className="font-bold text-emerald-600">Normal</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-neutral-200">
                  <span className="text-neutral-400 block">Heart Rate</span>
                  <span className="font-bold text-emerald-600">Normal</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-neutral-200">
                  <span className="text-neutral-400 block">Age Risk</span>
                  <span className="font-bold text-emerald-600">Low</span>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={() => onPageChange(3)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Clinical Insights →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 4: CLINICAL INSIGHTS ================= */}
          {activePage === 3 && (
            <motion.div
              key="cardio-p4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Biometric Explanations</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Feature Contribution Weights</div>
                </div>
                <span className="text-xs font-mono text-neutral-500">SHAP Attributions</span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  {
                    id: 'bp',
                    title: 'Blood Pressure (128/82 mmHg)',
                    status: 'Normal',
                    detail: 'Systolic pressure within acceptable variance for demographic age group. No microvascular strain detected.',
                  },
                  {
                    id: 'chol',
                    title: 'Total Cholesterol (195 mg/dL)',
                    status: 'Optimal',
                    detail: 'Lipid profile below 200 mg/dL national risk ceiling. Arterial plaque probability remains minimal.',
                  },
                  {
                    id: 'hr',
                    title: 'Resting Heart Rate (72 bpm)',
                    status: 'Normal',
                    detail: 'Regular sinus rhythm with stable variability during exercise tolerance testing.',
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                    className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between font-semibold text-neutral-900">
                      <span>{item.title}</span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        {item.status}
                      </span>
                    </div>
                    {expandedCard === item.id && (
                      <p className="text-[11px] text-neutral-600 mt-2 pt-2 border-t border-neutral-200/60 leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(4)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Model Comparison →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 5: MODEL COMPARISON ================= */}
          {activePage === 4 && (
            <motion.div
              key="cardio-p5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Classifier Benchmarking</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Decision Tree vs. Logistic Regression</div>
                </div>
                <span className="text-xs font-mono text-neutral-600">Cross-Validated</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Decision Tree Card */}
                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="font-bold text-neutral-900 mb-2">Decision Tree</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                        <span>Accuracy</span>
                        <span>86.4%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mt-0.5">
                        <div className="bg-neutral-800 h-full rounded-full" style={{ width: '86%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                        <span>Recall (Zero-FN)</span>
                        <span>89.2%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mt-0.5">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '89%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logistic Regression Card */}
                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="font-bold text-neutral-900 mb-2">Logistic Regression</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                        <span>Accuracy</span>
                        <span>88.1%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mt-0.5">
                        <div className="bg-neutral-800 h-full rounded-full" style={{ width: '88%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                        <span>Recall (Zero-FN)</span>
                        <span>91.5%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mt-0.5">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '91%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-600">
                Logistic Regression model selected for production deployment due to higher clinical recall on high-risk subgroups.
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(5)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Assessment History →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 6: RISK HISTORY ================= */}
          {activePage === 5 && (
            <motion.div
              key="cardio-p6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Historical Assessments</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Patient Longitudinal Record</div>
                </div>
                <span className="text-xs font-mono text-neutral-500">3 Past Runs</span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { date: '09 Oct 2026', risk: '18% · Low Risk', status: 'optimal', bp: '128/82 mmHg' },
                  { date: '05 Aug 2026', risk: '24% · Low-Moderate', status: 'mild', bp: '134/86 mmHg' },
                  { date: '28 Jun 2026', risk: '19% · Low Risk', status: 'optimal', bp: '126/80 mmHg' },
                ].map((rec) => (
                  <div
                    key={rec.date}
                    className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-neutral-900">{rec.date}</div>
                      <div className="text-[10px] text-neutral-500">BP: {rec.bp}</div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      {rec.risk}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => onPageChange(6)}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Clinical Advice →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 7: RECOMMENDATIONS ================= */}
          {activePage === 6 && (
            <motion.div
              key="cardio-p7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Assessment Complete</h3>
                  <div className="text-[11px] text-neutral-500 font-mono">Personalized Wellness Recommendations</div>
                </div>
                <span className="text-xs font-mono text-emerald-600 font-bold">✓ Cleared</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-900">Maintain Regular Aerobic Activity</div>
                    <div className="text-[11px] text-neutral-600 mt-0.5">Target at least 150 minutes of moderate cardiovascular exercise per week.</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-900">Monitor Dietary Sodium & Cholesterol</div>
                    <div className="text-[11px] text-neutral-600 mt-0.5">Continue low-sodium dietary habits to maintain resting blood pressure below 130 mmHg.</div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-2.5 rounded-xl bg-neutral-100 text-[10px] text-neutral-500 text-center font-mono">
                For educational/research purposes only. Not a medical diagnosis.
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => onPageChange(0)}
                  className="flex-1 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold cursor-pointer text-center"
                >
                  New Assessment
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
                isActive ? 'text-rose-600 font-bold' : 'text-neutral-500 hover:text-neutral-800'
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
