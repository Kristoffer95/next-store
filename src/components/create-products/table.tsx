import React from 'react';

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

type Props = {
  products: Product[];
};

function CreateProductsTable({ products }: Props) {
  return (
    <Table>
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow className='bg-white/70'>
          <TableHead className='w-[100px]'>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className='font-medium'>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product?.description}</TableCell>
            <TableCell className='text-right'>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CreateProductsTable;
