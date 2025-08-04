// HACP Framework Types
export interface HACPTier {
  tier: 'T1' | 'T2' | 'T3' | 'T4';
  name: string;
  description: string;
  emotionalCalibration: 'low' | 'medium' | 'high' | 'enterprise';
  features: string[];
  accessLevel: number;
}

export interface HACPBehavior {
  id: string;
  tier: HACPTier['tier'];
  leadValue: number;
  emotionalWeight: number;
  intentType: 'crm' | 'ai' | 'escalation';
  behaviorPattern: string;
  createdAt: string;
}

// CRM Integration Types
export interface GHLContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  tags?: string[];
  customFields?: Record<string, any>;
  locationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface GHLOpportunity {
  id: string;
  name: string;
  pipelineId: string;
  stageId: string;
  status: string;
  monetaryValue: number;
  contactId: string;
  locationId: string;
  createdAt: string;
  updatedAt: string;
}

// Lead Discovery Types
export interface ClearbitCompany {
  name: string;
  domain: string;
  category: {
    sector: string;
    industryGroup: string;
    industry: string;
    subIndustry: string;
  };
  metrics: {
    employees: number;
    employeesRange: string;
    annualRevenue: number;
    raised: number;
  };
  geo: {
    streetNumber: string;
    streetName: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  tech: string[];
}

export interface SeamlessContact {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone?: string;
  linkedinUrl?: string;
  companyName: string;
  companyDomain: string;
  verified: boolean;
}

// Referral Tracking Types
export interface ReferralTracking {
  id: string;
  referrer_id: string;
  referred_contact_id: string;
  status: 'pending' | 'converted' | 'rewarded';
  value: number;
  commission: number;
  created_at: string;
  updated_at?: string;
}

export interface CommissionTier {
  name: string;
  minReferrals: number;
  maxReferrals?: number;
  percentage: number;
  color: string;
}

// Analytics Types
export interface AnalyticsMetric {
  name: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  timeframe: string;
}

export interface LeadSource {
  name: string;
  leads: number;
  percentage: number;
  conversionRate: number;
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
