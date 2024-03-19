import { object, string } from "yup"

function checkStatusValid(status: string) {
    return status === "completed" || status === "in_progress"
}

function checarTipoString(param: any) {
    return typeof param === "string"
}

export default class TaskSchema {
    constructor() {

    }

    getById() {
        return object().shape({
            id: string()
                .required(TaskValidacao["id"].messages.required)
        })
    }

    add() {
        return object().shape({
            descricao: string()
                .required(TaskValidacao["descricao"].messages.required),
            data: string()
                .required(TaskValidacao["data"].messages.required),
            status: string()
                .required(TaskValidacao["status"].messages.required)
                .test(TaskValidacao["status"].nomeFuncao, TaskValidacao["status"].messages.test, TaskValidacao["status"].funcao)
        })
    }

    update() {
        return object().shape({
            id: string()
                .required(TaskValidacao["id"].messages.required),
            descricao: string()
                .required(TaskValidacao["descricao"].messages.required),
            data: string()
                .required(TaskValidacao["data"].messages.required),
            status: string()
                .required(TaskValidacao["status"].messages.required)
                .test(TaskValidacao["status"].nomeFuncao, TaskValidacao["status"].messages.test, TaskValidacao["status"].funcao)
        })
    }

    delete() {
        return object().shape({
            id: string().required(TaskValidacao["id"].messages.required)
        })
    }
}

const TaskValidacao = {
    "id": {
        nomeFuncao: 'checarIdValido',
        funcao: checarTipoString,
        messages: {
            required: 'id é obrigatório',
            test: 'id tem que ser string'
        }
    },
    "descricao": {
        nomeFuncao: 'checarDescricaoValida',
        funcao: checarTipoString,
        messages: {
            required: 'descricao é obrigatória',
            test: 'descricao tem que ser string'
        }
    },
    "data": {
        nomeFuncao: 'checarDataValida',
        funcao: checarTipoString,
        messages: {
            required: 'data é obrigatória',
            test: 'data tem que ser string'
        }
    },
    "status": {
        nomeFuncao: 'checarStatusValido',
        funcao: checkStatusValid,
        messages: {
            required: 'status é obrigatório',
            test: 'status válidos: completed | in_progress'
        }
    },
}