'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { PiTrashLight } from 'react-icons/pi';

type Props = {
  deleteProduct: () => void;
};

function DeleteProduct({ deleteProduct }: Props) {
  function executeDelete() {
    deleteProduct();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='text-red-500'>
          <PiTrashLight />
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Delete product</DialogTitle>
          <DialogDescription>
            {`You are about to delete a product. Click 'confirm' if you want to continue.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button
              type='button'
              className='bg-red-500 hover:bg-red-300'
              onClick={executeDelete}>
              Confirm
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteProduct;
