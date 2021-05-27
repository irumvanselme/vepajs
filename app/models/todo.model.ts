import mongoose from "mongoose";
import Validator from "validatorjs";
import { Todo } from "../interfaces/Todo";

const todoSchema = new mongoose.Schema ( {
    name: { required: true, type: String, minlength: 4 },
    description: { type: String, minlength: 10 },
} );

const Todo = mongoose.model ( "Todo", todoSchema );

const validate = ( data: any ) => {
    const rules = {
        name: "string|required|min:4",
        description: "string|required|min:10",
    };

    return new Validator ( data, rules );
};

export { Todo, validate };