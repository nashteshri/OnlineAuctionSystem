import { AppDataSource } from "../config/database";
import { user } from "../entities/user";

export const UserRepositories=AppDataSource.getRepository(user);