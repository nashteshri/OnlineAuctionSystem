import { AllprofileDTO, biddingHistory, changePasswordDTO, profileDTO } from "../dtos/profileDTO";
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

        }
        return { id: user.id, name: user.name, email: user.email };
    }
    //To get all user details
    async getAllProfiles(): Promise<AllprofileDTO[]> {
        const users = await UserRepositories.find(); // Retrieves all users
        if (!users.length) {
            throw new Error("No users found");
        }
        return users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            mobilenumber: user.mobilenumber,
            gender: user.gender,
            address: user.address,
            city: user.city,
            country: user.country
        }));
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

        return { message: "password updated succesfully" }

    }

}