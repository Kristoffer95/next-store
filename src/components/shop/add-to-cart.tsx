// icons
import { PiShoppingCartBold } from 'react-icons/pi';
import { Product } from '@/types/stripe/product';

type Props = {
  product: Product;
};

function AddToCart({ product }: Props) {
  return (
    <button
      type='submit'
      className='flex items-center justify-center px-2 py-2 text-sm text-white
      transition hover:bg-gray-700 bg-green-500'>
      <PiShoppingCartBold className='text-xl mr-2' />
      Add to cart
    </button>
  );
}

export default AddToCart;
