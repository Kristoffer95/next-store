import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        // {
        //   price: 'price_1PFHVx03TvHgAUFVeOULwOFi',
        //   quantity: 1,
        // },
        {
          price: 'price_1PFCOo03TvHgAUFVVkaUFjVL',
          quantity: 1,
        },
        {
          price: 'price_1PFCPP03TvHgAUFV7FilIwz1',
          quantity: 3,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout?success=true',
      cancel_url: 'http://localhost:3000/checkout?canceled=true',
    });

    console.log(session);

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
