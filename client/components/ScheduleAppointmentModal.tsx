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
import ScheduleAppointmentForm from './forms/ScheduleAppointmentForm';

const ScheduleAppointmentModal = ({appointmentWithId}:{
    appointmentWithId?:Appointment
}) => {
    const [open,setOpen] = useState(false);
    return (
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <Button variant="ghost" className="capitalize text-success font-bold cursor-pointer">
            تایید
              </Button>
    </DialogTrigger>
    <DialogContent forceMount  className='bg-dark border-dark  sm:max-w-md'>
      <DialogHeader className='mb-4 space-y-4 text-light items-center'>
        <DialogTitle className='capitalize text-light text-[18px]'
        >تایید نوبت
        برای {appointmentWithId?.username}
        </DialogTitle>
        <DialogDescription className='text-light text-[16px]'>
          لطفا موارد زیر را در صورت نیاز، برای تایید نوبت اصلاح کنید
                </DialogDescription>
      </DialogHeader>
  
      <ScheduleAppointmentForm
      setOpen={setOpen}
      appointmentWithId={appointmentWithId}
  />
  
    </DialogContent>
  </Dialog>
  
  
    )
}

export default ScheduleAppointmentModal
