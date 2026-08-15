import { ArrowRightIcon } from '@phosphor-icons/react/dist/csr/ArrowRight';
import { BriefcaseIcon } from '@phosphor-icons/react/dist/csr/Briefcase';
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code';
import { CurrencyDollarIcon } from '@phosphor-icons/react/dist/csr/CurrencyDollar';
import { GearSixIcon } from '@phosphor-icons/react/dist/csr/GearSix';
import { HeadsetIcon } from '@phosphor-icons/react/dist/csr/Headset';
import { LinkIcon } from '@phosphor-icons/react/dist/csr/Link';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/csr/MagnifyingGlass';
import { UsersThreeIcon } from '@phosphor-icons/react/dist/csr/UsersThree';
import { Button } from '@/shadcn/components/ui/button';

type HeroProps = {
  onGetAccess: () => void;
  onExploreAgents: () => void;
};

export function Hero({ onGetAccess, onExploreAgents }: HeroProps) {
  return (
    <section id='top' className='relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 min-h-screen lg:py-40'>
      <div className='pointer-events-none absolute inset-0 landing-grid' />
      <div className='relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-20'>
        <div className='max-w-4xl'>
          <div className='mb-8 inline-flex items-center gap-2 rounded-full border border-brand/35 bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-brand'>
            <span className='size-1.5 rounded-full bg-brand' aria-hidden='true' />
            Private beta
          </div>
          <h1 className='max-w-5xl text-[clamp(2.9rem,7.2vw,6.7rem)] font-bold leading-[0.94] tracking-[-0.065em]'>
            Your agents.
            <span className='block text-brand'>One managed cloud.</span>
          </h1>
          <p className='mt-8 max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl'>
            Find specialized agents, connect them to the tools your company uses,
            and bring them together as a team built around your business.
          </p>
          <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <Button size='lg' type='button' onClick={onGetAccess} className='h-12 rounded-full px-7 text-base'>
              Get early access
              <ArrowRightIcon aria-hidden='true' />
            </Button>
            <Button size='lg' variant='outline' type='button' onClick={onExploreAgents} className='h-12 rounded-full bg-transparent px-7 text-base'>
              Explore agents
            </Button>
          </div>
        </div>

        <AgentWorkspacePreview />
      </div>
    </section>
  );
}

function AgentWorkspacePreview() {
  const stages = [
    { label: 'Browse specialists', detail: 'Sales · Finance · Support', icon: MagnifyingGlassIcon },
    { label: 'Connect your tools', detail: 'Choose data and access', icon: LinkIcon },
    { label: 'Assemble a team', detail: 'Set roles and handoffs', icon: UsersThreeIcon },
  ];
  const selectedAgents = [
    { label: 'Engineering agent', icon: CodeIcon, color: 'text-agent-1' },
    { label: 'Customer service agent', icon: HeadsetIcon, color: 'text-agent-2' },
    { label: 'Finance agent', icon: CurrencyDollarIcon, color: 'text-agent-3' },
    { label: 'Operations agent', icon: GearSixIcon, color: 'text-agent-4' },
  ];

  return (
    <figure className='relative mx-auto w-full max-w-xl' aria-label='Building an AI agent team with Agentinc'>
      <div className='overflow-hidden rounded-2xl border border-brand/20 bg-card'>
        <div className='flex items-center justify-between border-b border-border px-5 py-4'>
          <div className='flex items-center gap-2 text-sm font-medium'>
            <BriefcaseIcon aria-hidden='true' className='size-4 text-brand' />
            Your Agentinc workspace
          </div>
          <span className='rounded-full border border-brand/25 px-2.5 py-1 text-[10px] font-medium text-brand'>
            Team setup
          </span>
        </div>
        <div className='p-5 sm:p-7'>
          <div className='space-y-3'>
            {stages.map(({ label, detail, icon: Icon }, index) => (
              <div key={label} className='grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0'>
                <div className='flex size-9 items-center justify-center rounded-full border border-brand/25 text-brand'>
                  <Icon aria-hidden='true' className='size-4' />
                </div>
                <div className='min-w-0'>
                  <div className='text-sm font-medium'>{label}</div>
                  <div className='mt-0.5 truncate text-xs text-muted-foreground'>{detail}</div>
                </div>
                <span className='text-xs text-muted-foreground'>0{index + 1}</span>
              </div>
            ))}
          </div>
          <div className='mt-6 rounded-xl border border-border bg-muted p-5 text-foreground'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <div className='text-sm font-semibold'>Your agent team</div>
                <div className='mt-1 text-xs text-muted-foreground'>Connected and ready to work</div>
              </div>
              <div className='flex -space-x-2' aria-label='Four agents selected'>
                {selectedAgents.map(({ label, icon: Icon, color }) => (
                  <span key={label} title={label} className={`flex size-9 items-center justify-center rounded-full border border-brand/35 bg-background ${color}`}>
                    <Icon aria-hidden='true' className='size-4' weight='bold' />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
