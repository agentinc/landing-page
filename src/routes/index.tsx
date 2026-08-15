import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Footer } from '@/components/footer/Footer';
import { AgentTeamSection } from '@/components/landing/AgentTeamSection';
import { BetaSection } from '@/components/landing/BetaSection';
import { BusinessFunctionsSection } from '@/components/landing/BusinessFunctionsSection';
import { ControlSection } from '@/components/landing/ControlSection';
import { CustomizationSection } from '@/components/landing/CustomizationSection';
import { Hero } from '@/components/landing/Hero';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { MarketplaceSection } from '@/components/landing/MarketplaceSection';
import { Navbar } from '@/components/navbar/Navbar';
import { PricingSection } from '@/components/pricing/PricingSection';
import type { BillingInterval } from '@/data/pricing';
import { Separator } from '../shadcn/components/ui/separator';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedBilling, setSelectedBilling] =
    useState<BillingInterval>('annual');

  const scrollTo = (target: string) => {
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setMobileMenuOpen(false);
  };

  const selectPlan = (planId: string, billing: BillingInterval) => {
    setSelectedPlan(planId);
    setSelectedBilling(billing);
    scrollTo('beta');
  };

  return (
    <div className='min-h-screen overflow-x-clip bg-background text-foreground'>
      <Navbar
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
        <HowItWorksSection />
        <AgentTeamSection />
        <MarketplaceSection />
        <CustomizationSection />
        <ControlSection />
        <PricingSection onSelectPlan={selectPlan} />
        <Separator className='max-w-5xl mx-auto' />
        <BetaSection
          selectedPlan={selectedPlan}
          selectedBilling={selectedBilling}
        />
      </main>
      <Footer onNavigate={scrollTo} />
    </div>
  );
}
