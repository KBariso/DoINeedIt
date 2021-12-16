const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth, isAuthorized } = require('../auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.use(requireAuth);

/* GET items page */

router.get('/', asyncHandler(async (req, res) => {
  const itemsByUser = await db.Item.findAll({
    include: {
      model: db.Wishlist
    },
    order: [['updatedAt', 'DESC']]
  })

  console.log(itemsByUser)
  res.render('items', {
    title: 'Items',
    itemsByUser
  })
}))

/* GET add item page */

router.get('/new', csrfProtection, asyncHandler(async(req, res) => {
  const item = await db.Item.build();
  const categories = await db.Category.findAll();
  res.render('item-new', {
    title: 'Add item',
    item,
    categories,
    csrfToken: req.csrfToken()
  })
}))

const itemValidators = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Item Name')
    .isLength({ max: 50 })
    .withMessage('Park Name must not be more than 50 characters long'),
  check('price')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for price'),
    // .isDecimal({ max: 2})
    // .withMessage('Please enter a valid value for price'),
  check('categoryId')
    .exists({ checkFalsy: true })
    .withMessage('Please select a Category')
]

/* POST add item page */

router.post('/new', csrfProtection, itemValidators, asyncHandler(async(req, res) => {
  const {name, price, link, purchased, categoryId, wishlistId} = req.body;

  const categories = await db.Category.findAll();

  const item = await db.Item.build({
    name,
    price,
    link,
    purchased,
    categoryId,
    wishlistId
  })

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await item.save();
    res.redirect('/items')
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('item-new', {
      title: 'Add item',
      item,
      categories,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}))

/* GET Edit item page */

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res) => {
  const itemId = parseInt(req.params.id, 10)
  const item = await db.Item.findByPk(itemId);
  res.render('item-edit', {
    title: 'Edit item',
    item,
    csrfToken: req.csrfToken()
  })
}))





module.exports = router;
