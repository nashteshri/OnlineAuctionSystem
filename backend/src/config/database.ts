import "reflect-metadata"
import { DataSource } from "typeorm";
import { user } from "../entities/user";
export const AppDataSource = new DataSource({

    type: "mssql", // Using SQL Server
    host: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    username: "j2",
    password: "123456",
    database: "JIBE_Main_Training",
    synchronize: false, // Auto-create tables (for development)
    logging: false,
    entities: [user], // Path to entity files
    options: {
        encrypt: false, // Disable SSL for local development
        trustServerCertificate: true
    }
})
