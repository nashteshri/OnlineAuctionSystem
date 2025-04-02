import { IsEmail, IsMobilePhone, IsNotEmpty, IsString, MinLength } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

export class RegisterDTO{
    @IsString()
    @IsNotEmpty({message:"name is required"})
    name: string;
    @IsEmail({},{message:"Invaild email format"})
    email:string;
    @IsString()
    @MinLength(6,{message:"password must be at least 6 charasters long"})
    password:string;

    //@IsMobilePhone("any",{},{message:"inavild mobile number"})
    mobileNumber:string;
    @IsString()
    @IsNotEmpty({message:"gender is required"})
    gender:string;
    @IsString()
    @IsNotEmpty({message:"address is required"})
    address:string;
    @IsString()
    @IsNotEmpty({message:"city is required"})
    city:string;
    @IsString()
    @IsNotEmpty({message:"country is required"})
    country:string;
}

export class LoginDTO{
    @IsString()
    @IsNotEmpty({message:"email is required"})
    email:string;
    @IsString()
    @MinLength(6,{message:"password must be at least 6 charasters long"})
    password:string;
}