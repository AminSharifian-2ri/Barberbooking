import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PassKeyModal from '@/components/PassKeyModal';

const page = ({searchParams}:SearchParamProps) => {
  const isAdmin = searchParams.admin ==='true'

  return (
<>
<div
   className="relative
   bg-[url('/assets/photos/onboarding.jpg')] bg-cover bg-center h-[100vh]
    lg:hidden w-full
     bg-blend-overlay"
 >

{isAdmin && <PassKeyModal /> }


<div className="absolute inset-0 bg-black/25 backdrop-blur-[4px]"></div>
    
 <div className='relative flex flex-col justify-between h-full p-5'>
 <div className='flex flex-col items-center  slide-up
'>
  <Image
    className='mt-5 '
    src="/assets/photos/logo.png"
    width={120}
    height={120}
    alt='logo'
    />  
    <h1 className='text-light text-lg'>Mohammad   Hossein   Majidi</h1>
    <p className='text-light text-sm text-center font-light mt-2'>Radin Style Haircare Salon</p>
  </div>

  <div className='flex flex-col items-center gap-3 '>
    <Button asChild className='bg-primary cursor-pointer text-dark font-bold text-[18px]  w-full py-5' >
     <Link href="/new-appointment">رزرو کردن نوبت</Link>  
    </Button>
    <Button asChild variant={'outline'} className='text-light font-normal text-[18px] border border-grey bg-transparent cursor-pointer  w-full py-5' >
     <Link href="/scheduled-appointments">مشاهده نوبت های خالی</Link>  
    </Button>
  </div>
 </div>
  </div>
  <div className='lg:flex justify-between hidden bg-dark'>
        <Image className='lg:w-[45vw] h-[100vh]'
    src="/assets/photos/onboarding.jpg"
    width={1000}
    height={1000}
    alt='onboarding'
    />
    <h1 className='m-50 text-black text-3xl'>Radin Style</h1>
    {isAdmin && <PassKeyModal /> }

  </div>
</>
  )
}

export default page;
