import { Request, Response } from "express";
import { PageLocals } from "../../config/type/page_locals";
import { FarmRepository } from "../../repositories/farm.repository";
import { BananaRepository } from "../../repositories/banana.repository";

export class AppController {
    farmRepo: FarmRepository;
    bananaRepo: BananaRepository;

    constructor(farmRepo: FarmRepository, bananaRepo: BananaRepository) {
        this.farmRepo = farmRepo;
        this.bananaRepo = bananaRepo;

        this.renderDashboard = this.renderDashboard.bind(this);
        this.renderReports = this.renderReports.bind(this);
        this.renderLogs = this.renderLogs.bind(this);
        this.renderSettings = this.renderSettings.bind(this);
        this.buildLocals = this.buildLocals.bind(this);
    }

    renderDashboard(req: Request, res: Response) {
        const locals = this.buildLocals(req, { banner: "Dashboard" });
        res.render("pages/app/dashboard", locals)
    }

    renderReports(req: Request, res: Response) {
        const locals = this.buildLocals(req, { banner: "Reports" });
        res.render("pages/app/reports", locals);
    }

    renderLogs(req: Request, res: Response) {
        const locals = this.buildLocals(req, { banner: "Logs" });
        res.render("pages/app/logs", locals);
    }

    renderSettings(req: Request, res: Response) {
        const locals = this.buildLocals(req, { banner: "Settings" });
        res.render("pages/app/settings", locals);
    }

    private buildLocals(req: Request, data?: object) {
        const user = req.session.user!;

        const locals: PageLocals = {
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
