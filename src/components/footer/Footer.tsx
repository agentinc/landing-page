import Logo from '@/components/logo';

type FooterProps = {
  onNavigate: (target: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className='border-t border-brand/20 bg-footer px-5 py-8 text-footer-foreground sm:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-5 text-sm text-footer-foreground/60 sm:flex-row sm:items-center sm:justify-between'>
        <button type='button' onClick={() => onNavigate('top')} className='flex items-center gap-2 text-footer-foreground'>
          <Logo width={19} />
          <span className='font-medium font-mono'>fleet</span>
        </button>
        <p>Find, customize, and manage your AI agent team.</p>
        <p>&copy; 2026 fleet.</p>
      </div>
    </footer>
  );
}
