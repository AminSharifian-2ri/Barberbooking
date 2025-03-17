"use client"

import { ColumnDef } from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import { StatusBadge } from "../StatusBadge";
import AppointmentModal from "../AppointmentModal";
import CancelAppointmentModal from "../cancelAppointmentModal";
import ScheduleAppointmentModal from "../ScheduleAppointmentModal";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Appointment>[] = [
{
    header:"نوبت",
    cell:(({row})=><p className="text-14-medium text-left">{row.index +1}</p>)
},
{
    accessorKey:'username',
    header:'نام',
    cell:({row})=>(
        <p className="text-14-regular text-left min-w-[100px] ">
            {row.original.username}
        </p>
    )
  },
{
    accessorKey: "status",
    header: "وضعیت",
    cell:({row})=>(
        <div className="min-w-[115px] flex w-fit items-center gap-2 rounded-full  status-badge">
            <StatusBadge status={row.original.status} />
        </div>
    )
  },
  {
    accessorKey:'time',
    header:'زمان',
    cell:({row})=>(
        <p className="text-14-regular min-w-[100px]">
            {formatDateTime(row.original.time).dateTime}
        </p>
    )
  },
  {
    accessorKey:'number',
    header:'تعداد افراد',
    cell:({row})=>(
        <p className="text-14-regular text-left min-w-[100px] pl-3">
            {row.original.number}
        </p>
    )
  },
  {
    accessorKey:'explains',
    header:'توضیحات',
    cell:({row})=>(
        <p className="text-14-regular text-left min-w-[100px] ">
            {row.original.explains}
        </p>
    )
  },
  {
    accessorKey:'phone',
    header:'شماره',
    cell:({row})=>(
        <p className="text-14-regular text-left min-w-[100px] ">
            {row.original.phone}
        </p>
    )
  },

    {
        id: "actions",
        header:()=> <div className="pl-4">مدیریت</div>,
        cell:({row:{original:data}})=>{
            return(
                <div className="flex gap-1">

                    <ScheduleAppointmentModal
                    appointmentWithId={data}
                    />
                       <CancelAppointmentModal
                    appointmentWithId={data}
                   />
                   
                    </div>
            )
        }
        },
    
]
