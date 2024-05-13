// actions
import { getCartAction } from '@/actions/db/carts';

// icons
import { PiShoppingCartSimpleLight } from 'react-icons/pi';

// shadcn
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import type { Product } from '@/types/stripe/product';

import CartItem from './cart-item';
import Checkout from './checkout';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function CartSlider() {
  const session = await auth();

  /**
   * TODO: Can be optimized, currernly fetching all cart items
   * and filtering them in the component. The better approach
   * would be getting CartItems based on cartId and pass it to <CartItem />
   * component. then in the component, fetch the stripe product based on
   * the productId.
   */
  const cartItems = await getCartAction();

  const totalCartItems = cartItems.length;
  const hasCartItems = totalCartItems > 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='h-full flex items-center relative'>
          <button>
            <PiShoppingCartSimpleLight className='text-2xl' />
          </button>
          <div
            className='absolute bottom-0 -right-2 bg-green-500 
            text-white text-[10px] size-5 flex justify-center 
            items-center rounded-full'>
            {totalCartItems}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className='w-full'>
          <ul className='space-y-4 my-8'>
            {!hasCartItems ? (
              <li className='whitespace-nowrap'>Your cart is empty</li>
            ) : (
              cartItems.map((item: Product) => (
                <li key={item.id}>
                  <CartItem product={item} />
                </li>
              ))
            )}
          </ul>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {session ? (
              <Checkout />
            ) : (
              <Link href='/auth'>
                <Button>Login to checkout</Button>
              </Link>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}