export interface ITodo {
    id?: string
    descricao: string
    data: string
    status: "in_progress" | "completed"
}