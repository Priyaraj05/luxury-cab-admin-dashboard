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


export function AddDriverButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className='dark:hover:bg-slate-800 hover:border-transparent'
          variant='outline'
        >
          Add driver
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Driver Details</DialogTitle>
          <DialogDescription>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Add or modify driver details here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='firstname' className='text-right'>
              First Name
            </Label>
            <Input id='firstname' value='John' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='lastname' className='text-right'>
              Last Name
            </Label>
            <Input id='lastname' value='Doe' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
            Username
            </Label>
            <Input id='username' value='@johndoe' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='license' className='text-right'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Driver's license
            </Label>
            <Input id='license' value='W426-545-30-761-0' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='car' className='text-right'>
              Car Assigned
            </Label>
            <Input id='car' value='BMW XM' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}