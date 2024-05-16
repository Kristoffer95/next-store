import { Product } from '@/types/stripe/product';

type Props = {
  cartItems: Product[];
};

function CartDetails({ cartItems }: Props) {
  const subtotal = cartItems.reduce((acc, item) => {
    const quantity = item.cartItem?.quantity || 1;
    return acc + (item.default_price.unit_amount / 100) * quantity;
  }, 0);

  return (
    <div className='py-5'>
      <ul className='w-full flex flex-col gap-2'>
        <li className='flex justify-between w-full'>
          <div>Subtotal</div>

          <div>${subtotal}</div>
        </li>
      </ul>
    </div>
  );
}

export default CartDetails;
