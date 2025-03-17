"use server";

import { parseStringify } from "./utils";

export const createAppointment = async (
    appointment:CreateAppointmentParams
)=>{
try{

  const response =  await fetch("http://localhost:5000/api/appointments/new-appointment",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify( appointment )
    });

    const data = await response.json();
    console.log(data,"data")
     
    return parseStringify(data);

}catch(error){
    console.log(`مشکلی در هنگام ساخت نوبت به وجود آمد`,error)
}
}


//  GET RECENT APPOINTMENTS
export const getRecentAppointmentList = async () => {
    try {

        const response = await fetch(`http://localhost:5000/api/appointments`);
        const data = await   response.json();

      const initialCounts = {
        scheduledCount: 0,
        pendingCount: 0,
        cancelledCount: 0,
      };

       return parseStringify(data);
    } catch (error) {
      console.error(
        "An error occurred while retrieving the recent appointments:",
        error
      );
    }
  };


  export const cancelAppointment = async (appointmentData)=>{
    try{
      console.log("az invar data",appointmentData)
      const response = await fetch(`http://localhost:5000/api/appointments/cancel-appointment/${appointmentData._id}`,{
      method:"PUT",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(appointmentData),
      });

      const data = await response.json();

      return parseStringify(data); 
      
    }catch(error){
      console.log(error)
    }
  }
  

  export const scheduleAppointment = async(appointmentData)=>{
    try{
      const response = await fetch(`http://localhost:5000/api/appointments/schedule-appointment/${appointmentData._id}`,{
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(appointmentData)
      })

      const data = await response.json()

      return parseStringify(data);
    }catch(error){
      console.log(error)
    }
  }
  