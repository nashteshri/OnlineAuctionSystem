import express from "express";
import { ProfileController } from "../controllers/profileController";
import { authMiddleware, authMiddleware2 } from "../middleware/authMiddleware";
const profilerouter = express.Router();
profilerouter.get("/",authMiddleware2,ProfileController.getProfile);
profilerouter.get("/All",ProfileController.getAllProfiles);
profilerouter.patch("/change",authMiddleware2,ProfileController.changePassword);
export default profilerouter;