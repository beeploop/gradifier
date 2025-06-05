import { Router } from "express";
import { ProfileController } from "../../controllers/profile/profile.controller";
import { StorageService } from "../../services/storage/storage.service";
import { upload } from "../../middlewares/upload.middleware";

export const profileRouter = Router();

const storage = new StorageService();
const controller = new ProfileController(storage);

profileRouter.get("/changeProfile", controller.renderChangeProfile)
profileRouter.post("/changeProfile", upload.single("file"), controller.handleChangeProfile)
