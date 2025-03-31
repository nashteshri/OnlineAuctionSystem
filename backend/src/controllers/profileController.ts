import { changePasswordDTO } from "../dtos/profileDTO";
import { profileService } from "../services/ProfileService";
import { Request,Response } from "express";
const ProfileService = new profileService();
export class ProfileController {
    static async getProfile(req: Request, res: Response) {
        try {
            const userId =(req as any).user.id;
            const profile = await ProfileService.getProfile(userId);
            res.status(200).json(profile);
        } catch (error){
            res.status(400).json({message:(error as Error["message"])});
        }
    }
    static async changePassword(req:Request,res:Response){
        try{
            const userId = (req as any ).user.id;
            const passwordData:changePasswordDTO=req.body;
            const result = await ProfileService.changepassword(userId,passwordData);
            res.status(200).json(result);
        }catch(error){
            res.status(400).json({message:(error as Error ).message});
        }
    }
}