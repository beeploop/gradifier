import { Router } from "express";
import { HealthController } from "../../controller/health/health.controller.js";

export const healthRouter = Router();

const controller = new HealthController();

healthRouter.get("/", controller.execute);
