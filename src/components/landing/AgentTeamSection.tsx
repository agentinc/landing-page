import { CheckIcon } from '@phosphor-icons/react/dist/csr/Check';
import { GearSixIcon } from '@phosphor-icons/react/dist/csr/GearSix';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/csr/MagnifyingGlass';
import { MegaphoneIcon } from '@phosphor-icons/react/dist/csr/Megaphone';

const workflow = [
  { agent: 'Research agent', task: 'Collects and organizes the information', icon: MagnifyingGlassIcon, color: 'text-agent-1' },
  { agent: 'Operations agent', task: 'Turns findings into an actionable plan', icon: GearSixIcon, color: 'text-agent-2' },
  { agent: 'Communication agent', task: 'Prepares the team-ready output', icon: MegaphoneIcon, color: 'text-agent-3' },
];

export function AgentTeamSection() {
  return (
    <section className='border-y border-border bg-muted px-5 py-24 text-foreground sm:px-8 sm:py-32'>
      <div className='mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
        <div>
          <p className='text-base font-semibold text-brand'>Agent teams</p>
          <h2 className='mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>One goal. A team of specialized agents.</h2>
          <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground'>Give each agent a clear role, connect the handoffs, and keep human review where your business needs it.</p>
        </div>
        <div className='rounded-2xl border border-border bg-background'>
          <div className='flex items-center justify-between border-b border-border px-5 py-4'>
            <span className='text-sm font-medium'>Quarterly planning team</span>
            <span className='rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground'>3 agents</span>
          </div>
          <div className='divide-y divide-border px-5 sm:px-7'>
            {workflow.map(({ agent, task, icon: Icon, color }) => (
              <div key={agent} className='grid gap-3 py-5 sm:grid-cols-[2rem_0.8fr_1.2fr] sm:items-center sm:gap-5'>
                <span className={`flex size-8 items-center justify-center rounded-full border border-brand/35 ${color}`}>
                  <Icon aria-hidden='true' className='size-4' weight='bold' />
                </span>
                <span className='font-medium'>{agent}</span>
                <span className='text-sm text-muted-foreground'>{task}</span>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-3 border-t border-border px-5 py-4 text-sm text-muted-foreground sm:px-7'>
            <CheckIcon aria-hidden='true' className='size-4 text-brand' weight='bold' />
            Final review stays with your team
          </div>
        </div>
      </div>
    </section>
  );
}
