import { ChartLineUpIcon } from '@phosphor-icons/react/dist/csr/ChartLineUp';
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code';
import { CurrencyDollarIcon } from '@phosphor-icons/react/dist/csr/CurrencyDollar';
import { GearSixIcon } from '@phosphor-icons/react/dist/csr/GearSix';
import { HeadsetIcon } from '@phosphor-icons/react/dist/csr/Headset';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/csr/MagnifyingGlass';
import { MegaphoneIcon } from '@phosphor-icons/react/dist/csr/Megaphone';
import { UsersFourIcon } from '@phosphor-icons/react/dist/csr/UsersFour';

const businessFunctions = [
  { label: 'Engineering', description: 'Support planning, documentation, reviews, and recurring technical work.', icon: CodeIcon },
  { label: 'Customer service', description: 'Help teams respond, summarize conversations, and resolve routine requests.', icon: HeadsetIcon },
  { label: 'Finance', description: 'Organize reporting, review information, and prepare recurring financial workflows.', icon: CurrencyDollarIcon },
  { label: 'Human resources', description: 'Coordinate onboarding, answer internal questions, and support people operations.', icon: UsersFourIcon },
  { label: 'Sales', description: 'Research accounts, prepare follow-ups, and keep opportunities moving.', icon: ChartLineUpIcon },
  { label: 'Marketing', description: 'Turn research and briefs into campaigns, drafts, and reusable content.', icon: MegaphoneIcon },
  { label: 'Operations', description: 'Coordinate recurring work, track handoffs, and keep processes moving.', icon: GearSixIcon },
  { label: 'Research and analysis', description: 'Gather information, compare options, and prepare decision-ready findings.', icon: MagnifyingGlassIcon },
];

export function BusinessFunctionsSection() {
  return (
    <section id='agents' className='bg-card px-5 py-24 sm:px-8 sm:py-32'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20'>
          <div>
            <p className='text-base font-semibold text-brand'>Agents for your business</p>
            <h2 className='mt-4 max-w-lg text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>Specialized help across your entire business.</h2>
            <p className='mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground'>Find agents for individual tasks or combine specialists into a team that works across functions.</p>
          </div>
          <div className='grid border-t border-border sm:grid-cols-2'>
            {businessFunctions.map(({ label, description, icon: Icon }, index) => (
              <article key={label} className={`grid grid-cols-[auto_1fr] gap-4 border-b border-border py-6 sm:p-6 ${index % 2 === 0 ? 'sm:border-r sm:border-border' : ''}`}>
                <Icon aria-hidden='true' className='mt-1 size-5 text-brand' />
                <div>
                  <h3 className='font-semibold'>{label}</h3>
                  <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
