import React from 'react';

import { stripe } from '@/hooks';

async function CheckoutTest() {
  const products = await stripe.products.list({
    limit: 3,
    expand: ['data.default_price'],
  });

  return (
    <div>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      {/* <pre>{JSON.stringify(prices, null, 2)}</pre> */}
    </div>
  );
}

export default CheckoutTest;
