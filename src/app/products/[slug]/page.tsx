import { getProductAction, getProductsAction } from '@/actions/db/products';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

export async function generateStaticParams() {
  const products = await getProductsAction();

  return products.map((product) => ({
    slug: product.id.toString(),
  }));
}

async function ProductsPage({ params }: Props) {
  const { slug: id } = params;

  const product = await getProductAction(id);

  return (
    <div className='container py-10'>
      <h1>ProductsPage</h1>

      {params.slug}

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}

export default ProductsPage;
