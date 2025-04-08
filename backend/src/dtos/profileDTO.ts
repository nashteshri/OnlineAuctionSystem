import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";

export interface profileDTO{
    id:number;
    name:string;
    email:string;
    
}

export interface AllprofileDTO{
    id: number;
    name: string;
    email: string;
    role: string;
    mobilenumber: string;
    gender: string;
    address: string;
    city: string;
    country: string;
}

export interface changePasswordDTO{

    oldPassword:string;

    newPassword:string;
}

export interface biddingHistory{
    auctionTitle:string;
    amount:number;
    bidTime:Date
}