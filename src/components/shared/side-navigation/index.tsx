// actions
import { getCartAction, removeCartProductAction } from '@/actions/db/carts';

// icons
import { PiShoppingCartSimpleLight } from 'react-icons/pi';

// shadcn
import { Button } from '@/components/ui/button';
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
import RemovecartProduct from '../../cart/remove-cart-product';
import CartItem from './cart-item';

export async function SideNavigation() {
  const cartItems = await getCartAction();

  const totalCartItems = cartItems.length;
  const hasCartItems = cartItems.length > 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='h-full flex items-center relative'>
          <PiShoppingCartSimpleLight className='text-2xl' />
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
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className='w-full'>
          <ul className='space-y-4 my-8'>
            {!hasCartItems ? (
              <li className='whitespace-nowrap'>Your cart is empty</li>
            ) : (
              cartItems.map((item) => (
                <li key={item.id}>
                  <CartItem item={item} />
                </li>
              ))
            )}
          </ul>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
