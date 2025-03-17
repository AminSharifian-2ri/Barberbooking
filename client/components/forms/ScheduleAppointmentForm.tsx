"use client";

import React, { useState } from 'react'
import { Form } from '../ui/form';
import CustomFormField from '../CustomFormField';
import { FormFieldTypes } from './AppointmentForm';
import SubmitButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { ScheduleAppointmentValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheduleAppointment } from '@/lib/appointment.actions';

const ScheduleAppointmentForm = ({appointmentWithId,setOpen}:{
    appointmentWithId?:Appointment,
    setOpen:(open:boolean)=>void
}) => {
    const [isLoading,setIsLoading] = useState(false);

    // 1. Define  form.
  const form = useForm<z.infer<typeof ScheduleAppointmentValidation>>({
    resolver: zodResolver(ScheduleAppointmentValidation),
    defaultValues: {
        time: appointmentWithId ? new Date(appointmentWithId?.time) : new Date(),
    },
  })

 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof ScheduleAppointmentValidation>) {
    console.log("Appointmentwith Id:",appointmentWithId)
    setIsLoading(true);
    try{
      const appointmentData = {
        values,
        ...appointmentWithId
        };

        console.log(values,"values:")
        console.log("finaldata:",appointmentData)

     const appointment = await scheduleAppointment(appointmentData);

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
<div className="p-8 text-light text-[24px]">

  
<CustomFormField
         control={form.control}
         fieldType = {FormFieldTypes.TIME_PICKER}
         name="time"
         placeholder = "زمان اصلاحی"
      />

  </div>
  <div>
  <SubmitButton
className="w-full font-bold text-[18px] py-6 bg-success text-black"
isLoading={isLoading}>
  تایید نوبت
</SubmitButton>
  </div>
</div>
    </form>
  </Form>
      
  )
}

export default ScheduleAppointmentForm
