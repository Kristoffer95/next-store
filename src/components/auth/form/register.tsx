'use client';

import { createUserAction } from '@/actions/db/user';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from 'react-dom';
import RegisterButton from './register-button';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

function AuthRegister() {
  const { toast } = useToast();

  const [state, action] = useFormState(createUserAction, null);

  useEffect(() => {
    console.log(state);

    if (state !== null) {
      toast({
        // title: 'Scheduled: Catch up ',
        description: 'Successfully created your account',
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          {`Change your password here. After saving, you'll be logged out.`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className='space-y-2'>
          <div className='space-y-1'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' type='text' name='name' />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' name='email' />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='password'>New password</Label>
            <Input id='password' type='password' name='password' />
          </div>

          <RegisterButton />
        </form>
      </CardContent>
    </Card>
  );
}

export default AuthRegister;
