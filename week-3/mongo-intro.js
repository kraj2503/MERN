

const express = require("express");
const mongoose = require("mongoose");
app = express();

app.use(express.json());


mongoose.connect("mongo")
 
const Users = mongoose.model('Users', { name: String, email: String, password: String });
app.post('/signUp', async (req, res) => {
    const name = req.body.Username;
    const email = req.body.email;
    const password = req.body.password;
    console.log(name,email,password);
    
    const exists = await Users.findOne({email:email});
    if(exists){
        return res.status(400).send("Email already exists");
    }


    const user = new Users({ name: name, email: email, password: password });



    await user.save();
    res.json({
        msg: "User Created Successfully!"
    })
})


app.listen(3000);

