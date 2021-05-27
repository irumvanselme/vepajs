import { Router } from "express"

import todos_routes from "./todos.routes"

const router = Router();

router.use("/todos", todos_routes)

export default router;