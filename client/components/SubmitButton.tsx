import React from 'react'
import { Button } from './ui/button';

interface ButtonProps{
    children:React.ReactNode,
    className:string,
    isLoading:boolean
}

const SubmitButton = ({className,children,isLoading}:ButtonProps) => {
  console.log("clicked")
  return (

    <div>
        <Button  className={className} type="submit">
            {isLoading ?"... درحال تایید":`${children}`}
        </Button>
    </div>
  )
}


export default SubmitButton;
