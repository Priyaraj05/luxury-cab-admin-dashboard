import supabase from "@/supabaseClient";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface BookCarButtonProps {
  numberOfDays: number
  totalPrice: number
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  address: string
  price_id: number
  car_model: string
  car_color: string
}

function BookCarButton({
    numberOfDays, 
    totalPrice, 
    firstName,
    lastName,
    phoneNumber,
    email,
    address, 
    price_id,
    car_model,
    car_color}: BookCarButtonProps) {

        const { toast } = useToast()

  async function handleSubmit() {
    // console.log(numberOfDays, totalPrice, firstName, lastName, phoneNumber, email, address, "Price_id",price_id)
    // console.log("Submitted")

    
    let { data: newCustomerID, error } = await supabase
            .rpc('insert_customer_return_id', {
                c_address: address,
                c_email : email,
                c_firstname : firstName,
                c_lastname : lastName,
                c_phone : phoneNumber
    })
    if (error) console.error(error)
    else console.log(newCustomerID)

    
    const { error: insertError } = await supabase
    .from('Order_Details_')
    .insert({ Customer_id: newCustomerID, Price_id: price_id, NumberOfDays: numberOfDays})

    console.log("Inserted error:", insertError)

    toast({
        title: "Car booked successfully!",
        description: "A "+car_color+" "+car_model+" has been booked for you.",
      })

  }

  return (
      <Button type='submit' onClick={handleSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md px-4 py-2">
        Book Car
      </Button>

  );
}

export default BookCarButton;