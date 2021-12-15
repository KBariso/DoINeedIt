const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');
const { Op } = require("sequelize")

const router = express.Router();

router.use(requireAuth);

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id);
    console.log(req.session.auth.userId)
    const wishlistsByUser = await db.Wishlist.findAll({
        where: {
            userId: req.session.auth.userId
        }
    })
    console.log("WISHLISTTTT", wishlistsByUser)
    res.render('wishlist', {
        title: wishlist.name,
        wishlistsByUser

    })
}));



module.exports = router;
