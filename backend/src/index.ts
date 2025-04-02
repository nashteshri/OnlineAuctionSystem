import express from "express";
import { AppDataSource } from "./config/database";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/auth.routes";
import auctionrouter from "./routes/Auction.routes";
import profilerouter from "./routes/profile.routes";
import bidrouter from "./routes/Bid.routes";
import { Server } from "socket.io";
import {createServer} from "http"
const app = express();
const server = createServer(app);//
const io= new Server(server!,{
    cors:{origin:"http://localhost:4200"}//connecting to angular
});


//listen to client connection
io.on("connection",(socket)=>{
    console.log("user connected:",socket.id);
    socket.on("disconnect",()=>{
        console.log("User disconnected:",socket.id);
    });
});

const PORT = 3000;
app.use(express.json());                                                       
app.use(cors());
app.use("/api",router);
app.use("/api/auction",auctionrouter);
app.use("/api/profile",profilerouter);
app.use("/api/bid",bidrouter);
AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully using web socket!");
        server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => console.error("Database connection failed:", error));

export {io};