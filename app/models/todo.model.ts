import mongoose from "mongoose";
import { Todo } from "../interfaces/Todo";
import { Model } from "./model"

class TodoModel extends Model<Todo> {
    schema = new mongoose.Schema({
        name: { required: true, type: String, minlength: 4 },
        description: { type: String, minlength: 10 },
    });

    validations = {
        name: "string|required|min:4",
        description: "string|required|min:10",
    }
}

export default new TodoModel("Todo")