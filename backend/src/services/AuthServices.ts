

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepositories } from "../Repositories/UserRepositories";
import { RegisterDTO } from "../dtos/userDTO";
import { LoginDTO } from "../dtos/userDTO";
import 'dotenv/config'

export class AuthServices{
    async register(userData:RegisterDTO){
        const existingUser = await UserRepositories.findOne({where:{email:userData.email}});
        if (existingUser) throw new Error("user already exist ");//avoid th e dulpicacy of registration by mail
        const hasedPassword = await bcrypt.hash(userData.password,10);
        const user = UserRepositories.create({...userData,password:hasedPassword});
        await UserRepositories.save(user);

        return {message:"user registarted successfully"};
    }
    async login (loginData:LoginDTO){
        
        const user = await UserRepositories.findOne({where:{email:loginData.email}});
        if (!user) throw Error("Invalid Password or Email Please check once");
        const isValidPassword= await bcrypt.compare(loginData.password, user.password);
        if(!isValidPassword) throw Error("Invalid Password or Email Please check once");
        const token =  jwt.sign({userId:user.id,email:user.email},process.env.JWT_SECRET!,{expiresIn: '1h'});
        
        console.log(token);
        return{token,user};
    }
}