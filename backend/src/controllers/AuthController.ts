import { NextFunction, Request,Response } from "express";
import { AuthServices } from "../services/AuthServices";
import { AppError } from "../utils/appError";

const authService=new AuthServices();

export class AuthController{
    static async register(req:Request,res:Response,next:NextFunction){
        try{
            const result = await authService.register(req.body);
             res.status(201).json(result);
        }catch (error){
             res.status(400).json({err: (error as Error).message});
        }       
    }
    static async login(req:Request,res:Response,next:NextFunction){
        try{
            
            const result = await authService.login(req.body);
             res.status(200).json(result);
        }catch (error){
             //res.status(401).json({err: (error as Error).message});
            next(new AppError((error as Error).message,500))
        } 
    }

}

function next(arg0: AppError) {
    throw new Error("Function not implemented.");
}
