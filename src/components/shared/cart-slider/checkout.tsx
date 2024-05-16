'use client';

import { Button } from '@/components/ui/button';

function Checkout() {
  return (
    <form action='/api/checkout-sessions' method='POST' className='w-full'>
      <Button type='submit' className='w-full py-6'>
        Checkout
      </Button>
    </form>
  );
}

export default Checkout;
