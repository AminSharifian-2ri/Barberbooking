"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import {  AppointmentFormValidation } from "@/lib/validation"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import { createAppointment } from "@/lib/appointment.actions";
import { useRouter } from "next/navigation";


export enum FormFieldTypes{
  INPUT="input",
  NUMBER_INPUT="number",
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  TIME_PICKER = "timePicker",
}



 
const  AppointmentForm = ()=> {

  const [isLoading,setIsLoading] = useState(false);
  const router = useRouter();

  
    // تابع تبدیل ساعت انتخابی به فرمت ISO برای دیتابیس
    const getFullDateTime = () => {
      const today = new Date();
      today.setHours(12, 0, 0, 0); // مقدار پیش‌فرض: ساعت ۱۲:۰۰ ظهر
      return today; // یک Date برمی‌گردونیم نه string
    };


  // 1. Define  form.
  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      username: "",
      phone:"",
      explains:"",
      number:"",
      time:getFullDateTime(),
      cancellationReason:""
    },
  })

 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {

    setIsLoading(true);

    try{

      const appointmentData = {
        ...values,
        status:"pending"
      };

      const appointment = await createAppointment(appointmentData);
      console.log(appointment,"appointment:")

      if(appointment){
        form.reset();
        router.push(`/new-appointment/${appointment._id}/success`);
      }

    }catch(error){

      console.log(error);
        }

    console.log(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className=" h-full">
<div className="flex flex-col h-full w-full justify-between">
<div className="p-8">
  
<CustomFormField
         control={form.control}
         fieldType = {FormFieldTypes.INPUT}
         name="username"
         placeholder = "نام و نام خانوادگی شما "
      />

<CustomFormField
              fieldType={FormFieldTypes.TEXTAREA}
              control={form.control}
              name="explains"
              placeholder="توضیحاتی اگر دارید بنویسید، مثلا نوبت برای اصلاح موی فرزندم و ریش خودم"
            />

<div
              className={`flex items-center gap-6 flex-row`}>
                <CustomFormField
              fieldType={FormFieldTypes.TIME_PICKER}
              control={form.control}
              name="time"
            />


<CustomFormField
         control={form.control}
         fieldType = {FormFieldTypes.NUMBER_INPUT}
         name="number"
         placeholder ="تعداد افراد"
      />

              </div>

<CustomFormField
         control={form.control}
         fieldType = {FormFieldTypes.PHONE_INPUT}
         name="phone"
         placeholder = 'شماره تماس شما'
      />

  </div>
  <div>
<SubmitButton
className="w-full font-bold text-[18px] py-6 bg-primary text-dark"
isLoading={isLoading}>
  رزرو نوبت
</SubmitButton>
  </div>
</div>
    </form>
  </Form>

  )
}

export default AppointmentForm;
