"use client";

import React, { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button';
import AppointmentForm from './forms/AppointmentForm';
import CancelAppointmentForm from './forms/CancelAppointmentForm';




const CancelAppointmentModal = ({appointmentWithId}:{
    appointmentWithId?:Appointment
}) => {
    const [open,setOpen] = useState(false);
  return (
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
  <Button variant="ghost" className="capitalize text-semantic font-bold cursor-pointer">
          لغو
            </Button>
  </DialogTrigger>
  <DialogContent forceMount  className='bg-dark border-dark  sm:max-w-md'>
    <DialogHeader className='mb-4 space-y-4 text-light items-center'>
      <DialogTitle className='capitalize text-light text-[18px]'>لغو نوبت</DialogTitle>
      <DialogDescription className='text-light text-[16px]'>
        لطفا موارد زیر را برای لغو نوبت پر کنید
              </DialogDescription>
    </DialogHeader>

    <CancelAppointmentForm
    setOpen={setOpen}
    appointmentWithId={appointmentWithId}
/>

  </DialogContent>
</Dialog>


  )
}

export default CancelAppointmentModal;
