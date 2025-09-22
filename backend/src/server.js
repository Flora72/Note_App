import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import ratelimit from "../config/upstash.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// middleware
app.use(express.json());
app.use(ratelimit)
app.use("/api/notes", notesRoutes );

app.listen(3000, () => {
  console.log("Server started on port:", PORT);
});
