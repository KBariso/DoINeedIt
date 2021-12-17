const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth, isAuthorized } = require('../auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.use(requireAuth);

/* Create a GET /comments Route  -- COME BACK TO!!!!*/

router.get('/wishlists/:id(\\d+)/comments', csrfProtection, asyncHandler(async (req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id)
    const comments = await db.Comment.findAll({
        where: {
            wishListId: wishlist.id
        }
    })

    res.render('new-comment', {
        title: 'Comments',
        wishlist,
        comments,
        csrfToken: req.csrfToken()
    })
}));


/* Create a GET /comments/new Route */
router.get('/wishlists/:id(\\d+)/comments/new', csrfProtection, asyncHandler( async(req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id);
    const comment = db.Comment.build();

    res.render('new-comment', {
        title: 'Create Comment',
        wishlist,
        comment,
        csrfToken: req.csrfToken(),
    })
}));

const commentValidators = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Content'),
];


/* Create a POST /comments/new Route */
router.post('/wishlists/:id(\\d+)/comments/new', csrfProtection, commentValidators, asyncHandler(async(req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id);
    const comments = await db.Comment.findAll({
        where: {
            wishListId: wishlist.id
        },
        include: { model: db.User }
    })
    const userId = req.session.auth.userId
    const { content, createdAt } = req.body;
    console.log(userId)
    const comment = db.Comment.build({
        content,
        userId,
        wishListId: wishlist.id,
        createdAt
    });

    const validatorErrors = validationResult(req);
    const authorized = isAuthorized(req.session.auth.userId, wishlist.userId);

    if(validatorErrors.isEmpty()) {
        await comment.save();
        res.redirect(`/wishlists/${wishlist.id}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('wishlist', {
            title: wishlist.name,
            wishlistsByUser,
            wishlist,
            items: wishlist.Items,
            comments,
            authorized,
            errors,
            content,
            totalPrice,
            csrfToken: req.csrfToken(),
        });
    };
}));



/* Create a PUT /comments/:id Route */

router.get('/comments/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res, next) => {
    const comment = await db.Comment.findByPk(req.params.id);
    const wishlist = await db.Wishlist.findByPk(comment.wishListId, {
        include: {
            all: true,
        },
    });
    const comments = await db.Comment.findAll({
        where: {
            wishListId: wishlist.id
        },
        include: {
            all: true
        },
    })
    const wishlistsByUser = await db.Wishlist.findAll({
        where: {
          userId: req.session.auth.userId,
        },
    });
    const authorized = isAuthorized(req.session.auth.userId, comment.userId);

    if(authorized) {
        res.render('edit-comment', {
            title: 'Edit Comment',
            comment,
            comments,
            editId: comment.id,
            wishlistsByUser,
            wishlist,
            items: wishlist.Items,
            csrfToken: req.csrfToken(),
        })
    } else {
        const error = new Error()
        error.status = 404
        next(error)
    }

}));

router.post('/comments/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const commentToUpdate = await db.Comment.findByPk(commentId);
    const wishlist = await db.Wishlist.findByPk(commentToUpdate.wishListId);

    // const authorized = isAuthorized(req.session.auth.userId, comment.id);

    const { content, createdAt } = req.body;

    const comment = {
        content,
        createdAt
    }

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()) {
        await commentToUpdate.update(comment);
        res.redirect(`/wishlists/${wishlist.id}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('new-comment', {
            title: 'Edit Comment',
            comment: { ...comment, commentId },
            errors,
            csrfToken: req.csrfToken()
        });
    }
}));


router.get('/comments/:id(\\d+)/delete', csrfProtection,
asyncHandler(async (req, res, next) => {
    const commentId = parseInt(req.params.id, 10);
    const commentToDelete = await db.Comment.findByPk(commentId);
    const wishlist = await db.Wishlist.findByPk(commentToDelete.wishListId);

    const authorized = isAuthorized(req.session.auth.userId, commentToDelete.userId);

    if(authorized) {
        await commentToDelete.destroy();
        res.redirect(`/wishlists/${wishlist.id}`)
    } else {
        const error = new Error()
        error.status = 404
        next(error)
    }
}))


module.exports = router;
