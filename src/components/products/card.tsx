import { Product } from '@/types/stripe/product';
import Link from 'next/link';
import Image from 'next/image';
import CardForm from './card-form';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const currency = () => {
    if (product.default_price.currency === 'php') {
      return '₱';
    }

    return '$';
  };

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
              {currency()}
              {product.default_price.unit_amount / 100}
            </span>
            <span className='text-sm text-slate-900 line-through'>$99</span>
          </p>
        </div>
        <CardForm product={product} />
      </div>
    </div>
  );
}

// function ProductCard({ product }: Props) {
//   return (
//     <div className=''>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <p>{product.default_price.currency}</p>
//       {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
//     </div>
//   );
// }

export default ProductCard;
