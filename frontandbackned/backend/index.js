const express= require('express');
const app =express();
const cors=require('cors');
const mongoose=require("mongoose");
const Contact=require("./module/allContext")
const PORT=3000;
mongoose.connect("mongodb://127.0.0.1:27017/portfollio")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/api" ,(req,res)=>{
    res.json({
        name:"harshil",
        hisfreind:"siddharth",
    })
})
app.post("/contactpage",(req,res)=>{
    console.log(req.body);
    res.json(req.body)
})
app.post("/contact",async(req, res) => {
    if(req.body && req.body.name && req.body.email && req.body.massage)
    {
     const result=await Contact.create({
             name:req.body.name,
             email:req.body.email,
             massage:req.body.massage,
     })
    }
});

app.listen(PORT,()=>{

    console.log("server Started On "+ PORT);
    
}
);