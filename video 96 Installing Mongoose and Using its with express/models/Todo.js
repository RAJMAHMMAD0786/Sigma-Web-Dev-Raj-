import mongoose from "mongoose";
import { type } from "node:os";

const TodoSchema = new mongoose.Schema({
  title: {type: String , required: true , default: "Hey this is the default"},
  desc:String,
  isDon:Boolean,
  days:Number
});

export const Todo = mongoose.model('Todo', TodoSchema);