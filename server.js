import express from "express";
import cors from "cors";
import dotenv from "dotenv";




dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

import { authMiddleware } from "./middleware/authMiddleware.js";


import authRoutes from "./routes/authRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import monthlyBalanceRoutes from "./routes/monthlyBalanceRoutes.js";



app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/stats", statsRoutes);
app.use("/history", historyRoutes);
app.use("/budget", budgetRoutes);
app.use("/profile", profileRoutes);
app.use("/ai", aiRoutes);
app.use("/monthly-balance", monthlyBalanceRoutes);


app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
