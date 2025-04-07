import { Request, Response } from "express";
import { AuctionService } from "../services/AuctionService";
import { isInstance } from "class-validator";
import { CreateDTO } from "../dtos/AuctionDTO";

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
            console.log("This is get all acuction",auctions);
            
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
            console.log(auctions);
            
            if(auctions.affected === 0) res.status(404).json({message:"Auction not found"})
                res.status(201).json(auctions);
        } catch (error) {
            res.status(500).json({ message: "error occured at getting by id" })

        }
    }
    static async updateAuction(req:Request,res:Response){
        try{
            const auctionId = Number(req.params.id);
            const auction = await auctionservices.updateAuction(auctionId,req.body);
            if(!auction){
                res.status(404).json({message:"Auction not found"});
            }
            res.status(200).json({message:"auction updated succesfully",auction:auction});
        } catch (error){
            res.status(400).json({message:(error as Error).message});
        }
    }

    static async endAuction(req: Request, res: Response) {
        try {
            const { auctionId } = req.body;
            if (!auctionId) {
                res.status(400).json({ message: "Auction ID is required" });
            }

            const result = await auctionservices.endAuction(auctionId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}