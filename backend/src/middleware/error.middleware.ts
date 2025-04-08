// import { Request, Response, NextFunction } from "express";

// export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
//     console.error("Error Occured at backend :", err);  // for debugging purpose

//     const statusCode = err.statusCode || 500;
//     const message = err.message || "Internal Server Error";

//     res.status(statusCode).json({
//         success: error,
//         message: message
//     }); 
// };
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
}