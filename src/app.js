import express, { urlencoded } from "express";
import router from "./routes/router.js";

export const app = express();

app.use(express.static("public"));
app.use(urlencoded({ extended: true }));

app.use(router);
