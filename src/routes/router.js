import { Router } from "express";
import { indexRouter } from "./index/index.route.js";
import { healthRouter } from "./health/health.route.js";

const router = Router();

router.use("/", indexRouter);
router.use("/health", healthRouter);

export default router;
