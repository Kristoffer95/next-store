'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

// prisma
import { Product } from '@prisma/client';

// actions
import {
  createProductAction,
  updateProductAction,
} from '@/actions/db/products';

// shadcn components
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// icons
import { PiNotePencilLight } from 'react-icons/pi';

function Submit() {
  const status = useFormStatus();

  return (
    <Button type='submit' disabled={status.pending}>
      {status.pending ? 'Saving...' : 'Save changes'}
    </Button>
  );
}

function Update() {
  return <Button type='submit'>Update</Button>;
}

type Props = {
  actionType?: 'create' | 'edit';
  product?: Product;
};

function ProductForm({ actionType = 'create', product }: Props) {
  const [showDialog, setShowDialog] = useState(false);

  const [createState, createAction] = useFormState(createProductAction, null);
  const [updateState, updateAction] = useFormState(updateProductAction, null);

  useEffect(() => {
    if (createState !== null || updateState !== null) {
      setShowDialog(false);
    }
  }, [createState, updateState]);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        {actionType === 'create' ? (
          <Button> Add product </Button>
        ) : (
          <button className='text-blue-500'>
            <PiNotePencilLight />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            {actionType === 'create' ? 'Add product' : 'Edit product'}
          </DialogTitle>
          <DialogDescription>
            {`You are about to add a product. Click 'save changes' when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <form
          action={actionType === 'create' ? createAction : updateAction}
          className='grid gap-4 py-4'>
          {/* Hidden ID input */}
          <div className='hidden'>
            <Label htmlFor='id' className='text-left'>
              Name
            </Label>
            <Input
              id='id'
              name='id'
              className='col-span-3'
              required
              type='number'
              defaultValue={product?.id}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-left'>
              Name
            </Label>
            <Input
              id='name'
              name='name'
              className='col-span-3'
              required
              defaultValue={product?.name}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-left'>
              Description
            </Label>
            <Input
              id='description'
              name='description'
              className='col-span-3'
              defaultValue={product?.description ?? undefined}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='price' className='text-left'>
              Price
            </Label>
            <Input
              id='price'
              name='price'
              className='col-span-3'
              type='number'
              required
              defaultValue={product?.price}
            />
          </div>
          <DialogFooter>
            {actionType === 'edit' ? <Update /> : <Submit />}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ProductForm;
