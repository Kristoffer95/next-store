import { getProductsAction } from '@/actions/db/products';
import CreateProductsTable from '@/components/create-products/table';

async function TableDemo() {
  const products = await getProductsAction();

  return (
    <div className='container'>
      <div className='max-w-[900px] border border-black/40 p-4 mx-auto my-[50px] rounded'>
        <CreateProductsTable products={products} />
      </div>
    </div>
  );
}

export default TableDemo;
