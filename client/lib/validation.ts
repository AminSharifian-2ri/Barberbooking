import { z } from "zod";

export const AppointmentFormValidation = z.object({
    username: z
      .string()
      .min(3, "نام حداقل 3 حرف دارد")
      .max(25, "نام حد اکثر 25 حرف دارد"),

      number:z.
      string()
      .min(1,'حداقل 1 نفر برای رزور باید باشد')
      .max(3,"امکان رزرو بیش از 3 نفر نیست"),

      phone: z
      .string()
      .refine((phone) => /^\+\d{10,15}$/.test(phone), "شماره تلفن نامعتبر است"),

      time: z.coerce.date(),

      explains: z.string().optional(),
      cancellationReason:z.string().optional(),
      
  });

  export const CancelAppointmentValidataion = z.object({

      cancellationReason:z.string().optional(),
      
  });

  export const ScheduleAppointmentValidation = z.object({
    time: z.coerce.date(),
});