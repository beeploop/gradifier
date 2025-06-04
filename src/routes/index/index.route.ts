import { Router } from "express";
import { IndexController } from "../../controllers/index/index.controller";

export const indexRouter = Router();

const controller = new IndexController();

indexRouter.get("/", controller.renderIndex);
