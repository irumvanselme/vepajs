import { Request, Response } from "express"

import { Todo, validate } from "../models/todo.model"

class TodosController {
    async get_all (req: Request, res: Response) {
        try {
            const todos = await Todo.find();
            return res.send(todos);
        } catch ( e ) {
            return res.status(500).send(e);
        }
    }

    async create (req: Request, res: Response) {
        try {
            const valid = validate(req.body);

            valid.fails(function () {
                return res.status(400).send(valid.errors.all());
            });

            let todo = new Todo(req.body);
            let newTodo = await todo.save();

            if (newTodo) return res.send(newTodo);
            return res
                .status(400)
                .send({ message: "Failed to create a new todo" });
        } catch ( e ) {
            return res.status(500).send(e);
        }
    }
}

export default new TodosController();