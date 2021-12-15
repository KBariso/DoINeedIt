const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.use(requireAuth);



/* GET Wishlists page by Id. */

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id, {
        include: {
            model: db.Item
        }
    });

    const wishlistsByUser = await db.Wishlist.findAll({
        where: {
            userId: req.session.auth.userId
        },

    })
    // const items = await db.Items.findAll({
    // })
    console.log("WISHLISTTTT", wishlist)
    res.render('wishlist', {
        title: wishlist.name,
        wishlistsByUser,
        wishlist,
        items: wishlist.Items
    })
}));

/* GET page to create a new Wishlist. */

router.get('/new', csrfProtection, (req, res) => {
    const wishlist = db.Wishlist.build()
    res.render('new-wishlist', {
        title: "Create Wishlist",
        wishlist,
        csrfToken: req.csrfToken()
    })
})


const wishlistValidators = [
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
router.post('/new', csrfProtection, wishlistValidators, asyncHandler(async (req, res) => {
    let {name, isPublic, description} = req.body;
    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
        let newWishlist = await db.Wishlist.create({
            name,
            isPublic,
            userId: req.session.auth.userId,
            description
        })
        res.redirect(`/wishlists/${newWishlist.id}`)
    } else {
        const errors = validatorErrors.array().map(error => error.msg)
        res.render('new-wishlist', {
            title: "Create Wishlist",
            name,
            isPublic,
            description,
            errors,
            csrfToken: req.csrfToken()
        })
    }
}))

/* PUT Wishlists page by Id */
router

/* POST Comments on Wishlists by Id. */



module.exports = router;
