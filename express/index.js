const express = require("express");
const app = express();

var users = [{
    name: "Raju",
    kidney: [{
        healthy: false
    }]
}];

app.get('/', function (req, res) {
    const rajuKidney = users[0].kidney;
    const numberOfKidneys = rajuKidney.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (rajuKidney[i].healthy) {
            numberOfHealthyKidneys += 1;

        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

app.use(express.json())

app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})


app.put('/', function (req, res) {
    if (unhealthyFound()) {
        for (let i = 0; i < users[0].kidney.length; i++) {
            users[0].kidney[i].healthy = true;
        }

        res.json({
            msg: "all done!"
        })
    }

    else {
        res.status(411).json({ 
            msg: "All Kidneys are already healthy!" });

    }
})


app.delete('/', function (req, res) {

    if (isThereAtleastOneUnhealtyKidney()) {
        const newKidney = [];
        for (let i = 0; i < users[0].kidney.length; i++) {
            if (users[0].kidney[i].healthy) {
                newKidney.push({
                    healthy: true
                })
            }
        }
        users[0].kidney = newKidney;

        res.json({
            msg: "ran"
        })
    }
    else {
        res.status(411).json({
            msg: "NO unhealthy kidney found!!"
        });
    }

})

function isThereAtleastOneUnhealtyKidney() {
    let atleastOneUnhealtyKidney = false;

    for (let i = 0; i < users[0].kidney.length; i++) {
        if (!users[0].kidney[i].healthy) {
            atleastOneUnhealtyKidney = true;
           
        }

    }
    return atleastOneUnhealtyKidney;
}

function unhealthyFound() {
    let unhealthyKidneyFound = false;
    for (let i = 0; i < users[0].kidney.length; i++) {
        if (users[0].kidney[i].healthy == false) {
            unhealthyKidneyFound = true;
            
        }
    }
    return unhealthyKidneyFound;
}
app.listen(3000);