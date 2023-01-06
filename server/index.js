const express=require("express")
const cors= require("cors")
const mongoose=require("mongoose")

const app=express();
require("dotenv").config();

app.use(cors())
app.use(express.json())

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

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const server=app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})
