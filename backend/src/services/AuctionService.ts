
import { AppDataSource } from "../config/database";
import { CreateDTO } from "../dtos/AuctionDTO";
import { AuctionEntity } from "../entities/AuctionEntity";
import { AuctionRepositories } from "../Repositories/AuctionRepositories";

export class AuctionService{
    
    async createAuction(auctionData:CreateDTO){
        const auction = AuctionRepositories.create(auctionData);
        await AuctionRepositories.save(auction);
        return auction;
    }

    async getAllAuctions() {
        try {
          const auctionRepository = AppDataSource.getRepository(AuctionEntity);
    
          // Fetch all auctions with seller relationship
          return await auctionRepository.find({ relations: ["seller"] });
        } catch (error) {
          throw new Error("Error retrieving auctions: ");
        }
      }
    async getAuctionById(id:number){
        return await AuctionRepositories.findOne(
            {where:{id}, relations: ["seller"]});
        
    }
    async deleteAuctionById(id:number){
      return await AuctionRepositories.delete(
        {id}
      );
    }

}