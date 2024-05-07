import { getCartAction, removeCartProductAction } from '@/actions/db/carts';
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
import RemovecartProduct from '../cart/remove-cart-product';

export async function SideNavigation() {
  const cartItems = await getCartAction();

  const hasCartItems = cartItems.length > 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <ul>
              {!hasCartItems ? (
                <li className='whitespace-nowrap'>Your cart is empty</li>
              ) : (
                cartItems.map((item) => (
                  <li key={item.id} className='flex whitespace-nowrap'>
                    {item.product.name}
                    <RemovecartProduct
                      removeFromCart={async () => {
                        'use server';
                        await removeCartProductAction(item.id);
                      }}
                    />
                  </li>
                ))
              )}
            </ul>
          </div>
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
