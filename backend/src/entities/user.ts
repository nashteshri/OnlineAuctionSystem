import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { AuctionEntity } from "./AuctionEntity";
import { Bid } from "./Bid";
@Entity("Auction_users5")
export class user{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50})
    name:string;

    @Column({default:"user"})
    role:"user"|"admin";

    @Column({unique:true,length:100})
    email: string;

    @Column({length:255})
    password:string;

    @Column({length:15})
    mobilenumber:string;

    @Column({length:10})
    gender:string;

    @Column({length:255})
    address:string;

    @Column({length:50})
    city:string;
    
    @Column({length:50})
    country:string;

    @OneToMany (()=>AuctionEntity,(AuctionEntity)=>AuctionEntity.seller)
    auctions:AuctionEntity[];

    @OneToMany(()=>Bid,(bid) =>bid.bidder)
    bids:Bid[];
}