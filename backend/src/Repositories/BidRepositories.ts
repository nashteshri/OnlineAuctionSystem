import { AppDataSource } from "../config/database";
import { BidDTO } from "../dtos/BidDTO";

export const BidRepositories=AppDataSource.getRepository(BidDTO);