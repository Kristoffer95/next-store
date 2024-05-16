import { getCartAction } from '@/actions/db/carts';
import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const cartItems = await getCartAction();

    const line_items = cartItems.map((item) => ({
      price: item.default_price.id,
      quantity: item.cartItem?.quantity || 1,
    }));

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/?success=true',
      cancel_url: 'http://localhost:3000/?canceled=true',
    });

    return NextResponse.redirect(session.url, {
      status: 303,
    });
  } catch (err: any) {
    return new Response(err.message, { status: err.statusCode || 500 });
    // NextResponse.json({
    //   error: err.message,
    // });
  }
}
