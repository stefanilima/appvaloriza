import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
) {
    // Receber o token
    const authToken = request.headers.authorization

    // Validar se o token chegou
    if (!authToken) {
        return response.status(401).end();
    }

    // Validar se o token é valido
    const [, token] = authToken.split(" ");

    try {
        const decode = verify(token, "acbe660add6be01100bae347a3b9fef8");
        console.log(decode);
    } catch(err) {
        return response.status(401).end();
    }

    // Recuperar informações do usuário

    return next();
}