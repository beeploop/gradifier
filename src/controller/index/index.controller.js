export class IndexController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  execute(_req, res) {
    res.json({
      greeting: "hello world",
    });
  }
}
