const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

const schema1 = zod.object({
    email:zod.string().email(),
    password: zod.string().min(8  ),
    country: zod.literal("IN").or(z.literal("US")),
 
})



app.use(express.json()); //require this middleware to accept body else body wont be accepted

app.post("/health-checkup", function (req,res){

    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: "qwe"
        })
    }
    res.send({
        response
    })

    
})


app.listen(3000);
