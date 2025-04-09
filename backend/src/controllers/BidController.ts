import { validate } from "class-validator";
import { BidDTO } from "../dtos/BidDTO";
import { BidService } from "../services/BidService";
import { Request, Response } from "express";

const bidservice = new BidService();
export class BidController {
    static async createBid(req: Request, res: Response) {
        try {
            const userId = (req as any).user.id;//getting user id from auth middleware
            const bidDate: BidDTO = req.body;

            // const errors = await validate(bidDate);
            // if (errors.length > 0) {
            //     res.status(400).json({ message: "validtion failed", errors });
            // }
            const result = await bidservice.placeBid(userId, bidDate);
            res.status(201).json(result);

        } catch (error) {
            res.status(400).json({ message: (error as Error).message });

        }
    }

    static async getUserBids(req: Request, res: Response) {
        try {
            const userId = (req as any).user.id;
            const bids = await bidservice.getUserBids(userId);
            res.status(200).json(bids);

        } catch (error) {
            res.status(500).json({
                message: "Error fetching user bids",
                error: (error as Error).message
            });
        }
    }
    static async getLatestBid(req: Request, res: Response) {
        try {
            const auctionId = Number(req.params.auctionId);

            if (!auctionId) {
                res.status(400).json({ message: "Auction ID is required" });
            }

            const latestBid = await bidservice.getLatestBid(auctionId);
            res.status(200).json(latestBid);
        } catch (error) {
            res.status(400).json({
                message: "Error fetching latest bid",
                error: (error as Error).message,
            });
        }
    }
}