import { Request, Response } from "express";
import { v4 as uuid } from "uuid"

import TaskService from "../services/taskService";
import TaskSchema from "../schema/taskSchema";

const taskSchema = new TaskSchema()

export default class TaskController {
    constructor() {

    }

    static getAll(req: Request, res: Response) {
        const resultado = TaskService.getAll()
        res.json(resultado)
    }

    static async getById(req: Request, res: Response) {
        try {
            await taskSchema.getById().validate(req.params)
            const resultado = TaskService.getById(req.params.id)
            res.json(resultado)
        }
        catch (error: any) {
            res.json({ erro: error.message })
        }
    }

    static async add(req: Request, res: Response) {
        try {
            await taskSchema.add().validate(req.body)
            req.body.id = uuid()
            const resultado = TaskService.add(req.body)
            res.json(resultado)
        } catch (error: any) {
            res.json({ erro: error.message })
        }
    }

    static async update(req: Request, res: Response) {
        try {
            await taskSchema.update().validate({ ...req.params, ...req.body })
            const resultado = TaskService.update(req.params.id, req.body)
            res.json(resultado)
        } catch (error: any) {
            res.json({ erro: error.message })
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            await taskSchema.delete().validate(req.params)
            const resultado = TaskService.delete(req.params.id)
            res.json(resultado)
        } catch (error: any) {
            res.json({ erro: error.message })
        }
    }
}