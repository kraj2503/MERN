const express = require("express")

const app = express();

app.use(express.json()); //require this middleware to accept body else body wont be accepted

app.post("/health-checkup", middleware, function (req,res){

    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send("You have "+kidneys+ " kidneys");
    // console.log("inside post");
    

})

function middleware(req,res,next){
    console.log("inside middleware");
    // console.log(req.body.kidneys==="4");
    if(req.body.kidneys==="4"){
                   res.status(404).json({
                    "kidney": "Error"
                })
    }
    else{
    next();
    }
}
// Global catches to catch exceptipn

app.use(function (err,req,res,next){
    res.status(500).json({
        msg: "Error somewhere!"
    })
})



app.listen(3000)
