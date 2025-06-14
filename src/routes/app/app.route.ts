import { NextFunction, Request, Response, Router } from "express";
import { AppController } from "../../controllers/app/app.controller";
import { ensureLoggedIn } from "../../middlewares/auth.middleware";
import { profileRouter } from "../profile/profile.route";
import { FarmRepository } from "../../repositories/farm.repository";
import { HarvestRepository } from "../../repositories/harvest.repository";

export const appRouter = Router();

const farmRepository = new FarmRepository();
const harvestRepository = new HarvestRepository();

const controller = new AppController(farmRepository, harvestRepository);

appRouter.use(ensureLoggedIn);
appRouter.use((_req: Request, res: Response, next: NextFunction) => {
    res.locals.layout = "layouts/with_sidebar";
    next();
});

appRouter.get("/dashboard", controller.renderDashboard);
appRouter.get("/reports", controller.renderReports);
appRouter.get("/logs", controller.renderLogs);
appRouter.get("/settings", controller.renderSettings);

appRouter.use("/profile", profileRouter)
