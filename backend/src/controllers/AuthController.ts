import { Request,Response } from "express";
import { AuthServices } from "../services/AuthServices";

const authService=new AuthServices();

export class AuthController{
    static async register(req:Request,res:Response){
        try{
            const result = await authService.register(req.body);
             res.status(201).json(result);
        }catch (error){
             res.status(400).json({message:"error occured at 1st"});
        }       
    }
    static async login(req:Request,res:Response){
        try{
            const result = await authService.login(req.body);
             res.status(200).json(result);
        }catch (error){
             res.status(401).json({err: (error as Error).message});
        } 
    }

}