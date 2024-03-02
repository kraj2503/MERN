const express = require("express")

const app = express();

app.use(express.json()); //require this middleware to accept body else body wont be accepted

app.post("/health-checkup", function (req,res){

    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send("You have "+kidneylength+ " kidneys");
})


// Global catches to catch exceptipn

app.use(function (err,req,res,next){
    res.status(500).json({
        msg: "Error somewhere!"
    })
})



app.listen(3000)
