import { Router } from "express";
import { IndexController } from "../../controllers/index/index.controller.js";

export const indexRouter = Router();

const controller = new IndexController();

indexRouter.get("/", controller.execute);
