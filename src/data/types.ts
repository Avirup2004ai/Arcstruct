export type Sector = 
  | 'Residential' 
  | 'Commercial' 
  | 'Industrial' 
  | 'Institutional' 
  | 'Infrastructure' 
  | 'Warehousing' 
  | 'Healthcare';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: 'Planning' | 'Structural' | 'Testing & Audit' | 'Execution' | 'Finishing & Protection';
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  keyDeliverables: string[];
  standardsFollowed: string[];
  idealFor: string[];
  scopePoints: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  sector: Sector;
  location: string;
  year: string;
  scale: string;
  scope: string[];
  archstructRole: string;
  challenge: string;
  engineeringApproach: string;
  outcome: string;
  keyMetrics: { label: string; value: string }[];
  image: string;
}

export interface IndustryItem {
  slug: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  keyChallenges: string[];
  ourSolutions: string[];
  relevantServices: string[];
}

export interface InsightItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}
