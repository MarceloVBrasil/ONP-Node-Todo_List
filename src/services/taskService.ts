import { ITodo } from "../models/task";
import TaskRepository from "../repositories/taskRepository";

const taskRepository = new TaskRepository()

export default class TaskService {
    constructor() {

    }

    static getAll() {
        const resultado = taskRepository.getAll()
        return resultado

    }

    static getById(todoId: string) {
        const resultado = taskRepository.getById(todoId)
        return resultado
    }

    static add(data: ITodo) {
        const resultado = taskRepository.add(data)
        return resultado
    }

    static update(todoId: string, data: ITodo) {
        const resultado = taskRepository.update(todoId, data)
        return resultado
    }

    static delete(todoId: string) {
        const resultado = taskRepository.delete(todoId)
        return resultado
    }
}