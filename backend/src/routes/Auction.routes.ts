import express from "express";
import { AuctionController } from "../controllers/AuctionController";
import { authMiddleware } from "../middleware/authMiddleware";
const auctionrouter = express.Router();

auctionrouter.post("/",authMiddleware,AuctionController.createAuction);
auctionrouter.get("/",authMiddleware,AuctionController.getAllAuction);
// auctionrouter.get("/",authMiddleware,AuctionController.getAllAuction);
auctionrouter.get("/:id",authMiddleware,AuctionController.getAuctionById);
auctionrouter.delete("/delete/:id",authMiddleware, AuctionController.deleteAuctionById);

export default auctionrouter;

