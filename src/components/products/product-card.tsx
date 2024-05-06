import { Product } from '@prisma/client';
import Image from 'next/image';
import AddToCart from './add-to-cart';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className='border rounded-lg inline-block'>
      <div className='flex flex-col gap-5 relative'>
        <Image
          alt='sample product image'
          src={
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          width={430}
          height={300}
        />

        <h4 className='font-light text-lg'>{product?.name}</h4>

        <p>productId: {product.id}</p>

        <AddToCart product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
