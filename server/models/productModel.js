const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    dates:[Date],
    priceList:[Number],
    min_price:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date
    }
})
module.exports=mongoose.model("Product",ProductSchema);