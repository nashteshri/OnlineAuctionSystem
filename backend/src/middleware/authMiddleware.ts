import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { user } from "../entities/user";
import { AuthRequest } from "../types/user.type";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.header("Authorization")!;
    console.log(token);
    console.log(req);
    
    
    if (!token) {
        res.status(401).json({ message: "Access Denied provied the token" });
    }
    try {
        const verified = Jwt.verify(token, process.env.JWT_SECRET as string);
        
        console.log(verified);
        (req as any).user = verified;
        console.log(user);
        const role = "admin";
        if(role == (req as any).user.role)
            next();//pass the controll to the next middleware or router handler
        else{
            res.status(401).json({ message: "you are not admin" });
        }
    } catch (error) {
        res.status(400).json({ message: "invalid token" })
    }
}
export const authMiddleware2 = (req: AuthRequest, res: Response, next: NextFunction) => {

    const token = req.header("Authorization")!;
    // console.log(token);

    if (!token) {
        res.status(401).json({ message: "Access Denied" });
    }
    try {
        const verified = Jwt.verify(token, process.env.JWT_SECRET as string);
        // const role = "admin";
        console.log(verified);
        req.user = verified;
        console.log(user);
        next();
    } catch (error) {
        res.status(400).json({ message: "invalid token" })
    }

}