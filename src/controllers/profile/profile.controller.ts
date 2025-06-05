import { Request, Response } from "express";
import { PageLocals } from "../../config/type/page_locals";
import { StorageService } from "../../services/storage/storage.service";

export class ProfileController {
    storageService: StorageService;

    constructor(storageService: StorageService) {
        this.storageService = storageService;

        this.renderChangeProfile = this.renderChangeProfile.bind(this);
        this.handleChangeProfile = this.handleChangeProfile.bind(this);
        this.buildLocals = this.buildLocals.bind(this);
    }

    renderChangeProfile(req: Request, res: Response) {
        const locals = this.buildLocals(req, {
            banner: "Change Profile",
            flash: req.flash("error"),
        });
        res.render("pages/app/change_profile", locals);
    }

    async handleChangeProfile(req: Request, res: Response) {
        try {
            const user = req.session.user!;

            const file = req.file;
            if (!file) {
                throw new Error("file undefined");
            }

            const uploadpath = await this.storageService.store(file, user.id);
            req.session.user = { ...user, imageUrl: uploadpath };
        } catch (error) {
            if (error instanceof Error) {
                req.flash("error", error.message);
            } else {
                req.flash("error", "upload error");
            }
        } finally {
            res.redirect("/app/profile/changeProfile")
        }
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
