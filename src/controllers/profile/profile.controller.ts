import { Request, Response } from "express";
import { PageLocals } from "../../config/type/page_locals";

export class ProfileController {
    constructor() {
        this.renderChangeProfile = this.renderChangeProfile.bind(this);
        this.handleChangeProfile = this.handleChangeProfile.bind(this);
        this.buildLocals = this.buildLocals.bind(this);
    }

    renderChangeProfile(req: Request, res: Response) {
        const locals = this.buildLocals(req, { banner: "Change Profile" });
        res.render("pages/app/change_profile", locals);
    }

    handleChangeProfile(_req: Request, res: Response) {
        res.redirect("/app/profile/changeProfile")
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
