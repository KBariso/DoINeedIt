const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.use(requireAuth);

/* GET Wishlists. */


/* GET Wishlists page by Id. */

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id);
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

const wishlistValiditors = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for the Wishlist')
        .isLength({ max: 100 })
        .withMessage('Name must not be more than 100 characters long'),
    check('isPublic')
        .exists({ checkFalsy: true })
        .withMessage('Please verify if you want to make your Wishlist public')
        .isBoolean()
        .withMessage('Privacy setting must be either Public or Private')
]


/* POST a new Wishlist. */
router.post('/', asyncHandler(async (req, res) => {
    const {name, isPublic, description} = req.body;
    const newWishlist = await db.Wishlist.create({
        name,
        isPublic,
        userId: req.session.auth.userId,
        description
    })
    res.redirect(`/wishlists/${newWishlist.id}`)
}))

/* PUT Wishlists page by Id */


/* POST Comments on Wishlists by Id. */



module.exports = router;
