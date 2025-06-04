import { Request, Response } from "express";

export class HealthController {
    checkHealth(req: Request, res: Response): void {
        res.status(200).json({
            ip: req.ip,
            path: req.path,
            hostname: req.hostname,
            url: req.url,
            method: req.method,
            params: req.params,
            cookies: req.cookies,
        });
    }
}
