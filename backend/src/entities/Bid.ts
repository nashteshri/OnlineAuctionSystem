import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";
import { AuctionEntity } from "./AuctionEntity";

 @Entity("Bidder")
 export class Bid{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("decimal")
    amount:number;

    @Column("timestamp")
    bidTime:Date;

    @ManyToOne(()=>user,(user)=>user.bids)
    bidder:user;

    @ManyToOne(()=>AuctionEntity,(auction)=>auction.bids)
    auction:AuctionEntity;
 }