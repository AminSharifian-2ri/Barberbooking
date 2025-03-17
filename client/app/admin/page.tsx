"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { decryptKey } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import StatCard from "@/components/StatCard";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";

const AdminPage = () => {
    
    const router = useRouter();
    const [data,setData] = useState({});
    const [allAppointments,setAllAppointments] =useState([]);
    const [pendingAppointments,setPendingAppointments] =useState([]);
    const [scheduledAppointments,setScheduledAppointments] =useState([]);
    const [cancelledAppointments,setCancelledAppointments] =useState([]);

    useEffect(() => {
        const accessKey = localStorage.getItem("accessKey");

        if (!accessKey || decryptKey(accessKey) !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
            router.push("/?admin=true");
        }
    }, []);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`http://localhost:5000/api/appointments`);
            const data = await response.json();
            setData(data);
            setAllAppointments(data.allAppointments);
            setPendingAppointments(data.pendingAppointments);
            setScheduledAppointments(data.scheduledAppointments);
            setCancelledAppointments(data.cancelledAppointments);
            console.log(data.allAppointments)
        }
        fetchData();
    },[])
   

    return (
        <div className='mx-auto max-w-7xl flex flex-col space-y-14'>
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
                <p className='text-16-semibold text-light'>پنل ادمین</p>
            </header>
    
            <main className='flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12 w-full'>
                <section className='w-ful spaca-y-4 text-center'>
                    <h1 className='text-light text-2xl'>خوش آمدید</h1>
                    <p className='text-light text-lg'>!نوبت های رزرو شده امروز رو مدیریت کن </p>
                </section>
    
                <section className='flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-10 mt-4  stat-card'>
                <StatCard 
                type='appointments'
                count={scheduledAppointments.length}
                icon="/assets/icons/appointments.svg"
                label="نوبت های تایید شده"
                />
                 <StatCard 
                type='pending'
                count={pendingAppointments.length}
                icon="/assets/icons/pending.svg"
                label="نوبت های در انتظار" 
                />
                 <StatCard 
                type='cancelled'
                count={cancelledAppointments.length}
                icon="/assets/icons/cancelled.svg"
                label="نوبت های کنسل شده"
                />

                </section>

                <DataTable columns={columns} data={data?.allAppointments || []} />
                </main>
                </div>
      )
};

export default AdminPage;