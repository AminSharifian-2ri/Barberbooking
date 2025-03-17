import { Button } from '@/components/ui/button';
import { formatDateTime } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SuccessPage = () => {

    return (

        <div className=" h-screen max-h-screen px-[5%] items-center">
          <div className="mt-15">
            <section className="flex flex-col items-center">
              <Image
                src="/assets/gifs/success.gif"
                height={300}
                width={280}
                alt="success"
              />
              <h2 className="text-[24px] text-green-500 header mb-6 max-w-[600px] text-center">
              <span className="text-green-500 " >درخواست رزرو نوبت </span> 
               شما با موفقیت به دست پیرایشگر رسید  
              </h2>
              <p className='text-light text-[24px]'>ما به زودی به شما خبر میدهیم</p>

              <Button variant="outline" className="my-4 mt-20 p-7 text-light text-[24px] text-center" asChild>
              <Link href={`/`}>
              مشاهده صفحه اصلی
              </Link>
            </Button>
            <p className="text-light opacity=[0.8]">سالن پیرایش رادین استایل 1404</p>
            </section>   
    
          </div>
        </div>
      );
}

export default SuccessPage
