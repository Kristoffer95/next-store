import { createProductAction, getProductsAction } from '@/actions/db/products';
import ProductCard from '@/components/products/product-card';

export default async function ProductsPage() {
  const products = await getProductsAction();

  return (
    <div className='py-[50px]'>
      <div className='container'>
        <div className='cards grid grid-cols-3 gap-x-5 gap-y-10'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}

        <form action={createProductAction}>
          <input name='name' className='text-black' />
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  );
}
