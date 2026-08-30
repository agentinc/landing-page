import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/csr/MagnifyingGlass';

const listings = [
  ['Customer service', 'Inbox and response assistant'],
  ['Finance', 'Reporting and reconciliation assistant'],
  ['Engineering', 'Documentation and review assistant'],
];

export function MarketplaceSection() {
  return (
    <section id='marketplace' className='border-b border-border bg-card px-5 py-24 sm:px-8 sm:py-32'>
      <div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24'>
        <div>
          <p className='text-base font-semibold text-brand'>Marketplace</p>
          <h2 className='mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>Find what your business needs next.</h2>
          <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground'>Browse agents, tools, and connectors for different roles and business functions. Add what you need and expand your team as your work changes.</p>
        </div>
        <div className='overflow-hidden rounded-2xl border border-brand/20 bg-background'>
          <div className='flex items-center gap-3 border-b border-border px-5 py-4 text-sm text-muted-foreground'>
            <MagnifyingGlassIcon aria-hidden='true' className='size-4' />
            Search agents, tools, and connectors
          </div>
          <div className='divide-y divide-border px-5 sm:px-7'>
            {listings.map(([category, name]) => (
              <div key={name} className='grid gap-2 py-5 sm:grid-cols-[0.75fr_1.25fr_auto] sm:items-center sm:gap-5'>
                <span className='text-base font-semibold text-brand'>{category}</span>
                <span className='text-base font-medium'>{name}</span>
                <span className='text-xs text-muted-foreground'>View agent</span>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-3 border-t border-border text-center text-xs text-muted-foreground'>
            {['Agents', 'Tools', 'Connectors'].map((item) => (
              <div key={item} className='border-r border-border px-3 py-4 last:border-r-0'>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
