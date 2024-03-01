// const express = require('express');

// const app = express();

// const port = 1000;

// app.get('/', function (req, res) {
//     // res.send('hello Worldd')
//     res.json({ "name": "kz", "help": "NO" })
// })

// app.listen(port) 


const arr = [1,2,3,4,5,6,7,8];

console.log(arr.filter((data)=>{
    return data%2==0;
}));

