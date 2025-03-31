import express from "express";
import { ProfileController } from "../controllers/profileController";
import { authMiddleware, authMiddleware2 } from "../middleware/authMiddleware";
// import { authMiddleware2} from "../middleware/authmiddele2";
const profilerouter = express.Router();
profilerouter.get("/",authMiddleware2,ProfileController.getProfile);
profilerouter.patch("/change",authMiddleware2,ProfileController.changePassword);
export default profilerouter;