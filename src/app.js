import express, { urlencoded } from "express";
import { healthRouter } from "./routes/health/health.route.js";
import { indexRouter } from "./routes/index.route.js";

export const app = express();

app.use(urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/health", healthRouter);
