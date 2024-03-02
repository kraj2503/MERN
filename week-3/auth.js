const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const app = express();
app.use(express.json())


const ALL_USERS = [
    {
        username: "kshitiz@gmail.com",
        password: "123",
        name: "Kshitiz Raj",
    },
    {
        username: "raj@gmail.com",
        password: "1234221",
        name: "Raj kz",
    },
    {
        username: "anmol@gmail.com",
        password: "qwerty",
        name: "Anmol",
    },
];

function userExists(username, password) {
    let userExists = false;
for(let i = 0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username===username && ALL_USERS[i].password===password)
        userExists=true;
}

    return userExists;

}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const pasword = req.body.password;

    if (!userExists(username, pasword)){
        return res.status(403).json({
            msg: "User doesn't exists",
        });
    }
    var token = jwt.sign({ username: username }, jwtpassword);
    return res.json({
        token,
    });
})

app.get("/users",function (req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtpassword);

        const username = decoded.username;
        res.json({
            users:ALL_USERS.filter(function (value){
                if(value.username==username){
                    return false;
                }
                else 
                return true;
            })
        })
    }
    catch(err){
        return res.send(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);