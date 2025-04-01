import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsPositive, Min } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

export class BidDTO{
    
    @IsNumber()
    @Min(100,{message:"Bid Amount must be greater then 100"})
    amount:number;

    @IsDate()
    @IsNotEmpty({message:"Bid time is requried"})
    bidTime:Date;
     

    @IsDate()
    @IsNotEmpty({message:"Bid time is required"})
    auctionId:number;

    
}