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




const AppointmentModal = ({type,appointmentWithId}:{
    type:"schedule" | "cancel",
    appointmentWithId?:Appointment
}) => {
    const [open,setOpen] = useState(false);
     
  return (
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="ghost" className={`capitalize ${type === "schedule" && "text-green" }`}> 
        {type === "schedule"?"تایید":"لغو"}
    </Button>
  </DialogTrigger>
  <DialogContent  className='bg-dark border-dark  sm:max-w-md'>
    <DialogHeader className='mb-4 space-y-4'>
      <DialogTitle className='capitalize'>  {type === "schedule"?"تایید":"لغو"} نوبت</DialogTitle>
      <DialogDescription>
     .نوبت {type === "schedule"?"تایید":"لغو"}لطفا موارد را پر کن برای 
      </DialogDescription>
    </DialogHeader>

    <AppointmentForm
    appointment={appointmentWithId}
    setOpen={setOpen}
    type={type}
    />
  </DialogContent>
</Dialog>

  )
}

export default AppointmentModal
