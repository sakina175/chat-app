const express=require("express")
const cors= require("cors")
const mongoose=require("mongoose")
const userRoute=require("./routes/userRoutes")
const app=express();
require("dotenv").config();

app.use(cors())
app.use(express.json())
app.use("/api/auth",userRoute);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err.message);
})


const server=app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})
