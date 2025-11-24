import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// Correct CORS settings for Render + Netlify
app.use(cors({
  origin: ["https://stitchpix.netlify.app"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json({ limit: "20mb" }));

// Connect MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// IMPORTANT: Use Render port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);
