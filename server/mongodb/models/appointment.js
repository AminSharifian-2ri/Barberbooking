const mongoose = require(`mongoose`);

const appointmentSchema = new mongoose.Schema({
    username:{type:String,required:true},
    explains:{type:String},
    number:{type:Number,required:true},
    phone:{type:String,required:true},
    time:{type:Date,required:true},
    status:{
        type:String,
        enum:["pending","cancelled","scheduled"],
        default:"pending",
        required:true
    },
    cancellationReason:{type:String,default:""}
});

const appointmentModel = mongoose.model("Appointment",appointmentSchema);

module.exports = appointmentModel;