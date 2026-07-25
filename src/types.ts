export type ThemeMode = 'dark' | 'light';

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  change: string;
  description: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  iconName: string;
  outcomes: string[];
  deliverables: string[];
  idealFor: string;
  caseMetric: string;
}

export interface ProcessStage {
  id: string;
  stepNumber: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  deliverables: string[];
  founderMilestone: string;
  artifactTitle: string;
  artifactCodeSnippet: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Sales Engineering' | 'Strategic Partnerships' | 'GTM Acceleration' | 'Founder Playbooks';
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  featured?: boolean;
}

export interface DiagnosticInput {
  stage: string;
  focus: string;
  challenges: string;
  mrr: string;
  teamSize: string;
  customGoal: string;
}

export interface DiagnosticResult {
  overallScore: number;
  viabilityStage: string;
  keyDiagnosis: string;
  pillars: {
    salesPredictability: { score: number; status: string; insight: string };
    partnershipLeverage: { score: number; status: string; insight: string };
    growthEfficiency: { score: number; status: string; insight: string };
    positioningClarity: { score: number; status: string; insight: string };
  };
  actionPlan: Array<{
    phase: string;
    title: string;
    description: string;
  }>;
  benchmarkComparison: string;
}
