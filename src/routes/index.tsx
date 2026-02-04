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
      
     <section className='relative overflow-hidden flex-1 flex items-center justify-center py-24 px-6 isolate'>
        <div className="absolute inset-0 pointer-events-none -z-10">
          {/* Purple top-left */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/15 rounded-full blur-3xl" />
          {/* Baby blue bottom-right */}
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-sky-300/20 dark:bg-sky-300/15 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.5]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className='container mx-auto text-center max-w-3xl'>
          <h1 className='text-5xl font-bold tracking-tight mb-6'>
            Build Your Digital Workspace with Autonomous AI Agents
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
                  Deploy specialized AI agents that work 24/7. Your digital team never sleeps.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Multi-tenant Support</CardTitle>
                <CardDescription>
                  Easily onboard teams and use granular permissions to control employee access to specific workflows.
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
     <section id='contact' className='relative overflow-hidden flex-1 flex items-center justify-center py-24 px-6 isolate'>
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none -z-10">
           {/* Purple top-left */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/15 rounded-full blur-3xl" />
          {/* Baby blue bottom-right */}
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-sky-300/20 dark:bg-sky-300/15 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.5]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className='container mx-auto text-center max-w-2xl'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to launch? Your digital copilot awaits you.
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
            <Logo width={25} color='var(--muted-foreground)' />
            <span>agentinc</span>
          </div>
          <p>&copy; 2026 agentinc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
