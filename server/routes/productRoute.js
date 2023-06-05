const express=require('express');
const router=express.Router();
const Product=require('../models/productModel')
const Email=require('../models/emailModel')
const cheerio = require("cheerio")
const axios = require("axios");
const { parse } = require('dotenv');



// performScraping()
const extractProductName=async(url)=>{
    // span class=B_NuCI
    const res=await axios.request({
        method: "GET",
        url: url,
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    const $=cheerio.load(res.data);
    const name=$(".B_NuCI").text();
    // console.log(name);
    return name;

}
const extractProductImage=async(url)=>{
    //img class=_396cs4 _2amPTt _3qGmMb
    const res=await axios.request({
        method: "GET",
        url: url,
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    const $=cheerio.load(res.data);
    const image=$("._1BweB8").find("._3kidJX").find("._3qGmMb").attr("src");
    // console.log(name);
    return image;
}
const extractProductPrice=async(url)=>{
    //class=_30jeq3 _16Jk6d
    const res=await axios.request({
        method: "GET",
        url: url,
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    const $=cheerio.load(res.data);
    const priceText=$(".aMaAEs .dyC4hf .CEmiEU ._16Jk6d").text();
   const price= parseInt(priceText.replace(/[^0-9]/g, "").replace(/,/g, ""));
    // console.log(name);
    return price;
}
router.post('/',async(req,res)=>{
      const url=await Product.findOne({url:req.body.url});
      if(url){
        res.send('Product already exists');
      }
      const productName=await extractProductName(req.body.url);
      const productImage=await extractProductImage(req.body.url);
      const productPrice=await extractProductPrice(req.body.url);
      const priceList=[productPrice];
      
      const product=new Product({
        name:productName,
        url:req.body.url,
        image:productImage,
        dates:[Date.now()],
        priceList:priceList,
        min_price:productPrice,
        created_at:Date.now()
      })
      const email=new Email({
        url:req.body.url,
        email:[]
      })
        product.save();
        email.save();
       try{
        res.status(200).json(product);
       }catch(err){
        res.status(500).json({message:err.message})
       }
})
module.exports=router;
