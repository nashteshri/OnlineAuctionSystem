import { IsDate, IsNotEmpty, IsNumber, Min } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

export class BidDTO{
    @PrimaryGeneratedColumn()
    id:number;
    @IsNumber()
    @Min(100,{message:"Bid Amount must be greater then 100"})
    amount:number;

    @IsDate()
    @IsNotEmpty({message:"Bid time is requried"})
    bidTime:Date;

    
}