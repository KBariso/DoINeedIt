const express = require('express');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('../utils');
const router = express.Router();

/* GET home page. */

router.get('/', asyncHandler (async function(req, res, next) {
  if(res.locals.authenticated) {
    // const wishlist = await db.
    const userId = req.session.auth.userId
    const recentWishlist = await db.Wishlist.findOne({
      where: {userId},
      order: [['updatedAt', 'DESC']]
    })
    res.redirect(`/wishlists/${recentWishlist.id}`);
  } else {
    res.render('index', { title: 'Do I Need It', authenticated: res.locals.authenticated });
  }
}));



module.exports = router;
