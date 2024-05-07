import { Product } from '@prisma/client';
import Image from 'next/image';

// components
import AddToCart from './add-to-cart';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className='group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-lg rounded-sm'>
      <div className='relative flex h-60 overflow-hidden'>
        <Image
          alt='sample product image'
          src={
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80'
          }
          width={320}
          height={300}
          objectFit='cover'
        />

        {/* <div className='absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0'>
          <button className='flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700'></button>
        </div> */}
      </div>
      <div className='mt-4 px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl tracking-tight text-slate-900'>
            {product.name}
          </h5>
        </a>
        <div className='mt-2 mb-5 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-slate-900'>$79</span>
            <span className='text-sm text-slate-900 line-through'>$99</span>
          </p>
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
