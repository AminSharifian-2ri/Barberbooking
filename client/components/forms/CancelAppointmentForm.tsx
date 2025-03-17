"use client";

import React, { useState } from 'react'
import SubmitButton from '../SubmitButton'
import { AppointmentFormValidation, CancelAppointmentValidataion } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { z } from 'zod';
import CustomFormField from '../CustomFormField';
import { FormFieldTypes } from './AppointmentForm';
import { Form } from '../ui/form';
import { cancelAppointment } from '@/lib/appointment.actions';

const CancelAppointmentForm = ({appointmentWithId,setOpen}:{
    appointmentWithId?:Appointment,
    setOpen:(open:boolean)=>void
}) => {

    
    const [isLoading,setIsLoading] = useState(false);
    const [cancellationReason,setCancellationReason] = useState("");
    const router = useRouter();

    // 1. Define  form.
  const form = useForm<z.infer<typeof CancelAppointmentValidataion>>({
    resolver: zodResolver(CancelAppointmentValidataion),
    defaultValues: {
        cancellationReason:""
    },
  })

 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CancelAppointmentValidataion>) {
    console.log("Appointmentwith Id:",appointmentWithId)
    setIsLoading(true);
    try{
      const appointmentData = {
        values,
        ...appointmentWithId
        };

        console.log(values,"values:")
        console.log("finaldata:",appointmentData)

     const appointment = await cancelAppointment(appointmentData);

      if(appointment){
        form.reset();
        setOpen(false)
        window.location.reload();
    }

    }catch(error){
      console.log(error);
        }
  }


  return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className=" h-full">
<div className="flex flex-col h-full w-full justify-between">
<div className="p-8">
  
<CustomFormField
         control={form.control}
         fieldType = {FormFieldTypes.INPUT}
         name="cancellationReason"
         placeholder = "علت لغو نوبت"
      />

  </div>
  <div>
  <SubmitButton
className="w-full font-bold text-[18px] py-6 bg-semantic text-black"
isLoading={isLoading}>
  لغو نوبت
</SubmitButton>
  </div>
</div>
    </form>
  </Form>
      
  )
}

export default CancelAppointmentForm
