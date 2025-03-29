import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { AuctionEntity } from "./AuctionEntity";
@Entity("Auction_users3")
export class user{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    email: string;

    @Column()
    password:string;

    @Column()
    mobilenumber:string;

    @Column()
    gender:string;

    @Column()
    address:string;

    @Column()
    city:string;
    
    @Column()
    country:string;

    @OneToMany (()=>AuctionEntity,(AuctionEntity)=>AuctionEntity.seller)
    auctions:AuctionEntity[];
}