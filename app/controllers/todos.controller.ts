import { Request, Response } from "express"

import Todo from "../models/todo.model"

class TodosController {
    async get_all (req: Request, res: Response) {
        let todos = await Todo.all();

        res.send(todos)
    }

    async create (req: Request, res: Response) {
        let newTodo = await Todo.create(req.body)

        res.send(newTodo);
    }
}

export default new TodosController();