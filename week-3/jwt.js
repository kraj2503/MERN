const jwt = require("jsonwebtoken");

const secret = "qwerty@123"

const value = {
    name: "kshitiz",
    accountnumber: 12345667788900
}



const token = jwt.sign(value, secret);

const verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia3NoaXRpeiIsImFjY291bnRudW1iZXIiOjEyMzQ1NjY3Nzg4OTAwLCJpYXQiOjE3MDk0NzgxNDV9.K54gjJFBvomwYAFRp7RgBja-yxLZGZNv4dAEcXMpTiY",secret);

console.log(token);
console.log(verify.name);
