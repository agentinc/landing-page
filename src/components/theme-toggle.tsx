import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type ResolvedTheme = 'light' | 'dark';

function currentTheme(): ResolvedTheme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function applyTheme(theme: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;

  const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
  if (favicon) favicon.href = theme === 'dark' ? '/logo_white.svg' : '/logo_black.svg';

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (themeColor) themeColor.content = getComputedStyle(root).getPropertyValue('--background').trim();
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ResolvedTheme>(currentTheme);

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = () => {
      const storedTheme = localStorage.getItem('theme-storage');
      if (storedTheme !== null && storedTheme !== 'system') return;
      const systemTheme = colorScheme.matches ? 'dark' : 'light';
      applyTheme(systemTheme);
      setTheme(systemTheme);
    };

    colorScheme.addEventListener('change', syncSystemTheme);
    return () => colorScheme.removeEventListener('change', syncSystemTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme-storage', nextTheme);
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  const targetTheme = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Switch to ${targetTheme} theme`}
      title={`Switch to ${targetTheme} theme`}
    >
      {theme === 'dark' ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
    </button>
  );
}
