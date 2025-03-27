import express from "express";
import { AppDataSource } from "./config/database";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/auth.routes";
import auctionrouter from "./routes/Auction.routes";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use("/api",router);
app.use("/api/auction",auctionrouter);

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully!");
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => console.error("Database connection failed:", error));
