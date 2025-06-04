import { NextFunction, Request, Response, Router } from "express";
import { AppController } from "../../controllers/app/app.controller";
import { ensureLoggedIn } from "../../middlewares/auth.middleware";

export const appRouter = Router();

const controller = new AppController();

appRouter.use(ensureLoggedIn);
appRouter.use((_req: Request, res: Response, next: NextFunction) => {
    res.locals.layout = "layouts/with_sidebar";
    next();
});

appRouter.get("/dashboard", controller.renderDashboard);
appRouter.get("/reports", controller.renderReports);
appRouter.get("/logs", controller.renderLogs);
appRouter.get("/settings", controller.renderSettings);
