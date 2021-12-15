const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');

const router = express.Router();

router.use(requireAuth);

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id);

    res.render('wishlist', {
        title: wishlist.name,

    })
}));



module.exports = router;
