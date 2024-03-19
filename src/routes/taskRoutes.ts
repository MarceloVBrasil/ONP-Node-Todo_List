import { Router } from "express"

import TaskController from "../controllers/taskController"
import authMiddleware from "../middlewares/authMiddleware"

const taskRoutes = Router()

taskRoutes.route("/")
    .get(authMiddleware, TaskController.getAll)
    .post(TaskController.add)

taskRoutes.route("/:id")
    .get(TaskController.getById)
    .put(TaskController.update)
    .delete(TaskController.delete)

export default taskRoutes