import { BriefcaseIcon } from '@phosphor-icons/react/dist/csr/Briefcase';
import { EyeIcon } from '@phosphor-icons/react/dist/csr/Eye';
import { LockKeyIcon } from '@phosphor-icons/react/dist/csr/LockKey';
import { ShieldCheckIcon } from '@phosphor-icons/react/dist/csr/ShieldCheck';

const controls = [
  { label: 'See agent activity', icon: EyeIcon },
  { label: 'Control access', icon: LockKeyIcon },
  { label: 'Keep approvals with your team', icon: ShieldCheckIcon },
  { label: 'Manage every agent in one place', icon: BriefcaseIcon },
];

export function ControlSection() {
  return (
    <section className='bg-card px-5 py-24 sm:px-8 sm:py-32'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          <div>
            <p className='text-base font-semibold text-brand'>Confidence and control</p>
            <h2 className='mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>Stay in control as your agent team grows.</h2>
            <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground'>Fleet gives your organization one clear place to manage access, activity, and responsibility.</p>
          </div>
          <div className='grid border-t border-border sm:grid-cols-2'>
            {controls.map(({ label, icon: Icon }, index) => (
              <div key={label} className={`flex min-h-36 flex-col justify-between border-b border-border py-6 sm:p-7 ${index % 2 === 0 ? 'sm:border-r sm:border-border' : ''}`}>
                <Icon aria-hidden='true' className='size-5 text-brand' />
                <h3 className='mt-8 max-w-52 text-lg font-semibold leading-snug'>{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
