/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export function ensureLoggedIn(req, res, next) {
  const admin = req.session.admin;
  if (!admin) {
    req.flash("error", "invalid session");
    res.redirect("/auth/login");
    return;
  }

  return next();
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export function preventLogIn(req, res, next) {
  const admin = req.session.admin;
  if (admin) {
    req.flash("error", "already logged in");
    res.redirect("/app/dashboard");
    return;
  }

  return next();
}
