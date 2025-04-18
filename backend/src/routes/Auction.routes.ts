import express from "express";
import { AuctionController } from "../controllers/AuctionController";
import { authMiddleware } from "../middleware/authMiddleware";
import { validateDTO } from "../middleware/validationMiddleware";
import { CreateDTO } from "../dtos/AuctionDTO";
const auctionrouter = express.Router();

auctionrouter.post("/create",authMiddleware,AuctionController.createAuction);
auctionrouter.get("/",AuctionController.getAllAuction);

auctionrouter.get("/:id",AuctionController.getAuctionById);
auctionrouter.delete("/delete/:id",authMiddleware, AuctionController.deleteAuctionById);
auctionrouter.patch("/update/:id",authMiddleware,AuctionController.updateAuction);
auctionrouter.post("/end/", AuctionController.endAuction);

export default auctionrouter;

