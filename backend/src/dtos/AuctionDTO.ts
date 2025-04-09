import { IsDate, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateDTO{
    @IsString()
    @IsNotEmpty({message:"title is required"})
    title:string;
    @IsString()
    @IsNotEmpty({message:"description is required"})
    description:string;
    @IsNumber()
    @Min(100,{message:"Startuing price must be at least 100"})
    starPrice:number;
    @IsDate()
    @IsNotEmpty({message:"startTime is required"})
    startTime:Date;
    @IsDate()
    @IsNotEmpty({message:"End Time is required"})
    endTime:Date;
    @IsString()
    @IsNotEmpty({message:"category is required"})
    category:string;

}