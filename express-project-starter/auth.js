const db = require('./db/models');

// To set the user's id in the session
const login = (req, res, user) => {
  req.session.auth = {
    userId: user.id
  }
}

const logout = (req, res) => {
  delete req.session.auth;
}

// To make sure the user is signed in
const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/users/login');
  }
  return next();
}

// To find out if that user is in the database
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

// To check if our user has access to that specific section
const isAuthorized = (userId, eleId) => {
  if (userId === eleId) return true;
  else return false;
}

module.exports = {
  login,
  logout,
  requireAuth,
  restoreUser,
  isAuthorized
};
