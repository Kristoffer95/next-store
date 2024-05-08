'use client';

import { createProductAction } from '@/actions/db/products';
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
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function Submit() {
  const status = useFormStatus();

  return (
    <Button type='submit' disabled={status.pending}>
      {status.pending ? 'Saving...' : 'Save changes'}
    </Button>
  );
}

function AddProduct() {
  const [showDialog, setShowDialog] = useState(false);

  const [state, formAction] = useFormState(createProductAction, null);

  useEffect(() => {
    if (state !== null) {
      setShowDialog(false);
    }
  }, [state]);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>

        <form action={formAction} className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-left'>
              Name
            </Label>
            <Input id='name' name='name' className='col-span-3' required />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-left'>
              Description
            </Label>
            <Input id='description' name='description' className='col-span-3' />
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
            />
          </div>
          <DialogFooter>
            <Submit />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddProduct;
