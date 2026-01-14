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
  companySize: string;
  message: string;
  heardAboutUs: string;
}

export function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    phoneNumber: '',
    email: '',
    companySize: '',
    message: '',
    heardAboutUs: '',
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
            <Label htmlFor='companySize'>Company Size</Label>
            <Select
              value={formData.companySize}
              onValueChange={(value) =>
                handleSelectChange('companySize', value)
              }
              required
            >
              <SelectTrigger id='companySize'>
                <SelectValue placeholder='Select company size' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1-10'>1-10 employees</SelectItem>
                <SelectItem value='11-50'>11-50 employees</SelectItem>
                <SelectItem value='51-200'>51-200 employees</SelectItem>
                <SelectItem value='201-500'>201-500 employees</SelectItem>
                <SelectItem value='501+'>501+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
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

          <div className='space-y-2'>
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
              <SelectTrigger id='heardAboutUs'>
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
