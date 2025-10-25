import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import job from "./lib/cron.js";


import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

import { connectDB } from "./lib/db.js";
import bodyParser from "body-parser"

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config()
// job.start();
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}))
app.use(bodyParser.json())
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});