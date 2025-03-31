import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";
import { AuctionEntity } from "./AuctionEntity";

 @Entity("Bidder5")
 export class Bid{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("decimal",{precision:10,scale:2})
    amount:number;

    @Column({type:"timestamp"})
    bidTime:Date;

    @ManyToOne(()=>user,(user)=>user.bids)
    bidder:user;

    @ManyToOne(()=>AuctionEntity,(auction)=>auction.bids)
    auction:AuctionEntity;
 }