"use client"

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
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import * as React from "react"
import { Minus, Plus } from "lucide-react";
import { Badge } from "./ui/badge";
import BookCarButton from "./book-car-button";

interface PlaceOrderButtonProps {
  selectedRows: string
}


export function PlaceOrderButton({ selectedRows }: PlaceOrderButtonProps) {

  const selectedRowsObj = JSON.parse(selectedRows)

  // console.log(selectedRowsObj)
  
  // state for number of days
  const [numberOfDays, setNumberOfDays] = React.useState(1)
  // const [totalPrice, setTotalPrice] = React.useState(0)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [email, setEmail] = React.useState('') 
  const [address, setAddress] = React.useState('')

  const totalPrice = selectedRowsObj.Price * numberOfDays
  const price_id = selectedRowsObj.price_id
  // console.log("Price_idddddddd:",price_id)

  function handleIncreaseNumberOfDaysChange() {
    setNumberOfDays(numberOfDays + 1)
  }

  function handleDecreaseNumberOfDaysChange() {
    if (numberOfDays > 1) {
      setNumberOfDays(numberOfDays - 1)
    } else {
      setNumberOfDays(1)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className='dark:hover:bg-cyan-900 bg-cyan-600 hover:border-transparent'
          variant='outline'
        >
          Place Order
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px] overflow-y-scroll max-h-screen'>
        <DialogHeader>
          <DialogTitle>Customer Details</DialogTitle>
          <DialogDescription>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Add customer details.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='firstName' className='text-right'>
              First Name
            </Label>
            <Input id='firstName'  className='col-span-3' onChange={(event) => setFirstName(event.target.value)} />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='lastName' className='text-right'>
              Last Name
            </Label>
            <Input id='lastName' className='col-span-3' onChange={(event) => setLastName(event.target.value)} />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='phoneNumber' className='text-right'>
            Phone
            </Label>
            <Input id='phoneNumber' className='col-span-3' onChange={(event) => setPhoneNumber(event.target.value)} />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='email' className='text-right'>
              Email
            </Label>
            <Input id='email' className='col-span-3' onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='addr' className='text-right'>
              Address
            </Label>
            <Textarea id='addr' className='col-span-3' onChange={(event) => setAddress(event.target.value)} />
          </div>
        </div>
        <Separator />
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">City Name</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Color</TableHead>
                <TableHead className="text-right">Price Per Day</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">{selectedRowsObj.City_Info.CityName}</TableCell>
                <TableCell>{selectedRowsObj.Car_Details.Model}</TableCell>
                <TableCell>{selectedRowsObj.Car_Details.Color}</TableCell>
                <TableCell className="text-right">${selectedRowsObj.Price}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-row items-center  py-5">
          <pre className="">Select No. of days to rent:</pre>
          <Button variant="outline" size="icon" onClick={handleDecreaseNumberOfDaysChange} className="ml-2 mr-1">
            <Minus className="h-4 w-4" />
          </Button>
          <Badge variant="outline">{numberOfDays}</Badge>
          <Button variant="outline" size="icon" onClick={handleIncreaseNumberOfDaysChange} className="mx-1">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div>
          Total Price: ${selectedRowsObj.Price * numberOfDays}
        </div>
        <DialogFooter>
          <BookCarButton firstName={firstName} 
          lastName={lastName} phoneNumber={phoneNumber} 
          email={email} address={address} numberOfDays={numberOfDays} 
          totalPrice={totalPrice} price_id={selectedRowsObj.price_id} car_model={selectedRowsObj.Car_Details.Model}
          car_color={selectedRowsObj.Car_Details.Color} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}