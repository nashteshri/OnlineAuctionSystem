import { biddingHistory, changePasswordDTO, profileDTO } from "../dtos/profileDTO";
import { UserRepositories } from "../Repositories/UserRepositories";
import bcrypt from "bcrypt";
import { AppDataSource } from "../config/database";
import { BidRepositories } from "../Repositories/BidRepositories";
export class profileService {
    async getProfile(userId: number): Promise<profileDTO> {
        const user = await UserRepositories.findOne({
            where: { id: userId },
            select: ["id", "name", "email"]
        });
        if (!user) {
            throw new Error("user not found");
            console.log("user not found");
        }
        return { id: user.id, name: user.name, email: user.email };
    }

    //change password
    async changepassword(userId: number, passwordData: changePasswordDTO) {
        const user = await UserRepositories.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error("user not found");
        }
        const isMatch = await bcrypt.compare(passwordData.oldPassword, user.password);
        if (!isMatch) {
            throw new Error("incorrect Old password");
        }
        user.password = await bcrypt.hash(passwordData.newPassword, 10);
        await UserRepositories.save(user);

        return {message:"password updated succesfully"}

    }

}