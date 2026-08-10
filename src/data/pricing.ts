export type BillingInterval = 'monthly' | 'annual';
export type PricingFamily = 'explorer' | 'business' | 'enterprise';
export type PricingAudience = PricingFamily | 'developer';

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  agents: number;
  durationDays: number;
  marketplace: boolean;
  startingCredits: number;
  family: PricingAudience;
}

export const developerPlan: PricingPlan = {
  id: 'developer', name: 'Developer Plan', monthlyPrice: 5, agents: 0,
  durationDays: 30, marketplace: true, startingCredits: 0, family: 'developer',
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free-trial', name: 'Free Trial', monthlyPrice: 0, agents: 1,
    durationDays: 14, marketplace: false, startingCredits: 0, family: 'explorer',
  },
  developerPlan,
  {
    id: 'starter', name: 'Starter Plan', monthlyPrice: 25, agents: 5,
    durationDays: 30, marketplace: true, startingCredits: 25, family: 'business',
  },
  {
    id: 'pro', name: 'Pro Plan', monthlyPrice: 50, agents: 10,
    durationDays: 30, marketplace: true, startingCredits: 50, family: 'business',
  },
  {
    id: 'max', name: 'Max Plan', monthlyPrice: 80, agents: 20,
    durationDays: 30, marketplace: true, startingCredits: 100, family: 'business',
  },
  {
    id: 'enterprise', name: 'Enterprise', monthlyPrice: 200, agents: 50,
    durationDays: 30, marketplace: true, startingCredits: 250, family: 'enterprise',
  },
  {
    id: 'enterprise-plus', name: 'Enterprise Plus', monthlyPrice: 300, agents: 100,
    durationDays: 30, marketplace: true, startingCredits: 500, family: 'enterprise',
  },
  {
    id: 'enterprise-elite', name: 'Enterprise Elite', monthlyPrice: 500, agents: 200,
    durationDays: 30, marketplace: true, startingCredits: 1000, family: 'enterprise',
  },
];

export const pricingPlansByFamily: Record<PricingFamily, PricingPlan[]> = {
  explorer: pricingPlans.filter((plan) => plan.family === 'explorer'),
  business: pricingPlans.filter((plan) => plan.family === 'business'),
  enterprise: pricingPlans.filter((plan) => plan.family === 'enterprise'),
};
