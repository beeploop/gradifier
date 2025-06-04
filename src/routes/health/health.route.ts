import { Router } from "express";
import { HealthController } from "../../controllers/health/health.controller";

export const healthRouter = Router();

const controller = new HealthController();

healthRouter.get("/", controller.checkHealth);
