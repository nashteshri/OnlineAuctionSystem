import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Error Occured at backend :", err);  // for debugging purpose

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message: message
    });
};