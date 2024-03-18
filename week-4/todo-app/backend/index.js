const express = require('express');
const { createTodo } = require('./types');
const app = express();
const {todo} = require('./db')
const cors = require("cors")

app.use(express.json())
app.use(cors());

app.get('/todo', async function (req, res) {

    const todos = await todo.find();

    res.json({ todos })
})



app.post('/todos', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "invalid input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
        
    })
    res.json({
        msg: "Todo created"
    })
})

app.put('/completed', async  function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = update.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "invalid input"
        })
        return;
    }


    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000)