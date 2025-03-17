"use client";

import { CustomerColumns } from '@/components/table/CustomerColumn'
import { DataTable } from '@/components/table/DataTable'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = () => {

    const [scheduledAppointments,setScheduledAppointments] =useState([]);


    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`http://localhost:5000/api/appointments`);
            const data = await response.json();
            setScheduledAppointments(data.scheduledAppointments);
        }
        fetchData();
    },[])

  return (
    <div className='items-center p-5 text-3xl'>

<header className='sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-grey border border-grey px-[5%] py-5 shadow-lg xl:px-12'>
                <Link href='/' className='curosor-pointer'>
                <Image
                src="/assets/photos/logo.png"
                height={32}
                width={162}
                alt='RADIN-STYLE'
                className='h-8 w-fit'
                />
                </Link>
                <p className='text-[18px] text-light'>نوبت های رزرو شده</p>
            </header>
        <section className='text-light text-center my-10'>
            <h1 className='text-light text-[24px]'>نوبت های امروز</h1>
            <h2 className='text-light text-[18px] my-2 leading-normal mt-3 '>جدول زیر نوبت های گرفته شده امروز هستند.طبق جدول زیر برای گرفتن نوبت خود در وقت های خالی اقدام کنید.به زمان و تعداد افراد نوبت ها دقت کنید 
                هر اصلاح 30 دقیقه طول میکشد
            </h2>
        </section>
     <DataTable columns={CustomerColumns} data={scheduledAppointments || []} />

     <Button asChild className='bg-primary cursor-pointer text-dark font-bold text-[18px]  w-full py-5 mt-10' >
     <Link href="/new-appointment">رزرو کردن نوبت</Link>  
    </Button>
     </div>
  )
}

export default page
