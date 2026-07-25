import { ServicePillar, ProcessStage, InsightArticle, MetricItem } from '../types';

export const METRICS_DATA: MetricItem[] = [
  {
    id: '1',
    label: 'Pipeline Value Generated',
    value: '$140M+',
    change: '+340% YoY',
    description: 'Contracted ARR and strategic distribution value created across client portfolio.'
  },
  {
    id: '2',
    label: 'Average Sales Cycle Reduction',
    value: '42 Days',
    change: '-52%',
    description: 'Condensed enterprise decision cycles through standardized deal desks and buyer mapping.'
  },
  {
    id: '3',
    label: 'Partner Ecosystem Win Rate',
    value: '88%',
    change: '3.1x Benchmark',
    description: 'Co-selling conversions generated via structured tech & channel alliance playbooks.'
  },
  {
    id: '4',
    label: 'Founder Sales Hand-off',
    value: '100%',
    change: 'Zero Friction',
    description: 'Successful transition of deal execution from founders to autonomous revenue teams.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Aether Cloud', sector: 'AI Infrastructure' },
  { name: 'Krypton Data', sector: 'Enterprise SaaS' },
  { name: 'Veloce Logistics', sector: 'Supply Chain Tech' },
  { name: 'Prism Analytics', sector: 'Fintech / Data' },
  { name: 'Synthetix AI', sector: 'Developer Tools' },
  { name: 'Nexus Security', sector: 'Cybersecurity' }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'sales',
    title: 'Sales',
    subtitle: 'We help you find customers.',
    tagline: 'We help you find customers.',
    description: 'We construct structured sales engines that identify target accounts, streamline outreach, and close revenue predictably.',
    iconName: 'TrendingUp',
    outcomes: [
      'Build a sales process',
      'Reach the right people',
      'Close more deals'
    ],
    deliverables: [
      'Outbound Cadences & Messaging',
      'Sales Process Blueprint',
      'Deal Closing Playbooks'
    ],
    idealFor: 'Startups looking to find and close their ideal customers consistently.',
    caseMetric: 'Find Customers & Scale Revenue'
  },
  {
    id: 'growth',
    title: 'Growth',
    subtitle: 'We help your business grow.',
    tagline: 'We help your business grow.',
    description: 'We optimize your positioning, conversion funnels, and growth strategies for sustainable momentum.',
    iconName: 'Zap',
    outcomes: [
      'Better positioning',
      'Smarter growth plans',
      'More opportunities'
    ],
    deliverables: [
      'Commercial Positioning Matrix',
      'Strategic Growth Playbooks',
      'Opportunity Pipeline Models'
    ],
    idealFor: 'Startups looking for faster customer acquisition and market expansion.',
    caseMetric: 'Accelerate Growth Momentum'
  },
  {
    id: 'partnerships',
    title: 'Partnerships',
    subtitle: 'We help you build the right connections.',
    tagline: 'We help you build the right connections.',
    description: 'We unlock strategic alliances, executive introductions, and co-selling opportunities to multiply your reach.',
    iconName: 'Share2',
    outcomes: [
      'Strategic partnerships',
      'Business introductions',
      'Growth opportunities'
    ],
    deliverables: [
      'Partnership Ecosystem Map',
      'Ecosystem Intro Playbook',
      'Co-Sell Distribution Model'
    ],
    idealFor: 'Startups seeking exponential growth through strategic networks.',
    caseMetric: 'Build Strategic Connections'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'discover',
    stepNumber: '01',
    title: 'Discover & Diagnose',
    duration: 'Weeks 1–2',
    tagline: 'Deep commercial audit of funnel optics, deal friction, and unit economics.',
    description: 'We analyze your closed-won and closed-lost deal history, audit existing sales conversations, review pipeline data, and interview key buyers to isolate exact friction points.',
    deliverables: [
      'Commercial Viability Diagnostic Report',
      'Win/Loss & Pipeline Bottleneck Analysis',
      'ICP Precision & Economic Buyer Audit',
      'Competitive Positioning Matrix'
    ],
    founderMilestone: 'Clear baseline optics on commercial weaknesses and high-ROI growth levers.',
    artifactTitle: 'Commercial Viability Audit Matrix',
    artifactCodeSnippet: `// Audit Output Snapshot
{
  "winRate": "14.2% (Target: 28%)",
  "primaryFriction": "Late-stage procurement stalled on ROI quantification",
  "recommendedFix": "Deploy Executive ROI Calculator & Buyer Mutual Action Plan"
}`
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'Design & Architect',
    duration: 'Weeks 3–4',
    tagline: 'Building custom playbooks, deal desks, and partner frameworks.',
    description: 'We don’t hand over generic advice. We write custom, battle-tested outbound scripts, design enterprise deal desks, reconstruct pricing tiers, and blueprint partner co-sell models specifically for your ICP.',
    deliverables: [
      'Tailored Enterprise Sales Playbook',
      'Multi-Touch Outbound Cadences',
      'Value-Based Pricing & Packaging Deck',
      'Partner Co-Sell Agreement & Incentive Kit'
    ],
    founderMilestone: 'Production-ready commercial assets ready for deployment across team.',
    artifactTitle: 'Outbound Conversion Sequence Architecture',
    artifactCodeSnippet: `// Outbound Touchpoint Engine
[
  { "day": 1, "channel": "Email", "angle": "Quantified Pain Point (CAC Efficiency)" },
  { "day": 3, "channel": "LinkedIn", "angle": "Peer Benchmark Case Study" },
  { "day": 7, "channel": "Phone/Exec", "angle": "Mutual Contact Referral Intro" }
]`
  },
  {
    id: 'execute',
    stepNumber: '03',
    title: 'Execute & Co-Pilot',
    duration: 'Months 2–3',
    tagline: 'Hands-on implementation alongside your executive and sales team.',
    description: 'We embed as fractional GTM co-pilots — joining live enterprise sales calls, coaching reps on MEDDPICC execution, negotiating partner agreements, and tuning outbound messaging in real time.',
    deliverables: [
      'Weekly Deal Review & Pipeline Coaching',
      'Live Sales Call Shadowing & Pitch Refinement',
      'Partner Outreach & Agreement Negotiations',
      'CRM Pipeline Hygiene Enforcement'
    ],
    founderMilestone: 'First wave of accelerated closed deals and partner intro pipelines.',
    artifactTitle: 'Co-Pilot Pipeline Velocity Ledger',
    artifactCodeSnippet: `// Weekly Execution Tracking
{
  "activeDealsCoached": 14,
  "stageMovements": "+3 Advanced to Final Review",
  "avgDealVelocity": "32 Days (Down from 68 Days)"
}`
  },
  {
    id: 'scale',
    stepNumber: '04',
    title: 'Scale & Operationalize',
    duration: 'Months 4+',
    tagline: 'Handing over an autonomous, predictable revenue system.',
    description: 'We recruit, interview, and onboard your first Account Executives and Partner Managers. We hand over fully documented operating systems so your commercial machine runs predictably without founder intervention.',
    deliverables: [
      'Autonomous Sales Ops Playbook',
      'Hiring Scorecards for Sales & Partner Managers',
      'Board-Ready Commercial Forecast Model',
      'Long-Term Ecosystem Expansion Roadmap'
    ],
    founderMilestone: '100% autonomous commercial revenue system operating independent of founder hours.',
    artifactTitle: 'Autonomous GTM Dashboard Specs',
    artifactCodeSnippet: `// Scaled Commercial Engine
{
  "systemStatus": "Autonomous",
  "forecastVariance": "< 3%",
  "founderHoursPerWeekInSales": "2 Hours (Board Level)"
}`
  }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'Product Excellence Without Commercial Systems is Inertia',
    description: 'In the modern market, superior code or elegant design does not guarantee commercial victory. Startups fail when they mistake product enthusiasm for a repeatable revenue machine.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Founder-Led Sales Must Be Codified, Not Eternal',
    description: 'Founders can close deals through passion and vision. But passion cannot be cloned into 5 Account Executives. You must translate founder intuition into structured sales science.',
    icon: 'Cpu'
  },
  {
    title: 'Partnerships are Distribution Multipliers, Not Badges',
    description: 'Collecting logo badges on a partner page generates zero pipeline. Real partnership strategies are co-selling engines with mutual economic alignment and clear rep incentives.',
    icon: 'Share2'
  },
  {
    title: 'Commercial Viability Equals Predictable Cash Flow',
    description: 'Valuations expand when revenue is repeatable, pipeline forecasts are reliable, and customer acquisition costs decrease as the network effect of your brand takes hold.',
    icon: 'BarChart3'
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: '1',
    title: 'The $0 to $5M ARR Outbound Playbook for Technical Founders',
    category: 'Sales Engineering',
    readTime: '6 min read',
    date: 'July 2026',
    summary: 'How engineering-led startups can transition from founder-led sales to an outbound engine without sounding like spam.',
    content: [
      'Most technical founders view sales as an uncomfortable art of persuasion. In reality, modern B2B sales is an engineering problem: identifying high-intent friction, validating buyer budget authority, and proving ROI with mathematical precision.',
      'To build a predictable outbound machine:',
      '1. Map the Economic Buyer vs the Technical User. The user wants features; the economic buyer wants EBITDA impact or risk mitigation.',
      '2. Shift from Feature Demos to Mutual Action Plans. Never end a meeting without agreed-upon milestones and dates.',
      '3. Enforce MEDDPICC qualification early. Disqualify bad fit prospects within 10 minutes to preserve team energy.'
    ],
    keyTakeaways: [
      'Focus outbound on economic outcomes, not feature lists.',
      'Document objection handling into an easily accessible rep playbook.',
      'Maintain pipeline velocity by eliminating low-intent deals quickly.'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Ecosystem Distribution: How to Get Cloud Leaders to Co-Sell Your Product',
    category: 'Strategic Partnerships',
    readTime: '8 min read',
    date: 'June 2026',
    summary: 'A step-by-step framework for structuring partner incentive programs that drive zero-CAC enterprise sales.',
    content: [
      'Large cloud vendors (AWS, Google Cloud, Salesforce) have massive enterprise field organizations looking for solutions that drive cloud consumption or ecosystem lock-in.',
      'If you align your solution with their quota incentives, their reps will introduce you directly to key enterprise accounts.',
      'Key steps to co-selling success:',
      '1. Quantify the Partner ACP (Ecosystem Consumption Value).',
      '2. Build 1-page co-sell battlecards specifically tailored for partner account managers.',
      '3. Execute joint account mapping sessions with target customer overlap.'
    ],
    keyTakeaways: [
      'Align with partner reps’ personal commission incentives.',
      'Create frictionless co-marketing assets and co-sell battlecards.',
      'Track ecosystem-attributed pipeline as a core executive metric.'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Fixing the LTV/CAC Ratio Before Scaling Paid Marketing',
    category: 'GTM Acceleration',
    readTime: '5 min read',
    date: 'May 2026',
    summary: 'Why pouring capital into acquisition funnels before optimizing pricing and retention burns cash.',
    content: [
      'Pumping venture dollar growth into an inefficient commercial funnel is like filling a bucket with holes. Fix monetization and ACV expansion first.',
      '1. Move from flat pricing to value-based metrics (e.g. usage, seats, revenue processed).',
      '2. Introduce expansion triggers early in the customer lifecycle.',
      '3. Target payback periods of less than 8 months for capital-efficient trajectory.'
    ],
    keyTakeaways: [
      'Target LTV:CAC ratio above 4:1 before scaling ad spend.',
      'Audit churn drivers every 30 days with executive interviews.',
      'Package enterprise tiers with premium SLA & governance features.'
    ],
    featured: false
  },
  {
    id: '4',
    title: 'The Founder Sales Hand-Off Checklist',
    category: 'Founder Playbooks',
    readTime: '7 min read',
    date: 'April 2026',
    summary: 'The exact framework required to hire, train, and enable your first AE to close deals without founder attendance.',
    content: [
      'The biggest bottleneck in a $1M ARR startup is usually the founder. If every deal requires founder presence, growth caps out at founder bandwidth.',
      'To hand off sales successfully:',
      '1. Record 20+ successful founder sales calls and tag key discovery questions.',
      '2. Build a deal desk spreadsheet with predefined discount boundaries.',
      '3. Hire AEs in pairs to establish benchmark performance and eliminate single-rep variance.'
    ],
    keyTakeaways: [
      'Codify founder pitch intuition into structured battlecards.',
      'Use shadow calls and roleplay assessments before live account handoffs.',
      'Hire sales reps who excel at process discipline, not just extroversion.'
    ],
    featured: false
  }
];
