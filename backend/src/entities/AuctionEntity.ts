import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";
@Entity('Auction_create3')
export class AuctionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    startPrice: number;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @Column()
    category: string;

    @ManyToOne(() => user, (user) => user.auctions)
    seller: user;
}

