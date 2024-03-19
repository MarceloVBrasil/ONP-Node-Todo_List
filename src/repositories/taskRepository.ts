import { ITodo } from "../models/task";
import { v4 as uuid } from "uuid"

export default class TaskRepository {
    private tasks: ITodo[] = [
        {
            id: uuid(),
            descricao: 'estudar node',
            data: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
            status: "in_progress"
        }
    ]

    constructor() {

    }

    getAll(): ITodo[] {
        return this.tasks
    }

    getById(todoId: string): ITodo | undefined {
        const task = this.tasks.find(task => task.id === todoId)
        return task
    }

    add(data: ITodo): ITodo {
        data.id = crypto.randomUUID()
        this.tasks.push(data)
        return data
    }

    update(todoId: string, data: ITodo): ITodo {
        const taskIndex = this.tasks.findIndex(task => task.id === todoId)
        this.tasks[taskIndex] = { ...data }
        return data
    }

    delete(todoId: string): string {
        this.tasks = this.tasks.filter(task => task.id != todoId)
        return todoId
    }
}