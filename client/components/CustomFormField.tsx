"use client";

import 'react-phone-number-input/style.css'
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldTypes } from "./forms/AppointmentForm";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import { Textarea } from './ui/textarea';

  interface CustomProps{
    control:Control<any>,
    fieldType:FormFieldTypes;
    name:string,
    placeholder?:string,
    disabled?:boolean,
    dateFormat?:string,
    showTimeSelect?:boolean,
    children?:React.ReactNode,
    renderSkeleton?:(field:any)=>React.ReactNode
  }

  const RenderField = ({field,props}:{field:any,props:CustomProps})=>{
    const {fieldType,placeholder} = props;

    switch(fieldType){
      case FormFieldTypes.TIME_PICKER:
        return (
          <div className="flex flex-col gap-3 shadow-md max-w-sm">
            <FormControl>
              <TimePicker
                onChange={(value) => {
                  if (typeof value === "string") {
                    const [hours, minutes] = value.split(":").map(Number);
                    const newDate = new Date(field.value);
                    newDate.setHours(hours, minutes, 0, 0);
                    field.onChange(newDate); // مقدار `Date` را به فرم بده
                  }
                }}
                value={field.value
                  ? `${field.value.getHours().toString().padStart(2, "0")}:${field.value
                      .getMinutes()
                      .toString()
                      .padStart(2, "0")}`
                  : ""}
                disableClock={true}
                className="p-2 rounded-md"
              />
            </FormControl>
          </div>
        );
        break;
        case FormFieldTypes.INPUT:
            return(
                <div className="flex rounded-md border-grey bg-light">
      
                    <FormControl>
                        <Input
                        placeholder={placeholder}
                        {...field}
                        className="border-0 
                        shad-input
                        text-right
                        shadow-xl
                        text-dark
                        font-bold
                        text-[16px]
                        "
                        />
                    </FormControl>
            </div>
            )
        break;
        
        case FormFieldTypes.NUMBER_INPUT:
            return(
                <div className="flex rounded-md border-grey bg-light">
      
                    <FormControl>
                        <Input
                        type='number'
                        placeholder={placeholder}
                        {...field}
                        className="border-0 
                        shad-input
                        text-right
                        shadow-xl
                        text-dark
                        font-bold
                        text-[16px]
                        "
                        />
                    </FormControl>
            </div>
            )
        break;
        case FormFieldTypes.PHONE_INPUT:
          
        return (
          <FormControl>
            <PhoneInput
              defaultCountry="IR"
              placeholder={placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className=" text-dark bg-light text-[18px] shadow-xl mt-6"
            />
          </FormControl>
        );
        break;
        case FormFieldTypes.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-textArea text-right text-[16px] text-dark font-bold 
            shadow-xl
            pb-6
            "
            disabled={props.disabled}
          />
        </FormControl>
      );
      break;
        default:
            break;
    }

  }
  


const CustomFormField = (props:CustomProps) => {
  return (
    <FormField
    control={props.control}
    name={props.name}
    render={({ field }) => (
      <FormItem className="flex-1 mt-3">
        <RenderField field={field} props={props} />
        <FormMessage className=" text-semantic font-bold" />
      </FormItem>
    )}
  />
  )
}

export default CustomFormField;
