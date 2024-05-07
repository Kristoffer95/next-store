import { getProductsAction } from '@/actions/db/products';
import ProductCard from '@/components/products/product-card';

export default async function ProductsPage() {
  const products = await getProductsAction();

  return (
    <div className='py-[50px]'>
      <div className='container'>
        <div className='cards grid grid-cols-4 gap-x-5 gap-y-10'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
