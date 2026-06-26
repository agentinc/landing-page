import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/shadcn/components/ui/button';
import { Bot, Building2, Zap, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { ContactUs } from '../components/contact-us';
import Logo from '../components/logo';
import { DotGrid } from '../components/dot-grid';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-4 mt-4 rounded-lg border border-white/[0.06] bg-[#050a08]/70 backdrop-blur-xl">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Logo width={24} />
              <span className="text-lg font-semibold tracking-tight text-white">
                agentinc
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={scrollToFeatures}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={scrollToContact}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
            <Button
              onClick={scrollToContact}
              className="bg-emerald hover:bg-emerald-dark text-black font-medium px-5 h-9 text-sm rounded-md transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center justify-center px-6 min-h-svh landscape:min-h-svh">
        <div className="absolute inset-0 pointer-events-auto">
          <DotGrid />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald/[0.06] rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-white/10 bg-white/[0.03] mb-8">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-medium text-white/60 tracking-wide uppercase">
              Now in Early Access
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Build Your Digital
            <br />
            Workspace with{' '}
            <span className="text-emerald">AI Agents</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create, deploy, and scale your own AI-powered business.
            Let intelligent agents handle operations while you focus on growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-emerald hover:bg-emerald-dark text-black font-semibold px-8 h-12 text-base rounded-md transition-colors duration-200"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToFeatures}
              className="border-white/10 bg-transparent text-white/70 hover:bg-white/[0.04] hover:text-white hover:border-white/20 font-medium px-8 h-12 text-base rounded-md transition-all duration-200"
            >
              Learn More
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-xs text-white/30 mt-1">Always On</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald flex items-center justify-center">
                92%
                <ArrowUpRight className="h-5 w-5 ml-0.5" />
              </div>
              <div className="text-xs text-white/30 mt-1">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">&lt;1m</div>
              <div className="text-xs text-white/30 mt-1">Deploy Time</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-200"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-emerald tracking-wide uppercase">
              Why agentinc
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight text-white">
              Everything you need to build
              <br />
              <span className="text-white/40">your AI-powered business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Bot className="h-6 w-6" />}
              title="AI-Powered Workforce"
              description="Deploy specialized AI agents that work 24/7. Your digital team never sleeps, never takes breaks."
            />
            <FeatureCard
              icon={<Building2 className="h-6 w-6" />}
              title="Multi-tenant Support"
              description="Easily onboard teams with granular permissions. Control employee access to specific workflows."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Scale Instantly"
              description="Add new agents and capabilities in minutes. Grow operations without traditional overhead."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA / Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium text-emerald tracking-wide uppercase">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 tracking-tight text-white">
            Ready to launch?
          </h2>
          <p className="text-white/40 mb-10">
            Join entrepreneurs building the future of business with AI.
          </p>
          <ContactUs />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-white/30">
          <div className="flex items-center gap-2">
            <Logo width={20} />
            <span className="font-medium text-white/50">agentinc</span>
          </div>
          <p>&copy; 2026 agentinc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg p-8 transition-all duration-300 group cursor-pointer border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10">
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-white/[0.05] text-white/70 mb-5 group-hover:text-emerald transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed">{description}</p>
    </div>
  );
}

// --- Pricing Data ---

type Tier = 'regular' | 'developer' | 'enterprise';

interface Plan {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingData: Record<Tier, Plan[]> = {
  regular: [
    {
      name: 'Starter',
      price: { monthly: 0, yearly: 0 },
      description: 'For individuals exploring AI agents',
      features: [
        '1 AI agent',
        '100 tasks / month',
        'Community support',
        'Basic analytics',
      ],
    },
    {
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      description: 'For professionals scaling their workflows',
      features: [
        '5 AI agents',
        '2,000 tasks / month',
        'Email support',
        'Advanced analytics',
        'Custom workflows',
      ],
      highlighted: true,
    },
    {
      name: 'Business',
      price: { monthly: 79, yearly: 790 },
      description: 'For teams that need more power',
      features: [
        '20 AI agents',
        '10,000 tasks / month',
        'Priority support',
        'Team collaboration',
        'API access',
        'Audit logs',
      ],
    },
  ],
  developer: [
    {
      name: 'Indie',
      price: { monthly: 19, yearly: 190 },
      description: 'For solo developers building agents',
      features: [
        '3 custom agents',
        '1,000 API calls / month',
        'SDK access',
        'Dev sandbox',
        'Community forum',
      ],
    },
    {
      name: 'Team',
      price: { monthly: 49, yearly: 490 },
      description: 'For dev teams shipping AI products',
      features: [
        '15 custom agents',
        '10,000 API calls / month',
        'SDK + CLI access',
        'Staging environments',
        'Webhook integrations',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Scale',
      price: { monthly: 149, yearly: 1490 },
      description: 'For high-volume agent deployments',
      features: [
        'Unlimited agents',
        '100,000 API calls / month',
        'Multi-region deploy',
        'Custom model routing',
        'Dedicated support',
        'SLA guarantee',
      ],
    },
  ],
  enterprise: [
    {
      name: 'Essentials',
      price: { monthly: 199, yearly: 1990 },
      description: 'Enterprise-grade foundation',
      features: [
        '50 AI agents',
        '50,000 tasks / month',
        'SSO / SAML',
        'Role-based access',
        'Dedicated account manager',
        'Uptime SLA',
      ],
    },
    {
      name: 'Advanced',
      price: { monthly: 499, yearly: 4990 },
      description: 'Full platform with compliance',
      features: [
        'Unlimited agents',
        'Unlimited tasks',
        'SOC 2 compliance',
        'Data residency options',
        'Custom integrations',
        'On-call support',
        'Private model hosting',
      ],
      highlighted: true,
    },
    {
      name: 'Custom',
      price: { monthly: -1, yearly: -1 },
      description: 'Tailored for your organization',
      features: [
        'Everything in Advanced',
        'On-premise deployment',
        'Custom SLAs',
        'Dedicated infrastructure',
        'White-label options',
        'Executive reviews',
        'Training & onboarding',
      ],
    },
  ],
};

const tierLabels: Record<Tier, string> = {
  regular: 'Regular',
  developer: 'Developer',
  enterprise: 'Enterprise',
};

function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [tier, setTier] = useState<Tier>('regular');

  const plans = pricingData[tier];

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-emerald tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-white/40 mt-3 max-w-md mx-auto">
            Choose the plan that fits your needs. Scale up anytime.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                billing === 'monthly'
                  ? 'bg-white/10 text-white'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                billing === 'yearly'
                  ? 'bg-white/10 text-white'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-emerald">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Tier segmented control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] p-1">
            {(Object.keys(tierLabels) as Tier[]).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  tier === t
                    ? 'bg-emerald text-black'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {tierLabels[t]}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              billing={billing}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  billing,
}: {
  plan: Plan;
  billing: 'monthly' | 'yearly';
}) {
  const isCustom = plan.price.monthly === -1;
  const price = isCustom ? null : plan.price[billing];

  return (
    <div
      className={`rounded-lg p-8 flex flex-col border transition-all duration-300 ${
        plan.highlighted
          ? 'border-emerald/30 bg-emerald/[0.04]'
          : 'border-white/[0.06] bg-white/[0.02]'
      }`}
    >
      {plan.highlighted && (
        <span className="text-xs font-medium text-emerald uppercase tracking-wide mb-4">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
      <p className="text-sm text-white/40 mt-1">{plan.description}</p>

      <div className="mt-6 mb-6">
        {isCustom ? (
          <span className="text-3xl font-bold text-white">Custom</span>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              ${price}
            </span>
            <span className="text-sm text-white/30">
              / {billing === 'monthly' ? 'mo' : 'yr'}
            </span>
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-white/50">
            <Check className="h-4 w-4 text-emerald shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        className={`w-full rounded-md h-10 text-sm font-medium transition-colors duration-200 ${
          plan.highlighted
            ? 'bg-emerald hover:bg-emerald-dark text-black'
            : 'bg-white/[0.06] hover:bg-white/10 text-white border border-white/[0.08]'
        }`}
      >
        {isCustom ? 'Contact Sales' : price === 0 ? 'Get Started Free' : 'Get Started'}
      </Button>
    </div>
  );
}
