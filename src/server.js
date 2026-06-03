import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

const gitData = {
  login: "Fahadplusplus",
  id: 186282082,
  avatar_url: "https://avatars.githubusercontent.com/u/186282082?v=4",
  html_url: "https://github.com/Fahadplusplus",
  type: "User",
  public_repos: 20,
  followers: 2,
  following: 3,
  created_at: "2024-10-25T09:57:06Z",
  updated_at: "2026-05-12T10:59:43Z"
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/user", (req, res) => {
  res.json(gitData);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});