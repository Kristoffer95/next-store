'use client';

import { Button } from '@/components/ui/button';

function Checkout() {
  return (
    <form action='/api/checkout-sessions' method='POST'>
      <section>
        {/* <button type='submit' role='link'>
          Checkout
        </button> */}
        <Button type='submit'>Checkout</Button>
      </section>
    </form>
  );
}

export default Checkout;
