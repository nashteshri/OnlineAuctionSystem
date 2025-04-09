export class AppError extends Error{
    statusCode: number;
    isOperational: boolean;
 
    constructor(message: string, statusCode: number){
        super(message);
        console.log(message,statusCode);
        
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
 