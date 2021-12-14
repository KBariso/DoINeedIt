const db = require('./db/models');

const login = (req, res, user) => {
  req.session.auth = {
    userId: user.id
  }
}


module.exports = {
  login
};
