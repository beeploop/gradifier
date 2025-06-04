import { NextFunction, Request, Response } from "express";

export function ensureLoggedIn(req: Request, res: Response, next: NextFunction) {
    const user = req.session.user;
    if (!user) {
        req.flash("error", "invalid session");
        res.redirect("/auth/login");
        return;
    }

    return next();
}

export function preventLogIn(req: Request, res: Response, next: NextFunction) {
    const user = req.session.user;
    if (user) {
        req.flash("error", "already logged in");
        res.redirect("/app/dashboard");
        return;
    }

    return next();
}
