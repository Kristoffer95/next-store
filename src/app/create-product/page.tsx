import { getProductsAction } from '@/actions/db/products';
import ProductForm from '@/components/create-products/product-form';
import CreateProductsTable from '@/components/create-products/table';
// import { Params } from '@/types/global';

async function CreateProductPage() {
  // const { dialog } = searchParams;

  const products = await getProductsAction();

  return (
    <div className='container'>
      <div className='max-w-[900px] border border-black/40 p-4 mx-auto my-[50px] rounded'>
        <div className='mb-5'>
          <ProductForm />
        </div>

        <CreateProductsTable products={products} />
      </div>
    </div>
  );
}

export default CreateProductPage;
