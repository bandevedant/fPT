const express=require('express')    
const app=express()
const dotenv=require('dotenv')

const mongoose=require('mongoose')
const cors=require('cors')

const productRoute=require('./routes/productRoute')
const emailRoute=require('./routes/emailRoute')


dotenv.config()
app.use(express.json())
app.use(cors())

app.use('/api/product',productRoute)
app.use('/api/email',emailRoute)


const port=process.env.PORT || 3000
const connection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,
        console.log(`MongoDB Connected ` ));
    }catch(err){
        console.log(err);
    }
}
connection();

  
app.listen(port,()=>{
    console.log(`Server is running at port : ${port}`);
})