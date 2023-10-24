import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export function AddCarButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className='dark:hover:bg-slate-800 hover:border-transparent'
          variant='outline'
        >
          Add Car
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Car Details</DialogTitle>
          <DialogDescription>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Add or modify car details here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='make' className='text-right'>
              Make
            </Label>
            <Input id='make' value='BMW' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='model' className='text-right'>
              Model
            </Label>
            <Input id='model' value='XM' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='year' className='text-right'>
            Year
            </Label>
            <Input id='year' value='2023' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='vin' className='text-right'>
              VIN
            </Label>
            <Input id='vin' value='1HGBH41JXMN109186' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}