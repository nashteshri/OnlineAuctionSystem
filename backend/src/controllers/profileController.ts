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

    static async getAllProfiles(req: Request, res: Response): Promise<void> {
        try {
            const users = await ProfileService.getAllProfiles();
            res.status(200).json(users); // Send the list of all user profiles as the response
        } catch (error: any) {
            res.status(400).json({ message: error.message }); // Handle errors
        }
    }


    static async changePassword(req:Request,res:Response){
        try{
            //throw new Error ("This is error profile");
            const userId = (req as any ).user.id;
            const passwordData:changePasswordDTO=req.body;
            const result = await ProfileService.changepassword(userId,passwordData);
            res.status(200).json(result);
        }catch(error){
            res.status(400).json({message:(error as Error ).message});
        }
    }


}