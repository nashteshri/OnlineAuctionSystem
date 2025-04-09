import { AppDataSource } from "../config/database";
import { user } from "../entities/user";
//setting up a User Repository using TypeORM, which allows you to perform database operations on the user entity.
export const UserRepositories=AppDataSource.getRepository(user);