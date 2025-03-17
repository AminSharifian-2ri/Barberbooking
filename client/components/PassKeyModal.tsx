"use client";

import React, { useEffect, useState } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { decryptKey, encryptKey } from '@/lib/utils';

  

const PasasKeyModal = () => {
    const [open,setOpen] = useState(false);
    const router = useRouter();
    const closeModal = ()=>{
        setOpen(true);
        router.push(`/`);
    }

    const [passkey,setPasskey] = useState('');
    const [error,setError] = useState("");
    const path = usePathname();

    const encryptedKey = typeof Window !== "undefind" ? localStorage.getItem(`accessKey`):null;

    useEffect(()=>{
        const accessKey = encryptedKey && decryptKey(encryptedKey);
        if(path){
            if(accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY){
                setOpen(false);
                router.push(`/admin`)
            }else{
                setOpen(true);
            }
        }
    }
    
    ,[encryptedKey])


    const validatePassKey = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
         e.preventDefault();

        if(passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY){

            const encryptedKey = encryptKey(passkey);

            localStorage.setItem(`accessKey`,encryptedKey)

            setOpen(false);
            router.push("/admin")
        }else{
            setError(`رمز عبور نا معتبر است`)
        }
    }

  return (
 <AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent  className='space-y-5 bg-dark-light border-light outline-none'>
    <AlertDialogHeader>
      <AlertDialogTitle className='flex items-start justify-between'>
        <Image
        src="/assets/icons/close.svg"
        alt='close'
        height={20}
        width={20}
        onClick={()=>closeModal()}
        className='cursor-pointer'
        />
        <h2 className=' text-light text-[24px]'>اعتبار سنجی پیرایشگر</h2>

      </AlertDialogTitle>
      <AlertDialogDescription className='text-light text-right py-2'>
        برای دسترسی به صفحه مدیریت، رمز عبور را وارد کنید
      </AlertDialogDescription>
    </AlertDialogHeader>
    <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="w-full flex justify-between">
              <InputOTPSlot className="text-36-bold justify-center flex border border-light rounded-lg size-16 gap-4 text-light" index={0} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-light rounded-lg size-16 gap-4 text-light" index={1} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-light rounded-lg size-16 gap-4 text-light" index={2} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-light rounded-lg size-16 gap-4 text-light" index={3} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-light rounded-lg size-16 gap-4 text-light" index={4} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-light rounded-lg size-16 gap-4 text-light" index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="text-semantic text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>
    <AlertDialogFooter>
      <AlertDialogAction
      className='bg-primary w-full'
      onClick={(e)=> validatePassKey(e)}
      >اعتبار سنجی</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default PasasKeyModal
