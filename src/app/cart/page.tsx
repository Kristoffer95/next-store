import { getCartAction } from '@/actions/db/carts';
import CartCard from '@/components/cart/card';

async function CartPage() {
  const cart = await getCartAction();

  const hasCartItems = cart.length > 0;

  if (!hasCartItems) {
    return (
      <div className='container'>
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='flex flex-col items-start space-y-3'>
        {cart.map((item) => (
          <CartCard key={item.id} cartProduct={item} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
