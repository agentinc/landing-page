export type BillingInterval = 'monthly' | 'annual';
export type PricingFamily = 'builder' | 'team' | 'enterprise';

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  agents: number;
  durationDays: number;
  marketplace: boolean;
  paygCreditsMinimum: number;
  family: PricingFamily;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free-trial', name: 'Free Trial', monthlyPrice: 0, agents: 1,
    durationDays: 14, marketplace: false, paygCreditsMinimum: 0, family: 'builder',
  },
  {
    id: 'developer', name: 'Developer Plan', monthlyPrice: 5, agents: 0,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 0, family: 'builder',
  },
  {
    id: 'starter', name: 'Starter Plan', monthlyPrice: 25, agents: 5,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 25, family: 'team',
  },
  {
    id: 'pro', name: 'Pro Plan', monthlyPrice: 50, agents: 10,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 50, family: 'team',
  },
  {
    id: 'max', name: 'Max Plan', monthlyPrice: 80, agents: 20,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 100, family: 'team',
  },
  {
    id: 'enterprise', name: 'Enterprise', monthlyPrice: 200, agents: 50,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 250, family: 'enterprise',
  },
  {
    id: 'enterprise-plus', name: 'Enterprise Plus', monthlyPrice: 300, agents: 100,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 500, family: 'enterprise',
  },
  {
    id: 'enterprise-elite', name: 'Enterprise Elite', monthlyPrice: 500, agents: 200,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 1000, family: 'enterprise',
  },
];

export const pricingPlansByFamily: Record<PricingFamily, PricingPlan[]> = {
  builder: pricingPlans.filter((plan) => plan.family === 'builder'),
  team: pricingPlans.filter((plan) => plan.family === 'team'),
  enterprise: pricingPlans.filter((plan) => plan.family === 'enterprise'),
};
