
import { io } from "..";
import { AppDataSource } from "../config/database";
import { CreateDTO } from "../dtos/AuctionDTO";
import { AuctionEntity } from "../entities/AuctionEntity";
import { AuctionRepositories } from "../Repositories/AuctionRepositories";

export class AuctionService {
  auctionRepository = AppDataSource.getRepository(AuctionEntity);
  async createAuction(auctionData: CreateDTO) {
    const auction = AuctionRepositories.create(auctionData);
    await AuctionRepositories.save(auction);
    return { message: "auction created sucessfully" };
  }

  async getAllAuctions() {
    try {
      // Fetch all auctions
      return await this.auctionRepository.find();
    } catch (error) {
      throw new Error("Error retrieving auctions: ");
    }
  }
  async getAuctionById(id: number) {
    return await AuctionRepositories.findOne(
      { where: { id } });

  }
  async deleteAuctionById(id: number) {
    return await AuctionRepositories.delete(
      { id }
    );
  }
  async updateAuction(id: number, updateData: Partial<CreateDTO>) {
    const auction = await AuctionRepositories.findOne({ where: { id } });
    if (!auction) throw new Error("Auction not found");

    Object.assign(auction, updateData);
    await AuctionRepositories.save(auction);
    return auction;
  }


  async endAuction(auctionId: number) {
    const auction = await this.auctionRepository.findOne({
      where: { id: auctionId },
      relations: ["bids", "bids.bidder"],
    });

    if (!auction) throw new Error("Auction not found");

    if (auction.bids.length === 0) {
      io.emit("auctionEnded", { auctionId, message: "No bids placed" });
      return { message: "Auction ended but no bids were placed" };
    }

    // Find highest bidder safely
    const highestBid = auction.bids.reduce((max, bid) => (bid.amount > max.amount ? bid : max), auction.bids[0]);
    setTimeout(() => {
      console.log("Emitting auctionEnded event...");
      io.emit("auctionEnded", {
        auctionId,
        winner: highestBid.bidder.id,
        amount: highestBid.amount,
      });
    }, 5000);
  
      if (!highestBid) {
      io.emit("auctionEnded", { auctionId, message: "No valid bids placed" });
      return { message: "Auction ended without a valid winning bid" };
    }

    io.emit("auctionEnded", {
      auctionId,
      winner: highestBid.bidder.id,
      amount: highestBid.amount,
    });
    console.log("Auction Ended event emitted:", auctionId);

    return { message: "Auction ended successfully", winner: highestBid.bidder.id };
  }

} 