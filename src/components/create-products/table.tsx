import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Product } from '@prisma/client';
import DeleteProduct from './delete-product';
import { removeProductAction } from '@/actions/db/products';
import ProductForm from './product-form';

type Props = {
  products: Product[];
};

async function CreateProductsTable({ products }: Props) {
  return (
    <Table>
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow className='bg-white/70'>
          <TableHead className='w-[100px]'>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
          <TableHead className='text-right'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(products.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className='text-center'>
              No products found.
            </TableCell>
          </TableRow>
        )) ||
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className='font-medium'>{product.id}</TableCell>
              <TableCell className='capitalize'>{product.name}</TableCell>
              <TableCell>{product?.description}</TableCell>
              <TableCell className='text-right'>{product.price}</TableCell>
              <TableCell className='text-right'>
                <ProductForm actionType='edit' product={product} /> |{' '}
                <DeleteProduct
                  deleteProduct={async () => {
                    'use server';
                    await removeProductAction(product.id);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default CreateProductsTable;
