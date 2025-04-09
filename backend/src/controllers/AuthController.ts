import { Request,Response } from "express";
import { AuthServices } from "../services/AuthServices";

const authService=new AuthServices();

export class AuthController{
    static async register(req:Request,res:Response){
        try{
            const result = await authService.register(req.body);
             res.status(201).json(result);
        }catch (error){
            res.status((error as any).statusCode).json({message: (error as Error).message});
        }       
    }
    static async login(req:Request,res:Response){
        try{
            console.log(req.body.password);
            
            const result = await authService.login(req.body);
             res.status(200).json(result);
        }catch (error){
            console.log("inside login :",error);
            
             res.status((error as any).statusCode).json({message: (error as Error).message});
        } 
    }

}