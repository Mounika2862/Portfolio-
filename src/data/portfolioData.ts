import { ShowcaseApp, SkillCategory, CertificationItem } from '../types';

export const RESUME_INFO = {
  name: 'Ainamilli Mounika',
  role: 'Software Engineer · AI & Intelligent Automation Systems',
  email: 'mounikaainamilli@gmail.com',
  github: 'https://github.com/Mounika2862',
  linkedin: 'https://www.linkedin.com/in/ainamilli-mounika-4820a427a',
  summary:
    'Software Engineer experienced in building and deploying AI-powered applications and intelligent automation systems. Strong hands-on experience taking solutions from problem definition and system design through development, testing, and deployment, with a focus on solving real-world problems through practical, scalable software.',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI / ML & GenAI',
    iconName: 'Sparkles',
    skills: [
      'LangGraph',
      'Intelligent Agents',
      'LangChain',
      'LLM Workflows',
      'scikit-learn',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Languages',
    iconName: 'Code',
    skills: ['SQL', 'Python', 'Java'],
  },
  {
    title: 'Backend & Data',
    iconName: 'Database',
    skills: ['Django', 'REST APIs', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'IoT & Mobile',
    iconName: 'Cpu',
    skills: ['ESP32', 'IoT Sensors', 'Android Studio (Java, XML)'],
  },
  {
    title: 'DevOps & Tools',
    iconName: 'Wrench',
    skills: ['AWS (EC2, S3)', 'Docker', 'Postman', 'CI/CD', 'Git'],
  },
];

export const SHOWCASE_APPS: ShowcaseApp[] = [
  {
    id: 'vihar-ai',
    name: 'Vihar AI',
    tagline: 'Autonomous AI Travel Agent & Multi-Step LLM Pipeline',
    category: 'AI / GenAI',
    tech: ['LangGraph', 'Groq', 'MongoDB', 'REST APIs', 'Docker', 'Python'],
    metrics: { label: 'Token Efficiency', value: '90% Saved (35k → 2k)' },
    description:
      'Multi-step LLM pipeline built with LangGraph and Groq, cutting token consumption from 35k to 2k per query. Features a high-speed MongoDB caching layer and live flight/hotel API integration.',
    tabletUI: {
      title: 'Vihar AI · Multi-Step Travel Graph',
      badge: 'Active Groq LPU Pipeline',
      stats: [
        { label: 'Token Compression', val: '35k → 2k' },
        { label: 'Cache Latency', val: '38ms' },
        { label: 'Live APIs', val: 'Flights & Stays' },
      ],
      details: 'LangGraph StateGraph isolates intent parsing, route generation, and budget checks to guarantee deterministic itinerary schemas.',
      flowSteps: [
        'User Travel Intent Extracted',
        'Groq LPU Context Optimization',
        'MongoDB Caching Layer Lookup',
        'Live Flight & Hotel API Synthesis',
      ],
    },
    phoneUI: {
      status: 'Trip Plan Ready',
      headline: 'Kyoto 4-Day Journey',
      metricLabel: 'Budget Optimized',
      metricVal: '$1,350',
      actionLabel: 'View Detailed Itinerary',
    },
  },
  {
    id: 'khetmitra',
    name: 'KhetMitra',
    tagline: 'Automated Precision Agriculture & Irrigation System',
    category: 'IoT & Embedded',
    tech: ['ESP32', 'Firebase', 'Android Studio (Java, XML)', 'IoT Sensors'],
    metrics: { label: 'Water Conservation', value: '18% Water Saved' },
    description:
      'AI-driven irrigation system for sugarcane utilizing historical climate data and live sensor telemetry. Integrates ESP32 soil-moisture, temperature, and humidity sensors with Firebase to auto-control irrigation.',
    tabletUI: {
      title: 'KhetMitra · Sugarcane Field Telemetry',
      badge: 'ESP32 Node Synced',
      stats: [
        { label: 'Soil Moisture', val: '38% (Deficit)' },
        { label: 'Field Temp', val: '32°C' },
        { label: 'Irrigation Accuracy', val: '91%' },
      ],
      details: 'Real-time telemetry triggers automated solenoid valves when moisture dips below threshold, cutting over-irrigation by 22%.',
      flowSteps: [
        'ESP32 Depth Moisture Sampling',
        'Firebase Realtime Cloud Sync',
        'Crop Moisture Threshold Evaluated',
        'Automated Solenoid Valve Triggered',
      ],
    },
    phoneUI: {
      status: 'Pump Active',
      headline: 'Sugarcane Block #3',
      metricLabel: 'Valve Status',
      metricVal: 'Flowing (12 L/m)',
      actionLabel: 'Manual Override',
    },
  },
  {
    id: 'cardiorisk',
    name: 'CardioRisk ML',
    tagline: 'Clinical Decision Support & Heart Disease Prediction',
    category: 'Machine Learning',
    tech: ['Django', 'scikit-learn', 'Pandas', 'NumPy', 'Python'],
    metrics: { label: 'Diagnostic Recall', value: 'Zero False Negatives' },
    description:
      'Built a heart disease prediction system comparing decision tree and logistic regression models integrated with Django. Clinical dataset cleaned with Pandas and NumPy for instant risk scoring.',
    tabletUI: {
      title: 'CardioRisk · Diagnostic Classifier',
      badge: 'Decision Tree + Logistic Regression',
      stats: [
        { label: 'Clinical Imputation', val: 'Median Scaled' },
        { label: 'Inference Speed', val: '< 120ms' },
        { label: 'Validation', val: 'Cross-Validated' },
      ],
      details: 'Benchmarked classifiers on accuracy and recall to select optimal predictive parameters for personalized risk classification.',
      flowSteps: [
        'Clinical Form Biometric Input',
        'Pandas Categorical Encoding',
        'Cross-Validated Model Inference',
        'Personalized Risk Report Generated',
      ],
    },
    phoneUI: {
      status: 'Assessment Complete',
      headline: 'Cardiovascular Risk: Low',
      metricLabel: 'Prognostic Score',
      metricVal: '94% Confidence',
      actionLabel: 'Download Clinical Summary',
    },
  },
  {
    id: 'ambientvoice',
    name: 'AmbientVoice IoT',
    tagline: 'Voice-Controlled Home Automation & Hardware Relays',
    category: 'IoT & Systems',
    tech: ['Python', 'Speech Recognition API', 'IoT Relays', 'Hardware Logic'],
    metrics: { label: 'Execution Latency', value: '< 350ms Direct' },
    description:
      'Voice-controlled home automation system using Python and Speech Recognition API. Implemented device control logic to operate lights, temperature, and appliances through spoken commands.',
    tabletUI: {
      title: 'AmbientVoice · Audio Intent Dispatcher',
      badge: 'Speech Recognition Active',
      stats: [
        { label: 'Noise Filter', val: 'Adaptive Gain' },
        { label: 'Relay Channels', val: '8 Devices' },
        { label: 'Latency', val: '310ms' },
      ],
      details: 'Integrated IoT hardware relays with an audio processing pipeline to convert spoken voice commands into reliable physical device actions.',
      flowSteps: [
        'Microphone Voice Stream Capture',
        'Acoustic Speech-to-Text Parsing',
        'Device Command Intent Extraction',
        'Hardware Relay Pin Actuation',
      ],
    },
    phoneUI: {
      status: 'Listening...',
      headline: 'Living Room Lights: ON',
      metricLabel: 'Active Devices',
      metricVal: '4 Online',
      actionLabel: 'Toggle Smart Relays',
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ai-research',
    title: 'AI Research Assistant',
    issuer: 'Vellore Institute of Technology (VIT Chennai)',
    year: 'AI & Systems Research',
    description:
      'Worked as a Research Assistant, helping prepare, benchmark, and maintain artificial intelligence research papers, literature references, and documentation.',
    badge: 'Research Appointment',
  },
  {
    id: 'android-club',
    title: 'Android Club Technical Volunteer & Coordinator',
    issuer: 'Android Club, VIT Chennai',
    year: 'Technical Leadership',
    description:
      'Active member participating in club activities, volunteering at technical workshops, handling participant registration, coordination, and on-ground technical support.',
    badge: 'Campus Leadership',
  },
  {
    id: 'database-systems',
    title: 'Database Systems & MySQL Engineering Specialist',
    issuer: 'Relational Database Engineering & Instruction',
    year: 'Database Architecture',
    description:
      'Taught DBMS and MySQL covering ER modeling, normalization forms, transactions, and hands-on laboratory query design and optimization.',
    badge: 'Technical Mastery',
  },
  {
    id: 'iot-embedded',
    title: 'Edge IoT & Embedded Automation Practitioner',
    issuer: 'Applied Hardware Systems',
    year: 'Embedded Hardware',
    description:
      'Designed and deployed closed-loop ESP32 sensor pipelines, voice recognition device interfaces, and cloud-synchronized actuator controls.',
    badge: 'Hardware Engineering',
  },
];
