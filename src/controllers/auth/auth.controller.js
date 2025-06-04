import { AuthService } from "../../services/auth/auth.service.js";

export class AuthController {
  /**
   * @type {AuthService}
   */
  authService;

  /**
   * @param {AuthService} service
   */
  constructor(service) {
    this.authService = service;
    this.renderLoginPage = this.renderLoginPage.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  renderLoginPage(req, res) {
    const flash = req.flash("error");

    /**
     * @type {{title: string, flash: string}}
     */
    const locals = { title: "Gradifier | Login", flash: flash };
    res.render("pages/auth/login", locals);
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async handleLogin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
      if (!email || email === "" || !password || password === "") {
        throw new Error("invalid input");
      }

      await this.authService.login(email, password);
      req.session.admin = { email: email };

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

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async handleLogout(req, res) {
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
