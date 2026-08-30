import { ArrowRightIcon } from '@phosphor-icons/react/dist/csr/ArrowRight';
import { Button } from '@/shadcn/components/ui/button';
import { type BillingInterval, type PricingPlan } from '@/data/pricing';
import { PlanFacts, PlanPrice } from './PricingDetails';

type SelectPlan = (planId: string, billing: BillingInterval) => void;

type StandardPricingCardProps = {
  plan: PricingPlan;
  billing: BillingInterval;
  onSelectPlan: SelectPlan;
};

export function StandardPricingCard({ plan, billing, onSelectPlan }: StandardPricingCardProps) {
  const isRecommended = plan.id === 'pro';
  const buttonLabel = plan.id === 'starter' ? 'Get started for free' : 'Start for free';

  return (
    <article className={`flex min-h-full flex-col rounded-2xl border border-brand/25 bg-background p-6 sm:p-7 ${isRecommended ? 'ring-1 ring-brand ring-inset' : ''}`}>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='text-sm font-medium text-brand'>Standard</p>
          <h3 className='mt-2 text-2xl font-semibold tracking-tight'>{plan.name}</h3>
        </div>
        {isRecommended && <span className='rounded-full border border-brand/30 px-2.5 py-1 text-[10px] font-medium text-brand'>Recommended</span>}
      </div>
      <p className='mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground'>Choose the right capacity for a growing team of agents.</p>
      <div className='mt-7'>
        <PlanPrice plan={plan} billing={billing} />
      </div>
      <PlanFacts plan={plan} />
      <Button type='button' onClick={() => onSelectPlan(plan.id, billing)} className='mt-auto w-full rounded-full bg-brand text-brand-foreground hover:bg-brand hover:text-brand-foreground'>
        {buttonLabel}
        <ArrowRightIcon aria-hidden='true' />
      </Button>
    </article>
  );
}

export function DeveloperPricingCard({ plan, billing, onSelectPlan }: { plan: PricingPlan; billing: BillingInterval; onSelectPlan: SelectPlan }) {
  return (
    <article className='flex min-h-full flex-col rounded-2xl border border-brand/25 bg-background p-6 sm:p-7'>
      <div className='space-y-2'>
        <p className='text-sm font-medium text-brand'>Developer</p>
        <h3 className='mt-2 text-2xl font-semibold tracking-tight'>{plan.name}</h3>
        <PlanPrice plan={plan} billing={billing} />
      </div>
      <p className='mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground'>For developers who want to create, publish, and sell agents through the Fleet marketplace.</p>
      <Button type='button' variant='outline' onClick={() => onSelectPlan(plan.id, billing)} className='mt-auto w-full rounded-full border-primary/30 bg-transparent text-primary'>
        Get developer access
        <ArrowRightIcon aria-hidden='true' />
      </Button>
    </article>
  );
}

export function EnterprisePricingCard({ billing, onSelectPlan }: { billing: BillingInterval; onSelectPlan: SelectPlan }) {
  return (
    <article className='flex min-h-full flex-col rounded-2xl border border-brand/25 bg-background p-6 sm:p-7'>
      <div>
        <p className='text-sm font-medium text-brand'>Enterprise</p>
        <h3 className='mt-2 text-2xl font-semibold tracking-tight'>Custom plan</h3>
      </div>
      <p className='mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground'>Capacity, access, and support tailored to your organization.</p>
      <div className='mt-16'>
        <p className='text-2xl font-semibold tracking-tight'>Contact us for a quotation</p>
        <p className='mt-2 text-sm text-muted-foreground'>We will shape a plan around your teams and operating needs.</p>
      </div>
      <Button type='button' variant='outline' onClick={() => onSelectPlan('enterprise', billing)} className='mt-auto w-full rounded-full border-primary/30 bg-transparent text-primary'>
        Contact Sales
        <ArrowRightIcon aria-hidden='true' />
      </Button>
    </article>
  );
}
