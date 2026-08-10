import { useId, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/csr/ArrowRight';
import { BriefcaseIcon } from '@phosphor-icons/react/dist/csr/Briefcase';
import { ChartLineUpIcon } from '@phosphor-icons/react/dist/csr/ChartLineUp';
import { CheckIcon } from '@phosphor-icons/react/dist/csr/Check';
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code';
import { CurrencyDollarIcon } from '@phosphor-icons/react/dist/csr/CurrencyDollar';
import { EyeIcon } from '@phosphor-icons/react/dist/csr/Eye';
import { GearSixIcon } from '@phosphor-icons/react/dist/csr/GearSix';
import { HeadsetIcon } from '@phosphor-icons/react/dist/csr/Headset';
import { InfoIcon } from '@phosphor-icons/react/dist/csr/Info';
import { LinkIcon } from '@phosphor-icons/react/dist/csr/Link';
import { ListIcon } from '@phosphor-icons/react/dist/csr/List';
import { LockKeyIcon } from '@phosphor-icons/react/dist/csr/LockKey';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/csr/MagnifyingGlass';
import { MegaphoneIcon } from '@phosphor-icons/react/dist/csr/Megaphone';
import { PlugsConnectedIcon } from '@phosphor-icons/react/dist/csr/PlugsConnected';
import { ShieldCheckIcon } from '@phosphor-icons/react/dist/csr/ShieldCheck';
import { UsersFourIcon } from '@phosphor-icons/react/dist/csr/UsersFour';
import { UsersThreeIcon } from '@phosphor-icons/react/dist/csr/UsersThree';
import { WrenchIcon } from '@phosphor-icons/react/dist/csr/Wrench';
import { XIcon } from '@phosphor-icons/react/dist/csr/X';
import { Button } from '@/shadcn/components/ui/button';
import { ContactUs } from '../components/contact-us';
import { ThemeToggle } from '../components/theme-toggle';
import {
  type BillingInterval,
  type PricingPlan,
  developerPlan,
  pricingPlansByFamily,
} from '../data/pricing';
import Logo from '../components/logo';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

const navigation = [
  { label: 'Agents', target: 'agents' },
  { label: 'How it works', target: 'how-it-works' },
  { label: 'Marketplace', target: 'marketplace' },
  { label: 'Pricing', target: 'pricing' },
];

const businessFunctions = [
  {
    label: 'Engineering',
    description: 'Support planning, documentation, reviews, and recurring technical work.',
    icon: CodeIcon,
  },
  {
    label: 'Customer service',
    description: 'Help teams respond, summarize conversations, and resolve routine requests.',
    icon: HeadsetIcon,
  },
  {
    label: 'Finance',
    description: 'Organize reporting, review information, and prepare recurring financial workflows.',
    icon: CurrencyDollarIcon,
  },
  {
    label: 'Human resources',
    description: 'Coordinate onboarding, answer internal questions, and support people operations.',
    icon: UsersFourIcon,
  },
  {
    label: 'Sales',
    description: 'Research accounts, prepare follow-ups, and keep opportunities moving.',
    icon: ChartLineUpIcon,
  },
  {
    label: 'Marketing',
    description: 'Turn research and briefs into campaigns, drafts, and reusable content.',
    icon: MegaphoneIcon,
  },
  {
    label: 'Operations',
    description: 'Coordinate recurring work, track handoffs, and keep processes moving.',
    icon: GearSixIcon,
  },
  {
    label: 'Research and analysis',
    description: 'Gather information, compare options, and prepare decision-ready findings.',
    icon: MagnifyingGlassIcon,
  },
];

const adoptionSteps = [
  {
    title: 'Find the right agents',
    description: 'Browse by business function, task, or goal to find specialists suited to the work.',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'Connect your business',
    description: 'Choose the tools and information each agent needs to work with your team.',
    icon: PlugsConnectedIcon,
  },
  {
    title: 'Make them yours',
    description: 'Agentinc helps tailor responsibilities, knowledge, access, and approval rules.',
    icon: WrenchIcon,
  },
  {
    title: 'Assemble your team',
    description: 'Bring specialists together in one workspace and start putting them to work.',
    icon: UsersThreeIcon,
  },
];

const teamsPricingDetails = {
  label: 'Teams',
  description: 'Choose the right capacity for a growing team of agents.',
  defaultPlanId: 'pro',
};

const activeSwitchButtonClass = 'bg-primary text-primary-foreground';
const inactiveSwitchButtonClass = 'text-muted-foreground';

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedBilling, setSelectedBilling] = useState<BillingInterval>('annual');

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
        <Hero
          onGetAccess={() => scrollTo('beta')}
          onExploreAgents={() => scrollTo('agents')}
        />
        <BusinessFunctionsSection />
        <HowItWorks />
        <AgentTeamSection />
        <MarketplaceSection />
        <CustomizationSection />
        <ControlSection />
        <PricingSection onSelectPlan={selectPlan} />
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

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => onNavigate(item.target)}
                className="rounded-full text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              Get early access
              <ArrowRightIcon aria-hidden="true" />
            </Button>
            <button
              type="button"
              onClick={onMenuToggle}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? (
                <XIcon aria-hidden="true" className="size-4" />
              ) : (
                <ListIcon aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="mt-3 grid gap-1 border-t border-border pt-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => onNavigate(item.target)}
                className="rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground"
              >
                {item.label}
              </button>
            ))}
            <Button
              type="button"
              onClick={() => onNavigate('beta')}
              className="mt-2 rounded-full sm:hidden"
            >
              Get early access
              <ArrowRightIcon aria-hidden="true" />
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero({
  onGetAccess,
  onExploreAgents,
}: {
  onGetAccess: () => void;
  onExploreAgents: () => void;
}) {
  return (
    <section
      id="top"
      className="relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:min-h-225 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 landing-grid" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-20">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/35 bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-brand">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            Private beta
          </div>
          <h1 className="max-w-5xl text-[clamp(2.9rem,7.2vw,6.7rem)] font-bold leading-[0.94] tracking-[-0.065em]">
            Your agents.
            <span className="block text-brand">One managed cloud.</span>
          </h1>
          <p className="mt-8 max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Find specialized agents, connect them to the tools your company uses,
            and bring them together as a team built around your business.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              type="button"
              onClick={onGetAccess}
              className="h-12 rounded-full px-7 text-base"
            >
              Get early access
              <ArrowRightIcon aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              type="button"
              onClick={onExploreAgents}
              className="h-12 rounded-full bg-transparent px-7 text-base"
            >
              Explore agents
            </Button>
          </div>
        </div>

        <AgentWorkspacePreview />
      </div>
    </section>
  );
}

function AgentWorkspacePreview() {
  const stages = [
    { label: 'Browse specialists', detail: 'Sales · Finance · Support', icon: MagnifyingGlassIcon },
    { label: 'Connect your tools', detail: 'Choose data and access', icon: LinkIcon },
    { label: 'Assemble a team', detail: 'Set roles and handoffs', icon: UsersThreeIcon },
  ];
  const selectedAgents = [
    { label: 'Engineering agent', icon: CodeIcon, color: 'text-agent-1' },
    { label: 'Customer service agent', icon: HeadsetIcon, color: 'text-agent-2' },
    { label: 'Finance agent', icon: CurrencyDollarIcon, color: 'text-agent-3' },
    { label: 'Operations agent', icon: GearSixIcon, color: 'text-agent-4' },
  ];

  return (
    <figure className="relative mx-auto w-full max-w-xl" aria-label="Building an AI agent team with Agentinc">
      <div className="overflow-hidden rounded-2xl border border-brand/20 bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <BriefcaseIcon aria-hidden="true" className="size-4 text-brand" />
            Your Agentinc workspace
          </div>
          <span className="rounded-full border border-brand/25 px-2.5 py-1 text-[10px] font-medium text-brand">
            Team setup
          </span>
        </div>

        <div className="p-5 sm:p-7">
          <div className="space-y-3">
            {stages.map(({ label, detail, icon: Icon }, index) => (
              <div key={label} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0">
                <div className="flex size-9 items-center justify-center rounded-full border border-brand/25 text-brand">
                  <Icon aria-hidden="true" className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium">{label}</div>
                  <div className="mt-0.5 truncate text-xs text-muted-foreground">{detail}</div>
                </div>
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border bg-muted p-5 text-foreground">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">Your agent team</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Connected and ready to work
                </div>
              </div>
              <div className="flex -space-x-2" aria-label="Four agents selected">
                {selectedAgents.map(({ label, icon: Icon, color }) => (
                  <span
                    key={label}
                    title={label}
                    className={`flex size-9 items-center justify-center rounded-full border border-brand/35 bg-background ${color}`}
                  >
                    <Icon aria-hidden="true" className="size-4" weight="bold" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function BusinessFunctionsSection() {
  return (
    <section id="agents" className="border-y border-border bg-card px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-base font-semibold text-brand">Agents for your business</p>
            <h2 className="mt-4 max-w-lg text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Specialized help across your entire business.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Find agents for individual tasks or combine specialists into a team that works across functions.
            </p>
          </div>

          <div className="grid border-t border-border sm:grid-cols-2">
            {businessFunctions.map(({ label, description, icon: Icon }, index) => (
              <article
                key={label}
                className={`grid grid-cols-[auto_1fr] gap-4 border-b border-border py-6 sm:p-6 ${index % 2 === 0 ? 'sm:border-r sm:border-border' : ''}`}
              >
                <Icon aria-hidden="true" className="mt-1 size-5 text-brand" />
                <div>
                  <h3 className="font-semibold">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-base font-semibold text-brand">How it works</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            From a business need to a working agent team.
          </h2>
        </div>

        <div className="mt-16 border-t border-border">
          {adoptionSteps.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="grid gap-4 border-b border-border py-8 sm:grid-cols-[auto_0.8fr_1.2fr] sm:items-start sm:gap-7 sm:py-10"
            >
              <Icon aria-hidden="true" className="size-5 text-brand" />
              <h3 className="text-xl font-semibold leading-snug">{title}</h3>
              <p className="max-w-xl leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentTeamSection() {
  const workflow = [
    {
      agent: 'Research agent',
      task: 'Collects and organizes the information',
      icon: MagnifyingGlassIcon,
      color: 'text-agent-1',
    },
    {
      agent: 'Operations agent',
      task: 'Turns findings into an actionable plan',
      icon: GearSixIcon,
      color: 'text-agent-2',
    },
    {
      agent: 'Communication agent',
      task: 'Prepares the team-ready output',
      icon: MegaphoneIcon,
      color: 'text-agent-3',
    },
  ];

  return (
    <section className="border-y border-border bg-muted px-5 py-24 text-foreground sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-base font-semibold text-brand">Agent teams</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            One goal. A team of specialized agents.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Give each agent a clear role, connect the handoffs, and keep human review where your business needs it.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <span className="text-sm font-medium">Quarterly planning team</span>
            <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
              3 agents
            </span>
          </div>
          <div className="divide-y divide-border px-5 sm:px-7">
            {workflow.map(({ agent, task, icon: Icon, color }) => (
              <div key={agent} className="grid gap-3 py-5 sm:grid-cols-[2rem_0.8fr_1.2fr] sm:items-center sm:gap-5">
                <span className={`flex size-8 items-center justify-center rounded-full border border-brand/35 ${color}`}>
                  <Icon aria-hidden="true" className="size-4" weight="bold" />
                </span>
                <span className="font-medium">{agent}</span>
                <span className="text-sm text-muted-foreground">{task}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 border-t border-border px-5 py-4 text-sm text-muted-foreground sm:px-7">
            <CheckIcon aria-hidden="true" className="size-4 text-brand" weight="bold" />
            Final review stays with your team
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketplaceSection() {
  const listings = [
    ['Customer service', 'Inbox and response assistant'],
    ['Finance', 'Reporting and reconciliation assistant'],
    ['Engineering', 'Documentation and review assistant'],
  ];

  return (
    <section id="marketplace" className="border-b border-border bg-card px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24">
        <div>
          <p className="text-base font-semibold text-brand">Marketplace</p>
          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Find what your business needs next.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Browse agents, tools, and connectors for different roles and business functions. Add what you need and expand your team as your work changes.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand/20 bg-background">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4 text-sm text-muted-foreground">
            <MagnifyingGlassIcon aria-hidden="true" className="size-4" />
            Search agents, tools, and connectors
          </div>
          <div className="divide-y divide-border px-5 sm:px-7">
            {listings.map(([category, name]) => (
              <div key={name} className="grid gap-2 py-5 sm:grid-cols-[0.75fr_1.25fr_auto] sm:items-center sm:gap-5">
                <span className="text-base font-semibold text-brand">{category}</span>
                <span className="text-base font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">View agent</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 border-t border-border text-center text-xs text-muted-foreground">
            {['Agents', 'Tools', 'Connectors'].map((item) => (
              <div key={item} className="border-r border-border px-3 py-4 last:border-r-0">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomizationSection() {
  const customizationItems = [
    'Responsibilities and goals',
    'Company knowledge',
    'Connected applications',
    'Access and approval rules',
  ];

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
        <div className="order-2 rounded-2xl border border-brand/20 bg-card p-6 sm:p-8 lg:order-1">
          <div className="flex items-center gap-3 border-b border-border pb-5">
            <WrenchIcon aria-hidden="true" className="size-5 text-brand" />
            <span className="font-semibold">Your custom agent</span>
          </div>
          <div className="divide-y divide-border">
            {customizationItems.map((item) => (
              <div key={item} className="flex items-center gap-3 py-4 text-sm">
                <span className="flex size-5 items-center justify-center rounded-full border border-brand/30 text-brand">
                  <CheckIcon aria-hidden="true" className="size-3" weight="bold" />
                </span>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground">
            Configured with help from the Agentinc team
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-base font-semibold text-brand">Customized for you</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Built around the way your company works.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Start with a ready-made agent or work with Agentinc to tailor one around your processes, knowledge, policies, and tools.
          </p>
        </div>
      </div>
    </section>
  );
}

function ControlSection() {
  const controls = [
    { label: 'See agent activity', icon: EyeIcon },
    { label: 'Control access', icon: LockKeyIcon },
    { label: 'Keep approvals with your team', icon: ShieldCheckIcon },
    { label: 'Manage every agent in one place', icon: BriefcaseIcon },
  ];

  return (
    <section className="border-y border-border bg-card px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-base font-semibold text-brand">Confidence and control</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Stay in control as your agent team grows.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Agentinc gives your organization one clear place to manage access, activity, and responsibility.
            </p>
          </div>

          <div className="grid border-t border-border sm:grid-cols-2">
            {controls.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex min-h-36 flex-col justify-between border-b border-border py-6 sm:p-7 ${index % 2 === 0 ? 'sm:border-r sm:border-border' : ''}`}
              >
                <Icon aria-hidden="true" className="size-5 text-brand" />
                <h3 className="mt-8 max-w-52 text-lg font-semibold leading-snug">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection({
  onSelectPlan,
}: {
  onSelectPlan: (planId: string, billing: BillingInterval) => void;
}) {
  const [billing, setBilling] = useState<BillingInterval>('annual');
  const [selectedTeamsPlanId, setSelectedTeamsPlanId] = useState(
    teamsPricingDetails.defaultPlanId,
  );
  const teamsPlans = pricingPlansByFamily.business;
  const selectedTeamsPlan =
    teamsPlans.find((plan) => plan.id === selectedTeamsPlanId) ?? teamsPlans[0];

  return (
    <section id="pricing" className="border-y border-border bg-card px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <PricingHeader />
        <div className="mt-10 flex justify-center">
          <BillingSwitch billing={billing} onBillingChange={setBilling} />
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          <DeveloperPricingCard billing={billing} onSelectPlan={onSelectPlan} />
          <TeamsPricingCard
            plans={teamsPlans}
            selectedPlan={selectedTeamsPlan}
            billing={billing}
            onPlanChange={setSelectedTeamsPlanId}
            onSelectPlan={onSelectPlan}
          />
          <EnterprisePricingCard billing={billing} onSelectPlan={onSelectPlan} />
        </div>
      </div>
    </section>
  );
}

function PricingHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-base font-semibold text-brand">Pricing</p>
      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        Start with one agent. Grow into a team.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Choose the agent capacity that fits your business today, then expand when you need more.
      </p>
    </div>
  );
}

function BillingSwitch({
  billing,
  onBillingChange,
}: {
  billing: BillingInterval;
  onBillingChange: (billing: BillingInterval) => void;
}) {
  return (
    <div
      className="inline-flex w-full max-w-xs rounded-full border border-brand/20 bg-background p-1 sm:w-fit sm:max-w-none"
      role="group"
      aria-label="Billing interval"
    >
      <BillingButton
        label="Monthly"
        interval="monthly"
        activeBilling={billing}
        onBillingChange={onBillingChange}
      />
      <BillingButton
        label="Annual"
        badge="-17%"
        interval="annual"
        activeBilling={billing}
        onBillingChange={onBillingChange}
      />
    </div>
  );
}

function BillingButton({
  label,
  badge,
  interval,
  activeBilling,
  onBillingChange,
}: {
  label: string;
  badge?: string;
  interval: BillingInterval;
  activeBilling: BillingInterval;
  onBillingChange: (billing: BillingInterval) => void;
}) {
  const isActive = activeBilling === interval;

  return (
    <button
      type="button"
      onClick={() => onBillingChange(interval)}
      aria-pressed={isActive}
      className={`flex-1 rounded-full px-6 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-none ${isActive ? activeSwitchButtonClass : inactiveSwitchButtonClass}`}
    >
      <span className="inline-flex items-center gap-2">
        {label}
        {badge && (
          <span
            className={`rounded-full border px-1.5 py-0.5 text-[10px] ${isActive ? 'border-primary-foreground/35 text-primary-foreground' : 'border-brand/30 text-brand'}`}
          >
            {badge}
          </span>
        )}
      </span>
    </button>
  );
}

function TeamsPricingCard({
  plans,
  selectedPlan,
  billing,
  onPlanChange,
  onSelectPlan,
}: {
  plans: PricingPlan[];
  selectedPlan: PricingPlan;
  billing: BillingInterval;
  onPlanChange: (planId: string) => void;
  onSelectPlan: (planId: string, billing: BillingInterval) => void;
}) {
  const isRecommended = selectedPlan.id === 'pro';

  return (
    <article
      className={`flex min-h-full flex-col rounded-2xl border border-brand/25 bg-background p-6 sm:p-7 ${isRecommended ? 'ring-1 ring-brand ring-inset' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand">{teamsPricingDetails.label}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{selectedPlan.name}</h3>
        </div>
        {isRecommended && (
          <span className="rounded-full border border-brand/30 px-2.5 py-1 text-[10px] font-medium text-brand">
            Recommended
          </span>
        )}
      </div>
      <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">
        {teamsPricingDetails.description}
      </p>

      {plans.length > 1 && (
        <PlanSwitch
          plans={plans}
          selectedPlanId={selectedPlan.id}
          onPlanChange={onPlanChange}
        />
      )}

      <div className={plans.length > 1 ? 'mt-7' : 'mt-16'}>
        <PlanPrice plan={selectedPlan} billing={billing} />
      </div>

      <dl className="my-7 divide-y divide-border border-y border-border">
        <PricingFact
          label="Agents"
          value={`${selectedPlan.agents} ${selectedPlan.agents === 1 ? 'agent' : 'agents'}`}
        />
        <ApiKeyFact startingCredits={selectedPlan.startingCredits} />
      </dl>

      <Button
        type="button"
        onClick={() => onSelectPlan(selectedPlan.id, billing)}
        className="mt-auto w-full rounded-full bg-brand text-brand-foreground hover:bg-brand hover:text-brand-foreground"
      >
        Start for free
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </article>
  );
}

function DeveloperPricingCard({
  billing,
  onSelectPlan,
}: {
  billing: BillingInterval;
  onSelectPlan: (planId: string, billing: BillingInterval) => void;
}) {
  return (
    <article className="flex min-h-full flex-col rounded-2xl border border-brand/25 bg-background p-6 sm:p-7">
      <div>
        <p className="text-sm font-medium text-brand">Developer</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{developerPlan.name}</h3>
      </div>
      <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">
        For developers who want to create, publish, and sell agents through the Agentinc marketplace.
      </p>

      <div className="mt-16">
        <PlanPrice plan={developerPlan} billing={billing} />
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={() => onSelectPlan(developerPlan.id, billing)}
        className="mt-auto w-full rounded-full border-primary/30 bg-transparent text-primary"
      >
        Get developer access
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </article>
  );
}

function EnterprisePricingCard({
  billing,
  onSelectPlan,
}: {
  billing: BillingInterval;
  onSelectPlan: (planId: string, billing: BillingInterval) => void;
}) {
  return (
    <article className="flex min-h-full flex-col rounded-2xl border border-brand/25 bg-background p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand">Enterprise</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">Custom plan</h3>
        </div>
      </div>
      <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">
        Capacity, access, and support tailored to your organization.
      </p>

      <div className="mt-16">
        <p className="text-2xl font-semibold tracking-tight">Contact us for a quotation</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We will shape a plan around your teams and operating needs.
        </p>
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={() => onSelectPlan('enterprise', billing)}
        className="mt-auto w-full rounded-full border-primary/30 bg-transparent text-primary"
      >
        Contact Us
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </article>
  );
}

function PlanSwitch({
  plans,
  selectedPlanId,
  onPlanChange,
}: {
  plans: PricingPlan[];
  selectedPlanId: string;
  onPlanChange: (planId: string) => void;
}) {
  return (
    <div
      className="mt-6 grid grid-cols-3 rounded-full border border-border bg-muted p-1"
      role="group"
      aria-label="Teams plan"
    >
      {plans.map((plan) => {
        const isActive = plan.id === selectedPlanId;

        return (
          <button
            key={plan.id}
            type="button"
            onClick={() => onPlanChange(plan.id)}
            aria-pressed={isActive}
            className={`min-w-0 rounded-full px-2 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 ${isActive ? activeSwitchButtonClass : inactiveSwitchButtonClass}`}
          >
            {getShortPlanName(plan.name)}
          </button>
        );
      })}
    </div>
  );
}

function PlanPrice({ plan, billing }: { plan: PricingPlan; billing: BillingInterval }) {
  if (billing === 'monthly') {
    return (
      <p className="flex items-end gap-2">
        <span className="text-4xl font-semibold tracking-tight text-brand">
          ${formatPrice(plan.monthlyPrice)}
        </span>
        <span className="pb-1 text-sm text-muted-foreground">/ month</span>
      </p>
    );
  }

  const annualTotal = plan.monthlyPrice * 10;
  const monthlyEquivalent = annualTotal / 12;

  return (
    <div>
      <p className="flex flex-wrap items-end gap-x-2 gap-y-1">
        <span className="text-4xl font-semibold tracking-tight text-brand">
          ${formatPrice(monthlyEquivalent)}
        </span>
        <span className="pb-1 text-sm text-muted-foreground">/ month</span>
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
        <span className="line-through">${formatPrice(plan.monthlyPrice)} / month</span>
        <span>${formatPrice(annualTotal)} billed annually</span>
      </div>
    </div>
  );
}

function PricingFact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  );
}

function ApiKeyFact({ startingCredits }: { startingCredits: number }) {
  const requirement = getApiKeyRequirement(startingCredits);
  const tooltipId = useId();

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <dt className="group relative flex items-center gap-1.5 text-sm text-muted-foreground">
        API Keys
        <button
          type="button"
          aria-label="API key requirement"
          aria-describedby={tooltipId}
          className="flex size-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <InfoIcon aria-hidden="true" className="size-3.5" />
        </button>
        <span
          id={tooltipId}
          role="tooltip"
          className="invisible absolute bottom-full left-0 z-50 mb-2 w-64 rounded-lg bg-primary px-3 py-2 text-left text-xs leading-relaxed text-primary-foreground group-focus-within:visible group-hover:visible"
        >
          {requirement}
        </span>
      </dt>
      <dd className="flex items-center text-muted-foreground">
        <XIcon aria-hidden="true" className="size-4" weight="bold" />
        <span className="sr-only">Not included by default</span>
      </dd>
    </div>
  );
}

function getApiKeyRequirement(startingCredits: number) {
  if (startingCredits === 0) {
    return 'If an API key is needed, no minimum Starting Credits are required.';
  }

  return `If an API key is needed, a minimum of $${startingCredits} in Starting Credits needs to be included.`;
}

function getShortPlanName(planName: string) {
  return planName.replace(' Plan', '');
}

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(2);
}

function BetaSection({
  selectedPlan,
  selectedBilling,
}: {
  selectedPlan: string;
  selectedBilling: BillingInterval;
}) {
  return (
    <section id="beta" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/35 bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-brand">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            Private Beta
          </div>
          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Start building your AI team.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tell us where your business needs support. We will help you find, customize, and connect the right agents.
          </p>
          <ul className="mt-9 space-y-4 text-sm text-muted-foreground">
            {[
              'Help choosing the right agents',
              'Agentinc-assisted customization',
              'One workspace for your growing team',
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex size-5 items-center justify-center rounded-full border border-brand/30 text-brand">
                  <CheckIcon aria-hidden="true" className="size-3" weight="bold" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <ContactUs
          key={`${selectedPlan}-${selectedBilling}`}
          defaultPlan={selectedPlan}
          defaultBilling={selectedBilling}
        />
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onNavigate: (target: string) => void }) {
  return (
    <footer className="border-t border-brand/20 bg-footer px-5 py-8 text-footer-foreground sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-footer-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => onNavigate('top')}
          className="flex items-center gap-2 text-footer-foreground"
        >
          <Logo width={19} />
          <span className="font-medium">agentinc</span>
        </button>
        <p>Find, customize, and manage your AI agent team.</p>
        <p>&copy; 2026 agentinc.</p>
      </div>
    </footer>
  );
}
