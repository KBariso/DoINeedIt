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

    if(validatorErrors.isEmpty()) {
        await comment.save();
        res.redirect(`/wishlists/${wishlist.id}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('new-comment', {
            title: 'Create Comment',
            wishlist,
            comment,
            errors,
            csrfToken: req.csrfToken()
        });
    };
}));



/* Create a PUT /comments/:id Route */

router.get('/comments/edit/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const comments = await db.Comment.findByPk(req.params.id);

    // const authorized = isAuthorized(req.session.auth.userId, comment.id);

    res.render('edit-comment', {
        title: 'Edit Comment',
        comments,
        csrfToken: req.csrfToken(),
    })

}));

router.post('/comments/edit/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    // const wishlist = await db.Wishlist.findByPk(req.params.id);
    const commentId = parseInt(req.params.id, 10);
    const commentToUpdate = await db.Comment.findByPk(commentId);

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



/* Create a DELETE /comments/:id Route */
router.get('/comments/delete/:id(\\d+)', csrfProtection,
asyncHandler(async (req, res) => {
    const comment = await db.Comment.findByPk(req.params.id);

    res.render('delete-comment', {
        title: 'Delete Comment',
        comment,
        csrfToken: req.csrfToken(),
    })
}))


router.post('/comments/delete/:id(\\d+)', csrfProtection,
asyncHandler(async (req, res) => {
    const wishlist = await db.Wishlist.findByPk(req.params.id);
    const comment = await db.Comment.findByPk(req.params.id);
    await comment.destroy()
    res.redirect(`/wishlists/${wishlist.id}`)
}))




module.exports = router;
