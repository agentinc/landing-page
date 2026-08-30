import type { BillingInterval } from '@/data/pricing';
import { Switch } from '../../shadcn/components/ui/switch';
import { Badge } from '../../shadcn/components/ui/badge';
import { cn } from '../../shadcn/lib/utils';

type PricingSwitchProps = {
  billing: BillingInterval;
  onBillingChange: (billing: BillingInterval) => void;
};

export function PricingSwitch({
  billing,
  onBillingChange,
}: PricingSwitchProps) {
  const isYearly = billing === 'annual';

  return (
    <div
      className='flex items-center justify-between gap-3 rounded-full bg-background px-3 py-2 text-sm font-medium'
      role='group'
      aria-label='Billing interval'
    >
      <label
        htmlFor='isYearly'
        className={isYearly ? 'text-muted-foreground' : 'text-foreground'}
      >
        Monthly
      </label>
      <Switch
        id='isYearly'
        checked={isYearly}
        onCheckedChange={(checked) =>
          onBillingChange(checked ? 'annual' : 'monthly')
        }
      />
      <label
        htmlFor='isYearly'
        className={cn(isYearly ? 'text-foreground' : 'text-muted-foreground')}
      >
        Yearly
      </label>
    </div>
  );
}
