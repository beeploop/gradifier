import { Router } from "express";
import { AppController } from "../../controllers/app/app.controller.js";
import { ensureLoggedIn } from "../../middlewares/auth.middleware.js";

export const appRouter = Router();

const controller = new AppController();

appRouter.use(ensureLoggedIn);
appRouter.use((_req, res, next) => {
  res.locals.layout = "layouts/with_sidebar";
  next();
});

appRouter.get("/dashboard", controller.renderDashboard);
appRouter.get("/reports", controller.renderReports);
appRouter.get("/settings", controller.renderSettings);
