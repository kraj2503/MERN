import express from "express";

const app = express();

app.get('/',(req,res)=>{
    console.log("express-app");
    return true
})

app.listen(3002)