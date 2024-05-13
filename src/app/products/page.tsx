import ProductCards from '@/components/products/cards';
import { Suspense } from 'react';

async function ProductsPage() {
  return (
    <div>
      <div className='py-[50px]'>
        <div className='container'>
          <div className='cards grid grid-cols-4 gap-x-5 gap-y-10'>
            <Suspense
              fallback={<h1 className='text-2xl'>Loading products...</h1>}>
              <ProductCards />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
