import { Todo } from "../interfaces/Todo";
import { Model } from "./model"
import { TodoSchema } from "../database/todo.schema";


class TodoModel extends Model<Todo> {
    constructor () {
        super("Todo", TodoSchema);
    }
}

export default new TodoModel()