

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepositories } from "../Repositories/UserRepositories";
import { RegisterDTO } from "../dtos/userDTO";
import { LoginDTO } from "../dtos/userDTO";
import 'dotenv/config'
import { jwtDecode } from "jwt-decode";
import { AppError } from "../utils/appError";

export class AuthServices{
    async register(userData:RegisterDTO){
        const existingUser = await UserRepositories.findOne({where:{email:userData.email}});
        if (existingUser) throw new AppError("user already exist",404);//avoid th e dulpicacy of registration by mail
        const hasedPassword = await bcrypt.hash(userData.password,10);
        const user = UserRepositories.create({...userData,password:hasedPassword});
        await UserRepositories.save(user);

        return {message:"user registarted successfully"};
    }
    async login (loginData:LoginDTO){

        console.log("Password",loginData);
        
        const user:any = await UserRepositories.findOne({where:{email:loginData.email}});
        if (!user) throw new AppError("Invalid Password or Email Please check once",404);
        const isValidPassword= await bcrypt.compare(loginData?.password, user?.password);
        if(!isValidPassword) throw new AppError("Invalid Password or Email Please check once",409);
        const token =  jwt.sign({id:user.id,email:user.email,role:user.role},process.env.JWT_SECRET!,{expiresIn: '1h'});
        
        console.log(token);
        return{token,user};
    }


}