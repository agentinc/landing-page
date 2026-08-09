import { useState } from 'react';
import { CheckIcon } from '@phosphor-icons/react/dist/csr/Check';
import { PaletteIcon } from '@phosphor-icons/react/dist/csr/Palette';

const accentOptions = [
  { value: 'blue', label: 'Blue' },
  { value: 'teal', label: 'Teal' },
  { value: 'emerald', label: 'Emerald' },
  { value: 'dark-orange', label: 'Dark orange' },
  { value: 'dark-red', label: 'Dark red' },
] as const;

const heroPatternOptions = [
  { value: 'dots', label: 'Dots' },
  { value: 'lines', label: 'Lines' },
] as const;

type AccentColor = (typeof accentOptions)[number]['value'];
type AccentOption = (typeof accentOptions)[number];
type HeroPattern = (typeof heroPatternOptions)[number]['value'];
type HeroPatternOption = (typeof heroPatternOptions)[number];

function isAccentColor(value: string | null): value is AccentColor {
  return accentOptions.some((option) => option.value === value);
}

function storedAccent(): AccentColor {
  const stored = localStorage.getItem('accent-storage');
  return isAccentColor(stored) ? stored : 'blue';
}

function isHeroPattern(value: string | null): value is HeroPattern {
  return heroPatternOptions.some((option) => option.value === value);
}

function storedHeroPattern(): HeroPattern {
  const stored = localStorage.getItem('hero-pattern-storage');
  return isHeroPattern(stored) ? stored : 'lines';
}

function isAccentPickerEnabled() {
  const hostname = window.location.hostname;
  return (
    import.meta.env.DEV ||
    hostname.startsWith('landing-page-dev.') ||
    new URLSearchParams(window.location.search).has('accent-picker')
  );
}

function AccentSwatch({
  option,
  isSelected,
  onSelect,
}: {
  option: AccentOption;
  isSelected: boolean;
  onSelect: (accent: AccentColor) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.value)}
      className="accent-swatch flex size-10 items-center justify-center rounded-full border border-foreground/15 text-swatch-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      data-accent-swatch={option.value}
      aria-label={`Use ${option.label} accent`}
      aria-pressed={isSelected}
      title={option.label}
    >
      {isSelected && <CheckIcon aria-hidden="true" className="size-4" weight="bold" />}
    </button>
  );
}

function PatternSwatch({
  option,
  isSelected,
  onSelect,
}: {
  option: HeroPatternOption;
  isSelected: boolean;
  onSelect: (pattern: HeroPattern) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.value)}
      className="pattern-swatch flex size-10 items-center justify-center rounded-lg border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      data-pattern-swatch={option.value}
      aria-label={`Use ${option.label.toLowerCase()} in the hero background`}
      aria-pressed={isSelected}
      title={option.label}
    >
      {isSelected && <CheckIcon aria-hidden="true" className="size-4" weight="bold" />}
    </button>
  );
}

export function DesignPicker() {
  const [accent, setAccent] = useState<AccentColor>(storedAccent);
  const [heroPattern, setHeroPattern] = useState<HeroPattern>(storedHeroPattern);

  if (!isAccentPickerEnabled()) return null;

  const selectAccent = (nextAccent: AccentColor) => {
    document.documentElement.dataset.accent = nextAccent;
    localStorage.setItem('accent-storage', nextAccent);
    setAccent(nextAccent);
  };

  const selectHeroPattern = (nextPattern: HeroPattern) => {
    document.documentElement.dataset.heroPattern = nextPattern;
    localStorage.setItem('hero-pattern-storage', nextPattern);
    setHeroPattern(nextPattern);
  };

  return (
    <aside className="fixed right-4 top-1/2 z-[60] hidden -translate-y-1/2 flex-col gap-3 rounded-xl border border-border bg-card p-3 text-card-foreground shadow-md lg:flex" aria-label="Development design picker">
      <div className="flex items-center gap-2 px-1 text-xs font-medium text-muted-foreground">
        <PaletteIcon aria-hidden="true" className="size-4" />
        Accent
      </div>
      <div className="flex flex-col gap-2" role="group" aria-label="Accent color">
        {accentOptions.map((option) => (
          <AccentSwatch
            key={option.value}
            option={option}
            isSelected={accent === option.value}
            onSelect={selectAccent}
          />
        ))}
      </div>
      <div className="h-px bg-border" />
      <div className="px-1 text-xs font-medium text-muted-foreground">Hero</div>
      <div className="flex flex-col gap-2" role="group" aria-label="Hero background pattern">
        {heroPatternOptions.map((option) => (
          <PatternSwatch
            key={option.value}
            option={option}
            isSelected={heroPattern === option.value}
            onSelect={selectHeroPattern}
          />
        ))}
      </div>
    </aside>
  );
}
