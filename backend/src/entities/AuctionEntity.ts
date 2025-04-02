import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";
import { Bid } from "./Bid";
@Entity('Auction_create5')
export class AuctionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    title: string;

    @Column({length:255})
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    startPrice: number;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @Column({length:50})
    category: string;

    @ManyToOne(() => user, (user) => user.auctions)
    seller: user;  //each auction has singl seller //we can remove this as we dont want the seller id as we want just to create the auction by admin
    
    @OneToMany(()=> Bid,(bid) =>bid.auction)
    bids:Bid[];
}

