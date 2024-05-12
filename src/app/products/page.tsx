import { getProducts } from '@/actions/stripe/products';
import ProductCard from '@/components/products/card';

async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <div className='py-[50px]'>
        <div className='container'>
          <div className='cards grid grid-cols-4 gap-x-5 gap-y-10'>
            {products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
