import { Router } from "express";
import TodoController from "../controllers/todos.controller";

const router = Router();

router.get("/", TodoController.get_all);
router.get("/:id", TodoController.get_one);
router.post("/", TodoController.create);
router.put("/:id", TodoController.edit);
router.delete("/:id", TodoController.delete);

export default router;