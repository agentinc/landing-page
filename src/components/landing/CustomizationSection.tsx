import { CheckIcon } from '@phosphor-icons/react/dist/csr/Check';
import { WrenchIcon } from '@phosphor-icons/react/dist/csr/Wrench';

const customizationItems = [
  'Responsibilities and goals',
  'Company knowledge',
  'Connected applications',
  'Access and approval rules',
];

export function CustomizationSection() {
  return (
    <section className='px-5 py-24 sm:px-8 sm:py-32'>
      <div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24'>
        <div className='order-2 rounded-2xl border border-brand/20 bg-card p-6 sm:p-8 lg:order-1'>
          <div className='flex items-center gap-3 border-b border-border pb-5'>
            <WrenchIcon aria-hidden='true' className='size-5 text-brand' />
            <span className='font-semibold'>Your custom agent</span>
          </div>
          <div className='divide-y divide-border'>
            {customizationItems.map((item) => (
              <div key={item} className='flex items-center gap-3 py-4 text-sm'>
                <span className='flex size-5 items-center justify-center rounded-full border border-brand/30 text-brand'>
                  <CheckIcon aria-hidden='true' className='size-3' weight='bold' />
                </span>
                {item}
              </div>
            ))}
          </div>
          <div className='mt-2 rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground'>Configured with help from the Fleet team</div>
        </div>
        <div className='order-1 lg:order-2'>
          <p className='text-base font-semibold text-brand'>Customized for you</p>
          <h2 className='mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>Built around the way your company works.</h2>
          <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground'>Start with a ready-made agent or work with Fleet to tailor one around your processes, knowledge, policies, and tools.</p>
        </div>
      </div>
    </section>
  );
}
