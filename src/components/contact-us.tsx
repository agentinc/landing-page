import { useState } from 'react';
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
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            <Label htmlFor='fullName'>Full Name</Label>
            <Input
              id='fullName'
              name='fullName'
              placeholder='John Doe'
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='company'>Company</Label>
            <Input
              id='company'
              name='company'
              placeholder='Acme Inc.'
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='phoneNumber'>Phone Number</Label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              type='tel'
              placeholder='+1 (555) 123-4567'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='john@example.com'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='who'>Who are you</Label>
            <Select
              value={formData.who}
              onValueChange={(value) =>
                handleSelectChange('who', value)
              }
              required
            >
              <SelectTrigger id='who' className='w-full'>
                <SelectValue placeholder='Who are you' />
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
            <Label>What workflows are you planning to use agentinc for?</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='w-full justify-between font-normal'>
                  {Object.values(workflows).some(Boolean)
                    ? Object.entries(workflows)
                        .filter(([, v]) => v)
                        .map(([k]) => k)
                        .join(', ')
                    : 'Select workflows'}
                  <ChevronDown className='h-4 w-4 opacity-50' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-[var(--radix-dropdown-menu-trigger-width)]'>
                <DropdownMenuLabel>Workflows</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.keys(workflows).map((workflow) => (
                  <DropdownMenuCheckboxItem
                    key={workflow}
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

          <div className='space-y-4'>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              id='message'
              name='message'
              placeholder='Tell us more about your company, what job roles would you like to hire...'
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='space-y-2 w-full'>
            <Label htmlFor='heardAboutUs'>
              How did you hear about us?{' '}
              <span className='text-muted-foreground'>(optional)</span>
            </Label>
            <Select
              value={formData.heardAboutUs}
              onValueChange={(value) =>
                handleSelectChange('heardAboutUs', value)
              }
            >
              <SelectTrigger id='heardAboutUs' className='w-full'>
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

          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
