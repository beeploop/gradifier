import { Request, Response } from "express";

export class IndexController {
    renderIndex(_req: Request, res: Response): void {
        res.render("pages/index", {
            title: "Gradifier"
        });
    }
}
