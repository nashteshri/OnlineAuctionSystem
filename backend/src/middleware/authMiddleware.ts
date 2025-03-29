import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { user } from "../entities/user";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.headers);
    
    const token = req.headers["authorization"]!;
    // console.log(token);
    
    if (!token) {
        res.status(401).json({ message: "Access Denied" });
    }
    try {
        const verified = Jwt.verify(token, process.env.JWT_SECRET as string);
        const role = "admin";
        // console.log(verified);
        (req as any).user = verified;
        if(role == (req as any).user.role)
            next();//pass the controll to the next middleware ?router handler
        else{
            res.status(401).json({ message: "you are not admin" });
        }
    } catch (error) {
        res.status(400).json({ message: "invalid token" })
    }



}