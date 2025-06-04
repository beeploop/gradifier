import { Router } from "express";
import { indexRouter } from "./index/index.route";
import { healthRouter } from "./health/health.route";
import { authRouter } from "./auth/auth.route";
import { appRouter } from "./app/app.route";

const router = Router();

router.use("/", indexRouter);

router.use("/health", healthRouter);

router.use("/auth", authRouter);

router.use("/app", appRouter);

export default router;
