import { getProducts } from '@/actions/stripe/products';
import ProductCards from '@/components/products/cards';
import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';

export const revalidate = 60 * 30; // 30min

async function ProductsPage() {
  revalidatePath('/products');

  const products = await getProducts();

  return (
    <div>
      <div className='py-[50px]'>
        <div className='container'>
          <div className='py-10'>
            <h1
              className='text-3xl font-medium uppercase
              text-center text-slate-400'>
              Shop
            </h1>
          </div>

          <div className='cards grid grid-cols-4 gap-x-5 gap-y-10'>
            <Suspense
              fallback={<h1 className='text-2xl'>Loading products...</h1>}>
              <ProductCards products={products} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
