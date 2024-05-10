'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <Button type='submit'>{pending ? 'Registering...' : 'Register'}</Button>
  );
}

export default RegisterButton;
