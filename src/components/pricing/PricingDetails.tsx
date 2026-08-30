import { InfoIcon } from '@phosphor-icons/react/dist/csr/Info';
import { XIcon } from '@phosphor-icons/react/dist/csr/X';
import { useId } from 'react';
import type { BillingInterval, PricingPlan } from '@/data/pricing';

export function PlanPrice({ plan, billing }: { plan: PricingPlan; billing: BillingInterval }) {
  if (billing === 'monthly') {
    return (
      <p className='flex items-end gap-2'>
        <span className='text-4xl font-semibold tracking-tight text-brand'>${formatPrice(plan.monthlyPrice)}</span>
        <span className='pb-1 text-sm text-muted-foreground'>/ month</span>
      </p>
    );
  }

  const annualTotal = plan.monthlyPrice * 10;
  const monthlyEquivalent = annualTotal / 12;

  return (
    <div>
      <p className='flex flex-wrap items-end gap-x-2 gap-y-1'>
        <span className='text-4xl font-semibold tracking-tight text-brand'>${formatPrice(monthlyEquivalent)}</span>
        <span className='pb-1 text-sm text-muted-foreground'>/ month</span>
      </p>
      <div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground'>
        <span className='line-through'>${formatPrice(plan.monthlyPrice)} / month</span>
        <span>${formatPrice(annualTotal)} billed annually</span>
      </div>
    </div>
  );
}

export function PlanFacts({ plan }: { plan: PricingPlan }) {
  return (
    <dl className='my-7 divide-y divide-border border-y border-border'>
      <PricingFact label='Agents' value={String(plan.agents)} />
      <ApiKeyFact startingCredits={plan.startingCredits} />
    </dl>
  );
}

function PricingFact({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex items-center justify-between gap-4 py-4'>
      <dt className='text-sm text-muted-foreground'>{label}</dt>
      <dd className='text-right text-sm font-medium'>{value}</dd>
    </div>
  );
}

function ApiKeyFact({ startingCredits }: { startingCredits: number }) {
  const tooltipId = useId();
  const requirement = startingCredits === 0
    ? 'If an API key is needed, no minimum Starting Credits are required.'
    : `If an API key is needed, a minimum of $${startingCredits} in Starting Credits needs to be included.`;

  return (
    <div className='flex items-center justify-between gap-4 py-4'>
      <dt className='group relative flex items-center gap-1.5 text-sm text-muted-foreground'>
        API Keys
        <button type='button' aria-label='API key requirement' aria-describedby={tooltipId} className='flex size-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
          <InfoIcon aria-hidden='true' className='size-3.5' />
        </button>
        <span id={tooltipId} role='tooltip' className='invisible absolute bottom-full left-0 z-50 mb-2 w-64 rounded-lg bg-primary px-3 py-2 text-left text-xs leading-relaxed text-primary-foreground group-focus-within:visible group-hover:visible'>
          {requirement}
        </span>
      </dt>
      <dd className='flex items-center text-muted-foreground'>
        <XIcon aria-hidden='true' className='size-4' weight='bold' />
        <span className='sr-only'>Not included by default</span>
      </dd>
    </div>
  );
}

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(2);
}
