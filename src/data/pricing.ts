export type BillingInterval = 'monthly' | 'annual';

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  agents: number;
  durationDays: number;
  marketplace: boolean;
  paygCreditsMinimum: number;
  group: 'trial' | 'builder' | 'enterprise';
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free-trial', name: 'Free Trial', monthlyPrice: 0, agents: 1,
    durationDays: 14, marketplace: false, paygCreditsMinimum: 0, group: 'trial',
  },
  {
    id: 'developer', name: 'Developer Plan', monthlyPrice: 5, agents: 0,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 0, group: 'builder',
  },
  {
    id: 'starter', name: 'Starter Plan', monthlyPrice: 25, agents: 5,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 25, group: 'builder',
  },
  {
    id: 'pro', name: 'Pro Plan', monthlyPrice: 50, agents: 10,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 50, group: 'builder',
  },
  {
    id: 'max', name: 'Max Plan', monthlyPrice: 80, agents: 20,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 100, group: 'builder',
  },
  {
    id: 'enterprise', name: 'Enterprise', monthlyPrice: 200, agents: 50,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 250, group: 'enterprise',
  },
  {
    id: 'enterprise-plus', name: 'Enterprise Plus', monthlyPrice: 300, agents: 100,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 500, group: 'enterprise',
  },
  {
    id: 'enterprise-elite', name: 'Enterprise Elite', monthlyPrice: 500, agents: 200,
    durationDays: 30, marketplace: true, paygCreditsMinimum: 1000, group: 'enterprise',
  },
];

export const trialPlan = pricingPlans[0];
export const builderPlans = pricingPlans.filter((plan) => plan.group === 'builder');
export const enterprisePlans = pricingPlans.filter((plan) => plan.group === 'enterprise');
