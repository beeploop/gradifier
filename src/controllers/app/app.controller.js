export class AppController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  renderDashboard(_req, res) {
    /**
     * @type {{title: string}}
     */
    const locals = { title: "Gradifier | Dashboard" };
    res.render("pages/app/dashboard", locals);
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  renderReports(_req, res) {
    /**
     * @type {{title: string}}
     */
    const locals = { title: "Gradifier | Reports" };
    res.render("pages/app/reports", locals);
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  renderSettings(_req, res) {
    /**
     * @type {{title: string}}
     */
    const locals = { title: "Gradifier | Settings" };
    res.render("pages/app/settings", locals);
  }
}
