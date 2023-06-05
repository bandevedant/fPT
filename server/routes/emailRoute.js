const express=require('express');
const router=express.Router();
const Product=require('../models/productModel')
const Email=require('../models/emailModel')

router.post('/',async(req,res)=>{
   const checkUrl=await Email.findOne({url:req.body.url});
   if(checkUrl){
        res.send('Email already exists');
   }
   const email=new Email({
         url:req.body.url,
         email:[...email,req.body.email]
   })
   email.save();
   try{
        res.status(200).json(email);
   }catch(err){
        res.status(500).json({message:err.message})
   }
})
module.exports=router;