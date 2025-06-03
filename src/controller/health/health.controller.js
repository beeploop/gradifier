export class HealthController {
  /**
   * @param {import('expres').Request} req
   * @param {import('express').Response} res
   */
  execute(_req, res) {
    const data = {
      timestamp: new Date().toUTCString(),
    };

    res.json(data);
  }
}
