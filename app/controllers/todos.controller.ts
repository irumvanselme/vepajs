import { Request, Response } from "express"

import { Todo, validate } from "../models/todo.model"

class TodosController {
    async get_all(req: Request, res: Response) {
        try {
            const todos = await Todo.find();
            return res.send(todos);
        } catch (e) {
            return res.status(500).send(e);
        }
    }

    async get_one(req: Request, res: Response) {
        try {
            const todo = await Todo.findById(req.params.id);
            if (!todo)
                return res.status(404).send({ message: "Todo not found" });
            return res.send(todo);
        } catch (e) {
            return res.status(500).send(e);
        }
    }

    async create(req: Request, res: Response) {
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
        } catch (e) {
            return res.status(500).send(e);
        }
    }

    async edit(req: Request, res: Response) {
        try {
            const valid = validate(req.body);
            if (valid.fails(undefined))
                return res.status(400).send(valid.errors.all());

            const updatedTodo = await Todo.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedTodo)
                return res
                    .status(500)
                    .send({ message: "Failed to update the todo " });
            return res.send(updatedTodo);
        } catch (e) {
            return res.status(500).send(e);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
            if (!deletedTodo)
                return res
                    .status(500)
                    .send({ message: "Failed to delete the todo " });
            return res.send(deletedTodo);
        } catch (e) {
            return res.status(500).send(e);
        }
    }
}

export default new TodosController();