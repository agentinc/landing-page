import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/csr/MagnifyingGlass';
import { PlugsConnectedIcon } from '@phosphor-icons/react/dist/csr/PlugsConnected';
import { UsersThreeIcon } from '@phosphor-icons/react/dist/csr/UsersThree';
import { WrenchIcon } from '@phosphor-icons/react/dist/csr/Wrench';

const adoptionSteps = [
  { title: 'Find the right agents', description: 'Browse by business function, task, or goal to find specialists suited to the work.', icon: MagnifyingGlassIcon },
  { title: 'Connect your business', description: 'Choose the tools and information each agent needs to work with your team.', icon: PlugsConnectedIcon },
  { title: 'Make them yours', description: 'Fleet helps tailor responsibilities, knowledge, access, and approval rules.', icon: WrenchIcon },
  { title: 'Assemble your team', description: 'Bring specialists together in one workspace and start putting them to work.', icon: UsersThreeIcon },
];

export function HowItWorksSection() {
  return (
    <section id='how-it-works' className='px-5 py-24 sm:px-8 sm:py-32'>
      <div className='mx-auto max-w-7xl'>
        <div className='max-w-3xl'>
          <p className='text-base font-semibold text-brand'>How it works</p>
          <h2 className='mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>From a business need to a working agent team.</h2>
        </div>
        <div className='mt-16 border-t border-border'>
          {adoptionSteps.map(({ title, description, icon: Icon }) => (
            <article key={title} className='grid gap-4 border-b border-border py-8 sm:grid-cols-[auto_0.8fr_1.2fr] sm:items-start sm:gap-7 sm:py-10'>
              <Icon aria-hidden='true' className='size-5 text-brand' />
              <h3 className='text-xl font-semibold leading-snug'>{title}</h3>
              <p className='max-w-xl leading-relaxed text-muted-foreground'>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
