import { Request, Response } from "express";

type AppPageLocals = {
    title: string,
    user: {
        name: string,
        email: string,
        imageUrl: string,
    },
}

export class AppController {
    constructor() {
        this.renderDashboard = this.renderDashboard.bind(this);
        this.renderReports = this.renderReports.bind(this);
        this.renderLogs = this.renderLogs.bind(this);
        this.renderSettings = this.renderSettings.bind(this);
        this.buildLocals = this.buildLocals.bind(this);
    }

    renderDashboard(req: Request, res: Response) {
        const locals = this.buildLocals(req);
        res.render("pages/app/dashboard", locals)
    }

    renderReports(req: Request, res: Response) {
        const locals = this.buildLocals(req);
        res.render("pages/app/reports", locals);
    }

    renderLogs(req: Request, res: Response) {
        const locals = this.buildLocals(req);
        res.render("pages/app/logs", locals);
    }

    renderSettings(req: Request, res: Response) {
        const locals = this.buildLocals(req);
        res.render("pages/app/settings", locals);
    }

    private buildLocals(req: Request, data?: object) {
        const user = req.session.user!;

        const locals: AppPageLocals = {
            title: "Gradifier | App",
            user: {
                name: user.name,
                email: user.email,
                imageUrl: user.imageUrl || "",
            },
            ...data,
        };

        return locals;
    }
}
