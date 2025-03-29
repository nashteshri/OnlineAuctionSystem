import { Request, Response } from "express";
import { AuctionService } from "../services/AuctionService";

const auctionservices = new AuctionService();
export class AuctionController {
    static async createAuction(req: Request, res: Response) {
        try {
            const auctions = await auctionservices.createAuction(req.body);
            res.status(201).json(auctions);
        } catch (error) {
            res.status(400).json({ message: "error occured at creating" })

        }
    }
    static async getAllAuction(req:Request,res:Response){
        try {
            const auctions = await auctionservices.getAllAuctions();
            res.status(201).json(auctions);
        } catch (error) {
            res.status(400).json({ message: "error occured at getting all" })

        }
    }
    static async getAuctionById(req:Request,res:Response){
        try {
            const auctions = await auctionservices.getAuctionById(Number(req.params.id));
            if(!auctions) res.status(404).json({message:"Auction not found"})
            res.status(201).json(auctions);
        } catch (error) {
            res.status(500).json({ message: "error occured at getting by id" })

        }
    }
    static async deleteAuctionById(req:Request,res:Response){
        try{
            const auctions =await auctionservices.deleteAuctionById(Number(req.params.id));
            if(!auctions) res.status(404).json({message:"Auction not found"})
                res.status(201).json(auctions);
        } catch (error) {
            res.status(500).json({ message: "error occured at getting by id" })

        }
    }
}