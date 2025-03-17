"use client"

import { ColumnDef } from "@tanstack/react-table";

import { formatDateTime } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const CustomerColumns: ColumnDef<Appointment>[] = [
{
    header:"نوبت",
    cell:(({row})=><p className="text-14-medium text-left">{row.index +1}</p>)
},

{
    accessorKey: 'time',
    header: 'زمان',
    cell: ({ row }) => (
        <p className="text-[18px] font-bold text-left text-primary min-w-[100px]">
            {new Date(row.original.time).toLocaleTimeString('fa-IR', {
                hour: '2-digit',
                minute: '2-digit',
                hourCycle: 'h23' // اجباری کردن نمایش ۲۴ ساعتی
            })}
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
    
]
