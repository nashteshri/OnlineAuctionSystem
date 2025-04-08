import express from "express";
import { authMiddleware, authMiddleware2 } from "../middleware/authMiddleware";
import { ProfileController } from "../controllers/profileController";
import { BidController } from "../controllers/BidController";

const bidrouter=express.Router();
bidrouter.post("/",authMiddleware2,BidController.createBid);
bidrouter.get("/",authMiddleware2,BidController.getUserBids);
bidrouter.get("/latest/:auctionId", BidController.getLatestBid);
export default bidrouter;