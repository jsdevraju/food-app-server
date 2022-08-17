// import all lib
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { config } from "dotenv";
import errorHandler from "./middleware/error";

// Environment Variable Configuration
config();

// Define Application Entry point app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Api Working");
});

// Routes
import auth from './routes/auth'
import categories from './routes/categories'
import resultant from './routes/restaurant'
import dish from './routes/dish'


// Routes Middleware
app.use("/api/v1/auth", auth);
app.use("/api/v1/categories", categories);
app.use("/api/v1/resultant", resultant);
app.use("/api/v1/dish", dish);

// Middleware Error Handler
app.use(errorHandler);

export default app;