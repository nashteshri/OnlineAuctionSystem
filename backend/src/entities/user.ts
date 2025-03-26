import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity("Auction_users")
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
}