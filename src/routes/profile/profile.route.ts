import { Router } from "express";
import { ProfileController } from "../../controllers/profile/profile.controller";

export const profileRouter = Router();

const controller = new ProfileController();

profileRouter.get("/changeProfile", controller.renderChangeProfile)
profileRouter.post("/changeProfile", controller.handleChangeProfile)
