import { Router } from "express";
import TodoController from "../controllers/todos.controller";

const router = Router();

router.get("/", TodoController.get_all);
router.post("/", TodoController.create);

export default router;