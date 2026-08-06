import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  ArrowRight,
  Braces,
  Check,
  ChevronRight,
  Cloud,
  Link2,
  Menu,
  Settings2,
  UsersRound,
  X,
} from 'lucide-react';
import { Button } from '@/shadcn/components/ui/button';
import { ContactUs } from '../components/contact-us';
import { ThemeToggle } from '../components/theme-toggle';
import {
  type BillingInterval,
  type PricingFamily,
  type PricingPlan,
  pricingPlansByFamily,
} from '../data/pricing';
import Logo from '../components/logo';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

const navigation = [
  { label: 'How it works', target: 'how-it-works' },
  { label: 'Platform', target: 'platform' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'Marketplace', target: 'marketplace' },
];

const frameworks = ['OpenAI', 'Anthropic', 'LangChain', 'CrewAI', 'Custom Python'];

const pricingFamilyOrder: PricingFamily[] = ['builder', 'team', 'enterprise'];
const pricingFamilyDetails: Record<PricingFamily, { label: string; description: string }> = {
  builder: { label: 'Builder', description: 'Explore, build, and publish your first agents.' },
  team: { label: 'Team', description: 'Run more agents across growing workflows.' },
  enterprise: { label: 'Enterprise', description: 'Scale agent capacity across your organization.' },
};
const activeSwitchButtonClass = 'bg-primary text-primary-foreground hover:bg-primary/90';
const inactiveSwitchButtonClass = 'text-muted-foreground hover:bg-accent hover:text-foreground';

const steps = [
  {
    number: '01',
    title: 'Connect the agent you already built',
    description:
      'Keep the framework and model provider you chose. Agentinc guides you through bringing the agent into your cloud workspace.',
  },
  {
    number: '02',
    title: 'Configure it for your team',
    description:
      'Choose its tools, access, and responsibilities from one managed platform, without rebuilding the agent around another SDK.',
  },
  {
    number: '03',
    title: 'Deploy and manage it in the cloud',
    description:
      'Launch through Agentinc, monitor activity, and scale access as more people and workflows join your workspace.',
  },
];

const platformCapabilities = [
  {
    label: 'Framework flexibility',
    description: 'Bring agents built with the frameworks and model providers your team already uses.',
    icon: Braces,
  },
  {
    label: 'Managed deployment',
    description: 'Move from setup to a cloud deployment without managing infrastructure yourself.',
    icon: Cloud,
  },
  {
    label: 'Connected workflows',
    description: 'Give agents access to the services and workflows they need from one place.',
    icon: Link2,
  },
  {
    label: 'Team workspace',
    description: 'Organize access, activity, and collaboration as your use of agents grows.',
    icon: UsersRound,
  },
];

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedBilling, setSelectedBilling] = useState<BillingInterval>('monthly');

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const selectPlan = (planId: string, billing: BillingInterval) => {
    setSelectedPlan(planId);
    setSelectedBilling(billing);
    scrollTo('beta');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onMenuToggle={() => setMobileMenuOpen((open) => !open)}
        onNavigate={scrollTo}
      />

      <main>
        <Hero onJoinBeta={() => scrollTo('beta')} onLearnMore={() => scrollTo('how-it-works')} />
        <CompatibilityStrip />
        <HowItWorks />
        <ManagedPlatformPreview onJoinBeta={() => scrollTo('beta')} />
        <PlatformSection />
        <PricingSection onSelectPlan={selectPlan} />
        <MarketplaceSection />
        <BetaSection selectedPlan={selectedPlan} selectedBilling={selectedBilling} />
      </main>

      <Footer onNavigate={scrollTo} />
    </div>
  );
}

function Header({
  mobileMenuOpen,
  onMenuToggle,
  onNavigate,
}: {
  mobileMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: (target: string) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto max-w-7xl rounded-full border border-brand/20 bg-background/95 px-4 py-2.5 shadow-sm sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onNavigate('top')}
            className="flex shrink-0 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Go to the top of the page"
          >
            <Logo width={23} />
            <span className="text-base font-semibold tracking-tight sm:text-lg">agentinc</span>
          </button>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => onNavigate(item.target)}
                className="rounded-full text-sm text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              type="button"
              onClick={() => onNavigate('beta')}
              className="hidden h-10 rounded-full px-5 sm:inline-flex"
            >
              Join the beta
              <ArrowRight aria-hidden="true" />
            </Button>
            <button
              type="button"
              onClick={onMenuToggle}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="grid gap-1 border-t border-border pt-3 mt-3 md:hidden" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => onNavigate(item.target)}
                className="rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <Button type="button" onClick={() => onNavigate('beta')} className="mt-2 rounded-full sm:hidden">
              Join the beta
              <ArrowRight aria-hidden="true" />
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero({ onJoinBeta, onLearnMore }: { onJoinBeta: () => void; onLearnMore: () => void }) {
  return (
    <section id="top" className="relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:min-h-[900px] lg:py-40">
      <div className="pointer-events-none absolute inset-0 landing-grid" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-brand">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            Private beta
          </div>
          <h1 className="max-w-5xl text-[clamp(2.9rem,7.2vw,6.7rem)] font-bold leading-[0.94] tracking-[-0.065em]">
            Run any AI agent.
            <span className="block text-brand">Rewrite nothing.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Bring agents built with OpenAI, Anthropic, LangChain, CrewAI, or your own Python. Agentinc gives your team one managed cloud platform to deploy, manage, and scale them.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              type="button"
              onClick={onJoinBeta}
              className="h-12 rounded-full px-7 text-base"
            >
              Join the private beta
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              type="button"
              onClick={onLearnMore}
              className="h-12 rounded-full bg-transparent px-7 text-base"
            >
              See how it works
            </Button>
          </div>
        </div>

        <CloudPlatformMap />
      </div>
    </section>
  );
}

function CloudPlatformMap() {
  return (
    <figure className="relative mx-auto w-full max-w-xl" aria-label="Agentinc cloud deployment flow">
      <div className="absolute -inset-12 -z-10 rounded-full bg-muted/40 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-brand/20 bg-card">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-muted-foreground/40" />
            <span className="size-2 rounded-full bg-muted-foreground/25" />
            <span className="size-2 rounded-full bg-muted-foreground/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">cloud.workspace</span>
        </div>
        <div className="space-y-3 p-4 sm:p-6">
          <PlatformNode label="Your agent" detail="built with your preferred framework" icon={<Braces aria-hidden="true" />} />
          <FlowConnector label="connect" />
          <PlatformNode label="Agentinc setup" detail="guided configuration for your team" icon={<Settings2 aria-hidden="true" />} />
          <FlowConnector label="deploy" />
          <ManagedCloudNode />
        </div>
        <div className="grid grid-cols-3 border-t border-border text-center text-[10px] uppercase tracking-wide text-muted-foreground">
          {['Deploy', 'Monitor', 'Scale'].map((action) => (
            <div key={action} className="border-r border-border px-2 py-3 last:border-r-0">
              {action}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function PlatformNode({
  label,
  detail,
  icon,
}: {
  label: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand/25 text-brand [&_svg]:size-4">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-medium">{label}</div>
        <div className="mt-0.5 truncate font-mono text-xs text-muted-foreground">{detail}</div>
      </div>
    </div>
  );
}

function ManagedCloudNode() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-primary bg-primary p-4 text-primary-foreground">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 [&_svg]:size-4">
        <Cloud aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-medium">Agentinc cloud</div>
        <div className="mt-0.5 truncate font-mono text-xs text-primary-foreground/65">managed · observable · scalable</div>
      </div>
    </div>
  );
}

function FlowConnector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 px-5 text-[10px] uppercase tracking-[0.18em] text-brand">
      <span className="h-6 w-px bg-brand/50" />
      {label}
    </div>
  );
}

function CompatibilityStrip() {
  return (
    <section aria-label="Supported agent frameworks" className="border-y border-border px-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="shrink-0 text-sm text-brand">Keep your framework</p>
        <div className="flex flex-wrap gap-x-7 gap-y-3 sm:justify-end">
          {frameworks.map((framework) => (
            <span key={framework} className="text-sm font-medium text-foreground/80">
              {framework}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium text-brand">How it works</p>
            <h2 className="mt-4 max-w-md text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Your agent works. Moving it should not mean rebuilding it.
            </h2>
          </div>
          <div className="border-t border-border">
            {steps.map((step) => (
              <article key={step.number} className="grid gap-4 border-b border-border py-8 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:gap-8 sm:py-10">
                <span className="font-mono text-xs text-brand">{step.number}</span>
                <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
                <p className="max-w-xl leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ManagedPlatformPreview({ onJoinBeta }: { onJoinBeta: () => void }) {
  return (
    <section id="platform" className="bg-primary px-5 py-24 text-primary-foreground sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-sm font-medium text-primary-foreground/65">Managed platform</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            From existing agent to managed cloud deployment.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
            Connect your agent, configure what it can do, and manage it from a shared workspace built for teams.
          </p>
          <Button
            type="button"
            onClick={onJoinBeta}
            className="mt-9 h-12 rounded-full border border-primary-foreground/20 bg-primary-foreground px-7 text-base text-primary hover:bg-primary-foreground/90"
          >
            Bring your agent
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary-foreground/20 bg-background text-foreground shadow-md">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Cloud aria-hidden="true" className="size-4" />
              Example workflow
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">Agentinc Cloud</span>
          </div>
          <div className="space-y-3 p-5 sm:p-8">
            <DeploymentStatus label="Agent connected" detail="Existing framework" />
            <DeploymentStatus label="Access configured" detail="Team workspace" />
            <DeploymentStatus label="Integrations selected" detail="Connected tools" />
            <ReadyDeploymentStatus />
          </div>
        </div>
      </div>
    </section>
  );
}

function DeploymentStatus({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-3">
        <Check aria-hidden="true" className="size-3.5 text-brand" />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-right text-sm text-muted-foreground">{detail}</span>
    </div>
  );
}

function ReadyDeploymentStatus() {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl border border-primary bg-primary p-4 text-primary-foreground">
      <div className="flex items-center gap-3">
        <Check aria-hidden="true" className="size-3.5" />
        <span className="text-sm font-medium">Deployment</span>
      </div>
      <span className="text-right text-sm text-primary-foreground/65">Ready to deploy</span>
    </div>
  );
}

function PlatformSection() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-brand">One cloud platform</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Everything your team needs to put agents to work.
          </h2>
        </div>

        <div className="mt-16 grid border-y border-border md:grid-cols-2">
          {platformCapabilities.map(({ label, description, icon: Icon }, index) => (
            <article
              key={label}
              className={`grid grid-cols-[auto_1fr] gap-5 py-8 md:p-10 ${index % 2 === 0 ? 'md:border-r md:border-border' : ''} ${index < 2 ? 'border-b border-border' : ''}`}
            >
              <div className="flex size-10 items-center justify-center rounded-full border border-brand/25 text-brand">
                <Icon aria-hidden="true" className="size-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ onSelectPlan }: { onSelectPlan: (planId: string, billing: BillingInterval) => void }) {
  const [billing, setBilling] = useState<BillingInterval>('monthly');
  const [family, setFamily] = useState<PricingFamily>('team');

  return (
    <section id="pricing" className="border-y border-border bg-card px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <PricingHeader />
        <PricingControls family={family} billing={billing} onFamilyChange={setFamily} onBillingChange={setBilling} />
        <PricingPlansPanel family={family} billing={billing} onSelectPlan={onSelectPlan} />
      </div>
    </section>
  );
}

function PricingControls({ family, billing, onFamilyChange, onBillingChange }: { family: PricingFamily; billing: BillingInterval; onFamilyChange: (family: PricingFamily) => void; onBillingChange: (billing: BillingInterval) => void }) {
  return (
    <div className="mt-12 flex flex-col gap-5 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
      <PricingFamilySwitch activeFamily={family} onFamilyChange={onFamilyChange} />
      <BillingSwitch billing={billing} onBillingChange={onBillingChange} />
    </div>
  );
}

function PricingPlansPanel({ family, billing, onSelectPlan }: { family: PricingFamily; billing: BillingInterval; onSelectPlan: (planId: string, billing: BillingInterval) => void }) {
  const familyDetails = pricingFamilyDetails[family];
  const plans = pricingPlansByFamily[family];
  return (
    <div className="mt-10" aria-live="polite">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight">{familyDetails.label} plans</h3>
        <p className="mt-2 text-sm text-muted-foreground">{familyDetails.description}</p>
      </div>
      <div className={`grid items-stretch gap-4 ${getPricingGridClass(plans.length)}`}>
        {plans.map((plan) => <PricingPlanCard key={plan.id} plan={plan} billing={billing} onSelectPlan={onSelectPlan} />)}
      </div>
    </div>
  );
}

function PricingHeader() {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium text-brand">Pricing</p>
      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Start small. Add agents as your work grows.</h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Every paid plan can be billed annually. Pay for 10 months and use Agentinc for 12.</p>
    </div>
  );
}

function PricingFamilySwitch({ activeFamily, onFamilyChange }: { activeFamily: PricingFamily; onFamilyChange: (family: PricingFamily) => void }) {
  return (
    <div className="inline-flex w-full rounded-full border border-brand/20 bg-background p-1 sm:w-fit" role="group" aria-label="Plan family">
      {pricingFamilyOrder.map((family) => {
        const isActive = activeFamily === family;
        return (
          <button
            key={family}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFamilyChange(family)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-none ${isActive ? activeSwitchButtonClass : inactiveSwitchButtonClass}`}
          >
            {pricingFamilyDetails[family].label}
          </button>
        );
      })}
    </div>
  );
}

function BillingSwitch({ billing, onBillingChange }: { billing: BillingInterval; onBillingChange: (billing: BillingInterval) => void }) {
  return (
    <div className="inline-flex w-full rounded-full border border-brand/20 bg-background p-1 sm:w-fit" aria-label="Billing interval">
      <BillingButton label="Monthly" interval="monthly" activeBilling={billing} onBillingChange={onBillingChange} />
      <BillingButton label="Annual · 2 free" interval="annual" activeBilling={billing} onBillingChange={onBillingChange} />
    </div>
  );
}

function BillingButton({ label, interval, activeBilling, onBillingChange }: { label: string; interval: BillingInterval; activeBilling: BillingInterval; onBillingChange: (billing: BillingInterval) => void }) {
  const isActive = activeBilling === interval;
  return (
    <button
      type="button"
      onClick={() => onBillingChange(interval)}
      aria-pressed={isActive}
      className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-none ${isActive ? activeSwitchButtonClass : inactiveSwitchButtonClass}`}
    >
      {label}
    </button>
  );
}

function PricingPlanCard({ plan, billing, onSelectPlan }: { plan: PricingPlan; billing: BillingInterval; onSelectPlan: (planId: string, billing: BillingInterval) => void }) {
  const appliedBilling = plan.id === 'free-trial' ? 'monthly' : billing;
  return (
    <article className="flex min-h-full flex-col rounded-2xl border border-brand/20 bg-background p-6 transition-colors hover:border-brand/50 sm:p-7">
      <PlanPrice plan={plan} billing={appliedBilling} />
      <dl className="my-7 divide-y divide-border border-y border-border">
        <PricingFact label="Agents" value={`${plan.agents}`} />
        <PricingFact label="Term" value={appliedBilling === 'annual' ? '12 months' : `${plan.durationDays} days`} />
        <PricingFact label="Publish to Marketplace" value={plan.marketplace ? 'Yes' : 'No'} />
        <PricingFact label="PAYG credits minimum" value={`$${plan.paygCreditsMinimum}`} />
      </dl>
      <Button type="button" variant="outline" onClick={() => onSelectPlan(plan.id, appliedBilling)} className="mt-auto w-full rounded-full border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
        {plan.id === 'free-trial' ? 'Start trial' : 'Choose plan'}
        <ArrowRight aria-hidden="true" />
      </Button>
    </article>
  );
}

function PlanPrice({ plan, billing }: { plan: PricingPlan; billing: BillingInterval }) {
  if (plan.monthlyPrice === 0) {
    return (
      <div>
        <h4 className="text-xl font-semibold">{plan.name}</h4>
        <p className="mt-5 text-4xl font-semibold tracking-tight text-brand">$0</p>
        <p className="mt-2 text-sm text-muted-foreground">Free for {plan.durationDays} days</p>
      </div>
    );
  }

  const annualTotal = plan.monthlyPrice * 10;
  const monthlyEquivalent = annualTotal / 12;
  return (
    <div>
      <h4 className="text-xl font-semibold">{plan.name}</h4>
      <p className="mt-5 flex items-end gap-2">
        <span className="text-4xl font-semibold tracking-tight text-brand">${billing === 'monthly' ? plan.monthlyPrice : annualTotal}</span>
        <span className="pb-1 text-sm text-muted-foreground">/ {billing === 'monthly' ? 'month' : 'year'}</span>
      </p>
      <p className="mt-2 min-h-5 text-sm text-muted-foreground">
        {billing === 'annual' ? `$${annualTotal} / year · $${formatPrice(monthlyEquivalent)} / month equivalent` : 'Billed monthly'}
      </p>
    </div>
  );
}

function PricingFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  );
}

function getPricingGridClass(planCount: number) {
  if (planCount === 2) return 'md:grid-cols-2 lg:max-w-4xl';
  return 'md:grid-cols-3';
}

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(2);
}

function MarketplaceSection() {
  return (
    <section id="marketplace" className="border-y border-border bg-card px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-24">
        <div>
          <p className="text-sm font-medium text-brand">Marketplace distribution</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Publish once. Install into any tenant.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Developers publish without adopting another SDK. Teams discover and install reviewed agents into a managed workspace with clear administrative controls.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
          {['Publish', 'Review', 'Install'].map((stage, index) => (
            <div key={stage} className="contents">
              <div className="rounded-xl border border-brand/20 bg-background p-5">
                <span className="font-mono text-[10px] text-brand">0{index + 1}</span>
                <div className="mt-8 text-lg font-semibold">{stage}</div>
              </div>
              {index < 2 && <ChevronRight aria-hidden="true" className="mx-auto hidden size-4 text-brand sm:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BetaSection({ selectedPlan, selectedBilling }: { selectedPlan: string; selectedBilling: BillingInterval }) {
  return (
    <section id="beta" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute inset-0 landing-grid opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-brand">
            Private beta access
          </div>
          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Bring the agent you already built.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tell us what you are running today. We will help you adapt, deploy, and operate it on Agentinc.
          </p>
          <ul className="mt-9 space-y-4 text-sm text-muted-foreground">
            {['Framework-independent onboarding', 'Managed cloud deployment', 'Direct access to the Agentinc team'].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex size-5 items-center justify-center rounded-full border border-brand/30 text-brand">
                  <Check aria-hidden="true" className="size-3" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <ContactUs key={`${selectedPlan}-${selectedBilling}`} defaultPlan={selectedPlan} defaultBilling={selectedBilling} />
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onNavigate: (target: string) => void }) {
  return (
    <footer className="border-t border-brand/20 bg-footer px-5 py-8 text-footer-foreground sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-footer-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" onClick={() => onNavigate('top')} className="flex items-center gap-2 text-footer-foreground">
          <Logo width={19} />
          <span className="font-medium">agentinc</span>
        </button>
        <p>One cloud platform for agents built anywhere.</p>
        <p>&copy; 2026 agentinc.</p>
      </div>
    </footer>
  );
}
