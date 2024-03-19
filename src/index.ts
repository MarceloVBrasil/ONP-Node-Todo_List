import express from "express"
import cors from "cors"

import taskRoutes from "./routes/taskRoutes"
import arquivoRoutes from "./routes/arquivoRoutes"

const server = express()

server.use(express.json())
server.use(cors())

server.use("/task", taskRoutes)
server.use("/arquivo", arquivoRoutes)

server.listen(3000, () => console.log("server is running on port 3000"))