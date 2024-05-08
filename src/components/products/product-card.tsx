import { Product } from '@prisma/client';
import Image from 'next/image';

// components
import AddToCart from './add-to-cart';
import Link from 'next/link';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className='group flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-lg rounded-sm'>
      <Link
        className='relative flex h-60 overflow-hidden'
        href={`/products/${product.id}`}>
        <Image
          alt='sample product image'
          src={
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80'
          }
          width={320}
          height={300}
        />

        {/* <div className='absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0'>
          <button className='flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700'></button>
        </div> */}
      </Link>
      <div className='mt-4 px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl tracking-tight text-slate-900 capitalize'>
            {product.name}
          </h5>
        </a>
        <div className='mt-2 mb-5 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-slate-900'>
              ${product.price}
            </span>
            <span className='text-sm text-slate-900 line-through'>$99</span>
          </p>
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
