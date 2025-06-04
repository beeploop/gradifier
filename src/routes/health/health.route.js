import { Router } from "express";
import { HealthController } from "../../controllers/health/health.controller.js";

export const healthRouter = Router();

const controller = new HealthController();

healthRouter.get("/", controller.execute);
