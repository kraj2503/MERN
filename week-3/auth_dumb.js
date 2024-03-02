// DUMB WAY OF DOIG AUTH CHECK

const express = require("express");

const app = express();

app.get('/health-checkup', function (req, res) {

    const KidneyId = req.query.kidneyid;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "kshitiz" || password != "pass") {
        res.status(400).json({
            msg: "Wrong ID or password!"
        })
        return

    }
    if (KidneyId != 1 && KidneyId != 2) {
        res.status(400).json({
            msg: "Something is wrong with your input!"
        })
        return


    }
    res.json({
        msg: "your kidney is fine!"
    })
}
);

app.listen(3000);