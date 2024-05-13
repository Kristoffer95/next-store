'use client';

import { Button } from '@/components/ui/button';

function Checkout() {
  return (
    <form action='/api/checkout-sessions' method='POST'>
      <section>
        <Button type='submit'>Checkout</Button>
      </section>
    </form>
  );
}

export default Checkout;
