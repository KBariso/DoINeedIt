const db = require('./db/models');

const login = (req, res, user) => {
  req.session.auth = {
    userId: user.id
  }
}

const logout = (req, res) => {
  delete req.session.auth;
}

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/users/login');
  }
  return next();
}

const restoreUser = async (req, res, next) => {

  console.log(req.session);

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch(err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
}

const isAuthorized = (req, res, next, ele) => {
  const user = req.session.auth.userId;
  if (user === ele.id) return true;
  else return false;
}

module.exports = {
  login,
  logout,
  requireAuth,
  restoreUser,
  isAuthorized
};
