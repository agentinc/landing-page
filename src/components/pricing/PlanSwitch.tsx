export type PlanFamily = 'developer' | 'standard' | 'enterprise';

const activeButtonClass = 'bg-primary text-primary-foreground';
const inactiveButtonClass = 'text-muted-foreground hover:text-foreground';

type PlanSwitchProps = {
  selectedFamily: PlanFamily;
  onFamilyChange: (family: PlanFamily) => void;
};

const planFamilies: Array<{ label: string; value: PlanFamily }> = [
  { label: 'Developer', value: 'developer' },
  { label: 'Standard', value: 'standard' },
  { label: 'Enterprise', value: 'enterprise' },
];

export function PlanSwitch({ selectedFamily, onFamilyChange }: PlanSwitchProps) {
  return (
    <div className='grid grid-cols-3 rounded-full border border-border bg-muted p-1' role='group' aria-label='Plan type'>
      {planFamilies.map(({ label, value }) => {
        const isActive = value === selectedFamily;

        return (
          <button
            key={value}
            type='button'
            onClick={() => onFamilyChange(value)}
            aria-pressed={isActive}
            className={`min-w-0 rounded-full px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4 ${isActive ? activeButtonClass : inactiveButtonClass}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
