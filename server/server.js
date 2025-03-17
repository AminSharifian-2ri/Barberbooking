const express = require(`express`);
const cors = require(`cors`);
const dotenv = require(`dotenv`);
const connectDB = require("./mongodb/connect");
const appointmentRouter = require(`./routes/appointmentRoutes`);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use(`/api/appointments`,appointmentRouter);


app.get(`/`,(req,res)=>{
    try{
        res.send(`hello from server`)
    }catch(error){
        console.log(errp)
    }
})


const startServer =async ()=>{
    try{

        await connectDB(process.env.MONGODB_URL)

        app.listen(5000,()=>{
            console.log('server running on port 5000')
        })
        
        
    }catch(error){
        console.log(error)
    }
}


startServer();