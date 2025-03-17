import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface StatCardProps{
    type:"appointments" | "pending" | "cancelled",
    count:number,
    icon:string,
    label:string
}

const StatCard = ({count=0,type,icon,label}:StatCardProps) => {
    return (
        <div className={`w-full p-5 ${clsx('stat-card',{
            'bg-appointments' : type === "appointments",
            'bg-pending':type === 'pending',
            'bg-cancelled':type ==='cancelled'
        })}`}>
    
            <div className='flex gap-4 items-center'>
                <Image
                src={icon}
                height={32}
                width={32}
                alt='icon'
                className='mb-2 w-fit'
                />
    
                <h2 className='text-[32px] font-semibold text-white'>{count}</h2>
            </div>
            <p className='text-[18px] text-light'>{label}</p>
        </div>
      )
}

export default StatCard
