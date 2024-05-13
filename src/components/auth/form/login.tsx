'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginButton from './login-button';
import { useFormState } from 'react-dom';
import { loginUserAction } from '@/actions/db/user';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

function AuthLogin() {
  const { toast } = useToast();
  const [state, action] = useFormState(loginUserAction, null);

  const [showError, setShowError] = useState({
    state: state,
    count: 0,
  });

  useEffect(() => {
    if (
      showError.state === 'Invalid credentials.' ||
      state === 'Invalid credentials.'
    ) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Invalid credentials.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }
  }, [showError.state, toast, showError.count, state]);

  function handleLogin(event: FormData) {
    action(event);
    setShowError(() => {
      return {
        state: state,
        count: showError.count + 1,
      };
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          {`Make changes to your account here. Click save when you're done.`}
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <form action={handleLogin}>
          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' defaultValue='test@test.com' />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              name='password'
              defaultValue='pass'
            />
          </div>
          <div className='pt-4'>
            <LoginButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default AuthLogin;
