import { Request, Response } from "express"

import Todo from "../models/todo.model"
import Validator from "validatorjs";

class TodosController {
    async get_all (req: Request, res: Response) {
        let todos = await Todo.all();

        res.send(todos)
    }

    async create (req: Request, res: Response) {
        let valid = new Validator(req.body, {
            name: "string|required|min:4",
            description: "string|required|min:10",
        })

        if(valid.fails()){
            return res.send(valid.errors.all())
        }

        let newTodo = await Todo.create(req.body)

        res.send(newTodo);
    }
}

export default new TodosController();