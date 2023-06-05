const mongoose=require('mongoose');

const EmailSchema= mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    email:[String]
})
module.exports=mongoose.model("Email",EmailSchema);