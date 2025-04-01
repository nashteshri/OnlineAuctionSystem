import { AppDataSource } from "../config/database";
import { BidDTO } from "../dtos/BidDTO";
import { Bid } from "../entities/Bid";

export const BidRepositories=AppDataSource.getRepository(Bid).extend({
    async findBidsByUser(userId:number){
        return this.createQueryBuilder("bid")
        .leftJoinAndSelect("bid.auction","auction")//fetching auction details
        .where("bid.bidderId=:userId",{userId})//filter by user
        .orderBy("bid.bidTime","DESC")//sort by latest bids
        .getMany();

    }
});