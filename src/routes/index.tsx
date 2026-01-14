import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/shadcn/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shadcn/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import { Bot, Building2, Zap } from 'lucide-react';
import { ContactUs } from '../components/contact-us';
import Logo from '../components/logo';
export const Route = createFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='border-b border-border'>
        <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Logo width={25} />
            <span className='text-xl font-bold'>agentinc</span>
          </div>
          <div className='flex items-center gap-2'>
            <ThemeToggle />
            <Button onClick={scrollToContact}>Get Started</Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className='flex-1 flex items-center justify-center py-24 px-6'>
        <div className='container mx-auto text-center max-w-3xl'>
          <h1 className='text-5xl font-bold tracking-tight mb-6'>
            Build Your Digital Company with AI Agents
          </h1>
          <p className='text-xl text-muted-foreground mb-8'>
            Create, deploy, and scale your own AI-powered business. Let
            intelligent agents handle operations while you focus on growth.
          </p>
          <div className='flex gap-4 justify-center'>
            <Button size='lg' onClick={scrollToContact}>
              Start Building
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 px-6 bg-muted/50'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Why agentinc?
          </h2>
          <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            <Card>
              <CardHeader>
                <Bot className='h-10 w-10 text-primary mb-2' />
                <CardTitle>AI-Powered Workforce</CardTitle>
                <CardDescription>
                  Deploy specialized AI agents that work 24/7. From customer
                  service to data analysis, your digital team never sleeps.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Complete Infrastructure</CardTitle>
                <CardDescription>
                  Everything you need to run a digital business. Workflows,
                  integrations, and tools all in one platform.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Scale Instantly</CardTitle>
                <CardDescription>
                  Add new agents and capabilities in minutes. Grow your
                  operations without the traditional overhead.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='contact' className='py-24 px-6'>
        <div className='container mx-auto text-center max-w-2xl'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to launch your AI company?
          </h2>
          <p className='text-muted-foreground mb-8'>
            Join thousands of entrepreneurs building the future of business.
          </p>
          <ContactUs />
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border py-8 px-6'>
        <div className='container mx-auto flex items-center justify-between text-sm text-muted-foreground'>
          <div className='flex items-center gap-2'>
            <Logo width={25} color='#62758e' />
            <span>agentinc</span>
          </div>
          <p>&copy; 2025 agentinc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
