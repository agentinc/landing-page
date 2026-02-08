import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/shadcn/components/ui/button';
import { Input } from '@/shadcn/components/ui/input';
import { Label } from '@/shadcn/components/ui/label';
import { Textarea } from '@/shadcn/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shadcn/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shadcn/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shadcn/components/ui/card';

interface ContactFormData {
  fullName: string;
  company: string;
  phoneNumber: string;
  email: string;
  message: string;
  heardAboutUs: string;
  who: string;
}

export function ContactUs() {
  const [workflows, setWorkflows] = useState<Record<string, boolean>>({
    'Customer Support': false,
    'HR and Personnel': false,
    'Marketing': false,
    'Engineering Solutions': false,
    'Software Development': false,
    'Personal Workflows': false,
  });

  const handleWorkflowChange = (workflow: string, checked: boolean) => {
    setWorkflows((prev) => ({ ...prev, [workflow]: checked }));
  };

  // Controlled state for dropdowns
  const [workflowsOpen, setWorkflowsOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [heardAboutUsOpen, setHeardAboutUsOpen] = useState(false);

  // Close all dropdowns on scroll (but not if event is inside a dropdown)
  const closeAllDropdowns = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    // Don't close if the event originated from inside a dropdown/select content
    if (target?.closest('[data-radix-popper-content-wrapper]') ||
        target?.closest('[data-radix-select-content]') ||
        target?.closest('[data-radix-dropdown-menu-content]')) {
      return;
    }
    setWorkflowsOpen(false);
    setWhoOpen(false);
    setHeardAboutUsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', closeAllDropdowns, true);
    window.addEventListener('wheel', closeAllDropdowns, true);
    window.addEventListener('touchmove', closeAllDropdowns, true);
    return () => {
      window.removeEventListener('scroll', closeAllDropdowns, true);
      window.removeEventListener('wheel', closeAllDropdowns, true);
      window.removeEventListener('touchmove', closeAllDropdowns, true);
    };
  }, [closeAllDropdowns]);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    phoneNumber: '',
    email: '',
    message: '',
    heardAboutUs: '',
    who: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className='w-full max-w-lg mx-auto'>
      <CardHeader>
        <CardTitle className='text-2xl'>Contact Us</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent className='text-left'>
        <form
          action={'https://api.web3forms.com/submit'}
          method='POST'
          className='space-y-4'
        >
          <input
            type='hidden'
            name='access_key'
            value={import.meta.env.VITE_PUBLIC_WEB3FORMS_ACCESS_KEY}
          />
          <div className='space-y-2'>
            <Label htmlFor='fullName' className="text-base font-normal">Full Name</Label>
            <Input
              id='fullName'
              name='fullName'
              placeholder='John Doe'
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="h-12 bg-muted/50 rounded-2xl"
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='company' className="text-base font-normal">Company</Label>
            <Input
              id='company'
              name='company'
              placeholder='Acme Inc.'
              value={formData.company}
              onChange={handleInputChange}
              required
              className="h-12 bg-muted/50 rounded-2xl"
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='phoneNumber' className="text-base font-normal">Phone Number</Label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              type='tel'
              placeholder='+1 (555) 123-4567'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="h-12 bg-muted/50 rounded-2xl"
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email' className="text-base font-normal">Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='john@example.com'
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-12 bg-muted/50 rounded-2xl"/>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='who' className="text-base font-normal">Who are you</Label>
            <Select
              value={formData.who}
              onValueChange={(value) =>
                handleSelectChange('who', value)
              }
              required
              open={whoOpen}
              onOpenChange={setWhoOpen}
            >
              <SelectTrigger id='who' className='w-full !h-12 bg-muted/50 rounded-2xl'>
                <SelectValue placeholder='I am a..' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='founder'>Founder</SelectItem>
                <SelectItem value='entrepreneur'>Entrepreneur</SelectItem>
                <SelectItem value='software engineer'>Software Engineer</SelectItem>
                <SelectItem value='product manager'>Product Manager</SelectItem>
                <SelectItem value='marketing'>Marketing</SelectItem>
                <SelectItem value='business developer'>Business Developer</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='workflows' className="text-base font-normal">I will use Agentinc for</Label>
            <DropdownMenu modal={false} open={workflowsOpen} onOpenChange={setWorkflowsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className={`w-full h-12 justify-between font-normal text-left bg-muted/50 rounded-2xl hover:bg-muted ${!Object.values(workflows).some(Boolean) ? 'text-muted-foreground' : ''}`}>
                  <span className='truncate'>
                    {Object.values(workflows).some(Boolean)
                      ? Object.entries(workflows)
                          .filter(([, v]) => v)
                          .map(([k]) => k)
                          .join(', ')
                      : 'Select workflows'}
                  </span>
                  <ChevronDown className='h-4 w-4 opacity-50 shrink-0' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-[var(--radix-dropdown-menu-trigger-width)]'>
                <DropdownMenuLabel>Workflows</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.keys(workflows).map((workflow) => (
                  <DropdownMenuCheckboxItem
                    key={workflow}
                    onSelect={(e) => e.preventDefault()}
                    checked={workflows[workflow]}
                    onCheckedChange={(checked) => handleWorkflowChange(workflow, checked)}
                  >
                    {workflow}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {Object.entries(workflows)
              .filter(([, v]) => v)
              .map(([k]) => (
                <input key={k} type='hidden' name='workflows' value={k} />
              ))}
          </div>

          <div className='space-y-2'>
            <Label htmlFor='message' className="text-base font-normal">Message</Label>
            <Textarea
              id='message'
              name='message'
              placeholder='Tell us more about your company, what job roles would you like to hire?'
              value={formData.message}
              onChange={handleInputChange}
              required
              className="min-h-[120px] bg-muted/50 rounded-2xl resize-none"
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='heardAboutUs' className="text-base font-normal">
              How did you hear about us?{' '}
              <span className='text-muted-foreground text-sm'>(optional)</span>
            </Label>
            <Select
              value={formData.heardAboutUs}
              onValueChange={(value) =>
                handleSelectChange('heardAboutUs', value)
              }
              open={heardAboutUsOpen}
              onOpenChange={setHeardAboutUsOpen}
            >
              <SelectTrigger id='heardAboutUs' className='w-full !h-12 bg-muted/50 rounded-2xl'>
                <SelectValue placeholder='Select an option' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='search'>Search Engine</SelectItem>
                <SelectItem value='social'>Social Media</SelectItem>
                <SelectItem value='referral'>Friend or Colleague</SelectItem>
                <SelectItem value='blog'>Blog or Article</SelectItem>
                <SelectItem value='event'>Event or Conference</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type='submit' className='w-full h-12 rounded-2xl text-base font-medium'>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
