import { Request, Response } from "express";

export class AppController {
    renderDashboard(_req: Request, res: Response) {
        const locals = { title: "Gradifier | Dashboard" };
        res.render("pages/app/dashboard", locals);
    }

    renderReports(_req: Request, res: Response) {
        const locals = { title: "Gradifier | Reports" };
        res.render("pages/app/reports", locals);
    }

    renderSettings(_req: Request, res: Response) {
        const locals = { title: "Gradifier | Settings" };
        res.render("pages/app/settings", locals);
    }
}
