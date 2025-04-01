import { BidDTO } from "../dtos/BidDTO";
import { AuctionRepositories } from "../Repositories/AuctionRepositories";
import { BidRepositories } from "../Repositories/BidRepositories";


export class BidService{
    async placeBid(userId:number,bidDate:BidDTO){
        const {amount ,auctionId} = bidDate;
        
        //checking if auction exists
        const auction = await AuctionRepositories.findOne({
            where:{id:auctionId},
            relations:["bids"]
        });
        if(!auction){
            throw new Error ("Aucttion not found");
        }

        //check if auction is still active
        const now =new Date();
        if(auction.endTime && now > auction.endTime){
            throw new Error ("Auctionhas already ended");
        }

        //get last highest bid
        const allBids = await BidRepositories 
        .createQueryBuilder('bid')
        .where("bid.auctionId=:auctionId",{auctionId})
        .orderBy("bid.amount","DESC")
        .getMany();
        const highestBid = allBids.length? allBids[0].amount : auction.startPrice;
        //ensure bid is higher then last bid
        if(amount <= highestBid){
            throw new Error (`your bid must be grater than ₹${highestBid}`);
        }

        //create and save bid 
        const newBid = BidRepositories.create({
            amount,
            bidder:{id:userId},//linking to user
            auction,
            bidTime:new Date()
        });
        await BidRepositories.save(newBid);
        return {message:"Bid placed succesfully!"};
    }

    async getUserBids(userId:number){
        return await BidRepositories.findBidsByUser(userId); //using query builder from repository
        
    }
}