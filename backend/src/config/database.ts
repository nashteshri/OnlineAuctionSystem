import "reflect-metadata"
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({

    type: "mssql", // Using SQL Server
    host: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    username: "j2",
    password: "123456",
    database: "JIBE_Main_Training",
    synchronize: true, // Auto-create tables (for development)
    logging: false,
    entities: ["dist/entities/*.js"], // Path to entity files
    options: {
        encrypt: false, // Disable SSL for local development
        trustServerCertificate: true
    }
})
// export const AppDataSource = new DataSource({
//     type: "mysql", // Using MySQL as the database
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "root@123",
//     database: "Auction",
//     synchronize: false, // Auto-create tables (use only in development)
//     logging: true,
//     entities: [user, AuctionEntity,Bid], // Directly pass entity classes
// });