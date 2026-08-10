import { MoonIcon } from '@phosphor-icons/react/dist/csr/Moon';
import { SunIcon } from '@phosphor-icons/react/dist/csr/Sun';
import { Button } from '@/shadcn/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative size-10 rounded-full bg-transparent hover:bg-transparent dark:hover:bg-transparent"
      aria-label="Toggle color theme"
    >
      <SunIcon aria-hidden="true" className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <MoonIcon aria-hidden="true" className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
