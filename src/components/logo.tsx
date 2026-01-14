import { useTheme } from '../components/theme-provider';
import { useEffect, useState } from 'react';
import LogoSvg from '../assets/logo_svg';
import { cn } from '../shadcn/lib/utils';
const Logo = ({ color, width }: { color?: string; width?: number }) => {
  const { theme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light' | null>(null);
  useEffect(() => {
    if (theme === 'system' && systemTheme === null) {
      const system = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSystemTheme(system);
    }
  }, [theme, systemTheme]);
  return (
    <div
      className={cn(
        'border-[2.5px] rounded-[6.5px] object-cover',
        width ? `w-[${width}px] h-[${width}px]` : 'w-8 h-8',
        color ? `` : 'border-primary'
      )}
      style={
        color
          ? {
              borderColor: color,
            }
          : {}
      }
    >
      <LogoSvg
        customColor={
          color ||
          (theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
            ? '#FFFFFF'
            : 'oklch(0.208 0.042 265.755);')
        }
        width={width}
      />
    </div>
  );
};

export default Logo;
