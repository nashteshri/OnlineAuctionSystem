
import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    res.status(500).json({
        status: 'error',
        message: "Something Went Wrong !!!"
    });
    next()
}