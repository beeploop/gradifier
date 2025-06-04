import { Router } from "express";
import { indexRouter } from "./index/index.route.js";
import { healthRouter } from "./health/health.route.js";
import { authRouter } from "./auth/auth.route.js";
import { appRouter } from "./app/app.route.js";

const router = Router();

router.use("/", indexRouter);

router.use("/health", healthRouter);

router.use("/auth", authRouter);

router.use("/app", appRouter);

export default router;
