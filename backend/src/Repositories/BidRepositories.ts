import { AppDataSource } from "../config/database";
import { BidDTO } from "../dtos/BidDTO";
import { Bid } from "../entities/Bid";

export const BidRepositories=AppDataSource.getRepository(Bid).extend({
    async findBidsByUser(userId:number){
        return this.createQueryBuilder("bid")
        .leftJoinAndSelect("bid.auction","auction")//left join to get the  auction details
        .where("bid.bidderId=:userId",{userId})//give the bid for specific user by using its id 
        .orderBy("bid.bidTime","DESC")//sorting using latets time
        .getMany();

    }
});