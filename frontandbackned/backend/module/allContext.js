const mongoose= require('mongoose');

const dataSchema=new mongoose.Schema(
    {
        name:{
            type:String,
        } ,
        email:{
            type:String,
        },
        massage:
        {
                type:String,
        }
    }
);

const Contact=mongoose.model('contact',dataSchema);

module.exports=Contact;