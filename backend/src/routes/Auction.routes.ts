import express from "express";
import { AuctionController } from "../controllers/AuctionController";
const auctionrouter = express.Router();

auctionrouter.post("/",AuctionController.createAuction);
auctionrouter.get("/",AuctionController.getAllAuction);
auctionrouter.get("/:id",AuctionController.getAuctionById);

export default auctionrouter;

