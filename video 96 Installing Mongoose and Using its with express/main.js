
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";
import { title } from "node:process";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express()
const port = 3000

app.get('/', (req, res) => {

    const todo = new Todo({  desc: "This is the description of the todo", isDon: false, days: Math.floor(Math.random() * 45 + 5 * Math.random()) })
    todo.save()

    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)

    res.json({ title: todo.title, desc: todo.desc })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})