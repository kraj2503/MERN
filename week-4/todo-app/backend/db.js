const mongoose = require("mongoose");

mongoose.connect("mongodb");

const todoSchema = mongoose.Schema({
    Title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}