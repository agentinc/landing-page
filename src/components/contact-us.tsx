import { ArrowRightIcon } from '@phosphor-icons/react/dist/csr/ArrowRight';
import { Button } from '@/shadcn/components/ui/button';
import { Input } from '@/shadcn/components/ui/input';
import { Label } from '@/shadcn/components/ui/label';
import { Textarea } from '@/shadcn/components/ui/textarea';
import { type BillingInterval, pricingPlans } from '../data/pricing';

const selectClassName =
  'h-12 w-full appearance-none rounded-xl border border-input bg-muted px-4 text-sm text-foreground outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50';

export function ContactUs({ defaultPlan, defaultBilling }: { defaultPlan: string; defaultBilling: BillingInterval }) {
  const accessKey = import.meta.env.VITE_PUBLIC_WEB3FORMS_ACCESS_KEY;

  return (
    <div className="rounded-2xl border border-brand/20 bg-card p-5 sm:p-8">
      <div className="mb-7">
        <h3 className="text-2xl font-semibold tracking-tight">Request beta access</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A few details to start. We will follow up with the right technical context.
        </p>
      </div>

      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
        <input type="hidden" name="access_key" value={accessKey} />
        <input type="hidden" name="subject" value="Agentinc private beta request" />
        <input type="hidden" name="from_name" value="Agentinc landing page" />

        <BetaRequestFields defaultPlan={defaultPlan} defaultBilling={defaultBilling} />

        <Button
          type="submit"
          disabled={!accessKey}
          className="h-12 w-full rounded-full text-base"
        >
          Request access
          <ArrowRightIcon aria-hidden="true" />
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          No sales sequence. Just a technical conversation about your agent.
        </p>
      </form>
    </div>
  );
}

function BetaRequestFields({ defaultPlan, defaultBilling }: { defaultPlan: string; defaultBilling: BillingInterval }) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">Work email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          className="h-12 rounded-xl bg-muted px-4"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <RoleSelect />
        <FrameworkSelect />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <PlanSelect defaultPlan={defaultPlan} />
        <BillingSelect defaultBilling={defaultBilling} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="useCase">What do you want to run?</Label>
        <Textarea
          id="useCase"
          name="use_case"
          placeholder="A short description of your agent or deployment use case"
          required
          className="min-h-28 resize-none rounded-xl bg-muted px-4 py-3"
        />
      </div>
    </>
  );
}

function RoleSelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="role">Your role</Label>
      <select id="role" name="role" required defaultValue="" className={selectClassName}>
        <option value="" disabled>Choose a role</option>
        <option value="developer">Developer</option>
        <option value="engineering-leader">Engineering leader</option>
        <option value="founder">Founder</option>
        <option value="platform-team">Platform team</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

function FrameworkSelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="framework">Current framework</Label>
      <select id="framework" name="framework" required defaultValue="" className={selectClassName}>
        <option value="" disabled>Choose one</option>
        <option value="openai">OpenAI</option>
        <option value="anthropic">Anthropic</option>
        <option value="langchain">LangChain or LangGraph</option>
        <option value="crewai">CrewAI</option>
        <option value="custom">Custom Python</option>
        <option value="evaluating">Still evaluating</option>
      </select>
    </div>
  );
}

function PlanSelect({ defaultPlan }: { defaultPlan: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="plan">Plan interest</Label>
      <select id="plan" name="plan" required defaultValue={defaultPlan} className={selectClassName}>
        <option value="" disabled>Choose a plan</option>
        {pricingPlans.map((plan) => (
          <option key={plan.id} value={plan.id}>{plan.name}</option>
        ))}
      </select>
    </div>
  );
}

function BillingSelect({ defaultBilling }: { defaultBilling: BillingInterval }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="billing">Billing preference</Label>
      <select id="billing" name="billing" required defaultValue={defaultBilling} className={selectClassName}>
        <option value="monthly">Monthly</option>
        <option value="annual">Annual, 2 months free</option>
      </select>
    </div>
  );
}
