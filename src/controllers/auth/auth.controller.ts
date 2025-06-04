import { Request, Response } from "express";
import { AuthService } from "../../services/auth/auth.service";

export class AuthController {
    authService: AuthService;

    constructor(service: AuthService) {
        this.authService = service;

        this.renderLogin = this.renderLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    renderLogin(req: Request, res: Response): void {
        const locals = {
            title: "Gradifier | Login",
            flash: req.flash("error"),
        };
        res.render("pages/auth/login", locals);
    }

    async handleLogin(req: Request, res: Response): Promise<void> {
        const email = req.body.email;
        const password = req.body.password;

        try {
            if (!email || email === "" || !password || password === "") {
                throw new Error("invalid input");
            }

            const user = await this.authService.login(email, password);
            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
                imageUrl: user.imageUrl,
            };

            res.redirect("/app/dashboard");
        } catch (err) {
            if (err instanceof Error) {
                req.flash("error", err.message);
            } else {
                req.flash("error", "login failed");
            }
            res.redirect("/auth/login");
        }
    }

    async handleLogout(req: Request, res: Response): Promise<void> {
        req.session.destroy((err) => {
            if (err) {
                console.error("Failed to logout user: ", err);
                return res.status(500).send("could not logout");
            }

            res.clearCookie("connect.sid");
            res.redirect("/auth/login");
        });
    }
}
