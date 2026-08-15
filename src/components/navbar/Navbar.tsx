import { ArrowRightIcon } from '@phosphor-icons/react/dist/csr/ArrowRight';
import { ListIcon } from '@phosphor-icons/react/dist/csr/List';
import { XIcon } from '@phosphor-icons/react/dist/csr/X';
import { Button } from '@/shadcn/components/ui/button';
import Logo from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const navigationItems = [
  { label: 'Agents', target: 'agents' },
  { label: 'How it works', target: 'how-it-works' },
  { label: 'Marketplace', target: 'marketplace' },
  { label: 'Pricing', target: 'pricing' },
];

type NavbarProps = {
  mobileMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: (target: string) => void;
};

export function Navbar({
  mobileMenuOpen,
  onMenuToggle,
  onNavigate,
}: NavbarProps) {
  return (
    <header className='fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5'>
      <div className='mx-auto max-w-7xl rounded-full border bg-background/95 pl-4 py-2.5 pr-2.5 sm:pl-5'>
        <div className='flex items-center justify-between gap-3'>
          <button
            type='button'
            onClick={() => onNavigate('top')}
            className='flex shrink-0 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            aria-label='Go to the top of the page'
          >
            <Logo width={23} />
            <span className='text-base font-semibold tracking-tight sm:text-lg font-mono'>
              agentinc
            </span>
          </button>

          <nav className='hidden items-center gap-6 lg:flex' aria-label='Primary navigation'>
            {navigationItems.map((item) => (
              <button
                key={item.target}
                type='button'
                onClick={() => onNavigate(item.target)}
                className='rounded-full text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className='flex items-center gap-2'>
            <ThemeToggle />
            <Button
              type='button'
              onClick={() => onNavigate('beta')}
              className='hidden h-10 rounded-full px-6 sm:inline-flex'
            >
              Get early access
              <ArrowRightIcon aria-hidden='true' />
            </Button>
            <button
              type='button'
              onClick={onMenuToggle}
              className='inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden'
              aria-expanded={mobileMenuOpen}
              aria-controls='mobile-navigation'
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? (
                <XIcon aria-hidden='true' className='size-4' />
              ) : (
                <ListIcon aria-hidden='true' className='size-4' />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id='mobile-navigation'
            className='mt-3 grid gap-1 border-t border-border pt-3 lg:hidden'
            aria-label='Mobile navigation'
          >
            {navigationItems.map((item) => (
              <button
                key={item.target}
                type='button'
                onClick={() => onNavigate(item.target)}
                className='rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground'
              >
                {item.label}
              </button>
            ))}
            <Button
              type='button'
              onClick={() => onNavigate('beta')}
              className='mt-2 rounded-full sm:hidden'
            >
              Get early access
              <ArrowRightIcon aria-hidden='true' />
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
