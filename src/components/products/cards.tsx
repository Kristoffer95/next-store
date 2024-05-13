import { getProducts } from '@/actions/stripe/products';
import ProductCard from '@/components/products/card';

async function ProductCards() {
  const products = await getProducts();

  return (
    <>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </>
  );
}

export default ProductCards;
