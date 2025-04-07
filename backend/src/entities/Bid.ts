import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { user } from "./user";
import { AuctionEntity } from "./AuctionEntity";

@Entity("Bidder5")
export class Bid {
   @PrimaryGeneratedColumn()
   id: number;

   @Column("decimal", { precision: 10, scale: 2 })
   amount: number;

   @ManyToOne(() => user, (user) => user.bids)
   bidder: user;

   //  @ManyToOne(()=>AuctionEntity,(auction)=>auction.bids)
   //  auction:AuctionEntity;
   @ManyToOne(() => AuctionEntity, (auction) => auction.bids, { onDelete: "CASCADE" })
   auction: AuctionEntity;



   @CreateDateColumn()
   bidTime: Date;
}

