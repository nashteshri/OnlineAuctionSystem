import { AppDataSource } from "../config/database";
import { AuctionEntity } from "../entities/AuctionEntity";
export const AuctionRepositories=AppDataSource.getRepository(AuctionEntity);