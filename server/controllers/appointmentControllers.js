const Appointment = require(`../mongodb/models/appointment`);



const getAppointmentsController = async (req,res)=>{
    try{
const allAppointments = await Appointment.find().sort({ date: +1, time: +1 });
        const scheduledAppointments = await Appointment.find({status:'scheduled'}).sort({ date: +1, time: +1 });;
        const pendingAppointments = await Appointment.find({status:"pending"});
        const cancelledAppointments = await Appointment.find({status:"cancelled"});
        
        if(scheduledAppointments && pendingAppointments && cancelledAppointments){
            res.status(200).json({allAppointments,scheduledAppointments,pendingAppointments,cancelledAppointments})
        }else{
            res.status(404).json({message:"پاسخی یافت نشد"})
        }
    }catch(error){
        console.log(error)
    }
}

 const createAppointmentController = async (req,res)=>{
    try{
        const appointment = req.body;
        const newAppointment = await Appointment.create(appointment);

        res.status(200).json(newAppointment);
    }catch(error){
        console.log(error)
    }
};


const cancelAppointment = async(req,res)=>{
    try{
        const appointmentId = req.params.id;
        const appointment = await Appointment.findByIdAndUpdate(appointmentId,{
            ...req.body,
            time:req.body.time.$date,
            status:"cancelled",
            cancellationReason:req.body.values.cancellationReason,
        });

       if(appointment){await appointment.save();
        res.status(200).json(appointment)
    }else{
        res.status(404).json({message:"جنین کاربری یافت نشد"})
    }
       

    }catch(error){

        
        console.log(error)
    }
};

const scheduleAppointment = async(req,res)=>{
    try{
        const appointmentId = await req.params.id;
        const appointment = await Appointment.findByIdAndUpdate(appointmentId,{
            ...req.body,
            time:req.body.values.time,
            status:"scheduled"
        })

        if(appointment){
          await appointment.save();
          res.status(200).json(appointment);
        }else{
            res.status(404).json({message:"چنین نوبتی یافت نشد"})
        }
        

    }catch(error){
        console.log(error)
    }
}


module.exports = {
    createAppointmentController,
    cancelAppointment,
    scheduleAppointment,
    getAppointmentsController
};


