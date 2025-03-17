import AppointmentForm from '@/components/forms/AppointmentForm';
import React from 'react'

const AppointmentPage = () => {
  return (
    <>
   <div className='flex flex-col h-full relative lg:hidden w-full
'>
<section className="p-7">
          <h1 className="text-light text-[24px]"> 👋خوش آمدید</h1>
          <p className="text-light text-[14px] pt-1">برای رزرو نوبت اقدام کنید</p>
        </section>
<div
   className="
   w-full
   rounded-t-4xl
   h-[77vh]
     bg-light
     absolute
     top-[23vh]
     slide-up
    "
 >
    <AppointmentForm />
    
 </div>
 </div>

    <div className='lg:flex'>
        
        </div>
        </>
  )
}

export default AppointmentPage;
