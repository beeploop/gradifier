export class IndexController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  execute(_req, res) {
    /** @type {{title: string}} */
    const locals = {
      title: "Gradifier",
    };

    res.render("pages/index", locals);
  }
}
