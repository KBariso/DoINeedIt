const express = require('express');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('../utils');
const router = express.Router();

/* GET home page. */

router.get('/', asyncHandler (async function(req, res, next) {
  if(res.locals.authenticated) {
    // const wishlist = await db.
    const userId = req.session.auth.userId
    res.redirect(`/wishlists/${userId}`);
  }
  res.render('index', { title: 'Do I Need It', authenticated: res.locals.authenticated });
}));


module.exports = router;
