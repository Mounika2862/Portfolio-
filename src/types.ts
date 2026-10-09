export interface ShowcaseApp {
  id: string;
  name: string;
  tagline: string;
  category: string;
  tech: string[];
  metrics: { label: string; value: string };
  description: string;
  tabletUI: {
    title: string;
    badge: string;
    stats: { label: string; val: string }[];
    details: string;
    flowSteps: string[];
  };
  phoneUI: {
    status: string;
    headline: string;
    metricLabel: string;
    metricVal: string;
    actionLabel: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  badge: string;
}

