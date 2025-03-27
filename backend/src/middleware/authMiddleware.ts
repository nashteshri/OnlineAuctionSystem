import { Request,Response,NextFunction } from "express";
import Jwt from "jsonwebtoken";
export const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const token = req.header("Authorization")?.split(" ")[1]!;
    if(!token){
         res.status(401).json({message:"Access Denied"});
    }
    try{
        const verified = Jwt.verify(token,process.env.JWT_SECRET as string);
        (req as any).user = verified;
        next();
    }catch(error){
        res.status(400).json({message:"invalid token"})
    }
}