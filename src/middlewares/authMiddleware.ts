import { Response, Request, NextFunction } from "express";

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // Executar as funcoes necessarias
    if (req.headers.authorization) {
        next()
    }
    res.json({ erro: "Usuário não autenticado" })
}