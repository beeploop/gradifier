import { Router } from "express";
import { AuthService } from "../../services/auth/auth.service";
import { AuthController } from "../../controllers/auth/auth.controller";
import { preventLogIn } from "../../middlewares/auth.middleware";

export const authRouter = Router();

const authService = new AuthService();
const controller = new AuthController(authService);

authRouter.get("/login", preventLogIn, controller.renderLogin);
authRouter.post("/login", controller.handleLogin);
authRouter.post("/logout", controller.handleLogout);
