const express = require("express");

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("../utils");
const { requireAuth, isAuthorized } = require("../auth");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.use(requireAuth);

/* GET items page */

router.get(
  "/wishlists/:id(\\d+)/items",
  asyncHandler(async (req, res) => {
    const wishListId = req.params.id;
    res.redirect(`/wishlists/${wishListId}`);
  })
);

/* GET items by Id page */

router.get(
  "/wishlists/:id(\\d+)/items/:itemId(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const itemId = parseInt(req.params.itemId, 10);
    const wishlistId = parseInt(req.params.id, 10);
    let userId = req.session.auth.userId;
    const item = await db.Item.findByPk(itemId, {
      include: {
        all: true,
      },
    });

    const wishlistsByUser = await db.Wishlist.findAll({
      include: {
        all: true,
      },
      where: {
        userId: req.session.auth.userId,
      },
    });

    const wishlist = await db.Wishlist.findByPk(item.wishListId, {
      include: {
        all: true,
      },
    });

    const comments = await db.Comment.findAll({
      where: {
        wishListId: wishlist.id,
      },
      include: {
        all: true,
      },
      order: [["updatedAt", "DESC"]],
    });

    let items = await db.Item.findAll({
      where: {
        wishListId: wishlistId,
      },
      include: {
        all: true,
      },
    });

    const authorized = isAuthorized(
      req.session.auth.userId,
      item.Wishlist.userId
    );

    res.render("item-details", {
      title: `${item.name}`,
      item,
      items,
      authorized,
      userId,
      wishlistsByUser,
      comments,
      wishlist,
      wishlistId,
      csrfToken: req.csrfToken(),
    });
  })
);

/* GET add item page */

router.get(
  "/wishlists/:id(\\d+)/items/new",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const item = await db.Item.build();
    const categories = await db.Category.findAll();
    res.render("item-new", {
      title: "Add item",
      item,
      categories,
      wishListId: req.params.id,
      csrfToken: req.csrfToken(),
    });
  })
);

const itemValidators = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Item name")
    .isLength({ max: 50 })
    .withMessage("Item name must not be more than 50 characters long"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for price"),
  check("categoryId")
    .exists({ checkFalsy: true })
    .withMessage("Please select a Category"),
];

/* POST add item page */

router.post(
  "/wishlists/:id(\\d+)/items/new",
  csrfProtection,
  itemValidators,
  asyncHandler(async (req, res) => {
    const wishListId = req.params.id;
    const { name, price, link, categoryId } = req.body;

    const categories = await db.Category.findAll();

    const item = await db.Item.build({
      name,
      price,
      link,
      categoryId,
      wishListId,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await item.save();
      res.redirect(`/wishlists/${wishListId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("item-new", {
        title: "Add item",
        item,
        categories,
        wishListId,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

/* GET Edit item page */

router.get(
  "/wishlists/:id(\\d+)/items/:itemId(\\d+)/edit",
  csrfProtection,
  itemValidators,
  asyncHandler(async (req, res, next) => {
    const itemId = parseInt(req.params.itemId, 10);
    const item = await db.Item.findByPk(itemId, {
      include: {
        all: true,
      },
    });
    const categories = await db.Category.findAll();

    const authorized = isAuthorized(
      req.session.auth.userId,
      item.Wishlist.userId
    );
    if (authorized) {
      res.render("item-edit", {
        title: "Edit item",
        item,
        authorized,
        wishListId: req.params.id,
        categories,
        csrfToken: req.csrfToken(),
      });
    } else {
      const error = new Error();
      error.status = 404;
      next(error);
    }
  })
);

/* POST Edit item page */

router.post(
  "/wishlists/:id(\\d+)/items/:itemId(\\d+)/edit",
  csrfProtection,
  itemValidators,
  asyncHandler(async (req, res) => {
    const itemId = parseInt(req.params.itemId, 10);
    const itemToUpdate = await db.Item.findByPk(itemId, {
      include: {
        all: true,
      },
    });
    const wishListId = req.params.id;
    const categories = await db.Category.findAll();
    const { name, price, link, purchased, categoryId } = req.body;

    const item = {
      name,
      price,
      categoryId,
      link,
      purchased,
    };

    const validatorErrors = validationResult(req);



    if (validatorErrors.isEmpty()) {
      await itemToUpdate.update(item);
      res.redirect(`/wishlists/${wishListId}/items/${itemId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("item-edit", {
        title: "Add item",
        item: { ...item, id: itemId },
        categories,
        categoryId,
        wishListId,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

/* DELETE an item */
router.get(
  "/wishlists/:id(\\d+)/items/:itemId(\\d+)/delete",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const wishListId = parseInt(req.params.id, 10);
    const itemId = parseInt(req.params.itemId, 10);
    const item = await db.Item.findByPk(itemId, {
      include: {
        all: true,
      },
    });
    const authorized = isAuthorized(
      req.session.auth.userId,
      item.Wishlist.userId
    );

    if (authorized) {
      await item.destroy();
      return res.redirect(`/wishlists/${wishListId}`);
    } else {
      const error = new Error();
      error.status = 404;
      next(error);
    }
  })
);

module.exports = router;
