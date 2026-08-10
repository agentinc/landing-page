import { useLayoutEffect, useState } from 'react';
import { CheckIcon } from '@phosphor-icons/react/dist/csr/Check';
import { PaletteIcon } from '@phosphor-icons/react/dist/csr/Palette';

const accentOptions = [
  { value: 'blue', label: 'Blue' },
  { value: 'teal', label: 'Teal' },
  { value: 'emerald', label: 'Emerald' },
  { value: 'dark-orange', label: 'Dark orange' },
  { value: 'dark-red', label: 'Dark red' },
] as const;

const backgroundPatternOptions = [
  { value: 'dots', label: 'Dots' },
  { value: 'lines', label: 'Lines' },
] as const;

const backgroundPatternOpacity = {
  minimum: 20,
  maximum: 100,
  step: 5,
  defaultValue: 70,
} as const;

type AccentColor = (typeof accentOptions)[number]['value'];
type AccentOption = (typeof accentOptions)[number];
type BackgroundPattern = (typeof backgroundPatternOptions)[number]['value'];
type BackgroundPatternOption = (typeof backgroundPatternOptions)[number];

function isAccentColor(value: string | null): value is AccentColor {
  return accentOptions.some((option) => option.value === value);
}

function storedAccent(): AccentColor {
  const stored = localStorage.getItem('accent-storage');
  return isAccentColor(stored) ? stored : 'blue';
}

function isBackgroundPattern(value: string | null): value is BackgroundPattern {
  return backgroundPatternOptions.some((option) => option.value === value);
}

function storedBackgroundPattern(): BackgroundPattern {
  const stored = localStorage.getItem('background-pattern-storage') ?? localStorage.getItem('hero-pattern-storage');
  return isBackgroundPattern(stored) ? stored : 'lines';
}

function storedBackgroundPatternOpacity(): number {
  const storedValue = localStorage.getItem('background-pattern-opacity-storage') ?? localStorage.getItem('hero-pattern-opacity-storage');
  const stored = Number(storedValue);
  return Number.isFinite(stored) && stored >= backgroundPatternOpacity.minimum && stored <= backgroundPatternOpacity.maximum
    ? stored
    : backgroundPatternOpacity.defaultValue;
}

function isDesignPickerEnabled() {
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
  option: BackgroundPatternOption;
  isSelected: boolean;
  onSelect: (pattern: BackgroundPattern) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.value)}
      className="pattern-swatch flex size-10 items-center justify-center rounded-lg border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      data-pattern-swatch={option.value}
      aria-label={`Use ${option.label.toLowerCase()} in section backgrounds`}
      aria-pressed={isSelected}
      title={option.label}
    >
      {isSelected && <CheckIcon aria-hidden="true" className="size-4" weight="bold" />}
    </button>
  );
}

export function DesignPicker() {
  const pickerEnabled = isDesignPickerEnabled();
  const [accent, setAccent] = useState<AccentColor>(storedAccent);
  const [backgroundPattern, setBackgroundPattern] = useState<BackgroundPattern>(storedBackgroundPattern);
  const [patternOpacity, setPatternOpacity] = useState<number>(storedBackgroundPatternOpacity);

  useLayoutEffect(() => {
    if (!pickerEnabled) return;
    document.documentElement.style.setProperty('--background-pattern-opacity', String(patternOpacity / 100));
  }, [patternOpacity, pickerEnabled]);

  if (!pickerEnabled) return null;

  const selectAccent = (nextAccent: AccentColor) => {
    document.documentElement.dataset.accent = nextAccent;
    localStorage.setItem('accent-storage', nextAccent);
    setAccent(nextAccent);
  };

  const selectBackgroundPattern = (nextPattern: BackgroundPattern) => {
    document.documentElement.dataset.backgroundPattern = nextPattern;
    localStorage.setItem('background-pattern-storage', nextPattern);
    setBackgroundPattern(nextPattern);
  };

  const selectPatternOpacity = (nextOpacity: number) => {
    localStorage.setItem('background-pattern-opacity-storage', String(nextOpacity));
    setPatternOpacity(nextOpacity);
  };

  return (
    <aside className="fixed right-4 top-1/2 z-[60] hidden w-32 -translate-y-1/2 flex-col gap-3 rounded-xl border border-border bg-card p-3 text-card-foreground shadow-md lg:flex" aria-label="Development design picker">
      <div className="flex items-center gap-2 px-1 text-xs font-medium text-muted-foreground">
        <PaletteIcon aria-hidden="true" className="size-4" />
        Accent
      </div>
      <div className="flex flex-col items-center gap-2" role="group" aria-label="Accent color">
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
      <div className="px-1 text-xs font-medium text-muted-foreground">Background</div>
      <div className="flex justify-center gap-2" role="group" aria-label="Section background pattern">
        {backgroundPatternOptions.map((option) => (
          <PatternSwatch
            key={option.value}
            option={option}
            isSelected={backgroundPattern === option.value}
            onSelect={selectBackgroundPattern}
          />
        ))}
      </div>
      <label className="grid gap-2 text-[10px] text-muted-foreground" htmlFor="background-pattern-opacity">
        <span className="flex items-center justify-between">
          Opacity
          <output htmlFor="background-pattern-opacity" className="text-foreground">{patternOpacity}%</output>
        </span>
        <input
          id="background-pattern-opacity"
          type="range"
          min={backgroundPatternOpacity.minimum}
          max={backgroundPatternOpacity.maximum}
          step={backgroundPatternOpacity.step}
          value={patternOpacity}
          onChange={(event) => selectPatternOpacity(Number(event.currentTarget.value))}
          className="w-full accent-brand"
        />
      </label>
    </aside>
  );
}
