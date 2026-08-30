import { useState } from 'react';
import { pricingPlans, type BillingInterval } from '@/data/pricing';
import { DeveloperPricingCard, EnterprisePricingCard, StandardPricingCard } from './PricingCard';
import { PlanSwitch, type PlanFamily } from './PlanSwitch';
import { PricingSwitch } from './PricingSwitch';

type PricingSectionProps = {
  onSelectPlan: (planId: string, billing: BillingInterval) => void;
};

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billing, setBilling] = useState<BillingInterval>('annual');
  const [selectedFamily, setSelectedFamily] = useState<PlanFamily>('standard');

  const pricingCards = selectedFamily === 'developer'
    ? pricingPlans.developer.map((plan) => (
      <DeveloperPricingCard key={plan.id} plan={plan} billing={billing} onSelectPlan={onSelectPlan} />
    ))
    : selectedFamily === 'standard'
      ? pricingPlans.standard.map((plan) => (
        <StandardPricingCard key={plan.id} plan={plan} billing={billing} onSelectPlan={onSelectPlan} />
      ))
      : <EnterprisePricingCard billing={billing} onSelectPlan={onSelectPlan} />;

  return (
    <section id='pricing' className='px-5 py-24 sm:px-8 sm:py-32'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-5xl text-center'>
          <p className='text-7xl font-google-sans'>Pricing</p>
          <h2 className='mt-2 text-lg text-brand font-medium leading-tight tracking-tight sm:text-2xl'>
            Start with one agent. Grow into a team.
          </h2>
          <p className='mx-auto mt-3 italic leading-relaxed text-muted-foreground'>
            All plans follow the bring your own key model, if you want us to
            manage your keys for you, extra charges will apply.
          </p>
        </div>
        <div className='mt-10 flex flex-col gap-4  sm:items-center sm:justify-between'>
          <PlanSwitch
            selectedFamily={selectedFamily}
            onFamilyChange={setSelectedFamily}
          />
          <PricingSwitch billing={billing} onBillingChange={setBilling} />
        </div>
        <div className={`mt-8 space-y-4 md:space-y-0 md:flex lg:grid lg:grid-cols-4 items-stretch gap-2.5`}>
          {pricingCards}
        </div>
      </div>
    </section>
  );
}
