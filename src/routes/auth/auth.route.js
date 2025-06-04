import { Router } from "express";
import { AuthController } from "../../controllers/auth/auth.controller.js";
import { AuthService } from "../../services/auth/auth.service.js";
import { preventLogIn } from "../../middlewares/auth.middleware.js";

export const authRouter = Router();

const authService = new AuthService();
const controller = new AuthController(authService);

authRouter.get("/login", preventLogIn, controller.renderLoginPage);
authRouter.post("/login", controller.handleLogin);
authRouter.post("/logout", controller.handleLogout);
