import { Request, Response, NextFunction } from "express";

export function ensureAdmin(
    request: Request, 
    response: Response, 
    next: NextFunction
) {

    const { user_id } = request;
    console.log(user_id);

    // Verificar se usuario admin
    const admin = false;

    if(admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}