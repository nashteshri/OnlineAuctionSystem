import express from "express";
import { AuctionController } from "../controllers/AuctionController";
import { authMiddleware } from "../middleware/authMiddleware";
const auctionrouter = express.Router();

auctionrouter.post("/create",authMiddleware,AuctionController.createAuction);
auctionrouter.get("/",AuctionController.getAllAuction);
// auctionrouter.get("/",authMiddleware,AuctionController.getAllAuction);
auctionrouter.get("/:id",AuctionController.getAuctionById);
auctionrouter.delete("/delete/:id",authMiddleware, AuctionController.deleteAuctionById);
auctionrouter.patch("/update/:id",authMiddleware,AuctionController.updateAuction);

export default auctionrouter;

