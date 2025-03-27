import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";
@Entity('Auction_create')
export class AuctionEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tile:string;

    @Column()
    description:string;

    @Column()
    startPrice:string;

    @Column()
    startTime:Date;

    @Column()
    endTime:Date;
    
    @Column()
    category:string;

    @ManyToOne (()=>user,(user)=>user.auctions)
    seller:user;
}

