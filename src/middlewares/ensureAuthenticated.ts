import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

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
        const { sub } = verify(token, "acbe660add6be01100bae347a3b9fef8") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch(err) {
        return response.status(401).end();
    }

    return next();
}