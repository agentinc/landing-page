export type BillingInterval = 'monthly' | 'annual';
export type PricingFamily = 'developer' | 'standard' | 'enterprise';
export type DeveloperSupport = 'limited' | 'priority';
export type CustomerSupport =
  | 'none'
  | 'limited'
  | 'standard'
  | 'priority'
  | 'dedicated';
export type Connectors = '3' | 'unlimited';
export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  agents: number;
  family: PricingFamily;
  support: DeveloperSupport | CustomerSupport;
}

export interface StandardPricingPlan extends PricingPlan {
  startingCredits: number;
  connectors: Connectors;
}
export interface DeveloperPricingPlan extends PricingPlan {
  family: 'developer';
  dynamicIngestion: boolean;
  studioAccess: boolean;
  priorityReview: boolean;
  support: DeveloperSupport;
}

const developerPlans: DeveloperPricingPlan[] = [
  {
    id: 'developer',
    name: 'Developer',
    monthlyPrice: 5,
    agents: 0,
    family: 'developer',
    dynamicIngestion: false,
    studioAccess: false,
    priorityReview: false,
    support: 'limited',
  },
  {
    id: 'developer-pro',
    name: 'Developer Pro',
    monthlyPrice: 15,
    agents: 0,
    family: 'developer',
    dynamicIngestion: true,
    studioAccess: true,
    priorityReview: true,
    support: 'priority',
  },
];

const standardPlans: StandardPricingPlan[] = [
  {
    id: 'free-trial',
    name: 'Free',
    monthlyPrice: 0,
    agents: 1,
    connectors: '3',
    startingCredits: 0,
    family: 'standard',
    support: 'none',
  },
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 25,
    agents: 5,
    startingCredits: 25,
    family: 'standard',
    support: 'limited',
    connectors: 'unlimited',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 50,
    agents: 10,
    startingCredits: 50,
    family: 'standard',
    support: 'standard',
    connectors: 'unlimited',
  },
  {
    id: 'max',
    name: 'Max',
    monthlyPrice: 80,
    agents: 20,
    startingCredits: 100,
    family: 'standard',
    support: 'priority',
    connectors: 'unlimited',
  },
];

export const pricingPlans: Record<PricingFamily, PricingPlan[]> = {
  developer: developerPlans,
  standard: standardPlans,
  enterprise: [], // Enterprise plans are not defined in this snippet, but can be added here as needed.
  // enterprise: [
  //   {
  //     id: 'enterprise',
  //     name: 'Enterprise',
  //     monthlyPrice: 200,
  //     agents: 50,
  //     durationDays: 30,
  //     marketplace: true,
  //     startingCredits: 250,
  //     family: 'enterprise',
  //   },
  //   {
  //     id: 'enterprise-plus',
  //     name: 'Enterprise Plus',
  //     monthlyPrice: 300,
  //     agents: 100,
  //     durationDays: 30,
  //     marketplace: true,
  //     startingCredits: 500,
  //     family: 'enterprise',
  //   },
  //   {
  //     id: 'enterprise-elite',
  //     name: 'Enterprise Elite',
  //     monthlyPrice: 500,
  //     agents: 200,
  //     durationDays: 30,
  //     marketplace: true,
  //     startingCredits: 1000,
  //     family: 'enterprise',
  //   },
  // ],
};
