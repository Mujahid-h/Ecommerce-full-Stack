import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// config env
dotenv.config();

// databse connection
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

// rest api's
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ECommerce app tutorials</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// listen app
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgWhite
  );
});
