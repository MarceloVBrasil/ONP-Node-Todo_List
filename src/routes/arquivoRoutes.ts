import { Router } from "express"
import multer from "multer"

import storage from "../utils/storage"
import ArquivoHandler from "../utils/arquivo"

const arquivoRoutes = Router()
const upload = multer({ storage })

arquivoRoutes.route("/")
    .post(upload.single("file"), ArquivoHandler.receberArquivo)


export default arquivoRoutes